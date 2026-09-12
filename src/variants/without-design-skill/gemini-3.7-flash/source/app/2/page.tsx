import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mneme — Graph",
  description: "Your notes are not a pile. They are a nervous system.",
};

export default function GraphPage() {
  return (
    <div className="min-h-full overflow-hidden bg-[#07080c] text-[#ece8e0] selection:bg-[#7c9cff] selection:text-[#07080c]">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(124,156,255,0.11) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#7c9cff]/10 blur-[120px]"
      />

      <header className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <Link
          href="/without-design-skill/gemini-3.7-flash/2"
          className="flex items-center gap-3 font-display text-lg tracking-tight"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inset-0 animate-glow rounded-full bg-[#7c9cff]" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-[#7c9cff]" />
          </span>
          MNEME
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-white/50 sm:flex">
          <a href="#graph" className="hover:text-white">
            Graph
          </a>
          <a href="#system" className="hover:text-white">
            System
          </a>
          <a
            href="#start"
            className="rounded-full border border-white/15 px-4 py-1.5 text-white/80 hover:border-[#7c9cff]/50 hover:text-white"
          >
            Open the graph
          </a>
        </nav>
      </header>

      <main className="relative">
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-8 pt-10 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:pt-8">
          <div>
            <p className="mb-5 font-display text-xs tracking-[0.32em] text-[#7c9cff] uppercase">
              A living network
            </p>
            <h1 className="font-display text-[clamp(2.6rem,6vw,4.8rem)] leading-[0.95] tracking-[-0.04em]">
              Every note
              <br />
              is a neuron.
            </h1>
            <p className="mt-7 max-w-md text-[1.05rem] leading-8 text-white/55">
              Mneme grows a constellation of everything you write. Ideas find
              each other without folders, tags, or a taxonomy you will abandon
              in three weeks.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                id="start"
                href="#start"
                className="rounded-full bg-[#7c9cff] px-6 py-3 text-sm font-medium text-[#07080c] shadow-[0_0_32px_rgba(124,156,255,0.35)]"
              >
                Start linking
              </a>
              <a
                href="#system"
                className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/70 hover:border-white/30 hover:text-white"
              >
                See how it fires
              </a>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8 text-sm">
              <div>
                <dt className="text-white/35">Notes</dt>
                <dd className="mt-1 font-display text-2xl">12k+</dd>
              </div>
              <div>
                <dt className="text-white/35">Links</dt>
                <dd className="mt-1 font-display text-2xl">48k</dd>
              </div>
              <div>
                <dt className="text-white/35">Lost thoughts</dt>
                <dd className="mt-1 font-display text-2xl">0</dd>
              </div>
            </dl>
          </div>
          <GraphMark />
        </section>

        <section id="system" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                k: "Capture",
                v: "A frictionless inbox. Thoughts land as nodes before they evaporate.",
              },
              {
                k: "Link",
                v: "Type [[ and the graph reaches back. Backlinks appear without extra work.",
              },
              {
                k: "Surface",
                v: "Related notes glow when you are close to an old idea you forgot you had.",
              },
            ].map((card) => (
              <article
                key={card.k}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm"
              >
                <h2 className="font-display text-xl tracking-tight">{card.k}</h2>
                <p className="mt-4 leading-7 text-white/50">{card.v}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function GraphMark() {
  const nodes = [
    { id: "a", x: 280, y: 70, r: 7, label: "Deep work", delay: "0s" },
    { id: "b", x: 120, y: 150, r: 5, label: "Attention", delay: "0.4s" },
    { id: "c", x: 430, y: 160, r: 6, label: "Walking", delay: "0.8s" },
    { id: "d", x: 200, y: 270, r: 8, label: "Zettelkasten", delay: "0.2s" },
    { id: "e", x: 370, y: 290, r: 5, label: "Sleep", delay: "1s" },
    { id: "f", x: 90, y: 360, r: 4, label: "Inbox", delay: "0.6s" },
    { id: "g", x: 280, y: 400, r: 6, label: "Second brain", delay: "1.2s" },
    { id: "h", x: 470, y: 360, r: 4, label: "Cal Newport", delay: "0.3s" },
  ];

  const edges: [string, string][] = [
    ["a", "b"],
    ["a", "c"],
    ["a", "d"],
    ["b", "d"],
    ["d", "f"],
    ["d", "g"],
    ["c", "e"],
    ["e", "h"],
    ["g", "e"],
    ["c", "h"],
  ];

  const byId = Object.fromEntries(nodes.map((node) => [node.id, node]));

  return (
    <div id="graph" className="relative mx-auto w-full max-w-[560px]">
      <div className="absolute inset-8 rounded-full bg-[#7c9cff]/10 blur-3xl" />
      <svg
        viewBox="0 0 560 480"
        className="relative h-auto w-full"
        role="img"
        aria-label="A constellation of linked notes"
      >
        {edges.map(([from, to]) => (
          <line
            key={`${from}-${to}`}
            x1={byId[from].x}
            y1={byId[from].y}
            x2={byId[to].x}
            y2={byId[to].y}
            stroke="rgba(124,156,255,0.35)"
            strokeWidth="1"
            strokeDasharray="5 9"
            className="animate-dash"
          />
        ))}
        {nodes.map((node) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r + 10}
              fill="rgba(124,156,255,0.12)"
              className="animate-pulse-soft origin-center"
              style={{ animationDelay: node.delay, transformBox: "fill-box", transformOrigin: "center" }}
            />
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill="#7c9cff"
            />
            <text
              x={node.x + 14}
              y={node.y + 4}
              fill="rgba(236,232,224,0.72)"
              fontSize="12"
              fontFamily="var(--font-syne), sans-serif"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
