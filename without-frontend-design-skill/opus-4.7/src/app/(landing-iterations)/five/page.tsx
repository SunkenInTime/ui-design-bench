import Link from "next/link";

export const metadata = {
  title: "SYNAPSE // your mind, mapped",
};

type Node = {
  id: string;
  x: number;
  y: number;
  r: number;
  hue: number;
  label?: string;
};

const NODES: Node[] = [
  { id: "c", x: 500, y: 320, r: 26, hue: 175, label: "self" },
  { id: "a", x: 260, y: 160, r: 14, hue: 190, label: "reading" },
  { id: "b", x: 730, y: 180, r: 16, hue: 280, label: "writing" },
  { id: "d", x: 210, y: 400, r: 11, hue: 195, label: "borges" },
  { id: "e", x: 360, y: 510, r: 13, hue: 170, label: "attention" },
  { id: "f", x: 640, y: 520, r: 15, hue: 260, label: "design" },
  { id: "g", x: 820, y: 360, r: 12, hue: 290, label: "systems" },
  { id: "h", x: 140, y: 270, r: 9, hue: 180, label: "library" },
  { id: "i", x: 380, y: 80, r: 8, hue: 210, label: "simon" },
  { id: "j", x: 600, y: 80, r: 8, hue: 280, label: "calvino" },
  { id: "k", x: 900, y: 240, r: 7, hue: 300, label: "feed" },
  { id: "l", x: 540, y: 620, r: 9, hue: 250, label: "craft" },
  { id: "m", x: 280, y: 620, r: 7, hue: 200, label: "walking" },
  { id: "n", x: 80, y: 440, r: 7, hue: 190, label: "poetry" },
  { id: "o", x: 920, y: 500, r: 7, hue: 280, label: "agency" },
];

const EDGES: [string, string][] = [
  ["c", "a"], ["c", "b"], ["c", "d"], ["c", "e"], ["c", "f"], ["c", "g"],
  ["a", "h"], ["a", "d"], ["a", "i"], ["a", "j"],
  ["b", "f"], ["b", "g"], ["b", "j"], ["b", "k"],
  ["d", "n"], ["d", "h"], ["e", "i"], ["e", "m"], ["e", "l"],
  ["f", "l"], ["f", "g"], ["g", "o"], ["g", "k"],
  ["h", "n"], ["l", "m"],
];

const nodeById = (id: string) => NODES.find((n) => n.id === id)!;

