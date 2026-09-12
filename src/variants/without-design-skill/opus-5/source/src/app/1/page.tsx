import Link from "next/link";

const nodes = [
  { x: 12, y: 30, d: "0s" },
  { x: 26, y: 62, d: "0.6s" },
  { x: 38, y: 18, d: "1.2s" },
  { x: 52, y: 46, d: "0.3s" },
  { x: 64, y: 74, d: "1.8s" },
  { x: 76, y: 26, d: "0.9s" },
  { x: 88, y: 56, d: "1.5s" },
  { x: 44, y: 86, d: "2.1s" },
];

const edges = [
  [0, 1],
  [1, 3],
  [2, 3],
  [3, 5],
  [3, 4],
  [4, 7],
  [5, 6],
  [1, 7],
];

function Constellation() {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
      className="absolute inset-0 size-full opacity-70"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="url(#edge)"
          strokeWidth="0.15"
          strokeDasharray="1.2 1.2"
          className="animate-dash"
          style={{ animationDelay: nodes[a].d }}
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r="0.45"
          fill="#a78bfa"
          className="animate-pulse-node"
          style={{ animationDelay: n.d }}
        />
      ))}
      <defs>
        <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const bento = [
  {
    span: "md:col-span-3",
    title: "Bidirectional by default",
    body: "Link a note and the other side links back. Your graph builds itself while you write, no filing required.",
    glyph: "◍",
  },
  {
    span: "md:col-span-3",
    title: "Recall, not search",
    body: "Ask in plain language. Loam answers from your own notes and shows every source it drew from.",
    glyph: "✦",
  },
  {
    span: "md:col-span-2",
    title: "Instant capture",
    body: "⌘⇧Space from anywhere. Thought in, window gone.",
    glyph: "⌁",
  },
  {
    span: "md:col-span-2",
    title: "Local-first",
    body: "Plain markdown on your disk. Sync is a feature, not a hostage.",
    glyph: "⌂",
  },
  {
    span: "md:col-span-2",
    title: "End-to-end encrypted",
    body: "We hold the ciphertext. You hold the keys.",
    glyph: "⚿",
  },
];

