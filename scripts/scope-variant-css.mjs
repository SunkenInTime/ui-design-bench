import fs from "node:fs/promises";
import path from "node:path";
import postcss from "postcss";
import selectorParser from "postcss-selector-parser";

const VARIANTS_DIR = path.join(process.cwd(), "src", "variants");
const OUTPUT_DIR = path.join(process.cwd(), "src", "generated", "scoped-variant-css");
const SCOPE_CLASS = "gallery-generation";
const ANIMATION_GLOBALS = new Set([
  "none",
  "inherit",
  "initial",
  "revert",
  "revert-layer",
  "unset",
]);

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function findCssFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return findCssFiles(entryPath);
      }
      return entry.isFile() && entry.name.endsWith(".css") ? [entryPath] : [];
    }),
  );

  return files.flat();
}

function cssSafePath(input) {
  return input.replace(/[^a-zA-Z0-9_-]+/g, "-").replace(/^-+|-+$/g, "");
}

function buildOutputPath(sourcePath) {
  const relative = path.relative(VARIANTS_DIR, sourcePath);
  return path.join(OUTPUT_DIR, relative);
}

function buildKeyframePrefix(sourcePath) {
  const relative = path.relative(VARIANTS_DIR, sourcePath).replace(/\.css$/, "");
  return `gallery-${cssSafePath(relative)}-`;
}

function getVariantScope(sourcePath) {
  const [group, model] = path.relative(VARIANTS_DIR, sourcePath).split(path.sep);
  if (!group || !model) {
    throw new Error(`Could not derive variant scope for ${sourcePath}`);
  }

  return `:where(.${SCOPE_CLASS}[data-gallery-group="${group}"][data-gallery-model="${model}"])`;
}

function createScopeNodes(scopeSelector) {
  return selectorParser().astSync(scopeSelector).first.nodes.map((node) => node.clone());
}

function isScopeNode(node) {
  if (node?.type !== "pseudo" || node.value !== ":where") {
    return false;
  }

  return node.nodes?.some((selector) =>
    selector.nodes?.some((child) => child.type === "class" && child.value === SCOPE_CLASS),
  );
}

function isRootishNode(node) {
  return (
    (node.type === "tag" && (node.value === "html" || node.value === "body")) ||
    (node.type === "pseudo" && node.value === ":root")
  );
}

function firstMeaningfulNode(selector) {
  return selector.nodes.find((node) => node.type !== "combinator" && node.type !== "comment");
}

function startsWithScope(selector) {
  const first = firstMeaningfulNode(selector);
  return (first?.type === "class" && first.value === SCOPE_CLASS) || isScopeNode(first);
}

function removeDuplicateRootAfterScope(selector) {
  const nodes = selector.nodes;
  const scopeIndex = nodes.findIndex(isScopeNode);
  if (scopeIndex === -1) {
    return;
  }

  const next = nodes[scopeIndex + 1];
  const afterNext = nodes[scopeIndex + 2];
  if (next?.type === "combinator" && afterNext && isRootishNode(afterNext)) {
    next.remove();
    afterNext.remove();
  }
}

function scopeSelector(selector, variantScope) {
  return selectorParser((selectors) => {
    selectors.each((currentSelector) => {
      if (startsWithScope(currentSelector)) {
        return;
      }

      const rootishNodes = [];
      currentSelector.walk((node) => {
        if (isRootishNode(node)) {
          rootishNodes.push(node);
        }
      });

      if (rootishNodes.length > 0) {
        rootishNodes.forEach((node) => {
          node.replaceWith(...createScopeNodes(variantScope));
        });
        removeDuplicateRootAfterScope(currentSelector);
        return;
      }

      currentSelector.prepend(selectorParser.combinator({ value: " " }));
      currentSelector.prepend(...createScopeNodes(variantScope));
    });
  }).processSync(selector);
}

function collectKeyframes(root, prefix) {
  const keyframes = new Map();
  root.walkAtRules((rule) => {
    if (rule.name.endsWith("keyframes") && rule.params) {
      const original = rule.params.trim();
      const scoped = `${prefix}${cssSafePath(original)}`;
      keyframes.set(original, scoped);
      rule.params = scoped;
    }
  });
  return keyframes;
}

function rewriteAnimationValue(value, keyframes) {
  if (!value || keyframes.size === 0) {
    return value;
  }

  return value.replace(/(^|[\s,])(-?[_a-zA-Z][_a-zA-Z0-9-]*)(?=($|[\s,]))/g, (match, prefix, name) => {
    if (ANIMATION_GLOBALS.has(name) || !keyframes.has(name)) {
      return match;
    }
    return `${prefix}${keyframes.get(name)}`;
  });
}

function stripGlobalTailwindRules(root) {
  root.walkAtRules((rule) => {
    if (rule.name === "import" && /["']tailwindcss["']/.test(rule.params)) {
      rule.remove();
      return;
    }

    if (rule.name === "theme") {
      rule.remove();
    }
  });
}

async function scopeCssFile(sourcePath) {
  const css = await fs.readFile(sourcePath, "utf8");
  const root = postcss.parse(css, { from: sourcePath });
  const variantScope = getVariantScope(sourcePath);
  const keyframes = collectKeyframes(root, buildKeyframePrefix(sourcePath));

  stripGlobalTailwindRules(root);

  root.walkRules((rule) => {
    if (rule.parent?.type === "atrule" && rule.parent.name.endsWith("keyframes")) {
      return;
    }

    rule.selector = scopeSelector(rule.selector, variantScope);
  });

  root.walkDecls((declaration) => {
    if (declaration.prop === "animation" || declaration.prop === "animation-name") {
      declaration.value = rewriteAnimationValue(declaration.value, keyframes);
    }
  });

  const outputPath = buildOutputPath(sourcePath);
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, root.toString(), "utf8");

  return outputPath;
}

async function main() {
  if (!(await pathExists(VARIANTS_DIR))) {
    throw new Error(`Missing variants directory: ${VARIANTS_DIR}`);
  }

  await fs.rm(OUTPUT_DIR, { recursive: true, force: true });
  const cssFiles = await findCssFiles(VARIANTS_DIR);
  const outputs = await Promise.all(cssFiles.map(scopeCssFile));
  console.log(`Scoped ${outputs.length} variant CSS files into ${path.relative(process.cwd(), OUTPUT_DIR)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
