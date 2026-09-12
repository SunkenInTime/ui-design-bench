import { test, expect } from "@playwright/test";
import { buildCompareHrefForSelection } from "@/lib/compare";

const selection = { group: "with-design-skill", model: "composer-1.5", iteration: "1" } as const;
const route = "/with-design-skill/composer-1.5/1";

test.beforeEach(async ({ page }) => {
  await page.goto(route);
  // Opening the picker proves the switcher has hydrated and attached its listeners.
  await page.getByRole("button", { name: "Switch model from Composer 1.5" }).click();
  await expect(page.getByRole("textbox", { name: "Search models", exact: true })).toBeFocused();
  await page.keyboard.press("Escape");
});

for (const key of ["h", "Shift+H", "H"]) {
  test(`${key} navigates home`, async ({ page }) => {
    await page.keyboard.press(key);
    await expect(page).toHaveURL("/");
  });
}

for (const key of ["c", "Shift+C", "C"]) {
  test(`${key} navigates to comparison`, async ({ page }) => {
    await page.keyboard.press(key);
    await expect(page).toHaveURL(buildCompareHrefForSelection(selection));
  });
}

test("number shortcuts follow the current iteration and stop after leaving the gallery", async ({ page }) => {
  for (const iteration of ["2", "3", "4", "5", "1"] as const) {
    await page.keyboard.press(iteration);
    await expect(page).toHaveURL(`/with-design-skill/composer-1.5/${iteration}`);
    await expect(page.getByRole("link", { name: `Open iteration ${iteration}`, exact: true })).toHaveAttribute("aria-current", "page");
  }
  await page.keyboard.press("h");
  await expect(page).toHaveURL("/");
  await page.keyboard.press("2");
  await expect(page).toHaveURL("/");
});

test("typing in the model picker and command palette shortcut still work", async ({ page }) => {
  await page.keyboard.press("Control+k");
  const search = page.getByRole("textbox", { name: "Search models", exact: true });
  await expect(search).toBeFocused();
  await search.pressSequentially("hc12345");
  await expect(search).toHaveValue("hc12345");
  await expect(page).toHaveURL(route);
  await page.keyboard.press("Escape");
  await expect(search).toHaveCount(0);
});

test("editable controls, modifiers, composition, and handled events suppress navigation", async ({ page }) => {
  const results = await page.evaluate(() => {
    const results: boolean[] = [];
    for (const tag of ["input", "textarea", "select", "div"]) {
      const target = document.createElement(tag);
      if (tag === "div") target.contentEditable = "true";
      document.body.append(target);
      target.focus();
      for (const key of ["h", "c", "2"]) {
        const event = new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true });
        target.dispatchEvent(event);
        results.push(event.defaultPrevented);
      }
      target.remove();
    }
    for (const options of [{ ctrlKey: true }, { metaKey: true }, { altKey: true }, { isComposing: true }]) {
      for (const key of ["h", "c", "2"]) {
        const event = new KeyboardEvent("keydown", { key, ...options, bubbles: true, cancelable: true });
        document.body.dispatchEvent(event);
        results.push(event.defaultPrevented);
      }
    }
    for (const key of ["h", "c", "2"]) {
      const event = new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true });
      event.preventDefault();
      document.body.dispatchEvent(event);
    }
    return results;
  });
  expect(results.every((prevented) => !prevented)).toBe(true);
  await expect(page).toHaveURL(route);
});