export default function IterationFive() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#030712] text-white">
      <style>{`
        @keyframes pulse-node {
          0%, 100% { opacity: 0.9; transform-origin: center; }
          50% { opacity: 0.5; }
        }
        @keyframes flow {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -40; }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-[140px]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(56,189,248,0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 font-mono text-[13px]">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
              <div className="absolute inset-0 animate-ping rounded-full bg-cyan-400/60" />
            </div>
            <span className="font-bold tracking-[0.3em]">SYNAPSE</span>
            <span className="rounded-sm border border-cyan-500/30 bg-cyan-500/10 px-1.5 py-0.5 text-[10px] tracking-[0.15em] text-cyan-300">
              v7.0.2 / online
            </span>
          </div>
          <div className="hidden items-center gap-6 text-xs tracking-[0.2em] text-white/50 md:flex">
            <a className="hover:text-cyan-300" href="#">SYSTEM</a>
            <a className="hover:text-cyan-300" href="#">GRAPH</a>
            <a className="hover:text-cyan-300" href="#">PROTOCOL</a>
            <a className="hover:text-cyan-300" href="#">DOCS</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden font-mono text-[10px] text-white/40 md:inline">
              latency: 4ms · nodes online: 1,284
            </span>
            <Link
              href="#"
              className="group inline-flex items-center gap-2 border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-cyan-200 hover:border-cyan-300 hover:bg-cyan-400/20"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              Initialize
            </Link>
          </div>
        </nav>

        <section className="relative mx-auto max-w-7xl px-6 pt-20 pb-16">
          <div className="grid gap-16 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <div className="mb-5 inline-flex items-center gap-2 border border-cyan-500/30 bg-cyan-500/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-300">
                <span className="h-1 w-1 animate-pulse rounded-full bg-cyan-400" />
                A knowledge graph / not an app
              </div>
              <h1 className="text-[72px] font-light leading-[0.95] tracking-[-0.03em]">
                Your mind,
                <br />
                <span className="font-normal italic text-cyan-300">
                  mapped.
                </span>
              </h1>
              <p className="mt-6 max-w-md font-mono text-sm leading-relaxed text-white/60">
                Synapse is a second brain that thinks in connections, not
                folders. Every note becomes a node. Every thought, a thread.
                Your archive, finally, is shaped like you.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  href="#"
                  className="group relative inline-flex items-center gap-3 border border-cyan-400/50 bg-cyan-400/10 px-5 py-3 font-mono text-sm uppercase tracking-[0.2em] text-cyan-100 transition-all hover:bg-cyan-400/20"
                >
                  <span className="relative h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)]" />
                  Initialize Graph
                  <span className="font-mono text-[10px] text-cyan-300/60">
                    [ ENTER ]
                  </span>
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 border border-white/10 px-5 py-3 font-mono text-sm uppercase tracking-[0.2em] text-white/60 hover:border-white/30 hover:text-white"
                >
                  Protocol.md
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/5 pt-6 font-mono text-[11px] text-white/40">
                <div>
                  <div className="text-cyan-300">NODES</div>
                  <div className="mt-1 text-lg font-light text-white">
                    1,284
                  </div>
                </div>
                <div>
                  <div className="text-cyan-300">EDGES</div>
                  <div className="mt-1 text-lg font-light text-white">
                    9,317
                  </div>
                </div>
                <div>
                  <div className="text-cyan-300">DENSITY</div>
                  <div className="mt-1 text-lg font-light text-white">
                    7.25
                  </div>
                </div>
              </div>
            </div>

            <div className="relative md:col-span-7">
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-cyan-500/20 via-indigo-500/10 to-fuchsia-500/10 blur-3xl" />
              <div className="relative overflow-hidden border border-white/10 bg-[#030712]/70 backdrop-blur">
                <div className="flex items-center justify-between border-b border-white/5 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                  <span>/graph/self.svg</span>
                  <span className="flex items-center gap-1.5 text-cyan-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                    live
                  </span>
                </div>
                <svg viewBox="0 0 1000 720" className="block w-full">
                  <defs>
                    <radialGradient id="bg-glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgba(34,211,238,0.12)" />
                      <stop offset="100%" stopColor="rgba(34,211,238,0)" />
                    </radialGradient>
                    {NODES.map((n) => (
                      <radialGradient key={`g-${n.id}`} id={`g-${n.id}`} cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor={`hsl(${n.hue}, 90%, 75%)`} />
                        <stop offset="100%" stopColor={`hsl(${n.hue}, 90%, 45%)`} />
                      </radialGradient>
                    ))}
                  </defs>

                  <rect width="1000" height="720" fill="url(#bg-glow)" />

                  {Array.from({ length: 14 }).map((_, i) => (
                    <line
                      key={`h-${i}`}
                      x1="0"
                      y1={i * 52}
                      x2="1000"
                      y2={i * 52}
                      stroke="rgba(56,189,248,0.04)"
                      strokeWidth="0.5"
                    />
                  ))}
                  {Array.from({ length: 20 }).map((_, i) => (
                    <line
                      key={`v-${i}`}
                      x1={i * 52}
                      y1="0"
                      x2={i * 52}
                      y2="720"
                      stroke="rgba(56,189,248,0.04)"
                      strokeWidth="0.5"
                    />
                  ))}

                  {EDGES.map(([a, b], i) => {
                    const na = nodeById(a);
                    const nb = nodeById(b);
                    return (
                      <line
                        key={i}
                        x1={na.x}
                        y1={na.y}
                        x2={nb.x}
                        y2={nb.y}
                        stroke={`hsla(${(na.hue + nb.hue) / 2}, 85%, 65%, 0.35)`}
                        strokeWidth="0.75"
                        strokeDasharray="3 3"
                        style={{
                          animation: `flow ${4 + (i % 5)}s linear infinite`,
                        }}
                      />
                    );
                  })}

                  {NODES.map((n, i) => (
                    <g key={n.id} style={{ animation: `pulse-node ${3 + (i % 3)}s ease-in-out ${i * 0.2}s infinite` }}>
                      <circle
                        cx={n.x}
                        cy={n.y}
                        r={n.r * 2.2}
                        fill={`hsla(${n.hue}, 90%, 60%, 0.12)`}
                      />
                      <circle
                        cx={n.x}
                        cy={n.y}
                        r={n.r}
                        fill={`url(#g-${n.id})`}
                        stroke={`hsla(${n.hue}, 95%, 80%, 0.9)`}
                        strokeWidth="1"
                      />
                      {n.r > 10 && (
                        <text
                          x={n.x}
                          y={n.y + n.r + 16}
                          textAnchor="middle"
                          fontSize="11"
                          fontFamily="ui-monospace, monospace"
                          fill="rgba(255,255,255,0.75)"
                          letterSpacing="0.1em"
                        >
                          {n.label}
                        </text>
                      )}
                    </g>
                  ))}

                  <g transform="translate(500 320)">
                    <circle r="60" fill="none" stroke="rgba(34,211,238,0.4)" strokeWidth="0.75" strokeDasharray="2 4" />
                    <circle r="90" fill="none" stroke="rgba(34,211,238,0.2)" strokeWidth="0.5" strokeDasharray="2 6" />
                  </g>

                  <g fontFamily="ui-monospace, monospace" fontSize="10" fill="rgba(34,211,238,0.7)">
                    <text x="16" y="24">// node[SELF]</text>
                    <text x="16" y="40">// hue=175deg · degree=6</text>
                    <text x="16" y="700">↳ zoom: 1.00 · fps: 60</text>
                    <text x="984" y="24" textAnchor="end">
                      cluster_01 / personal
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl border-y border-white/5 px-6 py-10">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[10px] uppercase tracking-[0.35em] text-white/30">
            <span className="text-cyan-300/60">// running on:</span>
            <span>WebGL 2.0</span>
            <span>·</span>
            <span>CRDT Sync</span>
            <span>·</span>
            <span>Local LLM (Qwen3-7b)</span>
            <span>·</span>
            <span>Libsodium</span>
            <span>·</span>
            <span>Zero Servers</span>
            <span>·</span>
            <span>Zero Telemetry</span>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-300">
                // protocol
              </div>
              <h2 className="text-5xl font-light leading-[1.05] tracking-tight">
                Three
                <br />
                primitives.
                <br />
                <span className="italic text-cyan-300/80">
                  Infinite
                </span>{" "}
                emergence.
              </h2>
            </div>
            <div className="space-y-6 md:col-span-8">
              {[
                {
                  n: "01",
                  t: "NODES",
                  d: "Every capture — a note, an image, a quote, a voice memo — is an atomic node. Typed, indexed, and embedded the moment it exists.",
                  acc: "cyan",
                },
                {
                  n: "02",
                  t: "EDGES",
                  d: "Connections form by intent ([[wikilinks]]), by semantics (embedding similarity), or by inference (the Synapse model proposes links; you accept or reject).",
                  acc: "fuchsia",
                },
                {
                  n: "03",
                  t: "PATHS",
                  d: "Traverse the graph like a physical space. A paper trail becomes a walking trail. Emergent topology reveals the shape of your attention.",
                  acc: "violet",
                },
              ].map((f) => (
                <div
                  key={f.n}
                  className="group flex items-start gap-6 border-t border-white/10 pt-6"
                >
                  <div className="w-20 shrink-0 font-mono text-xs text-cyan-300">
                    [{f.n}]
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 font-mono text-xl tracking-[0.2em] text-white">
                      {f.t}
                    </h3>
                    <p className="max-w-xl text-white/60 leading-relaxed">
                      {f.d}
                    </p>
                  </div>
                  <svg
                    className="mt-1 h-5 w-5 text-white/20 transition-transform group-hover:translate-x-1 group-hover:text-cyan-300"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.25"
                  >
                    <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Capture",
                d: "Global ⌘⇧N. Markdown. Images. Audio. Web. Sub-100ms to disk.",
                meta: "[IO-001]",
              },
              {
                t: "Query",
                d: "Natural language, fuzzy, semantic, temporal — all at once.",
                meta: "[QL-002]",
              },
              {
                t: "Traverse",
                d: "Walk the graph with keyboard. Each step, a memory.",
                meta: "[NAV-003]",
              },
              {
                t: "Annotate",
                d: "Marginalia as first-class nodes. Your thinking, layered.",
                meta: "[AN-004]",
              },
              {
                t: "Compose",
                d: "Drag a subgraph into the canvas — ship an essay.",
                meta: "[COMP-005]",
              },
              {
                t: "Broadcast",
                d: "Publish any node as a public hyperlink. Keep the rest private forever.",
                meta: "[BCAST-006]",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="group relative overflow-hidden border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-cyan-400/30 hover:bg-cyan-500/5"
              >
                <div className="absolute right-4 top-4 font-mono text-[10px] text-white/30 group-hover:text-cyan-300">
                  {c.meta}
                </div>
                <h3 className="mb-3 font-mono text-lg uppercase tracking-[0.25em]">
                  {c.t}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">{c.d}</p>
                <div className="mt-6 h-px w-10 bg-cyan-400/40 transition-all group-hover:w-full" />
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-24 text-center">
          <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.35em] text-cyan-300">
            &gt;_ begin_session
          </div>
          <h2 className="text-5xl font-light leading-[1.05] tracking-tight">
            Plug in your mind.
            <br />
            <span className="italic text-cyan-300">See what it looks like.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg font-mono text-sm text-white/50">
            Free forever for individuals. End-to-end encrypted. Open-source
            protocol. Works offline. Owns nothing of yours.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#"
              className="inline-flex items-center gap-3 border border-cyan-400/50 bg-cyan-400/10 px-6 py-3.5 font-mono text-sm uppercase tracking-[0.25em] text-cyan-100 hover:bg-cyan-400/20"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.8)]" />
              Initialize Synapse
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 border border-white/15 px-6 py-3.5 font-mono text-sm uppercase tracking-[0.25em] text-white/60 hover:border-white/30 hover:text-white"
            >
              github ↗
            </Link>
          </div>
        </section>

        <footer className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
            <div>synapse / &copy; 2026 / built on the open graph</div>
            <div className="flex gap-6">
              <a href="#">status: 1.00</a>
              <a href="#">security</a>
              <a href="#">rfcs</a>
              <a href="#">manifesto</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
