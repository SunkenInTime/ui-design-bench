import Link from "next/link";

export default function PageFive() {
  return (
    <div className="min-h-screen bg-[#fbfaf8] text-zinc-900 selection:bg-violet-500 selection:text-white">
      {/* ambient */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fbfaf8] to-[#f5f3ff]" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-r from-violet-300/40 via-fuchsia-200/30 to-blue-300/30 blur-3xl rounded-full" />
        <div className="absolute top-64 -right-32 size-[420px] bg-gradient-to-br from-violet-400/20 to-transparent blur-2xl rounded-full" />
        <div className="absolute bottom-0 left-0 right-0 h-[420px] bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Nav — glass */}
      <div className="sticky top-0 z-20 pt-4 px-4">
        <div className="max-w-[1160px] mx-auto rounded-full bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] px-2 sm:px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3 pl-1">
            <div className="size-8 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 grid place-items-center text-white text-sm shadow">◐</div>
            <span className="font-semibold tracking-tight hidden sm:inline">SYNAPSE</span>
            <span className="text-xs px-2 py-1 rounded-full bg-violet-600 text-white hidden sm:inline">05 · AURA</span>
          </div>
          <nav className="hidden md:flex items-center gap-1 text-sm text-zinc-600">
            <a href="#aura" className="px-3 py-1.5 rounded-full hover:bg-white">Aura</a>
            <a href="#flow" className="px-3 py-1.5 rounded-full hover:bg-white">Flow</a>
            <a href="#pricing" className="px-3 py-1.5 rounded-full hover:bg-white">Pricing</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/" className="hidden sm:inline text-sm text-zinc-600 hover:text-zinc-900 px-2">Hub</Link>
            <a href="#" className="hidden sm:inline text-sm px-4 py-2 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50">Sign in</a>
            <a href="#" className="px-5 py-2 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-black shadow-[0_8px_20px_rgba(0,0,0,0.12)]">Get Synapse free →</a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-[1160px] mx-auto px-6 pt-10 sm:pt-14 pb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 shadow-sm text-xs">
          <span className="size-2 rounded-full bg-violet-500 animate-pulse" />
          <span className="font-medium tracking-wide">New — Synapse Aura: notes that float, links that breathe</span>
          <span className="hidden sm:inline text-zinc-400">·</span>
          <span className="hidden sm:inline text-violet-600 font-medium">Watch 30s film →</span>
        </div>

        <h1 className="mt-8 text-[42px] sm:text-[64px] lg:text-[76px] font-[700] leading-[0.88] tracking-[-0.04em]">
          <span className="bg-gradient-to-b from-zinc-900 to-zinc-600 bg-clip-text text-transparent">A second brain</span>
          <br />
          <span className="font-light tracking-[-0.05em] bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-600 bg-clip-text text-transparent">that feels weightless.</span>
        </h1>

        <p className="mt-6 text-[17px] leading-7 text-zinc-500 max-w-[640px] mx-auto">
          No folders. No clutter. Just glass, motion, and meaning. Capture in a keystroke, glide through connections,
          and let important ideas rise—like light through water.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#" className="px-7 py-3.5 rounded-full bg-zinc-900 text-white font-medium hover:bg-black transition-colors shadow-[0_12px_28px_rgba(0,0,0,0.14)]">Start free — no card needed</a>
          <a href="#" className="px-7 py-3.5 rounded-full bg-white border border-zinc-200 font-medium hover:bg-zinc-50">See live demo</a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 text-xs text-zinc-500">
          <span className="flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-emerald-500" /> 4.9/5 from 3,200+ reviews</span>
          <span className="text-zinc-300 hidden sm:inline">·</span>
          <span className="hidden sm:inline">Offline-first · E2E encrypted</span>
        </div>

        {/* Floating stage */}
        <div className="mt-12 relative">
          {/* soft glow */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-violet-100/50 via-transparent to-transparent blur-2xl rounded-[40px]" />

          <div className="relative mx-auto max-w-[980px] rounded-[28px] bg-white/80 backdrop-blur-xl border border-white shadow-[0_24px_64px_rgba(0,0,0,0.12),0_1px_0_rgba(255,255,255,1)_inset] overflow-hidden">
            {/* top bar */}
            <div className="h-11 border-b border-zinc-100 flex items-center justify-between px-4 bg-white/60 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="size-3 rounded-full bg-red-400" />
                  <span className="size-3 rounded-full bg-amber-300" />
                  <span className="size-3 rounded-full bg-emerald-400" />
                </div>
                <span className="hidden sm:inline text-xs font-medium text-zinc-600">synapse://today</span>
                <span className="hidden sm:inline text-xs px-2 py-1 rounded-full bg-violet-600 text-white">Aura active</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-1.5 rounded-full bg-zinc-900 text-white">⌘ K</span>
                <span className="text-xs text-zinc-500 hidden sm:inline">to link anything</span>
              </div>
            </div>

            <div className="p-4 sm:p-6 grid lg:grid-cols-[320px_1fr] gap-4 sm:gap-6 bg-gradient-to-br from-white via-white to-violet-50/50">
              {/* left stack — levitating cards */}
              <div className="space-y-3">
                <div className="rounded-2xl bg-white border border-zinc-200/60 p-4 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                  <div className="text-xs tracking-widest uppercase text-zinc-400">Quick capture</div>
                  <div className="mt-2 text-sm font-medium leading-snug">Tried a new way to stop forgetting books: ask one question per chapter.</div>
                  <div className="mt-3 flex gap-1.5">
                    <span className="px-2 py-1 rounded-full bg-violet-600 text-white text-xs">[[ reading ]]</span>
                    <span className="px-2 py-1 rounded-full bg-zinc-900 text-white text-xs">+ Link</span>
                  </div>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-4 shadow-[0_12px_28px_rgba(124,58,237,0.35)]">
                  <div className="text-xs tracking-widest uppercase text-white/70">Resurface</div>
                  <div className="mt-2 text-sm font-medium">“You linked ‘forgetting curve’ 9 days ago — revisit before it fades?”</div>
                  <div className="mt-3 flex gap-2">
                    <span className="px-3 py-1.5 rounded-full bg-white text-zinc-900 text-xs font-medium">Open</span>
                    <span className="px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-xs">Snooze</span>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/70 backdrop-blur border border-zinc-200/60 p-4 flex items-center gap-3">
                  <div className="size-9 rounded-full bg-gradient-to-br from-fuchsia-400 to-violet-500 grid place-items-center text-white text-xs">◎</div>
                  <div>
                    <div className="text-sm font-medium">342 notes</div>
                    <div className="text-xs text-zinc-500">synced · encrypted</div>
                  </div>
                  <span className="ml-auto size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                </div>
              </div>

              {/* right — airy editor */}
              <div className="rounded-2xl bg-white border border-zinc-200/60 shadow-[0_8px_24px_rgba(0,0,0,0.06)] overflow-hidden">
                <div className="px-5 py-4 border-b border-zinc-100 flex items-center justify-between">
                  <span className="text-sm font-medium">How I finally remembered what I read</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-zinc-900 text-white">147 words</span>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="text-sm leading-7 text-zinc-700">
                    For years I highlighted and forgot. Now every note must answer: <span className="px-1.5 py-0.5 rounded bg-violet-50 border border-violet-200 text-violet-700 font-medium">what question does this solve?</span>
                  </div>
                  <div className="mt-4 rounded-xl bg-[#faf8ff] border border-violet-100 p-3">
                    <div className="text-xs tracking-widest uppercase text-violet-600 font-medium">Backlinks · 3</div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-full bg-white border border-violet-200 text-xs">[[ reading workflow ]]</span>
                      <span className="px-2.5 py-1 rounded-full bg-white border border-violet-200 text-xs">[[ spaced repetition ]]</span>
                      <span className="px-2.5 py-1 rounded-full bg-violet-600 text-white text-xs">+ New link ✨</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
                    <span className="size-2 rounded-full bg-emerald-500" /> Auto-saved · Offline
                    <span className="ml-auto hidden sm:inline">Drop an image or PDF →</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-100 bg-white/60 backdrop-blur px-4 py-3 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-zinc-500">Tip: Press <span className="px-1.5 py-0.5 rounded bg-zinc-900 text-white font-mono">C</span> to capture anywhere — even when offline.</span>
              <span className="text-xs font-medium text-violet-600">Explore graph view →</span>
            </div>
          </div>

          {/* floating badges */}
          <div className="hidden lg:flex absolute -right-6 top-20 rotate-3 bg-white border border-zinc-200 rounded-2xl p-3 shadow-xl items-center gap-3">
            <span className="size-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 grid place-items-center text-white">✓</span>
            <div className="pr-2">
              <div className="text-xs font-semibold">SOC 2 certified</div>
              <div className="text-xs text-zinc-500">Encryption you can audit</div>
            </div>
          </div>
          <div className="hidden lg:flex absolute -left-6 bottom-16 -rotate-2 bg-zinc-900 text-white rounded-2xl p-3 shadow-xl items-center gap-3">
            <span className="size-8 rounded-full bg-white text-zinc-900 grid place-items-center text-xs font-bold">◐</span>
            <div className="pr-2">
              <div className="text-xs font-semibold">42ms search</div>
              <div className="text-xs text-white/60">Across 50k notes</div>
            </div>
          </div>
        </div>

        {/* logos */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
          <span className="tracking-widest uppercase">Loved by teams at</span>
          <span className="font-semibold text-zinc-700">Linear</span>
          <span className="font-[var(--font-instrument-serif)] italic text-base text-zinc-700">Superhuman</span>
          <span className="font-mono text-zinc-700">Vercel</span>
          <span className="font-semibold tracking-tight text-zinc-700">PERPLEXITY</span>
        </div>
      </section>

      {/* Flow features — glass cards */}
      <section id="flow" className="max-w-[1160px] mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { title: "Capture feels weightless", desc: "One key, one thought. Synapse floats above your work — never in the way. Native, fast, feather-light.", gradient: "from-violet-600 to-indigo-600" },
            { title: "Links find themselves", desc: "Link any word, block, or image. Aura suggests what matters — quietly, without the LLM theater.", gradient: "from-fuchsia-500 to-violet-600" },
            { title: "Memory, amplified", desc: "A calm resurface at the perfect moment. Not a streak — a nudge, like a friend who remembers for you.", gradient: "from-blue-500 to-violet-600" },
          ].map((f) => (
            <div key={f.title} className="rounded-[24px] bg-white/70 backdrop-blur border border-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6">
              <div className={`size-10 rounded-2xl bg-gradient-to-br ${f.gradient} shadow-[0_8px_20px_rgba(124,58,237,0.25)] grid place-items-center text-white text-sm`}>✦</div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">{f.desc}</p>
              <div className="mt-4 text-xs font-medium text-violet-600">Learn more →</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing — premium */}
      <section id="pricing" className="max-w-[1160px] mx-auto px-6 pb-10">
        <div className="rounded-[28px] overflow-hidden border border-zinc-200 bg-white shadow-[0_16px_48px_rgba(0,0,0,0.08)]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-6 sm:p-8">
              <div className="text-xs tracking-[0.16em] uppercase text-zinc-500 font-mono">Pricing — simple & calm</div>
              <h3 className="mt-3 text-[28px] font-semibold tracking-tight leading-none">Pay only when you sync.</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">Local is free forever. Sync, publish, and collaborate when you’re ready — encrypted end-to-end.</p>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                <div className="rounded-2xl border border-zinc-200 p-5">
                  <div className="text-xs tracking-widest uppercase text-zinc-500">Personal · Free</div>
                  <div className="mt-2 text-3xl font-semibold">$0</div>
                  <div className="text-xs text-zinc-500">Offline, unlimited notes</div>
                  <div className="mt-4 space-y-1.5 text-sm text-zinc-600">
                    <div>✓ Markdown files</div>
                    <div>✓ Graph + search</div>
                    <div>✓ Daily resurface</div>
                  </div>
                  <a href="#" className="mt-5 block text-center py-2.5 rounded-full border border-zinc-200 font-medium hover:bg-zinc-50">Start free</a>
                </div>
                <div className="rounded-2xl bg-zinc-900 text-white p-5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 to-transparent pointer-events-none" />
                  <div className="relative">
                    <div className="text-xs tracking-widest uppercase text-white/60">Aura · $8/mo</div>
                    <div className="mt-2 text-3xl font-semibold">$8</div>
                    <div className="text-xs text-white/60">Sync & publish, keep calm</div>
                    <div className="mt-4 space-y-1.5 text-sm text-white/85">
                      <div>✓ E2E encrypted sync</div>
                      <div>✓ Public garden URLs</div>
                      <div>✓ 5 → ∞ devices</div>
                    </div>
                    <a href="#" className="mt-5 block text-center py-2.5 rounded-full bg-white text-zinc-900 font-medium hover:bg-zinc-100">Upgrade to Aura</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-white border-t lg:border-t-0 lg:border-l border-zinc-200 p-6 sm:p-8 flex flex-col">
              <div className="text-sm font-semibold">What Aura users feel ✨</div>
              <div className="mt-4 space-y-3 flex-1">
                {[
                  { q: "It’s like Apple Notes and Obsidian had a child who actually meditates.", a: "Priya — designer" },
                  { q: "The motion is delicious. Every interaction feels considered, not clever.", a: "Mateo — writer" },
                ].map((t) => (
                  <div key={t.a} className="rounded-2xl bg-white border border-zinc-200 p-4 shadow-sm">
                    <div className="text-sm leading-6 text-zinc-700">“{t.q}”</div>
                    <div className="text-xs text-zinc-500 mt-2">— {t.a}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-zinc-900 text-white p-4 flex items-center justify-between">
                <div className="text-sm font-medium">Start your aura today</div>
                <a href="#" className="px-4 py-2 rounded-full bg-white text-zinc-900 text-sm font-medium">Try free →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white/60 backdrop-blur">
        <div className="max-w-[1160px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <span>© 2026 SYNAPSE — 05 AURA · Crafted for focus · Images are placeholders</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-zinc-900">Privacy</a>
            <a href="#" className="hover:text-zinc-900">Security</a>
            <Link href="/" className="hover:text-zinc-900">All versions</Link>
          </span>
        </div>
        <div className="pb-28" />
      </footer>
    </div>
  );
}
