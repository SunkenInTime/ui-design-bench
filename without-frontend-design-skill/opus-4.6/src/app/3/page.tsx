import DesignSwitcher from "@/components/DesignSwitcher";

export default function DesignThree() {
  return (
    <div className="min-h-screen bg-[#faf6f0] text-stone-900">
      <DesignSwitcher />

      {/* Nav */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-700">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
          </svg>
          <span className="text-lg font-semibold tracking-tight text-amber-900">Grove</span>
        </div>
        <div className="hidden items-center gap-8 text-sm text-stone-500 md:flex">
          <a href="#" className="transition hover:text-stone-800">Features</a>
          <a href="#" className="transition hover:text-stone-800">Journal</a>
          <a href="#" className="transition hover:text-stone-800">Community</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-full px-5 py-2 text-sm font-medium text-stone-600 transition hover:text-stone-900">
            Sign in
          </button>
          <button className="rounded-full bg-amber-800 px-5 py-2 text-sm font-medium text-amber-50 transition hover:bg-amber-700">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-medium text-amber-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 19V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14" /><path d="M6 19h12" /><path d="M12 19v-4" /></svg>
              A space for slow thinking
            </div>
            <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-stone-900 md:text-6xl">
              Let your ideas{" "}
              <span className="italic text-amber-700">grow</span>{" "}
              like a garden.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-stone-500">
              Grove is a warm, intentional note-taking space. Plant a seed of
              an idea, nurture it with connections, and watch your second brain
              flourish over time.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button className="h-12 rounded-full bg-amber-800 px-8 text-sm font-medium text-amber-50 transition hover:bg-amber-700">
                Plant your first seed
              </button>
              <button className="flex h-12 items-center justify-center gap-2 rounded-full border border-stone-300 px-8 text-sm font-medium text-stone-600 transition hover:border-stone-400 hover:bg-white">
                Explore the garden
              </button>
            </div>
          </div>
          {/* Illustration - Organic shapes */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-80 w-80">
              <div className="absolute inset-0 rotate-12 rounded-[60px] bg-amber-200/60" />
              <div className="absolute inset-4 -rotate-6 rounded-[50px] bg-amber-100/80" />
              <div className="absolute inset-10 rotate-3 rounded-[40px] bg-white/90 shadow-sm" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-14">
                <div className="h-4 w-3/4 rounded-full bg-amber-200" />
                <div className="h-4 w-full rounded-full bg-stone-200" />
                <div className="h-4 w-5/6 rounded-full bg-stone-100" />
                <div className="mt-3 h-4 w-2/3 rounded-full bg-amber-100" />
                <div className="h-4 w-4/5 rounded-full bg-stone-100" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { emoji: "🌱", text: "Seeds", sub: "Capture fleeting thoughts before they disappear" },
            { emoji: "🌿", text: "Branches", sub: "Connect ideas organically as they grow" },
            { emoji: "🌳", text: "Trees", sub: "Mature concepts that form your knowledge forest" },
          ].map((v, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200/50">
              <div className="mb-3 text-3xl">{v.emoji}</div>
              <div className="text-lg font-semibold text-stone-800">{v.text}</div>
              <div className="mt-1 text-sm text-stone-500">{v.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Cultivate your thinking
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-stone-500">
            Every great idea starts small. Grove gives your thoughts the space
            and nourishment to develop into something remarkable.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              title: "Daily Reflections",
              desc: "Start each day with a gentle prompt. Capture your morning thoughts and let Grove weave them into your growing knowledge.",
              bg: "bg-amber-50",
              accent: "bg-amber-200",
            },
            {
              title: "Natural Linking",
              desc: "No rigid folder hierarchies. Ideas connect like roots underground - naturally, organically, and in ways that surprise you.",
              bg: "bg-green-50",
              accent: "bg-green-200",
            },
            {
              title: "Seasonal Reviews",
              desc: "Periodic prompts help you revisit older notes, prune what no longer serves you, and celebrate how your thinking has evolved.",
              bg: "bg-orange-50",
              accent: "bg-orange-200",
            },
            {
              title: "Quiet Mode",
              desc: "No notifications, no distractions. Grove respects your focus and only speaks when you ask it to.",
              bg: "bg-stone-50",
              accent: "bg-stone-200",
            },
          ].map((f, i) => (
            <div key={i} className={`rounded-3xl ${f.bg} p-8`}>
              <div className={`mb-4 h-2 w-16 rounded-full ${f.accent}`} />
              <h3 className="mb-3 text-xl font-semibold text-stone-800">{f.title}</h3>
              <p className="leading-relaxed text-stone-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-200/50 md:p-16">
          <div className="mx-auto max-w-2xl text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-6 text-amber-300">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21" />
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3" />
            </svg>
            <p className="text-xl leading-relaxed text-stone-700 md:text-2xl">
              Grove feels like sitting in a sunlit library with unlimited paper
              and no deadlines. It&apos;s made me fall in love with thinking again.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="h-10 w-10 rounded-full bg-amber-200" />
              <div className="text-left">
                <div className="text-sm font-medium text-stone-800">Maya Chen</div>
                <div className="text-xs text-stone-500">Poet &amp; Essayist</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-5xl">
          Your thoughts deserve a{" "}
          <span className="italic text-amber-700">beautiful</span> home.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-stone-500">
          Start for free. No credit card. No noise. Just you and your ideas.
        </p>
        <button className="mt-8 h-12 rounded-full bg-amber-800 px-8 text-sm font-medium text-amber-50 transition hover:bg-amber-700">
          Begin your garden
        </button>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl border-t border-stone-200 px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-sm text-stone-400">&copy; 2026 Grove. Tend your mind.</span>
          <div className="flex gap-6 text-sm text-stone-400">
            <a href="#" className="transition hover:text-stone-600">Privacy</a>
            <a href="#" className="transition hover:text-stone-600">Terms</a>
            <a href="#" className="transition hover:text-stone-600">Blog</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
