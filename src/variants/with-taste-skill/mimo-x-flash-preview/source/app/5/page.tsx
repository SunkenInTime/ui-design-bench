import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "05 Signal — Marrow",
  description:
    "Most of what you think is noise. Marrow is a second brain that finds the signal — capture everything, keep what compounds.",
};

const TICKER_ITEMS = [
  "capture: draft the Kyoto budget section",
  "link → meeting notes ↔ roadmap",
  "resurface: essay on memory palaces, last touched 47 days ago",
  "tag proposed: #systems-thinking",
  "digest: 12 notes written · 4 forgotten · 1 linked",
  "search: “what did I say about Gödel?” → 3 hits",
  "inbox empty — rare and suspicious",
  "sync: encrypted, 0 conflicts",
];

const MANIFESTO = [
  {
    line: "01",
    title: "Everything is noise at first",
    body: "A thought arrives half-formed. The wrong response is to force it into a system before it has earned one. Capture the noise. Judge it later — or don't. Marrow never scolds you for an empty folder.",
  },
  {
    line: "02",
    title: "Signal is what compounds",
    body: "The note you return to, the phrase you re-read, the idea three other notes keep pointing at — that's signal. Marrow tracks attention, not just creation, and surfaces the compounders.",
  },
  {
    line: "03",
    title: "Retrieval is the only feature",
    body: "Writing is cheap. Finding is hard. Every surface in Marrow — search, graph, daily digest — is a retrieval instrument. If a feature doesn't help you find a thought again, it doesn't ship.",
  },
];

const CHANNELS = [
  {
    k: "Capture channel",
    v: "Global hotkey · voice · share sheet · email-in",
    m: "latency < 200ms",
  },
  {
    k: "Link channel",
    v: "Mentions, proposals, manual edges",
    m: "bidirectional",
  },
  {
    k: "Resurface channel",
    v: "Daily forgotten-note, weekly broadsheet",
    m: "1 + 1 cadence",
  },
  {
    k: "Export channel",
    v: "Markdown, plain text, JSON graph, PDF",
    m: "no lock-in",
  },
];

export default function VariantFive() {
  return (
    <div className="ui min-h-screen bg-[#0a0a0a] text-[#e8e6e3]">
      {/* nav */}
      <header className="border-b border-white/[0.08]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <span className="block h-2 w-2 animate-pulse rounded-full bg-[#a78bfa]" />
            <span className="text-sm font-semibold tracking-tight text-white">
              Marrow
            </span>
            <span className="mono ml-2 hidden text-[10px] uppercase tracking-[0.2em] text-white/35 sm:inline">
              /signal
            </span>
          </div>
          <div className="flex items-center gap-6 text-xs text-white/50">
            <a href="#manifesto" className="transition-colors hover:text-white">
              Manifesto
            </a>
            <a href="#channels" className="transition-colors hover:text-white">
              Channels
            </a>
            <a
              href="#get"
              className="text-[#c4b5fd] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a78bfa]"
            >
              Install →
            </a>
          </div>
        </div>
      </header>

      {/* ticker — signature */}
      <div
        className="overflow-hidden border-b border-white/[0.08] bg-[#12101a]"
        aria-hidden="true"
      >
        <div className="flex whitespace-nowrap py-2.5">
          <div className="marquee-track flex shrink-0 items-center">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((t, i) => (
              <span
                key={i}
                className="mono mx-6 text-[11px] tracking-wide text-violet-300/70"
              >
                <span className="mr-2 text-violet-400/40">›</span>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <main>
        {/* hero */}
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-5xl">
            <p className="mono text-[10px] uppercase tracking-[0.3em] text-violet-400/70">
              Signal from noise &nbsp;·&nbsp; v0.9 public beta
            </p>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.035em] text-white md:text-[4.75rem]">
              Most of what you think
              <br />
              is{" "}
              <span className="text-white/35 line-through decoration-[#a78bfa] decoration-[3px]">
                noise
              </span>
              .{" "}
              <span className="bg-gradient-to-br from-violet-300 via-[#a78bfa] to-fuchsia-300 bg-clip-text text-transparent">
                Keep the signal.
              </span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-white/55 md:text-lg">
              Marrow is a second brain built around one idea: capture
              everything, judge nothing, and let the notes that compound rise to
              the surface on their own.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#get"
                className="inline-flex h-12 items-center bg-[#a78bfa] px-7 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-violet-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
              >
                Install Marrow
              </a>
              <a
                href="#manifesto"
                className="inline-flex h-12 items-center px-2 text-sm font-medium text-white/60 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
              >
                Read the manifesto
              </a>
            </div>
          </div>
        </section>

        {/* manifesto */}
        <section id="manifesto" className="border-t border-white/[0.08] px-6 py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <p className="mono text-[10px] uppercase tracking-[0.28em] text-white/35">
              Manifesto — three lines
            </p>
            <div className="mt-10 space-y-0">
              {MANIFESTO.map((m) => (
                <article
                  key={m.line}
                  className="grid gap-4 border-t border-white/[0.08] py-10 md:grid-cols-12 md:gap-10"
                >
                  <span className="mono text-xs tracking-widest text-violet-400 md:col-span-2">
                    {m.line}
                  </span>
                  <div className="md:col-span-10">
                    <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                      {m.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/55">
                      {m.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* channels */}
        <section id="channels" className="border-t border-white/[0.08] px-6 py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <p className="mono text-[10px] uppercase tracking-[0.28em] text-white/35">
              Four channels, no folders
            </p>
            <div className="mt-8 overflow-hidden rounded-lg border border-white/[0.1]">
              {CHANNELS.map((c) => (
                <div
                  key={c.k}
                  className="grid gap-2 border-b border-white/[0.08] bg-white/[0.02] px-5 py-4 last:border-b-0 hover:bg-white/[0.04] md:grid-cols-12 md:items-baseline md:gap-6"
                >
                  <span className="mono text-[11px] font-medium uppercase tracking-[0.14em] text-violet-300 md:col-span-3">
                    {c.k}
                  </span>
                  <span className="text-sm text-white/70 md:col-span-6">
                    {c.v}
                  </span>
                  <span className="mono text-[10px] uppercase tracking-[0.14em] text-white/30 md:col-span-3 md:text-right">
                    {c.m}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="get" className="border-t border-white/[0.08] px-6 py-20 md:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="mx-auto max-w-xl text-4xl font-semibold leading-[1.1] tracking-[-0.03em] text-white md:text-5xl">
              Install once.
              <br />
              Think in public
              <span className="text-violet-400"> with yourself</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/50">
              macOS, Windows, Linux, and iOS. Local-first. Encrypted sync
              optional. Cancel the subscription, keep every file.
            </p>
            <a
              href="#"
              className="mt-9 inline-flex h-12 items-center bg-[#a78bfa] px-8 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-violet-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
            >
              Download the beta
            </a>
            <p className="mono mt-5 text-[10px] uppercase tracking-[0.2em] text-white/30">
              Free while in beta &nbsp;·&nbsp; No account required
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.08] px-6 py-6">
        <div className="mono mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-[10px] uppercase tracking-[0.18em] text-white/30 sm:flex-row">
          <span>Marrow &copy; 2026</span>
          <span>Signal &gt; noise</span>
        </div>
      </footer>
    </div>
  );
}
