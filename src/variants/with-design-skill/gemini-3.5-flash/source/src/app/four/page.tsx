import Link from "next/link";

export default function BrutalistPage() {
  return (
    <div className="min-h-screen bg-[#F0F0F0] text-black antialiased selection:bg-[#FFE500] selection:text-black flex flex-col justify-between font-sans relative p-4 md:p-8">
      
      {/* Heavy stark background grid lines (Brutalist architectural print style) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E0E0E0_1px,transparent_1px),linear-gradient(to_bottom,#E0E0E0_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none z-0" />

      {/* Main Structural Outer Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 md:p-10 lg:p-12">
        
        {/* Stark Brutalist Header */}
        <header className="border-b-4 border-black pb-8 mb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
              NEUGRID<span className="text-[#FF5A09]">.</span>
            </h1>
            <span className="inline-block bg-[#FFE500] text-black text-[10px] font-black tracking-widest uppercase px-2 py-0.5 border-2 border-black">
              VERSION 4.10 // PRODUCTION
            </span>
          </div>

          <div className="text-left md:text-right space-y-1 font-mono text-xs">
            <div className="font-bold">LOC: [SWITZERLAND // ZURICH]</div>
            <div className="text-zinc-500">TYPE: BRUTALIST KNOWLEDGE VAULT</div>
            <div className="text-[#FF5A09] font-black animate-pulse">SYSTEM: SECURE / UNCOMPROMISED</div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Hero Content Left */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-block bg-black text-white text-xs font-black tracking-widest uppercase px-3 py-1.5 shadow-[4px_4px_0px_0px_#FFE500]">
              STARK COGNITIVE SYSTEMS
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-black">
              NO DECORATION.<br />
              <span className="bg-[#FFE500] border-2 border-black px-2 inline-block my-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                ALL STRUCTURE.
              </span>
            </h2>
            
            <p className="text-base md:text-lg font-bold leading-relaxed border-4 border-black p-5 bg-[#F9F9F9] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              Traditional note apps are bloated with rounded glass cards and pastel gradient meshes. NEUGRID has zero decoration. We provide raw, rigid layout blocks for architectural thinking. High contrast, high impact, absolute order.
            </p>

            <div className="flex flex-wrap gap-4 font-black">
              <Link
                href="#structural-mock"
                className="px-6 py-4 bg-black text-white hover:bg-[#FFE500] hover:text-black border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:-translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all uppercase tracking-wider text-sm flex items-center gap-2"
              >
                <span>Initialize Vault</span>
                <span>[→]</span>
              </Link>
              
              <Link
                href="#grid-specs"
                className="px-6 py-4 bg-white text-black hover:bg-[#FF5A09] hover:text-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all uppercase tracking-wider text-sm"
              >
                Methodology Specifications
              </Link>
            </div>

            {/* Stark Tech Specifications Table */}
            <div className="border-4 border-black p-4 bg-black text-white space-y-2 font-mono text-xs">
              <div className="flex justify-between border-b border-zinc-800 pb-1.5">
                <span className="text-zinc-500">ENGINE:</span>
                <span>BRUTAL-CORE v4.0</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-1.5">
                <span className="text-zinc-500">INDEXING SPEED:</span>
                <span>0.004 MICROSECONDS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">DATA PRIVACY:</span>
                <span>100% OFF-GRID LOCALSTORAGE</span>
              </div>
            </div>
          </div>

          {/* Stark Brutalist Interactive Mockup */}
          <div id="structural-mock" className="lg:col-span-5 w-full">
            <div className="border-4 border-black bg-[#FFE500] p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] space-y-6">
              
              <div className="flex justify-between items-center border-b-2 border-black pb-3">
                <span className="font-mono text-xs font-black uppercase tracking-widest text-black">
                  [ACTIVE_WORKSPACE]
                </span>
                <span className="font-mono text-xs font-black">ID: 0429</span>
              </div>

              {/* Note card inside brutalist container */}
              <div className="border-4 border-black bg-white p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-4">
                <div className="border-b-2 border-black pb-2 flex justify-between items-center">
                  <h3 className="text-base font-black uppercase tracking-tight text-black">
                    STRUCTURED THOUGHT ARCHITECTURE
                  </h3>
                  <span className="text-[10px] font-mono bg-black text-white px-1.5 py-0.5 font-bold">STRICT</span>
                </div>

                <div className="text-xs leading-relaxed font-bold space-y-3">
                  <p>
                    WE DO NOT ALLOW NESTED DIRECTORIES. NESTED DIRECTORIES BREED LAZINESS.
                  </p>
                  <p>
                    ALL INFORMATION IS FLATTENED AND REPRESENTED VIA AN EXPLICIT GRAPH INTERFACE. INDEX YOUR BRAIN AS A THREE-DIMENSIONAL ARRAY.
                  </p>
                  
                  {/* Brutalist link mapping mock */}
                  <div className="border-2 border-black bg-[#F0F0F0] p-3 space-y-2 font-mono text-[11px] leading-tight">
                    <div className="font-black text-black">CONNECTED NODES:</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="border-2 border-black bg-[#FF5A09] text-white px-2 py-0.5 font-black uppercase cursor-pointer hover:bg-black transition-colors">
                        #BRUTALISM
                      </span>
                      <span className="border-2 border-black bg-white text-black px-2 py-0.5 font-black uppercase cursor-pointer hover:bg-black hover:text-[#FFE500] transition-colors">
                        #METAPHOR
                      </span>
                      <span className="border-2 border-black bg-black text-[#FFE500] px-2 py-0.5 font-black uppercase cursor-pointer">
                        #NEUGRID
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t-2 border-black flex justify-between items-center font-mono text-[10px] font-black text-black">
                  <span>LAST SAVED: May 26, 2026</span>
                  <span className="text-[#FF5A09]">[AUTOSYNC:OK]</span>
                </div>
              </div>

              {/* Arrow navigation mock */}
              <div className="flex gap-2 font-mono text-xs font-black">
                <button className="flex-1 bg-white hover:bg-black hover:text-white border-2 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-center">
                  PREV NODE
                </button>
                <button className="flex-1 bg-black text-white hover:bg-white hover:text-black border-2 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-center">
                  NEXT NODE
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Section Divider Line */}
        <div className="h-1 bg-black my-16 w-full" />

        {/* Stark Technical specifications grid */}
        <section id="grid-specs" className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="border-4 border-black p-6 space-y-4 hover:bg-[#FFE500] transition-all duration-200 group">
            <span className="text-3xl font-black block group-hover:scale-110 transition-transform">01/</span>
            <h3 className="text-xl font-black uppercase tracking-tight">RAW_DUMP</h3>
            <p className="text-xs leading-relaxed font-bold text-zinc-700">
              Unfiltered, high-octane text dumping. Simply boot the terminal application and start typing. NEUGRID bypasses markdown syntax parsing bottlenecks to ingest ideas at lightning-fast keyboard speeds.
            </p>
          </div>

          <div className="border-4 border-black p-6 space-y-4 hover:bg-[#FF5A09] hover:text-white transition-all duration-200 group">
            <span className="text-3xl font-black block group-hover:scale-110 transition-transform">02/</span>
            <h3 className="text-xl font-black uppercase tracking-tight">BLOCK_LINK</h3>
            <p className="text-xs leading-relaxed font-bold text-zinc-700 group-hover:text-white/90">
              Explicit multi-directional logical bridges. Connect separate blocks of notes using stark block pointers. An active algorithm visualizes the overlap as structural architectural layout paths.
            </p>
          </div>

          <div className="border-4 border-black p-6 space-y-4 hover:bg-black hover:text-white transition-all duration-200 group">
            <span className="text-3xl font-black block group-hover:scale-110 transition-transform text-[#FF5A09]">03/</span>
            <h3 className="text-xl font-black uppercase tracking-tight group-hover:text-[#FFE500]">STRICT_GRID</h3>
            <p className="text-xs leading-relaxed font-bold text-zinc-700 group-hover:text-white/90">
              No endless infinite white canvases. Notes snap tightly into explicit structural columns. A strict visual grid alignment ensures your mind remains organized, ordered, and structured.
            </p>
          </div>
        </section>

        {/* Big Brutalist Banner */}
        <section className="my-16 bg-black text-[#FFE500] border-4 border-black p-8 md:p-12 relative overflow-hidden shadow-[8px_8px_0px_0px_#FF5A09]">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs font-black tracking-widest text-[#FF5A09] uppercase block">
              [THE COGNITIVE CORE RULE]
            </span>
            <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">
              "WE ARCHITECT IDEAS. WE DO NOT DECORATE THEM."
            </h3>
            <span className="font-mono text-xs text-white block">
              — INSTRUCTION MANUAL // SECTION 01
            </span>
          </div>
        </section>

        {/* Brutalist Stark Footer */}
        <footer className="border-t-4 border-black pt-8 mt-12 text-center text-xs font-mono font-black flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>KRAFT/NEUGRID. ESTABLISHED 2026. ALL RIGID STANDARDS ENFORCED.</span>
          <div className="flex gap-4">
            <Link href="#structural-mock" className="hover:underline hover:text-[#FF5A09]">STRUCTURE</Link>
            <Link href="#grid-specs" className="hover:underline hover:text-[#FF5A09]">SPECIFICATION</Link>
            <span>|</span>
            <span className="text-black bg-[#FFE500] px-2 py-0.5 border border-black">GRID MODULE #04</span>
          </div>
        </footer>
      </div>

      {/* Switching Deck HUD */}
    </div>
  );
}
