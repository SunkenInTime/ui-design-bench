# Product

## Register

brand

## Users

Three audiences land here, and the design has to work for all of them without forcing any of them to translate:

- **Curious developers** browsing what current AI models actually produce when asked to design UI, with and without design skills enabled.
- **AI researchers and tool-builders** trying to form an opinion on how much a skill (e.g. Anthropic's frontend-design skill, ui.sh, others) shifts a model's output quality, and where each model sits relative to peers.
- **Non-technical "vibe coding"-curious visitors** who heard about AI building apps and want a plain-English answer to "which AI is good at design?"

Context of use: most visitors arrive from a link (X, HN, a friend, a Slack channel), give it a minute or two, scroll, click into a comparison or the guessing game, and leave with a vibes-level verdict. They will not read documentation. They will not log in. They are judging on first impression and ease of navigation.

The site has to legibly serve a researcher and a layperson on the same page without code-switching.

## Product Purpose

A public, visual reference for **where AI models and design skills land relative to each other on frontend design quality, today.**

The site exists so anyone can:

1. See, side by side, what each model produces from the same prompt.
2. See how enabling a design skill changes that output, per model.
3. Form their own opinion, not by reading a leaderboard, but by looking.

Success looks like: a visitor leaves with a real, defensible sense of which models are strong at frontend design right now, and whether the available design skills are pulling weight or just adding noise. The site becomes the canonical place to go when someone asks that question out loud.

## Brand Personality

Three words: **intuitive, tasteful, quietly confident.**

The voice is present and plain-spoken. Never showy, never academic, never sales-y. The site does not announce its own cleverness; it just feels good to use, and the visitor notices the smallness of the touches rather than the size of the gestures.

Emotional goal: the "oh, nice" feeling that comes from a designer who actually uses their own work. The river-carving-the-landscape feeling: the most common paths are the most obvious ones, because someone watched real use and quietly moved things until the obvious path was the right one.

Visual pizzazz is allowed, even welcomed, when it costs nothing in clarity or speed. A motion flourish that delights and doesn't slow you down is a win. A motion flourish that makes you wait, or that demands attention you didn't ask to give, is the failure mode.

## Anti-references

What this site explicitly is not:

- **AI eval leaderboards** (LMSYS, Chatbot Arena, model comparison dashboards). Dense tables, model-logo walls, accuracy bars, research-tool energy. Wrong audience, wrong feel.
- **Generic SaaS landing pages.** Gradient hero, identical feature-card grids, logo-wall social proof, glass-everything, hero-metric templates. The "AI made that" tell.
- **Command-terminal / power-user aesthetics.** Monospace everything, dark-by-default, dense controls, the implicit "you need a degree to use this" posture. This site has to be usable by someone who heard about vibe coding yesterday.
- **Wall-of-data dashboards.** Anything that makes the visitor scan before they can understand. Comparison should be visible, not parsed.
- **Awwwards-style brutalism or design-porn portfolios.** The site is not the show; the work shown inside it is. Restraint is the point.

## Design Principles

1. **Intuition over instruction.** The most-used paths should feel pre-worn. If a frequent action takes more than one obvious step, the layout is wrong, not the user.
2. **Tasteful minimalism, not empty minimalism.** Restraint comes from confidence, not from having nothing to put on the page. Every element that's there is there because removing it would hurt. White space earns its keep.
3. **Free pizzazz is good pizzazz.** Small visual or motion delights are welcome when they cost zero in clarity, speed, or accessibility. They are never the headline.
4. **Practice what you preach.** This site argues, by existing, that AI can produce good frontend design *when paired with taste*. The shell itself has to be evidence of that pairing — not a placeholder, not a generic template, not "good enough for a benchmark site." Self-aware winks at the AI-collab origin are fine and on-brand; they only work because the surface around them is actually good.
5. **Legible to all three audiences at once.** A researcher and a non-technical visitor should both feel at home on the same page. Never require domain literacy to navigate; never dumb things down so much that a serious user loses information.

## Accessibility & Inclusion

- **Light mode only** for now. Dark mode is on the roadmap but not a current constraint; do not branch the design around it yet.
- **No formal WCAG bar** to hit. Keep semantic HTML and sensible defaults, but reduced-motion, screen-reader exhaustiveness, and similar concerns are not blockers for shipping a change.
- Keyboard navigation should work where it would naturally work (the Lab-Guess game, the comparison selects), but does not need formal audit.
