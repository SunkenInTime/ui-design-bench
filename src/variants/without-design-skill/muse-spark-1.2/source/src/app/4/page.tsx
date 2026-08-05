import Link from "next/link";

export default function PageFour() {
  return (
    <div className="min-h-screen bg-[#f4f4f0] text-black selection:bg-black selection:text-white">
      {/* strict grid bg */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#f4f4f0]" />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
      </div>

      {/* Top bar — brutal */}
      <div className="sticky top-0 z-20 bg-black text-white">
        <div className="max-w-[1180px] mx-auto px-6 h-12 flex items-center justify-between border-b-4 border-[#ff3b30]">
          <div className="flex items-center gap-6">
            <span className="font-mono text-sm font-bold tracking-tight">SYNAPSE — 04 / SYSTEM</span>
            <span className="hidden md:inline text-xs font-mono px-2 py-1 bg-[#ff3b30] text-white">BRUTALIST EDITION</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 font-mono text-xs">
            <a href="#system" className="hover:underline underline-offset-4">[ SYSTEM ]</a>
            <a href="#specs" className="hover:underline underline-offset-4">[ SPECS ]</a>
            <a href="#pricing" className="hover:underline underline-offset-4">[ PRICING ]</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/" className="hidden sm:inline font-mono text-xs border border-white px-3 py-1.5 hover:bg-white hover:text-black transition-colors">HUB ↗</Link>
            <a href="#" className="font-mono text-xs bg-white text-black px-4 py-1.5 font-bold hover:bg-zinc-100">GET ACCESS</a>
          </div>
        </div>
        <div className="bg-[#ff3b30] text-white text-center py-1 font-mono text-[11px] tracking-[0.16em] uppercase">
          Local-first · No subscriptions for sync · Export or die · 100% markdown
        </div>
      </div>

      {/* Hero — massive type */}
      <section className="max-w-[1180px] mx-auto px-6 pt-10 pb-8">
        <div className="border-[3px] border-black bg-white">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-6 sm:p-10 border-b lg:border-b-0 lg:border-r-[3px] border-black">
              <div className="inline-flex items-center gap-2 font-mono text-xs">
                <span className="px-2 py-1 bg-black text-white">SYNAPSE SYSTEM</span>
                <span className="px-2 py-1 border-2 border-black">EST. 2026</span>
                <span className="px-2 py-1 bg-[#ff3b30] text-white">BETA</span>
              </div>

              <h1 className="mt-6 font-black leading-[0.85] tracking-[-0.04em] uppercase">
                <span className="block text-[44px] sm:text-[60px] lg:text-[72px]">SECOND</span>
                <span className="block text-[44px] sm:text-[60px] lg:text-[72px] bg-black text-white px-2 -rotate-1 inline-block">BRAIN.</span>
                <span className="block text-[36px] sm:text-[44px] lg:text-[52px] mt-1">WITH RULES.</span>
              </h1>

              <p className="mt-5 text-sm leading-6 max-w-[520px] border-l-4 border-black pl-4 font-medium">
                Not a playground. A system. Capture → Link → Retrieve. No magic AI, no vague “second brain” mysticism.
                Just a strict, fast, predictable tool you control.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="border-2 border-black p-3 bg-[#f4f4f0]">
                  <div className="font-mono text-xs font-bold">01</div>
                  <div className="text-xs font-mono leading-tight mt-1">CAPTURE IN 200MS</div>
                </div>
                <div className="border-2 border-black p-3 bg-white">
                  <div className="font-mono text-xs font-bold">02</div>
                  <div className="text-xs font-mono leading-tight mt-1">LINK WITH [[ ]]</div>
                </div>
                <div className="border-2 border-black p-3 bg-[#ff3b30] text-white">
                  <div className="font-mono text-xs font-bold">03</div>
                  <div className="text-xs font-mono leading-tight mt-1">RECALL ON TIME</div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <a href="#" className="flex-1 sm:flex-none px-6 py-3 bg-black text-white font-mono text-sm font-bold text-center border-2 border-black hover:bg-zinc-900">START — $0</a>
                <a href="#" className="flex-1 sm:flex-none px-6 py-3 bg-white text-black font-mono text-sm font-bold text-center border-2 border-black hover:bg-zinc-50">READ MANUAL</a>
              </div>

              <div className="mt-4 font-mono text-xs">▸ 12,400 SYSTEMS DEPLOYED · 99.9% UPTIME · 0 TRACKERS</div>
            </div>

            {/* spec sheet mock */}
            <div className="bg-[#f4f4f0] p-6 sm:p-8">
              <div className="bg-white border-2 border-black shadow-[8px_8px_0px_#000]">
                <div className="h-9 border-b-2 border-black flex items-center justify-between px-3 bg-black text-white font-mono text-xs">
                  <span>SPECIMEN: DAILY NOTE_2026-08-05.md</span>
                  <span className="size-2 bg-[#ff3b30] animate-pulse" />
                </div>
                <div className="p-5">
                  <div className="font-mono text-xs tracking-widest uppercase text-[#ff3b30] font-bold">Field notes</div>
                  <h3 className="mt-2 font-black text-lg leading-tight uppercase">How to stop hoarding and start linking</h3>
                  <div className="mt-3 space-y-2 font-mono text-xs leading-5">
                    <div className="border-l-2 border-black pl-3">RULE: Every note must link to one existing note or it is deleted in 7 days.</div>
                    <div className="bg-[#f4f4f0] border-2 border-black p-2.5">
                      <div className="font-bold">BACKLINKS (3)</div>
                      <div className="mt-1 flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-black text-white">[[ inbox ]]</span>
                        <span className="px-2 py-1 border-2 border-black bg-white">[[ zettel ]]</span>
                        <span className="px-2 py-1 bg-[#ff3b30] text-white">+ ADD</span>
                      </div>
                    </div>
                    <div className="flex gap-2 pt-2 border-t-2 border-black">
                      <span className="px-2 py-1 bg-black text-white font-bold">ENCRYPTED</span>
                      <span className="px-2 py-1 border-2 border-black">OFFLINE</span>
                      <span className="ml-auto font-bold">144 WORDS</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 font-mono text-xs font-bold">
                <div className="border-2 border-black bg-[#ff3b30] text-white p-3 text-center">NO AI REQUIRED</div>
                <div className="border-2 border-black bg-white p-3 text-center">100% YOUR FILES</div>
              </div>
            </div>
          </div>

          <div className="border-t-[3px] border-black grid grid-cols-2 md:grid-cols-4 divide-x-[3px] divide-black font-mono text-xs font-bold bg-[#f4f4f0]">
            <div className="p-3 text-center">42MS SEARCH</div>
            <div className="p-3 text-center bg-black text-white">LOCAL-FIRST</div>
            <div className="p-3 text-center">E2E ENCRYPTED</div>
            <div className="p-3 text-center bg-[#ff3b30] text-white">NO CLOUD LOCK</div>
          </div>
        </div>
      </section>

      {/* System */}
      <section id="system" className="max-w-[1180px] mx-auto px-6 pb-8">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { n: "SYSTEM 01", t: "STRICT CAPTURE", d: "Press C. No title dialog. No template theater. A timestamp, a block, a cursor. Write or leave.", accent: "bg-white" },
            { n: "SYSTEM 02", t: "BRUTAL LINKS", d: "[[ links are mandatory. Orphan notes auto-archive in 7 days. The graph rewards connection, not hoarding.", accent: "bg-[#f4f4f0]" },
            { n: "SYSTEM 03", t: "TIMED RECALL", d: "Spaced repetition without the app-y gloss. Plain SM-2, runs offline, shows exactly 5 notes daily.", accent: "bg-[#ff3b30] text-white border-[#ff3b30]" },
          ].map((f) => (
            <div key={f.n} className={`border-[3px] border-black p-6 ${f.accent}`}>
              <div className="font-mono text-xs font-bold tracking-widest">{f.n}</div>
              <h3 className="mt-2 font-black text-lg leading-none">{f.t}</h3>
              <p className={`mt-3 text-sm leading-6 font-mono ${f.accent.includes("ff3b") ? "text-white/90" : "text-zinc-700"}`}>{f.d}</p>
              <div className={`mt-4 h-1 w-12 ${f.accent.includes("ff3b") ? "bg-white" : "bg-black"}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Specs table */}
      <section id="specs" className="max-w-[1180px] mx-auto px-6 pb-8">
        <div className="border-[3px] border-black bg-white overflow-hidden">
          <div className="bg-black text-white px-4 py-3 flex items-center justify-between">
            <span className="font-mono text-sm font-bold tracking-widest">TECHNICAL SPECIFICATIONS — V2.4</span>
            <span className="font-mono text-xs hidden sm:inline">PREPARED FOR SYSTEMS THINKERS</span>
          </div>
          <div className="grid md:grid-cols-2 divide-y-[3px] md:divide-y-0 md:divide-x-[3px] divide-black">
            <div className="divide-y-2 divide-black">
              {[
                { k: "STORAGE", v: "Plain Markdown + SQLite · Git history" },
                { k: "SEARCH", v: "Rust (ripgrep) · 42ms / 50k notes" },
                { k: "SYNC", v: "CRDT · No server needed (optional relay $8/mo)" },
              ].map((r) => (
                <div key={r.k} className="grid grid-cols-[120px_1fr] font-mono text-xs">
                  <div className="p-3 font-bold bg-[#f4f4f0] border-r-2 border-black">{r.k}</div>
                  <div className="p-3">{r.v}</div>
                </div>
              ))}
            </div>
            <div className="p-6 bg-[#f4f4f0]">
              <div className="font-mono text-xs font-bold tracking-widest">BENCHMARK: 50,000 NOTES</div>
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div className="border-2 border-black bg-white p-3">
                  <div className="font-black text-lg">0.04s</div>
                  <div className="font-mono text-[10px]">QUERY</div>
                </div>
                <div className="border-2 border-black bg-black text-white p-3">
                  <div className="font-black text-lg">60FPS</div>
                  <div className="font-mono text-[10px]">GRAPH</div>
                </div>
                <div className="border-2 border-black bg-[#ff3b30] text-white p-3">
                  <div className="font-black text-lg">0</div>
                  <div className="font-mono text-[10px]">TRACKERS</div>
                </div>
              </div>
              <div className="mt-4 font-mono text-xs">▸ Source available. Read the manual before emailing support.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-[1180px] mx-auto px-6 pb-12">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border-[3px] border-black bg-white p-6">
            <div className="font-mono text-xs font-bold">TIER 01 — FREE</div>
            <div className="text-4xl font-black mt-2">$0</div>
            <div className="font-mono text-xs mt-2">UNLIMITED NOTES · LOCAL ONLY</div>
            <ul className="mt-4 space-y-1 font-mono text-xs list-disc list-inside">
              <li>Markdown files</li>
              <li>Graph + queries</li>
              <li>Export anytime</li>
            </ul>
            <a href="#" className="mt-6 block text-center py-2 border-2 border-black font-mono text-xs font-bold hover:bg-black hover:text-white transition-colors">SELECT</a>
          </div>

          <div className="border-[3px] border-black bg-black text-white p-6 relative">
            <div className="absolute -top-3 left-6 bg-[#ff3b30] text-white font-mono text-xs font-bold px-2 py-1">POPULAR — PRO</div>
            <div className="font-mono text-xs font-bold text-[#ff3b30]">TIER 02 — PRO</div>
            <div className="text-4xl font-black mt-2">$8<span className="text-lg font-mono font-normal">/mo</span></div>
            <div className="font-mono text-xs mt-2 text-white/70">SYNC + PUBLISH · E2E</div>
            <ul className="mt-4 space-y-1 font-mono text-xs list-disc list-inside text-white/90">
              <li>Encrypted relay</li>
              <li>Publish to URL</li>
              <li>Priority manual</li>
            </ul>
            <a href="#" className="mt-6 block text-center py-2 bg-white text-black font-mono text-xs font-bold border-2 border-white hover:bg-zinc-100">SELECT</a>
          </div>

          <div className="border-[3px] border-black bg-[#ff3b30] text-white p-6">
            <div className="font-mono text-xs font-bold">TIER 03 — TEAM</div>
            <div className="text-4xl font-black mt-2">$18<span className="text-lg font-mono font-normal">/mo</span></div>
            <div className="font-mono text-xs mt-2 text-white/90">SHARED GRAPH · 5 SEATS</div>
            <ul className="mt-4 space-y-1 font-mono text-xs list-disc list-inside">
              <li>Shared vault</li>
              <li>Permissions</li>
              <li>On-prem option</li>
            </ul>
            <a href="#" className="mt-6 block text-center py-2 bg-black text-white font-mono text-xs font-bold border-2 border-black hover:bg-zinc-900">SELECT</a>
          </div>
        </div>

        <div className="mt-6 border-[3px] border-black bg-white p-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <span className="font-bold">▸ NOTION IS A DATABASE. OBSIDIAN IS A FOLDER. SYNAPSE IS A SYSTEM.</span>
          <span className="hidden sm:inline text-zinc-600">Questions? Read the manual first.</span>
        </div>
      </section>

      <footer className="bg-black text-white">
        <div className="max-w-[1180px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs">
          <span>© 2026 SYNAPSE — 04 SYSTEM · BUILT ON RULES, NOT VIBES</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-[#ff3b30]">MANUAL</a>
            <a href="#" className="hover:text-[#ff3b30]">CHANGELOG</a>
            <Link href="/" className="hover:text-[#ff3b30]">HUB</Link>
          </span>
        </div>
        <div className="pb-24" />
      </footer>
    </div>
  );
}
