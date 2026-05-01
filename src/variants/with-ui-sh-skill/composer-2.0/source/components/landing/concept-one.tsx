export function LandingVault({ monoFont }: { monoFont: string }) {
  return (
    <div className="min-h-dvh bg-neutral-950 text-neutral-100">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-6 lg:px-8">
          <div className={`text-sm tracking-wide text-emerald-400/90 uppercase ${monoFont}`}>
            mnemosyne
          </div>
          <nav aria-label="Primary" className="flex items-center gap-6">
            <a
              href="#features"
              className="text-sm text-neutral-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              Graph
            </a>
            <a
              href="#cta"
              className="text-sm text-neutral-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              Capture
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 pb-24 pt-16 lg:px-8 lg:pt-24">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <div className="max-w-2xl space-y-8">
              <p className={`text-sm text-emerald-400/90 uppercase tracking-wide ${monoFont}`}>
                Second brain · offline-first
              </p>
              <h1 className="max-w-[18ch] text-balance text-5xl tracking-tight text-white sm:text-6xl lg:text-7xl font-semibold">
                Notes that remember how you think.
              </h1>
              <p className="max-w-[52ch] text-pretty text-lg leading-7 text-neutral-400">
                Link ideas in a living graph, surface dormant thoughts at the right moment,
                and keep a calm vault that scales from fragments to manuscripts—without losing
                the thread.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-base font-medium text-neutral-950 ring-1 ring-emerald-500 hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                >
                  Start capturing
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-4 py-3 text-base font-medium text-neutral-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                >
                  See the graph workflow →
                </a>
              </div>
            </div>
            <div
              className={`relative min-h-[220px] flex-1 rounded-2xl border border-white/10 bg-neutral-900/60 p-6 ring-1 ring-white/5 lg:max-w-md ${monoFont}`}
              aria-hidden
            >
              <div className="absolute inset-x-6 top-6 h-px bg-linear-to-r from-transparent via-emerald-500/40 to-transparent" />
              <pre className="mt-10 whitespace-pre-wrap text-[0.8125rem] leading-6 text-neutral-400">
                {`[[Meeting notes]]
  ties → [[Roadmap Q3]]

next_actions:
  - [[Draft outline]]
  - #review/clarity`}
              </pre>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="border-t border-white/10 bg-neutral-925 py-20 text-neutral-100"
          style={{ backgroundColor: "#0c0c0f" }}
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="max-w-xl space-y-4">
              <h2 className="text-balance text-3xl tracking-tight text-white sm:text-4xl font-semibold">
                Built for associative minds.
              </h2>
              <p className="max-w-[52ch] text-pretty text-base leading-7 text-neutral-400">
                Every iteration stays anchored to retrieval: fewer folders, more pathways back to what you meant.
              </p>
            </div>
            <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {[
                {
                  title: "Bi-directional links",
                  body: "Follow trails forward and backward—references stay alive instead of orphaned highlights.",
                },
                {
                  title: "Frictionless inbox",
                  body: "Dump thoughts fast; classify later with lightweight tagging that stays out of your way.",
                },
                {
                  title: "Quiet surfacing",
                  body: "Periodic reminders resurface dormant notes when context aligns—without breaking flow.",
                },
              ].map((f) => (
                <li key={f.title} className="rounded-2xl border border-white/10 bg-neutral-950/60 p-8 ring-1 ring-black/40">
                  <h3 className="text-xl tracking-tight text-white font-semibold">{f.title}</h3>
                  <p className="mt-4 text-pretty text-base leading-7 text-neutral-400">{f.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="cta" className="py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="rounded-3xl border border-white/10 bg-linear-to-br from-emerald-500/15 via-neutral-900 to-neutral-950 p-10 ring-1 ring-white/10 sm:p-14">
              <div className="max-w-xl space-y-6">
                <h2 className="text-balance text-3xl tracking-tight text-white sm:text-4xl font-semibold">
                  Claim your neural atlas.
                </h2>
                <p className="max-w-[48ch] text-pretty text-base leading-7 text-neutral-300">
                  Mnemosyne stays fast at note volumes where folders choke—because structure emerges from usage.
                </p>
                <p className={`text-sm text-emerald-300/90 uppercase tracking-wide ${monoFont}`}>
                  Private beta · encrypted sync optional
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-neutral-500 lg:px-8">
          <span>Mnemosyne</span>
          <span className={`tabular-nums ${monoFont}`}>Concept · Vault</span>
        </div>
      </footer>
    </div>
  );
}
