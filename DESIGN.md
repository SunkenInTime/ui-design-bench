---
name: Which AI Made This?
description: A quiet, curated gallery comparing how AI models design UIs with and without skills.
colors:
  canvas: "#fafafa"
  surface: "#ffffff"
  ink: "#171717"
  body: "#404040"
  muted: "#525252"
  soft-muted: "#737373"
  whisper: "#a3a3a3"
  divider: "#d4d4d4"
  hairline: "#e5e5e5"
  surface-tint: "#f5f5f5"
  signal-pink: "#b84a8c"
  signal-pink-foreground: "#fafafa"
  positive: "#10b981"
  positive-soft: "#34d399"
  warning: "#fbbf24"
  error: "#f43f5e"
  error-soft: "#fda4af"
typography:
  display:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  subtitle:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
  eyebrow:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.22em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  "2xl": "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
  "3xl": "64px"
  "4xl": "80px"
components:
  button-primary:
    backgroundColor: "{colors.signal-pink}"
    textColor: "{colors.signal-pink-foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "10px 16px"
    height: "42px"
  button-primary-hover:
    backgroundColor: "#a1407a"
    textColor: "{colors.signal-pink-foreground}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    rounded: "{rounded.md}"
    padding: "0"
    size: "36px"
  button-secondary-hover:
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.ink}"
  chip-iteration:
    backgroundColor: "#fafafa"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    size: "32px"
  chip-iteration-active:
    backgroundColor: "{colors.signal-pink}"
    textColor: "{colors.signal-pink-foreground}"
    rounded: "{rounded.md}"
    size: "32px"
  card-gallery:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "20px"
  nav-glass:
    backgroundColor: "rgba(255,255,255,0.85)"
    textColor: "{colors.muted}"
    rounded: "{rounded.lg}"
    padding: "4px"
    height: "44px"
  select-trigger:
    backgroundColor: "rgba(255,255,255,0.85)"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "10px 12px"
  select-option-selected:
    backgroundColor: "#f3dceb"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "10px 12px"
---

# Design System: Which AI Made This?

## 1. Overview

**Creative North Star: "The Quiet Curator"**

This is a curated gallery, not an evaluation dashboard. The chrome stays out of the way so the work being shown — AI-generated UI variants from a single prompt — can speak. Every choice here is in service of letting the visitor *look* before they read, *compare* before they parse, and *form a verdict* before they're asked to think about one.

The aesthetic is **tasteful minimalism, not empty minimalism.** A near-white canvas (`#fafafa`, never pure `#fff`), one slim accent (Signal Pink) used so rarely that its appearance reads as meaning. Geist Sans alone carries the type. Elevation is flat at rest, and depth is a response to interaction, never a decorative effect. Motion is restrained but precise: nav labels morph through a 220ms blur-crossfade; cards lift 6px on hover; the lab-guess game's correct-guess pop fires a single 620ms ease-out scale with a one-shot sheen. Nothing wobbles, bounces, or asks for attention it didn't earn.

This system explicitly rejects what the [`PRODUCT.md` anti-references](PRODUCT.md) call out: the AI-eval-leaderboard look (dense tables, model-logo walls, dashboard-coded), the generic SaaS landing (gradient hero, identical feature-card grid, glass everywhere), and the command-terminal aesthetic (monospace everything, dark-by-default, dense controls). It's a gallery for people who heard about vibe coding yesterday and a gallery for AI researchers, and it has to read as legible to both on the same page.

**Key Characteristics:**

- **One accent, used as signal.** Signal Pink (`#b84a8c`) is reserved for active state, focus, and the single primary action per surface. Its rarity is the point.
- **Light-only canvas.** `#fafafa`, locked. Dark mode is on the roadmap but not a current design constraint.
- **Flat at rest.** Surfaces sit flush. Shadows and translations appear only in response to user state (hover, focus, the copied-link flash, the correct-guess pop).
- **Geist Sans, alone.** No serif, no mono, no display face. Hierarchy comes from scale and weight.
- **Glass nav as signature.** A single floating-glass element — top-right, always — anchors navigation across every page. Identical chrome on the home, variant, compare, lab-guess, and rankings views.

