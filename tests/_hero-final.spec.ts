import { test } from "@playwright/test";

const TREATMENTS = ["wave", "magnetic", "ink", "pixel"] as const;

for (const id of TREATMENTS) {
  test(`hero: ${id}`, async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 700 });
    await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
    await page.getByRole("tab", { name: new RegExp(`^${id}$`, "i") }).click();
    const title = page.locator(".home-hero__title");
    const box = await title.boundingBox();
    if (!box) throw new Error("no title box");
    // Hover slightly into the title to engage the cursor effects.
    await page.mouse.move(box.x + box.width * 0.55, box.y + box.height * 0.45);
    await page.waitForTimeout(700);
    await page.screenshot({
      path: `test-results/hero-${id}.png`,
      clip: {
        x: Math.max(0, box.x - 8),
        y: Math.max(0, box.y - 8),
        width: Math.min(900, box.width + 24),
        height: Math.min(220, box.height + 80),
      },
    });
  });
}
