// Design Five: Gradient Bold - High contrast, bold gradients, impactful
import Link from "next/link";

export default function DesignFive() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Bold Gradient Background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-violet-600/40 via-fuchsia-600/30 to-transparent"></div>
        <div className="absolute -top-48 -right-48 w-[600px] h-[600px] bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-full opacity-60 blur-3xl"></div>
        <div className="absolute top-1/4 -left-48 w-[400px] h-[400px] bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full opacity-50 blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className="text-2xl font-black text-white tracking-tight">
              BRAIN<span className="text-violet-400">WAVE</span>
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <Link href="#" className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors uppercase tracking-wide">
              Features
            </Link>
            <Link href="#" className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors uppercase tracking-wide">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors uppercase tracking-wide">
              About
            </Link>
            <Link href="#" className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors uppercase tracking-wide">
              Blog
            </Link>
          </div>
          <Link
            href="#"
            className="px-6 py-3 bg-white text-zinc-950 font-bold rounded-xl hover:bg-violet-100 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 pt-32 lg:pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/20 border border-violet-500/30 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
                <span className="text-sm font-semibold text-violet-300">New: AI-Powered Insights</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
                CAPTURE.
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  CONNECT.
                </span>
                <br />
                CREATE.
              </h1>

              <p className="text-xl text-zinc-400 mb-8 max-w-lg leading-relaxed">
                The most powerful note-taking experience ever built. 
                Transform scattered thoughts into organized brilliance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="#"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-violet-500/25 transition-all"
                >
                  Start Building Free
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-zinc-700 text-zinc-300 font-bold rounded-xl hover:border-violet-500 hover:text-white transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Video
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 border-2 border-zinc-950 flex items-center justify-center text-white text-sm font-bold">A</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 border-2 border-zinc-950 flex items-center justify-center text-white text-sm font-bold">M</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 border-2 border-zinc-950 flex items-center justify-center text-white text-sm font-bold">J</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 border-2 border-zinc-950 flex items-center justify-center text-white text-sm font-bold">+</div>
                </div>
                <div>
                  <div className="text-white font-bold">10,000+ creators</div>
                  <div className="text-sm text-zinc-500">joined this month</div>
                </div>
              </div>
            </div>

            {/* Interactive Preview */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 rounded-3xl blur-2xl"></div>
              <div className="relative bg-zinc-900 rounded-3xl border border-zinc-800 p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-violet-500"></div>
                    <div className="w-3 h-3 rounded-full bg-fuchsia-500"></div>
                    <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-500 font-mono">brainwave.md</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500/20 to-violet-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-violet-400 font-bold text-sm">#</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Project Ideas</h3>
                      <p className="text-sm text-zinc-500">AI-powered note organization</p>
                    </div>
                  </div>

                  <div className="ml-12 space-y-3">
                    <div className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:border-violet-500/50 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-fuchsia-500"></div>
                        <span className="text-zinc-300 font-medium group-hover:text-white transition-colors">Marketing Campaign Q2</span>
                      </div>
                      <p className="text-xs text-zinc-500 mt-2 ml-5">Linked to 12 related notes</p>
                    </div>

                    <div className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:border-cyan-500/50 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                        <span className="text-zinc-300 font-medium group-hover:text-white transition-colors">Product Roadmap</span>
                      </div>
                      <p className="text-xs text-zinc-500 mt-2 ml-5">3 sub-notes, 8 tasks</p>
                    </div>

                    <div className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:border-amber-500/50 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                        <span className="text-zinc-300 font-medium group-hover:text-white transition-colors">Meeting Notes</span>
                      </div>
                      <p className="text-xs text-zinc-500 mt-2 ml-5">Auto-transcribed 2 hours ago</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span>Search your brain...</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <kbd className="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">⌘</kbd>
                    <kbd className="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">K</kbd>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Grid */}
      <section className="relative z-10 py-20 px-6 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-violet-500/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
              <p className="text-zinc-400">Capture ideas instantly with zero friction. Your thoughts flow as fast as you think.</p>
            </div>

            <div className="group p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-fuchsia-500/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Bank-Grade Secure</h3>
              <p className="text-zinc-400">Your thoughts are encrypted end-to-end. Only you can access your second brain.</p>
            </div>

            <div className="group p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-cyan-500/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Infinite Connections</h3>
              <p className="text-zinc-400">Link notes, build knowledge graphs, discover insights you never knew you had.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
