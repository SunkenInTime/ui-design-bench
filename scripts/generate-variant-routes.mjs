import { readdir, rm, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const variantsRoot = path.join(projectRoot, "src", "variants");
const appRoot = path.join(projectRoot, "src", "app");
const outputRoot = path.join(appRoot, "(generated-variant-routes)");
const nextRoot = path.join(projectRoot, ".next");

if (path.dirname(outputRoot) !== appRoot) {
  throw new Error(`Refusing to generate routes outside the app directory: ${outputRoot}`);
}

const iterationIds = ["1", "2", "3", "4", "5"];

function pageSource({ group, model, preview }) {
  const componentName = preview ? "PreviewIterationPage" : "IterationPage";
  return `import "./variant-tailwind.css";
import { GalleryIterationView } from "@/components/gallery/gallery-iteration-view";
import variantModule from "@/variants/${group}/${model}";

export const dynamicParams = false;

export function generateStaticParams() {
  return ${JSON.stringify(iterationIds)}.map((iteration) => ({ iteration }));
}

export default async function ${componentName}({
  params,
}: {
  params: Promise<{ iteration: string }>;
}) {
  const { iteration } = await params;
  return (
    <GalleryIterationView
      group=${JSON.stringify(group)}
      model=${JSON.stringify(model)}
      iteration={iteration}
      preview={${preview}}
      variantModule={variantModule}
    />
  );
}
`;
}

await rm(outputRoot, { recursive: true, force: true });
// Route type validators are incremental and can retain imports for the two
// generic routes this generator replaces.
await Promise.all(
  [path.join(nextRoot, "types"), path.join(nextRoot, "dev", "types")].map((target) =>
    rm(target, { recursive: true, force: true }),
  ),
);

let generatedPages = 0;
const groups = await readdir(variantsRoot, { withFileTypes: true });
for (const groupEntry of groups) {
  if (!groupEntry.isDirectory()) continue;
  const group = groupEntry.name;
  const models = await readdir(path.join(variantsRoot, group), { withFileTypes: true });

  for (const modelEntry of models) {
    if (!modelEntry.isDirectory()) continue;
    const model = modelEntry.name;
    const variantDir = path.join(variantsRoot, group, model);
    const files = await readdir(variantDir);
    if (!files.includes("index.tsx")) continue;

    for (const preview of [false, true]) {
      const routeDir = preview
        ? path.join(outputRoot, "preview", group, model, "[iteration]")
        : path.join(outputRoot, group, model, "[iteration]");
      await mkdir(routeDir, { recursive: true });
      await writeFile(
        path.join(routeDir, "page.tsx"),
        pageSource({ group, model, preview }),
        "utf8",
      );
      const relativeVariantDir = path.relative(routeDir, variantDir).split(path.sep).join("/");
      await writeFile(
        path.join(routeDir, "variant-tailwind.css"),
        `@layer theme, utilities;\n@import "tailwindcss/theme.css" layer(theme);\n@import "tailwindcss/utilities.css" layer(utilities) source(none);\n@source "${relativeVariantDir}";\n`,
        "utf8",
      );
      generatedPages += 1;
    }
  }
}

console.log(`Generated ${generatedPages} model-specific route modules in ${path.relative(projectRoot, outputRoot)}`);