export default function AuroraLanding() {
  return (
    <div className="relative isolate min-h-screen flex-1 overflow-hidden bg-[#05060a] font-sans text-white selection:bg-violet-500/40">
      {/* Aurora field */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-drift absolute -top-1/3 left-1/2 size-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.30),transparent_62%)] blur-3xl" />
        <div className="animate-drift-slow absolute top-1/4 -left-40 size-[46rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.20),transparent_62%)] blur-3xl" />
        <div className="animate-drift absolute -right-40 bottom-0 size-[42rem] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.16),transparent_62%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-30 px-4 pt-5">
        <nav className="mx-auto flex max-w-6xl items-center gap-6 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2.5 backdrop-blur-xl">
          <span className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 text-[13px] font-black text-black">
              L
            </span>
            Loam
          </span>
          <div className="ml-auto hidden items-center gap-7 text-sm text-white/60 md:flex">
            <a className="transition hover:text-white" href="#features">
              Features
            </a>
            <a className="transition hover:text-white" href="#graph">
              Graph
            </a>
            <a className="transition hover:text-white" href="#pricing">
              Pricing
            </a>
          </div>
          <a
            href="#cta"
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-white/85"
          >
            Get Loam
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pt-20 pb-28 text-center sm:pt-28">
        <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[34rem]">
          <Constellation />
        </div>

        <div className="animate-rise mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 py-1.5 pr-4 pl-1.5 text-xs text-white/70 backdrop-blur">
          <span className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-2 py-0.5 text-[10px] font-bold tracking-wider text-black uppercase">
            New
          </span>
          Recall answers questions from your own notes
        </div>

        <h1
          className="animate-rise mt-8 text-5xl leading-[0.95] font-semibold tracking-[-0.04em] text-balance sm:text-7xl lg:text-[5.5rem]"
          style={{ animationDelay: "80ms" }}
        >
          Your mind,
          <br />
          <span className="bg-gradient-to-br from-violet-300 via-white to-cyan-200 bg-clip-text text-transparent">
            fully indexed.
          </span>
        </h1>

        <p
          className="animate-rise mx-auto mt-7 max-w-xl text-lg leading-relaxed text-pretty text-white/55"
          style={{ animationDelay: "160ms" }}
        >
          Loam is a second brain that remembers the shape of your thinking — not
          just the words. Capture anything, and watch the connections surface on
          their own.
        </p>

        <div
          className="animate-rise mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#cta"
            className="group relative w-full overflow-hidden rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-neutral-950 transition hover:scale-[1.02] sm:w-auto"
          >
            Start free — no card
          </a>
          <a
            href="#graph"
            className="w-full rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white/85 backdrop-blur transition hover:bg-white/10 sm:w-auto"
          >
            See the graph
          </a>
        </div>

        <p
          className="animate-rise mt-6 text-xs text-white/35"
          style={{ animationDelay: "300ms" }}
        >
          Free forever for 500 notes · macOS, Windows, Linux, iOS
        </p>
      </section>

      {/* Trust */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <p className="text-center text-[11px] tracking-[0.2em] text-white/30 uppercase">
          Thinking tools for
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-medium text-white/40">
          {[
            "Researchers",
            "Founders",
            "PhD students",
            "Product teams",
            "Writers",
          ].map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
      </section>

      {/* Bento features */}
      <section id="features" className="mx-auto max-w-6xl px-6 pb-28">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
          Structure that emerges,
          <span className="text-white/40"> instead of structure you impose.</span>
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-6">
          {bento.map((card) => (
            <div
              key={card.title}
              className={`${card.span} group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.06]`}
            >
              <div
                aria-hidden
                className="absolute -top-24 -right-16 size-56 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.22),transparent_70%)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="text-xl text-violet-300/80">{card.glyph}</span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Graph showcase */}
      <section id="graph" className="mx-auto max-w-6xl px-6 pb-28">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-8 sm:p-14">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-[11px] tracking-[0.2em] text-cyan-300/70 uppercase">
                The graph
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Every note is a neighbourhood.
              </h2>
              <p className="mt-5 leading-relaxed text-white/55">
                Open any idea and Loam surfaces what it touches — the meeting
                where it came up, the paper that contradicted it, the half-note
                you left at 2am and forgot.
              </p>
              <ul className="mt-8 space-y-3.5 text-sm">
                {[
                  "Backlinks computed as you type",
                  "Unlinked mentions suggested, never forced",
                  "Filter the graph by tag, folder, or recency",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300" />
                    <span className="text-white/65">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-square w-full">
              <div
                aria-hidden
                className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.20),transparent_65%)] blur-2xl"
              />
              <div className="animate-float absolute inset-0">
                <Constellation />
              </div>
              <div className="absolute top-[28%] left-[34%] rounded-xl border border-white/15 bg-neutral-900/85 px-3 py-2 text-xs backdrop-blur">
                <p className="font-medium">Compound interest</p>
                <p className="text-[10px] text-white/40">7 links · 2 backlinks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-5xl px-6 pb-28">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {[
            ["9.4M", "notes connected this month"],
            ["<40ms", "median recall latency"],
            ["100%", "of your data, on your disk"],
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#05060a] px-6 py-10 text-center">
              <p className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-4xl font-semibold tracking-tight text-transparent">
                {stat}
              </p>
              <p className="mt-2 text-xs text-white/45">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="mx-auto max-w-3xl px-6 pb-28 text-center">
        <div id="pricing" className="scroll-mt-24">
          <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Stop losing the good ideas.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-white/50">
            Free for your first 500 notes. $8/month after that, or $80 a year.
          </p>
          <form className="mx-auto mt-9 flex max-w-md flex-col gap-2.5 sm:flex-row">
            <input
              type="email"
              required
              placeholder="you@work.com"
              aria-label="Email address"
              className="min-w-0 flex-1 rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-500/30 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3.5 text-sm font-semibold text-neutral-950 transition hover:opacity-90"
            >
              Get started
            </button>
          </form>
        </div>
      </section>

      {/* pb clears the fixed design switcher on small screens */}
      <footer className="border-t border-white/10 px-6 pt-10 pb-28 sm:pb-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-white/35 sm:flex-row">
          <span>© 2026 Loam Labs</span>
          <div className="flex gap-6">
            <Link className="transition hover:text-white/70" href="/">
              All designs
            </Link>
            <span>Privacy</span>
            <span>Changelog</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
