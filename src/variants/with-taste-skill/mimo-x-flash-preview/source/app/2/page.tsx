import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "02 Graph — Marrow",
  description:
    "Your notes aren't a list — they're a constellation. Marrow is a second brain that shows you the shape of what you know.",
};

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  r: number;
  kind: "capture" | "link" | "resurface" | "hub";
};

const NODES: Node[] = [
  { id: "hub", label: "Marrow", x: 340, y: 210, r: 28, kind: "hub" },
  { id: "capture", label: "Capture", x: 140, y: 90, r: 16, kind: "capture" },
  { id: "link", label: "Link", x: 540, y: 100, r: 16, kind: "link" },
  { id: "resurface", label: "Resurface", x: 560, y: 300, r: 16, kind: "resurface" },
  { id: "search", label: "Search", x: 130, y: 310, r: 14, kind: "capture" },
  { id: "n1", label: "meeting notes", x: 60, y: 170, r: 8, kind: "capture" },
  { id: "n2", label: "idea: API", x: 210, y: 40, r: 7, kind: "capture" },
  { id: "n3", label: "essay draft", x: 300, y: 55, r: 9, kind: "link" },
  { id: "n4", label: "book: Gödel", x: 620, y: 60, r: 8, kind: "link" },
  { id: "n5", label: "review 2025", x: 640, y: 170, r: 7, kind: "link" },
  { id: "n6", label: "morning pages", x: 640, y: 340, r: 8, kind: "resurface" },
  { id: "n7", label: "garden map", x: 500, y: 380, r: 7, kind: "resurface" },
  { id: "n8", label: "recipe: ramen", x: 250, y: 390, r: 7, kind: "capture" },
  { id: "n9", label: "thesis p.4", x: 70, y: 390, r: 8, kind: "capture" },
  { id: "n10", label: "inbox", x: 200, y: 250, r: 10, kind: "capture" },
];

const EDGES: [string, string][] = [
  ["hub", "capture"],
  ["hub", "link"],
  ["hub", "resurface"],
  ["hub", "search"],
  ["hub", "n10"],
  ["capture", "n1"],
  ["capture", "n2"],
  ["capture", "n8"],
  ["capture", "n10"],
  ["link", "n3"],
  ["link", "n4"],
  ["link", "n5"],
  ["link", "n3"],
  ["resurface", "n6"],
  ["resurface", "n7"],
  ["resurface", "n9"],
  ["search", "n9"],
  ["search", "n10"],
  ["n3", "n4"],
  ["n1", "n10"],
  ["n6", "n5"],
];

const KIND_COLOR: Record<Node["kind"], string> = {
  hub: "#8b9cff",
  capture: "#5eead4",
  link: "#c4b5fd",
  resurface: "#fbbf24",
};

const FEATURES = [
  {
    n: "01",
    title: "Inbox that empties itself",
    body: "Every fragment lands in one inbox. Marrow proposes tags and links from context — you approve with a single tap, or ignore and it still remembers.",
    accent: "text-teal-300",
  },
  {
    n: "02",
    title: "Edges, not folders",
    body: "When you mention [[another note]], a real edge is drawn. The graph isn't a visualization of your filing system — it is your filing system.",
    accent: "text-violet-300",
  },
  {
    n: "03",
    title: "Walk the constellation",
    body: "Ask &ldquo;what did I write about Gödel?&rdquo; and Marrow doesn't list files — it walks the graph outward and returns the path of thought.",
    accent: "text-amber-300",
  },
];

