import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";
import { chromium } from "@playwright/test";

const entries = [
  { group: "with-design-skill", model: "composer-1.5", iterations: ["1", "2", "3", "4", "5"] },
  { group: "with-design-skill", model: "composer-2.0", iterations: ["1", "2", "3", "4", "5"] },
  { group: "with-design-skill", model: "gemini", iterations: ["1", "2", "3", "4", "5"] },
  { group: "with-design-skill", model: "gpt-5.4", iterations: ["1", "2", "3", "4", "5"] },
  { group: "with-design-skill", model: "gpt-5.5-low", iterations: ["1", "2", "3", "4", "5"] },
  { group: "with-design-skill", model: "gpt-5.5-high", iterations: ["1", "2", "3", "4", "5"] },
  { group: "with-design-skill", model: "kimi-k-2.5", iterations: ["1", "2", "3", "4", "5"] },
  { group: "with-design-skill", model: "kimi-k-2.6", iterations: ["1", "2", "3", "4", "5"] },
  { group: "with-design-skill", model: "opus-4.6", iterations: ["1", "2", "3", "4", "5"] },
  { group: "with-design-skill", model: "opus-4.7", iterations: ["1", "2", "3", "4", "5"] },
  { group: "with-design-skill", model: "glm-5-turbo", iterations: ["1", "2", "3", "4", "5"] },
  { group: "with-design-skill", model: "glm-5.1", iterations: ["1", "2", "3", "4", "5"] },
  { group: "with-ui-sh-skill", model: "composer-2.0", iterations: ["1", "2", "3", "4", "5"] },
  { group: "with-ui-sh-skill", model: "gpt-5.5-low", iterations: ["1", "2", "3", "4", "5"] },
  { group: "with-ui-sh-skill", model: "gpt-5.5-high", iterations: ["1", "2", "3", "4", "5"] },
  { group: "with-ui-sh-skill", model: "opus-4.7", iterations: ["1", "2", "3", "4", "5"] },
  { group: "without-design-skill", model: "composer-1.5", iterations: ["1", "2", "3", "4", "5"] },
  { group: "without-design-skill", model: "composer-2.0", iterations: ["1", "2", "3", "4", "5"] },
  { group: "without-design-skill", model: "gemini", iterations: ["1", "2", "3", "4", "5"] },
  { group: "without-design-skill", model: "gpt-5.4", iterations: ["1", "2", "3", "4", "5"] },
  { group: "without-design-skill", model: "gpt-5.5-low", iterations: ["1", "2", "3", "4", "5"] },
  { group: "without-design-skill", model: "gpt-5.5-high", iterations: ["1", "2", "3", "4", "5"] },
  { group: "without-design-skill", model: "kimi-k-2.5", iterations: ["1", "2", "3", "4", "5"] },
  { group: "without-design-skill", model: "kimi-k-2.6", iterations: ["1", "2", "3", "4", "5"] },
  { group: "without-design-skill", model: "opus-4.6", iterations: ["1", "2", "3", "4", "5"] },
  { group: "without-design-skill", model: "opus-4.7", iterations: ["1", "2", "3", "4", "5"] },
  { group: "without-design-skill", model: "glm-5-turbo", iterations: ["1", "2", "3", "4", "5"] },
  { group: "without-design-skill", model: "glm-5.1", iterations: ["1", "2", "3", "4", "5"] },
];

const targetModel = process.env.TARGET_MODEL ?? null;
const targetGroup = process.env.TARGET_GROUP ?? null;

const baseUrl = "http://127.0.0.1:3000";
const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";

/** Let CSS/JS animations settle before every screenshot. */
const PREVIEW_SETTLE_MS = 5000;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function writeScreenshotWithRetry(outputPath, buffer) {
  const attempts = 6;
  for (let i = 0; i < attempts; i++) {
    try {
      await writeFile(outputPath, buffer);
      return;
    } catch (err) {
      if (i === attempts - 1) {
        throw err;
      }
      await new Promise((r) => setTimeout(r, 120 * (i + 1)));
    }
  }
}

async function waitForServer(url, timeoutMs = 120_000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return;
      }
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  throw new Error(`Timed out waiting for ${url}`);
}

async function main() {
  const devServer = spawn(npmCommand, ["run", "dev"], {
    cwd: process.cwd(),
    stdio: "inherit",
    shell: true,
  });

  try {
    await waitForServer(baseUrl);

    const browser = await chromium.launch();
    const page = await browser.newPage({ viewport: { width: 1440, height: 960 } });

    for (const entry of entries) {
      if (targetModel && entry.model !== targetModel) {
        continue;
      }
      if (targetGroup && entry.group !== targetGroup) {
        continue;
      }

      const { group, model, iterations } = entry;
      const outputDir = path.join(process.cwd(), "public", "gallery-previews", group, model);
      if (!existsSync(outputDir)) {
        await mkdir(outputDir, { recursive: true });
      }

      for (const iteration of iterations) {
        const url = `${baseUrl}/${group}/${model}/${iteration}?preview=1`;
        const outputPath = path.join(outputDir, `${iteration}.webp`);
        const response = await page.goto(url, { waitUntil: "networkidle" });
        if (!response || !response.ok()) {
          throw new Error(`Preview capture failed for ${url} with status ${response?.status() ?? "unknown"}`);
        }

        const bodyText = await page.locator("body").innerText();
        if (bodyText.includes("This page could not be found.")) {
          throw new Error(`Preview capture resolved to a 404 page for ${url}`);
        }

        await sleep(PREVIEW_SETTLE_MS);

        const pngBuffer = await page.screenshot();
        const webpBuffer = await sharp(pngBuffer).webp({ quality: 85 }).toBuffer();
        await writeScreenshotWithRetry(outputPath, webpBuffer);
      }
    }

    await browser.close();
  } finally {
    devServer.kill("SIGINT");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