## 2. Colors

A near-monochrome neutral system, every shade tinted toward warm-gray, with one saturated pink reserved as signal. **No pure black, no pure white** — the canvas is `#fafafa` and the deepest ink is `#171717`. Game feedback colors (emerald, rose, amber) live entirely inside the Lab-Guess game; they do not appear in the gallery shell.

### Primary

- **Signal Pink** (`#b84a8c` / `oklch(60.5% 0.155 350)`): The one saturated color in the system. Used for active iteration state, focus rings, the home-nav active link, primary action backgrounds in the Lab-Guess game, and one-off accent moments (the "Composer 2.0 LOL" pill credit). Its job is to mean "this is what's selected" or "this is the one button you should press." If it appears on more than ~10% of any surface, the design has failed.
- **Signal Pink Foreground** (`#fafafa`): Text on Signal Pink. Matches the canvas color exactly; never use pure white here, the brightness contrast is wrong against the warm pink.

### Neutral

The neutral ramp does all the heavy lifting. Each step has one job — do not pick a neutral by hue, pick it by role.

- **Canvas** (`#fafafa`): Page background. Locked at the `<html>` and `<body>` level via `!important`. Surfaces sit on top of this, never under it.
- **Surface** (`#ffffff`): Cards, panels, the floating glass nav (with `/85` alpha), tooltip backgrounds. The only pure-white in the system.
- **Surface Tint** (`#f5f5f5`): Soft fill for hover states on buttons that started transparent.
- **Ink** (`#171717`): All headings (`h1`, `h2`, `h3`). Hover-text target on muted links.
- **Body** (`#404040`): Default body text (set on `<body>`). Slightly softer than ink so headings feel more present.
- **Muted** (`#525252`): Long-form body copy, secondary nav text.
- **Soft Muted** (`#737373`): Meta text, breadcrumbs, secondary labels.
- **Whisper** (`#a3a3a3`): Eyebrow labels, tiny tabular numerals (rank numbers, dividers in the result list).
- **Divider** (`#d4d4d4`): Borders on inline iteration chips inside ranking-note prose, prompt blockquote left-border.
- **Hairline** (`#e5e5e5`): Default border for cards, glass nav, dropdowns, ranked-list section dividers. The system's default 1px stroke.

### Tertiary (game feedback, scoped to Lab-Guess only)

- **Positive** (`#10b981`): Solved-on-first-try result tiles, correct-guess ring on the submit button, perfect-run accent.
- **Positive Soft** (`#34d399`): Solved-on-second-try result tiles. Slightly desaturated to read as "good but not flawless."
- **Warning** (`#fbbf24`): Solved-on-third-try result tiles.
- **Error** (`#f43f5e`): Missed-round indicator dots, wrong-guess progress fill.
- **Error Soft** (`#fda4af`): Per-attempt dots in the round-breakdown list.

### Named Rules

**The Signal Rule.** Signal Pink appears only where it carries meaning: active iteration, focused control, the single primary action on a surface, and the linked-from-prompt "Composer 2.0" credit. If you find yourself reaching for it to decorate a divider, a heading, or a card border, you are mis-using it. Use a neutral instead.

**The No-Pure-Color Rule.** Never `#000` and never `#fff`. Ink is `#171717`, canvas is `#fafafa`. Pure black on light hurts the eye; pure white near `#fafafa` makes the canvas look dirty. Tint every neutral.

**The Game-Color Quarantine.** Emerald, rose, and amber exist *only* inside the Lab-Guess game. They never appear in the gallery, compare, rankings, or navigation chrome. The shell is monochrome plus Signal Pink; the game is the one place feedback colors are allowed in.

## 3. Typography

