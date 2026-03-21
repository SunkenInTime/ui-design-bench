// Design Two: Dark Professional - Sleek, sophisticated, business-focused
import Link from "next/link";

export default function DesignTwo() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <span className="text-lg font-semibold text-white">MindVault</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
            Product
          </Link>
          <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
            Solutions
          </Link>
          <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
            Resources
          </Link>
          <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
            Enterprise
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href="#" className="text-sm text-slate-300 hover:text-white transition-colors px-4 py-2">
            Log in
          </Link>
          <Link
            href="#"
            className="text-sm bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                <span className="text-xs font-medium text-indigo-400">Now with AI-powered insights</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Your knowledge,
                <span className="text-indigo-400"> supercharged</span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
                MindVault transforms how teams capture, organize, and leverage institutional knowledge. 
                Build a living second brain for your entire organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg font-medium transition-colors"
                >
                  Start Free Trial
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white rounded-lg font-medium transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-950 flex items-center justify-center text-xs text-white">JD</div>
                  <div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-slate-950 flex items-center justify-center text-xs text-white">MK</div>
                  <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-slate-950 flex items-center justify-center text-xs text-white">+2k</div>
                </div>
                <span>Trusted by 2,000+ teams</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-indigo-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-800">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <span className="text-white font-medium">Q4 Strategy Notes</span>
                    </div>
                    <p className="text-sm text-slate-400 pl-11">Key insights from stakeholder meeting...</p>
                  </div>
                  <div className="flex items-center gap-2 pl-4">
                    <div className="w-px h-8 bg-slate-700"></div>
                    <span className="text-xs text-indigo-400">Linked to 4 other notes</span>
                  </div>
                  <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 ml-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                        </svg>
                      </div>
                      <span className="text-white font-medium">Market Analysis</span>
                    </div>
                    <p className="text-sm text-slate-400 pl-11">Competitor landscape review...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="border-t border-slate-800 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10M+</div>
              <div className="text-sm text-slate-500">Notes created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500K</div>
              <div className="text-sm text-slate-500">Knowledge graphs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-sm text-slate-500">Uptime guaranteed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">SOC 2</div>
              <div className="text-sm text-slate-500">Enterprise security</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

