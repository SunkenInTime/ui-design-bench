import Link from "next/link";

export default function EditorialPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F6] text-[#22201E] antialiased selection:bg-[#EAE2D5] selection:text-[#3E2F20] flex flex-col justify-between font-serif relative">
      {/* Grid Pattern overlay for a paper-like feel */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6BEB5_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-12 flex-1 flex flex-col justify-between w-full">
        {/* Editorial Header */}
        <header className="border-b border-[#D8D2C4] pb-8 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-4">
            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#8C7A6B] block mb-2 font-semibold">
                EDITION NO. I — THE ARCHIVIST
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A1816]">
                ARCHIVE
              </h1>
            </div>
            <div className="text-left md:text-right font-sans text-xs text-[#8C7A6B] max-w-[280px]">
              <p className="leading-relaxed">
                A cognitive extension designed for literature, logic, and the quiet pursuit of structured knowledge.
              </p>
            </div>
          </div>
          {/* Subtle line decoration */}
          <div className="h-[2px] bg-[#22201E] mt-6 w-16" />
        </header>

        {/* Hero Section */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Hero Left: Headlines & Core Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="font-sans text-xs tracking-widest uppercase text-[#A08E7E] font-bold mb-4 block">
              COGNITIVE RECONSTRUCTION
            </span>
            <h2 className="text-5xl md:text-7xl font-normal leading-[1.05] tracking-tight text-[#1E1C1A] mb-8">
              Where fleeting <br className="hidden md:inline" />
              thoughts become <br className="hidden md:inline" />
              <span className="italic font-light text-[#8C5E43] font-serif">structured wisdom</span>.
            </h2>
            
            <p className="font-serif text-lg md:text-xl text-[#5C554E] leading-relaxed max-w-2xl mb-10 font-normal">
              Most note-taking tools are digital landfills. ARCHIVE is an intellectual sanctuary. We treat your ideas not as flat text files, but as a living, breathing lattice of interconnected concepts.
            </p>

            <div className="flex flex-wrap gap-4 font-sans mb-12">
              <Link 
                href="#manifesto" 
                className="group relative px-6 py-3.5 bg-[#22201E] text-[#FBF9F6] text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#8C5E43] flex items-center gap-2"
              >
                <span>Initiate the Lattice</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link 
                href="#features" 
                className="px-6 py-3.5 border border-[#C6BEB5] text-[#22201E] text-sm font-medium tracking-wide transition-all duration-300 hover:border-[#22201E] hover:bg-[#F5F2EC]"
              >
                Read the Methodology
              </Link>
            </div>

            {/* Quick Metrics / Philosophy Column */}
            <div className="grid grid-cols-3 gap-8 border-t border-[#D8D2C4] pt-8 font-sans">
              <div>
                <span className="block text-2xl font-serif font-light text-[#22201E]">01/</span>
                <span className="block text-[10px] tracking-wider uppercase text-[#8C7A6B] mt-1 font-bold">
                  Asymmetric Order
                </span>
              </div>
              <div>
                <span className="block text-2xl font-serif font-light text-[#22201E]">02/</span>
                <span className="block text-[10px] tracking-wider uppercase text-[#8C7A6B] mt-1 font-bold">
                  Bilateral Web
                </span>
              </div>
              <div>
                <span className="block text-2xl font-serif font-light text-[#22201E]">03/</span>
                <span className="block text-[10px] tracking-wider uppercase text-[#8C7A6B] mt-1 font-bold">
                  Tactile Focus
                </span>
              </div>
            </div>
          </div>

          {/* Hero Right: Highly Polished Asymmetric Editorial Mockup */}
          <div className="lg:col-span-5 relative w-full">
            <div className="border border-[#D8D2C4] bg-[#FCFAF7] p-6 md:p-8 shadow-[0_20px_50px_rgba(140,122,107,0.12)] relative">
              {/* Corner decorative marks */}
              <div className="absolute top-2 left-2 text-[#C6BEB5] font-mono text-[8px] select-none">MEMENTO // v1.42</div>
              <div className="absolute bottom-2 right-2 text-[#C6BEB5] font-mono text-[8px] select-none">SECURE ARCHIVE</div>
              
              {/* Document Header */}
              <div className="border-b border-[#EAE2D5] pb-4 mb-6 mt-2">
                <span className="font-mono text-[9px] text-[#A08E7E] block uppercase tracking-wider mb-1">Entry #0429</span>
                <h3 className="text-2xl font-normal text-[#1A1816] tracking-tight">On the Epistemology of Thought Networks</h3>
                <span className="font-sans text-[10px] text-[#8C7A6B] block mt-1">Written May 26, 2026</span>
              </div>

              {/* Document Body */}
              <div className="space-y-4 text-sm leading-relaxed text-[#4A443E]">
                <p>
                  To organize thoughts alphabetically is to force linear cages upon dimensional constructs. The human brain operates in <span className="bg-[#EFEAE1] px-1 rounded italic text-[#8C5E43]">rhizomes</span>—not hierarchy.
                </p>
                
                {/* Visual Interconnected Concept Graph Mock */}
                <div className="my-6 border border-[#EAE2D5] bg-[#FAF8F5] p-4 rounded relative overflow-hidden h-40 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(#E8E2D7_1px,transparent_1px)] [background-size:12px_12px] opacity-60" />
                  
                  {/* Connecting lines */}
                  <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <line x1="30%" y1="50%" x2="50%" y2="30%" stroke="#C6BEB5" strokeWidth="1" strokeDasharray="3,3" />
                    <line x1="50%" y1="30%" x2="70%" y2="55%" stroke="#C6BEB5" strokeWidth="1" strokeDasharray="3,3" />
                    <line x1="30%" y1="50%" x2="70%" y2="55%" stroke="#8C5E43" strokeWidth="1.5" />
                    <line x1="50%" y1="30%" x2="50%" y2="75%" stroke="#C6BEB5" strokeWidth="1" />
                  </svg>

                  {/* Nodes */}
                  <div className="absolute top-[20%] left-[45%] bg-[#F3ECE0] border border-[#8C7A6B] rounded px-2 py-0.5 text-[9px] font-sans font-bold shadow-sm">
                    Epistemic Rhizomes
                  </div>
                  <div className="absolute top-[45%] left-[15%] bg-[#FAF8F5] border border-[#C6BEB5] rounded px-2 py-0.5 text-[9px] font-sans shadow-sm">
                    Linear Cages
                  </div>
                  <div className="absolute top-[50%] left-[62%] bg-[#FAF8F5] border border-[#8C5E43] rounded px-2 py-0.5 text-[9px] font-sans font-semibold text-[#8C5E43] shadow-sm">
                    Active Synthesis
                  </div>
                  <div className="absolute top-[70%] left-[40%] bg-[#FAF8F5] border border-[#C6BEB5] rounded px-2 py-0.5 text-[9px] font-sans shadow-sm">
                    Long-term Retain
                  </div>
                </div>

                <p className="italic text-xs border-l-2 border-[#8C7A6B] pl-3 text-[#70685F]">
                  "When we connect ideas, we do not merely pile information. We generate sparks of original thinking."
                </p>
              </div>

              {/* Link references at the bottom of the mock */}
              <div className="mt-6 pt-4 border-t border-[#EAE2D5] flex gap-3 text-[9px] font-mono text-[#8C7A6B]">
                <span>REFS:</span>
                <span className="underline cursor-pointer hover:text-[#1A1816]">#epistemology</span>
                <span className="underline cursor-pointer hover:text-[#1A1816]">#cognition</span>
                <span className="underline cursor-pointer hover:text-[#1A1816]">#rhizome-concept</span>
              </div>
            </div>

            {/* Behind layout decoration: Large, ghosted letter-press character */}
            <div className="absolute -top-12 -right-8 text-[12rem] font-serif font-extralight text-[#EAE2D5] opacity-30 select-none pointer-events-none z-[-1]">
              ℵ
            </div>
          </div>
        </main>

        {/* Section divider line */}
        <hr className="my-20 border-[#D8D2C4] w-full" />

        {/* Methodology / Features Grid (Asymmetric layout) */}
        <section id="features" className="space-y-12">
          <div className="max-w-2xl">
            <span className="font-sans text-xs tracking-widest uppercase text-[#8C7A6B] font-bold block mb-2">THE THREE COGNITIVE PILLARS</span>
            <h3 className="text-3xl md:text-4xl font-normal text-[#1A1816] tracking-tight">How ARCHIVE restructures your mental landscape.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="border border-[#D8D2C4] p-8 bg-[#FCFAF7] transition-all hover:bg-white duration-300">
              <div className="font-serif text-3xl font-light text-[#8C5E43] mb-6">I.</div>
              <h4 className="text-xl font-bold mb-3 tracking-tight">The Chrono-Ledger</h4>
              <p className="font-serif text-sm text-[#5C554E] leading-relaxed">
                Capture thoughts in an uninterrupted stream. No folders, no tags required. Let your stream of consciousness settle chronologically first, exactly like human memory captures moments.
              </p>
            </div>

            <div className="border border-[#D8D2C4] p-8 bg-[#FCFAF7] transition-all hover:bg-white duration-300">
              <div className="font-serif text-3xl font-light text-[#8C5E43] mb-6">II.</div>
              <h4 className="text-xl font-bold mb-3 tracking-tight">Bilateral Weaving</h4>
              <p className="font-serif text-sm text-[#5C554E] leading-relaxed">
                Connect notes by typing <code className="bg-[#EFEAE1] px-1 rounded py-0.5 font-mono text-xs text-[#8C5E43]">[[double brackets]]</code>. ARCHIVE automatically weaves an interactive multi-dimensional map of your cognitive nodes, highlighting unexpected correlations.
              </p>
            </div>

            <div className="border border-[#D8D2C4] p-8 bg-[#FCFAF7] transition-all hover:bg-white duration-300">
              <div className="font-serif text-3xl font-light text-[#8C5E43] mb-6">III.</div>
              <h4 className="text-xl font-bold mb-3 tracking-tight">The Synthesizer</h4>
              <p className="font-serif text-sm text-[#5C554E] leading-relaxed">
                Our lightweight semantic AI runs locally. It acts as a conversation partner with your historical writings, drafting syntheses and drawing lines between concepts written years apart.
              </p>
            </div>
          </div>
        </section>

        {/* Deep Philosophical Manifesto Section */}
        <section id="manifesto" className="my-24 bg-[#1E1C1A] text-[#FAF8F5] p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-48 w-48 bg-[radial-gradient(#8C5E43_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
          
          <div className="max-w-3xl relative z-10">
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#A08E7E] font-bold block mb-4">THE MANIFESTO</span>
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed italic mb-8 font-serif text-[#ECE5D9]">
              "We are overwhelmed by information, yet starved for wisdom. The solution is not more note storage, but a better container for the architecture of human contemplation."
            </blockquote>
            <p className="font-sans text-xs tracking-wider text-[#A08E7E] uppercase font-semibold">
              — ARCHIVE DESIGN COOPERATIVE
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#D8D2C4] pt-8 mt-16 text-center font-sans text-xs text-[#8C7A6B] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 ARCHIVE. Dedicated to long-form contemplation.</p>
          <div className="flex gap-6">
            <Link href="#manifesto" className="hover:text-[#22201E] transition-colors">Manifesto</Link>
            <Link href="#features" className="hover:text-[#22201E] transition-colors">Methodology</Link>
            <span className="text-[#D8D2C4]">|</span>
            <span className="text-[#8C5E43] font-semibold">Cerebral Space #01</span>
          </div>
        </footer>
      </div>

      {/* Embedded Switcher HUD */}
    </div>
  );
}