**Display Font:** Geist Sans (with `ui-sans-serif, system-ui, sans-serif` fallback).
**Body Font:** Geist Sans.
**Label/Mono Font:** Geist Sans, with `tabular-nums` for numerics.

**Character:** One typeface, two registers. Geist Sans is geometric-modern with humanist warmth; it reads as a designer's typeface, not a code editor's. Hierarchy is built entirely from scale, weight (400 vs 500 vs 600), and tracking. There is no display face, no serif, no mono. Letting one face carry everything is the discipline; it forces the size and weight contrasts to do their job.

### Hierarchy

- **Display** (500, `clamp(1.875rem → 2.25rem)`, line-height 1.1, tracking -0.02em): H1 on the home, compare, lab-guess, and rankings pages. Always preceded by the floating nav, never by an eyebrow on this site.
- **Headline** (500, 1.875rem, 1.15, -0.02em): H1 at the mobile breakpoint (one step down from Display on small screens).
- **Title** (500, 1.25rem, 1.3, -0.015em): Section headings — the "With Design Skill" / "Without Design Skill" group labels on the home page, the model-name `h2` on the rankings page.
- **Subtitle** (500, 1.125rem, 1.35, -0.015em): Card title — the model name on each gallery card.
- **Body** (400, 0.9375rem / 15px, line-height 1.625): Long-form prose — the home page intro, the rankings notes, the compare subtitle. Max line length **65–75ch**; never let body run wider.
- **Body Small** (400, 0.875rem, 1.5): Nav-link text, secondary descriptions, the compare panel labels.
- **Label** (500, 0.75rem, 1.4): Field labels in the compare selects, micro-meta on cards.
- **Eyebrow** (600, 0.6875rem / 11px, 1.0, tracking **0.22em**, UPPERCASE): Used sparingly — only on the Lab-Guess results card ("Your rank", "Round breakdown"). Carries the one moment of typographic flourish in the whole system; don't multiply it.

### Named Rules

**The One-Face Rule.** Geist Sans is the only typeface. No serif for "editorial" warmth, no mono for "developer" credibility. Hierarchy must be built from scale, weight, and tracking — not from a second family.

**The Eyebrow Quarantine.** The wide-tracked uppercase eyebrow appears on the Lab-Guess results card and nowhere else. It is a one-time flourish; if you find yourself reaching for it on the home page or a section heading, use Title weight 500 instead.

**The Tight-Tracking Rule.** All headings (Display, Headline, Title, Subtitle) carry `tracking-tight` (-0.015em to -0.02em). Body is `letter-spacing: normal`. The contrast between tightened heads and natural body is part of the system's feel.

## 4. Elevation

**Flat at rest. Depth is a response to state, never a decoration.**

Surfaces sit flush on the `#fafafa` canvas with a 1px Hairline border. No drop shadow appears until the user does something — hovers a card, focuses a select, copies a link, makes a correct guess. The one always-on shadow in the system is the micro-elevation (`0 1px 2px rgba(0,0,0,0.04)`) on the floating glass nav and on glass dropdowns; it is so faint it reads as a hint of float, not as lift.

### Shadow Vocabulary

- **Hairline Lift** (`box-shadow: 0 1px 2px rgba(0,0,0,0.04)`): The always-on micro-shadow under the glass nav, glass dropdowns, and the compare action buttons. Barely perceptible; reads as "this floats slightly."
- **Card Hover** (`box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)`): The Tailwind `shadow-lg` value. Appears on gallery cards only on hover, paired with `translateY(-6px)`. Combined with the lift, this is the one moment of visible elevation in the gallery.
- **Tooltip** (`box-shadow: 0 4px 20px rgba(0,0,0,0.1)`): On variant-switcher tooltip surfaces. Softer and wider than Card Hover; reads as "this is temporarily appearing."
- **Toast** (`box-shadow: 0 8px 30px rgba(0,0,0,0.12)`): On the "Link copied" spring-in confirmation. Tallest shadow in the system because the toast is the most ephemeral element; it earns the lift by disappearing in 2.2s.
- **Correct-Guess Ring** (`box-shadow: 0 0 0 5px rgba(16,185,129,0.16), 0 12px 28px rgba(16,185,129,0.18)`): The mid-animation peak of the Lab-Guess correct-pop. Lives inside the `lab-correct-pop` keyframe; never use as a static shadow.

