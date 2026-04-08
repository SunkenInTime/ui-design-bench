export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 font-mono text-emerald-400">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative flex flex-1 flex-col items-center justify-center px-8 py-24">
        <div className="mb-6 flex items-center gap-3 text-xs tracking-widest text-emerald-500/60">
          <span className="h-px w-12 bg-emerald-500/30" />
          NEURAL_INTERFACE v2.0
          <span className="h-px w-12 bg-emerald-500/30" />
        </div>
        <h1 className="mb-2 text-center text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
          <span className="text-emerald-300">synaptic</span>
          <span className="text-zinc-500">::</span>
          <span className="text-emerald-300">brain</span>
        </h1>
        <div className="mb-8 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1 text-xs text-emerald-400/70">
          $ your_second_brain --init
        </div>
        <p className="mb-12 max-w-lg text-center text-sm leading-loose text-zinc-500">
          A neural network for your thoughts. Every note is a neuron. Every link
          is a synapse. Watch your knowledge grow, connect, and fire on demand.
        </p>
        <div className="mb-16 flex gap-4">
          <button className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 text-sm font-bold text-emerald-300 transition-all hover:border-emerald-400/50 hover:bg-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/10">
            &gt; initialize
          </button>
          <button className="rounded-lg border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-500 transition-all hover:border-zinc-600 hover:text-zinc-300">
            &gt; read_docs
          </button>
        </div>
        <div className="grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800 sm:grid-cols-3">
          {[
            { icon: "[◇]", label: "NODES", value: "∞" },
            { icon: "[⟷]", label: "EDGES", value: "∞" },
            { icon: "[⚡]", label: "LATENCY", value: "0ms" },
          ].map((s) => (
            <div key={s.label} className="bg-zinc-950 p-6 text-center">
              <div className="mb-1 text-emerald-500/40">{s.icon}</div>
              <div className="text-2xl font-bold text-emerald-300">{s.value}</div>
              <div className="mt-1 text-[10px] tracking-widest text-zinc-600">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 max-w-xl rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 text-left font-mono text-xs leading-relaxed text-zinc-600">
          <div className="mb-2 text-emerald-500/50">// how it works</div>
          <div><span className="text-emerald-400">1.</span> Capture thoughts in any format</div>
          <div><span className="text-emerald-400">2.</span> AI auto-links related concepts</div>
          <div><span className="text-emerald-400">3.</span> Surface insights on demand</div>
          <div className="mt-2 text-zinc-700">$ _</div>
        </div>
      </div>
    </div>
  );
}
