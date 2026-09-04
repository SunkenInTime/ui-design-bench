# GPT-6 Astra (preview) generation notes

These 20 landing pages are the first attempt from four separate Codex sessions. Each session made five pages from the gallery's original prompt. All five pages from every session are included. There were no replacement attempts or follow-up design requests.

## Conditions

The runs started on September 4, 2026 UTC, from repository commit `06a4ddd358b3783c2e6f72c215892c840f58a938`.

| Gallery group | Skill | Pages |
| --- | --- | --- |
| Without Design Skill | None | 5 |
| With Design Skill | `frontend-design` | 5 |
| With Taste Skill | `design-taste-frontend` | 5 |
| With Uncodexify skill | `uncodixfy` | 5 |

The UI SH condition was not run because the contributor did not have access to the required service. Its absence is not a model failure.

The three core conditions match the recent Sol entries. Uncodixfy is an additional condition. These runs reproduce the published task and saved skill files. The repository does not establish the exact original harness version, system instructions, tool access, retries, or intervention history for every older entry.

## Generation setup

- Model: GPT-6 Astra (preview), maximum reasoning.
- Harness: Codex CLI 0.153.0, using an existing ChatGPT login.
- Four parallel sessions with separate project roots and Codex state directories.
- One blank Next.js App Router starter per session, based on the saved Fable 5.1 baseline configuration. Next.js 16.3.4, React 19.2.8, Tailwind CSS 4, and npm.
- Personal instructions, memory, plugins, and unrelated skills were disabled. Sessions received the selected skill and the starter's Next.js guidance.
- Network access allowed dependency and asset downloads. Native image generation was available. The Taste run used it for its images. Built-in web search was disabled.

Each session received this common instruction, followed by the original benchmark prompt:

```text
Work only in this project. Do not inspect other projects, prior generations, or the comparison gallery. Do not create subagents. Use the installed Next.js documentation when needed. Complete the task in this session. Run the project build before you finish. Do not publish or deploy the app.
```

Skill conditions also received `Use $<skill-name> from .agents/skills/<skill-name>/SKILL.md for this task.` The baseline did not receive a skill instruction.

```text
I want you to design the landing page for a note-taking application as essentially a second brain. You should design five iterations and each of them should be accessible within the slash one, slash two, slash three like pages directory. And then you should add a little button that lets me switch between them easily.
```

Skill snapshots came from these paths at the pinned commit:

| Skill | Source path |
| --- | --- |
| Frontend design, with its license | `src/variants/with-design-skill/fable-5.1/source/.agents/skills/frontend-design` |
| Taste | `src/variants/with-taste-skill/fable-5.1/source/.agents/skills/design-taste-frontend` |
| Uncodixfy | `with-uncodexify-skill/gpt-5.4/.agents/skills/uncodixfy` |

SHA-256 hashes of each `SKILL.md`:

```text
frontend-design: 1608ea77fbb6fc30d13a97d12cfa8ebf31358d40f0dd97beed24829d6b3f45dd
design-taste-frontend: aa194351b246b8b4799099d4ed7b033d29eab6e6e3d58d8d2172978be7b3ec89
uncodixfy: efb88d150e40d34c5b997a25eb4b88655e8daa1628848568a7f50668f1bf1d10
```

## Interrupted validation

The sessions had created all 20 pages when their browser checks caused local Chrome crash dialogs. All four sessions were stopped after about 26 minutes. The runner therefore recorded interrupted processes, not successful completed turns.

The first-attempt source was preserved. The coordinator completed the standalone builds and inspected the pages in the Codex in-app browser. There was no further model generation, selection among retries, or manual design polish. This interruption may have prevented further self-review by the model.

## Gallery integration

Contributed by [Theo Browne (@t3dotgg)](https://github.com/t3dotgg) in [PR #27](https://github.com/SunkenInTime/ui-design-bench/pull/27). These generations are archived in every gallery group and appear when **Show Archived** is enabled. All 20 remain eligible for **Guess Which**, alongside the separate GPT-6 Astra generations.

The integration follows the repository's add-generation skill. The source pages keep their generated layout, text, and assets. The changes needed to run them inside the gallery are:

- Replace document layouts with inner wrappers while retaining font classes and providers.
- Scope global CSS with the existing generator and move public asset URLs under each variant's path.
- Hide source iteration switchers, use the gallery switcher, and adapt source navigation links.
- Keep the Taste theme on its own wrapper so it cannot change the gallery theme.
- Install Motion 13.2.0 as `motion-astra` for Taste. Existing generations retain their Motion dependency.

The contributor retains raw source archives, input hashes, and session logs locally. They are not part of this contribution.

## Validation

All four standalone apps and the integrated production gallery build successfully. All 20 desktop gallery routes and all 20 preview routes were inspected in the in-app browser. The 20 source pages were also inspected. Their heading text, fonts, font sizes, heights, and vertical positions match the imported previews. No broken images were found.

The 20 preview images use the existing 1440 by 960 viewport, five-second settle delay, and WebP quality of 85. Capture used the in-app browser after the Chrome failures, so its browser engine differs from the repository's Chromium capture path.

Focused ESLint checks pass. Full repository lint reports the existing generated-source backlog. The Playwright route and visual suites were not completed after external browser launches were stopped. Route coverage is registered in the existing suite for later execution.

The Uncodixfy pages have horizontal overflow at phone width in both the original apps and the gallery. This was retained as generated. These are sample generations for visual comparison, not a statistical model ranking.

Created with GPT-6 Astra (preview) in Codex.
