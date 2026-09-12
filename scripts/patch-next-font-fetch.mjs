import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const target = fileURLToPath(
  new URL(
    "../node_modules/next/dist/compiled/@next/font/dist/google/fetch-resource.js",
    import.meta.url,
  ),
);

const chromeUserAgent = `                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) ' +
                    'AppleWebKit/537.36 (KHTML, like Gecko) ' +
                    'Chrome/104.0.0.0 Safari/537.36',`;
const compatibilityUserAgent = `                'User-Agent': 'Mozilla/5.0',`;

const source = await readFile(target, "utf8");

if (source.includes(compatibilityUserAgent)) {
  console.log("Next font fetch already uses the stable compatibility response");
} else if (source.includes(chromeUserAgent)) {
  await writeFile(
    target,
    source.replace(chromeUserAgent, compatibilityUserAgent),
    "utf8",
  );
  console.log("Patched Next font fetch to avoid stale Google Fonts WOFF2 URLs");
} else {
  throw new Error(
    "Next's Google Fonts fetcher changed; review the compatibility patch before building",
  );
}
