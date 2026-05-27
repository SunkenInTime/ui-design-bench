import Link from "next/link";

export default function LuxuryPage() {
  return (
    <div className="min-h-screen bg-[#070514] text-white selection:bg-purple-900 selection:text-white antialiased flex flex-col justify-between font-sans relative overflow-hidden">
      
      {/* Spectacular Glowing Mesh Gradients in the background */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-900/30 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[500px] h-[500px] rounded-full bg-purple-900/25 blur-[130px] pointer-events-none" />
      <div className="absolute top-[40%] left-[30%] w-[450px] h-[450px] rounded-full bg-violet-800/15 blur-[120px] pointer-events-none" />

      {/* Subtle Luxury Stars / Cosmic Dust background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none z-0" />

      {/* Fine-line geometric border decoration */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 flex-1 flex flex-col justify-between w-full">
        
        {/* Luxury Header */}
        <header className="flex justify-between items-center border-b border-white/5 pb-8 mb-16 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            {/* Elegant luxury vector icon */}
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-20" />
              <svg className="h-5 w-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c-.105-.347-.418-.599-.779-.599s-.674.252-.779.599l-1.12 3.695a.75.75 0 01-.469.47L4.648 8.683c-.346.105-.599.418-.599.779s.252.674.599.779l3.695 1.12a.75.75 0 01.47.469l1.12 3.695c.105.346.418.599.779.599s.674-.252.779-.599l1.12-3.695a.75.75 0 01.469-.47l3.695-1.12c.346-.105.599-.418.599-.779s-.252-.674-.599-.779l-3.695-1.12a.75.75 0 01-.47-.469l-1.12-3.695z" />
              </svg>
            </div>
            <span className="font-extralight text-xl tracking-[0.25em] uppercase text-white/95">
              AETHER
            </span>
          </div>

          <div className="flex items-center gap-4 text-[10px] tracking-[0.2em] text-white/60 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse" />
              CELESTIAL LINK ONLINE
            </span>
            <span className="text-white/20">|</span>
            <span>SECURE SYSTEM #05</span>
          </div>
        </header>

        {/* Hero Area */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <span className="inline-block text-[10px] font-semibold tracking-[0.3em] text-indigo-300 uppercase bg-indigo-500/10 border border-indigo-400/20 px-3 py-1 rounded-full">
              THE CELESTIAL INTELLECTUAL SANCTUARY
            </span>
            
            <h1 className="text-5xl md:text-7xl font-extralight tracking-tight leading-[1.05] text-white">
              A silent space for <span className="font-serif italic bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-purple-300 to-amber-200">infinite thought</span>.
            </h1>
            
            <p className="text-sm md:text-base text-white/70 leading-relaxed font-light">
              Most note tools pile your wisdom in static, dusty drawers. AETHER treats your knowledge as a galaxy. Your notes are bright stars, suspended in a silent velvet void, connected by gravitational links that weave an unshakeable neural network of original insight.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="#glass-mockup"
                className="group relative px-8 py-4 rounded-xl font-medium text-xs tracking-[0.15em] uppercase text-center overflow-hidden transition-all duration-300 shadow-[0_8px_32px_rgba(124,58,237,0.15)] hover:shadow-[0_8px_40px_rgba(124,58,237,0.3)] bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500"
              >
                <span>Initiate Consciousness</span>
              </Link>
              
              <Link
                href="#celestial-core"
                className="px-8 py-4 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 rounded-xl font-medium text-xs tracking-[0.15em] uppercase text-center transition-all duration-300 backdrop-blur-md"
              >
                Study the Cosmos
              </Link>
            </div>

            {/* Glowing stats strip */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5 font-mono text-[10px] text-white/50">
              <div className="space-y-1">
                <span className="block text-white font-light text-base">0.02ms</span>
                <span className="uppercase tracking-widest">SYNAPSE TIME</span>
              </div>
              <div className="space-y-1">
                <span className="block text-white font-light text-base">MIL-SPEC</span>
                <span className="uppercase tracking-widest">OFFGRID CRYPTO</span>
              </div>
              <div className="space-y-1">
                <span className="block text-white font-light text-base">INFINITE</span>
                <span className="uppercase tracking-widest">LATTICE DEPTH</span>
              </div>
            </div>
          </div>

          {/* Luxury Glassmorphic Interactive Mockup */}
          <div id="glass-mockup" className="lg:col-span-6 relative w-full">
            {/* Soft decorative ambient glow behind card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-indigo-500/20 blur-[80px] pointer-events-none" />

            {/* Elegant glassmorphic outer shell */}
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 opacity-40 pointer-events-none" />

              {/* Glowing decorative gradient corner lines */}
              <div className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-indigo-500 to-transparent" />
              <div className="absolute top-0 left-0 w-px h-8 bg-gradient-to-b from-indigo-500 to-transparent" />
              <div className="absolute bottom-0 right-0 w-8 h-px bg-gradient-to-l from-purple-500 to-transparent" />
              <div className="absolute bottom-0 right-0 w-px h-8 bg-gradient-to-t from-purple-500 to-transparent" />

              {/* Document Header */}
              <div className="flex justify-between items-start border-b border-white/5 pb-4 mb-6">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-indigo-300 block mb-1">COSMOS ARCHIVE #104</span>
                  <h3 className="text-xl font-light tracking-wide text-white">Quantum Epistemology & Notes</h3>
                </div>
                <span className="h-6 px-2.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono tracking-widest flex items-center justify-center text-indigo-200">
                  SECURE
                </span>
              </div>

              {/* Note Content */}
              <div className="space-y-4 text-xs md:text-sm font-light text-white/80 leading-relaxed">
                <p>
                  We are not creating static folders of ideas. We are creating <span className="text-indigo-200 font-semibold bg-indigo-500/10 px-2 py-0.5 rounded-md border border-indigo-500/20">gravitational nodes</span>.
                </p>
                <p>
                  When notes are pulled close by similarity vectors, they merge into a dense cluster. It behaves exactly like stellar nurseries collapsing under gravity to form young hot stars.
                </p>

                {/* Highly Polished Orbital Mind Mapping Diagram */}
                <div className="my-6 border border-white/5 bg-[#0a071d]/60 rounded-2xl p-4 h-44 relative overflow-hidden flex items-center justify-center">
                  {/* Subtle orbits lines in SVG */}
                  <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50%" cy="50%" r="35" stroke="rgba(99,102,241,0.15)" strokeWidth="1" fill="none" />
                    <circle cx="50%" cy="50%" r="65" stroke="rgba(139,92,246,0.1)" strokeWidth="1" fill="none" />
                    <line x1="50%" y1="50%" x2="25%" y2="35%" stroke="rgba(129,140,248,0.3)" strokeWidth="1" />
                    <line x1="50%" y1="50%" x2="72%" y2="70%" stroke="rgba(129,140,248,0.3)" strokeWidth="1" />
                    <line x1="50%" y1="50%" x2="55%" y2="18%" stroke="rgba(139,92,246,0.2)" strokeWidth="1" />
                  </svg>

                  {/* Nodes with glowing rings */}
                  {/* Center Node */}
                  <div className="absolute h-4 w-4 rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.8)] z-10 flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>

                  {/* Satellite Node 1 */}
                  <div className="absolute top-[28%] left-[20%] group cursor-pointer">
                    <div className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                    <span className="absolute left-3 -top-1 font-mono text-[8px] tracking-widest text-white/60 group-hover:text-white transition-colors uppercase">
                      GRAVITY_VEC
                    </span>
                  </div>

                  {/* Satellite Node 2 */}
                  <div className="absolute bottom-[24%] left-[68%] group cursor-pointer">
                    <div className="h-2 w-2 rounded-full bg-indigo-300 shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
                    <span className="absolute left-3 -top-1 font-mono text-[8px] tracking-widest text-indigo-200 group-hover:text-white transition-colors uppercase">
                      SYNAPSE_CORE
                    </span>
                  </div>

                  {/* Satellite Node 3 */}
                  <div className="absolute top-[12%] left-[52%] group cursor-pointer">
                    <div className="h-2 w-2 rounded-full bg-purple-500/50 border border-purple-300" />
                    <span className="absolute left-3 -top-1 font-mono text-[8px] tracking-widest text-white/30 uppercase">
                      DORMANT
                    </span>
                  </div>
                </div>
              </div>

              {/* Status footer inside card */}
              <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-white/40">
                <span className="flex items-center gap-1">NEURAL BALANCE: 99.8%</span>
                <span>SYSTEM: COMPILING BRIEF...</span>
              </div>
            </div>
          </div>
        </main>

        {/* Subtle section transition lines */}
        <div className="my-20 flex justify-between items-center opacity-30">
          <div className="h-px bg-gradient-to-r from-transparent to-white/20 flex-1" />
          <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/50 px-6">
            THE TRI-PILLARS OF KNOWLEDGE LUXURY
          </span>
          <div className="h-px bg-gradient-to-l from-transparent to-white/20 flex-1" />
        </div>

        {/* Premium features layout */}
        <section id="celestial-core" className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 space-y-4 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
            <div className="h-9 w-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-300">
              ✦
            </div>
            <h3 className="text-base tracking-wider font-light uppercase">The Nebula Input</h3>
            <p className="text-xs leading-relaxed text-white/60 font-light">
              Frictionless thought capture. Feed AETHER voice clips, screenshots, text dumps, or web pages. Our celestial model reads, processes, and stores them in zero-weight vaults.
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 space-y-4 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
            <div className="h-9 w-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300">
              ✦
            </div>
            <h3 className="text-base tracking-wider font-light uppercase">Gravitational Weaving</h3>
            <p className="text-xs leading-relaxed text-white/60 font-light">
              We eliminate folders entirely. Notes fall into high-density orbits naturally based on their semantic meaning. Discover hidden bridges between entries written years apart automatically.
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 space-y-4 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
            <div className="h-9 w-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-300">
              ✦
            </div>
            <h3 className="text-base tracking-wider font-light uppercase">Celestial Synthesis</h3>
            <p className="text-xs leading-relaxed text-white/60 font-light">
              An elegant local intelligence model acts as your private intellectual editor, synthesizing overlapping themes and outputting beautifully written intelligence briefs.
            </p>
          </div>
        </section>

        {/* Premium luxury bottom banner */}
        <section className="my-20 rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12 relative overflow-hidden backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-purple-500/10 opacity-50" />
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-indigo-300 block">
              COSMIC PERSPECTIVE
            </span>
            <h3 className="text-2xl md:text-3xl font-light tracking-wide text-white leading-relaxed">
              "We are stardust that has begun to think. To capture that thought is the highest luxury of consciousness."
            </h3>
            <span className="font-mono text-[10px] text-white/40 block">
              — THE ARCHITECTS OF AETHER
            </span>
          </div>
        </section>

        {/* Premium Elegant Footer */}
        <footer className="border-t border-white/5 pt-8 mt-12 text-center text-[10px] tracking-[0.15em] text-white/40 flex flex-col sm:flex-row justify-between items-center gap-4 uppercase">
          <p>© 2026 AETHER. THE PRESTIGIOUS MIND-DOCK. ALL PRIVILEGES INTACT.</p>
          <div className="flex gap-4">
            <Link href="#glass-mockup" className="hover:text-white transition-colors">CONSCIOUSNESS</Link>
            <Link href="#celestial-core" className="hover:text-white transition-colors">THE COSMOS</Link>
            <span className="text-white/10">|</span>
            <span className="text-indigo-400 font-semibold">COSMOS GRID #05</span>
          </div>
        </footer>
      </div>

      {/* Embedded HUD */}
    </div>
  );
}