export default function VariantTwo() {
  return (
    <div className="ui min-h-screen bg-[#0b0e14] text-[#e2e8f0]">
      {/* nav */}
      <header className="border-b border-white/[0.07]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
          <div className="flex items-center gap-2.5">
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
              <circle cx="11" cy="11" r="3.5" fill="#8b9cff" />
              <circle cx="4" cy="5" r="2" fill="#5eead4" />
              <circle cx="18" cy="6" r="2" fill="#c4b5fd" />
              <circle cx="17" cy="17" r="2" fill="#fbbf24" />
              <line x1="11" y1="11" x2="4" y2="5" stroke="#5eead4" strokeWidth="0.8" opacity="0.6" />
              <line x1="11" y1="11" x2="18" y2="6" stroke="#c4b5fd" strokeWidth="0.8" opacity="0.6" />
              <line x1="11" y1="11" x2="17" y2="17" stroke="#fbbf24" strokeWidth="0.8" opacity="0.6" />
            </svg>
            <span className="text-sm font-semibold tracking-tight">Marrow</span>
          </div>
          <nav className="flex items-center gap-6 text-xs text-slate-400">
            <a href="#graph" className="transition-colors hover:text-white">
              Graph
            </a>
            <a href="#features" className="transition-colors hover:text-white">
              Features
            </a>
            <a
              href="#cta"
              className="rounded-full border border-white/15 px-4 py-1.5 text-[11px] font-medium text-slate-200 transition-colors hover:border-white/40 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
            >
              Get Marrow
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* hero */}
        <section className="px-6 pb-4 pt-16 md:px-10 md:pt-24">
          <div className="mx-auto max-w-6xl">
            <p className="mono text-[10px] uppercase tracking-[0.28em] text-indigo-300/70">
              A second brain &nbsp;·&nbsp; Local-first
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-white md:text-6xl">
              Your notes aren&rsquo;t a list.
              <br />
              <span className="bg-gradient-to-r from-teal-300 via-indigo-300 to-amber-200 bg-clip-text text-transparent">
                They&rsquo;re a constellation.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
              Marrow treats every note as a node and every mention as an edge.
              Write freely — the graph assembles itself underneath, and one day
              you open a map of everything you&rsquo;ve ever thought.
            </p>
          </div>
        </section>

        {/* graph */}
        <section id="graph" className="px-6 py-10 md:px-10 md:py-14">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e131c]">
            <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-3">
              <span className="mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                graph.view — 15 notes · 21 edges
              </span>
              <div className="mono flex gap-4 text-[10px] uppercase tracking-[0.14em]">
                <span className="flex items-center gap-1.5 text-teal-300">
                  <i className="inline-block h-1.5 w-1.5 rounded-full bg-teal-300" />
                  capture
                </span>
                <span className="flex items-center gap-1.5 text-violet-300">
                  <i className="inline-block h-1.5 w-1.5 rounded-full bg-violet-300" />
                  link
                </span>
                <span className="flex items-center gap-1.5 text-amber-300">
                  <i className="inline-block h-1.5 w-1.5 rounded-full bg-amber-300" />
                  resurface
                </span>
              </div>
            </div>
            <svg
              viewBox="0 0 700 420"
              className="block h-auto w-full"
              role="img"
              aria-label="A constellation graph of fifteen linked notes around a central Marrow hub"
            >
              <defs>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#8b9cff" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#8b9cff" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="340" cy="210" r="110" fill="url(#glow)" />
              {EDGES.map(([a, b], i) => {
                const na = NODES.find((n) => n.id === a)!;
                const nb = NODES.find((n) => n.id === b)!;
                return (
                  <line
                    key={i}
                    x1={na.x}
                    y1={na.y}
                    x2={nb.x}
                    y2={nb.y}
                    stroke="#8b9cff"
                    strokeWidth="0.7"
                    opacity="0.3"
                  />
                );
              })}
              {NODES.map((n) => (
                <g key={n.id}>
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={n.r}
                    fill={KIND_COLOR[n.kind]}
                    opacity={n.kind === "hub" ? 1 : 0.9}
                  />
                  {n.kind === "hub" && (
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r={n.r + 8}
                      fill="none"
                      stroke="#8b9cff"
                      strokeWidth="0.8"
                      opacity="0.45"
                    />
                  )}
                  <text
                    x={n.x}
                    y={n.y + n.r + 14}
                    textAnchor="middle"
                    fill="#94a3b8"
                    fontSize="10"
                    fontFamily="var(--font-geist-mono), monospace"
                  >
                    {n.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </section>

        {/* features */}
        <section id="features" className="px-6 py-14 md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="mono text-[10px] uppercase tracking-[0.28em] text-slate-500">
              How the graph grows
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {FEATURES.map((f) => (
                <article
                  key={f.n}
                  className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.14] hover:bg-white/[0.04]"
                >
                  <span className={`mono text-[11px] tracking-widest ${f.accent}`}>
                    {f.n}
                  </span>
                  <h2 className="mt-3 text-lg font-medium tracking-tight text-white">
                    {f.title}
                  </h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                    {f.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="px-6 pb-20 pt-4 md:px-10">
          <div className="mx-auto max-w-6xl rounded-2xl border border-white/[0.08] bg-gradient-to-br from-indigo-950/40 via-[#0e131c] to-teal-950/30 px-8 py-14 text-center">
            <h2 className="mx-auto max-w-lg text-3xl font-medium leading-tight tracking-[-0.02em] text-white md:text-4xl">
              Start the graph.
              <br />
              It only gets stranger.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              Free for personal use. Your notes stay on your machine; the
              optional sync is end-to-end encrypted.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-indigo-400 px-7 text-sm font-semibold text-[#0b0e14] transition-colors hover:bg-indigo-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
            >
              Download Marrow
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.07] px-6 py-6 md:px-10">
        <div className="mono mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-[10px] uppercase tracking-[0.18em] text-slate-600 sm:flex-row">
          <span>Marrow &copy; 2026</span>
          <span>Graph-first · Local-first · Yours</span>
        </div>
      </footer>
    </div>
  );
}
