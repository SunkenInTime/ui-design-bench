# Loci — Landing Page Design Spec

## Identity

Editorial Web Designer building five parallel landing pages for **Loci**, a note-taking app framed as a second brain (memory palace / method of loci). Each page is a full design bet, not a palette tweak of the same layout.

## Product context

- **Name:** Loci
- **One-liner:** A memory palace for everything you learn.
- **Job of the page:** Make a visitor feel that scattered notes can become a place they can walk through — then get them to start free.
- **Core narrative (shared across iterations):** Capture → Link → Recall.
- **Audience notes:** Each iteration targets a slightly different slice of the same market (thinkers, builders, students, operators) without changing the product story.

## Shared content spine

| Section | Role | Constant message |
|---|---|---|
| Nav | Orientation | Loci wordmark + Start free |
| Hero | Thesis | Your second brain should feel like a place, not a pile |
| How it works | Mechanism | Capture · Link · Recall |
| Features | Proof | Spatial search, living graph, daily review, offline-first |
| Closing CTA | Conversion | Build your first room |

Copy varies in tone per iteration; the spine does not.

## Five directions

### /1 — Archive
- **Mood:** quiet, curated, still
- **Thesis:** Knowledge as a private museum — generous margins, catalog numerals, one artifact treated with reverence.
- **Palette:** paper `#F6F1E7`, ink `#1C1917`, accent oxblood `#7C2D12`, rule `#D6CFC0`, mute `#78716C`
- **Type:** Georgia/Times display serif for H1 + section titles; system-ui body; mono for catalog numbers
- **Signature:** oversized catalog numbers (01–04) and a single “exhibit” note card framed like a museum placard
- **Risk:** no product screenshots as chrome — the note card *is* the product shot

### /2 — Terminal
- **Mood:** technical, direct, insider
- **Thesis:** Loci as a system you operate — monospace chrome, session framing, structural brackets instead of marketing cards.
- **Palette:** bg `#0B0F0C`, panel `#111811`, ink `#C6F6C6`, dim `#6B8F6B`, accent phosphor `#3DFF7A`, warn `#F0C674`
- **Type:** ui-monospace / Consolas / Cascadia Code throughout; one large mono display line as hero
- **Signature:** the page reads as a `loci --session` transcript with ASCII dividers and a blinking cursor block
- **Risk:** zero “pretty SaaS” tropes — no rounded glass cards, no gradient mesh

### /3 — Swiss
- **Mood:** precise, systematic, calm
- **Thesis:** Second brain as instrument — exposed grid, hairline rules, numbered modules, one electric accent.
- **Palette:** bg `#FAFAF9`, ink `#0A0A0A`, accent `#2563EB`, secondary `#A1A1AA`, field `#F4F4F5`
- **Type:** Inter / Geist / Helvetica Now stack; tight display tracking; tabular labels in small caps energy
- **Signature:** visible 12-column alignment with section indices `01 / 02 / 03` and a graph schematic made of pure geometry
- **Risk:** almost no decoration — hierarchy only from scale, weight, and grid position

### /4 — Desk
- **Mood:** warm, tactile, human
- **Thesis:** Notes as objects on a working desk — soft paper, slight rotation, pencil energy, sticky-note adjacency.
- **Palette:** desk `#E7DCC8`, paper `#FFFCF5`, ink `#3B2F2F`, accent terracotta `#C2703D`, sage `#6F7F6B`, highlight `#F5E6A8`
- **Type:** Iowan/Palatino/Georgia serif display; Avenir/Segoe body; handwritten-feel accents via italic serif only (no script font dependency)
- **Signature:** layered index cards with subtle shadow and ±2° rotation; underlines that look drawn
- **Risk:** avoid skeuomorphic clutter — texture from CSS only, not stock desk photos

### /5 — Graph
- **Mood:** expansive, living, slightly electric
- **Thesis:** The second brain as constellation — dark field, luminous nodes, connection lines as the hero image itself.
- **Palette:** bg `#0C0A1D`, panel `#151230`, ink `#EDE9FF`, mute `#9B94C7`, accent violet `#8B5CF6`, cyan `#22D3EE`, pink `#F472B6`
- **Type:** Space Grotesk / Clash / system grotesk display; clean sans body; mono for node labels
- **Signature:** full-width SVG/canvas knowledge graph under the hero; nodes pulse slowly; one path highlights on load
- **Risk:** graph must stay legible and reduced-motion safe — no pure decoration noise

## Shared interaction: variant switcher

Fixed control (bottom-right on desktop, safe on mobile) present on all five pages:

- Compact pill: `Loci` · `1 2 3 4 5`
- Active variant marked
- Links: `/1` `/2` `/3` `/4` `/5`
- Neutral chrome so it never fights any palette (light/dark aware via each page passing a tone, or auto-contrast pill with translucent border)

## Accessibility floor

- Body contrast ≥ 4.5:1 on every palette
- Visible focus rings (accent-colored, 2px offset)
- Reduced motion: kill graph pulse, caret blink, float animations
- Semantic landmarks: header, main, footer; single h1 per page
- Tap targets ≥ 44px on switcher

## Anti-patterns (all five)

- No purple-blue gradient hero with centered white sans + two pill buttons as the *default* SaaS look (Graph uses violet as a *chosen* identity with a real graph, not a mesh wash)
- No six identical rounded feature cards with emoji icons
- No “seamlessly unlock your potential” copy
- No external image dependencies for critical layout — CSS/SVG only

## Implementation map

| Route | File | Direction |
|---|---|---|
| `/` | `app/page.tsx` | redirect → `/1` |
| `/1` | `app/1/page.tsx` | Archive |
| `/2` | `app/2/page.tsx` | Terminal |
| `/3` | `app/3/page.tsx` | Swiss |
| `/4` | `app/4/page.tsx` | Desk |
| `/5` | `app/5/page.tsx` | Graph |
| — | `app/components/VariantSwitcher.tsx` | shared switcher |

## Decision Trace (summary)

1. **Product name “Loci”** — ties second-brain to method of loci / spatial memory; alternatives: Cortex (clinical), Memex (dated), Brain (generic). Tradeoff: less instantly literal than “Notes.”
2. **Five structurally different layouts** — user asked for iterations, not A/B color tests. Tradeoff: higher build cost, intentional inconsistency across routes.
3. **Switcher as fixed pill, not top nav duplication** — keeps each hero pure while making comparison trivial. Tradeoff: slight occlusion risk at bottom; mitigated with padding.
4. **`/` redirects to `/1`** — five full landings would make `/` a sixth design; redirect keeps the set clean. Tradeoff: `/` is not a designed surface.
5. **CSS/SVG product imagery** — offline-safe, themeable per direction. Tradeoff: less photoreal than a real screenshot.
