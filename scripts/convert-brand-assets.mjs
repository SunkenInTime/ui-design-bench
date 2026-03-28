/**
 * Rasterize Claude SVG and convert PNG brand sources to WebP in public/.
 * Sources live in scripts/brand-assets-source/ (OpenAI stays as public/openai-gpt.svg).
 * Run from repo root: node scripts/convert-brand-assets.mjs
 */
import sharp from "sharp";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, "brand-assets-source");
const OUT = join(__dirname, "../public");

const MAX = 256;

async function main() {
  await sharp(join(SRC, "claude-logo.svg"))
    .resize(MAX, MAX, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .webp({ quality: 88 })
    .toFile(join(OUT, "anthropic-claude.webp"));

  const pngJobs = [
    ["cursor-icon.png", "cursor-composer.webp"],
    ["gemini-color.png", "google-gemini.webp"],
    ["Kimi-logo.png", "kimi-k2.webp"],
  ];

  for (const [file, outName] of pngJobs) {
    await sharp(join(SRC, file))
      .resize(MAX, MAX, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 88 })
      .toFile(join(OUT, outName));
  }

  console.log("Wrote WebP brand assets to public/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
