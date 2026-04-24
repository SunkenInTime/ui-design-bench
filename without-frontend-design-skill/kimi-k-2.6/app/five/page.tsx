export default function Five() {
  return (
    <div className="min-h-screen bg-[#f3f0ff] text-[#2d2d2d] flex flex-col items-center px-6 py-24 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full opacity-30"
        style={{
          backgroundImage: 'radial-gradient(#c4b5fd 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="relative z-10 max-w-4xl text-center space-y-8">
        <div className="flex justify-center gap-2">
          {['New', 'Fast', 'Fun'].map((b) => (
            <span
              key={b}
              className="inline-block px-4 py-1.5 rounded-full bg-white border border-violet-200 text-sm font-bold text-violet-700 shadow-sm"
            >
              {b}
            </span>
          ))}
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[1] text-violet-950">
          Notes that think <br /> with you.
        </h1>
        <p className="text-lg md:text-2xl text-violet-800/70 max-w-2xl mx-auto leading-relaxed">
          Drop ideas, link them like magic, and watch your personal knowledge garden bloom.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button className="h-14 px-10 rounded-2xl bg-violet-600 text-white font-bold text-lg hover:bg-violet-500 transition shadow-lg shadow-violet-500/30 cursor-pointer">
            Plant your first idea
          </button>
          <button className="h-14 px-10 rounded-2xl bg-white text-violet-700 font-bold text-lg border-2 border-violet-200 hover:border-violet-400 transition cursor-pointer">
            Tour the garden
          </button>
        </div>
      </div>
      <div className="relative z-10 mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl">
        {[
          { emoji: '🌱', title: 'Capture', desc: 'Jot down anything, anywhere.' },
          { emoji: '🔗', title: 'Connect', desc: 'Link ideas and see patterns emerge.' },
          { emoji: '🚀', title: 'Create', desc: 'Export beautiful documents in seconds.' },
        ].map((c) => (
          <div
            key={c.title}
            className="rounded-3xl bg-white border-2 border-violet-100 p-8 text-center hover:-translate-y-1 transition-transform shadow-sm"
          >
            <div className="text-4xl mb-4">{c.emoji}</div>
            <h3 className="text-xl font-bold text-violet-900">{c.title}</h3>
            <p className="text-violet-700/60 mt-2">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