### Named Rules

**The Flat-Default Rule.** Surfaces are flat at rest. Borders alone (Hairline, 1px) separate planes. If you find yourself reaching for a shadow on a card, an input, a section, ask whether a border would do the same job. It almost always will.

**The State-Earned-Shadow Rule.** Every shadow in the system is triggered by user state. Hover earns Card Hover. Focus earns the accent ring. A correct guess earns the Correct-Guess Ring. There is no "ambient" elevation for visual interest.

**The Glass Restraint.** Backdrop-filter blur (`backdrop-filter: blur(12px)` with `rgba(255,255,255,0.85)` background) is used **only** on the floating nav, the variant switcher, the compare select triggers, and the lab-guess picker. Four components, total. Glass is not a decorative effect; it's a structural choice that signals "I float above the content underneath." Don't use it on cards, headings, or anything that isn't a floating overlay.

## 5. Components

### Buttons

- **Shape:** `rounded-md` (6px) for icon/chip buttons, `rounded-lg` (8px) for full-text primary buttons.
- **Primary** (Lab-Guess submit, "Share your score"): Signal Pink background, Signal Pink Foreground text, 10px 16px padding, 42px height, Label typography. Hover darkens via `color-mix(in srgb, var(--gallery-accent) 88%, black)`. The single Primary button per surface; usually only the Lab-Guess game has one.
- **Idle / Pre-action** (the Lab-Guess submit when no guess is selected): Signal-Pink-tinted neutral — `bg-[color-mix(in_srgb,var(--gallery-accent)_10%,white)]` with `text-[var(--gallery-accent)]` and a `20%`-mix border. Indicates *"this is the primary action but it's not ready yet."*
- **Secondary / Icon** (compare-page swap/share, variant-switcher items): 36-by-36 square, surface white background, Hairline border, Muted icon at 80% opacity. Hover: Surface Tint background, Ink text, Divider border. Wrapped in framer-motion `whileTap={{ scale: 0.9 }}` spring (stiffness 520, damping 28) for tactile feedback.
- **Ghost** (the rankings-page model link, the nav links when inactive): no border, no background; text-color transition only.
- **Hover / Focus:** All buttons transition `transition-colors duration-150` or `duration-200`. Focus-visible always shows a 1px Signal Pink ring + Signal Pink border.

### Chips

- **Iteration Chip** (the numbered 1-5 buttons on cards, on the variant switcher, in the compare panel): 32×32 (variant switcher uses 28×28), `rounded-md` (6px), Hairline border, `#fafafa` background, Muted text, **`tabular-nums`** (always). Hover: Surface background, Divider border, Ink text. Active state: Signal Pink background, Signal Pink Foreground text. Switching between iterations is the most-frequent action on the variant page; the chip must feel **pre-worn**.
- **Inline Ranking Chip** (auto-detected iteration references inside ranking notes, e.g. "iteration three"): inline pill, `rounded-md`, Hairline border, `#fafafa` background, 13px Muted text, `px-1.5 py-0.5`. Lives inside body prose and inherits its baseline.

### Cards / Containers

- **Corner Style:** `rounded-lg` (8px) for gallery cards; `rounded-xl` (12px) for stat cards; `rounded-2xl` (16px) for the Lab-Guess game container and results card.
- **Background:** Surface (`#ffffff`) on Canvas (`#fafafa`).
- **Shadow Strategy:** Flat at rest. Gallery cards add `shadow-lg` + `-translate-y-1.5` on hover with `transition-transform duration-300 ease-out`. Result card adds a subtle 6px emerald ring (`shadow-[0_0_0_6px_rgba(16,185,129,0.06)]`) only when the player gets a perfect run.
- **Border:** Hairline (1px, `#e5e5e5`) for stat/result cards. Divider (`#d4d4d4`) for gallery cards (one step stronger because they sit on Canvas with no fill behind them).
- **Internal Padding:** 20px for gallery cards; 24-32px for the Lab-Guess result card (`p-6 sm:p-8`); 16px for stat cards.

