export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-sky-50 to-white font-sans text-zinc-800 dark:from-zinc-950 dark:to-zinc-900 dark:text-zinc-200">
      <div className="flex flex-1 flex-col items-center justify-center px-8 py-24">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500 text-2xl shadow-lg shadow-violet-500/30">
            🧠
          </div>
        </div>
        <h1 className="mb-4 text-center text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          Meet your
          <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent"> second brain</span>
        </h1>
        <p className="mb-10 max-w-md text-center text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
          A cozy home for all your thoughts, ideas, and discoveries. Simple to
          start, powerful to grow.
        </p>
        <div className="mb-16 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button className="rounded-2xl bg-violet-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-violet-500/25 transition-all hover:scale-105 hover:bg-violet-600 hover:shadow-xl">
            Start thinking better
          </button>
          <button className="rounded-2xl border-2 border-violet-200 px-8 py-4 text-sm font-bold text-violet-600 transition-all hover:border-violet-300 hover:bg-violet-50 dark:border-violet-800 dark:text-violet-400 dark:hover:border-violet-700 dark:hover:bg-violet-950">
            Take a tour
          </button>
        </div>
        <div className="grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { emoji: "📝", title: "Quick Capture", desc: "Jot down ideas in seconds" },
            { emoji: "🔗", title: "Auto-Link", desc: "Connections appear magically" },
            { emoji: "🔍", title: "Smart Search", desc: "Find by meaning, not words" },
            { emoji: "🌐", title: "Graph View", desc: "See your mind's map" },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-violet-100 bg-white/80 p-5 text-center backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-violet-900/50 dark:bg-zinc-800/80">
              <div className="mb-3 text-3xl">{f.emoji}</div>
              <h3 className="mb-1 text-sm font-bold">{f.title}</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 rounded-3xl border border-violet-100 bg-white/60 p-8 text-center backdrop-blur-sm dark:border-violet-900/30 dark:bg-zinc-800/40">
          <div className="mb-4 text-4xl">✨</div>
          <h3 className="mb-2 text-xl font-bold">Free forever for personal use</h3>
          <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
            No credit card needed. No trial limits. Your second brain, your rules.
          </p>
          <div className="flex items-center justify-center gap-6 text-xs text-zinc-400">
            <span>🔒 Encrypted</span>
            <span>📱 All devices</span>
            <span>🔄 Always synced</span>
          </div>
        </div>
      </div>
    </div>
  );
}
