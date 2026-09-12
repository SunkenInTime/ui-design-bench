import { Fraunces, JetBrains_Mono, DM_Sans } from "next/font/google";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

export default function Page1() {
  return (
    <div className={`${fraunces.variable} ${mono.variable} ${sans.variable} min-h-screen bg-[#FFFCF3] text-[#11110F] selection:bg-[#C7442D]/20`}>
      <style>{`::selection{background:rgba(199,68,45,.18)}`}</style>

      {/* Top bar - library stamp */}
      <div className="border-b-[1.5px] border-[#11110F] bg-[#FFFCF3] sticky top-0 z-40">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-5 md:px-8 h-[52px]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#11110F] text-[#FFFCF3] grid place-items-center font-mono text-xs font-bold tracking-widest">MN</div>
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase font-semibold">Mneḿosyne — Archive No. 001</span>
            <span className="hidden md:inline text-[11px] font-mono tracking-widest opacity-40">EST. 2024 — CATALOG SYSTEM</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline font-mono text-[11px] tracking-widest uppercase opacity-60">Acq. Dept / REF 827.3</span>
            <a href="#" className="bg-[#C7442D] text-white px-4 py-1.5 text-xs font-mono tracking-widest uppercase font-bold hover:bg-[#11110F] transition-colors">Request Card</a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-8 pt-8 md:pt-12">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-10 border-[1.5px] border-[#11110F] bg-white">
          {/* left */}
          <div className="p-6 md:p-10 flex flex-col">
            <div className="inline-flex items-center gap-2 self-start border border-[#11110F] px-2.5 py-1">
              <span className="w-2 h-2 bg-[#C7442D] rounded-full animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.16em] uppercase font-bold">New acquisition — 2,847 notes indexed</span>
            </div>

            <h1 className="font-[var(--font-fraunces)] text-[42px] md:text-[58px] leading-[0.9] tracking-[-0.03em] mt-6">
              Your second <br />
              <span className="italic font-light">brain,</span> <br />
              on paper <br />
              <span className="inline-block bg-[#EDE7D3] px-2 -rotate-[0.6deg]">that thinks.</span>
            </h1>

            <p className="font-[var(--font-sans)] text-[15px] leading-6 text-[#11110F]/70 mt-5 max-w-[42ch]">
              Mnemosyne is a note-taking archive that works like a real library — every thought filed, cross-referenced, and retrievable. No AI slop. Just your ideas, connected.
            </p>

            <div className="flex flex-wrap gap-3 mt-7">
              <a href="#" className="bg-[#11110F] text-[#FFFCF3] px-6 py-3 font-mono text-xs tracking-[0.14em] uppercase font-bold hover:bg-[#C7442D] transition-colors">Start Archiving — Free</a>
              <a href="#" className="border-[1.5px] border-[#11110F] px-6 py-3 font-mono text-xs tracking-[0.14em] uppercase font-bold hover:bg-[#EDE7D3] transition-colors flex items-center gap-2">
                Inspect catalog <span>→</span>
              </a>
            </div>

            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-dashed border-[#11110F]/20">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-[#EDE7D3] grid place-items-center font-mono text-[10px] font-bold">U{i}</div>
                ))}
              </div>
              <div className="font-mono text-[11px] leading-tight">
                <div className="font-bold tracking-wide">Trusted by 12,000 archivists</div>
                <div className="opacity-60">Researchers, writers, founders</div>
              </div>
              <div className="hidden sm:flex ml-auto gap-1.5">
                <span className="font-mono text-[10px] tracking-widest border border-[#11110F] px-2 py-1">NOTION → MN</span>
                <span className="font-mono text-[10px] tracking-widest border border-[#11110F] px-2 py-1">OBSIDIAN ✓</span>
              </div>
            </div>
          </div>

          {/* right — card stack */}
          <div className="bg-[#EDE7D3] border-t lg:border-t-0 lg:border-l-[1.5px] border-[#11110F] p-6 md:p-8 flex flex-col min-h-[520px]">
            {/* card stack */}
            <div className="relative flex-1 flex items-center justify-center py-6">
              <div className="absolute w-[88%] h-[78%] bg-white border-[1.5px] border-[#11110F] rotate-[-3deg] shadow-[8px_8px_0_#11110F] translate-x-2 -translate-y-1" />
              <div className="absolute w-[88%] h-[78%] bg-[#FFFCF3] border-[1.5px] border-[#11110F] rotate-[1.5deg] shadow-[6px_6px_0_#11110F]" />
              <div className="relative w-[88%] bg-white border-[1.5px] border-[#11110F] shadow-[10px_10px_0_#11110F] p-5">
                <div className="flex justify-between items-start">
                  <div className="font-mono text-[10px] tracking-[0.14em] uppercase opacity-50">Card 412.A — Cross-reference</div>
                  <div className="w-6 h-6 rounded-full border border-[#11110F] grid place-items-center text-[10px]">●</div>
                </div>
                <div className="mt-4 font-[var(--font-fraunces)] text-xl leading-tight">
                  How memory <span className="underline decoration-[#C7442D] decoration-2 underline-offset-4">actually</span> works
                </div>
                <p className="font-mono text-xs leading-5 opacity-60 mt-3">Not storage, but retrieval. The archive doesn’t remember for you — it teaches you how to find again. Links are not tags; they are trails back to context.</p>
                <div className="flex flex-wrap gap-2 mt-4 font-mono text-[10px]">
                  <span className="bg-[#11110F] text-white px-2 py-1 tracking-widest">↗ BI-011</span>
                  <span className="border border-[#11110F] px-2 py-1 tracking-widest bg-[#FFFCF3]">↗ ZT-09 Memory</span>
                  <span className="border border-[#11110F] px-2 py-1 tracking-widest">↗ WK-42 Writing</span>
                </div>
                <div className="mt-5 pt-4 border-t border-dashed border-[#11110F]/20 flex justify-between font-mono text-[10px] tracking-widest uppercase opacity-40">
                  <span>Filed 12 Nov 2024</span>
                  <span>Box 4 — Shelf B</span>
                </div>
              </div>
            </div>

            {/* bottom stats bar */}
            <div className="grid grid-cols-3 border-[1.5px] border-[#11110F] bg-white divide-x divide-[#11110F] mt-6">
              {[
                ["847", "links made"],
                ["23ms", "avg recall"],
                ["100%", "yours"],
              ].map(([n, l]) => (
                <div key={n} className="p-3 text-center">
                  <div className="font-[var(--font-fraunces)] text-xl leading-none">{n}</div>
                  <div className="font-mono text-[10px] tracking-[0.14em] uppercase opacity-50">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* marque slider */}
        <div className="border-x-[1.5px] border-b-[1.5px] border-[#11110F] bg-[#11110F] text-[#FFFCF3] overflow-hidden py-2">
          <div className="flex gap-8 whitespace-nowrap font-mono text-[11px] tracking-[0.16em] uppercase animate-[marquee_20s_linear_infinite]" style={{ animation: "marquee 22s linear infinite" }}>
            <span>✦ Backlinks without lock-in ✦ Local-first ✦ Graph view ✦ Daily notes ✦ Canvas ✦ Offline ✦ Open format ✦</span>
            <span>✦ Backlinks without lock-in ✦ Local-first ✦ Graph view ✦ Daily notes ✦ Canvas ✦ Offline ✦ Open format ✦</span>
          </div>
        </div>
      </section>

      {/* Features as catalog drawers */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-8 mt-10">
        <div className="border-[1.5px] border-[#11110F] bg-white">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#11110F]">
            {[
              {
                k: "01 — CAPTURE",
                t: "Frictionless, on paper speed",
                d: "Type, paste, dictate. Everything becomes a card. No folders to choose, no template guilt.",
                stamp: "APPROVED",
              },
              {
                k: "02 — CONNECT",
                t: "Links that think like you do",
                d: "Type [[ and watch ideas pull toward each other. Backlinks, unlinked mentions, and orphans surfaced daily.",
                stamp: "CROSS-REF",
              },
              {
                k: "03 — RECALL",
                t: "Find it at the speed of thought",
                d: "Full-text, graph, timeline, or that half-remembered phrase from three years ago. 23ms median.",
                stamp: "INDEXED",
              },
            ].map((f) => (
              <div key={f.k} className="p-6 md:p-7 relative">
                <div className="font-mono text-[10px] tracking-[0.16em] uppercase opacity-50">{f.k}</div>
                <h3 className="font-[var(--font-fraunces)] text-[18px] leading-tight mt-2">{f.t}</h3>
                <p className="font-[var(--font-sans)] text-sm leading-6 opacity-60 mt-2">{f.d}</p>
                <div className="mt-5 inline-block border border-[#C7442D] text-[#C7442D] px-2 py-1 font-mono text-[10px] tracking-[0.14em] uppercase rotate-[-1deg]">{f.stamp} ✓</div>
                <div className="absolute top-6 right-6 w-8 h-1 bg-[#11110F]/10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Big statement */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-8 mt-8">
        <div className="border-[1.5px] border-[#11110F] bg-[#2B3A2E] text-[#FFFCF3] p-6 md:p-10 grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
          <div>
            <div className="font-mono text-[10px] tracking-[0.16em] uppercase opacity-50">Field note — Why paper endures</div>
            <blockquote className="font-[var(--font-fraunces)] text-2xl md:text-[32px] leading-tight mt-3">
              “The best second brain doesn&apos;t try to be smart. It tries to be <span className="italic text-[#C7D6C3]">findable.</span>”
            </blockquote>
          </div>
          <div className="bg-[#FFFCF3] text-[#11110F] border-[1.5px] border-[#11110F] p-5 font-mono text-xs leading-6">
            <div className="tracking-[0.14em] uppercase font-bold">Spec sheet</div>
            <div className="mt-3 space-y-2 divide-y divide-dashed divide-[#11110F]/20">
              <div className="flex justify-between pt-2"><span className="opacity-60">Storage</span><span>Local + E2E sync</span></div>
              <div className="flex justify-between pt-2"><span className="opacity-60">Format</span><span>Markdown, forever</span></div>
              <div className="flex justify-between pt-2"><span className="opacity-60">Graph</span><span>12k nodes @ 60fps</span></div>
              <div className="flex justify-between pt-2"><span className="opacity-60">Export</span><span>One click, no ransom</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-8 mt-8 pb-24">
        <div className="border-[1.5px] border-[#11110F] bg-white">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-[1.5px] border-[#11110F] px-6 py-4 bg-[#EDE7D3]">
            <h2 className="font-[var(--font-fraunces)] text-xl">Membership tiers — pick your shelf</h2>
            <span className="font-mono text-[10px] tracking-[0.14em] uppercase border border-[#11110F] px-2 py-1 bg-white">Billed annually — 2 months free</span>
          </div>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#11110F]">
            {[
              { name: "Reader", price: "Free", sub: "For trying the stacks", feats: ["1,000 cards", "1 graph", "Community support"] },
              { name: "Archivist", price: "$8", sub: "Most chosen — personal scale", feats: ["Unlimited cards", "Unlimited graphs", "E2E sync + history", "Publish to web"], pop: true },
              { name: "Librarian", price: "$16", sub: "For teams & obsessives", feats: ["Everything in Archivist", "Collaborative stacks", "API &  SS0", "Priority conservation"] },
            ].map((p) => (
              <div key={p.name} className={`p-6 md:p-7 flex flex-col ${p.pop ? "bg-[#FFFCF3]" : ""}`}>
                {p.pop && <div className="font-mono text-[10px] tracking-[0.14em] uppercase bg-[#C7442D] text-white self-start px-2 py-1 -mt-2 mb-3">★ Most borrowed</div>}
                <div className="font-mono text-[11px] tracking-[0.14em] uppercase opacity-50">{p.name}</div>
                <div className="flex items-baseline gap-1 mt-2"><span className="font-[var(--font-fraunces)] text-4xl">{p.price}</span><span className="font-mono text-xs opacity-60">/mo</span></div>
                <div className="font-mono text-xs opacity-60 mt-1">{p.sub}</div>
                <ul className="mt-5 space-y-2 font-mono text-xs">
                  {p.feats.map((f) => (
                    <li key={f} className="flex gap-2"><span className="text-[#C7442D]">—</span>{f}</li>
                  ))}
                </ul>
                <a href="#" className={`mt-6 text-center py-3 font-mono text-xs tracking-[0.14em] uppercase font-bold border-[1.5px] border-[#11110F] ${p.pop ? "bg-[#11110F] text-white hover:bg-[#C7442D]" : "bg-white hover:bg-[#11110F] hover:text-white"} transition-colors`}>Select {p.name}</a>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center font-mono text-[11px] tracking-wide opacity-50 mt-4">30-day return to shelf. No questions. No dark patterns.</div>
      </section>

    </div>
  );
}
