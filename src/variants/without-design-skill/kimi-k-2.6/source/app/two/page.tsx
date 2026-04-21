export default function Two() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-zinc-950 to-zinc-950" />
      <div className="relative z-10 max-w-3xl text-center space-y-8">
        <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
          The future of memory
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] bg-gradient-to-br from-white via-emerald-100 to-emerald-400 bg-clip-text text-transparent">
          A second brain for the digital age.
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-xl mx-auto">
          Neural linking, semantic search, and infinite canvas. Your ideas do not just sit there—they grow.
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <button className="h-12 px-8 rounded-lg bg-emerald-500 text-zinc-950 font-semibold hover:bg-emerald-400 transition shadow-[0_0_20px_rgba(16,185,129,0.4)] cursor-pointer">
            Initialize
          </button>
          <button className="h-12 px-8 rounded-lg border border-zinc-700 text-zinc-300 font-medium hover:border-zinc-500 transition cursor-pointer">
            Read docs
          </button>
        </div>
      </div>
      <div className="relative z-10 mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
        {['Link thoughts', 'Search meaning', 'Graph view'].map((f) => (
          <div key={f} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm">
            <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            </div>
            <h3 className="font-semibold text-zinc-100">{f}</h3>
            <p className="text-sm text-zinc-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
