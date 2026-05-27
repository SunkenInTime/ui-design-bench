import Link from "next/link";

export default function OrganicPage() {
  return (
    <div className="min-h-screen bg-[#F6F4ED] text-[#2F3E34] antialiased selection:bg-[#E2DDD3] selection:text-[#1E2E23] flex flex-col justify-between font-sans relative">
      
      {/* Background soft gradients simulating dappled forest sunlight */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#E5ECE3] blur-[140px] opacity-70 pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full bg-[#ECE5DA] blur-[120px] opacity-65 pointer-events-none" />

      {/* Decorative botanical subtle SVG lines in the background */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none overflow-hidden z-0">
        <svg className="absolute -right-20 top-20 w-96 h-96" viewBox="0 0 100 100" fill="none">
          <path d="M10 90 Q 40 40, 90 10 M10 90 Q 60 70, 90 10 M10 90 Q 30 20, 90 10" stroke="#2F3E34" strokeWidth="0.5" />
          <path d="M30 65 Q 40 50, 45 40" stroke="#2F3E34" strokeWidth="0.5" />
          <path d="M50 48 Q 65 35, 75 30" stroke="#2F3E34" strokeWidth="0.5" />
        </svg>
        <svg className="absolute -left-10 bottom-20 w-96 h-96" viewBox="0 0 100 100" fill="none">
          <path d="M90 90 Q 60 50, 10 10 M90 90 Q 40 70, 10 10 M90 90 Q 70 30, 10 10" stroke="#2F3E34" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 flex-1 flex flex-col justify-between w-full">
        
        {/* Soft, Breathable Header */}
        <header className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-[#E3DFC2]/40 pb-6 mb-16">
          <div className="flex items-center gap-3">
            {/* Seed logo mark */}
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DFE6DE] text-[#2F3E34] shadow-sm">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm1.39-4.88c-.28.36-.61.64-.99.85-.38.21-.56.55-.56.99v.5h-1.68v-.62c0-.79.35-1.42 1.05-1.89.51-.34.82-.7.93-1.07.11-.37.05-.76-.18-1.17-.3-.54-.86-.81-1.68-.81-.62 0-1.12.18-1.5.54-.38.36-.59.91-.63 1.65h-1.68c.05-1.2.47-2.12 1.25-2.76C10.15 7.64 11.23 7.3 12.5 7.3c1.23 0 2.21.31 2.94.94.73.63 1.1 1.45 1.1 2.46 0 .73-.23 1.37-.69 1.92z"/>
              </svg>
            </span>
            <span className="font-semibold text-lg tracking-tight">Mycelium</span>
          </div>
          
          <div className="flex gap-6 items-center text-xs tracking-wider text-[#6A786E]">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-600/60 animate-pulse" />
              Mindful State: Calibrated
            </span>
            <span>Est. 2026</span>
          </div>
        </header>

        {/* Hero Section */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-6 space-y-8">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-teal-700 uppercase">
              GROWING IDEAS NATURALLY
            </span>
            
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-[#1E2E23] leading-[1.1]">
              Nurture your mind from seed to <span className="font-serif italic text-teal-800">sanctuary</span>.
            </h1>
            
            <p className="text-base md:text-lg text-[#55635B] leading-relaxed">
              In nature, nutrients flow where they are needed, connected by underground mycelial root networks. Your second brain shouldn't be a cold rigid folder; it should be a fertile, living ecosystem. Breathe in, type freely, and watch your thoughts interlock.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="#garden-mock"
                className="px-8 py-4 bg-[#2F3E34] text-[#F6F4ED] hover:bg-teal-800 rounded-full transition-all duration-300 font-semibold text-sm tracking-wide text-center shadow-lg shadow-[#2f3e34]/10"
              >
                Sow Your First Thought
              </Link>
              <Link
                href="#ecosystem"
                className="px-8 py-4 border border-[#B8C2B7] text-[#2F3E34] hover:bg-[#EBECE4] rounded-full transition-all duration-300 font-semibold text-sm tracking-wide text-center"
              >
                Explore the Ecosystem
              </Link>
            </div>

            {/* Micro-Philosophy list */}
            <div className="space-y-3 pt-6 border-t border-[#E3DFC2]/40 text-sm text-[#55635B]">
              <div className="flex items-start gap-3">
                <span className="text-teal-700 font-bold">✓</span>
                <p><strong>Silent Space</strong> — Zero notification popups. Absolute clarity for focus.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal-700 font-bold">✓</span>
                <p><strong>Natural Branching</strong> — Auto-suggests links based on mental association, not keywords.</p>
              </div>
            </div>
          </div>

          {/* Hero Visual Mockup: A soft, luxurious note garden interface */}
          <div id="garden-mock" className="lg:col-span-6">
            <div className="bg-[#FAF8F3] border border-[#E3DEC2] rounded-3xl p-6 md:p-8 shadow-[0_30px_70px_rgba(47,62,52,0.06)] relative overflow-hidden">
              
              {/* Organic visual glow behind mockup details */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-[#EAF0E6] rounded-full blur-2xl opacity-80 pointer-events-none" />

              {/* Journal Interface Bar */}
              <div className="flex justify-between items-center border-b border-[#EBE8D5] pb-4 mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8C9A8E] font-bold">Current Cultivation</span>
                  <h3 className="text-lg font-serif font-light text-[#2F3E34]">The Quiet Art of Mind Gardening</h3>
                </div>
                <div className="flex gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="h-2 w-2 rounded-full bg-[#DFE6DE]" />
                </div>
              </div>

              {/* The "Note" Body */}
              <div className="space-y-4 text-sm leading-relaxed text-[#4F5D54]">
                <p>
                  To design is to create breathing space. Ideas are not static logs; they are spores. They interact with our previous entries, forming roots.
                </p>
                <p>
                  Yesterday I was writing about <span className="bg-[#E9F0E7] text-teal-800 px-2 py-0.5 rounded-full font-medium text-xs">🌱 natural-fractals</span> and today I see how it bridges beautifully into <span className="bg-[#FAF2E5] text-[#A67C52] px-2 py-0.5 rounded-full font-medium text-xs">🌾 cognitive-flow</span>.
                </p>

                {/* Simulated Mind Map Growth UI */}
                <div className="mt-8 p-4 bg-[#F5F2EA] border border-[#E7E3D3] rounded-2xl space-y-4">
                  <span className="text-[9px] uppercase tracking-widest text-[#8C9A8E] font-bold block">
                    Underground Roots (Mycelial Bridges)
                  </span>

                  {/* Seedling Node list */}
                  <div className="flex flex-col gap-2.5">
                    {/* Active seed node */}
                    <div className="flex items-center gap-3 bg-white p-2.5 rounded-xl border border-emerald-100 shadow-sm">
                      <span className="h-5 w-5 rounded-full bg-[#E5ECE3] flex items-center justify-center text-[10px]">🌱</span>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-[#2F3E34] truncate">Deep Contemplation Session</h4>
                        <span className="text-[9px] text-[#8C9A8E] block">Rooted 2 hours ago</span>
                      </div>
                      <span className="text-[10px] text-teal-700 bg-[#E9F0E7] px-2 py-0.5 rounded-full font-medium">92% Match</span>
                    </div>

                    {/* Secondary branch node */}
                    <div className="flex items-center gap-3 bg-white/60 p-2.5 rounded-xl border border-dashed border-[#E3DEC2]">
                      <span className="h-5 w-5 rounded-full bg-[#FAF2E5] flex items-center justify-center text-[10px]">🍂</span>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs text-[#55635B] truncate">The Concept of Wu-Wei</h4>
                        <span className="text-[9px] text-[#8C9A8E] block">Dormant since April</span>
                      </div>
                      <span className="text-[10px] text-[#A67C52] bg-[#FAF2E5] px-2 py-0.5 rounded-full font-medium">Bridgeable</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Garden Soil stats bar */}
              <div className="mt-6 pt-4 border-t border-[#EBE8D5] flex justify-between items-center text-[10px] text-[#8C9A8E] font-medium">
                <span className="flex items-center gap-1">🌾 Mind Climate: Serene</span>
                <span>Active Nodes: 182</span>
              </div>
            </div>
          </div>
        </main>

        {/* Section break */}
        <div className="my-20 flex justify-center items-center gap-4">
          <div className="h-px bg-[#E3DFC2] w-12" />
          <span className="text-xs text-[#8C9A8E] tracking-widest uppercase">THE ECOSYSTEM</span>
          <div className="h-px bg-[#E3DFC2] w-12" />
        </div>

        {/* Features grid */}
        <section id="ecosystem" className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <div className="space-y-3">
            <div className="h-10 w-10 bg-[#EAECE4] rounded-2xl flex items-center justify-center text-[#2F3E34] text-lg">
              🌱
            </div>
            <h3 className="text-lg font-bold text-[#1E2E23]">Frictionless Sowing</h3>
            <p className="text-sm text-[#55635B] leading-relaxed">
              Start writing on a blank canvas instantly. No setup, no frontmatter, no folder organization. Simply type. Let your raw thoughts establish initial roots.
            </p>
          </div>

          <div className="space-y-3">
            <div className="h-10 w-10 bg-[#FAF1E6] rounded-2xl flex items-center justify-center text-[#A67C52] text-lg">
              🍄
            </div>
            <h3 className="text-lg font-bold text-[#1E2E23]">Mycelial Connectivity</h3>
            <p className="text-sm text-[#55635B] leading-relaxed">
              Our automated linking system scans the semantic meaning of your entries and subtly displays glowing root bridges, helping you discover overlaps you had forgotten.
            </p>
          </div>

          <div className="space-y-3">
            <div className="h-10 w-10 bg-[#E3ECE3] rounded-2xl flex items-center justify-center text-teal-800 text-lg">
              🌿
            </div>
            <h3 className="text-lg font-bold text-[#1E2E23]">Cognitive Canopy</h3>
            <p className="text-sm text-[#55635B] leading-relaxed">
              When your garden grows, Mycelium compiles automated synthesis files, grouping concepts into unified trees of understanding, yielding clear mental outcomes.
            </p>
          </div>
        </section>

        {/* Quiet Zen Banner */}
        <section className="my-20 rounded-3xl bg-[#2F3E34] text-[#F6F4ED] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#495B4F_1px,transparent_1px)] [background-size:20px_24px] opacity-15 pointer-events-none" />
          <div className="max-w-xl space-y-6 relative z-10">
            <span className="text-xs uppercase tracking-[0.2em] text-[#CBE1D8] font-bold block">MEDITATIVE INTENT</span>
            <h3 className="text-2xl md:text-3xl font-serif font-light text-white leading-relaxed">
              "When you clear the noise of modern layouts, your natural cognitive patterns finally find the room to bloom."
            </h3>
            <span className="text-xs tracking-wider text-[#A1B8AD] block">
              — Lao Tzu, on mental cultivation (Adapted)
            </span>
          </div>
        </section>

        {/* Clean Soft Footer */}
        <footer className="border-t border-[#E3DFC2]/40 pt-8 mt-12 text-center text-xs text-[#6A786E] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 Mycelium. Rooted locally, branching boundlessly.</p>
          <div className="flex gap-6">
            <Link href="#ecosystem" className="hover:text-teal-800 transition-colors">Ecosystem</Link>
            <Link href="#garden-mock" className="hover:text-teal-800 transition-colors">The Garden</Link>
            <span>|</span>
            <span className="text-teal-700 font-bold">Cerebral Sanctuary #03</span>
          </div>
        </footer>
      </div>

      {/* Embedded HUD */}
    </div>
  );
}
