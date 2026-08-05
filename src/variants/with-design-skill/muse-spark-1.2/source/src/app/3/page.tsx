"use client";
import { JetBrains_Mono, Inter, Space_Grotesk } from "next/font/google";
import { useState, useEffect } from "react";

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export default function Page3() {
  const [typed, setTyped] = useState("");
  const full = "How to remember [[Montaigne]] without memorizing — link, don't file.";
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setTyped(full.slice(0, i + 1));
      i++;
      if (i >= full.length) clearInterval(id);
    }, 38);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`${mono.variable} ${sans.variable} ${display.variable} min-h-screen bg-[#F2F0EB] text-[#111111] selection:bg-[#2D5BFF]/20`}>
      {/* top rule */}
      <div className="border-b border-[#111111] bg-[#F2F0EB] sticky top-0 z-40">
        <div className="max-w-[1240px] mx-auto px-5 md:px-6 h-[46px] flex items-center justify-between font-mono text-[11px] tracking-[0.14em] uppercase">
          <div className="flex items-center gap-4">
            <span className="font-bold">FIELD-NOTES™</span>
            <span className="hidden sm:inline opacity-40">Lab notebook — Rev. 3.1 / 2024</span>
            <span className="hidden lg:inline border border-[#111111] px-2 py-1 text-[10px]">SPEC: LOCAL-FIRST • MARKDOWN • 23MS</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden md:inline opacity-60">48,392 notebooks in use</span>
            <a href="#" className="bg-[#111111] text-white px-4 py-2 hover:bg-[#2D5BFF] transition-colors">New notebook →</a>
          </div>
        </div>
      </div>

      {/* grid hero */}
      <section className="max-w-[1240px] mx-auto px-5 md:px-6 pt-6">
        <div className="grid lg:grid-cols-[1.35fr_0.75fr] gap-0 border border-[#111111] bg-white">
          {/* left paper */}
          <div className="p-6 md:p-8 border-r border-[#111111]">
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] uppercase">
              <span className="bg-[#FF3B30] text-white px-2 py-1">Experiment 041</span>
              <span className="opacity-40">Hypothesis: thought is a graph, not a list</span>
            </div>

            <h1 className="font-[var(--font-display)] text-[40px] md:text-[56px] leading-[0.9] tracking-[-0.04em] font-bold mt-5">
              A LAB BOOK
              <br />
              THAT <span className="bg-[#2D5BFF] text-white px-1.5">LINKS</span>
              <br />
              ITSELF.
            </h1>

            <div className="mt-5 grid grid-cols-[80px_1fr] gap-4 font-mono text-xs leading-6 border-t border-[#111111] pt-4">
              <span className="opacity-40 tracking-widest uppercase">Abstract</span>
              <p className="opacity-70 max-w-[48ch]">Field Notes is a second brain for people who think with their hands. Write like you&apos;d write on graph paper — every [[link]] is a live wire to context. Measure twice, remember forever.</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="bg-[#111111] text-white px-6 py-3 font-mono text-xs tracking-[0.12em] uppercase font-bold hover:bg-[#2D5BFF] transition-colors">Start field log — free</a>
              <a href="#" className="border border-[#111111] px-6 py-3 font-mono text-xs tracking-[0.12em] uppercase font-bold hover:bg-[#111111] hover:text-white transition-colors">Read manual (3 min)</a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-0 border border-[#111111] divide-x divide-[#111111] font-mono">
              {[
                ["00.18s", "avg capture"],
                ["100%", "offline"],
                ["↗ 12k", "nodes tested"],
              ].map(([k, v]) => (
                <div key={k} className="p-3 text-center bg-[#F2F0EB]">
                  <div className="font-bold text-sm">{k}</div>
                  <div className="text-[10px] tracking-widest uppercase opacity-60">{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* right editor */}
          <div className="bg-[#111111] text-[#EDE9E3] flex flex-col min-h-[520px]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 font-mono text-[10px] tracking-[0.14em] uppercase">
              <span className="opacity-60">◉ LIVE SHEET — field-notes://today</span>
              <span className="opacity-40">Ln 12, Col 34</span>
            </div>

            <div className="flex-1 p-5 font-mono text-[13px] leading-6">
              <div className="opacity-40">{"// 2024-11-12 — morning sweep"}</div>
              <div className="mt-3">
                <span className="opacity-60">- </span>
                <span>{typed}</span>
                <span className="inline-block w-[7px] h-[14px] bg-[#2D5BFF] translate-y-[2px] ml-0.5 animate-pulse" />
              </div>
              <div className="mt-3 opacity-60">- Thoughts that stick are thoughts that are <span className="text-[#2D5BFF] underline">linked</span> to something tactile.</div>
              <div className="mt-4 border border-[#2D5BFF]/40 bg-[#2D5BFF]/10 p-3 rounded">
                <div className="text-[10px] tracking-[0.14em] uppercase opacity-60">Backlinks — Montaigne (3)</div>
                <div className="mt-2 space-y-1 text-xs">
                  <div>→ <span className="underline">On essay as attempt</span> <span className="opacity-40">— 2d ago</span></div>
                  <div>→ <span className="underline">Ownership vs. access</span> <span className="opacity-40">— 11d ago</span></div>
                  <div className="text-[#2D5BFF]">→ + Create new note “Montaigne — memory”</div>
                </div>
              </div>
              <div className="mt-4 flex gap-2 font-mono text-[10px]">
                <span className="bg-white text-black px-2 py-1">⌘K</span>
                <span className="opacity-40 self-center">to link • </span>
                <span className="bg-white text-black px-2 py-1">#tag</span>
                <span className="opacity-40 self-center">to collect</span>
              </div>
            </div>

            <div className="px-4 py-3 border-t border-white/10 flex justify-between items-center font-mono text-[10px] tracking-widest uppercase">
              <span className="opacity-40">Graph density: ███████░░ 78%</span>
              <span className="bg-[#FF3B30] text-white px-2 py-1">REC ●</span>
            </div>
          </div>
        </div>

        {/* blue callout */}
        <div className="border-x border-b border-[#111111] bg-[#2D5BFF] text-white grid md:grid-cols-[1fr_auto] gap-4 px-6 py-4 items-center">
          <div className="font-mono text-xs tracking-wide">Trusted by researchers at MIT, Stanford, and 400+ labs — because paper never needed a password.</div>
          <div className="flex gap-2 font-mono text-[10px] tracking-widest uppercase">
            <span className="bg-white text-[#2D5BFF] px-3 py-1.5 font-bold">SOC 2 — pending</span>
            <span className="border border-white px-3 py-1.5">E2E</span>
            <span className="border border-white px-3 py-1.5">MD</span>
          </div>
        </div>
      </section>

      {/* features grid */}
      <section className="max-w-[1240px] mx-auto px-5 md:px-6 mt-6">
        <div className="border border-[#111111] bg-white grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#111111]">
          {[
            { n: "01", t: "Graph paper thinking", d: "Canvas is infinite, precise, and snaps to a 4px grid. Draw, write, and connect like you’re at a drafting table.", tag: "CANVAS" },
            { n: "02", t: "Transclusion, not copy", d: "Embed any note inside any other. Edit once, update everywhere. Your thesis lives in five places at once.", tag: "EMBED" },
            { n: "03", t: "Daily sweep protocol", d: "Every morning we surface orphans, unlinked mentions, and stale hypotheses. Five minutes to inbox zero.", tag: "SWEEP" },
          ].map((f) => (
            <div key={f.n} className="p-6">
              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase opacity-40">Unit {f.n}</span>
                <span className="font-mono text-[10px] tracking-widest bg-[#111111] text-white px-2 py-1">{f.tag}</span>
              </div>
              <h3 className="font-[var(--font-display)] font-bold text-[18px] leading-tight mt-3">{f.t}</h3>
              <p className="font-mono text-xs leading-6 opacity-60 mt-2">{f.d}</p>
              <div className="mt-4 h-px bg-[#111111]/10" />
              <div className="mt-4 font-mono text-[11px] flex justify-between opacity-60">
                <span>Fig. {f.n} — schematic</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* big comparison */}
      <section className="max-w-[1240px] mx-auto px-5 md:px-6 mt-6">
        <div className="border border-[#111111] bg-[#111111] text-white p-6 md:p-8 grid md:grid-cols-2 gap-8">
          <div>
            <div className="font-mono text-[10px] tracking-[0.16em] uppercase opacity-40">Not a second brain. A second lab.</div>
            <h2 className="font-[var(--font-display)] text-2xl md:text-3xl leading-tight font-bold mt-3">Your notes should work like your bench — labeled, linkable, reproducible.</h2>
            <div className="mt-6 grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="bg-white text-[#111111] p-3">
                <div className="opacity-40 text-[10px] tracking-widest uppercase">Other apps</div>
                <div className="mt-1">Pretty. Locked. Slow search. Your data held hostage.</div>
              </div>
              <div className="bg-[#2D5BFF] p-3">
                <div className="text-[10px] tracking-widest uppercase opacity-80">Field Notes</div>
                <div className="mt-1 font-bold">Plain text. Local. Instant. Yours after we’re gone.</div>
              </div>
            </div>
          </div>
          <div className="bg-[#F2F0EB] text-[#111111] p-5 font-mono text-xs leading-6 border border-white/20">
            <div className="font-bold tracking-[0.14em] uppercase">Test log — 12k node stress</div>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between border-b border-dashed border-black/15 pb-2"><span className="opacity-60">Graph render</span><span>58 fps</span></div>
              <div className="flex justify-between border-b border-dashed border-black/15 pb-2"><span className="opacity-60">Search (fuzzy)</span><span>23 ms</span></div>
              <div className="flex justify-between border-b border-dashed border-black/15 pb-2"><span className="opacity-60">Cold start</span><span>0.8 s</span></div>
              <div className="flex justify-between"><span className="opacity-60">Bundle</span><span>42 kb</span></div>
            </div>
            <div className="mt-4 bg-[#111111] text-white p-2.5 text-center tracking-widest uppercase">All measurements on M1 Air — reproducible</div>
          </div>
        </div>
      </section>

      {/* pricing lab bench */}
      <section className="max-w-[1240px] mx-auto px-5 md:px-6 mt-6 pb-24">
        <div className="border border-[#111111] bg-white">
          <div className="grid md:grid-cols-[1.1fr_0.9fr_0.9fr] divide-y md:divide-y-0 md:divide-x divide-[#111111]">
            <div className="p-6 md:p-8 bg-[#F2F0EB]">
              <div className="font-mono text-[10px] tracking-[0.16em] uppercase opacity-40">Pricing — bill of materials</div>
              <h3 className="font-[var(--font-display)] font-bold text-2xl mt-3">Pay for steel, not for glitter.</h3>
              <p className="font-mono text-xs leading-6 opacity-60 mt-2">No per-seat nonsense for solo work. No feature gates on graph. We charge for sync and collaboration — the hard parts.</p>
              <ul className="mt-6 font-mono text-xs space-y-2">
                <li>✓ Markdown files you can open in 2050</li>
                <li>✓ Export is one button. No CSV hell.</li>
                <li>✓ Student & researcher discount — email us</li>
              </ul>
            </div>
            {[
              { name: "Solo Bench", price: "$0", note: "Free forever", feats: ["1,000 notes", "1 graph", "Local only"], cta: "Start bench" },
              { name: "Pro Lab", price: "$10", note: "Most labs run this", feats: ["Unlimited", "Sync + history", "Publish"], cta: "Set up lab", featured: true },
            ].map((p) => (
              <div key={p.name} className={`p-6 md:p-8 flex flex-col ${p.featured ? "bg-[#111111] text-white" : ""}`}>
                <div className="font-mono text-[11px] tracking-widest uppercase opacity-60">{p.name}</div>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="font-[var(--font-display)] text-4xl font-bold">{p.price}</span>
                  <span className="font-mono text-xs opacity-60">/mo</span>
                </div>
                <div className="font-mono text-xs opacity-60">{p.note}</div>
                <ul className="mt-5 space-y-2 font-mono text-xs">
                  {p.feats.map((f) => (
                    <li key={f} className="flex gap-2"><span className={p.featured ? "text-[#2D5BFF]" : "text-[#111111]"}>—</span>{f}</li>
                  ))}
                </ul>
                <a href="#" className={`mt-6 text-center py-3 font-mono text-xs tracking-widest uppercase font-bold border ${p.featured ? "bg-[#2D5BFF] border-[#2D5BFF] hover:bg-white hover:text-[#111111]" : "border-[#111111] hover:bg-[#111111] hover:text-white"} transition-colors`}>{p.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
