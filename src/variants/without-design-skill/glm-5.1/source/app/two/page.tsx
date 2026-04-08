export default function Page() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-white">
      <div className="relative flex-1 overflow-hidden bg-gradient-to-br from-violet-600 via-indigo-700 to-purple-900">
        <div className="absolute inset-0 opacity-30" style={{background: "radial-gradient(circle at 20% 50%, rgba(120,80,255,0.5) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,100,200,0.4) 0%, transparent 40%)"}} />
        <div className="relative flex flex-col items-center justify-center px-8 py-24 text-center min-h-screen">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Now in public beta
          </div>
          <h1 className="mb-6 max-w-3xl text-6xl font-extrabold leading-[1.1] tracking-tight sm:text-7xl lg:text-8xl">
            Think bigger.
            <br />
            <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-amber-200 bg-clip-text text-transparent">
              Remember everything.
            </span>
          </h1>
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/70">
            The second brain that never forgets. Link your thoughts, surface
            insights, and let your ideas compound over time.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button className="rounded-xl bg-white px-8 py-4 text-sm font-bold text-indigo-700 shadow-xl shadow-indigo-900/30 transition-all hover:scale-105 hover:shadow-2xl">
              Get started free
            </button>
            <button className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold backdrop-blur-sm transition-all hover:bg-white/10">
              Watch demo
            </button>
          </div>
          <div className="mt-20 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { title: "Bi-directional Links", desc: "Every note connects both ways. Discover hidden relationships in your thinking." },
              { title: "Graph View", desc: "Visualize your knowledge as a living network of ideas." },
              { title: "Smart Search", desc: "Find anything instantly with AI-powered semantic search." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-sm">
                <h3 className="mb-2 text-lg font-bold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
