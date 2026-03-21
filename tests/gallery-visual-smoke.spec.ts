import { test, expect } from "@playwright/test";

test("variant header hides in preview mode", async ({ page }) => {
  await page.goto("/with-design-skill/gpt-5.4/1?preview=1");
  await expect(page.getByRole("heading", { name: "GPT-5.4" })).toHaveCount(0);
});

test("gallery header renders in normal mode", async ({ page }) => {
  await page.goto("/without-design-skill/composer-2.0/2");
  await expect(page.getByRole("heading", { name: "Composer 2.0" })).toBeVisible();
});

test("mobile layout stays navigable", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Browse every generated variation from one Next.js site." })).toBeVisible();
});
