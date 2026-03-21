// Home page - Index of all design iterations
import Link from "next/link";

const designs = [
  {
    path: "/one",
    number: "1",
    name: "Minimalist Clean",
    description: "Pure whitespace, elegant typography, stone palette",
    color: "from-stone-400 to-stone-600",
    preview: "Simple, distraction-free design focusing on content",
  },
  {
    path: "/two",
    number: "2",
    name: "Dark Professional",
    description: "Sleek dark theme with indigo accents",
    color: "from-indigo-500 to-slate-700",
    preview: "Enterprise-focused with professional aesthetics",
  },
  {
    path: "/three",
    number: "3",
    name: "Colorful Creative",
    description: "Vibrant gradients, playful energy, warm tones",
    color: "from-rose-400 to-amber-400",
    preview: "Creative and artistic with animated blobs",
  },
  {
    path: "/four",
    number: "4",
    name: "Glassmorphism Modern",
    description: "Translucent cards, blur effects, premium feel",
    color: "from-cyan-400 to-purple-500",
    preview: "Futuristic with glass-morphism design patterns",
  },
  {
    path: "/five",
    number: "5",
    name: "Gradient Bold",
    description: "High contrast, bold gradients, impactful",
    color: "from-violet-500 to-fuchsia-500",
    preview: "Bold typography with vibrant color accents",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col">
      {/* Header */}
      <header className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-zinc-900">Second Brain</h1>
          <p className="text-zinc-500 mt-1">Note-taking app landing page designs</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <p className="text-zinc-600 max-w-2xl">
              Choose from five unique design iterations for your note-taking application. 
              Each design offers a distinct aesthetic and user experience. 
              Use the floating switcher at the bottom to navigate between designs.
            </p>
          </div>

          {/* Design Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designs.map((design) => (
              <Link
                key={design.path}
                href={design.path}
                className="group block bg-white rounded-2xl border border-zinc-200 p-6 hover:shadow-xl hover:border-zinc-300 transition-all duration-300"
              >
                {/* Card Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${design.color} flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {design.number}
                  </div>
                  <svg
                    className="w-5 h-5 text-zinc-400 group-hover:text-zinc-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </div>

                {/* Card Content */}
                <h2 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-zinc-700">
                  {design.name}
                </h2>
                <p className="text-sm text-zinc-500 mb-3">{design.description}</p>
                <p className="text-sm text-zinc-400">{design.preview}</p>

                {/* View Link */}
                <div className="mt-6 flex items-center text-sm font-medium text-zinc-600 group-hover:text-zinc-900">
                  <span>View Design</span>
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Quick Start */}
          <div className="mt-12 p-8 bg-zinc-900 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-white mb-3">Ready to explore?</h3>
            <p className="text-zinc-400 mb-6">
              Click any design above or use the floating switcher at the bottom of the screen 
              to switch between iterations instantly.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-zinc-500">
              <span className="px-3 py-1 bg-zinc-800 rounded-full">Tip: Bookmark your favorite</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto text-center text-sm text-zinc-400">
          <p>Five unique landing page designs for a second brain note-taking app</p>
        </div>
      </footer>
    </div>
  );
}

