import Link from "next/link";

const iterations = [
  {
    num: "01",
    name: "Paper",
    href: "/1",
    tagline: "Editorial & Calm",
    desc: "For thoughtful writers. Cream paper, serif types, quiet margins. Notes that breathe like a well-set book.",
    accent: "bg-[#f9f6ef] border-[#ebe6d8] text-[#6a5e4f]",
    dot: "bg-[#c8b89a]",
    preview: "A A",
    style: "font-[var(--font-instrument-serif)]",
  },
  {
    num: "02",
    name: "Graph",
    href: "/2",
    tagline: "Technical & Dark",
    desc: "For networked thinkers. Nodes, edges, monospace. Your ideas as an explorable graph — fast, precise, infinite.",
    accent: "bg-zinc-950 border-zinc-800 text-zinc-200",
    dot: "bg-emerald-500",
    preview: "⬢ — ⬢",
  },
  {
    num: "03",
    name: "Garden",
    href: "/3",
    tagline: "Warm & Playful",
    desc: "For creative minds. Soft shapes, clay & sage, rounded joy. Tend your notes like a digital garden.",
    accent: "bg-[#fef7ec] border-[#f5e0c0] text-[#7a5a3a]",
    dot: "bg-[#f4a259]",
    preview: "✿ ◎ ✿",
  },
  {
    num: "04",
    name: "System",
    href: "/4",
    tagline: "Brutalist & Grid",
    desc: "For systematic builders. Bold rules, brutal grids, no nonsense. A second brain with structure you can trust.",
    accent: "bg-white border-black text-black",
    dot: "bg-[#ff3b30]",
    preview: "▞▞▞",
  },
  {
    num: "05",
    name: "Aura",
    href: "/5",
    tagline: "Premium & Fluid",
    desc: "For aesthetic collectors. Glass, gradient, levitation. Spacious, expensive-feeling, effortlessly calm.",
    accent: "bg-gradient-to-br from-white to-zinc-50 border-zinc-200 text-zinc-800",
    dot: "bg-violet-500",
    preview: "◐ ◑",
  },
];

export default function HubPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfa] text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur-xl bg-[#fcfcfa]/80 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 h-[64px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-lg bg-zinc-900 text-white grid place-items-center font-mono text-sm font-bold">S</div>
            <span className="font-semibold tracking-tight">SYNAPSE</span>
            <span className="hidden sm:inline text-xs px-2 py-1 rounded-full bg-zinc-900 text-white ml-2">5 Iterations</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-zinc-500">
            <span>Pick your flavor — each is a full landing.</span>
          </div>
          <Link href="/1" className="text-sm font-medium px-4 py-2 rounded-full bg-zinc-900 text-white hover:bg-black transition-colors">
            Start with 01 →
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-zinc-500 mb-6">
            <span className="size-1.5 rounded-full bg-zinc-900 animate-pulse" />
            Note-taking as second brain
          </div>
          <h1 className="text-[42px] sm:text-[56px] font-[700] leading-[0.9] tracking-[-0.03em]">
            Five ways to <br />
            <span className="font-[var(--font-instrument-serif)] italic font-normal text-[1.05em]">remember everything.</span>
          </h1>
          <p className="mt-6 text-lg leading-7 text-zinc-600 max-w-xl">
            We designed five distinct landing pages for the same product — SYNAPSE, your networked second brain.
            Each direction has its own soul. Explore, compare, and tell us which one feels like home.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <span className="size-2 rounded-full bg-emerald-500" /> Live on <span className="font-mono">localhost:3001</span>
            </div>
            <span className="text-zinc-300">•</span>
            <span className="text-sm text-zinc-500">Use the floating switcher at the bottom to hop between versions instantly.</span>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-12 grid grid-cols-3 md:grid-cols-4 gap-4 border-y border-zinc-200 py-6">
          <div>
            <div className="text-2xl font-semibold tracking-tight">12k+</div>
            <div className="text-xs uppercase tracking-widest text-zinc-500">early users</div>
          </div>
          <div>
            <div className="text-2xl font-semibold tracking-tight">2.4M</div>
            <div className="text-xs uppercase tracking-widest text-zinc-500">notes captured</div>
          </div>
          <div>
            <div className="text-2xl font-semibold tracking-tight">∞</div>
            <div className="text-xs uppercase tracking-widest text-zinc-500">connections</div>
          </div>
          <div className="hidden md:block">
            <div className="text-2xl font-semibold tracking-tight">4.9/5</div>
            <div className="text-xs uppercase tracking-widest text-zinc-500">love rating</div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {iterations.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="group relative flex flex-col rounded-[24px] border bg-white overflow-hidden hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Preview header */}
              <div className={`h-[168px] border-b flex flex-col p-6 relative overflow-hidden ${it.accent}`}>
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs tracking-widest opacity-60">{it.num} — {it.tagline}</span>
                  <span className={`size-2 rounded-full ${it.dot}`} />
                </div>
                <div className="mt-auto">
                  <div className="text-[56px] leading-none tracking-tight font-light opacity-80 select-none">{it.preview}</div>
                </div>
                {/* subtle grid / pattern */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "18px 18px" }} />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[22px] font-semibold tracking-tight flex items-center gap-2">
                  {it.name}
                  <span className="text-zinc-300 font-normal">/</span>
                  <span className="text-sm font-mono text-zinc-400">{it.href}</span>
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 flex-1">{it.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-medium">
                  <span className="px-3 py-1.5 rounded-full bg-zinc-900 text-white group-hover:bg-black transition-colors">Open →</span>
                  <span className="text-zinc-500 group-hover:text-zinc-900 transition-colors">Explore</span>
                </div>
              </div>
            </Link>
          ))}
          {/* Coming soon card */}
          <div className="rounded-[24px] border border-dashed border-zinc-300 bg-zinc-50 p-6 flex flex-col justify-center min-h-[300px]">
            <div className="size-10 rounded-full border border-zinc-300 grid place-items-center text-zinc-400 mb-4">＋</div>
            <h3 className="font-semibold">Your feedback shapes v06</h3>
            <p className="text-sm text-zinc-600 mt-2 leading-6">Tell us which direction resonates most. We&apos;ll mix and refine.</p>
            <div className="mt-4 flex gap-2">
              <span className="text-xs px-2 py-1 rounded-full bg-white border border-zinc-200">Minimal</span>
              <span className="text-xs px-2 py-1 rounded-full bg-white border border-zinc-200">Graph</span>
              <span className="text-xs px-2 py-1 rounded-full bg-white border border-zinc-200">Playful</span>
            </div>
          </div>
        </div>

        {/* Footer hint */}
        <div className="mt-16 rounded-2xl bg-zinc-900 text-white p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-sm font-mono tracking-widest uppercase text-white/60">Pro tip</div>
            <div className="mt-2 text-lg font-medium">Use the floating pill at the bottom to switch instantly. Try keyboard ← → on desktop.</div>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link href="/1" className="px-5 py-2.5 rounded-full bg-white text-zinc-900 font-medium hover:bg-zinc-100 transition-colors">Start browsing</Link>
            <Link href="/5" className="px-5 py-2.5 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors border border-white/20">Jump to Aura</Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 py-8 text-center text-xs tracking-widest uppercase text-zinc-400 pb-28">
        SYNAPSE © 2026 — Your second brain — Built with Next.js 16 — 5 iterations
      </footer>
    </div>
  );
}
