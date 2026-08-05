import Link from "next/link";

export default function PageTwo() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-emerald-500 selection:text-black">
      {/* grid bg */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#09090b]" />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#09090b]" />
      </div>

      {/* Top nav — terminal */}
      <div className="sticky top-0 z-20 border-b border-zinc-800 bg-zinc-950/70 backdrop-blur">
        <div className="max-w-[1180px] mx-auto px-6 h-12 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
              <span className="font-mono text-sm tracking-tight text-white">SYNAPSE</span>
              <span className="text-xs font-mono px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">02 / GRAPH</span>
            </div>
            <nav className="hidden md:flex items-center gap-5 text-xs font-mono tracking-wide text-zinc-500">
              <a href="#graph" className="hover:text-white">[ graph ]</a>
              <a href="#protocol" className="hover:text-white">[ protocol ]</a>
              <a href="#perf" className="hover:text-white">[ perf ]</a>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/" className="hidden sm:inline text-xs font-mono text-zinc-500 hover:text-white mr-2">hub -&gt;</Link>
            <a href="#" className="hidden sm:inline text-xs font-mono px-3 py-1.5 rounded border border-zinc-700 text-zinc-300 hover:bg-zinc-900">docs</a>
            <a href="#" className="text-xs font-mono px-4 py-1.5 rounded bg-emerald-500 text-black font-medium hover:bg-emerald-400">init vault →</a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-[1180px] mx-auto px-6 pt-10 sm:pt-14 pb-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase">
              <span className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">local-first · encrypted · offline</span>
              <span className="hidden sm:inline text-zinc-600">— v2.4.1</span>
            </div>

            <h1 className="mt-6 font-mono text-[36px] sm:text-[44px] lg:text-[52px] leading-[0.9] tracking-[-0.02em] text-white">
              Your mind
              <br />
              <span className="text-emerald-400">&lt;is a graph&gt;</span>
              <br />
              not a folder.
            </h1>

            <p className="mt-5 text-[15px] leading-6 text-zinc-400 max-w-[520px]">
              Synapse maps your notes as an interactive canvas. Bi-links, backlinks, blocks, queries — all searchable with
              <span className="text-white"> ripgrep speed</span>. Built for people who think in networks, not lists.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#" className="px-5 py-2.5 rounded bg-emerald-500 text-black font-mono text-sm font-medium hover:bg-emerald-400">npx synapse@latest —y</a>
              <a href="#" className="px-5 py-2.5 rounded border border-zinc-700 bg-zinc-900 font-mono text-sm text-zinc-200 hover:bg-zinc-800">view graph →</a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-xs font-mono">
              <span className="px-2.5 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">42ms query</span>
              <span className="px-2.5 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">100% offline</span>
              <span className="px-2.5 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-emerald-400">e2e encrypted</span>
            </div>

            <div className="mt-8 rounded-lg bg-zinc-950 border border-zinc-800 overflow-hidden font-mono text-xs">
              <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800 text-zinc-500">
                <span>~ synapse query</span>
                <span className="size-2 rounded-full bg-red-500/80" />
              </div>
              <div className="p-3 space-y-1 text-zinc-300">
                <div><span className="text-zinc-500">$</span> synapse search &quot;memory palace && !archived&quot;</div>
                <div className="text-emerald-400">→ 14 nodes · 27 edges · 0.8ms</div>
                <div className="text-zinc-500"> top: [[method of loci]] — 9 backlinks — updated 2h ago</div>
              </div>
            </div>
          </div>

          {/* Graph mock */}
          <div className="relative">
            <div className="absolute -inset-2 bg-emerald-500/10 blur-2xl rounded-[32px]" />
            <div id="graph" className="relative rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden">
              {/* toolbar */}
              <div className="h-10 border-b border-zinc-800 flex items-center justify-between px-3 bg-zinc-950">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-zinc-800 border border-zinc-700" />
                  <span className="font-mono text-xs text-zinc-400">canvas — 342 nodes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 font-mono text-[11px] text-zinc-400">◉ Focus</span>
                  <span className="px-2 py-1 rounded bg-emerald-500 text-black font-mono text-[11px]">Live</span>
                </div>
              </div>

              {/* SVG graph */}
              <div className="relative h-[420px] bg-[#0a0a0a] overflow-hidden">
                <svg viewBox="0 0 400 360" className="absolute inset-0 size-full">
                  {/* edges */}
                  <g stroke="#27272a" strokeWidth="1" opacity="0.9">
                    <line x1="120" y1="90" x2="200" y2="60" />
                    <line x1="200" y1="60" x2="280" y2="95" />
                    <line x1="200" y1="60" x2="200" y2="150" />
                    <line x1="200" y1="150" x2="120" y2="200" />
                    <line x1="200" y1="150" x2="280" y2="200" />
                    <line x1="120" y1="200" x2="80" y2="280" />
                    <line x1="280" y1="200" x2="320" y2="280" />
                    <line x1="200" y1="150" x2="200" y2="250" />
                    <line x1="120" y1="90" x2="80" y2="160" />
                    <line x1="280" y1="95" x2="320" y2="160" />
                  </g>
                  {/* nodes */}
                  {[
                    { x: 200, y: 60, r: 22, label: "index", active: true },
                    { x: 120, y: 90, r: 16 },
                    { x: 280, y: 95, r: 16 },
                    { x: 200, y: 150, r: 18, label: "memory" },
                    { x: 120, y: 200, r: 14 },
                    { x: 280, y: 200, r: 14 },
                    { x: 200, y: 250, r: 16 },
                    { x: 80, y: 160, r: 10, dim: true },
                    { x: 320, y: 160, r: 10, dim: true },
                    { x: 80, y: 280, r: 12 },
                    { x: 320, y: 280, r: 12 },
                  ].map((n, i) => (
                    <g key={i}>
                      <circle cx={n.x} cy={n.y} r={n.r} fill={n.active ? "#10b981" : n.dim ? "#27272a" : "#18181b"} stroke={n.active ? "#34d399" : "#3f3f46"} strokeWidth={n.active ? 2 : 1} className={n.active ? "drop-shadow-[0_0_12px_rgba(16,185,129,0.6)]" : ""} />
                      {n.label && (
                        <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize="7" fontFamily="monospace" fill={n.active ? "black" : "#a1a1aa"} fontWeight="700">
                          {n.label}
                        </text>
                      )}
                    </g>
                  ))}
                  {/* pulse */}
                  <circle cx="200" cy="60" r="28" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.3">
                    <animate attributeName="r" values="22;34;22" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                  </circle>
                </svg>

                {/* floating cards */}
                <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                  <div className="flex-1 rounded-xl bg-zinc-900 border border-zinc-800 p-3">
                    <div className="font-mono text-[11px] tracking-widest uppercase text-zinc-500">linked mention</div>
                    <div className="text-sm font-mono text-white mt-1">[[method of loci]]</div>
                    <div className="text-xs font-mono text-zinc-500">18 refs · updated today</div>
                  </div>
                  <div className="hidden sm:block flex-1 rounded-xl bg-emerald-500 p-3 text-black">
                    <div className="font-mono text-[11px] tracking-widest uppercase opacity-70">command</div>
                    <div className="text-sm font-mono font-medium mt-1">⌘ + K → link</div>
                    <div className="text-xs font-mono opacity-70">fuzzy · 3ms</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-zinc-800 bg-zinc-950 px-3 py-2.5 flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-500">SPACE drag · SCROLL zoom · SHIFT select</span>
                <span className="font-mono text-xs text-emerald-400">342 nodes synced</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs">
          {[
            { k: "1.2M", v: "edges rendered 60fps" },
            { k: "<10ms", v: "full-text search" },
            { k: "Local", v: "sqlite + CRDT" },
            { k: "100%", v: "markdown files" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3">
              <div className="text-white text-base">{s.k}</div>
              <div className="text-zinc-500">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Protocol */}
      <section id="protocol" className="border-y border-zinc-800 bg-zinc-950">
        <div className="max-w-[1180px] mx-auto px-6 py-12">
          <div className="flex items-center gap-2 font-mono text-xs tracking-[0.16em] uppercase text-zinc-500">
            <span className="size-1.5 rounded-full bg-emerald-500" /> The protocol
          </div>
          <div className="mt-6 grid lg:grid-cols-3 gap-6">
            {[
              {
                n: "01 / CAPTURE",
                t: "Every block is addressable",
                d: "Type (( to reference any block. Transclude, query, embed. Your notes become a database you can talk to.",
                code: "```query\n{{query [[project]] sort:updated}}\n```",
              },
              {
                n: "02 / CONNECT",
                t: "Bi-links are automatic",
                d: "Link A → B and B knows about A. No plugins. Graph, local graph, and queries stay in sync as you type.",
                code: "> backlinks: 14\n> unlinked: 3",
              },
              {
                n: "03 / RECALL",
                t: "Spaced. Not spammy.",
                d: "We run SM-2 locally. Notes resurface only when the forgetting curve says you need them. Private, precise.",
                code: "next_review: 3d\nretention: 0.92",
              },
            ].map((f) => (
              <div key={f.n} className="rounded-2xl border border-zinc-800 bg-[#09090b] p-6">
                <div className="font-mono text-xs tracking-widest text-emerald-400">{f.n}</div>
                <div className="mt-2 font-mono text-sm font-medium text-white">{f.t}</div>
                <div className="mt-2 text-sm leading-6 text-zinc-400">{f.d}</div>
                <pre className="mt-4 rounded-lg bg-zinc-950 border border-zinc-900 p-3 text-xs font-mono text-zinc-300 overflow-x-auto">{f.code}</pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perf / pricing */}
      <section id="perf" className="max-w-[1180px] mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8">
            <div className="font-mono text-xs tracking-[0.16em] uppercase text-zinc-500">Benchmark — MacBook Air M2</div>
            <div className="mt-4 grid grid-cols-3 gap-6 border-y border-zinc-800 py-6">
              <div>
                <div className="font-mono text-xl text-white">42ms</div>
                <div className="font-mono text-xs text-zinc-500">search 50k notes</div>
              </div>
              <div>
                <div className="font-mono text-xl text-white">60fps</div>
                <div className="font-mono text-xs text-zinc-500">graph pan/zoom</div>
              </div>
              <div>
                <div className="font-mono text-xl text-white">0KB</div>
                <div className="font-mono text-xs text-zinc-500">telemetry sent</div>
              </div>
            </div>
            <div className="mt-6 flex gap-3 text-sm font-mono">
              <a href="#" className="px-4 py-2 rounded bg-white text-black font-medium">download .dmg</a>
              <a href="#" className="px-4 py-2 rounded border border-zinc-700 text-zinc-300">view source</a>
            </div>
            <div className="mt-4 font-mono text-xs text-zinc-500">Free for local. Sync is $8/mo when you want it.</div>
          </div>

          <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-transparent p-6 sm:p-8">
            <div className="font-mono text-xs tracking-widest uppercase text-emerald-400">What builders say</div>
            <blockquote className="mt-3 font-mono text-sm leading-6 text-zinc-200">
              “Obsidian wishes it was this fast. Notion wishes it was this local. I moved 6k notes and never looked back.”
            </blockquote>
            <div className="mt-4 flex items-center gap-3">
              <img src="https://i.pravatar.cc/100?img=15" alt="" className="size-8 rounded-full border border-zinc-700" />
              <div className="font-mono text-xs">
                <div className="text-white">@arjun — eng, Linear</div>
                <div className="text-zinc-500">migrated from Obsidian</div>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <span className="px-2 py-1 rounded bg-zinc-950 border border-zinc-800 font-mono text-xs text-zinc-400">★★★★★ 4.9</span>
              <span className="px-2 py-1 rounded bg-zinc-950 border border-zinc-800 font-mono text-xs text-zinc-400">2,841 reviews</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-[1180px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-zinc-500">
          <span>© 2026 SYNAPSE — 02 GRAPH · sys: local-first · enc: xchacha20</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-white">readme</a>
            <a href="#" className="hover:text-white">changelog</a>
            <Link href="/" className="hover:text-white">hub</Link>
          </span>
        </div>
        <div className="pb-24" />
      </footer>
    </div>
  );
}
