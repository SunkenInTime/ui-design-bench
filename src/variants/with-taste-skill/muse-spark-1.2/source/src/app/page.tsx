import Link from "next/link";

const variants = [
  {
    href: "/one",
    num: "01",
    name: "Archive",
    tagline: "Editorial · Olive + Brick",
    desc: "A quiet, tactile library for serious thinkers. Paper, borders, and slow detail.",
    bg: "bg-[#FFFEFB]",
    accent: "bg-[#2E3B2F] text-white",
    border: "border-[#E8E4DE]",
  },
  {
    href: "/two",
    num: "02",
    name: "Prism",
    tagline: "Dark · Graph · Linear",
    desc: "Zinc-950, live graph, monospace precision. For builders who think in nodes.",
    bg: "bg-[#0A0A0F]",
    accent: "bg-white text-black",
    border: "border-white/10",
  },
  {
    href: "/three",
    num: "03",
    name: "Field",
    tagline: "Spatial · Canvas · Play",
    desc: "Infinite canvas, floating cards, warm color. Ideas live where you leave them.",
    bg: "bg-[#FFFEF9]",
    accent: "bg-[#FF4D2E] text-white",
    border: "border-black/10",
  },
  {
    href: "/four",
    num: "04",
    name: "Index",
    tagline: "Brutalist · Terminal · Raw",
    desc: "Sharp corners, thick borders, lime. A plaintext brain that doesn't try to be pretty.",
    bg: "bg-[#F2F2F0]",
    accent: "bg-black text-[#D9FF00]",
    border: "border-black",
  },
  {
    href: "/five",
    num: "05",
    name: "Mind",
    tagline: "Soft · Calm · Consumer",
    desc: "Airy, rounded, glassy calm. Remember everything that matters — gently.",
    bg: "bg-[#FCFCFD]",
    accent: "bg-[#10B981] text-white",
    border: "border-black/5",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F6F7F8] text-zinc-900 antialiased">
      <div className="mx-auto max-w-[1200px] px-6 py-10 md:px-8 md:py-14">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-black animate-pulse" />
              <span className="font-mono text-[11px] tracking-widest">SECOND BRAIN — 5 DIRECTIONS</span>
            </div>
            <h1 className="mt-4 text-[36px] font-semibold leading-none tracking-[-0.04em] md:text-[48px]">Choose a direction.</h1>
            <p className="mt-3 max-w-[48ch] text-[15px] leading-relaxed text-zinc-500">
              Five distinct landing pages for the same product. Each has its own system, palette, and motion. Switch with the pill at the bottom.
            </p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white px-4 py-3 font-mono text-xs text-zinc-500 shadow-sm">
            <div>Port: 3003</div>
            <div>Routes: /one → /five</div>
            <div className="mt-1 text-black">Use the floating switcher on each page</div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {variants.map((v) => (
            <Link
              key={v.href}
              href={v.href}
              className={`group flex flex-col overflow-hidden rounded-[20px] border bg-white shadow-sm transition hover:shadow-md ${v.border}`}
            >
              <div className={`relative h-48 overflow-hidden ${v.bg} border-b ${v.border} p-4`}>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-widest opacity-50">{v.num}</span>
                  <span className={`rounded-full px-2.5 py-1 font-mono text-[10px] font-bold tracking-widest ${v.accent}`}>{v.tagline}</span>
                </div>
                <div className="mt-8">
                  <div className="text-2xl font-bold tracking-tight">{v.name}</div>
                  <div className="mt-1 text-sm leading-relaxed opacity-60">{v.desc}</div>
                </div>
                <div className="absolute bottom-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-black text-white opacity-0 transition group-hover:opacity-100">→</div>
              </div>
              <div className="flex items-center justify-between p-4">
                <span className="font-mono text-xs tracking-widest text-zinc-500">Open {v.href}</span>
                <span className="rounded-full border border-black/10 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white group-hover:bg-black">View →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-dashed border-black/10 bg-white p-6 text-sm leading-relaxed text-zinc-600">
          <span className="font-semibold text-black">Tip:</span> Every variant page has a floating pill at the bottom (desktop) or a FAB at bottom-right (mobile) to jump between /one … /five instantly. The home gallery is also reachable via “Home” in that pill.
        </div>
      </div>
    </div>
  );
}
