export function LandingEditorial({
  serifHeadingClass,
}: {
  serifHeadingClass: string;
}) {
  return (
    <div className="min-h-dvh bg-[#f6f2ea] text-neutral-900">
      <header className="border-b border-neutral-900/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-6 lg:px-8">
          <span className="text-sm font-medium tracking-wide text-neutral-700">
            Mnemosyne Journal
          </span>
          <nav aria-label="Primary" className="flex items-center gap-8">
            <a
              href="#essay"
              className="text-sm text-neutral-600 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
            >
              Philosophy
            </a>
            <a
              href="#cta"
              className="text-sm text-neutral-600 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
            >
              Letters
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-14 lg:px-8 lg:pt-20">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:items-start">
            <div className="space-y-10">
              <p className="text-sm font-medium text-amber-900/80">
                On cultivating memory on purpose
              </p>
              <h1
                className={`max-w-[15ch] text-balance text-5xl tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl font-semibold ${serifHeadingClass}`}
              >
                A desk for thoughts that refuse to stay linear.
              </h1>
              <p className="max-w-[54ch] text-pretty text-lg leading-8 text-neutral-700">
                Mnemosyne treats notes as unfinished essays—margins wide enough for doubt,
                density tuned for recall. Capture quickly, revisit gently, connect generously.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-3 text-base font-medium text-[#f6f2ea] ring-1 ring-neutral-900 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
                >
                  Begin a commonplace book
                </a>
                <a
                  href="#essay"
                  className="inline-flex items-center justify-center px-4 py-3 text-base font-medium text-neutral-700 underline decoration-neutral-900/20 underline-offset-4 hover:decoration-neutral-900/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
                >
                  Read the workflow manifesto
                </a>
              </div>
            </div>
            <aside className="rounded-3xl border border-neutral-900/10 bg-white/70 p-8 shadow-[0_24px_80px_-48px_rgba(62,49,31,0.45)] ring-1 ring-neutral-900/5 backdrop-blur-sm">
              <p className="text-sm font-medium text-neutral-500">Marginalia</p>
              <blockquote className="mt-6 space-y-6">
                <p className="text-pretty text-xl leading-8 text-neutral-900 font-medium">
                  “The mind wanders in prose; notes should wander with it.”
                </p>
                <footer className="text-sm text-neutral-600">
                  — Mnemosyne editors
                </footer>
              </blockquote>
              <div className="mt-10 border-t border-neutral-900/10 pt-8">
                <p className="text-sm leading-6 text-neutral-600">
                  Weekly synthesis letters stitch stray bullets into narratives—never forcing hierarchy too early.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section id="essay" className="border-t border-neutral-900/10 bg-white/60 py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="max-w-xl space-y-4">
              <h2 className={`text-balance text-5xl tracking-tight text-neutral-950 sm:text-6xl font-semibold ${serifHeadingClass}`}>
                Tools for reflective capture.
              </h2>
              <p className="max-w-[52ch] text-pretty text-base leading-7 text-neutral-700">
                Stay inside prose-first layouts—cards appear only when structure earns them.
              </p>
            </div>
            <ul className="mt-14 grid gap-10 lg:grid-cols-3" role="list">
              {[
                {
                  title: "Morning pages mode",
                  body: "Timers gentle enough for honesty; typography tuned for reading aloud later.",
                },
                {
                  title: "Citation-aware snippets",
                  body: "Pull quotes retain lineage—footnotes remain light, never bureaucratic.",
                },
                {
                  title: "Seasonal reviews",
                  body: "Quarterly arcs cluster recurring motifs without burying nuance under KPI language.",
                },
              ].map((f) => (
                <li key={f.title} className="rounded-2xl border border-neutral-900/10 bg-[#faf7f2] p-8 ring-1 ring-neutral-900/5">
                  <h3 className="text-xl tracking-tight text-neutral-950 font-semibold">{f.title}</h3>
                  <p className="mt-4 text-pretty text-base leading-7 text-neutral-700">{f.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="cta" className="py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="rounded-3xl border border-neutral-900/10 bg-linear-to-br from-amber-100/70 via-white to-[#eee4d8] p-10 ring-1 ring-neutral-900/10 sm:p-14">
              <div className="max-w-xl space-y-6">
                <h2 className={`text-balance text-5xl tracking-tight text-neutral-950 sm:text-6xl font-semibold ${serifHeadingClass}`}>
                  Invite calm recall—not frantic search.
                </h2>
                <p className="max-w-[48ch] text-pretty text-base leading-7 text-neutral-700">
                  Mnemosyne balances poetic latitude with pragmatic retrieval cues so depth never disappears behind dashboards.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-900/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-neutral-600 lg:px-8">
          <span>Mnemosyne</span>
          <span className="tabular-nums">Concept · Editorial</span>
        </div>
      </footer>
    </div>
  );
}
