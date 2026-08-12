import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Graph",
  description: "Lumen as a night sky of linked thought — a constellation you can search.",
};

const nodes = [
  { x: 18, y: 28, label: "Ada", r: 5 },
  { x: 38, y: 18, label: "Attention", r: 7 },
  { x: 58, y: 32, label: "Sleep", r: 5 },
  { x: 72, y: 16, label: "Q3", r: 4 },
  { x: 84, y: 38, label: "Design", r: 6 },
  { x: 28, y: 52, label: "Memory", r: 8 },
  { x: 48, y: 58, label: "Daily", r: 5 },
  { x: 66, y: 50, label: "Garden", r: 4 },
  { x: 22, y: 74, label: "Letter", r: 4 },
  { x: 44, y: 78, label: "Lumen", r: 9 },
  { x: 70, y: 72, label: "Graph", r: 6 },
  { x: 86, y: 62, label: "Archive", r: 5 },
];

const edges: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [1, 5],
  [2, 3],
  [2, 6],
  [3, 4],
  [4, 7],
  [5, 6],
  [5, 8],
  [6, 9],
  [7, 10],
  [8, 9],
  [9, 10],
  [10, 11],
  [4, 11],
  [0, 5],
];

export default function GraphLanding() {
  return (
    <div className="relative min-h-full overflow-hidden bg-[#07070c] text-[#efeaff]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(124,108,255,0.28),transparent_42%),radial-gradient(circle_at_90%_20%,rgba(62,224,194,0.12),transparent_36%),radial-gradient(circle_at_50%_90%,rgba(124,108,255,0.16),transparent_40%)]" />
      <div className="relative mx-auto flex min-h-full max-w-6xl flex-col px-6 pb-32 pt-7 sm:px-10">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#7c6cff] shadow-[0_0_18px_#7c6cff]" />
            <p className="text-sm font-medium tracking-[0.28em] uppercase">Lumen</p>
          </div>
          <p className="font-mono text-[11px] tracking-[0.22em] text-white/45">
            GRAPH · LIVE
          </p>
        </header>

        <main className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[0.92fr_1.08fr]">
          <section>
            <p className="font-mono text-[11px] tracking-[0.3em] text-[#3ee0c2]">
              12,408 notes · 48,221 links
            </p>
            <h1 className="mt-6 font-display text-[clamp(2.8rem,7vw,5.6rem)] font-semibold leading-[0.92] tracking-[-0.04em]">
              Your notes are not a pile.
              <span className="block text-[#b7adff]">They are a mind.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-white/65">
              Lumen maps every capture into a constellation. Follow a spark
              across years of thinking, or let the graph surface a connection
              you did not know you had kept.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full bg-[#efeaff] px-6 py-3 text-sm font-medium text-[#07070c]"
              >
                Enter the graph
              </button>
              <button
                type="button"
                className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/80"
              >
                Watch a mind grow
              </button>
            </div>
          </section>

          <section className="drift rounded-[28px] border border-white/10 bg-white/[0.03] p-4 shadow-[0_0_80px_rgba(124,108,255,0.18)]">
            <svg viewBox="0 0 100 100" className="h-auto w-full">
              {edges.map(([a, b]) => (
                <line
                  key={`${a}-${b}`}
                  x1={nodes[a].x}
                  y1={nodes[a].y}
                  x2={nodes[b].x}
                  y2={nodes[b].y}
                  stroke="rgba(183,173,255,0.35)"
                  strokeWidth="0.35"
                />
              ))}
              {nodes.map((node) => (
                <g key={node.label} className="graph-node">
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.r * 1.8}
                    fill="rgba(124,108,255,0.12)"
                  />
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.r * 0.38}
                    fill={node.label === "Lumen" ? "#3ee0c2" : "#efeaff"}
                  />
                  <text
                    x={node.x + 2.2}
                    y={node.y - 2.4}
                    fill="rgba(239,234,255,0.78)"
                    fontSize="3.1"
                    fontFamily="var(--font-geist-sans)"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>
          </section>
        </main>

        <section className="grid gap-6 border-t border-white/10 py-10 md:grid-cols-3">
          {[
            {
              k: "01",
              t: "Backlinks as gravity",
              d: "Every note pulls related thought toward it. The longer you write, the denser the sky.",
            },
            {
              k: "02",
              t: "Daily orbit",
              d: "A page for today, already stitched to yesterday. Continuity without the ritual of filing.",
            },
            {
              k: "03",
              t: "Private cosmos",
              d: "Your graph never leaves your machine unless you ask. A second brain should not have an audience.",
            },
          ].map((item) => (
            <article key={item.k}>
              <p className="font-mono text-[11px] tracking-[0.24em] text-[#7c6cff]">
                {item.k}
              </p>
              <h2 className="mt-3 text-xl font-medium">{item.t}</h2>
              <p className="mt-3 text-sm leading-7 text-white/55">{item.d}</p>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
