# Marginalia - landing page design iterations

Five design iterations of a landing page for Marginalia, a fictional
note-taking app positioned as a second brain.

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3003](http://localhost:3003). The root redirects to `/1`.
A fixed switcher in the bottom-right corner jumps between iterations.

## Iterations

| Route | Direction | Type | Accent |
| --- | --- | --- | --- |
| `/1` | Editorial commonplace book, calm and paper-like | EB Garamond + Geist | Forest green |
| `/2` | Dark local-first system, mono details | Geist + Geist Mono | Electric blue |
| `/3` | Playful studio, tilted collage and marquee | Space Grotesk | Burnt orange |
| `/4` | Cold-luxury product page, bento grid | Inter Tight | Cobalt |
| `/5` | Brutalist zine, hard borders and shadows | Archivo + Geist Mono | Yellow |

## Structure

- `app/[1-5]/page.tsx` - one self-contained landing page per iteration
- `app/[1-5]/layout.tsx` - per-iteration fonts (next/font) and theme wrapper
- `components/IterationSwitcher.tsx` - the fixed iteration switcher
- `components/Reveal.tsx` - shared scroll-reveal (motion, reduced-motion aware)

Photography is placeholder imagery from picsum.photos.
