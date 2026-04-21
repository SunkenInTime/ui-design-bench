export default function Four() {
  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#1c1917] px-6 py-20 flex flex-col items-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <p className="text-sm font-bold tracking-widest uppercase text-stone-500">The Knowledge OS</p>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            Think better.<br />
            <span className="italic font-serif text-stone-500">Remember everything.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-md">
            In a world of infinite information, the scarce resource is attention. Our note-taking tool helps you curate, not just collect.
          </p>
          <div className="flex items-center gap-6 pt-2">
            <a href="#" className="text-sm font-semibold underline underline-offset-4 decoration-stone-300 hover:decoration-stone-800 transition">Read the manifesto</a>
            <a href="#" className="text-sm font-semibold underline underline-offset-4 decoration-stone-300 hover:decoration-stone-800 transition">See pricing</a>
          </div>
        </div>
        <div className="lg:col-span-5 space-y-6">
          <div className="aspect-[4/5] rounded-sm bg-stone-200 border border-stone-300" />
          <p className="text-xs text-stone-400 uppercase tracking-wide text-center">Figure 1. The architecture of memory</p>
        </div>
      </div>
      <div className="mt-32 max-w-6xl w-full border-t border-stone-200 pt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { title: 'Curate', desc: 'Filter noise. Save signal.' },
          { title: 'Connect', desc: 'Ideas are nodes. Links are synapses.' },
          { title: 'Create', desc: 'Turn notes into publishable work.' },
        ].map((item) => (
          <div key={item.title} className="space-y-3">
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p className="text-stone-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