### Inputs / Selects

- **Style:** `rounded-lg`, `rgba(255,255,255,0.85)` background with `backdrop-filter: blur(12px)`, Hairline border, `0 1px 2px rgba(0,0,0,0.04)` micro-shadow, Label typography for the value, Whisper-colored ChevronDown caret.
- **Focus:** Signal Pink border (`focus-visible:border-[var(--gallery-accent)]`) + 1px Signal Pink ring (`focus-visible:ring-1 focus-visible:ring-[var(--gallery-accent)]`). No glow, no outline.
- **Dropdown panel:** `rounded-lg`, Hairline border, opens on Canvas background (`#fafafa`, not white) so options on white sit clearly inside it.
- **Option selected:** `bg-[var(--gallery-accent)]/12` (a Signal Pink tint, ~12% mix). Hover-unselected: `bg-[var(--gallery-accent)]/10`. Hover-selected: `bg-[var(--gallery-accent)]/20`.

### Navigation (signature)

- **Floating Glass Nav:** Fixed top-right (`top-5 right-5 sm:top-6 sm:right-6`), `z-[110]`, `rounded-lg` (8px), Hairline border, `rgba(255,255,255,0.85)` background with `backdrop-filter: blur(12px)`, Hairline Lift micro-shadow. Inside: row of nav items separated by hairline vertical dividers (`h-6 w-px bg-neutral-200/90`).
- **Nav-item morph:** Each nav item is 36px tall. The *currently active* item collapses to its icon (`size-9`, animated `scale: 0.85 → 1`). Inactive items show their text label, animated with a `filter: blur(4px) → blur(0px)` AnimatePresence crossfade, easing `[0.22, 1, 0.36, 1]` (ease-out-quart), 220ms duration. This morph is the single most distinctive motion in the whole shell; protect it.
- **Hover:** Background flips to `color-mix(in srgb, var(--gallery-accent) 12%, white)`, text flips to Signal Pink.
- **Variant Switcher Nav:** Same chrome, vertical column on the right edge of variant pages. Stacks Home, "VS" compare link, model-logo+skill-icon tooltip, then iteration chips.

### Signature Component: The Lab-Guess Picker

The Lab-Guess game's bottom-center floating picker is the system's most elaborate single component. It composites three states into one button:

1. **Wrong-guess accumulation:** A `rose-500/16` fill bar grows left-to-right behind the picker label, width = `(wrongGuessCount / 3) * 100%`. The picker border flips to `rose-300` when any wrong guesses exist.
2. **Shake feedback:** On wrong submit, the `lab-wrong-shake` keyframe runs for 420ms — a 4-step horizontal shake (±7px, ±5px). No fade, no scale; pure lateral motion.
3. **Pop feedback:** On correct submit, `lab-correct-pop` runs for 620ms — a scale `1 → 1.045 → 1` with `cubic-bezier(0.2, 0.8, 0.2, 1)` easing, paired with a one-shot Correct-Guess Ring and a `lab-correct-sheen` overlay (a translucent white diagonal that sweeps left-to-right at 18° skew). The sheen is the one piece of decorative motion in the system and earns its place by happening once, at a moment of payoff.

### Signature Component: The Round-Status Dot Stack

Inside the Lab-Guess iframe overlay: 5 dots stacked vertically (`size-2.5 rounded-full`), one per round, each with `border` and `bg` reflecting state — Positive solid for solved, Error solid for missed, Whisper border with Surface fill for active. The dots replace a progress bar entirely; the user can see *at a glance* where they are in the game without reading a number.

