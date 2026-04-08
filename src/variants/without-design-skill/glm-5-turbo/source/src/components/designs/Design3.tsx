const features = [
  {
    title: "Notebooks",
    desc: "Group related notes into collections that mirror how you think.",
    accent: "bg-amber-200 dark:bg-amber-800",
  },
  {
    title: "Backlinks",
    desc: "Every connection creates a new pathway to discovery.",
    accent: "bg-orange-200 dark:bg-orange-800",
  },
  {
    title: "Tags",
    desc: "Flexible labeling that adapts to your evolving system.",
    accent: "bg-yellow-200 dark:bg-yellow-800",
  },
  {
    title: "Daily Notes",
    desc: "Start each day with a fresh page. Never lose a fleeting thought.",
    accent: "bg-lime-200 dark:bg-lime-800",
  },
  {
    title: "Graph View",
    desc: "Visualize the web of connections between your ideas.",
    accent: "bg-emerald-200 dark:bg-emerald-800",
  },
  {
    title: "Offline First",
    desc: "Your notes stay with you, always. No internet required.",
    accent: "bg-teal-200 dark:bg-teal-800",
  },
];

export default function Design3() {
  return (
    <div className="min-h-screen bg-[#faf7f2] dark:bg-[#141210]">
      <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-amber-800 dark:bg-amber-600" />
          <span className="text-sm font-semibold text-amber-950 dark:text-amber-100 tracking-tight">
            Cortex
          </span>
        </div>
        <nav className="hidden sm:flex items-center gap-8 text-sm text-amber-950/60 dark:text-amber-100/50">
          <a
            href="#"
            className="hover:text-amber-950 dark:hover:text-amber-100 transition-colors"
          >
            Features
          </a>
          <a
            href="#"
            className="hover:text-amber-950 dark:hover:text-amber-100 transition-colors"
          >
            Pricing
          </a>
          <a
            href="#"
            className="hover:text-amber-950 dark:hover:text-amber-100 transition-colors"
          >
            About
          </a>
        </nav>
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-amber-950 dark:text-amber-50 leading-[1.05] mb-6">
            Where ideas
            <br />
            find their home.
          </h1>
          <p className="text-lg text-amber-950/50 dark:text-amber-100/40 max-w-md leading-relaxed mb-10">
            A thoughtfully crafted space for your notes. Organize by topic, tag
            freely, and watch your knowledge library grow.
          </p>
          <div className="flex items-center gap-4">
            <button className="px-7 py-3 bg-amber-900 dark:bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-800 dark:hover:bg-amber-500 transition-colors">
              Get started
            </button>
            <button className="px-7 py-3 text-sm font-medium text-amber-950/60 dark:text-amber-100/50 hover:text-amber-950 dark:hover:text-amber-100 transition-colors">
              Learn more &rarr;
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24 sm:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-xl bg-white/60 dark:bg-white/[0.03] border border-amber-200/50 dark:border-amber-800/20 hover:border-amber-300/70 dark:hover:border-amber-700/30 transition-colors"
            >
              <div className={`w-2 h-2 rounded-full ${f.accent} mb-4`} />
              <h3 className="font-semibold text-amber-950 dark:text-amber-100 text-sm mb-2">
                {f.title}
              </h3>
              <p className="text-[13px] text-amber-950/45 dark:text-amber-100/35 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
