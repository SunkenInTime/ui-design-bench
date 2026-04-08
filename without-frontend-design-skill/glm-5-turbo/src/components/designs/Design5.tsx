const steps = [
  {
    num: "01",
    title: "Capture",
    desc: "Quick capture from any device. Never lose an idea again.",
  },
  {
    num: "02",
    title: "Connect",
    desc: "Bi-directional links that surface related knowledge automatically.",
  },
  {
    num: "03",
    title: "Retrieve",
    desc: "Instant search across every note you have ever written.",
  },
  {
    num: "04",
    title: "Grow",
    desc: "Your knowledge compound interest. Each note makes the network stronger.",
  },
];

export default function Design5() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="h-1 bg-red-600" />

      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="py-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-red-600 rounded-sm" />
            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 tracking-tight uppercase">
              Cortex
            </span>
          </div>
          <nav className="hidden sm:flex items-center gap-8 text-[12px] font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
            <a
              href="#"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Product
            </a>
            <a
              href="#"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Solutions
            </a>
            <a
              href="#"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Docs
            </a>
            <a
              href="#"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Pricing
            </a>
          </nav>
        </div>

        <div className="pt-16 sm:pt-24 pb-20 sm:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-red-600" />
              <span className="text-[11px] font-semibold text-red-600 uppercase tracking-widest">
                Second Brain App
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 leading-[0.9] mb-6 uppercase">
              Your
              <br />
              second
              <br />
              brain.
            </h1>
            <p className="text-base text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed mb-10">
              Capture every thought. Connect every idea. Build a knowledge base
              that compounds over time.
            </p>
            <div className="flex items-center gap-4">
              <button className="px-7 py-3.5 bg-red-600 text-white rounded-none text-sm font-bold uppercase tracking-wide hover:bg-red-700 transition-colors">
                Start free
              </button>
              <button className="px-7 py-3.5 border-2 border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 rounded-none text-sm font-bold uppercase tracking-wide hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-all">
                Explore
              </button>
            </div>
          </div>

          <div className="space-y-0 border-t border-zinc-200 dark:border-zinc-800">
            {steps.map((s) => (
              <div
                key={s.num}
                className="py-6 border-b border-zinc-200 dark:border-zinc-800 flex gap-6 items-start"
              >
                <span className="text-[12px] font-bold text-red-600 mt-0.5 w-6">
                  {s.num}
                </span>
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm mb-1">
                    {s.title}
                  </h3>
                  <p className="text-[13px] text-zinc-400 dark:text-zinc-500 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
