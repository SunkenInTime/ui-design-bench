"use client";
import Link from "next/link";
import { motion } from "motion/react";

export default function PrismPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-zinc-100 antialiased selection:bg-[#38BDF8] selection:text-black">
      {/* Nav */}
      <nav className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#0A0A0F]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[64px] max-w-[1280px] items-center justify-between px-6 md:px-8">
          <div className="flex items-center gap-8">
            <Link href="/two" className="flex items-center gap-2.5">
              <div className="h-6 w-6 rounded-sm bg-white text-black grid place-items-center font-mono text-[11px] font-bold">◇</div>
              <span className="text-[13px] font-semibold tracking-[0.16em]">PRISM</span>
              <span className="hidden rounded-full border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] tracking-widest text-zinc-400 md:inline">BETA 2.1</span>
            </Link>
            <div className="hidden items-center gap-6 md:flex">
              <a className="font-mono text-[11px] tracking-wide text-zinc-400 hover:text-white" href="#">Graph</a>
              <a className="font-mono text-[11px] tracking-wide text-zinc-400 hover:text-white" href="#">Timeline</a>
              <a className="font-mono text-[11px] tracking-wide text-zinc-400 hover:text-white" href="#">Search</a>
              <a className="font-mono text-[11px] tracking-wide text-zinc-400 hover:text-white" href="#">API</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden font-mono text-xs text-zinc-400 hover:text-white md:inline">Sign in</a>
            <a href="#" className="rounded-full bg-white px-5 py-2 font-mono text-[11px] font-medium tracking-wide text-black hover:bg-zinc-200">
              Download — free
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="relative mx-auto max-w-[1280px] px-6 pb-10 pt-12 md:px-8 md:pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
              <span className="font-mono text-[11px] tracking-widest text-zinc-300">AUTOLINKING SECOND BRAIN — NOW WITH CANVAS</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-[36px] font-[600] leading-[0.95] tracking-[-0.04em] md:text-[56px]"
            >
              Thoughts that
              <br />
              <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">connect themselves.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.18 }}
              className="mx-auto mt-5 max-w-[48ch] text-[15px] leading-relaxed text-zinc-400"
            >
              Prism watches how you write, draws the graph in real time, and surfaces what you forgot you knew.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              <a href="#" className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black hover:bg-zinc-200">
                Get Prism free
              </a>
              <a href="#" className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-3 text-sm font-medium backdrop-blur hover:bg-white/[0.08]">
                Watch 45s demo
              </a>
            </motion.div>
            <div className="mt-4 font-mono text-[11px] text-zinc-500">Free for 1,000 notes · No credit card · macOS · Windows · Linux</div>
          </div>

          {/* Graph preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-10 overflow-hidden rounded-[16px] border border-white/10 bg-zinc-900/60 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur md:mt-12"
          >
            <div className="flex items-center justify-between rounded-t-[10px] bg-zinc-950 px-3 py-2">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                <span className="ml-3 font-mono text-[11px] tracking-widest text-zinc-500">PRISM — GRAPH VIEW</span>
              </div>
              <div className="hidden items-center gap-2 md:flex">
                <span className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[10px] text-zinc-300">342 nodes</span>
                <span className="rounded-full bg-[#38BDF8] px-2.5 py-1 font-mono text-[10px] font-bold text-black">Live</span>
              </div>
            </div>
            <div className="grid gap-2 bg-zinc-950 p-2 md:grid-cols-12 md:p-3">
              {/* Left list */}
              <div className="rounded-xl border border-white/[0.06] bg-zinc-900 p-3 md:col-span-3">
                <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Recent notes</div>
                <div className="mt-3 space-y-2">
                  {[
                    { t: "Memory palaces", c: "12 links", active: true },
                    { t: "Spaced repetition", c: "8 links", active: false },
                    { t: "Zettelkasten method", c: "21 links", active: false },
                    { t: "Networked thought", c: "5 links", active: false },
                  ].map((n) => (
                    <div
                      key={n.t}
                      className={`rounded-lg px-3 py-2.5 ${n.active ? "bg-white text-black" : "bg-white/[0.04] text-zinc-300"}`}
                    >
                      <div className="text-xs font-medium leading-none">{n.t}</div>
                      <div className={`font-mono text-[11px] ${n.active ? "text-black/60" : "text-zinc-500"}`}>{n.c}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-lg border border-dashed border-white/10 p-2.5 font-mono text-[11px] text-zinc-500">
                  Press <span className="rounded bg-white/10 px-1 py-0.5 text-white">⌘K</span> to jump
                </div>
              </div>

              {/* Center graph */}
              <div className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#0F0F14] p-3 md:col-span-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Force graph · live</span>
                  <span className="font-mono text-[10px] text-[#38BDF8]">● 14 new links today</span>
                </div>
                <svg viewBox="0 0 400 220" className="mt-3 h-[220px] w-full">
                  <g stroke="rgba(255,255,255,0.08)" strokeWidth="1">
                    <line x1="80" y1="40" x2="170" y2="80" />
                    <line x1="170" y1="80" x2="290" y2="50" />
                    <line x1="170" y1="80" x2="140" y2="150" />
                    <line x1="140" y1="150" x2="260" y2="160" />
                    <line x1="290" y1="50" x2="330" y2="110" />
                    <line x1="80" y1="40" x2="60" y2="130" />
                  </g>
                  <g>
                    <circle cx="80" cy="40" r="18" fill="white" />
                    <text x="80" y="44" textAnchor="middle" fontSize="10" fontFamily="monospace" fill="black">MP</text>
                    <circle cx="170" cy="80" r="28" fill="#38BDF8" />
                    <text x="170" y="84" textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="700" fill="black">SR</text>
                    <circle cx="290" cy="50" r="16" fill="#0A0A0F" stroke="white" strokeWidth="1.5" />
                    <circle cx="290" cy="50" r="3" fill="white" />
                    <circle cx="140" cy="150" r="14" fill="#1A1A22" stroke="rgba(255,255,255,0.2)" />
                    <circle cx="260" cy="160" r="20" fill="white" />
                    <text x="260" y="164" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="black">ZK</text>
                    <circle cx="330" cy="110" r="10" fill="#818CF8" />
                    <circle cx="60" cy="130" r="8" fill="rgba(255,255,255,0.5)" />
                  </g>
                </svg>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-full border border-white/10 bg-zinc-900/80 px-3 py-1.5 backdrop-blur">
                  <span className="font-mono text-[11px] text-zinc-400">Drag · Pinch · Filter by tag</span>
                  <span className="h-1.5 w-24 rounded-full bg-white/10">
                    <span className="block h-1.5 w-14 rounded-full bg-[#38BDF8]" />
                  </span>
                </div>
              </div>

              {/* Right detail */}
              <div className="rounded-xl border border-white/[0.06] bg-zinc-900 p-3 md:col-span-3">
                <img src="https://picsum.photos/seed/prism-detail/320/160" alt="" className="h-28 w-full rounded-lg object-cover opacity-80" />
                <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-zinc-500">Spaced repetition</div>
                <div className="mt-1 text-sm font-medium leading-snug">Forgetting curve, revisited with modern data.</div>
                <p className="mt-2 font-mono text-[11px] leading-relaxed text-zinc-400">Linked from 8 notes. Last opened 2h ago. Next review tomorrow.</p>
                <a href="#" className="mt-3 inline-flex rounded-full bg-[#38BDF8] px-3 py-1.5 font-mono text-[11px] font-bold text-black">
                  Open note →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-[1280px] px-6 py-12 md:px-8 md:py-16">
        <div className="grid gap-3 md:grid-cols-3">
          {[
            {
              k: "01",
              title: "Writes with you",
              desc: "Inline suggestions link concepts as you type. No hashtags, no manual graph edits.",
              accent: "border-[#38BDF8]/20 bg-[#38BDF8]/5",
            },
            {
              k: "02",
              title: "Recalls on command",
              desc: "Semantic search across every note, PDF, and clipping. Ask like you talk.",
              accent: "border-white/10 bg-white/[0.02]",
            },
            {
              k: "03",
              title: "Stays local",
              desc: "Offline-first. End-to-end encrypted sync. Your graph never leaves your devices unencrypted.",
              accent: "border-white/10 bg-white/[0.02]",
            },
          ].map((f) => (
            <div key={f.k} className={`rounded-2xl border p-6 ${f.accent}`}>
              <div className="font-mono text-[11px] tracking-widest text-zinc-500">{f.k}</div>
              <h3 className="mt-2 text-[18px] font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.desc}</p>
              <div className="mt-6 flex items-center gap-2 font-mono text-[11px] text-zinc-500">
                <span className="h-px flex-1 bg-white/10" />
                Learn more →
              </div>
            </div>
          ))}
        </div>

        {/* Bento second row */}
        <div className="mt-3 grid gap-3 md:grid-cols-12">
          <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6 md:col-span-7">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">Daily review</span>
              <span className="rounded-full bg-white px-2.5 py-1 font-mono text-[11px] font-bold text-black">12 due</span>
            </div>
            <div className="mt-4 grid gap-2">
              {[
                { q: "What links memory to place?", a: "Memory palaces · 3 sources" },
                { q: "Define Zettelkasten in one line", a: "Atomic notes, linked" },
              ].map((c) => (
                <div key={c.q} className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3">
                  <span className="text-sm">{c.q}</span>
                  <span className="hidden font-mono text-[11px] text-zinc-500 md:inline">{c.a}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <span className="h-2 w-2 rounded-full bg-[#38BDF8]" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#111117] p-6 md:col-span-5">
            <div className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">Capture anywhere</div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center font-mono text-[11px]">
              <div className="rounded-xl bg-white/[0.04] p-4">
                <div className="text-lg">⌘</div>
                <div className="mt-1 text-zinc-400">Quick add</div>
              </div>
              <div className="rounded-xl bg-white/[0.04] p-4">
                <div className="text-lg">◐</div>
                <div className="mt-1 text-zinc-400">Clip web</div>
              </div>
              <div className="rounded-xl bg-[#38BDF8] p-4 text-black">
                <div className="text-lg">●</div>
                <div className="mt-1 font-medium">Voice</div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">Save from any app. Prism keeps the source link automatically.</p>
          </div>
        </div>
      </section>

      {/* Testimonials + Pricing */}
      <section className="border-y border-white/[0.06] bg-white/[0.02] px-6 py-10 md:px-8">
        <div className="mx-auto grid max-w-[1280px] gap-6 md:grid-cols-12">
          <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6 md:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">Loved by researchers & builders</div>
            <blockquote className="mt-3 text-[18px] leading-snug tracking-tight">
              “Prism replaced three apps. The graph actually helps me think, instead of just looking cool.”
            </blockquote>
            <div className="mt-4 flex items-center gap-3">
              <img src="https://picsum.photos/seed/prism-face/32/32" alt="" className="h-8 w-8 rounded-full object-cover" />
              <div>
                <div className="text-sm font-medium">Alex Rivera</div>
                <div className="font-mono text-xs text-zinc-500">ML engineer · 2,400 notes</div>
              </div>
              <span className="ml-auto rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-zinc-400">★★★★★ 4.9/5</span>
            </div>
          </div>
          <div className="rounded-2xl border border-[#38BDF8]/30 bg-[#0F1A22] p-6 md:col-span-5">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-[#38BDF8]">Pro · $12/mo</span>
              <span className="font-mono text-[11px] text-zinc-500">Billed yearly</span>
            </div>
            <ul className="mt-4 space-y-2 font-mono text-xs text-zinc-300">
              <li>— Unlimited graph & search</li>
              <li>— Encrypted sync · 5 devices</li>
              <li>— Import from Obsidian / Notion</li>
            </ul>
            <a href="#" className="mt-5 block rounded-full bg-[#38BDF8] py-2.5 text-center text-sm font-semibold text-black">
              Start free — no card
            </a>
            <div className="mt-2 text-center font-mono text-[11px] text-zinc-500">Free plan · 1,000 notes forever</div>
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 md:px-8">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-zinc-500">
          <span>© 2026 PRISM LABS — Built for people who think in graphs.</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-white">Changelog</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">System status</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
