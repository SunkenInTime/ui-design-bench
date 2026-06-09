import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cortex — Your second brain · Design 2",
};

const features = [
  {
    title: "Instant capture",
    body: "⌘K from anywhere. Thought to note in under a second, synced before you blink.",
    icon: (
      <path d="M13 3L5 13h5l-1 8 8-10h-5l1-8z" strokeLinejoin="round" />
    ),
  },
  {
    title: "Auto-linked graph",
    body: "Every note becomes a node. Cortex draws the edges for you, surfacing relationships you didn’t know you had.",
    icon: (
      <>
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="8" r="2.5" />
        <circle cx="10" cy="18" r="2.5" />
        <path d="M8.2 7L15.6 7.7M7 8.2l2.2 7.5M16.2 10l-4.5 6" />
      </>
    ),
  },
  {
    title: "Semantic recall",
    body: "Search by meaning, not keywords. “That article about habit loops” finds it, even if you never wrote those words.",
    icon: (
      <>
        <circle cx="11" cy="11" r="6.5" />
        <path d="M16 16l5 5" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Daily resurfacing",
    body: "A short morning digest of old notes relevant to what you’re working on today. Your past self, on call.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7.5V12l3 2.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Local-first & private",
    body: "Notes live on your device, encrypted end-to-end when they sync. Your second brain is yours alone.",
    icon: (
      <>
        <rect x="5" y="10.5" width="14" height="9" rx="2" />
        <path d="M8 10.5V8a4 4 0 018 0v2.5" />
      </>
    ),
  },
  {
    title: "Works where you think",
    body: "Mac, Windows, iOS, Android, browser, terminal. Offline included. Markdown under the hood.",
    icon: (
      <>
        <rect x="3.5" y="5" width="17" height="11" rx="1.5" />
        <path d="M9 19.5h6" strokeLinecap="round" />
      </>
    ),
  },
];

const graphNodes = [
  { x: 80, y: 70, r: 7, label: "habit loops" },
  { x: 230, y: 40, r: 5, label: "dopamine" },
  { x: 320, y: 120, r: 9, label: "product ideas" },
  { x: 160, y: 160, r: 6, label: "atomic essays" },
  { x: 420, y: 60, r: 5, label: "pricing" },
  { x: 470, y: 170, r: 7, label: "onboarding" },
  { x: 560, y: 90, r: 5, label: "retention" },
];

const graphEdges = [
  [0, 1],
  [0, 3],
  [1, 2],
  [2, 3],
  [2, 5],
  [4, 5],
  [4, 6],
  [5, 6],
  [2, 4],
] as const;

export default function DesignTwo() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden bg-[#08070d] font-sans text-zinc-200 selection:bg-violet-500/40">
      {/* Background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/25 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[55%] -left-40 h-[400px] w-[500px] rounded-full bg-indigo-600/15 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[30%] -right-40 h-[400px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[140px]"
      />

      {/* Nav */}
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-400 to-indigo-600 text-sm font-bold text-white">
            C
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-white">
            Cortex
          </span>
        </div>
        <nav className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
          <a href="#features" className="transition-colors hover:text-white">
            Features
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Changelog
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Pricing
          </a>
        </nav>
        <a
          href="#"
          className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
        >
          Sign in
        </a>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 pt-16 text-center sm:pt-24">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-3.5 py-1 text-xs font-medium text-violet-300">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
          Cortex 2.0 — now with semantic recall
        </span>
        <h1 className="bg-gradient-to-b from-white via-white to-zinc-500 bg-clip-text text-5xl font-semibold leading-[1.05] tracking-tight text-transparent sm:text-7xl">
          A second brain that
          <br />
          thinks alongside you
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
          Capture everything. Organize nothing. Cortex links your notes into a
          living graph and recalls the right idea at the right moment.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="rounded-full bg-gradient-to-b from-violet-400 to-violet-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-5px] shadow-violet-500/60 transition-transform hover:scale-[1.03]"
          >
            Download for macOS
          </a>
          <a
            href="#features"
            className="rounded-full border border-white/15 px-7 py-3 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5"
          >
            See how it works
          </a>
        </div>
      </section>

      {/* App window with graph */}
      <section className="relative z-10 mx-auto mt-20 w-full max-w-4xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 shadow-[0_40px_120px_-40px] shadow-violet-900/60 backdrop-blur">
          <div className="rounded-xl border border-white/10 bg-[#0c0b14]">
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="ml-3 rounded-md bg-white/5 px-3 py-1 text-xs text-zinc-500">
                cortex://graph — 4,182 notes · 19,034 edges
              </span>
            </div>
            <svg
              viewBox="0 0 640 220"
              className="h-auto w-full"
              role="img"
              aria-label="A graph of interconnected notes"
            >
              {graphEdges.map(([a, b]) => (
                <line
                  key={`${a}-${b}`}
                  x1={graphNodes[a].x}
                  y1={graphNodes[a].y}
                  x2={graphNodes[b].x}
                  y2={graphNodes[b].y}
                  stroke="rgba(167,139,250,0.25)"
                  strokeWidth="1"
                />
              ))}
              {graphNodes.map((n) => (
                <g key={n.label}>
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={n.r}
                    fill="rgba(167,139,250,0.9)"
                    className="drop-shadow-[0_0_6px_rgba(167,139,250,0.8)]"
                  />
                  <text
                    x={n.x}
                    y={n.y + n.r + 14}
                    textAnchor="middle"
                    fontSize="10"
                    fill="rgba(212,212,216,0.6)"
                    fontFamily="var(--font-geist-mono), monospace"
                  >
                    {n.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Everything a brain should do
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-zinc-400">
          Except forget, get tired, or need coffee.
        </p>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-colors hover:border-violet-400/30 hover:bg-violet-400/[0.06]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 stroke-violet-300"
                fill="none"
                strokeWidth="1.5"
                aria-hidden
              >
                {f.icon}
              </svg>
              <h3 className="mt-4 font-medium text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-32 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-violet-500/15 to-transparent px-8 py-16">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Your brain, with a backup
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-zinc-400">
            Free up to 1,000 notes. Import from Notion, Obsidian, or Apple
            Notes in one click.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-zinc-950 transition-transform hover:scale-[1.03]"
          >
            Start remembering everything
          </a>
        </div>
        <p className="mt-10 text-xs text-zinc-600">
          © 2026 Cortex Labs · Privacy · Terms
        </p>
      </section>
    </div>
  );
}
