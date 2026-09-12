import { Newsreader, Instrument_Sans, Fragment_Mono } from "next/font/google";

const serif = Newsreader({ subsets: ["latin"], variable: "--font-serif", style: ["normal", "italic"] });
const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-sans" });
const mono = Fragment_Mono({ subsets: ["latin"], variable: "--font-mono", weight: "400" });

export default function Page2() {
  return (
    <div className={`${serif.variable} ${sans.variable} ${mono.variable} min-h-screen bg-[#0A120F] text-[#F0EDE5] selection:bg-[#D6FF5C]/30`}>
      {/* nav */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl bg-[#0A120F]/80 border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 h-[64px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#D6FF5C] grid place-items-center">
              <span className="w-2 h-2 bg-[#0A120F] rounded-full animate-pulse" />
            </div>
            <span className="font-[var(--font-serif)] italic text-lg tracking-tight">rhizome</span>
            <span className="hidden md:inline font-mono text-[10px] tracking-[0.18em] uppercase opacity-40 border border-white/10 rounded-full px-2 py-1">Second brain — living system</span>
          </div>
          <div className="hidden md:flex items-center gap-6 font-mono text-[11px] tracking-[0.14em] uppercase opacity-60">
            <a href="#" className="hover:opacity-100 transition-opacity">Garden</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Mycelium</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Library</a>
          </div>
          <a href="#" className="bg-[#D6FF5C] text-[#0A120F] px-5 py-2.5 rounded-full font-medium text-sm hover:bg-[#E4FF8A] transition-colors">Enter garden →</a>
        </div>
      </nav>

      {/* Hero with mycelium canvas */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-8 pt-10 md:pt-14">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D6FF5C]" />
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase opacity-80">2,847 thoughts • 12,403 connections • alive</span>
            </div>
            <h1 className="font-[var(--font-serif)] text-[46px] md:text-[68px] leading-[0.88] tracking-[-0.03em] mt-6">
              Ideas don&apos;t <br />
              <span className="italic font-light text-[#D6FF5C]">grow</span> in lists. <br />
              They grow <br />
              like forests.
            </h1>
            <p className="font-[var(--font-sans)] text-[17px] leading-7 opacity-60 mt-6 max-w-[48ch]">
              Rhizome is a second brain modeled on mycelium — underground, interconnected, resurrecting old thoughts when the conditions are right. Nothing is ever truly forgotten.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#" className="bg-white text-[#0A120F] px-7 py-3.5 rounded-full font-medium hover:bg-[#D6FF5C] transition-colors">Start growing — free</a>
              <a href="#" className="border border-white/15 px-7 py-3.5 rounded-full font-medium hover:bg-white/5 transition-colors">Watch 60s tour</a>
            </div>
            <div className="flex gap-8 mt-10 border-t border-white/10 pt-6">
              {[
                ["47d", "avg thought lifespan before reconnection"],
                ["Zero", "folders. Only trails."],
                ["Local", "first, encrypted always"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="font-[var(--font-serif)] text-xl leading-none">{k}</div>
                  <div className="font-mono text-[10px] tracking-[0.14em] uppercase opacity-40 mt-1 leading-tight">{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mycelium visual */}
          <div className="relative bg-[#121F18] rounded-[24px] border border-white/10 overflow-hidden p-4 md:p-6 min-h-[520px] flex flex-col">
            {/* simulated graph with SVG */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase opacity-40">Mycelial map — live</span>
              <span className="font-mono text-[10px] bg-[#D6FF5C] text-[#0A120F] px-2 py-1 rounded-full">● 12 active trails</span>
            </div>

            <div className="relative flex-1 mt-4 rounded-2xl bg-[#0A120F] border border-white/5 overflow-hidden grid place-items-center">
              <svg viewBox="0 0 400 360" className="w-full h-full absolute inset-0">
                {/* threads */}
                <g stroke="rgba(214,255,92,0.18)" strokeWidth="1.2" fill="none">
                  <path d="M80 120 C140 80, 160 160, 200 140 S300 100,320 60" />
                  <path d="M80 120 C100 180, 140 220, 200 140" />
                  <path d="M200 140 C220 200, 260 240, 280 280" />
                  <path d="M200 140 C180 100, 120 60, 60 90" />
                  <path d="M60 90 C80 60, 100 40, 140 50" />
                  <path d="M320 60 C340 100, 300 160, 280 280" />
                  <path d="M140 50 C160 90, 180 110, 200 140" />
                  <path d="M280 280 C240 300, 160 300, 120 260" />
                  <path d="M120 260 C100 200, 80 140, 80 120" />
                </g>
                {/* pulsing trails */}
                <g stroke="#D6FF5C" strokeWidth="1.6" fill="none" opacity="0.9">
                  <path d="M60 90 C110 70, 170 110, 200 140" strokeDasharray="4 6" />
                </g>
              </svg>

              {/* nodes */}
              {[
                { x: "15%", y: "24%", l: "On forgetting", s: "12 links" },
                { x: "35%", y: "14%", l: "The memory palace", s: "is burning" },
                { x: "50%", y: "38%", l: "How I take notes", s: "central • 342d" },
                { x: "80%", y: "16%", l: "Kyoto garden", s: "7 links" },
                { x: "70%", y: "78%", l: "Draft: after language", s: "growing" },
                { x: "30%", y: "72%", l: "Sparrows", s: "3 links" },
              ].map((n) => (
                <div
                  key={n.l}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: n.x, top: n.y }}
                >
                  <div className={`px-3 py-2 rounded-full border text-xs leading-tight backdrop-blur ${n.l === "How I take notes" ? "bg-[#D6FF5C] text-[#0A120F] border-[#D6FF5C] font-medium shadow-[0_0_24px_rgba(214,255,92,0.6)]" : "bg-white/10 border-white/15 text-white/90"}`}>
                    <div className="font-[var(--font-sans)] whitespace-nowrap">{n.l}</div>
                    <div className="font-mono text-[10px] opacity-60 whitespace-nowrap">{n.s}</div>
                  </div>
                </div>
              ))}

              <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                <div className="flex-1 bg-white/5 backdrop-blur border border-white/10 rounded-full px-3 py-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[10px] tracking-widest uppercase opacity-60">Synaptic drift: +14 today</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-4">
              {[
                ["Spore", "Quick capture"],
                ["Hypha", "Daily braid"],
                ["Bloom", "Publish"],
              ].map(([k, v]) => (
                <div key={k} className="bg-[#0A120F] border border-white/10 rounded-2xl p-3">
                  <div className="font-mono text-[10px] tracking-[0.14em] uppercase opacity-40">{k}</div>
                  <div className="font-[var(--font-sans)] text-sm">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* philosophy strip */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-8 mt-8">
        <div className="rounded-[24px] bg-[#D6FF5C] text-[#0A120F] p-6 md:p-10 grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
          <div className="font-[var(--font-serif)] text-[44px] leading-none">“</div>
          <p className="font-[var(--font-serif)] text-xl md:text-2xl leading-snug">
            You don&apos;t organize a forest. You tend to it. Some paths appear only when you walk them <span className="underline decoration-[#0A120F]/20 underline-offset-4">a second time.</span>
          </p>
          <div className="font-mono text-xs leading-relaxed opacity-60">
            Field observation #142<br />
            Compiled over 4 years<br />
            of note-gardening
          </div>
        </div>
      </section>

      {/* three ecologies */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-8 mt-6 grid md:grid-cols-3 gap-4">
        {[
          {
            title: "Capture without friction",
            desc: "Highlight, dictate, or dump. Rhizome shards them into spores that germinate in context — not in an inbox you’ll never open.",
            meta: "01 — Spore stage",
            color: "bg-[#1A2E22]",
          },
          {
            title: "Links grow underneath",
            desc: "We surface unlinked mentions and quiet bridges every morning. Your job is to notice — not to tag.",
            meta: "02 — Mycelial stage",
            color: "bg-[#1F3020]",
          },
          {
            title: "Resurface at the right season",
            desc: "Spaced revival brings back ideas when they’re ripening, not when you search. Forgetting is part of the design.",
            meta: "03 — Bloom stage",
            color: "bg-[#1A2E22]",
          },
        ].map((c) => (
          <div key={c.title} className={`${c.color} rounded-[24px] border border-white/10 p-6 md:p-7 flex flex-col`}>
            <div className="font-mono text-[10px] tracking-[0.16em] uppercase opacity-40">{c.meta}</div>
            <h3 className="font-[var(--font-serif)] text-xl leading-tight mt-3">{c.title}</h3>
            <p className="font-[var(--font-sans)] text-sm leading-6 opacity-60 mt-3">{c.desc}</p>
            <div className="mt-6 flex gap-2 font-mono text-[10px]">
              <span className="px-2 py-1 rounded-full bg-white/10 border border-white/10">Try →</span>
            </div>
          </div>
        ))}
      </section>

      {/* pricing */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-8 mt-6 pb-24">
        <div className="rounded-[24px] border border-white/10 overflow-hidden">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { name: "Seed", price: "Free", note: "One garden, personal", feats: ["500 spores", "Local graph", "Daily bloom (1/day)"] },
              { name: "Canopy", price: "$9", note: "Most tenders choose this", feats: ["Unlimited spores", "Mycelial search", "Revival engine", "Publish glades"], featured: true },
              { name: "Old Growth", price: "$18", note: "For forests & teams", feats: ["Everything in Canopy", "Shared mycelium", "API & backups", "Conservation support"] },
            ].map((p) => (
              <div key={p.name} className={`p-6 md:p-8 ${p.featured ? "bg-white text-[#0A120F]" : "bg-[#0F1C14]"} flex flex-col`}>
                {p.featured && <span className="self-start bg-[#0A120F] text-white text-[10px] tracking-[0.14em] uppercase px-2 py-1 rounded-full mb-3">Most alive</span>}
                <div className="font-mono text-[11px] tracking-[0.14em] uppercase opacity-60">{p.name}</div>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="font-[var(--font-serif)] text-4xl tracking-tight">{p.price}</span>
                  <span className="font-mono text-xs opacity-60">/mo</span>
                </div>
                <div className="font-mono text-xs opacity-60 mt-1">{p.note}</div>
                <ul className="mt-6 space-y-2 font-mono text-xs opacity-80">
                  {p.feats.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className={p.featured ? "text-[#0A120F]/30" : "text-[#D6FF5C]"}>—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#" className={`mt-6 text-center py-3 rounded-full font-medium text-sm ${p.featured ? "bg-[#0A120F] text-white hover:bg-black" : "bg-white/10 border border-white/15 hover:bg-white hover:text-[#0A120F]"} transition-colors`}>
                  Choose {p.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
