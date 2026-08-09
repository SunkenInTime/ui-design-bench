"use client";
import Link from "next/link";
import { motion } from "motion/react";

export default function FieldPage() {
  return (
    <div className="min-h-screen bg-[#FFFEF9] text-[#1A1E1C] antialiased selection:bg-[#FF4D2E] selection:text-white">
      {/* Floating nav */}
      <div className="sticky top-4 z-40 mx-auto flex max-w-[1280px] justify-center px-6">
        <nav className="flex items-center gap-1 rounded-full border border-black/10 bg-white/80 px-2 py-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-xl">
          <Link href="/three" className="flex items-center gap-2 pl-2 pr-3">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#FF4D2E] text-[12px] font-bold text-white">✺</span>
            <span className="text-sm font-semibold tracking-tight">FIELD</span>
            <span className="hidden font-mono text-[10px] tracking-widest text-black/40 md:inline">SPATIAL NOTES</span>
          </Link>
          <div className="hidden items-center gap-1 md:flex">
            <a className="rounded-full px-3 py-1.5 text-xs font-medium hover:bg-black/5" href="#">Canvas</a>
            <a className="rounded-full px-3 py-1.5 text-xs font-medium hover:bg-black/5" href="#">Library</a>
            <a className="rounded-full px-3 py-1.5 text-xs font-medium hover:bg-black/5" href="#">Graph</a>
          </div>
          <a href="#" className="ml-1 rounded-full bg-[#0F172A] px-5 py-2 text-xs font-semibold text-white hover:bg-black">
            Try free
          </a>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-[1280px] px-6 pt-10 md:px-8 md:pt-12">
        <div className="grid gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-3 py-1.5 text-white">
              <span className="h-2 w-2 rounded-full bg-[#FF4D2E] animate-pulse" />
              <span className="font-mono text-[11px] tracking-widest">NEW — INFINITE CANVAS 2.0</span>
            </div>
            <h1 className="mt-6 text-[42px] font-[800] leading-[0.9] tracking-[-0.04em] md:text-[54px]">
              Ideas live
              <br />
              <span className="rounded-[12px] bg-[#FF4D2E] px-2 py-1 text-white">where</span> you
              <br />
              leave them.
            </h1>
            <p className="mt-5 max-w-[34ch] text-[15px] leading-relaxed text-black/60">
              Field is a spatial second brain. Drop notes, images, and links onto a canvas and let clusters emerge.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#" className="rounded-full bg-[#FF4D2E] px-7 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(255,77,46,0.3)] hover:bg-[#E8462A]">
                Start your field
              </a>
              <a href="#" className="rounded-full border border-black/10 bg-white px-7 py-3 text-sm font-medium hover:bg-black/5">
                See example →
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3 font-mono text-[11px] text-black/40">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Free for 500 cards
              </span>
              <span>·</span>
              <span>No credit card</span>
            </div>
          </div>

          {/* Canvas collage */}
          <div className="relative md:col-span-7">
            <div className="relative h-[420px] overflow-hidden rounded-[24px] border border-black/10 bg-[#F2EEE6] p-4 md:h-[480px]">
              {/* dotted grid */}
              <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_1px_1px,black_1px,transparent_0)] [background-size:20px_20px]" />
              {/* Cards */}
              <motion.div
                initial={{ rotate: -2, y: 10, opacity: 0 }}
                animate={{ rotate: -1, y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="absolute left-4 top-4 w-[200px] rotate-[-1.5deg] rounded-2xl bg-white p-3 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
              >
                <img src="https://picsum.photos/seed/field-1/200/120" alt="" className="h-24 w-full rounded-xl object-cover" />
                <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-black/40">Note</div>
                <div className="mt-1 text-xs font-semibold leading-snug">How cities remember through streets</div>
                <div className="mt-2 flex gap-1.5">
                  <span className="rounded-full bg-[#FF4D2E]/10 px-2 py-1 font-mono text-[10px] text-[#FF4D2E]">memory</span>
                  <span className="rounded-full bg-black/5 px-2 py-1 font-mono text-[10px]">place</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ rotate: 2, y: 10, opacity: 0 }}
                animate={{ rotate: 1, y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="absolute left-[220px] top-8 w-[180px] rotate-[1deg] rounded-2xl bg-[#0F172A] p-3 text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest opacity-60">Cluster</div>
                <div className="mt-1 text-sm font-semibold">Palaces · 12 notes</div>
                <div className="mt-3 h-1.5 w-full rounded-full bg-white/20">
                  <div className="h-1.5 w-2/3 rounded-full bg-[#FF4D2E]" />
                </div>
                <div className="mt-2 font-mono text-[11px] opacity-60">Drag to expand →</div>
              </motion.div>

              <motion.div
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.26 }}
                className="absolute bottom-6 left-6 w-[260px] rounded-2xl bg-white p-3 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
              >
                <div className="flex items-center gap-2">
                  <img src="https://picsum.photos/seed/field-2/32/32" alt="" className="h-6 w-6 rounded-full object-cover" />
                  <span className="font-mono text-[11px]">Voice note · 0:42</span>
                  <span className="ml-auto h-2 w-2 rounded-full bg-[#FF4D2E] animate-pulse" />
                </div>
                <div className="mt-2 h-8 w-full rounded-full bg-[#F2EEE6] p-1">
                  <div className="flex h-full items-center gap-[2px] px-2">
                    {Array.from({ length: 18 }).map((_, i) => (
                      <span key={i} className="w-1 rounded-full bg-[#0F172A]" style={{ height: `${8 + (i % 4) * 6}px`, opacity: 0.15 + i * 0.03 }} />
                    ))}
                  </div>
                </div>
                <div className="mt-2 font-mono text-[11px] text-black/50">“The link between walking and remembering…”</div>
              </motion.div>

              <motion.div
                initial={{ rotate: 1, opacity: 0 }}
                animate={{ rotate: -1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.34 }}
                className="absolute bottom-8 right-4 w-[200px] rotate-[-0.8deg] rounded-2xl bg-[#FFD23F] p-3 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest">To read</div>
                <div className="mt-1 text-xs font-semibold">Psychogeography PDFs</div>
                <div className="mt-2 flex -space-x-2">
                  <span className="grid h-7 w-9 place-items-center rounded-lg bg-white text-[10px] font-bold shadow">PDF</span>
                  <span className="grid h-7 w-9 place-items-center rounded-lg bg-[#0F172A] text-[10px] font-bold text-white shadow">IMG</span>
                  <span className="grid h-7 w-9 place-items-center rounded-lg bg-white text-[10px] font-bold shadow">WEB</span>
                </div>
              </motion.div>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10 bg-white/80 px-3 py-1.5 font-mono text-[11px] backdrop-blur">
                ← Drag · Scroll to zoom · Double-click to add
              </div>

              {/* arrows */}
              <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 600 480">
                <path d="M 210 90 Q 250 140 250 200" fill="none" stroke="#0F172A" strokeWidth="1.2" strokeDasharray="6 6" opacity="0.2" />
                <path d="M 300 120 Q 360 180 340 260" fill="none" stroke="#FF4D2E" strokeWidth="1.2" opacity="0.25" />
              </svg>
            </div>
            <div className="mt-3 flex items-center justify-center gap-2 font-mono text-[11px] text-black/40">
              <span className="rounded-full bg-[#FF4D2E] px-2.5 py-1 text-white">342 cards</span>
              <span>·</span>
              <span>87 links auto-formed</span>
              <span>·</span>
              <span>Infinite canvas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bento */}
      <section className="mx-auto max-w-[1280px] px-6 py-10 md:px-8">
        <div className="grid gap-3 md:grid-cols-12">
          <div className="rounded-[20px] bg-[#0F172A] p-6 text-white md:col-span-5">
            <div className="font-mono text-[11px] uppercase tracking-widest opacity-60">Spatial, not linear</div>
            <h3 className="mt-2 text-[22px] font-bold leading-none tracking-tight">Place ideas where they belong.</h3>
            <p className="mt-3 text-sm leading-relaxed opacity-70">Proximity is meaning. Field clusters notes that sit near each other.</p>
            <img src="https://picsum.photos/seed/field-cluster/520/240" alt="" className="mt-6 h-44 w-full rounded-2xl object-cover" />
          </div>
          <div className="grid gap-3 md:col-span-7 md:grid-cols-2">
            <div className="rounded-[20px] border border-black/10 bg-white p-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD23F] text-sm">✦</div>
              <h4 className="mt-3 text-sm font-semibold">Capture from anywhere</h4>
              <p className="mt-1 text-xs leading-relaxed text-black/60">Web, PDF, photo of a whiteboard — drops straight onto your field.</p>
              <div className="mt-4 rounded-xl bg-[#F2EEE6] p-3 font-mono text-[11px]">Drop files here →</div>
            </div>
            <div className="rounded-[20px] bg-[#FF4D2E] p-6 text-white">
              <div className="font-mono text-[11px] uppercase tracking-widest opacity-80">Collaborate</div>
              <h4 className="mt-2 text-sm font-semibold">Invite and wander together.</h4>
              <p className="mt-1 text-xs leading-relaxed opacity-80">Live cursors, comments, and follow mode for shared brain walks.</p>
              <div className="mt-4 flex -space-x-2">
                <img src="https://picsum.photos/seed/f1/28/28" alt="" className="h-7 w-7 rounded-full border-2 border-[#FF4D2E] object-cover" />
                <img src="https://picsum.photos/seed/f2/28/28" alt="" className="h-7 w-7 rounded-full border-2 border-[#FF4D2E] object-cover" />
                <img src="https://picsum.photos/seed/f3/28/28" alt="" className="h-7 w-7 rounded-full border-2 border-[#FF4D2E] object-cover" />
                <span className="grid h-7 w-7 place-items-center rounded-full border-2 border-[#FF4D2E] bg-white text-[10px] font-bold text-[#FF4D2E]">+12</span>
              </div>
            </div>
            <div className="rounded-[20px] border border-black/10 bg-[#F2EEE6] p-6 md:col-span-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-widest text-black/40">Recall — ask the field</span>
                <span className="rounded-full bg-white px-2.5 py-1 font-mono text-[11px]">⌘K</span>
              </div>
              <div className="mt-3 rounded-2xl bg-white p-3 shadow-sm">
                <div className="font-mono text-[11px] text-black/40">Ask</div>
                <div className="text-sm font-medium">“Show me everything about walking and memory near the river project”</div>
                <div className="mt-2 flex gap-2">
                  <span className="rounded-full bg-[#0F172A] px-3 py-1 font-mono text-[11px] text-white">9 results on canvas</span>
                  <span className="rounded-full bg-[#FF4D2E] px-3 py-1 font-mono text-[11px] text-white">Zoom to cluster →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee - only one per page */}
      <div className="overflow-hidden border-y border-black/10 bg-[#0F172A] py-3">
        <motion.div
          animate={{ x: [0, -600] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap font-mono text-xs uppercase tracking-[0.16em] text-white/70"
        >
          <span className="mx-6">Drop anything</span>
          <span className="mx-6 text-[#FF4D2E]">•</span>
          <span className="mx-6">Cluster automatically</span>
          <span className="mx-6 text-[#FF4D2E]">•</span>
          <span className="mx-6">Find by place, not folder</span>
          <span className="mx-6 text-[#FF4D2E]">•</span>
          <span className="mx-6">Invite friends</span>
          <span className="mx-6 text-[#FF4D2E]">•</span>
          <span className="mx-6">Drop anything</span>
          <span className="mx-6 text-[#FF4D2E]">•</span>
          <span className="mx-6">Cluster automatically</span>
          <span className="mx-6 text-[#FF4D2E]">•</span>
          <span className="mx-6">Find by place, not folder</span>
          <span className="mx-6 text-[#FF4D2E]">•</span>
        </motion.div>
      </div>

      {/* Pricing + testimonial */}
      <section className="mx-auto max-w-[1280px] px-6 py-10 md:px-8">
        <div className="grid gap-4 md:grid-cols-12">
          <div className="rounded-[20px] border border-black/10 bg-white p-6 md:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-widest text-black/40">Free</div>
            <div className="mt-1 text-3xl font-bold">$0</div>
            <div className="font-mono text-xs text-black/40">500 cards · 1 field</div>
            <a href="#" className="mt-4 block rounded-full border border-black/10 py-2.5 text-center text-sm font-medium">
              Start free
            </a>
          </div>
          <div className="rounded-[20px] bg-[#FF4D2E] p-6 text-white md:col-span-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-widest opacity-80">Studio</span>
              <span className="rounded-full bg-white px-2 py-1 font-mono text-[10px] font-bold text-[#FF4D2E]">POPULAR</span>
            </div>
            <div className="mt-1 text-3xl font-bold">$10</div>
            <div className="font-mono text-xs opacity-80">/ month · unlimited</div>
            <a href="#" className="mt-4 block rounded-full bg-[#0F172A] py-2.5 text-center text-sm font-semibold text-white">
              Start free
            </a>
          </div>
          <div className="rounded-[20px] border border-black/10 bg-[#F2EEE6] p-6 md:col-span-4">
            <div className="text-sm font-semibold">“Field finally made my research feel like a pinboard, not a filing cabinet.”</div>
            <div className="mt-3 flex items-center gap-2">
              <img src="https://picsum.photos/seed/field-quote/32/32" alt="" className="h-7 w-7 rounded-full object-cover" />
              <span className="font-mono text-xs">Sasha — urban researcher</span>
            </div>
            <div className="mt-4 flex gap-1 font-mono text-[11px]">
              <span>★★★★★</span>
              <span className="text-black/40">4.8/5 from 3,200 reviews</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-6 md:px-8">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-black/40">
          <span>© 2026 FIELD — A spatial second brain.</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-black">
              Changelog
            </a>
            <a href="#" className="hover:text-black">
              Privacy
            </a>
            <a href="#" className="hover:text-black">
              Are.na import
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
