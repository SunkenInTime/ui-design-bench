import Link from "next/link";
import { GalleryRankingsNav } from "@/components/gallery/gallery-rankings-nav";

const iterations = [
  {
    id: "tabs",
    name: "Scenario tabs + shared filters",
    summary:
      "Each real-world test (prompt family, harness, or client stack) gets a primary tab. Filters apply across the active scenario so you always compare apples to apples.",
    tradeoffs: "Great when scenarios are few and mutually exclusive. Tabs can overflow if you spin up dozens of runs.",
    mock: (
      <div className="space-y-3 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
        <div
          role="tablist"
          aria-label="Scenario tabs (mock)"
          className="flex flex-wrap gap-1 rounded-md bg-neutral-100 p-1"
        >
          {["Second brain landing", "Dashboard shell", "Auth flows"].map((label, i) => (
            <button
              key={label}
              type="button"
              className={`rounded px-3 py-1.5 text-xs font-medium ${
                i === 0
                  ? "bg-white text-neutral-900 shadow-sm"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 text-[11px]">
          <span className="rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1 font-medium text-neutral-700">
            Harness: Cursor
          </span>
          <span className="rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1 font-medium text-neutral-700">
            Skill: design on
          </span>
          <span className="rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1 font-medium text-neutral-700">
            Iteration: 3
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["Opus", "Gemini", "GPT"].map((m) => (
            <div
              key={m}
              className="flex aspect-[4/3] items-center justify-center rounded-md border border-dashed border-neutral-200 bg-neutral-50 text-xs text-neutral-500"
            >
              {m}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "matrix",
    name: "Matrix board (harness × model)",
    summary:
      "Rows are harnesses or tooling stacks; columns are models. Each cell is a generation for the currently selected prompt and iteration slice.",
    tradeoffs: "Fast scan of a full experiment grid. Dense on smaller screens; needs careful empty states.",
    mock: (
      <div className="space-y-2 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
        <div className="grid grid-cols-[5.5rem_repeat(3,minmax(0,1fr))] gap-2 text-[10px] font-medium uppercase tracking-wide text-neutral-500">
          <div />
          <div className="text-center">Opus</div>
          <div className="text-center">Gemini</div>
          <div className="text-center">GPT</div>
          {[
            ["Cursor", "●", "●", "○"],
            ["CLI agent", "○", "●", "●"],
            ["API batch", "●", "○", "○"],
          ].map((row) => (
            <div key={row[0]} className="contents">
              <div className="flex items-center text-neutral-600">{row[0]}</div>
              {row.slice(1).map((cell, i) => (
                <div
                  key={`${row[0]}-${i}`}
                  className="flex aspect-[5/3] items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 text-sm text-neutral-400"
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="text-[11px] text-neutral-500">● = has preview · ○ = not generated for this cell</p>
      </div>
    ),
  },
  {
    id: "presets",
    name: "Saved views & compare baskets",
    summary:
      "Filter dimensions live in a sidebar as named presets (“Design skill on/off”, “Harness A vs B”). Pick two presets to diff without changing global navigation.",
    tradeoffs: "Powerful for repeated regression checks. Requires disciplined naming so presets do not rot.",
    mock: (
      <div className="flex gap-3 rounded-lg border border-neutral-200 bg-white p-3 shadow-sm">
        <div className="w-[40%] space-y-2 border-r border-neutral-100 pr-3">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-neutral-500">Saved views</p>
          <ul className="space-y-1 text-xs">
            {[
              "Baseline · no skill",
              "Stress · long prompt",
              "Harness compare (A)",
            ].map((label, i) => (
              <li key={label}>
                <button
                  type="button"
                  className={`w-full rounded-md px-2 py-1.5 text-left ${
                    i === 0 ? "bg-[color-mix(in_srgb,var(--gallery-accent)_14%,white)] font-medium" : "hover:bg-neutral-50"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="w-full rounded-md border border-dashed border-neutral-300 py-1.5 text-[11px] text-neutral-600 hover:border-neutral-400"
          >
            + Save current filters
          </button>
        </div>
        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex gap-2 text-[11px]">
            <span className="rounded-md bg-neutral-900 px-2 py-1 font-medium text-white">Basket A</span>
            <span className="rounded-md border border-neutral-200 px-2 py-1 font-medium text-neutral-700">
              Basket B
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="aspect-video rounded-md border border-neutral-200 bg-neutral-50" />
            <div className="aspect-video rounded-md border border-neutral-200 bg-neutral-50" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "split",
    name: "Split workspace",
    summary:
      "Two independent gallery panes side by side, each with its own scenario controls. Ideal for A/B harness testing with identical model columns.",
    tradeoffs: "Very literal comparisons. Needs horizontal space; syncing scroll optional but tricky.",
    mock: (
      <div className="grid gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-3 shadow-sm md:grid-cols-2">
        {["Scenario A · design skill", "Scenario B · no skill"].map((label) => (
          <div key={label} className="space-y-2 rounded-md border border-neutral-200 bg-white p-3">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-medium text-neutral-800">{label}</span>
              <span className="text-[10px] text-neutral-500">Harness: …</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="aspect-[5/3] rounded bg-neutral-100" />
              <div className="aspect-[5/3] rounded bg-neutral-100" />
              <div className="aspect-[5/3] rounded bg-neutral-100" />
              <div className="aspect-[5/3] rounded bg-neutral-100" />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "url-lab",
    name: "Query-string experiment lab",
    summary:
      "Every orthogonal axis (prompt slug, harness id, skill flag, date stamp) is encoded in the URL. Share links reproduce the exact multidimensional slice.",
    tradeoffs: "Best for technical reviewers and bots. URLs grow long; needs a compact encoding story.",
    mock: (
      <div className="space-y-2 rounded-lg border border-neutral-200 bg-white p-4 font-mono text-[11px] shadow-sm">
        <div className="break-all rounded-md bg-neutral-900 px-3 py-2 text-[var(--gallery-accent-foreground)]">
          {`/gallery?prompt=second-brain&harness=cursor&skill=design&iteration=3&models=opus,gemini`}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {["Copy link", "Reset", "Open in compare"].map((a) => (
            <span
              key={a}
              className="rounded border border-neutral-200 bg-neutral-50 px-2 py-1 text-[10px] text-neutral-600"
            >
              {a}
            </span>
          ))}
        </div>
        <p className="text-[11px] text-neutral-500">
          Treat the gallery as a deterministic viewer: data sources resolve the intersection of all parameters.
        </p>
      </div>
    ),
  },
] as const;

export default function ExperimentsPage() {
  return (
    <>
      <GalleryRankingsNav />
      <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <header className="max-w-3xl">
          <p className="text-sm font-medium text-[var(--gallery-accent)]">Exploration · not implemented yet</p>
          <h1 className="mt-2 text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
            Multi-scenario gallery concepts
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-neutral-600">
            Five low-fidelity iterations for how the bench could grow past a single prompt and a single skill axis.
            None of these are wired to data yet; use them to decide direction before refactoring the manifest.
          </p>
          <p className="mt-4 text-sm text-neutral-500">
            Back to the{" "}
            <Link href="/" className="font-medium text-neutral-800 underline decoration-neutral-300 underline-offset-2 hover:text-[var(--gallery-accent)]">
              main gallery
            </Link>
            .
          </p>
        </header>

        <ol className="mt-14 space-y-12">
          {iterations.map((item, index) => (
            <li key={item.id}>
              <article className="space-y-4 border-t border-neutral-200 pt-10 first:border-t-0 first:pt-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-sm font-medium tabular-nums text-neutral-400">{index + 1}</span>
                  <h2 className="text-xl font-medium tracking-tight text-neutral-900">{item.name}</h2>
                </div>
                <p className="max-w-2xl text-[15px] leading-relaxed text-neutral-600">{item.summary}</p>
                <p className="max-w-2xl text-sm text-neutral-500">
                  <span className="font-medium text-neutral-700">Tradeoffs · </span>
                  {item.tradeoffs}
                </p>
                <div className="pt-1">{item.mock}</div>
              </article>
            </li>
          ))}
        </ol>
      </main>
    </>
  );
}
