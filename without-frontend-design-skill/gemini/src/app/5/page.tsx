import Link from "next/link";

export default function Iteration5() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#F5F5F7] font-sans selection:bg-[#0071E3] selection:text-white flex flex-col relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#2A2A2A,transparent_50%)]"></div>

      <header className="fixed top-0 w-full bg-[#1D1D1F]/80 backdrop-blur-md border-b border-[#333336] z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex justify-between items-center text-xs font-medium tracking-wide text-[#E8E8ED]">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            <span className="font-semibold">Aura</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Overview</Link>
            <Link href="#" className="hover:text-white transition-colors">Features</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
          </nav>
          <button className="bg-[#F5F5F7] text-[#1D1D1F] px-3 py-1 rounded-full hover:bg-white transition-colors">
            Buy
          </button>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-32 max-w-5xl mx-auto w-full relative z-10">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tight leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
          Profoundly simple.<br />
          Incredibly powerful.
        </h1>
        
        <p className="text-xl sm:text-2xl text-[#86868B] mb-12 max-w-2xl leading-relaxed mx-auto font-medium">
          Aura is the ultimate second brain. It captures your thoughts with zero friction and organizes them with magical precision.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center mb-24">
          <button className="text-[#2997FF] font-medium text-xl hover:underline flex items-center justify-center gap-1 group">
            Learn more
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
          <button className="text-[#2997FF] font-medium text-xl hover:underline flex items-center justify-center gap-1 group">
            Watch the film
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </button>
        </div>

        <div className="w-full max-w-4xl aspect-[16/10] bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center relative border border-[#333336] p-2">
          <div className="w-full h-full bg-[#000000] rounded-2xl overflow-hidden relative border border-[#222]">
            <div className="absolute top-0 w-full h-12 bg-[#1A1A1A]/80 backdrop-blur-md border-b border-[#333] flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
            </div>
            <div className="flex items-center justify-center h-full text-[#86868B] font-medium text-lg">
              Beautifully crafted workspace
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
