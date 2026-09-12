# Morrow

Five distinct, responsive landing pages for a personal note-taking app and second brain.

```sh
npm install
npm run dev -- --port 3001
```

Open http://localhost:3001. The floating design switcher is available on every page.

| Route    | Direction              |
| -------- | ---------------------- |
| `/one`   | The thought garden     |
| `/two`   | The electric workspace |
| `/three` | The quiet library      |
| `/four`  | The connection map     |
| `/five`  | The open pinboard      |

Numeric routes `/1` through `/5` redirect to the corresponding designs. The root redirects to `/one`.

The main buttons open a working notebook: create, edit, and search notes. Notes persist in browser local storage, shared across all five designs on the same origin. There is no backend, authentication, or cross-device sync. Each landing page also has its own interactive preview. Pinboard scraps can be moved by dragging the top handle or using arrow keys while the handle is focused; the mix and add controls work within the current page session.

Built with Next.js App Router, React, TypeScript, custom CSS, self-hosted fonts through `next/font`, and original inline SVG artwork. The design rationale is in `DESIGN.md`.

```sh
npm run lint
npx tsc --noEmit
npm run build
```
