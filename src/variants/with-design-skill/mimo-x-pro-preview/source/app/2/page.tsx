/* eslint-disable @next/next/no-html-link-for-pages -- Preserve generated native navigation with gallery-scoped URLs. */
import "@/generated/scoped-variant-css/with-design-skill/mimo-x-pro-preview/source/app/2/page.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engram — Neural",
};

const NODES = [
  { id: "n1", x: 180, y: 120, label: "Attention", r: 18 },
  { id: "n2", x: 320, y: 80, label: "Focus", r: 12 },
  { id: "n3", x: 420, y: 160, label: "Clarity", r: 16 },
  { id: "n4", x: 260, y: 210, label: "Craft", r: 14 },
  { id: "n5", x: 140, y: 250, label: "Memory", r: 11 },
  { id: "n6", x: 360, y: 280, label: "Practice", r: 13 },
  { id: "n7", x: 500, y: 240, label: "Signal", r: 10 },
  { id: "n8", x: 240, y: 140, label: "Notes", r: 9 },
];

const EDGES: [string, string][] = [
  ["n1", "n2"],
  ["n1", "n4"],
  ["n1", "n8"],
  ["n2", "n3"],
  ["n2", "n8"],
  ["n3", "n7"],
  ["n3", "n6"],
  ["n4", "n5"],
  ["n4", "n6"],
  ["n4", "n8"],
  ["n5", "n6"],
  ["n6", "n7"],
];

function node(id: string) {
  return NODES.find((n) => n.id === id)!;
}

