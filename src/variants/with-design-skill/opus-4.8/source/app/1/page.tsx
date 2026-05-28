import { Fraunces, IBM_Plex_Mono } from "next/font/google";
import { NeuralField } from "./NeuralField";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--syn-display",
  axes: ["SOFT", "WONK", "opsz"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--syn-mono",
});

const FEATURES = [
  {
    idx: "01",
    title: "Capture sparks",
    body: "Frictionless capture from anywhere. A thought becomes a node the instant it arrives — no folders, no filing, no friction.",
  },
  {
    idx: "02",
    title: "Connect ideas",
    body: "Bidirectional links weave notes into a living graph. The more you write, the smarter the constellation becomes.",
  },
  {
    idx: "03",
    title: "Recall instantly",
    body: "Semantic search surfaces what you half-remember. Ask in plain language; your past self answers.",
  },
];

export default function SynapsePage() {
  return (
    <main
      className={`${fraunces.variable} ${mono.variable} relative min-h-screen overflow-hidden bg-[#080711] text-[#ECE7F5] selection:bg-[#f5b642] selection:text-black`}
      style={{ fontFamily: "var(--syn-mono), ui-monospace, monospace" }}
    >
      {/* Atmospheric base */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 70% -10%, rgba(120,89,255,0.16), transparent 60%), radial-gradient(900px 700px at 10% 110%, rgba(245,182,66,0.10), transparent 55%)",
        }}
      />
      <NeuralField />
      {/* Grain + vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          background:
            "radial-gradient(120% 120% at 50% 30%, transparent 55%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 sm:px-10">
        {/* Nav */}
        <header className="flex items-center justify-between py-7">
          <div className="flex items-center gap-3">
            <span
              className="relative inline-flex h-7 w-7 items-center justify-center rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 50% 40%, #ffd98a, #f5b642 45%, #6a4cff)",
                boxShadow: "0 0 22px rgba(245,182,66,0.6)",
              }}
            />
            <span className="text-[13px] font-medium uppercase tracking-[0.42em] text-white/80">
              Synapse
            </span>
          </div>
          <nav className="hidden items-center gap-9 text-[12px] uppercase tracking-[0.2em] text-white/45 md:flex">
            <a className="transition-colors hover:text-white" href="#features">
              Method
            </a>
            <a className="transition-colors hover:text-white" href="#graph">
              The graph
            </a>
            <a className="transition-colors hover:text-white" href="#start">
              Pricing
            </a>
          </nav>
          <a
            href="#start"
            className="rounded-full border border-white/15 px-5 py-2 text-[12px] uppercase tracking-[0.2em] text-white/80 transition-colors hover:border-[#f5b642] hover:text-[#f5b642]"
          >
            Sign in
          </a>
        </header>

        {/* Hero */}
        <section className="flex flex-1 flex-col justify-center py-16">
          <p
            className="mb-7 inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[11px] uppercase tracking-[0.28em] text-[#f5b642]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#f5b642]" />
            Your second brain, alive
          </p>

          <h1
            className="max-w-4xl text-balance text-[clamp(3rem,9vw,7.5rem)] font-light leading-[0.94] tracking-[-0.02em] text-white"
            style={{
              fontFamily: "var(--syn-display), Georgia, serif",
              fontVariationSettings: "'SOFT' 40, 'WONK' 0, 'opsz' 144",
            }}
          >
            Your mind,
            <br />
            <em
              className="italic"
              style={{
                background:
                  "linear-gradient(110deg,#ffe7b0 10%,#f5b642 45%,#9a7bff 95%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fontVariationSettings: "'SOFT' 90, 'WONK' 1, 'opsz' 144",
              }}
            >
              illuminated.
            </em>
          </h1>

          <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-white/55">
            Synapse is a note-taking app that thinks the way you do — capturing
            sparks, linking them into constellations, and lighting the path back
            to every idea you&apos;ve ever had.
          </p>

          <div id="start" className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#f5b642] px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.16em] text-[#160e02] transition-transform hover:scale-[1.02]"
              style={{ boxShadow: "0 0 40px -6px rgba(245,182,66,0.6)" }}
            >
              Start thinking free
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#features"
              className="text-[13px] uppercase tracking-[0.16em] text-white/55 underline-offset-8 transition-colors hover:text-white hover:underline"
            >
              See the method
            </a>
          </div>

          <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] text-center backdrop-blur-sm">
            {[
              ["2.4M", "nodes linked daily"],
              ["120ms", "median recall"],
              ["∞", "thoughts, one graph"],
            ].map(([k, v]) => (
              <div key={v} className="bg-[#0a0814]/40 px-4 py-6">
                <dt
                  className="text-3xl font-light text-[#f5b642]"
                  style={{ fontFamily: "var(--syn-display), serif" }}
                >
                  {k}
                </dt>
                <dd className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/40">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>

      {/* Features */}
      <section
        id="features"
        className="relative z-10 border-t border-white/10 bg-[#06050d]/70 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <div className="mb-14 flex items-end justify-between gap-6">
            <h2
              className="max-w-md text-[clamp(1.8rem,4vw,3rem)] font-light leading-[1.05] text-white"
              style={{ fontFamily: "var(--syn-display), serif" }}
            >
              Three motions of thought.
            </h2>
            <span className="hidden text-[11px] uppercase tracking-[0.24em] text-white/35 md:block">
              The Synapse method
            </span>
          </div>
          <div id="graph" className="grid gap-px sm:grid-cols-3">
            {FEATURES.map((f) => (
              <article
                key={f.idx}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-8 transition-colors hover:border-[#f5b642]/40 hover:bg-white/[0.04]"
              >
                <span
                  className="text-[11px] tracking-[0.3em] text-[#f5b642]/70"
                >
                  {f.idx}
                </span>
                <h3
                  className="mt-5 text-2xl font-normal text-white"
                  style={{ fontFamily: "var(--syn-display), serif" }}
                >
                  {f.title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-white/50">
                  {f.body}
                </p>
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "rgba(245,182,66,0.25)" }}
                />
              </article>
            ))}
          </div>

          <footer className="mt-24 flex flex-col items-center gap-4 border-t border-white/10 pt-10 text-center sm:flex-row sm:justify-between sm:text-left">
            <p
              className="text-2xl font-light text-white/80"
              style={{ fontFamily: "var(--syn-display), serif" }}
            >
              Synapse
            </p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/35">
              © {new Date().getFullYear()} — Light up what you know
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}
