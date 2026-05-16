import { test, expect } from "@playwright/test";
import { filterGalleryEntriesForArchiveVisibility } from "@/lib/gallery-archived";
import { galleryManifest } from "@/lib/gallery-manifest";

const HOME_GALLERY_GROUPS = [
  "with-design-skill",
  "with-ui-sh-skill",
  "without-design-skill",
  "miscellaneous",
] as const;

function galleryHomeTotalCards(showArchived: boolean) {
  return HOME_GALLERY_GROUPS.reduce((sum, group) => {
    const groupEntries = galleryManifest.filter((e) => e.group === group);
    return sum + filterGalleryEntriesForArchiveVisibility(groupEntries, showArchived).length;
  }, 0);
}

const entries = [
  ["with-design-skill", "composer-1.5"],
  ["with-design-skill", "composer-2.0"],
  ["with-design-skill", "gemini"],
  ["with-design-skill", "gpt-5.4"],
  ["with-design-skill", "gpt-5.5-low"],
  ["with-design-skill", "gpt-5.5-high"],
  ["with-design-skill", "kimi-k-2.5"],
  ["with-design-skill", "kimi-k-2.6"],
  ["with-design-skill", "opus-4.6"],
  ["with-design-skill", "opus-4.7"],
  ["with-design-skill", "glm-5-turbo"],
  ["with-design-skill", "glm-5.1"],
  ["with-ui-sh-skill", "composer-2.0"],
  ["with-ui-sh-skill", "gpt-5.5-low"],
  ["with-ui-sh-skill", "gpt-5.5-high"],
  ["with-ui-sh-skill", "opus-4.7"],
  ["without-design-skill", "composer-1.5"],
  ["without-design-skill", "composer-2.0"],
  ["without-design-skill", "gemini"],
  ["without-design-skill", "gpt-5.4"],
  ["without-design-skill", "gpt-5.5-low"],
  ["without-design-skill", "gpt-5.5-high"],
  ["without-design-skill", "kimi-k-2.5"],
  ["without-design-skill", "kimi-k-2.6"],
  ["without-design-skill", "opus-4.6"],
  ["without-design-skill", "opus-4.7"],
  ["without-design-skill", "glm-5-turbo"],
  ["without-design-skill", "glm-5.1"],
  ["miscellaneous", "gpt-5.4"],
] as const;

test("home page hides superseded-generation cards until Show Archived", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Which AI Made This?" })).toBeVisible();
  await expect(page.getByTestId("gallery-card")).toHaveCount(galleryHomeTotalCards(false));

  for (const button of await page.getByRole("button", { name: "Show Archived" }).all()) {
    await button.click();
  }

  await expect(page.getByTestId("gallery-card")).toHaveCount(galleryHomeTotalCards(true));
  await expect(page.locator('a[title="Compare"]')).toHaveCount(entries.length);
});

test("rankings page lists eight models with previews", async ({ page }) => {
  await page.goto("/rankings");
  await expect(page.getByRole("heading", { name: "Model rankings" })).toBeVisible();
  await expect(page.getByRole("listitem")).toHaveCount(8);
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
  await page.getByRole("link", { name: /Back to Which AI Made This/ }).click();
  await expect(page).toHaveURL("/");

  const shellStylesAfterReturn = await page.evaluate(() => ({
    htmlBackgroundColor: window.getComputedStyle(document.documentElement).backgroundColor,
    bodyBackgroundImage: window.getComputedStyle(document.body).backgroundImage,
  }));

  expect(shellStylesAfterReturn).toEqual(initialShellStyles);
});

test("gallery switcher text colors stay isolated from generated variant CSS", async ({ page }) => {
  await page.goto("/with-design-skill/gpt-5.5-low/1");

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
    home: "lab(34.924 0 0)",
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
    generationBackground: "#fbfaf6",
  });
});

for (const [group, model] of entries) {
  const entry = galleryManifest.find((item) => item.group === group && item.model === model);
  if (!entry) {
    throw new Error(`Missing gallery manifest entry for ${group}/${model}`);
  }

  test(`model page renders for ${group}/${model}`, async ({ page }) => {
    await page.goto(`/${group}/${model}`);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator("article")).toHaveCount(entry.iterations.length);
  });

  for (const iteration of entry.iterations.map((item) => item.id)) {
    test(`iteration page renders for ${group}/${model}/${iteration}`, async ({ page }) => {
      await page.goto(`/${group}/${model}/${iteration}`);
      await expect(page.getByRole("main").first()).toBeVisible();
    });
  }
}
