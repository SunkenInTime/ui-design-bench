import { test, expect } from "@playwright/test";
import { galleryManifest } from "@/lib/gallery-manifest";

const HOME_GALLERY_GROUPS = [
  "with-design-skill",
  "with-taste-skill",
  "with-ui-sh-skill",
  "without-design-skill",
  "miscellaneous",
] as const;

const LATEST_ROUTE_SMOKE_COUNT = 5;

const latestRouteSmokeCases = galleryManifest
  .slice(-LATEST_ROUTE_SMOKE_COUNT)
  .map((entry) => ({
    group: entry.group,
    model: entry.model,
    iteration: entry.defaultIteration,
    source: "latest",
  }));

const sampleRouteSmokeCases = [
  { group: "with-design-skill", model: "composer-2.5", iteration: "5" },
  { group: "with-design-skill", model: "grok-4.5", iteration: "3" },
  { group: "with-design-skill", model: "kimi-k3", iteration: "3" },
  { group: "with-taste-skill", model: "kimi-k3", iteration: "3" },
  { group: "without-design-skill", model: "kimi-k3", iteration: "3" },
  { group: "with-design-skill", model: "gpt-5.5-high", iteration: "3" },
  { group: "with-taste-skill", model: "fable", iteration: "4" },
  { group: "with-ui-sh-skill", model: "composer-2.0", iteration: "2" },
  { group: "miscellaneous", model: "gpt-5.4", iteration: "5" },
  { group: "with-design-skill", model: "sol", iteration: "1" },
  { group: "with-taste-skill", model: "sol", iteration: "3" },
  { group: "without-design-skill", model: "sol", iteration: "5" },
  { group: "with-design-skill", model: "luna", iteration: "1" },
  { group: "with-taste-skill", model: "luna", iteration: "3" },
  { group: "without-design-skill", model: "luna", iteration: "5" },
  { group: "with-design-skill", model: "terra", iteration: "1" },
  { group: "with-taste-skill", model: "terra", iteration: "3" },
  { group: "without-design-skill", model: "terra", iteration: "5" },
] as const;

const routeSmokeCases = [
  ...latestRouteSmokeCases,
  ...sampleRouteSmokeCases.map((route) => ({ ...route, source: "sample" })),
];

test("home page archives Opus 4.7 cards", async ({ page }) => {
  await page.goto("/");
  const opus47Cards = page.getByTestId("gallery-card").filter({ hasText: "Opus 4.7" });
  await expect(opus47Cards).toHaveCount(0);

  while ((await page.getByRole("button", { name: "Show Archived" }).count()) > 0) {
    await page.getByRole("button", { name: "Show Archived" }).first().click();
  }

  const archivedOpus47Count = galleryManifest.filter((e) => e.model === "opus-4.7").length;
  await expect(opus47Cards).toHaveCount(archivedOpus47Count);
  await expect(opus47Cards.first().getByLabel("Archiving soon")).toHaveCount(0);
});

test("home page hides superseded-generation cards until Show Archived", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Which AI Made This?" })).toBeVisible();
  const initialCardCount = await page.getByTestId("gallery-card").count();
  expect(initialCardCount).toBeGreaterThan(0);
  await expect(page.getByTestId("gallery-card").filter({ hasText: "Sonnet 5" })).toHaveCount(
    galleryManifest.filter((e) => HOME_GALLERY_GROUPS.includes(e.group) && e.model === "sonnet-5").length,
  );
  await expect(page.getByTestId("gallery-card").filter({ hasText: "GPT 5.5 low" })).toHaveCount(0);
  await expect(page.getByTestId("gallery-card").filter({ hasText: "Opus 4.8" })).toHaveCount(
    galleryManifest.filter((e) => HOME_GALLERY_GROUPS.includes(e.group) && e.model === "opus-4.8").length,
  );
  await expect(page.getByTestId("gallery-card").filter({ hasText: "Opus 4.7" })).toHaveCount(0);

  while ((await page.getByRole("button", { name: "Show Archived" }).count()) > 0) {
    await page.getByRole("button", { name: "Show Archived" }).first().click();
  }

  await expect.poll(() => page.getByTestId("gallery-card").count()).toBeGreaterThan(initialCardCount);
  await expect(page.getByTestId("gallery-card").filter({ hasText: "GPT 5.5 low" })).toHaveCount(
    galleryManifest.filter((e) => HOME_GALLERY_GROUPS.includes(e.group) && e.model === "gpt-5.5-low").length,
  );
  await expect(page.locator('a[title="Compare"]')).toHaveCount(await page.getByTestId("gallery-card").count());
});

