---
name: add-generation-to-gallery
description: Add a generated regular Next.js source app into the ui-design-bench static gallery as a model generation, including source placement, variant wrapper, manifest/registry/type updates, scoped CSS, previews, and Playwright verification.
---

Use this skill when the user wants to add a generated Next.js project into the `ui-design-bench` gallery.

The goal is to preserve the gallery architecture: static routes are enumerated from `galleryManifest`, variants render through `src/variants/{group}/{model}/index.tsx`, CSS is scoped by `scripts/scope-variant-css.mjs`, and previews are captured into `public/gallery-previews/{group}/{model}`.

## Inputs To Identify

Before editing, identify:

- `group`: usually `with-design-skill`, `without-design-skill`, or `miscellaneous`.
- `model`: URL-safe slug such as `gpt-5.5-high` or `glm-5.1`.
- `modelLabel`: display label.
- `source project path`: the regular generated Next.js app to ingest.
- `iteration routes`: normally five routes, commonly `one/two/three/four/five` or `1/2/3/4/5`.
- Whether the source app has a local iteration switcher that should be removed or bypassed.

If the source project contains a single `src/app/page.tsx` that switches internally between designs, split or import the actual iteration components instead of rendering the switcher page inside the gallery.

## Files Usually Edited

- `src/lib/gallery-types.ts`
- `src/lib/gallery-manifest.ts`
- `src/lib/gallery-registry.ts`
- `src/variants/{group}/{model}/index.tsx`
- `scripts/capture-previews.mjs`
- `tests/gallery-routes.spec.ts`
- optionally `src/lib/model-rankings.ts`
- optionally `public/variants/{group}/{model}/...` for source public assets

Do not hand-edit files under `src/generated/scoped-variant-css`; they are generated.

## Ingest The Source App

1. Copy the generated app into:

   ```txt
   src/variants/{group}/{model}/source
   ```

2. Keep the source app's internal directory shape intact where possible.

3. If the source project has public assets, copy them to:

   ```txt
   public/variants/{group}/{model}
   ```

   Then update source imports or literal asset paths so they do not collide with other generations. Prefer `/variants/{group}/{model}/asset-name.ext` over root paths like `/window.svg` when the asset is model-specific.

4. Do not import the source app's `layout.tsx` unless it is required and safe. In most App Router generations, import the individual page components from `source/src/app/.../page`.

## Create The Variant Wrapper

Create `src/variants/{group}/{model}/index.tsx`.

For a normal five-route App Router source:

```tsx
import type { VariantModule } from "@/lib/gallery-types";
import Page1 from "@/variants/{group}/{model}/source/src/app/one/page";
import Page2 from "@/variants/{group}/{model}/source/src/app/two/page";
import Page3 from "@/variants/{group}/{model}/source/src/app/three/page";
import Page4 from "@/variants/{group}/{model}/source/src/app/four/page";
import Page5 from "@/variants/{group}/{model}/source/src/app/five/page";
import "@/generated/scoped-variant-css/{group}/{model}/source/src/app/globals.css";

const pages = {
  "1": Page1,
  "2": Page2,
  "3": Page3,
  "4": Page4,
  "5": Page5,
} as const;

const variantModule: VariantModule = {
  render({ iteration }) {
    const Page = pages[iteration];
    return <Page />;
  },
};

export default variantModule;
```

Adjust import paths to match the source route names. If there is no source CSS or the source styles are component-local only, omit the generated CSS import. If there are multiple source CSS files imported by components, run the scoping script first and import the generated equivalents needed for rendering.

## Update Gallery Types

In `src/lib/gallery-types.ts`:

- Add a new `ModelSlug` union member for the model slug if it does not already exist.
- Add a new `GalleryGroupSlug` only when creating a truly new group. Avoid new groups unless the user explicitly wants one.

## Update The Manifest

In `src/lib/gallery-manifest.ts`, add a `GalleryEntry`.

