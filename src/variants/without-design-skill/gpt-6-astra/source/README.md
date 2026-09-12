# Mori — five landing page concepts

Five responsive interpretations of a note-taking app and personal second brain.

| Route | Direction |
| --- | --- |
| `/one` | Calm lavender, editorial typography, interactive notebook preview |
| `/two` | Bold coral, oversized condensed type, creative studio collage |
| `/three` | Dark olive, lime accents, connected knowledge graph |
| `/four` | Butter-yellow paper, cobalt blue, hand-drawn details and sticky notes |
| `/five` | Botanical green, quiet serif typography, forest photography |

`/` also displays the first concept. The floating switcher links all five designs.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3002. Both development and production start scripts use port 3002.

## Interactions

- Calls to action open a working notebook with note creation, editing, collections, search, and deletion.
- Notes persist in this browser using `localStorage` and are shared between designs.
- The first concept includes category filtering and search in its notebook preview.
- Preview cards and graph nodes open their notes for exploration and editing.
- Command/Ctrl + K opens the notebook. Escape closes dialogs.
- Pricing offers a monthly/yearly toggle. Paid plans are illustrative and marked as coming soon.

This is a local concept app: there is no account system, cloud sync, paid checkout, or AI service.

## Checks

```sh
npm run lint
npm run build
```

Built with Next.js App Router, React, and CSS. Typography is self-hosted through `next/font`. Landscape photos are bundled locally from Unsplash.