test("home page sorts newer same-family models first", async ({ page }) => {
  await page.goto("/");
  while ((await page.getByRole("button", { name: "Show Archived" }).count()) > 0) {
    await page.getByRole("button", { name: "Show Archived" }).first().click();
  }

  const withDesignSection = page.locator("section").filter({ has: page.getByRole("heading", { name: "With Design Skill" }) });
  const cardLabels = await withDesignSection.getByTestId("gallery-card").locator("h3 span").allInnerTexts();

  expect(cardLabels.indexOf("Fable 5")).toBeLessThan(cardLabels.indexOf("Opus 4.8"));
});

test("rankings page lists eight models with previews", async ({ page }) => {
  await page.goto("/rankings");
  await expect(page.getByRole("heading", { name: "Model rankings" })).toBeVisible();
  await expect(page.getByRole("listitem")).toHaveCount(8);
});

test("gallery shell background stays consistent after client navigation into a variant", async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem("gallery-color-scheme", "dark");
  });
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  await expect
    .poll(() => page.evaluate(() => document.documentElement.classList.contains("dark")))
    .toBe(true);

  const initialShellStyles = await page.evaluate(() => ({
    htmlBackgroundColor: window.getComputedStyle(document.documentElement).backgroundColor,
    bodyBackgroundColor: window.getComputedStyle(document.body).backgroundColor,
    isDark: document.documentElement.classList.contains("dark"),
  }));

  expect(initialShellStyles.isDark).toBe(true);

  await page.locator("a[href='/without-design-skill/fable/1']").first().click();
  await expect(page).toHaveURL("/without-design-skill/fable/1");
  await page.getByRole("link", { name: /Back to Which AI Made This/ }).click();
  await expect(page).toHaveURL("/");

  const shellStylesAfterReturn = await page.evaluate(() => ({
    htmlBackgroundColor: window.getComputedStyle(document.documentElement).backgroundColor,
    bodyBackgroundColor: window.getComputedStyle(document.body).backgroundColor,
    isDark: document.documentElement.classList.contains("dark"),
  }));

  expect(shellStylesAfterReturn).toEqual(initialShellStyles);
});

test("gallery switcher text colors stay isolated from generated variant CSS", async ({ page }) => {
  await page.goto("/with-design-skill/gpt-5.5-high/1");

  const homeLink = page.getByRole("link", { name: /Back to Which AI Made This/ });
  const activeIteration = page.getByRole("link", { name: "Open iteration 1" });
  const inactiveIteration = page.getByRole("link", { name: "Open iteration 2" });

  await expect(homeLink).toBeVisible();
  await expect(activeIteration).toBeVisible();
  await expect(inactiveIteration).toBeVisible();

  const switcherColors = await page.evaluate(() => {
    const home = document.querySelector<HTMLAnchorElement>('nav[aria-label$="gallery navigation"] a[href="/"]');
    const active = document.querySelector<HTMLAnchorElement>(
      'nav[aria-label$="gallery navigation"] a[aria-current="page"]',
    );
    const inactive = document.querySelector<HTMLAnchorElement>(
      'nav[aria-label$="gallery navigation"] a[aria-label="Open iteration 2"]',
    );

    if (!home || !active || !inactive) {
      throw new Error("Missing gallery switcher controls");
    }

    return {
      active: window.getComputedStyle(active).color,
      inactive: window.getComputedStyle(inactive).color,
      home: window.getComputedStyle(home).color,
    };
  });

  expect(switcherColors).toEqual({
    active: "rgb(250, 250, 250)",
    inactive: "rgb(82, 82, 82)",
    home: "rgb(82, 82, 82)",
  });

  const cssVariables = await page.evaluate(() => {
    const generation = document.querySelector<HTMLElement>("[data-gallery-generation]");
    if (!generation) {
      throw new Error("Missing generation scope");
    }

    return {
      rootBackground: window
        .getComputedStyle(document.documentElement)
        .getPropertyValue("--background")
        .trim(),
      generationBackground: window
        .getComputedStyle(generation)
        .getPropertyValue("--background")
        .trim(),
    };
  });

  expect(cssVariables).toEqual({
    rootBackground: "",
    generationBackground: "#fff",
  });
});

for (const { group, model, iteration, source } of routeSmokeCases) {
  const entry = galleryManifest.find((item) => item.group === group && item.model === model);
  if (!entry) {
    throw new Error(`Missing gallery manifest entry for ${group}/${model}`);
  }

  const routeIteration = entry.iterations.find((item) => item.id === iteration);
  if (!routeIteration) {
    throw new Error(`Missing gallery manifest iteration for ${group}/${model}/${iteration}`);
  }

  test(`${source} iteration page renders for ${group}/${model}/${iteration}`, async ({ page }) => {
    await page.goto(`/${group}/${model}/${iteration}`);
    await expect(page.getByRole("main").first()).toBeVisible();
  });
}
