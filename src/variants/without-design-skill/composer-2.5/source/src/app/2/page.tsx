import { JetBrains_Mono, Inter } from "next/font/google";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const nodes = [
  { x: 50, y: 45, label: "Project Alpha", size: 12 },
  { x: 28, y: 30, label: "Research", size: 8 },
  { x: 72, y: 28, label: "Ideas", size: 10 },
  { x: 35, y: 65, label: "Journal", size: 7 },
  { x: 68, y: 62, label: "Meeting notes", size: 9 },
  { x: 50, y: 18, label: "Goals 2026", size: 8 },
];

export default function SynapseLanding() {
  return (
    <div
      className={`${mono.variable} ${sans.variable} min-h-full overflow-hidden bg-[#070B14] font-[family-name:var(--font-sans)] text-[#E2E8F0]`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, #3B82F6 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 100% 50%, #8B5CF6 0%, transparent 45%)",
        }}
      />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <span className="font-[family-name:var(--font-mono)] text-sm tracking-wider text-[#60A5FA]">
          ENGRAM
        </span>
        <button
          type="button"
          className="rounded-md border border-[#1E3A5F] bg-[#0F172A]/80 px-4 py-2 font-[family-name:var(--font-mono)] text-xs text-[#93C5FD] backdrop-blur transition hover:border-[#3B82F6]"
        >
          $ engram init
        </button>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-32">
        <section className="grid items-center gap-12 pt-8 lg:grid-cols-2 lg:pt-16">
          <div>
            <p className="font-[family-name:var(--font-mono)] text-xs text-[#60A5FA]">
              {`// second_brain.v2`}
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Map your mind.
              <span className="block bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent">
                Navigate your knowledge.
              </span>
            </h1>
            <p className="mt-6 max-w-md text-[#94A3B8] leading-relaxed">
              A graph-native note system that thinks in connections. Every note is a
              node. Every link is a synapse. Your ideas form a network you can
              actually explore.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-md bg-[#2563EB] px-6 py-3 font-medium text-white transition hover:bg-[#1D4ED8]"
              >
                Build your graph
              </button>
              <button
                type="button"
                className="rounded-md border border-[#334155] px-6 py-3 text-[#CBD5E1] transition hover:border-[#475569]"
              >
                View architecture
              </button>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-[#1E293B] pt-8">
              {[
                { k: "nodes", v: "∞" },
                { k: "latency", v: "<12ms" },
                { k: "links", v: "bi-dir" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="font-[family-name:var(--font-mono)] text-xs uppercase text-[#64748B]">
                    {s.k}
                  </dt>
                  <dd className="mt-1 text-2xl font-semibold text-white">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative aspect-square max-h-[480px] w-full rounded-2xl border border-[#1E293B] bg-[#0F172A]/60 p-4 backdrop-blur">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <defs>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="50" cy="45" r="35" fill="url(#glow)" />
              {[
                [50, 45, 28, 30],
                [50, 45, 72, 28],
                [50, 45, 35, 65],
                [50, 45, 68, 62],
                [50, 45, 50, 18],
                [28, 30, 35, 65],
                [72, 28, 68, 62],
              ].map(([x1, y1, x2, y2], i) => (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#334155"
                  strokeWidth="0.3"
                />
              ))}
              {nodes.map((n) => (
                <g key={n.label}>
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={n.size / 3}
                    fill="#1E3A8A"
                    stroke="#60A5FA"
                    strokeWidth="0.4"
                  />
                  <text
                    x={n.x}
                    y={n.y + n.size / 2 + 4}
                    textAnchor="middle"
                    fill="#94A3B8"
                    fontSize="3"
                    fontFamily="monospace"
                  >
                    {n.label}
                  </text>
                </g>
              ))}
            </svg>
            <p className="absolute bottom-4 left-4 font-[family-name:var(--font-mono)] text-[10px] text-[#475569]">
              live_graph · 847 connections
            </p>
          </div>
        </section>

        <section className="mt-24 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: "◇",
              title: "Graph view",
              desc: "See how ideas cluster. Zoom from macro themes to atomic notes.",
            },
            {
              icon: "⟁",
              title: "Backlinks",
              desc: "Automatic reverse references. Context flows both directions.",
            },
            {
              icon: "⌘",
              title: "Command palette",
              desc: "Keyboard-first navigation. Jump to any thought in milliseconds.",
            },
          ].map((f) => (
            <article
              key={f.title}
              className="group rounded-xl border border-[#1E293B] bg-[#0F172A]/40 p-6 transition hover:border-[#3B82F6]/50"
            >
              <span className="font-[family-name:var(--font-mono)] text-[#60A5FA]">
                {f.icon}
              </span>
              <h3 className="mt-4 font-medium text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-[#64748B]">{f.desc}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
