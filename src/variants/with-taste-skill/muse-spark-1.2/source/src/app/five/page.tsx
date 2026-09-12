"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export default function MindPage() {
  const reduce = useReducedMotion();
  return (
    <div className="min-h-screen bg-[#FCFCFD] text-[#0B0B0C] antialiased selection:bg-[#10B981] selection:text-white">
      {/* Nav - soft */}
      <nav className="sticky top-0 z-40 border-b border-black/[0.06] bg-[#FCFCFD]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-[64px] max-w-[1200px] items-center justify-between px-6 md:px-8">
          <div className="flex items-center gap-8">
            <Link href="/five" className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0B0B0C] text-white text-[11px] font-semibold">M</span>
              <span className="text-[14px] font-semibold tracking-tight">mind</span>
              <span className="hidden rounded-full bg-[#10B981]/10 px-2.5 py-1 font-mono text-[10px] font-medium tracking-widest text-[#065F46] md:inline">
                CALM NOTES
              </span>
            </Link>
            <div className="hidden items-center gap-6 text-sm text-black/60 md:flex">
              <a className="hover:text-black" href="#">
                How it works
              </a>
              <a className="hover:text-black" href="#">
                Stories
              </a>
              <a className="hover:text-black" href="#">
                Pricing
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden text-sm text-black/60 hover:text-black md:inline">
              Sign in
            </a>
            <a href="#" className="rounded-full bg-[#0B0B0C] px-5 py-2 text-sm font-medium text-white hover:bg-black">
              Start free
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-[1200px] px-6 pt-10 md:px-8 md:pt-14">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#10B981]" />
              <span className="font-mono text-[11px] tracking-wide text-black/60">New — mind captures what matters, quietly</span>
            </div>
            <h1 className="mt-6 text-[40px] font-[600] leading-[0.95] tracking-[-0.04em] md:text-[52px]">
              Remember
              <br />
              everything
              <br />
              <span className="font-[300] italic tracking-[-0.03em] text-black/60">that matters.</span>
            </h1>
            <p className="mt-5 max-w-[32ch] text-[15px] leading-relaxed text-black/60">
              mind is a gentle second brain. Save thoughts, keep the sources, and find them again with a simple search.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#" className="rounded-full bg-[#10B981] px-7 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(16,185,129,0.25)] hover:bg-[#0FA371]">
                Start for free
              </a>
              <a href="#" className="rounded-full border border-black/10 bg-white px-7 py-3 text-sm font-medium hover:bg-black/5">
                See how it works
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                <img src="https://picsum.photos/seed/mind-a/28/28" alt="" className="h-7 w-7 rounded-full border-2 border-white object-cover" />
                <img src="https://picsum.photos/seed/mind-b/28/28" alt="" className="h-7 w-7 rounded-full border-2 border-white object-cover" />
                <img src="https://picsum.photos/seed/mind-c/28/28" alt="" className="h-7 w-7 rounded-full border-2 border-white object-cover" />
              </div>
              <span className="text-xs text-black/50">Loved by 40,000 calm note-takers</span>
              <span className="text-xs">★★★★★ 4.9</span>
            </div>
          </div>

          {/* Glass stack */}
          <div className="relative md:col-span-7">
            <div className="relative mx-auto max-w-[560px]">
              {/* soft glow */}
              <div className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-br from-[#10B981]/15 via-transparent to-[#E8EFEA] blur-2xl" />
              <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <div className="rounded-2xl bg-[#F6F7F8] p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                      <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                      <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 font-mono text-[11px] shadow-sm">Today · 14 May</span>
                    <span className="font-mono text-[11px] text-black/40">⌘K to search</span>
                  </div>

                  <div className="mt-4 grid gap-3 md:grid-cols-12">
                    <div className="md:col-span-7">
                      <div className="rounded-2xl bg-white p-4 shadow-sm">
                        <img src="https://picsum.photos/seed/mind-hero/400/200" alt="" className="h-28 w-full rounded-xl object-cover" />
                        <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-black/40">Today&apos;s note</div>
                        <div className="mt-1 text-sm font-semibold leading-snug">Walking helps me remember — why movement anchors memory</div>
                        <p className="mt-1 text-xs leading-relaxed text-black/50">A short note that linked itself to 4 older ideas while I was typing. No filing needed.</p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          <span className="rounded-full bg-[#E8EFEA] px-2.5 py-1 text-[11px]">memory</span>
                          <span className="rounded-full bg-[#E8EFEA] px-2.5 py-1 text-[11px]">walking</span>
                          <span className="rounded-full bg-[#10B981] px-2.5 py-1 text-[11px] text-white">4 links</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 md:col-span-5">
                      <motion.div
                        animate={reduce ? {} : { y: [0, -4, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="rounded-2xl border border-black/5 bg-white p-3 shadow-sm"
                      >
                        <div className="font-mono text-[11px] text-black/40">Quick capture</div>
                        <div className="mt-1 rounded-xl bg-[#F6F7F8] p-2.5 text-xs">“Add: psychogeography is walking as research”</div>
                        <div className="mt-2 text-[11px] text-[#10B981]">✓ Saved and linked</div>
                      </motion.div>
                      <div className="rounded-2xl bg-[#0B0B0C] p-4 text-white">
                        <div className="font-mono text-[11px] opacity-60">Recall</div>
                        <div className="mt-1 text-xs leading-snug">“What did I read about memory palaces?”</div>
                        <div className="mt-2 rounded-full bg-white px-3 py-1.5 text-center font-mono text-[11px] font-semibold text-black">3 results · 0.3s</div>
                      </div>
                      <div className="rounded-2xl border border-black/5 bg-[#E8EFEA] p-3">
                        <div className="font-mono text-[11px] text-black/50">Streak</div>
                        <div className="mt-1 flex items-baseline gap-1">
                          <span className="text-2xl font-bold">28</span>
                          <span className="text-xs text-black/50">days · keep going</span>
                        </div>
                        <div className="mt-2 flex gap-1">
                          {Array.from({ length: 7 }).map((_, i) => (
                            <span key={i} className={`h-1.5 flex-1 rounded-full ${i < 5 ? "bg-[#10B981]" : "bg-black/10"}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* floating badge */}
              <div className="absolute -bottom-3 -right-2 flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 shadow-lg md:bottom-4 md:right-0">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[#10B981] text-white text-xs">✓</span>
                <span className="pr-1 font-mono text-[11px] font-medium">Offline · Encrypted · Yours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features soft 3 */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "Capture without friction", desc: "Press a hotkey, speak, or drop a link. mind keeps the source so you never lose context.", icon: "✦" },
            { title: "Links appear on their own", desc: "No folders to maintain. Ideas connect while you write, quietly in the background.", icon: "◯" },
            { title: "Find it by how you remember", desc: "Search the way you think — a phrase, a date, a half-remembered image.", icon: "◎" },
          ].map((f) => (
            <div key={f.title} className="rounded-[20px] border border-black/5 bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8EFEA] text-sm">{f.icon}</div>
              <h3 className="mt-4 text-[15px] font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black/60">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* bento second row */}
        <div className="mt-4 grid gap-4 md:grid-cols-12">
          <div className="overflow-hidden rounded-[20px] border border-black/5 bg-white md:col-span-7">
            <div className="grid md:grid-cols-2">
              <div className="p-6">
                <div className="font-mono text-[11px] uppercase tracking-widest text-black/40">A calm graph</div>
                <h4 className="mt-2 text-lg font-semibold leading-tight">See how your ideas fit together — without the hairball.</h4>
                <p className="mt-2 text-sm leading-relaxed text-black/60">A soft, readable graph that stays legible at 1,000 notes. Pin, filter, and wander.</p>
                <a href="#" className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-medium text-white">
                  Explore demo →
                </a>
              </div>
              <div className="bg-[#F6F7F8] p-4">
                <svg viewBox="0 0 300 200" className="h-full w-full">
                  <g stroke="rgba(0,0,0,0.08)" strokeWidth="1">
                    <line x1="60" y1="50" x2="150" y2="90" />
                    <line x1="150" y1="90" x2="240" y2="60" />
                    <line x1="150" y1="90" x2="120" y2="150" />
                    <line x1="120" y1="150" x2="210" y2="160" />
                  </g>
                  <circle cx="60" cy="50" r="18" fill="white" stroke="rgba(0,0,0,0.08)" />
                  <circle cx="150" cy="90" r="26" fill="#10B981" />
                  <circle cx="240" cy="60" r="14" fill="white" stroke="rgba(0,0,0,0.08)" />
                  <circle cx="120" cy="150" r="12" fill="#0B0B0C" />
                  <circle cx="210" cy="160" r="16" fill="white" stroke="rgba(0,0,0,0.08)" />
                </svg>
              </div>
            </div>
          </div>
          <div className="rounded-[20px] bg-[#E8EFEA] p-6 md:col-span-5">
            <img src="https://picsum.photos/seed/mind-cal/400/160" alt="" className="h-32 w-full rounded-2xl object-cover" />
            <h4 className="mt-4 text-sm font-semibold">Daily note, gently nudged.</h4>
            <p className="mt-1 text-sm leading-relaxed text-black/60">A soft prompt each morning. No streak shaming — just a quiet invitation to write.</p>
            <div className="mt-3 flex items-center gap-2 font-mono text-[11px] text-black/50">
              <span className="rounded-full bg-white px-2.5 py-1">Tomorrow · 9am</span>
              <span>Remind me</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial + pricing */}
      <section className="border-y border-black/5 bg-[#E8EFEA]/50 px-6 py-10 md:px-8">
        <div className="mx-auto grid max-w-[1200px] gap-4 md:grid-cols-12">
          <div className="rounded-[20px] bg-white p-6 shadow-sm md:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-widest text-black/40">What calm feels like</div>
            <blockquote className="mt-2 text-[17px] font-medium leading-snug tracking-tight">
              “My notes used to be a guilt pile. Now opening mind feels like opening a favorite notebook.”
            </blockquote>
            <div className="mt-4 flex items-center gap-3">
              <img src="https://picsum.photos/seed/mind-quote/32/32" alt="" className="h-8 w-8 rounded-full object-cover" />
              <div>
                <div className="text-sm font-medium">Jess Park</div>
                <div className="font-mono text-xs text-black/50">Designer · 1 year with mind</div>
              </div>
            </div>
          </div>
          <div className="rounded-[20px] bg-[#0B0B0C] p-6 text-white md:col-span-5">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-[11px]">Simple pricing</span>
              <span className="font-mono text-[11px] opacity-60">Cancel anytime</span>
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl font-bold">$8</span>
              <span className="text-sm opacity-60">/ month</span>
              <span className="ml-auto rounded-full bg-[#10B981] px-2.5 py-1 font-mono text-[11px] font-bold text-white">Free to start</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              <li>— Unlimited notes · 20k links</li>
              <li>— Search that understands you</li>
              <li>— Private, offline, and fast</li>
            </ul>
            <a href="#" className="mt-5 block rounded-full bg-white py-2.5 text-center text-sm font-semibold text-black">
              Start free — no card needed
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 md:px-8">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-black/40">
          <span>© 2026 mind — a gentle second brain.</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-black">
              Privacy
            </a>
            <a href="#" className="hover:text-black">
              Terms
            </a>
            <a href="#" className="hover:text-black">
              Contact
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
