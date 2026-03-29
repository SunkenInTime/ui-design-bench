import { test, expect } from "@playwright/test";

const entries = [
  ["with-design-skill", "composer-1.5"],
  ["with-design-skill", "composer-2.0"],
  ["with-design-skill", "gemini"],
  ["with-design-skill", "gpt-5.4"],
  ["with-design-skill", "kimi-k-2.5"],
  ["with-design-skill", "opus-4.6"],
  ["without-design-skill", "composer-1.5"],
  ["without-design-skill", "composer-2.0"],
  ["without-design-skill", "gemini"],
  ["without-design-skill", "gpt-5.4"],
  ["without-design-skill", "kimi-k-2.5"],
  ["without-design-skill", "opus-4.6"],
] as const;

test("home page renders twelve model cards", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Which AI Made This?" })).toBeVisible();
  await expect(page.locator("article")).toHaveCount(12);
});

test("rankings page lists six models with previews", async ({ page }) => {
  await page.goto("/rankings");
  await expect(page.getByRole("heading", { name: "Model rankings" })).toBeVisible();
  await expect(page.getByRole("listitem")).toHaveCount(6);
});

test("gallery shell background stays light after client navigation into a variant", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");

  const initialShellStyles = await page.evaluate(() => ({
    htmlBackgroundColor: window.getComputedStyle(document.documentElement).backgroundColor,
    bodyBackgroundImage: window.getComputedStyle(document.body).backgroundImage,
  }));

  await page.locator("a[href='/without-design-skill/composer-2.0/1']").first().click();
  await expect(page).toHaveURL("/without-design-skill/composer-2.0/1");
  await page.getByRole("link", { name: /Gallery/ }).click();
  await expect(page).toHaveURL("/");

  const shellStylesAfterReturn = await page.evaluate(() => ({
    htmlBackgroundColor: window.getComputedStyle(document.documentElement).backgroundColor,
    bodyBackgroundImage: window.getComputedStyle(document.body).backgroundImage,
  }));

  expect(shellStylesAfterReturn).toEqual(initialShellStyles);
});

for (const [group, model] of entries) {
  test(`model page renders for ${group}/${model}`, async ({ page }) => {
    await page.goto(`/${group}/${model}`);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator("article")).toHaveCount(5);
  });

  for (const iteration of ["1", "2", "3", "4", "5"]) {
    test(`iteration page renders for ${group}/${model}/${iteration}`, async ({ page }) => {
      await page.goto(`/${group}/${model}/${iteration}`);
      await expect(page.getByRole("main").first()).toBeVisible();
    });
  }
}
