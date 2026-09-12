import Link from "next/link";

export default function PageThree() {
  return (
    <div className="min-h-screen bg-[#fef7ec] text-[#2b2117] selection:bg-[#f4a259] selection:text-white">
      {/* blob bg */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 size-[520px] rounded-full bg-[#fbe8c8] blur-[2px] opacity-60" />
        <div className="absolute top-40 -left-24 size-[360px] rounded-full bg-[#d7e8c5] opacity-50" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] rounded-t-[100%] bg-white/70" />
      </div>

      {/* Nav — pill */}
      <div className="sticky top-3 z-20 px-4">
        <div className="max-w-[1160px] mx-auto flex items-center justify-between gap-4 rounded-full bg-white/90 backdrop-blur border border-[#f2dcc0] shadow-[0_8px_24px_rgba(43,33,23,0.08)] px-3 sm:px-4 py-2">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-[#2b2117] text-white grid place-items-center text-sm">✿</div>
            <span className="font-semibold tracking-tight hidden sm:inline">SYNAPSE</span>
            <span className="text-xs px-2 py-1 rounded-full bg-[#fef7ec] border border-[#f2dcc0] text-[#9a7a4a]">03 · GARDEN</span>
          </div>
          <nav className="hidden md:flex items-center gap-1 text-sm">
            <a href="#tend" className="px-3 py-1.5 rounded-full hover:bg-[#fef7ec]">How it grows</a>
            <a href="#harvest" className="px-3 py-1.5 rounded-full hover:bg-[#fef7ec]">Harvest</a>
            <a href="#community" className="px-3 py-1.5 rounded-full hover:bg-[#fef7ec]">Community</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/" className="hidden sm:inline text-sm text-[#7a5a3a] hover:text-[#2b2117] px-2">Hub</Link>
            <a href="#" className="px-4 py-2 rounded-full bg-[#2b2117] text-white text-sm font-medium hover:bg-black">Plant your garden →</a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-[1160px] mx-auto px-6 pt-10 sm:pt-12 pb-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#f2dcc0] text-xs">
              <span className="size-2 rounded-full bg-[#7ab86f]" />
              <span className="font-medium text-[#7a5a3a]">New: Seedlings — daily prompts that grow with you 🌱</span>
            </div>

            <h1 className="mt-6 text-[44px] sm:text-[56px] lg:text-[60px] font-[800] leading-[0.9] tracking-[-0.03em]">
              Grow ideas
              <br />
              <span className="inline-block px-3 py-1 rounded-[20px] bg-[#f4a259] text-white rotate-[-0.8deg] text-[0.9em]">like a garden,</span>
              <br />
              not a filing cabinet.
            </h1>

            <p className="mt-5 text-[16px] leading-7 text-[#6b553f] max-w-[520px]">
              Synapse is a cozy, visual second brain. Drop seeds (notes), water them with links, watch connections bloom.
              Kind, playful, a little wild — just like thinking should be.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#" className="px-6 py-3 rounded-full bg-[#f4a259] text-white text-sm font-semibold shadow-[0_8px_20px_rgba(244,162,89,0.35)] hover:bg-[#e8923a] transition-colors">Start for free — 5 min setup</a>
              <a href="#" className="px-6 py-3 rounded-full bg-white border border-[#f2dcc0] text-sm font-medium hover:bg-[#fef7ec]">See a real garden →</a>
            </div>

            <div className="mt-6 flex items-center gap-3 text-xs text-[#9a7a4a]">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/100?img=33" alt="" className="size-7 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/100?img=22" alt="" className="size-7 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/100?img=19" alt="" className="size-7 rounded-full border-2 border-white" />
                <span className="size-7 rounded-full bg-[#2b2117] text-white grid place-items-center text-[10px] font-bold border-2 border-white">+8k</span>
              </div>
              <span>Loved by illustrators, teachers & daydreamers</span>
            </div>
          </div>

          {/* Garden board */}
          <div className="relative">
            <div className="absolute -inset-3 bg-[#f2dcc0] rounded-[28px] rotate-1 opacity-60" />
            <div className="relative rounded-[24px] bg-white border border-[#f2dcc0] shadow-[0_20px_50px_rgba(43,33,23,0.12)] overflow-hidden">
              <div className="h-10 bg-[#fef7ec] border-b border-[#f2dcc0] flex items-center justify-between px-4">
                <span className="text-xs font-medium tracking-wide text-[#7a5a3a]">my garden · today</span>
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-[#f4a259]" />
                  <span className="size-2.5 rounded-full bg-[#7ab86f]" />
                  <span className="size-2.5 rounded-full bg-[#9ad0f5]" />
                </div>
              </div>

              <div className="p-4 sm:p-5 bg-[#fefdf9]">
                <div className="grid grid-cols-12 gap-3">
                  {/* sidebar */}
                  <div className="col-span-4 space-y-2">
                    <div className="text-[11px] font-semibold tracking-widest uppercase text-[#9a7a4a]">Seeds</div>
                    {[
                      { t: "🌷 Morning pages", c: "bg-[#fef7ec] border-[#f2dcc0]", d: "3 sprouts today" },
                      { t: "🍅 Research stew", c: "bg-[#f0f7e8] border-[#d7e8c5]", d: "12 notes" },
                      { t: "✏️ Book clippings", c: "bg-[#eef2ff] border-[#d9deff]", d: "48 saved" },
                    ].map((s) => (
                      <div key={s.t} className={`rounded-2xl border p-3 ${s.c}`}>
                        <div className="text-sm font-medium leading-tight">{s.t}</div>
                        <div className="text-xs text-[#7a5a3a]">{s.d}</div>
                      </div>
                    ))}
                    <div className="rounded-2xl bg-[#2b2117] text-white p-3">
                      <div className="text-xs tracking-widest uppercase opacity-70">Daily water</div>
                      <div className="text-sm font-medium mt-1">Review “why we play” 🌿</div>
                    </div>
                  </div>

                  {/* canvas */}
                  <div className="col-span-8">
                    <div className="rounded-2xl bg-white border border-[#f2dcc0] p-3 h-full">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-[#fef7ec] border border-[#f2dcc0]">🌱 seedling</span>
                        <span className="text-xs text-[#9a7a4a]">2 min ago</span>
                      </div>
                      <h4 className="mt-3 font-semibold leading-tight">Why do we collect ideas we never use?</h4>
                      <p className="mt-2 text-sm leading-6 text-[#6b553f]">Maybe collecting <em>is</em> the thinking. A compost pile becomes soil. Let&apos;s link this to [[creative compost]]…</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        <span className="px-2 py-1 rounded-full bg-[#f0f7e8] text-xs border border-[#d7e8c5]">#garden</span>
                        <span className="px-2 py-1 rounded-full bg-[#fef7ec] text-xs border border-[#f2dcc0]">#wonder</span>
                      </div>
                      <div className="mt-4 rounded-xl bg-[#f0f7e8] border border-[#d7e8c5] p-2.5 flex items-center gap-2">
                        <span className="size-6 rounded-full bg-white grid place-items-center text-xs">🔗</span>
                        <span className="text-xs font-medium">Linked to 4 notes — tap to wander</span>
                        <span className="ml-auto text-xs px-2 py-1 rounded-full bg-white border border-[#d7e8c5]">Bloom →</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs text-[#9a7a4a] border-t border-[#f2dcc0] pt-3">
                  <span>Press</span>
                  <span className="px-1.5 py-0.5 rounded bg-white border border-[#f2dcc0] font-mono">↵</span>
                  <span>to sprout a new seed</span>
                  <span className="ml-auto hidden sm:inline">🌼 147 days tended</span>
                </div>
              </div>
            </div>

            {/* sprout sticker */}
            <div className="absolute -bottom-3 -right-3 sm:-right-6 bg-[#7ab86f] text-white rounded-2xl px-4 py-3 shadow-lg rotate-2">
              <div className="text-xs font-bold tracking-widest uppercase">New sprout!</div>
              <div className="text-sm font-medium">“dream journaling” just bloomed 🌸</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tend */}
      <section id="tend" className="max-w-[1160px] mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: "🌱", title: "Plant quickly", desc: "Hit C, type, done. No titles, no folders. Every seed finds its place.", color: "bg-[#fef7ec] border-[#f2dcc0]" },
            { icon: "🌿", title: "Tend gently", desc: "Drag to link, or type [[ . Synapse suggests kind connections, not forced ones.", color: "bg-[#f0f7e8] border-[#d7e8c5]" },
            { icon: "🌸", title: "Bloom often", desc: "Daily bloom revisits 3 notes at the perfect time. No streaks, just gentle returns.", color: "bg-[#fdf2f8] border-[#f5d0e8]" },
          ].map((f) => (
            <div key={f.title} className={`rounded-[24px] border p-6 ${f.color}`}>
              <div className="size-10 rounded-2xl bg-white border border-black/5 grid place-items-center text-xl">{f.icon}</div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#6b553f]">{f.desc}</p>
              <div className="mt-4 text-xs font-medium underline decoration-[#f4a259] decoration-2 underline-offset-4">Learn more →</div>
            </div>
          ))}
        </div>
      </section>

      {/* Harvest / pricing */}
      <section id="harvest" className="max-w-[1160px] mx-auto px-6 pb-10">
        <div className="rounded-[28px] bg-[#2b2117] text-white p-6 sm:p-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 size-[320px] bg-[#f4a259]/20 rounded-full blur-3xl" />
          <div className="relative grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/60">
                <span className="size-1.5 rounded-full bg-[#f4a259]" /> Harvest — simple pricing
              </div>
              <h3 className="mt-3 text-[28px] font-semibold leading-none">A garden shouldn’t cost a fortune.</h3>
              <p className="mt-3 text-sm leading-6 text-white/70 max-w-xl">Free forever for personal use. Share your garden when you’re ready — invite friends, publish blooms.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="rounded-2xl bg-white text-[#2b2117] px-5 py-4 flex-1 min-w-[160px]">
                  <div className="text-xs tracking-widest uppercase text-[#9a7a4a]">Sprout · Free</div>
                  <div className="text-2xl font-bold">$0</div>
                  <div className="text-xs text-[#6b553f]">1,000 seeds · private</div>
                </div>
                <div className="rounded-2xl bg-[#f4a259] text-white px-5 py-4 flex-1 min-w-[160px]">
                  <div className="text-xs tracking-widest uppercase text-white/80">Bloom · $8/mo</div>
                  <div className="text-2xl font-bold">$8</div>
                  <div className="text-xs text-white/80">Unlimited · publish & sync</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white text-[#2b2117] p-6">
              <div className="text-sm font-semibold">What tenders say 🌻</div>
              <div className="mt-3 space-y-4">
                {[
                  { q: "My 9-year-old uses it for dinosaur facts. I use it for novel research. Both count.", a: "Aisha & Milo" },
                  { q: "It’s the first notes app that doesn’t make me feel behind.", a: "Luis, teacher" },
                ].map((t) => (
                  <div key={t.a} className="rounded-xl bg-[#fef7ec] border border-[#f2dcc0] p-3">
                    <div className="text-sm leading-6">“{t.q}”</div>
                    <div className="text-xs text-[#9a7a4a] mt-1">— {t.a}</div>
                  </div>
                ))}
              </div>
              <a href="#" className="mt-4 inline-flex px-4 py-2 rounded-full bg-[#2b2117] text-white text-sm">Join 8,423 gardens →</a>
            </div>
          </div>
        </div>
      </section>

      {/* community marquee */}
      <section id="community" className="border-y border-[#f2dcc0] bg-white/60">
        <div className="max-w-[1160px] mx-auto px-6 py-5 flex flex-wrap items-center gap-3 text-sm">
          <span className="px-3 py-1 rounded-full bg-[#fef7ec] border border-[#f2dcc0] text-[#7a5a3a]">Featured gardens</span>
          <span>🪴 Minimalist herb garden</span>
          <span className="text-[#f2dcc0]">•</span>
          <span>🍄 Mycelium reading log</span>
          <span className="text-[#f2dcc0]">•</span>
          <span>🌼 Poetry compost</span>
          <span className="text-[#f2dcc0]">•</span>
          <span className="hidden sm:inline">📚 Thesis as ecosystem</span>
        </div>
      </section>

      <footer className="max-w-[1160px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9a7a4a] pb-28">
        <span>© 2026 SYNAPSE — 03 GARDEN · Made with dirt & wonder 🪴</span>
        <span className="flex gap-4">
          <a href="#" className="hover:text-[#2b2117]">Manifesto</a>
          <a href="#" className="hover:text-[#2b2117]">Privacy like a fence</a>
          <Link href="/" className="hover:text-[#2b2117]">All gardens</Link>
        </span>
      </footer>
    </div>
  );
}
