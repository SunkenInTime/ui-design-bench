export function LandingGlass() {
  return (
    <div className="min-h-dvh bg-[#eef2ff] text-neutral-900">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(129,140,248,0.35),_transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(56,189,248,0.25),_transparent_50%)]" />

      <header className="relative border-b border-indigo-950/10 bg-white/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5 lg:px-8">
          <span className="text-sm font-semibold tracking-tight text-indigo-950">
            Mnemosyne Cloud
          </span>
          <nav aria-label="Primary" className="flex items-center gap-8">
            <a
              href="#workflow"
              className="text-sm text-indigo-950/70 hover:text-indigo-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Workflow
            </a>
            <a
              href="#cta"
              className="text-sm text-indigo-950/70 hover:text-indigo-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Pricing soon
            </a>
          </nav>
        </div>
      </header>

      <main className="relative">
        <section className="mx-auto max-w-6xl px-6 pb-24 pt-16 lg:px-8 lg:pt-24">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
              Synced second brain
            </p>
            <h1 className="text-balance text-5xl tracking-tight text-indigo-950 sm:text-6xl lg:text-7xl font-semibold">
              Capture once. Recall everywhere—with clarity intact.
            </h1>
            <p className="mx-auto max-w-[54ch] text-pretty text-lg leading-8 text-indigo-950/75">
              Mnemosyne pairs luminous notebooks with deterministic search: fuzzy when you are exploratory,
              precise when deadlines loom.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-base font-medium text-white ring-1 ring-indigo-600 hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Join waitlist
              </a>
              <a
                href="#workflow"
                className="inline-flex items-center justify-center rounded-full bg-white/70 px-5 py-3 text-base font-medium text-indigo-950 ring-1 ring-indigo-950/15 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Interactive tour
              </a>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/70 bg-white/70 p-8 shadow-[0_30px_120px_-60px_rgba(79,70,229,0.55)] ring-1 ring-indigo-950/10 backdrop-blur-xl lg:col-span-2">
              <div className="flex items-center gap-3">
                <span className="size-3 rounded-full bg-emerald-400" />
                <span className="size-3 rounded-full bg-amber-400" />
                <span className="size-3 rounded-full bg-rose-400" />
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-6 ring-1 ring-indigo-950/5">
                  <p className="text-sm font-semibold text-indigo-900">Daily digest</p>
                  <p className="mt-3 text-pretty text-base leading-7 text-indigo-950/75">
                    Three resurfaced threads matched to calendar density—not engagement hacks.
                  </p>
                </div>
                <div className="rounded-2xl border border-white bg-white/90 p-6 ring-1 ring-indigo-950/10">
                  <p className="text-sm font-semibold text-indigo-900">Live collaborators</p>
                  <p className="mt-3 text-pretty text-base leading-7 text-indigo-950/75">
                    Presence indicators stay monochrome until you intentionally spotlight a note.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-white/80 bg-linear-to-b from-white via-white to-indigo-50/90 p-8 shadow-[0_30px_120px_-70px_rgba(56,189,248,0.55)] ring-1 ring-indigo-950/10 backdrop-blur-xl">
              <p className="text-sm font-semibold text-indigo-900">Latency budget</p>
              <p className="mt-4 text-pretty text-base leading-7 text-indigo-950/75">
                Cold opens stay under perceptual thresholds—even when attachments hitch along for the ride.
              </p>
              <div className="mt-8 rounded-2xl bg-indigo-950 px-5 py-4 text-white">
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-200">
                  SOC2 roadmap
                </p>
                <p className="mt-2 text-pretty text-sm leading-6 text-indigo-100">
                  Transparent audits mirror how we handle your recall graph—nothing ornamental.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="workflow" className="border-t border-indigo-950/10 bg-white/55 py-20 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="max-w-xl space-y-4">
              <h2 className="text-balance text-3xl tracking-tight text-indigo-950 sm:text-4xl font-semibold">
                Operational clarity without sterile dashboards.
              </h2>
              <p className="max-w-[52ch] text-pretty text-base leading-7 text-indigo-950/75">
                Same rhythm top to bottom: airy spacing, lucid hierarchy, calm surfaces—whether hero or grid.
              </p>
            </div>
            <ul className="mt-14 grid gap-10 lg:grid-cols-3" role="list">
              {[
                {
                  title: "Unified capture tray",
                  body: "Voice, screenshots, URLs land in one staging lane—classification deferred until intent stabilizes.",
                },
                {
                  title: "Confidence-ranked recall",
                  body: "Results expose why they surfaced—signals stay inspectable instead of opaque ranking bubbles.",
                },
                {
                  title: "Portable exports",
                  body: "Markdown bundles preserve backlinks—leave anytime without ransom formatting.",
                },
              ].map((f) => (
                <li key={f.title} className="rounded-2xl border border-white/90 bg-white/90 p-8 ring-1 ring-indigo-950/10 shadow-[0_18px_80px_-48px_rgba(79,70,229,0.45)]">
                  <h3 className="text-xl tracking-tight text-indigo-950 font-semibold">{f.title}</h3>
                  <p className="mt-4 text-pretty text-base leading-7 text-indigo-950/75">{f.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="cta" className="py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="rounded-3xl border border-white/70 bg-linear-to-br from-indigo-600 via-indigo-600 to-sky-500 p-10 text-center text-white ring-1 ring-indigo-950/10 shadow-[0_40px_140px_-60px_rgba(79,70,229,0.85)] sm:p-14">
              <h2 className="mx-auto max-w-xl text-balance text-3xl tracking-tight sm:text-4xl font-semibold">
                Ship thinking—not stacks of screenshots.
              </h2>
              <p className="mx-auto mt-6 max-w-[52ch] text-pretty text-base leading-7 text-indigo-100">
                Mnemosyne handles retention mechanics while you stay inside sentences worth revisiting.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-indigo-950/10 bg-white/55 py-10 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-indigo-950/70 lg:px-8">
          <span>Mnemosyne</span>
          <span className="tabular-nums">Concept · Glass</span>
        </div>
      </footer>
    </div>
  );
}
