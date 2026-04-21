import { expect, test } from "@playwright/test";

const DEFAULT_COMPARE_PATH =
  "/compare?leftGroup=with-design-skill&leftModel=gpt-5.4&leftIteration=1&rightGroup=without-design-skill&rightModel=gpt-5.4&rightIteration=1";

test("bare /compare redirects to the canonical default compare URL", async ({ page }) => {
  await page.goto("/compare");
  await expect(page).toHaveURL(new RegExp(`${DEFAULT_COMPARE_PATH.replace(/\?/g, "\\?")}$`));
});

test("a fully valid compare URL renders two main compare panels", async ({ page }) => {
  await page.goto(DEFAULT_COMPARE_PATH);
  await expect(page.getByRole("heading", { name: "Compare" })).toBeVisible();
  await expect(page.getByTestId("compare-panel-left")).toBeVisible();
  await expect(page.getByTestId("compare-panel-right")).toBeVisible();
  await expect(page.locator("iframe")).toHaveCount(2);
});

test("partial compare query strings 404", async ({ page }) => {
  const response = await page.goto("/compare?leftGroup=with-design-skill&leftModel=gpt-5.4");
  expect(response?.status()).toBe(404);
});

test("invalid group/model/iteration combinations 404", async ({ page }) => {
  const response = await page.goto(
    "/compare?leftGroup=miscellaneous&leftModel=gemini&leftIteration=1&rightGroup=without-design-skill&rightModel=gpt-5.4&rightIteration=1",
  );
  expect(response?.status()).toBe(404);

  const responseUiSh = await page.goto(
    "/compare?leftGroup=ui-sh&leftModel=gemini&leftIteration=1&rightGroup=without-design-skill&rightModel=gpt-5.4&rightIteration=1",
  );
  expect(responseUiSh?.status()).toBe(404);
});

test("a valid cross-group same-model compare URL renders", async ({ page }) => {
  await page.goto(
    "/compare?leftGroup=with-design-skill&leftModel=gemini&leftIteration=4&rightGroup=without-design-skill&rightModel=gemini&rightIteration=4",
  );
  await expect(
    page.getByTitle("Left preview: With Design Skill, Gemini 3.1 Pro, iteration 4"),
  ).toBeVisible();
  await expect(
    page.getByTitle("Right preview: Without Design Skill, Gemini 3.1 Pro, iteration 4"),
  ).toBeVisible();
});

test("a valid arbitrary cross-model compare URL renders", async ({ page }) => {
  await page.goto(
    "/compare?leftGroup=with-design-skill&leftModel=composer-2.0&leftIteration=2&rightGroup=miscellaneous&rightModel=gpt-5.4&rightIteration=5",
  );
  await expect(
    page.getByTitle("Left preview: With Design Skill, Composer 2.0, iteration 2"),
  ).toBeVisible();
  await expect(
    page.getByTitle("Right preview: With Uncodexify skill, GPT-5.4, iteration 5"),
  ).toBeVisible();
});

test("compare CTAs on home, model, and iteration pages point to valid compare URLs", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("link", { name: "Compare With Design Skill GPT-5.4" }),
  ).toHaveAttribute("href", DEFAULT_COMPARE_PATH);

  await page.goto("/miscellaneous/gpt-5.4");
  await expect(page.getByRole("link", { name: "Compare this model" })).toHaveAttribute(
    "href",
    "/compare?leftGroup=miscellaneous&leftModel=gpt-5.4&leftIteration=1&rightGroup=without-design-skill&rightModel=gpt-5.4&rightIteration=1",
  );
  await expect(page.getByRole("link", { name: "Compare GPT-5.4 iteration 4" })).toHaveAttribute(
    "href",
    "/compare?leftGroup=miscellaneous&leftModel=gpt-5.4&leftIteration=4&rightGroup=without-design-skill&rightModel=gpt-5.4&rightIteration=1",
  );

  await page.goto("/ui-sh/gpt-5.4");
  await expect(page.getByRole("link", { name: "Compare this model" })).toHaveAttribute(
    "href",
    "/compare?leftGroup=ui-sh&leftModel=gpt-5.4&leftIteration=1&rightGroup=without-design-skill&rightModel=gpt-5.4&rightIteration=1",
  );
  await expect(page.getByRole("link", { name: "Compare GPT-5.4 iteration 4" })).toHaveAttribute(
    "href",
    "/compare?leftGroup=ui-sh&leftModel=gpt-5.4&leftIteration=4&rightGroup=without-design-skill&rightModel=gpt-5.4&rightIteration=1",
  );

  await page.goto("/with-design-skill/composer-2.0/4");
  await expect(
    page.getByRole("link", { name: "Compare Composer 2.0 iteration 4" }),
  ).toHaveAttribute(
    "href",
    "/compare?leftGroup=with-design-skill&leftModel=composer-2.0&leftIteration=4&rightGroup=without-design-skill&rightModel=composer-2.0&rightIteration=4",
  );
});
