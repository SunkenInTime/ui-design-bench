import Link from "next/link";
import { Instrument_Serif, JetBrains_Mono, Fraunces, Newsreader, Space_Grotesk, Cormorant_Garamond } from "next/font/google";

const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-serif" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-cormorant" });

const iterations = [
  {
    n: "01",
    href: "/1",
    name: "Archive",
    subtitle: "Brutalist Library Catalog",
    desc: "Dewey-decimal discipline. Index cards, rubber stamps, and cross-references. For archivists who love paper that thinks.",
    palette: ["#FFFCF3", "#11110F", "#C7442D", "#EDE7D3"],
    bg: "bg-[#FFFCF3]",
    text: "text-[#11110F]",
    border: "border-[#11110F]",
    accent: "bg-[#C7442D]",
  },
  {
    n: "02",
    href: "/2",
    name: "Garden",
    subtitle: "Mycelial Network",
    desc: "Biophilic and alive. A dark forest floor where ideas fruit like mushrooms and trails appear only when walked.",
    palette: ["#0A120F", "#D6FF5C", "#1A2E22", "#F0EDE5"],
    bg: "bg-[#0A120F]",
    text: "text-[#F0EDE5]",
    border: "border-white/10",
    accent: "bg-[#D6FF5C]",
  },
  {
    n: "03",
    href: "/3",
    name: "Console",
    subtitle: "Swiss Lab Notebook",
    desc: "Grid paper, 23ms search, and a live editor. The engineer’s second brain — precise, local, reproducible.",
    palette: ["#F2F0EB", "#111111", "#2D5BFF", "#FF3B30"],
    bg: "bg-[#F2F0EB]",
    text: "text-[#111111]",
    border: "border-[#111111]",
    accent: "bg-[#2D5BFF]",
  },
  {
    n: "04",
    href: "/4",
    name: "Palace",
    subtitle: "Editorial Memory Palace",
    desc: "A residence for what you’ve read. Marble, gilding, and corridors. Built for the serious reader with a pen.",
    palette: ["#FDF8F0", "#1C1A18", "#C9A86A", "#6B2D2E"],
    bg: "bg-[#FDF8F0]",
    text: "text-[#1C1A18]",
    border: "border-[#1C1A18]/10",
    accent: "bg-[#C9A86A]",
  },
  {
    n: "05",
    href: "/5",
    name: "Zen",
    subtitle: "Stationery & Breath",
    desc: "Maximum quiet. One cursor, lots of air. The note app that lowers your heart rate and disappears.",
    palette: ["#FAF9F7", "#1A1A1A", "#E8EDE8", "#B7B5B0"],
    bg: "bg-[#FAF9F7]",
    text: "text-[#1A1A1A]",
    border: "border-[#1A1A1A]/10",
    accent: "bg-[#1A1A1A]",
  },
];

