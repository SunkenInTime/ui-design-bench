# Morrow

Five landing-page concepts for a personal second brain, built with Next.js 16, React 19, Tailwind v4, native CSS, and Phosphor icons.

## Run

```sh
npm install
npm run dev -- --port 3003
```

For the production preview:

```sh
npm run build
npm run start -- --port 3003
```

The root route redirects to `/one`. The floating control switches between all five designs and toggles light and dark palettes. It can be collapsed.

## Design directions

These are aesthetic explorations, not implementations of a vendor design system. One shared component foundation supports independent page palettes.

| Route | Direction | DESIGN_VARIANCE | MOTION_INTENSITY | VISUAL_DENSITY |
| --- | --- | --- | --- | --- |
| `/one` | Room to think: cobalt, paper sculpture, restrained sans typography | 6 | 4 | 3 |
| `/two` | A living mind: botanical imagery, green, organic framing | 8 | 5 | 3 |
| `/three` | Good chaos: yellow poster, chrome, condensed display type | 8 | 6 | 4 |
| `/four` | Made of moments: photography, tactile collecting, muted rose | 8 | 5 | 4 |
| `/five` | After hours: graphite, smoky glass, pale green | 7 | 4 | 3 |

System dark mode is respected. After hours starts with its signature dark palette when no manual theme is selected; its light counterpart is available in the switcher. A manual choice is retained while moving between concepts.

CTAs use pill shapes and UI panels use 16px corners, except the sharp poster concept. Photographic crops are independent of UI radii. Animation communicates entry hierarchy, section progression, and interaction feedback. It uses CSS transforms and opacity with IntersectionObserver, and respects reduced motion. Hero entrances do not fade, preserving immediate image rendering.

## Working interactions

- Start writing opens an accessible native notebook dialog.
- Create, edit, save, and search notes locally in the current browser.
- Export a note as Markdown.
- Inline thought examples are editable and save into the same notebook.
- Feature tabs support arrow-key navigation.
- FAQ disclosures, responsive navigation, theme switching, and design switching work.

This is a frontend prototype. There is no account service, cloud synchronization, or backend. Clearing browser storage removes saved notes; Markdown export provides a portable copy.

## Artwork

Original artwork was created with the built-in image generation tool, then optimized to WebP. Assets and the exact generation prompts are in `public/images/` and `public/images/ARTWORK.md`. All page images are local and served through `next/image`.

## Verification

`npm run lint` and `npm run build` validate the project. Browser checks cover every route on desktop and mobile, both palettes, navigation, note validation, local saving, search, and export. Lighthouse reports are collected against the production build.