Use the helper when each iteration maps cleanly to five route slugs:

```ts
{
  group: "{group}",
  groupLabel: "With Design Skill",
  model: "{model}",
  modelLabel: "{Model Label}",
  sourceDir: "{original-source-folder-if-useful}",
  sourceAppType: "next",
  defaultIteration: "1",
  summary: "One sentence describing the generation set.",
  iterations: iterations(["one", "two", "three", "four", "five"], "{group}", "{model}"),
},
```

Use `["1", "2", "3", "4", "5"]` if the source routes are numeric. The generated gallery iteration IDs stay `"1"` through `"5"` either way; `sourceSlug` records the source route name.

For unusual labels or a single shared preview, write the `iterations` array manually, following the `miscellaneous:gpt-5.4` entry.

## Update The Registry

In `src/lib/gallery-registry.ts`:

1. Import the variant wrapper:

   ```ts
   import withNewModel from "@/variants/{group}/{model}";
   ```

2. Add it to the `registry` object:

   ```ts
   "{group}:{model}": withNewModel,
   ```

Use a clear local import name. Keep the registry key exactly equal to `{group}:{model}`.

## Update Preview Capture

In `scripts/capture-previews.mjs`, add an entry:

```js
{ group: "{group}", model: "{model}", iterations: ["1", "2", "3", "4", "5"] },
```

The capture script visits gallery iteration IDs, not source route slugs. Keep the iterations as `"1"` through `"5"` unless the gallery supports a different ID shape.

Then run:

```bash
TARGET_GROUP={group} TARGET_MODEL={model} npm run capture-previews
```

This generates:

```txt
public/gallery-previews/{group}/{model}/1.webp
public/gallery-previews/{group}/{model}/2.webp
...
```

## Update Tests

In `tests/gallery-routes.spec.ts`, add the tuple:

```ts
["{group}", "{model}"],
```

If the compare UI should include this model, check `tests/compare-routes.spec.ts` and update only when the behavior should change. Do not force compare tests to cover every new model unless the app logic requires it.

If rankings include this model, update `src/lib/model-rankings.ts` and any ranking-count assertion in tests.

## Run The Required Commands

Run these after edits:

```bash
npm run scope:variant-css
npm run lint
npm run test:routes
npm run test:visual
npm run build
```

If previews are needed, also run:

```bash
TARGET_GROUP={group} TARGET_MODEL={model} npm run capture-previews
```

If `next build` or `next start` behaves strangely after route changes, remove stale build output and rebuild:

```bash
rm -rf .next
npm run build
```

## Common Fixes

- If the gallery shell styling changes after navigating into a generation, source CSS is leaking. Run `npm run scope:variant-css`, import scoped CSS from `src/generated/scoped-variant-css`, and remove direct imports of source global CSS.
- If an asset is missing, check for root public paths such as `/logo.svg`, `/window.svg`, or `/images/foo.png`. Copy the file into `public/variants/{group}/{model}` and update the path.
- If a page renders the source app's local switcher, import the specific route/page component instead of the source root page.
- If the page requires `"use client"`, preserve it in the source component. The gallery wrapper itself can stay server-compatible unless it uses client-only APIs.
- If route tests 404, confirm `galleryManifest`, `gallery-types.ts`, and `gallery-registry.ts` all use the same exact `group` and `model` slugs.
- If generated CSS import paths do not exist, run `npm run scope:variant-css` and inspect the generated folder path before changing imports.

## Completion Criteria

The task is complete when:

- The source exists under `src/variants/{group}/{model}/source`.
- The variant wrapper renders all expected iterations.
- The manifest and registry both include the new model.
- `gallery-types.ts` accepts the new slugs.
- Preview images exist if the user wants thumbnails refreshed.
- `npm run test:routes`, `npm run test:visual`, and `npm run build` pass or any failures are clearly reported with file-level causes.