export default function Home() {
  return (
    <div className={`${serif.variable} ${mono.variable} ${fraunces.variable} ${newsreader.variable} ${space.variable} ${cormorant.variable} min-h-screen bg-[#FCFCF9] text-[#11110F]`}>
      {/* header */}
      <header className="sticky top-0 z-40 bg-[#FCFCF9]/80 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-[1200px] mx-auto px-6 h-[56px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-black text-white grid place-items-center font-mono text-[10px] font-bold">MN</div>
            <span className="font-mono text-xs tracking-[0.16em] uppercase font-semibold">Second Brain — Design Lab</span>
            <span className="hidden md:inline font-mono text-[10px] tracking-widest opacity-40">5 iterations • port 3002</span>
          </div>
          <div className="font-mono text-[11px] opacity-40 hidden sm:block">Use the pill at bottom to switch • or click cards</div>
        </div>
      </header>

      {/* hero */}
      <section className="max-w-[1200px] mx-auto px-6 pt-10 md:pt-14">
        <div className="max-w-[720px]">
          <div className="inline-flex items-center gap-2 border border-black/10 rounded-full px-3 py-1.5 bg-white">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase opacity-60">Next.js 16 • 5 directions • one brief</span>
          </div>
          <h1 className="font-[var(--font-serif)] text-[40px] md:text-[56px] leading-[0.9] tracking-[-0.035em] mt-6">
            A second brain
            <br />
            should feel like <span className="italic font-light">yours.</span>
          </h1>
          <p className="font-mono text-sm leading-6 opacity-60 mt-4 max-w-[58ch]">Five landing pages for the same product — a note-taking app as a second brain. Each explores a different metaphor: archive, forest, lab, palace, and empty desk. Same job, five personalities.</p>
          <div className="flex flex-wrap gap-2 mt-6 font-mono text-[11px] tracking-widest uppercase">
            <span className="bg-black text-white px-3 py-1.5 rounded-full">Local-first • Markdown • Graph • Offline</span>
            <span className="border border-black/10 px-3 py-1.5 rounded-full bg-white">Open the iterations below →</span>
          </div>
        </div>
      </section>

      {/* cards */}
      <section className="max-w-[1200px] mx-auto px-6 mt-8 pb-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {iterations.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className={`group relative border ${it.border} ${it.bg} ${it.text} p-6 flex flex-col min-h-[340px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1 overflow-hidden`}
          >
            <div className="flex justify-between items-start">
              <span className="font-mono text-3xl tracking-tighter opacity-15">{it.n}</span>
              <span className="font-mono text-[10px] tracking-[0.16em] uppercase border border-current/15 px-2 py-1 rounded-full opacity-60 group-hover:opacity-100 transition-opacity">View →</span>
            </div>
            <div className="mt-2">
              <h2 className="text-2xl font-bold tracking-tight leading-none">{it.name}</h2>
              <div className="font-mono text-[11px] tracking-[0.14em] uppercase opacity-50 mt-1">{it.subtitle}</div>
            </div>
            <p className="font-mono text-xs leading-6 opacity-60 mt-4 flex-1">{it.desc}</p>
            <div className="flex gap-1.5 mt-6">
              {it.palette.map((c) => (
                <span key={c} className="w-7 h-7 rounded-full border border-black/10 shadow-sm" style={{ background: c }} title={c} />
              ))}
            </div>
            <div className={`absolute bottom-0 left-0 right-0 h-1 ${it.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />
          </Link>
        ))}

        {/* info card */}
        <div className="border border-black/10 bg-white p-6 flex flex-col min-h-[340px]">
          <div className="font-mono text-[10px] tracking-[0.16em] uppercase opacity-40">How to use</div>
          <h3 className="font-[var(--font-serif)] text-xl leading-tight mt-2">The switcher is always there.</h3>
          <p className="font-mono text-xs leading-6 opacity-60 mt-3">Every page has a floating pill at the bottom. Jump between /1 → /5 without losing your place. Root / is this gallery.</p>
          <div className="mt-4 bg-[#11110F] text-white font-mono text-xs p-3 rounded-xl">
            <div className="opacity-40 text-[10px] tracking-[0.14em] uppercase">Run on 3002</div>
            <div className="mt-1">npm run dev -- --port 3002</div>
            <div className="opacity-50">http://localhost:3002/1 … /5</div>
          </div>
          <div className="mt-auto pt-4 flex gap-2">
            <Link href="/1" className="flex-1 bg-black text-white text-center py-2.5 font-mono text-xs tracking-widest uppercase hover:bg-[#C7442D] transition-colors">
              Start with 01
            </Link>
            <Link href="/5" className="border border-black px-4 py-2.5 font-mono text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-colors">
              Jump to Zen
            </Link>
          </div>
        </div>
      </section>

      {/* footer note */}
      <footer className="max-w-[1200px] mx-auto px-6 pb-24">
        <div className="border-t border-black/5 pt-6 font-mono text-[11px] leading-6 opacity-40">
          Built with Next.js 16 & Tailwind v4. Each iteration uses distinct type, palette, and layout thesis to avoid the three AI-default aesthetics (cream-serif-terracotta, black-neon, broadsheet). No templates — deliberate choices per brief.
        </div>
      </footer>

      {/* inline switcher for index too */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-1.5 p-1.5 rounded-full bg-zinc-900 text-white shadow-[0_8px_32px_rgba(0,0,0,0.35),0_1px_0_rgba(255,255,255,0.1)_inset] border border-white/10">
        <span className="w-8 h-8 grid place-items-center rounded-full bg-white text-black text-[10px] font-mono">⌂</span>
        <div className="w-px h-5 bg-white/15 mx-1" />
        {[1, 2, 3, 4, 5].map((n) => (
          <Link key={n} href={`/${n}`} className="w-8 h-8 grid place-items-center rounded-full text-xs font-medium text-white/60 hover:text-white hover:bg-white/10 transition-colors">
            {n}
          </Link>
        ))}
        <div className="hidden sm:flex items-center gap-2 pl-2 pr-3 ml-1 border-l border-white/15">
          <span className="text-[10px] font-mono tracking-[0.14em] text-white/40 uppercase">Index</span>
        </div>
      </div>
    </div>
  );
}
