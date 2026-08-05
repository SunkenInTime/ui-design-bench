import { Cormorant_Garamond, Instrument_Sans, JetBrains_Mono } from "next/font/google";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", weight: ["300", "400", "500", "600"] });
const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export default function Page4() {
  return (
    <div className={`${cormorant.variable} ${sans.variable} ${mono.variable} min-h-screen bg-[#FDF8F0] text-[#1C1A18] selection:bg-[#C9A86A]/30`}>
      {/* Top editorial bar */}
      <div className="border-b border-[#1C1A18]/10 bg-[#FDF8F0] sticky top-0 z-40">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 h-[56px] flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="font-[var(--font-cormorant)] text-[22px] tracking-[0.14em] uppercase font-light">Palace</span>
            <span className="hidden md:inline h-4 w-px bg-[#1C1A18]/10" />
            <span className="hidden md:inline font-mono text-[10px] tracking-[0.18em] uppercase opacity-40">A second brain for the serious reader — Vol. IV</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline font-mono text-xs opacity-50">From the studio of Mnemosyne</span>
            <a href="#" className="bg-[#1C1A18] text-[#FDF8F0] px-5 py-2 font-mono text-xs tracking-[0.14em] uppercase hover:bg-[#6B2D2E] transition-colors">Enter palace →</a>
          </div>
        </div>
      </div>

      {/* Hero — museum */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-8 pt-8 md:pt-12">
        <div className="border border-[#1C1A18]/10 bg-white">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-0">
            <div className="p-6 md:p-10 lg:p-12">
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase opacity-40">Est. MMXXIV — For those who read with a pen</div>
              <h1 className="font-[var(--font-cormorant)] text-[48px] md:text-[64px] leading-[0.85] tracking-[-0.04em] font-light mt-4">
                A palace <br />
                <span className="italic font-normal">for</span> what <br />
                you&apos;ve <br />
                <span className="relative inline-block">
                  read.
                  <span className="absolute left-0 -bottom-1 w-full h-[6px] bg-[#C9A86A]/30" />
                </span>
              </h1>
              <p className="font-[var(--font-sans)] text-[15px] leading-7 opacity-60 mt-6 max-w-[42ch]">
                Not a tool. A residence. Each idea gets a room, each connection a corridor. Walk it daily and your thinking acquires architecture.
              </p>
              <div className="flex gap-3 mt-8">
                <a href="#" className="bg-[#1C1A18] text-white px-7 py-3.5 font-mono text-xs tracking-[0.14em] uppercase hover:bg-[#6B2D2E] transition-colors">Begin residence — free</a>
                <a href="#" className="border border-[#1C1A18]/15 px-7 py-3.5 font-mono text-xs tracking-[0.14em] uppercase hover:bg-[#FDF8F0] transition-colors">Read manifesto</a>
              </div>
              <div className="mt-10 flex items-center gap-4 border-t border-[#1C1A18]/10 pt-6">
                <img alt="" src="https://i.pravatar.cc/100?img=32" className="w-8 h-8 rounded-full object-cover grayscale" />
                <div className="font-mono text-xs leading-tight">
                  <div className="font-medium">“The first note app I’ve kept for more than a month.”</div>
                  <div className="opacity-40">— Sarah M., novelist • 1,200 notes</div>
                </div>
              </div>
            </div>

            {/* Palace rooms */}
            <div className="bg-[#1C1A18] text-[#FDF8F0] p-5 md:p-6 flex flex-col min-h-[560px] border-t lg:border-t-0 lg:border-l border-[#1C1A18]">
              <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.16em] uppercase opacity-40">
                <span>Floor plan — West Wing</span>
                <span className="border border-white/15 px-2 py-1 rounded-full">6 rooms • 47 corridors</span>
              </div>

              <div className="mt-4 flex-1 rounded-xl overflow-hidden bg-[#FDF8F0] text-[#1C1A18] p-4 grid grid-cols-2 gap-3">
                {[
                  { name: "Library", items: "342 notes", color: "bg-[#C9A86A]/20" },
                  { name: "Commonplace", items: "89 excerpts", color: "bg-[#6B2D2E]/10" },
                  { name: "Atelier", items: "12 drafts", color: "bg-[#1C1A18]/5" },
                  { name: "Garden", items: "daily • alive", color: "bg-[#8A857E]/15" },
                ].map((r) => (
                  <div key={r.name} className={`${r.color} border border-[#1C1A18]/10 p-4 flex flex-col justify-between min-h-[120px]`}>
                    <div>
                      <div className="font-[var(--font-cormorant)] text-lg leading-none">{r.name}</div>
                      <div className="font-mono text-[10px] tracking-widest uppercase opacity-40 mt-1">{r.items}</div>
                    </div>
                    <div className="font-mono text-[10px] tracking-widest border border-[#1C1A18]/15 self-start px-2 py-1 bg-white mt-3">Enter →</div>
                  </div>
                ))}
                {/* corridor */}
                <div className="col-span-2 border border-dashed border-[#1C1A18]/15 p-3 flex items-center justify-between font-mono text-[10px] tracking-widest uppercase opacity-60">
                  <span>Corridor — Montag → Memory (12 links)</span>
                  <span>↔</span>
                </div>
              </div>

              <div className="mt-4 rounded-xl bg-white/10 border border-white/10 p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C9A86A] grid place-items-center text-[#1C1A18] font-[var(--font-cormorant)] text-lg">Aa</div>
                <div>
                  <div className="font-[var(--font-sans)] text-sm font-medium">Today’s reopening</div>
                  <div className="font-mono text-xs opacity-60">“On marginalia” — last visited 142 days ago, 8 backlinks</div>
                </div>
                <span className="ml-auto font-mono text-[10px] tracking-widest bg-white text-[#1C1A18] px-2 py-1 rounded-full">Open</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial features - newspaper */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-8 mt-6">
        <div className="border border-[#1C1A18]/10 bg-white">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1C1A18]/10">
            {[
              {
                eyebrow: "I. The Commonplace Book",
                title: "Excerpts that stay excerpts",
                text: "Highlight in any book or article. It arrives already cited, paginated, and linked to the passage that changed your thinking.",
              },
              {
                eyebrow: "II. The Zettelkasten",
                title: "One idea per room, strictly",
                text: "Atomic notes enforced by design — no bloated pages. If it has two ideas, it is two notes. Your palace stays navigable.",
              },
              {
                eyebrow: "III. The Daily Walk",
                title: "A curator, not an inbox",
                text: "Each morning, the palace suggests three rooms to revisit. Not gamified. Not pushy. Just a quiet knock at the door.",
              },
            ].map((f) => (
              <div key={f.title} className="p-6 md:p-8">
                <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#6B2D2E]">{f.eyebrow}</div>
                <h3 className="font-[var(--font-cormorant)] text-xl leading-tight mt-3">{f.title}</h3>
                <p className="font-[var(--font-sans)] text-sm leading-6 opacity-60 mt-3">{f.text}</p>
                <div className="mt-6 font-mono text-[10px] tracking-widest uppercase opacity-30">— Palace doctrine</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote + stats */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-8 mt-6 grid lg:grid-cols-[1.6fr_0.9fr] gap-6">
        <div className="border border-[#1C1A18]/10 bg-[#1C1A18] text-[#FDF8F0] p-8 md:p-10">
          <div className="font-[var(--font-cormorant)] text-2xl md:text-3xl leading-tight font-light">
            “We shape our buildings; thereafter they <span className="text-[#C9A86A] italic">shape us.</span>” <span className="opacity-40 text-base">— Churchill, misquoted, still true</span>
          </div>
          <p className="font-mono text-xs leading-6 opacity-40 mt-6 max-w-[60ch]">Most note apps are filing cabinets. Filing cabinets are for taxes. A palace is for living. The difference is whether you want to visit again.</p>
        </div>
        <div className="border border-[#1C1A18]/10 bg-white p-6 flex flex-col justify-center">
          <div className="font-mono text-[10px] tracking-[0.16em] uppercase opacity-40">Palace in numbers</div>
          <div className="mt-4 space-y-4 font-mono text-sm">
            <div className="flex justify-between border-b border-dashed border-black/10 pb-3"><span className="opacity-60">Avg. residence</span><span className="font-medium">14 months</span></div>
            <div className="flex justify-between border-b border-dashed border-black/10 pb-3"><span className="opacity-60">Notes per palace</span><span className="font-medium">4,203 median</span></div>
            <div className="flex justify-between"><span className="opacity-60">Export</span><span className="font-medium">Markdown — forever</span></div>
          </div>
        </div>
      </section>

      {/* Pricing — salon */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-8 mt-6 pb-24">
        <div className="border border-[#1C1A18]/10 bg-white">
          <div className="px-6 md:px-8 py-6 border-b border-[#1C1A18]/10 flex flex-wrap justify-between gap-4 items-center">
            <h2 className="font-[var(--font-cormorant)] text-2xl">Patronage</h2>
            <span className="font-mono text-xs opacity-40">Support a small studio. Keep your palace independent.</span>
          </div>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1C1A18]/10">
            {[
              { name: "Guest", price: "Free", note: "Walk the grounds", feats: ["300 rooms", "Local graph", "One palace"] },
              { name: "Resident", price: "$12", note: "Most take residence here", feats: ["Unlimited rooms", "Synced across devices", "Private publishing", "Daily walk"], featured: true },
              { name: "Benefactor", price: "$28", note: "For houses with many heirs", feats: ["Everything in Resident", "Shared palaces", "Archivist on call", "Fund the commons"] },
            ].map((p) => (
              <div key={p.name} className={`p-6 md:p-8 flex flex-col ${p.featured ? "bg-[#FDF8F0]" : ""}`}>
                {p.featured && <span className="self-start bg-[#6B2D2E] text-white px-2 py-1 font-mono text-[10px] tracking-[0.14em] uppercase mb-3">Most chosen</span>}
                <div className="font-mono text-[11px] tracking-[0.14em] uppercase opacity-40">{p.name}</div>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="font-[var(--font-cormorant)] text-4xl">{p.price}</span>
                  <span className="font-mono text-xs opacity-40">/mo</span>
                </div>
                <div className="font-mono text-xs opacity-50">{p.note}</div>
                <ul className="mt-6 space-y-2 font-mono text-xs opacity-70">
                  {p.feats.map((f) => (
                    <li key={f} className="flex gap-2"><span className="text-[#C9A86A]">—</span>{f}</li>
                  ))}
                </ul>
                <a href="#" className={`mt-6 text-center py-3 font-mono text-xs tracking-[0.14em] uppercase border ${p.featured ? "bg-[#1C1A18] text-white border-[#1C1A18] hover:bg-[#6B2D2E]" : "border-[#1C1A18]/15 hover:bg-[#1C1A18] hover:text-white"} transition-colors`}>Choose {p.name}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
