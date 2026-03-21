// Design One: Minimalist Clean - Focus on simplicity and whitespace
import Link from "next/link";

export default function DesignOne() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-6 bg-white/80 backdrop-blur-sm">
        <div className="text-xl font-light tracking-[0.2em] text-stone-800">
          NEURONOTE
        </div>
        <div className="flex items-center gap-8">
          <Link href="#" className="text-sm text-stone-500 hover:text-stone-800 transition-colors">
            Features
          </Link>
          <Link href="#" className="text-sm text-stone-500 hover:text-stone-800 transition-colors">
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm px-5 py-2 border border-stone-300 rounded-full hover:bg-stone-800 hover:text-white hover:border-stone-800 transition-all"
          >
            Sign In
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-screen px-8">
        <div className="max-w-3xl text-center">
          <p className="text-xs tracking-[0.3em] text-stone-400 uppercase mb-8">
            Your Second Brain, Reimagined
          </p>
          <h1 className="text-5xl md:text-7xl font-extralight text-stone-800 leading-[1.1] mb-8">
            Capture thoughts.
            <br />
            <span className="font-normal italic">Connect ideas.</span>
          </h1>
          <p className="text-lg font-light text-stone-500 max-w-xl mx-auto mb-12 leading-relaxed">
            A minimal space for maximum thinking. Organize your notes, build knowledge networks, 
            and let your ideas flourish in their purest form.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#"
              className="w-full sm:w-auto px-8 py-4 bg-stone-800 text-white text-sm tracking-wide rounded-full hover:bg-stone-700 transition-colors"
            >
              Start Free
            </Link>
            <Link
              href="#"
              className="w-full sm:w-auto px-8 py-4 text-sm text-stone-600 hover:text-stone-800 transition-colors"
            >
              Watch Demo →
            </Link>
          </div>
        </div>
      </main>

      {/* Feature Preview */}
      <section className="py-24 px-8 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-stone-200 flex items-center justify-center text-stone-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-sm font-normal text-stone-800 mb-2">Effortless Writing</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Distraction-free editor that adapts to your flow
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-stone-200 flex items-center justify-center text-stone-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-sm font-normal text-stone-800 mb-2">Connected Notes</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Bi-directional linking weaves your thoughts together
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-stone-200 flex items-center justify-center text-stone-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-normal text-stone-800 mb-2">Instant Recall</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Find anything with powerful semantic search
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
