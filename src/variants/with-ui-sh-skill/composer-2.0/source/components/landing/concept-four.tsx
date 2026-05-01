export function LandingTerminal({ monoClass }: { monoClass: string }) {
  return (
    <div className={`min-h-dvh bg-[#070707] text-amber-50 ${monoClass}`}>
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,191,36,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.7) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <header className="relative border-b border-amber-500/25">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5 lg:px-8">
          <span className="text-[0.8125rem] uppercase tracking-[0.22em] text-amber-400/90">
            mnemosyne<span className="text-amber-600">:</span>session
          </span>
          <nav aria-label="Primary" className="flex items-center gap-8">
            <a
              href="#protocol"
              className="text-[0.8125rem] uppercase tracking-wide text-amber-200/70 hover:text-amber-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
            >
              Protocol
            </a>
            <a
              href="#cta"
              className="text-[0.8125rem] uppercase tracking-wide text-amber-200/70 hover:text-amber-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
            >
              Manifest
            </a>
          </nav>
        </div>
      </header>

      <main className="relative">
        <section className="mx-auto max-w-6xl px-6 pb-24 pt-14 lg:px-8 lg:pt-20">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <div className="max-w-3xl space-y-8">
              <p className="text-[0.8125rem] uppercase tracking-[0.28em] text-amber-500">
                stdin · stdout · recall
              </p>
              <h1 className="max-w-[20ch] text-balance text-4xl tracking-tight text-amber-50 sm:text-5xl lg:text-6xl font-semibold uppercase">
                Pipe fleeting sparks into durable threads.
              </h1>
              <p className="max-w-[56ch] text-pretty text-base leading-7 text-amber-100/75">
                Mnemosyne CLI parity ships alongside GUI polish—macros expand snippets, watchers lint backlinks,
                and local-first replicas survive flaky uplinks without corrupting intent.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-md bg-amber-400 px-5 py-3 text-base font-medium text-neutral-950 ring-1 ring-amber-400 hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                >
                  Compile knowledge graph
                </a>
                <a
                  href="#protocol"
                  className="inline-flex items-center justify-center px-4 py-3 text-base font-medium text-amber-200/90 hover:text-amber-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                >
                  cat docs/protocol.md →
                </a>
              </div>
            </div>
            <div className="w-full max-w-xl rounded-lg border border-amber-500/35 bg-neutral-950/80 p-6 ring-1 ring-amber-500/25 shadow-[0_0_0_1px_rgba(251,191,36,0.08)]">
              <div className="flex items-center gap-2 text-[0.8125rem] text-amber-500">
                <span className="tabular-nums">v2.14.0</span>
                <span className="text-amber-700">/</span>
                <span>offline-ready</span>
              </div>
              <pre className="mt-6 whitespace-pre-wrap text-[0.8125rem] leading-6 text-amber-100/85">
                {`$ memo sync --vault cortex \\
    --strategy incremental \\
    --encrypt age:secrets.pub

✔ hydrated 428 notes in 312ms
⚠ resurfaced 3 dormant threads`}
              </pre>
            </div>
          </div>
        </section>

        <section id="protocol" className="border-t border-amber-500/25 bg-neutral-950/90 py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="max-w-xl space-y-4">
              <h2 className="text-balance text-3xl tracking-tight text-amber-50 sm:text-4xl font-semibold uppercase">
                Deterministic ergonomics.
              </h2>
              <p className="max-w-[54ch] text-pretty text-base leading-7 text-amber-100/75">
                Layout stays orthogonal—dense monospace cues signal precision without pretending to be paper.
              </p>
            </div>
            <ul className="mt-14 grid gap-10 lg:grid-cols-3" role="list">
              {[
                {
                  title: "Replayable migrations",
                  body: "Every vault rewrite emits patches your teammates can lint—no silent schema drift.",
                },
                {
                  title: "Hardware-backed keys",
                  body: "Optional WebAuthn anchors protect resurfacing schedules tied to sensitive threads.",
                },
                {
                  title: "Transparent telemetry",
                  body: "Self-hosted heartbeat pings expose latency—not engagement—so infra stays boring.",
                },
              ].map((f) => (
                <li key={f.title} className="rounded-xl border border-amber-500/25 bg-neutral-950/70 p-8 ring-1 ring-amber-500/15">
                  <h3 className="text-xl tracking-tight text-amber-50 font-semibold uppercase">{f.title}</h3>
                  <p className="mt-4 text-pretty text-base leading-7 text-amber-100/75">{f.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="cta" className="py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="rounded-xl border border-amber-500/35 bg-linear-to-br from-amber-500/15 via-neutral-950 to-neutral-950 p-10 ring-1 ring-amber-400/25 sm:p-14">
              <div className="max-w-xl space-y-6">
                <h2 className="text-balance text-3xl tracking-tight text-amber-50 sm:text-4xl font-semibold uppercase">
                  Allocate neurons elsewhere—we cache signal.
                </h2>
                <p className="max-w-[54ch] text-pretty text-base leading-7 text-amber-100/75">
                  Mnemosyne mirrors how engineers actually revisit docs: terse cues, reproducible flows, checksum-worthy exports.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-amber-500/25 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-[0.8125rem] uppercase tracking-wide text-amber-500 lg:px-8">
          <span>Mnemosyne labs</span>
          <span className="tabular-nums normal-case text-amber-200/70">Concept · Terminal</span>
        </div>
      </footer>
    </div>
  );
}
