import "@/generated/scoped-variant-css/without-design-skill/mimo-x-pro-preview/source/app/two/page.css";
export default function TwoPage() {
  return (
    <div className="min-h-screen bg-[#070B10] text-[#E8EEF5]">

      <div className="nr-page nr-grid relative">
        <div className="nr-scan pointer-events-none absolute inset-0" aria-hidden />

        <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded border border-[#22D3EE]/40 bg-[#22D3EE]/10 mono text-[11px] font-bold text-[#22D3EE]">
              CX
            </span>
            <div>
              <div className="text-sm font-semibold tracking-wide">CORTEX</div>
              <div className="mono text-[10px] uppercase tracking-[0.18em] text-[#7C8B9A]">
                second brain · online
              </div>
            </div>
          </div>
          <nav className="mono hidden items-center gap-6 text-[12px] text-[#7C8B9A] md:flex">
            <a className="transition-colors hover:text-[#22D3EE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]" href="#system">system</a>
            <a className="transition-colors hover:text-[#22D3EE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]" href="#pipeline">pipeline</a>
            <a className="transition-colors hover:text-[#22D3EE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]" href="#status">status</a>
            <a
              className="rounded border border-[#A3E635]/50 bg-[#A3E635]/10 px-3 py-1.5 text-[#A3E635] transition-colors hover:bg-[#A3E635]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3E635]"
              href="#boot"
            >
              boot session
            </a>
          </nav>
        </header>

        <section className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 pb-14 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-16">
          <div>
            <p className="mono mb-4 inline-flex items-center gap-2 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[#22D3EE]">
              <span className="nr-pulse inline-block h-1.5 w-1.5 rounded-full bg-[#A3E635]" />
              neural link ready
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
              Second brain online.
              <span className="mt-2 block text-[#22D3EE]">Connections loading.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#A8B6C4] md:text-lg">
              Cortex turns scattered notes into a living graph. Capture at the speed of thought,
              link without folders, and query your own history like a system.
            </p>
            <div className="mono mt-8 flex flex-wrap gap-3 text-[13px]">
              <a
                href="#boot"
                className="inline-flex min-h-11 items-center rounded border border-[#22D3EE] bg-[#22D3EE] px-5 font-semibold text-[#041016] transition-colors hover:bg-[#67E8F9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3E635]"
              >
                start capture
              </a>
              <a
                href="#pipeline"
                className="inline-flex min-h-11 items-center rounded border border-white/15 px-5 text-[#E8EEF5] transition-colors hover:border-[#22D3EE]/50 hover:text-[#22D3EE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
              >
                inspect pipeline →
              </a>
            </div>
            <dl className="mono mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 text-[11px] uppercase tracking-[0.12em] text-[#7C8B9A]">
              <div>
                <dt>latency</dt>
                <dd className="mt-1 text-lg normal-case tracking-normal text-[#E8EEF5]">&lt; 40ms</dd>
              </div>
              <div>
                <dt>links / note</dt>
                <dd className="mt-1 text-lg normal-case tracking-normal text-[#A3E635]">auto</dd>
              </div>
              <div>
                <dt>export</dt>
                <dd className="mt-1 text-lg normal-case tracking-normal text-[#E8EEF5]">md · json</dd>
              </div>
            </dl>
          </div>

          <div className="nr-terminal rounded-sm p-1">
            <div className="mono flex items-center justify-between border-b border-white/10 px-3 py-2 text-[11px] text-[#7C8B9A]">
              <span>cortex://vault/live</span>
              <span className="text-[#A3E635]">● listening</span>
            </div>
            <div className="mono space-y-3 p-4 text-[12px] leading-6 md:text-[13px]">
              <p className="text-[#7C8B9A]">
                <span className="text-[#22D3EE]">user@mind</span>
                <span className="text-[#7C8B9A]">:</span>
                <span className="text-[#A3E635]">~</span>$ cortex capture
              </p>
              <p className="text-[#E8EEF5]">
                &gt; Idea: working memory is a bottleneck, not a virtue.
              </p>
              <p className="text-[#7C8B9A]">
                <span className="text-[#22D3EE]">sys</span> indexing tokens…
              </p>
              <p className="text-[#7C8B9A]">
                <span className="text-[#22D3EE]">sys</span> matching neighbors…
              </p>
              <div className="rounded border border-[#22D3EE]/20 bg-[#22D3EE]/5 p-3">
                <p className="mb-2 text-[#A3E635]">links proposed</p>
                <ul className="space-y-1 text-[#E8EEF5]">
                  <li>→ externalize / GTD</li>
                  <li>→ Zettelkasten · atomic notes</li>
                  <li>→ meeting · product review 03.12</li>
                </ul>
              </div>
              <p className="text-[#7C8B9A]">
                <span className="text-[#22D3EE]">user@mind</span>${" "}
                <span className="inline-block h-3.5 w-[7px] translate-y-0.5 bg-[#A3E635]" aria-hidden />
              </p>
            </div>
          </div>
        </section>

        <section id="system" className="relative z-10 border-y border-white/10 bg-[#0D141C]/80">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="mono mb-8 text-[11px] uppercase tracking-[0.2em] text-[#22D3EE]">
              {"// system modules"}
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  code: "01_CAPTURE",
                  title: "Instant ingest",
                  body: "Global hotkey, mobile share sheet, or CLI. Thoughts land before context switch.",
                },
                {
                  code: "02_GRAPH",
                  title: "Auto-linking",
                  body: "Semantic neighbors and hard wikilinks. You approve the graph as it grows.",
                },
                {
                  code: "03_QUERY",
                  title: "Natural recall",
                  body: 'Ask: “what did I say about onboarding friction?” Get notes, sources, and paths.',
                },
              ].map((m) => (
                <article
                  key={m.code}
                  className="rounded-sm border border-white/10 bg-[#070B10] p-5 transition-colors hover:border-[#22D3EE]/40"
                >
                  <p className="mono mb-3 text-[11px] tracking-[0.12em] text-[#22D3EE]">{m.code}</p>
                  <h3 className="mb-2 text-lg font-semibold">{m.title}</h3>
                  <p className="text-sm leading-6 text-[#A8B6C4]">{m.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pipeline" className="relative z-10 mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Capture → Link → Recall</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#A8B6C4]">
            One continuous pipeline. No folder taxonomy. No weekly cleanup ritual required to stay useful.
          </p>
          <ol className="mono mt-8 grid gap-3 md:grid-cols-3">
            {[
              { step: "01", label: "CAPTURE", detail: "raw thought enters the buffer" },
              { step: "02", label: "LINK", detail: "graph proposes related nodes" },
              { step: "03", label: "RECALL", detail: "query returns the living path" },
            ].map((s) => (
              <li
                key={s.step}
                className="relative rounded-sm border border-[#22D3EE]/25 bg-[#0D141C] p-5"
              >
                <div className="mb-3 flex items-baseline justify-between">
                  <span className="text-[#A3E635]">{s.step}</span>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-[#7C8B9A]">{s.label}</span>
                </div>
                <p className="text-sm text-[#E8EEF5]">{s.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="status" className="relative z-10 border-t border-white/10">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" id="boot">
                Boot your vault.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-[#A8B6C4]">
                Local-first storage. Optional encrypted sync. Export anytime. Your graph is a file you own.
              </p>
            </div>
            <a
              href="#boot"
              className="mono inline-flex min-h-12 items-center justify-center rounded border border-[#A3E635] bg-[#A3E635] px-6 text-sm font-semibold text-[#0A1200] transition-colors hover:bg-[#BEF264] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
            >
              initialize cortex →
            </a>
          </div>
        </section>

        <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-2">
          <div className="mono flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 text-[11px] uppercase tracking-[0.14em] text-[#7C8B9A]">
            <span>corTEX // iteration 02 · neural</span>
            <span>status: all systems nominal</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
