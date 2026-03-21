import Link from "next/link";

export default function Iteration4() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#212529] font-sans selection:bg-[#0D6EFD] selection:text-white flex flex-col">
      <header className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight text-[#0D6EFD] flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            CognitiveSuite
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <Link href="#" className="hover:text-[#0D6EFD] transition-colors">Solutions</Link>
            <Link href="#" className="hover:text-[#0D6EFD] transition-colors">Enterprise</Link>
            <Link href="#" className="hover:text-[#0D6EFD] transition-colors">Resources</Link>
            <Link href="#" className="hover:text-[#0D6EFD] transition-colors">Pricing</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium text-gray-600 hover:text-[#0D6EFD] transition-colors hidden sm:block">Log in</Link>
            <button className="text-sm font-semibold bg-[#0D6EFD] text-white px-5 py-2.5 rounded-md hover:bg-[#0B5ED7] transition-colors shadow-sm">
              Request Demo
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-24 max-w-7xl mx-auto w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0D6EFD] text-xs font-semibold mb-8 uppercase tracking-wide">
          New: AI-Powered Knowledge Graphs
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-gray-900">
          Enterprise Knowledge <br className="hidden sm:block" />
          <span className="text-[#0D6EFD]">Centralized & Secured.</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl leading-relaxed mx-auto">
          Empower your organization with a secure, scalable second brain. Connect silos, accelerate onboarding, and drive innovation with CognitiveSuite.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mb-16">
          <button className="bg-[#0D6EFD] text-white px-8 py-3.5 rounded-md font-semibold text-lg hover:bg-[#0B5ED7] transition-colors shadow-md flex items-center justify-center gap-2">
            Start Free Trial
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
          <button className="bg-white text-gray-700 border border-gray-300 px-8 py-3.5 rounded-md font-semibold text-lg hover:bg-gray-50 transition-colors shadow-sm">
            Contact Sales
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl mx-auto mb-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center justify-center h-12 text-xl font-bold text-gray-400">ACME Corp</div>
          <div className="flex items-center justify-center h-12 text-xl font-bold text-gray-400">Globex</div>
          <div className="flex items-center justify-center h-12 text-xl font-bold text-gray-400">Soylent</div>
          <div className="flex items-center justify-center h-12 text-xl font-bold text-gray-400">Initech</div>
        </div>

        <div className="w-full aspect-[16/9] bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden flex items-center justify-center relative">
          <div className="absolute top-0 w-full h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4">
            <div className="w-full max-w-md bg-white border border-gray-200 rounded text-xs text-gray-400 px-3 py-1.5 flex items-center gap-2 mx-auto">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              Search knowledge base...
            </div>
          </div>
          <div className="text-gray-400 font-medium text-lg">Dashboard Interface Preview</div>
        </div>
      </main>
    </div>
  );
}
