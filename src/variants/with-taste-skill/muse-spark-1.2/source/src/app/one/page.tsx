"use client";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

export default function ArchivePage() {
  return (
    <div
      className={`${cormorant.variable} min-h-screen bg-[#FFFEFB] text-[#1C1E1A] antialiased selection:bg-[#2E3B2F] selection:text-white`}
    >
      {/* Top bar */}
      <nav className="sticky top-0 z-40 border-b border-[#E8E4DE] bg-[#FFFEFB]/80 backdrop-blur-md">
        <div className="mx-auto flex h-[64px] max-w-[1280px] items-center justify-between px-6 md:px-8">
          <div className="flex items-center gap-8">
            <Link href="/one" className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center border border-[#1C1E1A] bg-[#1C1E1A] text-[11px] font-bold tracking-widest text-white">
                A
              </div>
              <span className="font-mono text-[13px] font-semibold tracking-[0.18em]">ARCHIVE</span>
              <span className="hidden font-mono text-[10px] tracking-widest text-[#8A8580] md:inline">
                — PRIVATE LIBRARY
              </span>
            </Link>
            <div className="hidden items-center gap-6 md:flex">
              <a className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6B6860] hover:text-[#1C1E1A]" href="#">
                Index
              </a>
              <a className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6B6860] hover:text-[#1C1E1A]" href="#">
                Collections
              </a>
              <a className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6B6860] hover:text-[#1C1E1A]" href="#">
                Graph
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden font-mono text-[11px] text-[#8A8580] md:inline">342 notes · 1.2k links</span>
            <a
              href="#"
              className="rounded-none border border-[#1C1E1A] bg-[#1C1E1A] px-5 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#1C1E1A]"
            >
              Open Archive
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="grid grid-cols-1 gap-10 pt-12 md:grid-cols-12 md:pt-16 lg:pt-20">
          {/* Left copy */}
          <div className="md:col-span-6 lg:col-span-5">
            <div className="mb-6 inline-flex items-center gap-2 border border-[#E8E4DE] bg-[#F6F1EB] px-3 py-1.5">
              <span className="h-1.5 w-1.5 bg-[#C45A3C]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6B6860]">
                Est. 2024 — For people who think in links
              </span>
            </div>
            <h1
              className="font-serif text-[40px] font-[500] leading-[0.95] tracking-[-0.03em] md:text-[54px]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Your thoughts,
              <br />
              <span className="italic font-[400] text-[#2E3B2F]">properly kept.</span>
            </h1>
            <p className="mt-6 max-w-[38ch] font-mono text-[13px] leading-relaxed text-[#6B6860]">
              A quiet, durable second brain. Capture fragments, connect ideas across months, and recall anything in seconds. No feeds. No noise.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="bg-[#2E3B2F] px-7 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-white hover:bg-[#1C1E1A]"
              >
                Start writing free
              </a>
              <a
                href="#"
                className="border border-[#1C1E1A]/15 px-7 py-3 font-mono text-[11px] uppercase tracking-[0.14em] hover:border-[#1C1E1A]"
              >
                See how it links →
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 border-t border-[#E8E4DE] pt-6">
              <div className="flex -space-x-2">
                <img src="https://picsum.photos/seed/archive-face1/32/32" alt="" className="h-7 w-7 rounded-full border-2 border-white object-cover" />
                <img src="https://picsum.photos/seed/archive-face2/32/32" alt="" className="h-7 w-7 rounded-full border-2 border-white object-cover" />
                <img src="https://picsum.photos/seed/archive-face3/32/32" alt="" className="h-7 w-7 rounded-full border-2 border-white object-cover" />
              </div>
              <p className="font-mono text-[11px] leading-tight text-[#8A8580]">
                Trusted by 12,000 researchers,
                <br />
                writers, and founders
              </p>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative md:col-span-6 lg:col-span-7">
            <div className="relative overflow-hidden border border-[#E8E4DE] bg-[#F6F1EB] p-3 md:p-4">
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-7">
                  <img
                    src="https://picsum.photos/seed/archive-hero/720/520"
                    alt="Desk with notebooks and light"
                    className="h-[320px] w-full object-cover grayscale md:h-[420px]"
                  />
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="border border-[#1C1E1A]/10 bg-white p-3">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A8580]">Today</div>
                      <div className="mt-1 font-mono text-[11px] leading-snug">
                        On the link between
                        <br />
                        memory and place →
                      </div>
                    </div>
                    <div className="bg-[#2E3B2F] p-3 text-white">
                      <div className="font-mono text-[10px] uppercase tracking-widest opacity-60">Linked</div>
                      <div className="mt-1 font-mono text-[11px]">47 notes reference this idea</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-5 flex flex-col gap-3">
                  <div className="border border-[#1C1E1A]/10 bg-white p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A8580]">Note #184</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C45A3C]" />
                    </div>
                    <div className="mt-3 font-serif text-[15px] leading-snug" style={{ fontFamily: "var(--font-cormorant)" }}>
                      “The act of writing is the act of thinking made visible.”
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      <span className="bg-[#F6F1EB] px-2 py-1 font-mono text-[10px]">writing</span>
                      <span className="bg-[#F6F1EB] px-2 py-1 font-mono text-[10px]">cognition</span>
                    </div>
                    <div className="mt-4 border-t border-dashed border-[#E8E4DE] pt-3 font-mono text-[11px] leading-relaxed text-[#6B6860]">
                      Linked to: <span className="underline">Memory palaces</span> · <span className="underline">Zettelkasten</span>
                    </div>
                  </div>
                  <div className="flex-1 border border-[#E8E4DE] bg-[#FFFEFB] p-3">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A8580]">Graph today</div>
                    <svg viewBox="0 0 200 120" className="mt-3 w-full">
                      <line x1="40" y1="30" x2="100" y2="60" stroke="#E8E4DE" strokeWidth="1" />
                      <line x1="100" y1="60" x2="160" y2="35" stroke="#E8E4DE" strokeWidth="1" />
                      <line x1="100" y1="60" x2="70" y2="100" stroke="#E8E4DE" strokeWidth="1" />
                      <line x1="70" y1="100" x2="140" y2="90" stroke="#E8E4DE" strokeWidth="1" />
                      <circle cx="40" cy="30" r="12" fill="#2E3B2F" />
                      <circle cx="100" cy="60" r="16" fill="#C45A3C" />
                      <circle cx="160" cy="35" r="10" fill="white" stroke="#1C1E1A" />
                      <circle cx="70" cy="100" r="9" fill="white" stroke="#1C1E1A" />
                      <circle cx="140" cy="90" r="8" fill="#1C1E1A" />
                    </svg>
                    <div className="font-mono text-[10px] text-[#8A8580]">Drag to explore →</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-2 hidden rotate-1 border border-[#1C1E1A] bg-[#C45A3C] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-white md:block">
              1,204 notes and counting
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="mx-auto mt-12 max-w-[1280px] border-y border-[#E8E4DE] bg-[#F6F1EB]/50 px-6 py-5 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8A8580]">In use at</span>
          <div className="flex flex-wrap items-center gap-6 font-mono text-[11px] font-semibold tracking-widest text-[#1C1E1A]/70">
            <span>FIELD NOTES</span>
            <span className="h-3 w-px bg-[#E8E4DE]" />
            <span>ATLAS</span>
            <span className="h-3 w-px bg-[#E8E4DE]" />
            <span>INK & PAPER</span>
            <span className="h-3 w-px bg-[#E8E4DE]" />
            <span>MERCURY</span>
            <span className="h-3 w-px bg-[#E8E4DE]" />
            <span>SLOW LAB</span>
          </div>
        </div>
      </section>

      {/* Features - 3 cards varied */}
      <section className="mx-auto max-w-[1280px] px-6 py-12 md:px-8 md:py-16">
        <div className="grid gap-4 md:grid-cols-12">
          <div className="border border-[#1C1E1A]/10 bg-white p-6 md:col-span-5">
            <div className="font-mono text-[11px] tracking-widest text-[#C45A3C]">01 — CAPTURE</div>
            <h3 className="mt-3 font-serif text-[22px] leading-none tracking-tight" style={{ fontFamily: "var(--font-cormorant)" }}>
              Clip anything. <br />
              Keep the source.
            </h3>
            <p className="mt-3 font-mono text-[12px] leading-relaxed text-[#6B6860]">
              Web, PDF, voice, scribble. Every clipping keeps its origin, so you never wonder where an idea came from.
            </p>
            <img src="https://picsum.photos/seed/archive-cap1/480/260" alt="" className="mt-6 h-44 w-full object-cover" />
          </div>
          <div className="grid gap-4 md:col-span-7 md:grid-cols-2">
            <div className="bg-[#2E3B2F] p-6 text-white">
              <div className="font-mono text-[11px] tracking-widest opacity-60">02 — CONNECT</div>
              <h3 className="mt-3 font-serif text-[20px] leading-none" style={{ fontFamily: "var(--font-cormorant)" }}>
                Links form as you write.
              </h3>
              <p className="mt-3 font-mono text-[12px] leading-relaxed opacity-70">
                No manual tagging. Archive surfaces the threads between notes while you type.
              </p>
              <div className="mt-6 space-y-2 font-mono text-[11px]">
                <div className="flex items-center justify-between border border-white/10 bg-white/5 px-3 py-2">
                  <span>urban memory</span>
                  <span className="opacity-50">→ 12 links</span>
                </div>
                <div className="flex items-center justify-between border border-white/10 bg-white/5 px-3 py-2">
                  <span>spatial recall</span>
                  <span className="opacity-50">→ 8 links</span>
                </div>
              </div>
            </div>
            <div className="border border-[#E8E4DE] bg-[#F6F1EB] p-6">
              <div className="font-mono text-[11px] tracking-widest text-[#8A8580]">03 — RECALL</div>
              <h3 className="mt-3 font-serif text-[20px] leading-none text-[#1C1E1A]" style={{ fontFamily: "var(--font-cormorant)" }}>
                Ask in plain language.
              </h3>
              <div className="mt-4 border border-[#1C1E1A]/10 bg-white p-3">
                <div className="font-mono text-[11px] text-[#8A8580]">Search</div>
                <div className="mt-1 font-mono text-[12px]">“what did I read about memory palaces in March?”</div>
                <div className="mt-3 flex gap-2">
                  <span className="bg-[#2E3B2F] px-2 py-1 font-mono text-[10px] text-white">3 results · 0.4s</span>
                </div>
              </div>
              <p className="mt-4 font-mono text-[12px] text-[#6B6860]">Full-text, semantic, and graph search in one box.</p>
            </div>
            <div className="flex flex-col justify-between border border-[#1C1E1A] bg-white p-6 md:col-span-2">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-mono text-[11px] tracking-widest text-[#C45A3C]">DAILY NOTE</div>
                  <div className="mt-1 font-mono text-[11px] text-[#8A8580]">Today · 14 May 2026</div>
                </div>
                <div className="border border-[#1C1E1A] px-2 py-1 font-mono text-[10px] uppercase tracking-widest">Streak 128</div>
              </div>
              <p className="mt-6 font-serif text-[18px] leading-snug" style={{ fontFamily: "var(--font-cormorant)" }}>
                “Small daily entries compound into a library you actually want to re-read.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-y border-[#E8E4DE] bg-[#1C1E1A] px-6 py-12 text-white md:px-8">
        <div className="mx-auto max-w-[1280px] grid gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-50">Why archive</div>
            <blockquote className="mt-4 font-serif text-[28px] leading-none tracking-tight md:text-[36px]" style={{ fontFamily: "var(--font-cormorant)" }}>
              “I stopped losing ideas to screenshots. Now everything has a place, and every place leads somewhere else.”
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <img src="https://picsum.photos/seed/archive-person/40/40" alt="" className="h-9 w-9 rounded-full object-cover" />
              <div>
                <div className="font-mono text-xs font-semibold">Mara Chen</div>
                <div className="font-mono text-[11px] opacity-60">Architect · Archive since 2023</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="grid grid-cols-3 gap-3 border border-white/10 p-4">
              <div className="text-center">
                <div className="font-serif text-3xl" style={{ fontFamily: "var(--font-cormorant)" }}>
                  47
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest opacity-60">Links per note avg</div>
              </div>
              <div className="border-x border-white/10 text-center">
                <div className="font-serif text-3xl" style={{ fontFamily: "var(--font-cormorant)" }}>
                  0.4s
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest opacity-60">Median recall</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-3xl" style={{ fontFamily: "var(--font-cormorant)" }}>
                  100%
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest opacity-60">Offline access</div>
              </div>
            </div>
            <div className="mt-3 font-mono text-[11px] opacity-50">Encrypted at rest. Export anytime as Markdown.</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-[1280px] px-6 py-12 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-serif text-3xl tracking-tight" style={{ fontFamily: "var(--font-cormorant)" }}>
            Keep it for good.
          </h2>
          <p className="font-mono text-[12px] text-[#6B6860]">One price. No per-seat games. Student plan available.</p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-12">
          <div className="border border-[#E8E4DE] bg-white p-6 md:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#8A8580]">Personal</div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="font-serif text-4xl" style={{ fontFamily: "var(--font-cormorant)" }}>
                $8
              </span>
              <span className="font-mono text-xs text-[#8A8580]">/ month</span>
            </div>
            <ul className="mt-6 space-y-2 font-mono text-[12px] text-[#6B6860]">
              <li>— Unlimited notes & links</li>
              <li>— Full graph & search</li>
              <li>— Local-first, offline</li>
            </ul>
            <a href="#" className="mt-6 block border border-[#1C1E1A] py-2.5 text-center font-mono text-xs uppercase tracking-widest">
              Start free
            </a>
          </div>
          <div className="border-2 border-[#2E3B2F] bg-[#2E3B2F] p-6 text-white md:col-span-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-widest opacity-60">Library</span>
              <span className="bg-[#C45A3C] px-2 py-1 font-mono text-[10px] uppercase tracking-widest">Most kept</span>
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="font-serif text-4xl" style={{ fontFamily: "var(--font-cormorant)" }}>
                $14
              </span>
              <span className="font-mono text-xs opacity-60">/ month</span>
            </div>
            <ul className="mt-6 space-y-2 font-mono text-[12px] opacity-80">
              <li>— Everything in Personal</li>
              <li>— Shared collections</li>
              <li>— Version history · 2 years</li>
            </ul>
            <a href="#" className="mt-6 block bg-white py-2.5 text-center font-mono text-xs uppercase tracking-widest text-[#1C1E1A]">
              Start free
            </a>
          </div>
          <div className="flex flex-col justify-between border border-[#E8E4DE] bg-[#F6F1EB] p-6 md:col-span-4">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-[#8A8580]">A note on pricing</div>
              <p className="mt-3 font-serif text-[15px] leading-snug" style={{ fontFamily: "var(--font-cormorant)" }}>
                We charge for storage, not for your thoughts. No AI training on your notes. Ever.
              </p>
            </div>
            <div className="mt-6 font-mono text-[11px] leading-relaxed text-[#6B6860]">
              Import from Obsidian, Notion, Apple Notes in one click.
              <br />
              <a className="underline" href="#">
                See migration guide →
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#E8E4DE] bg-[#F6F1EB]/50 px-6 py-8 md:px-8">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-[#8A8580]">
          <span>© 2026 ARCHIVE — A private library for your mind.</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-[#1C1E1A]">
              Privacy
            </a>
            <a href="#" className="hover:text-[#1C1E1A]">
              Terms
            </a>
            <a href="#" className="hover:text-[#1C1E1A]">
              Changelog
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
