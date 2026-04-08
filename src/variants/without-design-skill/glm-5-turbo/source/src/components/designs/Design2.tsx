const features = [
  {
    title: "Instant Capture",
    desc: "Jot down thoughts before they vanish",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    ),
  },
  {
    title: "Smart Links",
    desc: "Auto-connect related ideas",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.54a4.5 4.5 0 00-1.242-7.244l4.5-4.5a4.5 4.5 0 016.364 6.364l-1.757 1.757"
      />
    ),
  },
  {
    title: "Neural Search",
    desc: "Find anything with AI-powered retrieval",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    ),
  },
];

export default function Design2() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#07071a] text-white">
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/25 blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[120px] animate-pulse-slower" />
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-[80px] animate-pulse-slowest" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] text-white/50 tracking-wide">
              Now with AI-powered search
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
            Your second brain,
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              supercharged.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/40 max-w-lg mx-auto mb-14 leading-relaxed">
            Capture ideas, link knowledge, and retrieve anything instantly. The
            note-taking app that thinks the way you do.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-20">
            <button className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-sm font-semibold hover:shadow-[0_0_40px_rgba(147,51,234,0.35)] transition-all duration-300">
              Start building your brain
            </button>
            <button className="px-8 py-3.5 rounded-full text-sm font-medium text-white/50 hover:text-white/80 border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300">
              Watch demo
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/[0.06] flex items-center justify-center mb-4">
                  <svg
                    className="w-4 h-4 text-purple-300/60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    {f.icon}
                  </svg>
                </div>
                <h3 className="font-semibold text-sm text-white/90 mb-1.5">
                  {f.title}
                </h3>
                <p className="text-[13px] text-white/30 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
