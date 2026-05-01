export function LandingGrove() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-[#f0fdf4] text-emerald-950">
      <div className="pointer-events-none absolute -top-40 right-[-18%] size-[520px] rounded-full bg-teal-300/35 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-35%] left-[-12%] size-[620px] rounded-full bg-emerald-400/25 blur-3xl" />

      <header className="relative border-b border-emerald-900/10 bg-white/55 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-6 lg:px-8">
          <span className="text-sm font-semibold tracking-tight text-emerald-950">
            Mnemosyne Grove
          </span>
          <nav aria-label="Primary" className="flex items-center gap-8">
            <a
              href="#rhythm"
              className="text-sm text-emerald-900/70 hover:text-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              Rhythms
            </a>
            <a
              href="#cta"
              className="text-sm text-emerald-900/70 hover:text-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              Sanctuary
            </a>
          </nav>
        </div>
      </header>

      <main className="relative">
        <section className="mx-auto max-w-6xl px-6 pb-24 pt-16 lg:px-8 lg:pt-24">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:items-center">
            <div className="space-y-8">
              <p className="text-sm font-semibold text-teal-700">
                Gentle persistence · humane cadence
              </p>
              <h1 className="max-w-[18ch] text-balance text-5xl tracking-tight text-emerald-950 sm:text-6xl lg:text-7xl font-semibold">
                Grow ideas like canopy—not clutter.
              </h1>
              <p className="max-w-[54ch] text-pretty text-lg leading-8 text-emerald-900/75">
                Mnemosyne slows the inbox without starving ambition: rituals scaffold reflection,
                mossy gradients cue calm depth, and resurfacing respects seasonal attention spans.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-3 text-base font-medium text-white ring-1 ring-emerald-700 hover:bg-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  Cultivate my grove
                </a>
                <a
                  href="#rhythm"
                  className="inline-flex items-center justify-center px-4 py-3 text-base font-medium text-emerald-900/80 hover:text-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  Preview seasonal rituals →
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-emerald-900/10 bg-white/75 p-10 shadow-[0_35px_120px_-65px_rgba(6,95,70,0.65)] ring-1 ring-emerald-900/10 backdrop-blur-xl">
              <div className="flex flex-col gap-8">
                <div className="rounded-2xl bg-linear-to-br from-emerald-600 via-teal-600 to-emerald-700 p-[1px]">
                  <div className="rounded-2xl bg-white px-8 py-8">
                    <p className="text-sm font-semibold text-teal-700">Tonight&apos;s grove loop</p>
                    <ul className="mt-6 flex flex-col gap-4 text-base leading-7 text-emerald-950/85" role="list">
                      <li>Sweep inbox moss · 6 notes</li>
                      <li>Water dormant threads · 2 revivals</li>
                      <li>Archive brittle drafts · guilt-free</li>
                    </ul>
                  </div>
                </div>
                <p className="text-pretty text-base leading-7 text-emerald-900/75">
                  Quiet badges honor streaks without alarms—growth metrics stay botanical, never gamified slot machines.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="rhythm" className="border-t border-emerald-900/10 bg-white/65 py-20 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="max-w-xl space-y-4">
              <h2 className="text-balance text-3xl tracking-tight text-emerald-950 sm:text-4xl font-semibold">
                Habitat-aware notebooks.
              </h2>
              <p className="max-w-[52ch] text-pretty text-base leading-7 text-emerald-900/75">
                Left-aligned grids echo trails—not billboards—keeping grounded rhythm while hero blooms above.
              </p>
            </div>
            <ul className="mt-14 grid gap-10 lg:grid-cols-3" role="list">
              {[
                {
                  title: "Circadian shading",
                  body: "Interfaces shift warmth through the day—night sessions dim chlorophyll glare automatically.",
                },
                {
                  title: "Biome tagging",
                  body: "Clusters inherit moss/fern/canopy motifs so scans stay tactile without emoji overload.",
                },
                {
                  title: "Slow-search paths",
                  body: "Timeline scrubbing favors meandering recall walks instead of brittle keyword bingo.",
                },
              ].map((f) => (
                <li key={f.title} className="rounded-2xl border border-emerald-900/10 bg-[#ecfccb]/70 p-8 ring-1 ring-emerald-900/10">
                  <h3 className="text-xl tracking-tight text-emerald-950 font-semibold">{f.title}</h3>
                  <p className="mt-4 text-pretty text-base leading-7 text-emerald-900/75">{f.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="cta" className="py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="rounded-[2rem] border border-emerald-900/10 bg-linear-to-br from-emerald-600 via-teal-600 to-emerald-800 p-10 text-emerald-50 ring-1 ring-emerald-900/15 shadow-[0_45px_140px_-65px_rgba(6,95,70,0.85)] sm:p-14">
              <div className="max-w-xl space-y-6">
                <h2 className="text-balance text-3xl tracking-tight sm:text-4xl font-semibold text-white">
                  Root memory deep; browse sunlight slow.
                </h2>
                <p className="max-w-[52ch] text-pretty text-base leading-7 text-emerald-50/85">
                  Mnemosyne Grove trades hustle dashboards for restorative clarity—the kind that survives vacations intact.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-emerald-900/10 bg-white/55 py-10 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-emerald-900/65 lg:px-8">
          <span>Mnemosyne</span>
          <span className="tabular-nums">Concept · Grove</span>
        </div>
      </footer>
    </div>
  );
}
