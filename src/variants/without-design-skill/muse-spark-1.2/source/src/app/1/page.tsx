import Link from "next/link";

// 01 — Paper — Editorial & Calm
export default function PageOne() {
  return (
    <div className="min-h-screen bg-[#fdfbf5] text-[#1a1a18] selection:bg-[#1a1a18] selection:text-[#fdfbf5]">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');`}</style>

      {/* Top bar — typographic */}
      <div className="border-b border-[#e8e0cc] bg-[#fdfbf5]/90 backdrop-blur supports-[backdrop-filter]:bg-[#fdfbf5]/60 sticky top-0 z-20">
        <div className="max-w-[1160px] mx-auto px-6 h-[52px] flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#9a8f7a]">Est. 2026</span>
              <span className="text-[#e8e0cc]">—</span>
              <span className="text-[15px] font-medium tracking-tight">SYNAPSE</span>
              <span className="hidden sm:inline text-xs px-2 py-0.5 rounded-full border border-[#e8e0cc] text-[#9a8f7a] ml-1">01 / PAPER</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-[13px] tracking-wide text-[#6b6252]">
              <a href="#manifesto" className="hover:text-[#1a1a18] transition-colors">Manifesto</a>
              <a href="#how" className="hover:text-[#1a1a18] transition-colors">How it works</a>
              <a href="#praise" className="hover:text-[#1a1a18] transition-colors">Praise</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="hidden sm:inline text-[13px] text-[#6b6252] hover:text-[#1a1a18]">Hub</Link>
            <a href="#" className="text-sm px-4 py-1.5 rounded-full bg-[#1a1a18] text-white hover:bg-black transition-colors">Start writing — free</a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-[1160px] mx-auto px-6 pt-12 sm:pt-20 pb-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#e8e0cc] rounded-full px-3 py-1.5 bg-white">
              <span className="size-1.5 rounded-full bg-[#b89a5a]" />
              <span className="text-xs font-mono tracking-[0.14em] uppercase text-[#6b6252]">A quiet place for loud ideas</span>
            </div>

            <h1 className="mt-8 text-[48px] sm:text-[64px] lg:text-[72px] leading-[0.88] tracking-[-0.04em]">
              <span className="font-[var(--font-instrument-serif)] font-normal">Your notes</span>
              <br />
              <span className="font-[var(--font-instrument-serif)] italic font-normal">should feel</span>
              <br />
              <span className="font-semibold tracking-tighter">like paper.</span>
            </h1>

            <p className="mt-6 text-[17px] leading-7 text-[#5a5346] max-w-[520px] font-[var(--font-newsreader)]">
              Synapse is a second brain that stays out of your way. Capture quickly, link naturally, and rediscover thoughts months later — as if you’d left a ribbon in the right book.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="px-6 py-3 rounded-full bg-[#1a1a18] text-white text-sm font-medium hover:bg-black transition-colors">Begin your archive →</a>
              <a href="#" className="px-6 py-3 rounded-full border border-[#e8e0cc] bg-white text-sm font-medium hover:bg-[#fdfbf5] transition-colors">Read the manifesto</a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-xs text-[#9a8f7a]">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/100?img=32" alt="" className="size-7 rounded-full border-2 border-[#fdfbf5] object-cover" />
                <img src="https://i.pravatar.cc/100?img=14" alt="" className="size-7 rounded-full border-2 border-[#fdfbf5] object-cover" />
                <img src="https://i.pravatar.cc/100?img=28" alt="" className="size-7 rounded-full border-2 border-[#fdfbf5] object-cover" />
              </div>
              <span className="font-mono tracking-wide">Trusted by 12,400 writers & researchers</span>
            </div>

            {/* small editorial rule */}
            <div className="mt-10 border-t border-[#e8e0cc] pt-6 grid grid-cols-3 gap-6">
              <div>
                <div className="text-xl font-[var(--font-instrument-serif)] italic">0.3s</div>
                <div className="text-xs font-mono tracking-widest uppercase text-[#9a8f7a]">to capture</div>
              </div>
              <div>
                <div className="text-xl font-[var(--font-instrument-serif)] italic">∞</div>
                <div className="text-xs font-mono tracking-widest uppercase text-[#9a8f7a]">bidirectional links</div>
              </div>
              <div>
                <div className="text-xl font-[var(--font-instrument-serif)] italic">Offline</div>
                <div className="text-xs font-mono tracking-widest uppercase text-[#9a8f7a]">first, always</div>
              </div>
            </div>
          </div>

          {/* Paper stack mock */}
          <div className="relative lg:sticky lg:top-[88px]">
            <div className="absolute -inset-4 bg-[#f0eada] rounded-[28px] -rotate-1" />
            <div className="relative bg-white rounded-[18px] border border-[#e8e0cc] shadow-[0_20px_60px_rgba(26,26,24,0.08)] overflow-hidden">
              {/* window chrome */}
              <div className="h-9 border-b border-[#f0eada] flex items-center justify-between px-4 bg-[#fdfbf5]">
                <div className="flex gap-1.5">
                  <span className="size-3 rounded-full bg-[#e8c9a8] border border-[#d9b99a]" />
                  <span className="size-3 rounded-full bg-[#e8e0cc] border border-[#d9d0b8]" />
                  <span className="size-3 rounded-full bg-[#d9d8d6] border border-[#c9c8c6]" />
                </div>
                <span className="text-xs font-mono tracking-widest uppercase text-[#9a8f7a]">synapse — today.md</span>
                <span className="text-xs text-[#9a8f7a]">◐</span>
              </div>

              <div className="p-6 sm:p-7">
                <div className="text-xs font-mono tracking-[0.18em] uppercase text-[#9a8f7a] mb-3">14:42 · Linked thoughts</div>
                <h3 className="font-[var(--font-instrument-serif)] text-[22px] leading-tight">
                  How I finally stopped <br />
                  <span className="italic">forgetting what I read</span>
                </h3>
                <div className="mt-4 space-y-3 text-[14px] leading-6 text-[#3a352e] font-[var(--font-newsreader)]">
                  <p>
                    For years I highlighted without thinking. Now, every note must answer: <em>what question does this solve?</em>
                  </p>
                  <div className="rounded-lg bg-[#fdfbf5] border border-[#f0eada] p-3">
                    <div className="text-xs font-mono tracking-widest uppercase text-[#9a8f7a] mb-1.5">Backlinks · 3</div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2 py-1 rounded-full bg-white border border-[#e8e0cc] text-xs">[[reading workflow]]</span>
                      <span className="px-2 py-1 rounded-full bg-white border border-[#e8e0cc] text-xs">[[spaced repetition]]</span>
                      <span className="px-2 py-1 rounded-full bg-[#1a1a18] text-white text-xs">+ New link</span>
                    </div>
                  </div>
                  <p className="text-[#6b6252]">
                    Synapse resurfaces this next Tuesday, just before my essay deadline. No folders, just meaning.
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs font-mono text-[#9a8f7a] border-t border-[#f0eada] pt-4">
                  <span>⌘ K</span>
                  <span className="text-[#e8e0cc]">|</span>
                  <span>Type [[ to link</span>
                  <span className="ml-auto px-2 py-1 rounded-full bg-[#fdfbf5] border border-[#e8e0cc]">147 words</span>
                </div>
              </div>
            </div>

            {/* floating card */}
            <div className="absolute -bottom-6 -left-4 sm:left-auto sm:-right-6 bg-[#1a1a18] text-white rounded-2xl p-4 shadow-xl max-w-[240px] rotate-[-1deg]">
              <div className="text-xs font-mono tracking-widest uppercase text-white/60">Daily recall</div>
              <div className="mt-1 text-sm leading-5">“You wrote about <em>forgetting to remember</em> 11 days ago. Revisit?”</div>
              <div className="mt-3 flex gap-2">
                <span className="px-3 py-1.5 rounded-full bg-white text-[#1a1a18] text-xs font-medium">Open</span>
                <span className="px-3 py-1.5 rounded-full border border-white/20 text-xs">Dismiss</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos / press */}
      <section className="border-y border-[#e8e0cc] bg-white/60">
        <div className="max-w-[1160px] mx-auto px-6 py-6 flex flex-wrap items-center gap-6 justify-between text-sm">
          <span className="font-mono text-xs tracking-[0.18em] uppercase text-[#9a8f7a]">As read in</span>
          <span className="font-[var(--font-instrument-serif)] text-lg tracking-tight">The Paris Review</span>
          <span className="font-mono text-sm tracking-tight">WIRED</span>
          <span className="font-[var(--font-instrument-serif)] italic text-lg">Kinfolk</span>
          <span className="font-semibold tracking-tight">THE ATLANTIC</span>
          <span className="text-[#9a8f7a]">Essayists · Researchers · Novelists</span>
        </div>
      </section>

      {/* Manifesto */}
      <section id="manifesto" className="max-w-[1160px] mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="text-xs font-mono tracking-[0.18em] uppercase text-[#9a8f7a]">Manifesto — Why paper matters</div>
            <h2 className="mt-4 font-[var(--font-instrument-serif)] text-[34px] leading-[0.95] tracking-[-0.02em]">
              Software should get <br />
              <span className="italic">out of your way.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-8 text-sm leading-6 text-[#3a352e]">
            <div>
              <div className="size-8 rounded-full border border-[#e8e0cc] grid place-items-center text-xs mb-3">01</div>
              <h3 className="font-semibold text-[#1a1a18]">Capture without friction</h3>
              <p className="mt-2 text-[#5a5346] font-[var(--font-newsreader)]">A single keystroke. No title required. Just think and press enter. A note is a thought, not a document.</p>
            </div>
            <div>
              <div className="size-8 rounded-full border border-[#e8e0cc] grid place-items-center text-xs mb-3">02</div>
              <h3 className="font-semibold text-[#1a1a18]">Link by meaning</h3>
              <p className="mt-2 text-[#5a5346] font-[var(--font-newsreader)]">Type [[ and watch ideas braid themselves. No folders, no hierarchy — only associations you actually made.</p>
            </div>
            <div>
              <div className="size-8 rounded-full border border-[#e8e0cc] grid place-items-center text-xs mb-3">03</div>
              <h3 className="font-semibold text-[#1a1a18]">Remember gently</h3>
              <p className="mt-2 text-[#5a5346] font-[var(--font-newsreader)]">Synapse resurfaces notes right before you&apos;d forget them. Not aggressively — like a librarian who knows you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: writing */}
      <section id="how" className="max-w-[1160px] mx-auto px-6 pb-16">
        <div className="rounded-[28px] border border-[#e8e0cc] bg-white overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-10">
              <div className="text-xs font-mono tracking-[0.18em] uppercase text-[#9a8f7a]">Writing experience</div>
              <h3 className="mt-3 font-[var(--font-instrument-serif)] text-[28px] leading-none">A serif page, not a dashboard.</h3>
              <p className="mt-3 text-sm leading-6 text-[#5a5346] font-[var(--font-newsreader)]">We obsessed over margins, line-height, and the sound your keyboard doesn&apos;t make. Full-screen focus, typewriter scroll, and themes that match your paper.</p>

              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Distraction-free · Zen · Typewriter modes",
                  "Cite from PDF with one drag",
                  "Export to beautiful print-ready pages",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-1 size-1.5 rounded-full bg-[#b89a5a] shrink-0" />
                    <span className="text-[#3a352e]">{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex gap-3">
                <a href="#" className="px-5 py-2.5 rounded-full bg-[#1a1a18] text-white text-sm">Try the editor</a>
                <span className="text-xs font-mono tracking-wide text-[#9a8f7a] self-center">No credit card</span>
              </div>
            </div>

            <div className="bg-[#fdfbf5] border-t lg:border-t-0 lg:border-l border-[#e8e0cc] p-6 sm:p-8">
              <div className="bg-white rounded-xl border border-[#e8e0cc] p-6 shadow-sm">
                <div className="flex items-center justify-between text-xs font-mono text-[#9a8f7a]">
                  <span>Daily note · 05 Aug 2026</span>
                  <span>Words 342</span>
                </div>
                <div className="mt-4 space-y-3 font-[var(--font-newsreader)] text-[15px] leading-7 text-[#1a1a18]">
                  <p>
                    Today I read <u className="decoration-[#e8c9a8] decoration-2 underline-offset-4">Montaigne on memory</u> — he says reading without writing is like sailing without a keel.
                  </p>
                  <p className="text-[#6b6252] italic border-l-2 border-[#e8e0cc] pl-4">“We should not imitate, but metabolize.” → link to [[commonplace book]]?</p>
                  <div className="flex gap-2 pt-2">
                    <span className="px-2.5 py-1 rounded-full bg-[#fdfbf5] border border-[#e8e0cc] text-xs font-mono">#reading</span>
                    <span className="px-2.5 py-1 rounded-full bg-[#fdfbf5] border border-[#e8e0cc] text-xs font-mono">#memory</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#9a8f7a]">
                <span className="size-2 rounded-full bg-emerald-500" /> Auto-saved · Encrypted · Offline
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Praise */}
      <section id="praise" className="bg-[#1a1a18] text-[#fdfbf5]">
        <div className="max-w-[1160px] mx-auto px-6 py-14">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-[var(--font-instrument-serif)] text-[30px] leading-none">
              Writers <span className="italic font-normal">stay for the quiet.</span>
            </h2>
            <span className="text-xs font-mono tracking-[0.18em] uppercase text-white/50">Selected notes on Synapse</span>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { q: "I’ve tried every notes app. This is the first one that feels like thinking, not filing.", a: "Mira L.", r: "Essayist, 340 notes" },
              { q: "The daily resurface is eerie. It brings back exactly what I was about to forget.", a: "Kenji T.", r: "Researcher, 2 years" },
              { q: "No gamification, no streaks. Just my words, beautifullySet.", a: "Sofia R.", r: "Novelist, 1,100 notes" },
            ].map((t) => (
              <div key={t.a} className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <div className="text-white/60 text-sm">“</div>
                <p className="text-sm leading-6 text-[#fdfbf5] font-[var(--font-newsreader)]">{t.q}</p>
                <div className="mt-6 text-xs font-mono tracking-wide text-white/60">{t.a} — {t.r}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-[#fdfbf5] text-[#1a1a18] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="font-[var(--font-instrument-serif)] text-2xl leading-none">Start your paper trail.</div>
              <div className="text-sm text-[#5a5346] mt-1 font-[var(--font-newsreader)]">Free for 100 notes. No tracking, no ads. Your words stay yours.</div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a href="#" className="px-6 py-3 rounded-full bg-[#1a1a18] text-white text-sm font-medium">Create account</a>
              <span className="text-xs font-mono text-[#9a8f7a]">or try demo →</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#e8e0cc] bg-[#fdfbf5]">
        <div className="max-w-[1160px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono tracking-wide text-[#9a8f7a]">
          <span>© 2026 SYNAPSE — 01 PAPER · Set in Instrument Serif & Newsreader</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-[#1a1a18]">Privacy</a>
            <a href="#" className="hover:text-[#1a1a18]">Colophon</a>
            <Link href="/" className="hover:text-[#1a1a18]">All versions</Link>
          </span>
        </div>
        <div className="pb-24" />
      </footer>
    </div>
  );
}
