"use client";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-[#F2F2F0] text-[#0A0A0A] antialiased selection:bg-[#D9FF00] selection:text-black">
      {/* Nav - brutalist */}
      <nav className="sticky top-0 z-40 border-b-[3px] border-black bg-[#F2F2F0]">
        <div className="mx-auto flex h-[64px] max-w-[1280px] items-center justify-between px-6 md:px-8">
          <div className="flex items-center gap-6">
            <Link href="/four" className="flex items-center gap-2">
              <span className="bg-black px-2 py-1 font-mono text-xs font-bold tracking-widest text-[#D9FF00]">INDEX</span>
              <span className="hidden font-mono text-[11px] tracking-widest md:inline">— SECOND BRAIN // RAW</span>
            </Link>
            <div className="hidden items-center gap-1 md:flex">
              <a className="border border-black px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest hover:bg-black hover:text-white" href="#">
                Log
              </a>
              <a className="px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest hover:underline" href="#">
                Graph
              </a>
              <a className="px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest hover:underline" href="#">
                Manual
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden font-mono text-[11px] md:inline">342 NOTES · LOCAL FIRST</span>
            <a href="#" className="border-[2px] border-black bg-[#D9FF00] px-5 py-2 font-mono text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-[#D9FF00]">
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* Hero - sharp, no radius */}
      <section className="mx-auto max-w-[1280px] border-x-[3px] border-black bg-white">
        <div className="grid md:grid-cols-12">
          <div className="border-b-[3px] border-black p-6 md:col-span-7 md:border-b-0 md:border-r-[3px] md:p-8">
            <div className="inline-flex border border-black bg-[#D9FF00] px-2 py-1 font-mono text-[11px] font-bold uppercase tracking-widest">
              v2.4 — Offline · Plaintext · Yours
            </div>
            <h1 className="mt-6 font-mono text-[34px] font-black uppercase leading-[0.9] tracking-[-0.03em] md:text-[44px]">
              A second brain
              <br />
              that doesn&apos;t
              <br />
              <span className="bg-black text-[#D9FF00] px-1">try to be pretty.</span>
            </h1>
            <p className="mt-6 max-w-[42ch] border-l-4 border-[#D9FF00] pl-4 font-mono text-[13px] leading-relaxed">
              Index is a plaintext second brain for rigorous thinkers. No canvas. No AI slop. Just fast capture, hard links, and instant recall.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="border-[2px] border-black bg-black px-7 py-3 font-mono text-xs font-bold uppercase tracking-widest text-white hover:bg-[#D9FF00] hover:text-black">
                Get Index free →
              </a>
              <a href="#" className="border-[2px] border-black bg-white px-7 py-3 font-mono text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white">
                Read manual
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px]">
              <span className="border border-black bg-[#F2F2F0] px-2 py-1">macOS</span>
              <span className="border border-black bg-[#F2F2F0] px-2 py-1">Linux</span>
              <span className="border border-black bg-[#F2F2F0] px-2 py-1">Windows</span>
              <span className="border border-black bg-[#D9FF00] px-2 py-1 font-bold">Plaintext Markdown</span>
            </div>
          </div>

          {/* Terminal preview */}
          <div className="bg-[#0A0A0A] p-4 text-[#D9FF00] md:col-span-5 md:p-6">
            <div className="flex items-center justify-between border border-[#D9FF00]/30 px-3 py-2 font-mono text-[11px]">
              <span>INDEX — LOG.TXT</span>
              <span className="h-2 w-2 bg-[#D9FF00] animate-pulse" />
            </div>
            <div className="mt-3 space-y-2 font-mono text-[12px] leading-relaxed">
              <div className="text-white/50">— 2026-05-14 09:42 —</div>
              <div>
                <span className="text-white/50">$</span> index add “memory palaces work because place encodes context”{" "}
                <span className="bg-[#D9FF00] px-1 text-black">#memory #place</span>
              </div>
              <div className="text-[#D9FF00]/70">→ linked to 3 notes: [[method of loci]] [[spatial recall]] [[urban memory]]</div>
              <div>
                <span className="text-white/50">$</span> index search “what did I note on walking + memory?”
              </div>
              <div className="border border-[#D9FF00]/20 bg-[#D9FF00]/10 p-2 text-white">
                <div className="font-bold">3 results — 0.04s</div>
                <div className="mt-1 space-y-1 text-[#D9FF00]">
                  <div>› 2024-03-12 — Walking as method</div>
                  <div>› 2024-04-01 — Palaces, revisited</div>
                  <div>› 2025-11-09 — City as archive</div>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <span className="text-white/50">$</span>
                <span className="h-4 w-32 bg-white/10" />
                <span className="h-4 w-2 animate-pulse bg-[#D9FF00]" />
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center font-mono">
              <div>
                <div className="text-lg font-bold text-white">0.04s</div>
                <div className="text-[10px] uppercase tracking-widest text-white/50">Search</div>
              </div>
              <div className="border-x border-white/10">
                <div className="text-lg font-bold text-white">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-white/50">Offline</div>
              </div>
              <div>
                <div className="text-lg font-bold text-[#D9FF00]">342</div>
                <div className="text-[10px] uppercase tracking-widest text-white/50">Notes</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 border-t-[3px] border-black font-mono text-[11px] font-bold uppercase tracking-widest">
          <div className="border-r-[3px] border-black bg-[#D9FF00] p-3 text-center">Plaintext</div>
          <div className="border-r-[3px] border-black bg-white p-3 text-center">Local-first</div>
          <div className="border-r-[3px] border-black bg-black p-3 text-center text-white">Encrypted</div>
          <div className="bg-white p-3 text-center">Export anytime</div>
        </div>
      </section>

      {/* Features - 2x2 brutal */}
      <section className="mx-auto max-w-[1280px] border-x-[3px] border-black">
        <div className="grid md:grid-cols-2">
          <div className="border-b-[3px] border-black bg-white p-6 md:border-r-[3px] md:p-7">
            <div className="font-mono text-xs font-black">01 — CAPTURE</div>
            <h3 className="mt-2 font-mono text-[18px] font-black uppercase leading-none">Type. It’s saved. Everywhere.</h3>
            <p className="mt-3 font-mono text-xs leading-relaxed">Hotkey capture from any app. No modals. No AI popups. Text, link, and source in one line.</p>
            <div className="mt-4 border-[2px] border-black bg-[#F2F2F0] p-3 font-mono text-xs">
              <div className="flex justify-between">
                <span>INBOX.TXT</span>
                <span className="bg-black px-1 text-[#D9FF00]">3 new</span>
              </div>
              <div className="mt-2 space-y-1">
                <div>— add [[walking]] as method for remembering</div>
                <div>— clip https://…/palaces → linked</div>
              </div>
            </div>
          </div>
          <div className="border-b-[3px] border-black bg-[#D9FF00] p-6 md:p-7">
            <div className="font-mono text-xs font-black">02 — LINK</div>
            <h3 className="mt-2 font-mono text-[18px] font-black uppercase leading-none">Hard links. No magic.</h3>
            <p className="mt-3 font-mono text-xs leading-relaxed text-black/70">[[double brackets]] create real connections. See backlinks, not “AI suggests.”</p>
            <div className="mt-4 grid grid-cols-2 gap-2 font-mono text-[11px]">
              <div className="border-[2px] border-black bg-white p-2">
                <div className="font-bold">[[memory]]</div>
                <div>← 14 links</div>
              </div>
              <div className="border-[2px] border-black bg-black p-2 text-white">
                <div className="font-bold">[[place]]</div>
                <div className="text-[#D9FF00]">← 9 links</div>
              </div>
            </div>
          </div>
          <div className="border-b-[3px] border-black bg-black p-6 text-white md:border-b-0 md:border-r-[3px] md:p-7">
            <div className="font-mono text-xs font-bold text-[#D9FF00]">03 — RECALL</div>
            <h3 className="mt-2 font-mono text-[18px] font-black uppercase leading-none text-white">Grep your mind.</h3>
            <p className="mt-3 font-mono text-xs leading-relaxed text-white/70">Full-text, tag, and graph search. Instant. No embeddings required, but available if you want them.</p>
            <div className="mt-4 flex gap-2 font-mono text-[11px]">
              <span className="border border-white/20 bg-white/10 px-2 py-1">ripgrep fast</span>
              <span className="bg-[#D9FF00] px-2 py-1 font-bold text-black">0.04s</span>
            </div>
          </div>
          <div className="bg-white p-6 md:p-7">
            <div className="font-mono text-xs font-black">04 — OWN</div>
            <h3 className="mt-2 font-mono text-[18px] font-black uppercase leading-none">Your files. Forever.</h3>
            <p className="mt-3 font-mono text-xs leading-relaxed">Markdown on disk. Git-friendly. No lock-in. `index export --all` gives you everything.</p>
            <img src="https://picsum.photos/seed/index-files/420/140" alt="" className="mt-4 h-24 w-full border-[2px] border-black object-cover grayscale" />
          </div>
        </div>
      </section>

      {/* Specs - card grid not table */}
      <section className="mx-auto max-w-[1280px] border-x-[3px] border-black border-t-[3px] bg-[#F2F2F0] p-6 md:p-8">
        <div className="flex items-baseline justify-between">
          <h2 className="font-mono text-sm font-black uppercase tracking-widest">Spec — No fluff.</h2>
          <span className="border border-black bg-white px-2 py-1 font-mono text-[11px]">v2.4.1 · Changelog →</span>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {[
            { k: "Format", v: "Markdown + YAML", d: "Every note is a file. Edit in any editor." },
            { k: "Sync", v: "Local + E2E", d: "Syncthing or encrypted cloud. Your choice." },
            { k: "Search", v: "0.04s median", d: "ripgrep core. Optional vector index." },
            { k: "Links", v: "342 avg graph", d: "Backlinks, graph view, or just text." },
            { k: "Export", v: "One command", d: "`index export` → zip of all markdown." },
            { k: "License", v: "Buy once", d: "$48. Own the app. No subscription." },
          ].map((s) => (
            <div key={s.k} className="border-[2px] border-black bg-white p-4">
              <div className="font-mono text-[10px] uppercase tracking-widest">{s.k}</div>
              <div className="mt-1 font-mono text-sm font-black uppercase">{s.v}</div>
              <div className="mt-1 font-mono text-[11px] leading-relaxed text-black/60">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="mx-auto max-w-[1280px] border-x-[3px] border-t-[3px] border-black bg-black px-6 py-8 text-white md:px-8">
        <div className="grid gap-6 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#D9FF00]">Why rigour matters</div>
            <blockquote className="mt-3 font-mono text-[18px] font-bold uppercase leading-tight">“I don’t want my notes to be smart. I want them to be findable. Index is the first tool that respects that.”</blockquote>
            <div className="mt-4 font-mono text-xs text-white/60">— Lena K., researcher · 1,800 notes over 4 years</div>
          </div>
          <div className="md:col-span-4">
            <div className="border-[2px] border-[#D9FF00] bg-[#D9FF00] p-4 text-black">
              <div className="font-mono text-xs font-black uppercase">Buy once — $48</div>
              <div className="font-mono text-[11px]">Own it forever. No subscription. 30-day refund.</div>
              <a href="#" className="mt-3 block border-[2px] border-black bg-black py-2 text-center font-mono text-xs font-bold uppercase text-white">
                Buy Index →
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-[1280px] border-x-[3px] border-t-[3px] border-black bg-white px-6 py-4 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] font-bold uppercase">
          <span>© 2026 INDEX — Plaintext second brain.</span>
          <span className="flex gap-3">
            <a href="#" className="underline">
              Manual
            </a>
            <a href="#" className="underline">
              GitHub
            </a>
            <a href="#" className="underline">
              RSS
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