## 6. Do's and Don'ts

### Do:

- **Do** use `#fafafa` for canvas and `#171717` for ink. Never `#fff`, never `#000`. Tint every neutral toward warm gray.
- **Do** reserve **Signal Pink (`#b84a8c`)** for active state, focus rings, and the single primary action per surface. If it covers more than ~10% of a screen, you have over-used it.
- **Do** use **Geist Sans alone** for everything. Build hierarchy from scale (`text-3xl` to `text-4xl` for hero, `text-xl` for sections, `15px` for body, `text-xs` for meta) and weight (500 for headings, 400 for body, 600 only for the wide-tracked eyebrow).
- **Do** keep surfaces **flat at rest**. A 1px Hairline (`#e5e5e5`) border is the system's default plane separator.
- **Do** earn every shadow with a state change. Card lift is for hover, accent ring is for focus, the toast shadow is for the spring-in moment.
- **Do** use `tabular-nums` on every numeral the user might compare — iteration chips, ranks, scores, stat values, percentages.
- **Do** keep the **floating glass nav** consistent on every page: same position (`top-5 right-5 sm:top-6 sm:right-6`), same chrome (`rounded-lg` + `rgba(255,255,255,0.85)` + `backdrop-blur-[12px]` + Hairline border + Hairline Lift shadow). It is the one element that proves the surfaces are part of one site.
- **Do** ease motion with `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quart) for state morphs. Ease *out* with exponential curves only; never bounce, never elastic.
- **Do** cap body text at **65–75 characters per line** (the home intro uses `max-w-2xl` for this).
- **Do** let `transition-colors duration-150` be the default for any color flip. Anything longer reads as sluggish; anything shorter reads as jittery.

### Don't:

- **Don't** turn this into an **AI eval leaderboard.** No dense tables of model-vs-model scores, no model-logo walls, no accuracy bars in the shell. The Rankings page is the limit; it is *one ranked list with prose notes*, not a dashboard.
- **Don't** turn this into a **generic SaaS landing.** No gradient hero, no identical feature-card grid (the gallery groups look identical *only because the models are identical*; the cards themselves are not "features"), no logo-wall social proof, no hero-metric template (big number + small label + supporting stats), no `background-clip: text` gradient text.
- **Don't** introduce a **command-terminal aesthetic.** No monospace as the body face, no dark-by-default, no "you need a degree to use this" density. The non-technical visitor must feel at home.
- **Don't** create a **wall of data.** Every screen should let the user *see* the comparison before they parse it. If you find yourself adding a table, ask whether a side-by-side preview would work instead (the Compare page is the canonical example).
- **Don't** use **glassmorphism** outside the four allowed components (floating nav, variant switcher, compare select trigger, lab-guess picker). Glass on a card, a heading, or a button is a 2020 trope.
- **Don't** use **side-stripe borders** (`border-left` >1px as a colored accent) on cards, callouts, or list items. The Hairline border + Whisper-colored eyebrow does the same job without the cliché.
- **Don't** use **emerald, rose, or amber** outside the Lab-Guess game. The shell is monochrome plus Signal Pink, by quarantine.
- **Don't** spread Signal Pink across borders, dividers, hover backgrounds, or decorative accents. One color, one role: *signal*. The moment it decorates, it stops meaning.
- **Don't** add a **second typeface** to introduce contrast. Hierarchy from scale and weight; that is the One-Face Rule.
- **Don't** introduce **dark mode partially.** Light mode is locked until a full dark-mode pass is designed; do not branch components defensively for a theme that doesn't exist yet.
- **Don't** animate **layout properties** (`width`, `height`, `top`, `left`, `margin`, `padding`). Use `transform` and `opacity`. Animate `filter: blur()` only sparingly, for the nav label morph.
- **Don't** use **em dashes** in UI copy. Commas, colons, semicolons, periods, parentheses. Also not `--`.
