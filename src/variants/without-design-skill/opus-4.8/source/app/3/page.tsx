import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cortex — Connect every thought",
};

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="6" r="2.4" fill="#5eead4" />
        <circle cx="6" cy="17" r="2.4" fill="#2dd4bf" />
        <circle cx="18" cy="17" r="2.4" fill="#22d3ee" />
        <path d="M12 8 6.6 15M12 8l5.4 7M8 17h8" stroke="#5eead4" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
      <span className="text-lg font-semibold tracking-tight text-white">Cortex</span>
    </div>
  );
}

// Pre-computed node graph
const nodes = [
  { cx: 130, cy: 90, r: 6, big: false },
  { cx: 300, cy: 60, r: 9, big: true },
  { cx: 470, cy: 110, r: 6, big: false },
  { cx: 620, cy: 70, r: 7, big: false },
  { cx: 220, cy: 210, r: 7, big: false },
  { cx: 400, cy: 190, r: 12, big: true },
  { cx: 560, cy: 230, r: 6, big: false },
  { cx: 700, cy: 180, r: 8, big: false },
  { cx: 120, cy: 320, r: 8, big: false },
  { cx: 320, cy: 340, r: 6, big: false },
  { cx: 500, cy: 330, r: 9, big: true },
  { cx: 660, cy: 360, r: 6, big: false },
];

const edges = [
  [0, 1], [1, 2], [2, 3], [0, 4], [1, 5], [4, 5], [5, 6], [3, 7], [6, 7],
  [4, 8], [5, 9], [9, 10], [6, 10], [10, 11], [8, 9], [2, 5], [7, 6],
];

const features = [
  {
    title: "Linked thinking",
    body: "Type [[ to reference any note. Cortex maps the relationship in both directions, instantly.",
  },
  {
    title: "The graph view",
    body: "See your knowledge as a living constellation. Drag, zoom, and discover clusters you never noticed.",
  },
  {
    title: "Surfacing connections",
    body: "Cortex suggests related notes as you write — turning isolated facts into networked understanding.",
  },
];

export default function Page() {
  return (
    <div className="relative flex flex-1 flex-col bg-[#070d12] font-sans text-slate-200">
      {/* Nav */}
      <header className="relative z-40 border-b border-white/5">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <a href="#features" className="transition hover:text-teal-300">Features</a>
            <a href="#" className="transition hover:text-teal-300">Graph</a>
            <a href="#" className="transition hover:text-teal-300">Docs</a>
          </nav>
          <a href="#" className="rounded-lg border border-teal-400/40 bg-teal-400/10 px-4 py-2 text-sm font-medium text-teal-200 transition hover:bg-teal-400/20">
            Launch Cortex
          </a>
        </div>
      </header>

      {/* Hero with graph */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-90">
          <svg viewBox="0 0 800 420" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="glow" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#0e2a2f" />
                <stop offset="100%" stopColor="#070d12" />
              </radialGradient>
            </defs>
            <rect width="800" height="420" fill="url(#glow)" />
            {edges.map(([a, b], i) => (
              <line
                key={i}
                x1={nodes[a].cx}
                y1={nodes[a].cy}
                x2={nodes[b].cx}
                y2={nodes[b].cy}
                stroke="#2dd4bf"
                strokeOpacity="0.18"
                strokeWidth="1"
              />
            ))}
            {nodes.map((n, i) => (
              <g key={i}>
                <circle cx={n.cx} cy={n.cy} r={n.r + 6} fill="#2dd4bf" opacity="0.08">
                  <animate attributeName="opacity" values="0.04;0.16;0.04" dur={`${3 + (i % 4)}s`} repeatCount="indefinite" />
                </circle>
                <circle cx={n.cx} cy={n.cy} r={n.r} fill={n.big ? "#5eead4" : "#22d3ee"} opacity={n.big ? 0.95 : 0.7} />
              </g>
            ))}
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#070d12]/40 via-[#070d12]/70 to-[#070d12]" />

        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pt-28 pb-28 text-center sm:pt-36">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-teal-300/80">The networked notebook</p>
          <h1 className="mx-auto max-w-3xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
            A single note is a thought. <br className="hidden sm:block" />
            <span className="text-teal-300">A thousand linked notes</span> is a mind.
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-balance text-lg leading-relaxed text-slate-400">
            Cortex turns scattered notes into a connected web of knowledge — your
            ideas, mapped the way neurons map memory.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#" className="w-full rounded-full bg-teal-400 px-7 py-3.5 text-sm font-semibold text-[#04201f] transition hover:bg-teal-300 sm:w-auto">
              Start connecting
            </a>
            <a href="#" className="w-full rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5 sm:w-auto">
              Explore the graph
            </a>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="relative z-10 border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-4">
          {[
            ["8.4M", "notes linked daily"],
            ["120ms", "to find any idea"],
            ["∞", "connections per note"],
            ["0", "folders required"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-3xl font-semibold text-teal-300">{n}</div>
              <div className="mt-1 text-xs text-slate-400">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Knowledge isn’t a list. It’s a network.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <div key={f.title} className="relative rounded-2xl border border-white/8 bg-gradient-to-b from-white/[0.04] to-transparent p-7">
              <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg border border-teal-400/30 bg-teal-400/10 text-sm font-semibold text-teal-300">
                0{i + 1}
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-28">
        <div className="overflow-hidden rounded-3xl border border-teal-400/20 bg-gradient-to-br from-teal-500/10 to-cyan-500/5 px-8 py-16 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Watch your ideas find each other.
          </h2>
          <a href="#" className="mt-8 inline-block rounded-full bg-teal-400 px-7 py-3.5 text-sm font-semibold text-[#04201f] transition hover:bg-teal-300">
            Build your graph — free
          </a>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/5">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row">
          <Logo />
          <p>© {new Date().getFullYear()} Cortex Labs · Everything connects.</p>
        </div>
      </footer>
    </div>
  );
}
