import { IterationSwitcher } from "@/components/iteration-switcher";

export default function ThreePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <IterationSwitcher />

      {/* Nav */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-lg font-bold tracking-widest uppercase text-cyan-400">
          Synapse
        </div>
        <div className="flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-cyan-400">Network</a>
          <a href="#" className="hover:text-cyan-400">Neural</a>
          <a href="#" className="hover:text-cyan-400">Archive</a>
          <a
            href="#"
            className="rounded-md bg-cyan-500/10 px-4 py-2 text-cyan-400 ring-1 ring-cyan-500/20 hover:bg-cyan-500/20"
          >
            Initialize
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pt-24 pb-32 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-cyan-400 ring-1 ring-cyan-500/20">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Neural engine v2.4 active
          </div>
          <h1 className="mt-8 text-5xl font-bold tracking-tight leading-[1.1] sm:text-7xl">
            Your mind,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              visualized.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Synapse turns your notes into a living knowledge graph. Watch ideas
            connect, cluster, and evolve in real time.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#"
              className="rounded-md bg-cyan-500 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-400"
            >
              Enter the graph
            </a>
            <a
              href="#"
              className="rounded-md border border-slate-700 px-6 py-3 text-sm font-bold text-slate-300 hover:border-slate-500 hover:text-white"
            >
              View demo
            </a>
          </div>
        </div>

        {/* Graph mock */}
        <div className="relative mt-20 mx-auto max-w-4xl">
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm">
            <svg viewBox="0 0 800 300" className="w-full h-auto">
              {/* Connections */}
              <line x1="100" y1="150" x2="250" y2="80" stroke="rgba(34,211,238,0.2)" strokeWidth="1" />
              <line x1="100" y1="150" x2="250" y2="220" stroke="rgba(34,211,238,0.15)" strokeWidth="1" />
              <line x1="250" y1="80" x2="400" y2="120" stroke="rgba(167,139,250,0.2)" strokeWidth="1" />
              <line x1="250" y1="220" x2="400" y2="180" stroke="rgba(34,211,238,0.15)" strokeWidth="1" />
              <line x1="400" y1="120" x2="550" y2="60" stroke="rgba(167,139,250,0.2)" strokeWidth="1" />
              <line x1="400" y1="180" x2="550" y2="240" stroke="rgba(34,211,238,0.15)" strokeWidth="1" />
              <line x1="550" y1="60" x2="700" y2="150" stroke="rgba(167,139,250,0.2)" strokeWidth="1" />
              <line x1="550" y1="240" x2="700" y2="150" stroke="rgba(34,211,238,0.15)" strokeWidth="1" />
              <line x1="400" y1="120" x2="400" y2="180" stroke="rgba(148,163,184,0.1)" strokeWidth="1" />
              <line x1="250" y1="80" x2="250" y2="220" stroke="rgba(148,163,184,0.1)" strokeWidth="1" />

              {/* Nodes */}
              <circle cx="100" cy="150" r="8" fill="rgba(34,211,238,0.3)" stroke="rgba(34,211,238,0.6)" strokeWidth="2" />
              <circle cx="250" cy="80" r="10" fill="rgba(167,139,250,0.3)" stroke="rgba(167,139,250,0.6)" strokeWidth="2" />
              <circle cx="250" cy="220" r="6" fill="rgba(34,211,238,0.2)" stroke="rgba(34,211,238,0.5)" strokeWidth="1.5" />
              <circle cx="400" cy="120" r="12" fill="rgba(167,139,250,0.3)" stroke="rgba(167,139,250,0.6)" strokeWidth="2" />
              <circle cx="400" cy="180" r="8" fill="rgba(34,211,238,0.2)" stroke="rgba(34,211,238,0.5)" strokeWidth="1.5" />
              <circle cx="550" cy="60" r="9" fill="rgba(167,139,250,0.3)" stroke="rgba(167,139,250,0.6)" strokeWidth="2" />
              <circle cx="550" cy="240" r="7" fill="rgba(34,211,238,0.2)" stroke="rgba(34,211,238,0.5)" strokeWidth="1.5" />
              <circle cx="700" cy="150" r="14" fill="rgba(167,139,250,0.3)" stroke="rgba(167,139,250,0.6)" strokeWidth="2" />

              {/* Labels */}
              <text x="100" y="175" textAnchor="middle" fill="rgba(148,163,184,0.6)" fontSize="10">Seed</text>
              <text x="250" y="55" textAnchor="middle" fill="rgba(148,163,184,0.6)" fontSize="10">Idea A</text>
              <text x="400" y="95" textAnchor="middle" fill="rgba(148,163,184,0.6)" fontSize="10">Cluster</text>
              <text x="700" y="180" textAnchor="middle" fill="rgba(148,163,184,0.6)" fontSize="10">Insight</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="border-t border-slate-800 bg-slate-900/30 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400">12.4k</div>
              <div className="mt-1 text-sm text-slate-500">Nodes created</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-violet-400">48.2k</div>
              <div className="mt-1 text-sm text-slate-500">Connections mapped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">99.9%</div>
              <div className="mt-1 text-sm text-slate-500">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white">
            Powered by intelligence
          </h2>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Auto-Linking", desc: "AI suggests connections between your notes you never saw coming." },
              { title: "Graph View", desc: "Navigate your knowledge as a spatial network, not a folder tree." },
              { title: "Semantic Search", desc: "Find ideas by meaning, not just keywords." },
              { title: "Daily Resurface", desc: "Forgotten notes reappear when contextually relevant." },
              { title: "Embeddings", desc: "Every note is vectorized for lightning-fast similarity." },
              { title: "API Access", desc: "Build on top of your second brain with our GraphQL API." },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-lg border border-slate-800 bg-slate-900/50 p-6 hover:border-slate-700 transition-colors"
              >
                <h3 className="text-base font-bold text-slate-200">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
