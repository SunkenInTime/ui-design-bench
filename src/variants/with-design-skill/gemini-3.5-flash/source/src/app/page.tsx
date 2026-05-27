import Link from "next/link";

const DESIGNS = [
  {
    num: "01",
    name: "The Archivist",
    style: "Editorial / Magazine",
    path: "/one",
    desc: "A quiet, literary intellectual sanctuary. Sophisticated serif typography, structured asymmetrical columns, and a tactile, paper-like earth-toned aesthetic. Designed for long-form contemplation and literature.",
    bg: "bg-[#FBF9F6]",
    text: "text-[#22201E]",
    badge: "bg-[#8C7A6B]/10 text-[#8C7A6B]",
    palette: ["#FBF9F6", "#22201E", "#8C7A6B", "#8C5E43"],
    font: "Serif (Georgia)",
    icon: "📖",
  },
  {
    num: "02",
    name: "Cortex-OS",
    style: "Retro Cyber-Terminal",
    path: "/two",
    desc: "A low-latency, direct-coupling terminal environment. Deep obsidian black, glowing phosphor amber text, grid line overlays, scanlines, system diagnostics, and monospace logs. Designed for raw keyboard speed.",
    bg: "bg-black",
    text: "text-[#FFB000]",
    badge: "bg-[#FFB000]/10 text-[#FFB000]",
    palette: ["#000000", "#FFB000", "#FFD000", "#00FF66"],
    font: "Monospace (Geist Mono)",
    icon: "📟",
  },
  {
    num: "03",
    name: "Mycelium",
    style: "Organic / Naturalist Zen",
    path: "/three",
    desc: "A gentle, breathing, forest-inspired mind garden. Soft sage green, pale sands, rounded organic curves, and leaf-vein networks. Notes are grown as seeds connected by underground mycelial root webs.",
    bg: "bg-[#F6F4ED]",
    text: "text-[#2F3E34]",
    badge: "bg-teal-700/10 text-teal-800",
    palette: ["#F6F4ED", "#2F3E34", "#A67C52", "#E5ECE3"],
    font: "Clean Sans-Serif",
    icon: "🌿",
  },
  {
    num: "04",
    name: "NEUGRID",
    style: "Swiss Brutalist",
    path: "/four",
    desc: "A loud, structural, block-driven grid system. Stark high-contrast layout, massive heavy uppercase sans-serif headers, thick black outlines, neon yellow highlights, and raw architectural alignments. No compromise.",
    bg: "bg-[#F0F0F0]",
    text: "text-black",
    badge: "bg-black text-[#FFE500]",
    palette: ["#FFFFFF", "#000000", "#FFE500", "#FF5A09"],
    font: "Black Sans-Serif",
    icon: "📐",
  },
  {
    num: "05",
    name: "Aether",
    style: "Neo-Glassmorphism Luxury",
    path: "/five",
    desc: "An ultra-premium, dark celestial intelligence dock. Deep space obsidian, frosted glassmorphism cards, glowing violet/indigo mesh gradients, and thin golden-trimmed stellar mapping nodes. Pure cognitive luxury.",
    bg: "bg-[#070514]",
    text: "text-white",
    badge: "bg-indigo-500/20 text-indigo-300",
    palette: ["#070514", "#FFFFFF", "#6366F1", "#A855F7"],
    font: "Light Geometric Sans",
    icon: "✦",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0C0C0E] text-zinc-200 antialiased font-sans flex flex-col justify-between relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-zinc-800/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-zinc-900/20 blur-[120px] pointer-events-none" />

      {/* Lab Header */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-12 pb-6 border-b border-zinc-800/40 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-zinc-700 to-zinc-400 flex items-center justify-center text-black font-extrabold text-sm">
            C
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-[0.25em] text-white uppercase">CEREBRAL LABS</h1>
            <span className="text-[10px] text-zinc-500 font-mono">DESIGN SYSTEM EXPERIMENTS // v1.0.0</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-400">LAB STATUS: READY TO EXPLORE</span>
        </div>
      </header>

      {/* Main Content Dashboard */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-16 flex-1 flex flex-col justify-center">
        
        {/* Intro */}
        <div className="max-w-3xl space-y-6 mb-16">
          <span className="inline-block text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase bg-zinc-800/50 border border-zinc-700/30 px-3 py-1 rounded-full">
            LANDING PAGE DESIGN STUDY // SECOND BRAIN NOTE-TAKING APP
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            One Core Concept.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-500">
              Five Unique Dimensions.
            </span>
          </h2>
          <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed">
            Welcome to the Cerebral Design Playground. We have designed and implemented five highly distinctive landing pages for a note-taking application acting as a second brain. Explore each completely custom aesthetic, each featuring dedicated typography, layouts, colors, and motion profiles. 
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {DESIGNS.map((design, idx) => (
            <Link
              key={design.num}
              href={design.path}
              className="group relative flex flex-col justify-between rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/60 hover:border-zinc-700/80 p-6 transition-all duration-300 shadow-xl hover:-translate-y-1 hover:shadow-2xl overflow-hidden h-[460px]"
            >
              {/* Card glowing accent line on hover */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-zinc-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-6 relative z-10">
                {/* Number & Icon */}
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-extrabold tracking-tighter text-zinc-700 group-hover:text-zinc-500 transition-colors">
                    {design.num}
                  </span>
                  <span className="text-2xl h-10 w-10 rounded-xl bg-zinc-800/40 border border-zinc-700/20 flex items-center justify-center">
                    {design.icon}
                  </span>
                </div>

                {/* Aesthetic Title */}
                <div className="space-y-1.5">
                  <span className={`inline-block text-[9px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full ${design.badge}`}>
                    {design.style}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-zinc-100 transition-colors">
                    {design.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {design.desc}
                </p>
              </div>

              {/* Specs and Launch Info */}
              <div className="space-y-4 pt-4 border-t border-zinc-800/50 relative z-10">
                {/* Typography and palette details */}
                <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono">
                  <span>FONT: {design.font}</span>
                  <div className="flex gap-1">
                    {design.palette.map((color, i) => (
                      <span
                        key={i}
                        className="h-2 w-2 rounded-full border border-zinc-800"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                {/* Launch Button */}
                <div className="flex items-center justify-between text-xs font-semibold text-white group-hover:text-zinc-200">
                  <span>LAUNCH DECK</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </div>
              </div>

              {/* Very faint background layout preview inside card */}
              <div className="absolute bottom-[-10px] right-[-10px] w-28 h-28 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-300 text-[100px] select-none pointer-events-none font-serif">
                {design.num}
              </div>
            </Link>
          ))}
        </div>

        {/* Visual Showcase Section */}
        <section className="mt-20 border border-zinc-800/40 bg-zinc-950/40 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 h-36 w-36 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:12px_12px] opacity-60 pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase">AESTHETIC DECK CONTROL</span>
              <h3 className="text-xl font-bold text-white">Seamless Live Swapping</h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                We have built an elegant, integrated **Aesthetic Deck HUD** that floats subtly at the bottom of each page. Once you step inside any of the five pages, you can click on any deck number (1, 2, 3, 4, 5) to instantly swap the entire design live in your browser, enabling instant comparative analysis of typography, colors, structure, and emotional vibe.
              </p>
            </div>
            
            <div className="border border-zinc-800/80 bg-zinc-900/60 p-4 rounded-2xl flex items-center justify-center gap-3">
              <span className="text-[10px] font-mono text-zinc-500 uppercase">Active HUD Preview:</span>
              <div className="flex items-center gap-1.5 bg-black/80 border border-zinc-800 rounded-xl p-1.5 scale-90">
                <span className="flex h-6 w-6 items-center justify-center rounded bg-zinc-800 text-zinc-400 text-[10px] font-bold">1</span>
                <span className="flex h-6 w-6 items-center justify-center rounded bg-zinc-800 text-zinc-400 text-[10px] font-bold">2</span>
                <span className="flex h-6 w-6 items-center justify-center rounded bg-zinc-800 text-zinc-400 text-[10px] font-bold">3</span>
                <span className="flex h-6 w-6 items-center justify-center rounded bg-zinc-800 text-zinc-400 text-[10px] font-bold">4</span>
                <span className="flex h-6 w-6 items-center justify-center rounded bg-zinc-800 text-zinc-400 text-[10px] font-bold">5</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Portal Footer */}
      <footer className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-8 border-t border-zinc-800/40 text-center text-xs text-zinc-500 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© 2026 Cerebral Labs. Experimental Frontend Design Study.</p>
        <p className="font-mono text-[10px]">OS_STATE: ONLINE // CONVERSATION: ACTIVE</p>
      </footer>
    </div>
  );
}
