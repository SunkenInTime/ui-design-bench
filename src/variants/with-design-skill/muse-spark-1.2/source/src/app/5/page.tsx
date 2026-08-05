"use client";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import { useState, useEffect } from "react";

const serif = Instrument_Serif({ subsets: ["latin"], variable: "--font-serif", weight: "400" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export default function Page5() {
  const [q, setQ] = useState("");
  const placeholder = "Ask your past self…";
  const [ph, setPh] = useState("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setPh(placeholder.slice(0, i + 1));
      i = (i + 1) % (placeholder.length + 12);
      if (i === 0) setPh("");
    }, 120);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`${serif.variable} ${sans.variable} ${mono.variable} min-h-screen bg-[#FAF9F7] text-[#1A1A1A] selection:bg-[#1A1A1A]/10`}>
      {/* hairline nav */}
      <nav className="sticky top-0 z-40 bg-[#FAF9F7]/80 backdrop-blur-xl border-b border-[#1A1A1A]/5">
        <div className="max-w-[1100px] mx-auto px-6 h-[52px] flex items-center justify-between">
          <span className="font-[var(--font-serif)] text-[20px] tracking-tight">afterthought</span>
          <div className="hidden md:flex items-center gap-6 font-mono text-[11px] tracking-[0.14em] uppercase opacity-40">
            <a href="#" className="hover:opacity-80">Philosophy</a>
            <a href="#" className="hover:opacity-80">Practice</a>
            <a href="#" className="hover:opacity-80">Pricing</a>
          </div>
          <a href="#" className="font-mono text-xs tracking-[0.12em] uppercase border border-[#1A1A1A] px-4 py-2 hover:bg-[#1A1A1A] hover:text-white transition-colors">Begin — free</a>
        </div>
      </nav>

      {/* Hero — breathing */}
      <section className="max-w-[1100px] mx-auto px-6 pt-14 md:pt-20 pb-12">
        <div className="max-w-[760px] mx-auto text-center">
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase opacity-30">A quiet second brain — no feeds, no badges, no noise</div>
          <h1 className="font-[var(--font-serif)] text-[44px] md:text-[64px] leading-[0.9] tracking-[-0.03em] mt-6">
            Less <br />
            <span className="italic">is</span> the <br />
            whole point.
          </h1>
          <p className="font-[var(--font-sans)] text-[15px] leading-7 opacity-50 mt-6 max-w-[44ch] mx-auto">
            Afterthought is the note app that disappears. One cursor. One thought at a time. Links form only when you mean them. The rest is just paper and breath.
          </p>

          {/* search - the only UI */}
          <div className="mt-10 max-w-[520px] mx-auto">
            <div className="relative border border-[#1A1A1A]/10 bg-white rounded-full flex items-center px-2 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
              <span className="w-8 h-8 rounded-full bg-[#1A1A1A] grid place-items-center text-white text-xs ml-1">⌕</span>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={ph}
                className="flex-1 bg-transparent outline-none px-4 font-[var(--font-sans)] text-sm placeholder:opacity-30"
              />
              <span className="hidden sm:inline font-mono text-[10px] tracking-widest uppercase opacity-30 pr-4">↵ to think</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-4 font-mono text-[11px]">
              <span className="opacity-30 tracking-wide">Try</span>
              <button onClick={() => setQ("what did I learn about attention?")} className="border border-[#1A1A1A]/10 bg-white px-3 py-1 rounded-full hover:border-[#1A1A1A]/20 transition-colors">what did I learn about attention?</button>
              <button onClick={() => setQ("notes on Kyoto")} className="border border-[#1A1A1A]/10 bg-white px-3 py-1 rounded-full hover:border-[#1A1A1A]/20 transition-colors">notes on Kyoto</button>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="w-px h-12 bg-gradient-to-b from-[#1A1A1A]/15 to-transparent" />
          </div>
        </div>
      </section>

      {/* Paper stack - editorial quiet */}
      <section className="max-w-[1100px] mx-auto px-6">
        <div className="bg-white border border-[#1A1A1A]/5 rounded-[20px] overflow-hidden grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 md:p-10">
            <div className="font-mono text-[10px] tracking-[0.16em] uppercase opacity-30">A single note — as it actually looks</div>
            <div className="mt-6 border border-[#1A1A1A]/5 rounded-xl p-6 bg-[#FAF9F7]">
              <div className="font-mono text-[11px] tracking-widest uppercase opacity-30">2024.11.12 — 07:42</div>
              <h3 className="font-[var(--font-serif)] text-2xl leading-tight mt-3">On attention as a material</h3>
              <p className="font-[var(--font-sans)] text-sm leading-6 opacity-60 mt-3">Attention is not a resource to be managed. It&apos;s a material to be shaped — like clay. The tool should not demand it; it should protect it.</p>
              <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
                <span className="bg-[#1A1A1A] text-white px-2 py-1 rounded-full">[[ clay ]]</span>
                <span className="border border-[#1A1A1A]/10 px-2 py-1 rounded-full">[[ craft & attention ]]</span>
                <span className="border border-[#1A1A1A]/10 px-2 py-1 rounded-full opacity-60">+ 2 unlinked mentions</span>
              </div>
              <div className="mt-6 pt-4 border-t border-dashed border-[#1A1A1A]/10 flex justify-between font-mono text-[11px] opacity-40">
                <span>Linked from 4 notes</span>
                <span>Edited 3h ago</span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3 font-mono text-xs opacity-40">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Autosaved locally — synced when you&apos;re ready
            </div>
          </div>

          <div className="bg-[#1A1A1A] text-[#FAF9F7] p-8 md:p-10 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-[#1A1A1A]">
            <div className="font-mono text-[10px] tracking-[0.16em] uppercase opacity-40">Principles</div>
            <ul className="mt-6 space-y-6">
              {[
                ["01", "No inbox", "There is no inbox to clear. Capture goes where it belongs, or it gently disappears."],
                ["02", "No streaks", "We don’t count your days. The garden grows whether you water it or not."],
                ["03", "No lock-in", "Markdown files in a folder you own. Leave anytime. We’ll help you pack."],
              ].map(([n, t, d]) => (
                <li key={n} className="flex gap-4">
                  <span className="font-mono text-xs opacity-30 mt-0.5">{n}</span>
                  <div>
                    <div className="font-[var(--font-sans)] font-medium text-sm">{t}</div>
                    <div className="font-[var(--font-sans)] text-sm leading-6 opacity-50 mt-1">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Whisper features */}
      <section className="max-w-[1100px] mx-auto px-6 mt-6 grid md:grid-cols-3 gap-4">
        {[
          { k: "Capture", d: "One shortcut. No modal. It just appears where your cursor is — as if the paper was already there." },
          { k: "Link", d: "Type [[. That’s it. No autocomplete shouting. Quiet suggestion, only if you pause." },
          { k: "Recall", d: "Search is forgiving, offline, and fast. It finds “Kyoto garden note from spring” even when you don’t." },
        ].map((f) => (
          <div key={f.k} className="bg-white border border-[#1A1A1A]/5 rounded-2xl p-6">
            <div className="font-[var(--font-serif)] text-lg">{f.k}</div>
            <p className="font-[var(--font-sans)] text-sm leading-6 opacity-50 mt-2">{f.d}</p>
          </div>
        ))}
      </section>

      {/* Quote */}
      <section className="max-w-[800px] mx-auto px-6 mt-12 text-center pb-8">
        <div className="font-[var(--font-serif)] text-2xl md:text-3xl leading-tight opacity-80">
          “It’s the only app that <span className="italic">lowers</span> my heart rate.”
        </div>
        <div className="font-mono text-xs opacity-30 mt-3 tracking-wide">— Rin, researcher • 3 years, 9,400 notes</div>
      </section>

      {/* Pricing — quiet */}
      <section className="max-w-[1100px] mx-auto px-6 pb-24">
        <div className="bg-white border border-[#1A1A1A]/5 rounded-[20px] overflow-hidden">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1A1A1A]/5">
            {[
              { name: "Paper", price: "Free", note: "For trying stillness", feats: ["400 notes", "Local only", "No sync"] },
              { name: "Steady", price: "$8", note: "Most stay here", feats: ["Unlimited", "Sync + history", "Publish quietly"], featured: true },
              { name: "Patron", price: "$16", note: "Support the quiet", feats: ["Everything in Steady", "Share with one", "Fund the work"] },
            ].map((p) => (
              <div key={p.name} className={`p-7 flex flex-col ${p.featured ? "bg-[#1A1A1A] text-white" : ""}`}>
                <div className="font-mono text-[11px] tracking-[0.14em] uppercase opacity-40">{p.name}</div>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className={`font-[var(--font-serif)] text-4xl ${p.featured ? "text-white" : ""}`}>{p.price}</span>
                  <span className="font-mono text-xs opacity-40">/mo</span>
                </div>
                <div className="font-mono text-xs opacity-40">{p.note}</div>
                <ul className="mt-6 space-y-2 font-mono text-xs opacity-60">
                  {p.feats.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span>—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#" className={`mt-6 text-center py-3 rounded-full font-mono text-xs tracking-[0.12em] uppercase border ${p.featured ? "bg-white text-[#1A1A1A] border-white hover:bg-[#FAF9F7]" : "border-[#1A1A1A]/10 hover:bg-[#1A1A1A] hover:text-white"} transition-colors`}>Choose {p.name}</a>
              </div>
            ))}
          </div>
          <div className="px-6 py-4 bg-[#FAF9F7] border-t border-[#1A1A1A]/5 text-center font-mono text-xs opacity-30">Cancel in one click. Export is a folder full of .md files. We mean it when we say quiet.</div>
        </div>
      </section>

    </div>
  );
}