export default function Neural() {
  return (
    <div className="min-h-screen bg-[#0A0E14] text-[#E8EDF4] selection:bg-[#5B8CFF]/30">

      <header className="border-b border-white/6">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/with-design-skill/mimo-x-pro-preview/2" className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5B8CFF] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5B8CFF]" />
            </span>
            <span className="text-sm font-semibold tracking-tight">Engram</span>
          </a>
          <nav className="hidden items-center gap-7 text-[13px] text-[#94A3B8] md:flex">
            <a href="#graph" className="hover:text-white">
              Graph
            </a>
            <a href="#system" className="hover:text-white">
              System
            </a>
            <a href="#stack" className="hover:text-white">
              Stack
            </a>
          </nav>
          <a
            href="#access"
            className="rounded-md bg-[#5B8CFF] px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-[#4A7CF0]"
          >
            Request access
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/6">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_40%,rgba(91,140,255,0.18),transparent_70%),radial-gradient(ellipse_40%_40%_at_20%_70%,rgba(167,139,250,0.12),transparent_70%)]"
          />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-2 lg:items-center lg:pt-24">
            <div className="nr-fade">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-[#94A3B8]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#A78BFA]" />
                Knowledge OS · v0.9
              </p>
              <h1 className="mt-6 text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[1.08] tracking-tight">
                Think in networks.
                <br />
                <span className="bg-gradient-to-r from-[#5B8CFF] to-[#A78BFA] bg-clip-text text-transparent">
                  Not folders.
                </span>
              </h1>
              <p className="mt-6 max-w-md text-[16px] leading-[1.7] text-[#94A3B8]">
                Engram is a second brain built like a living graph. Every note
                is a node. Every idea is an edge. Search surfaces the path you
                forgot you drew.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#access"
                  className="rounded-md bg-[#5B8CFF] px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-[#4A7CF0]"
                >
                  Get early access
                </a>
                <a
                  href="#system"
                  className="rounded-md border border-white/15 px-6 py-3 text-[14px] text-[#E8EDF4] transition-colors hover:border-white/35 hover:bg-white/5"
                >
                  Inspect the model
                </a>
              </div>
              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/8 pt-8">
                {[
                  ["48ms", "median search"],
                  ["∞", "local graph size"],
                  ["0", "ads, ever"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <dt className="font-mono text-xl text-white">{v}</dt>
                    <dd className="mt-1 text-[12px] text-[#64748B]">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div
              id="graph"
              className="relative rounded-xl border border-white/10 bg-[#0D121A]/80 p-4 shadow-[0_0_80px_rgba(91,140,255,0.08)] backdrop-blur"
            >
              <div className="mb-3 flex items-center justify-between px-1">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#64748B]">
                  live graph · personal
                </p>
                <div className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-[#5B8CFF]/70" />
                  <span className="h-2 w-2 rounded-full bg-[#A78BFA]/70" />
                  <span className="h-2 w-2 rounded-full bg-[#34D399]/70" />
                </div>
              </div>
              <svg
                viewBox="0 0 620 360"
                className="h-auto w-full"
                role="img"
                aria-label="A network of linked note nodes"
              >
                <defs>
                  <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#5B8CFF" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#5B8CFF" stopOpacity="0" />
                  </radialGradient>
                </defs>
                {EDGES.map(([a, b]) => {
                  const na = node(a);
                  const nb = node(b);
                  return (
                    <line
                      key={`${a}-${b}`}
                      x1={na.x}
                      y1={na.y}
                      x2={nb.x}
                      y2={nb.y}
                      stroke="rgba(148,163,184,0.28)"
                      strokeWidth="1"
                    />
                  );
                })}
                {NODES.map((n, i) => (
                  <g key={n.id}>
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r={n.r + 14}
                      fill="url(#nodeGlow)"
                      className={
                        i % 3 === 0
                          ? "nr-pulse"
                          : i % 3 === 1
                            ? "nr-pulse nr-pulse-d"
                            : "nr-pulse nr-pulse-d2"
                      }
                    />
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r={n.r}
                      fill={
                        n.r >= 15
                          ? "#5B8CFF"
                          : n.r >= 12
                            ? "#A78BFA"
                            : "#34D399"
                      }
                      className="opacity-90"
                    />
                    <text
                      x={n.x}
                      y={n.y + n.r + 14}
                      textAnchor="middle"
                      fill="#94A3B8"
                      fontSize="11"
                      fontFamily="ui-monospace, monospace"
                    >
                      {n.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </section>

        <section id="system" className="border-b border-white/6 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#5B8CFF]">
              System
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              The interface disappears. The structure remains.
            </h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/8 bg-white/8 sm:grid-cols-3">
              {[
                {
                  code: "CAPTURE",
                  title: "Frictionless input",
                  body: "Global hotkey, voice memo, browser clipper. Every capture lands in the same graph within 200ms.",
                },
                {
                  code: "LINK",
                  title: "Semantic edges",
                  body: "Embeddings + explicit wikilinks. Engram proposes connections; you accept, reject, or ignore forever.",
                },
                {
                  code: "RECALL",
                  title: "Path search",
                  body: "Query by phrase, date, or partial thought. Results rank by graph proximity, not just keyword hits.",
                },
              ].map((c) => (
                <article key={c.code} className="bg-[#0A0E14] p-8">
                  <p className="font-mono text-[11px] tracking-[0.14em] text-[#64748B]">
                    {c.code}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#94A3B8]">
                    {c.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#A78BFA]">
                Stack
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Local-first. Encrypted. Yours.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-[1.7] text-[#94A3B8]">
                Your graph lives on your machine first. Sync is optional,
                end-to-end encrypted, and never trains a model on your notes.
              </p>
            </div>
            <div className="space-y-3">
              {[
                ["Local SQLite graph", "offline · instant"],
                ["E2E sync", "optional · multi-device"],
                ["Open export", "markdown + JSON edges"],
                ["CLI + API", "script your mind"],
              ].map(([t, s]) => (
                <div
                  key={t}
                  className="flex items-center justify-between rounded-lg border border-white/8 bg-white/[0.03] px-5 py-4"
                >
                  <span className="text-[14px] font-medium">{t}</span>
                  <span className="font-mono text-[12px] text-[#64748B]">
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="access"
          className="border-t border-white/6 bg-gradient-to-b from-[#0D121A] to-[#0A0E14] px-6 py-20"
        >
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight">
              Run your mind on better infrastructure.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#94A3B8]">
              Early access is limited. Bring a messy archive — we prefer people
              who already think in links.
            </p>
            <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="you@domain.com"
                className="flex-1 rounded-md border border-white/12 bg-white/5 px-4 py-3 text-[14px] text-white outline-none placeholder:text-[#64748B] focus:border-[#5B8CFF] focus:ring-2 focus:ring-[#5B8CFF]/30"
              />
              <a
                href="#access"
                className="rounded-md bg-[#5B8CFF] px-6 py-3 text-center text-[14px] font-medium text-white transition-colors hover:bg-[#4A7CF0]"
              >
                Join waitlist
              </a>
            </div>
            <p className="mt-4 font-mono text-[11px] text-[#64748B]">
              No spam. Unsubscribe in one click.
            </p>
          </div>
        </section>

        <footer className="border-t border-white/6 px-6 py-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-[12px] text-[#64748B] sm:flex-row">
            <p>© 2026 Engram Systems</p>
            <p className="font-mono">status: operational</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
