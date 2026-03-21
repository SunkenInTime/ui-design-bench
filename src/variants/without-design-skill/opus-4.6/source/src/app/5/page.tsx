import DesignSwitcher from "@/variants/without-design-skill/opus-4.6/source/src/components/DesignSwitcher";

export default function DesignFive() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0f0720] text-white">
      <DesignSwitcher />

      {/* Background gradient mesh */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-[120px]" />
        <div className="absolute top-1/4 -right-32 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="absolute -bottom-32 left-1/3 h-[400px] w-[400px] rounded-full bg-pink-500/20 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[80px]" />
      </div>

      <div className="relative z-10">
        {/* Nav */}
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-sm font-bold backdrop-blur-sm">
              ✦
            </div>
            <span className="text-lg font-semibold tracking-tight">Prism</span>
          </div>
          <div className="hidden items-center gap-8 text-sm text-white/50 md:flex">
            <a href="#" className="transition hover:text-white">Features</a>
            <a href="#" className="transition hover:text-white">Pricing</a>
            <a href="#" className="transition hover:text-white">Blog</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-xl px-4 py-2 text-sm font-medium text-white/60 transition hover:text-white">
              Sign in
            </button>
            <button className="rounded-xl bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20">
              Get Prism
            </button>
          </div>
        </nav>

        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pt-28 pb-20 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-white/70 ring-1 ring-white/10 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Trusted by 50,000+ thinkers
            </div>
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl">
              Your ideas in{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                perfect clarity
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/50">
              Prism is the note-taking app that brings your scattered thoughts
              into focus. A second brain wrapped in glass, reflecting every
              angle of your knowledge.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 px-8 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:shadow-xl hover:shadow-purple-500/30">
                Start for free
              </button>
              <button className="flex h-12 items-center gap-2 rounded-2xl bg-white/5 px-8 text-sm font-medium text-white/80 ring-1 ring-white/10 backdrop-blur-sm transition hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                See it in action
              </button>
            </div>
          </div>
        </section>

        {/* Glass cards preview */}
        <section className="mx-auto max-w-5xl px-6 pb-24">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Morning Ideas",
                preview: "The connection between deep work and creative output...",
                tags: ["Productivity", "Research"],
                color: "from-purple-500/20 to-purple-500/5",
              },
              {
                title: "Project Atlas",
                preview: "Mapping the entire knowledge base into a navigable...",
                tags: ["Project", "Architecture"],
                color: "from-pink-500/20 to-pink-500/5",
              },
              {
                title: "Book Notes",
                preview: "Key insights from 'Thinking, Fast and Slow' by...",
                tags: ["Reading", "Psychology"],
                color: "from-blue-500/20 to-blue-500/5",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-md transition hover:bg-white/10 hover:ring-white/20"
              >
                <div className={`mb-4 h-24 rounded-xl bg-gradient-to-b ${card.color}`} />
                <h3 className="mb-1 font-semibold text-white/90">{card.title}</h3>
                <p className="mb-4 text-sm text-white/40">{card.preview}</p>
                <div className="flex gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              A lens for every thought
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/40">
              Prism refracts your raw ideas into organized, beautiful, and
              interconnected knowledge.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Refraction Engine",
                desc: "Write once, see your ideas from multiple angles. Prism automatically creates different views — timeline, graph, outline — from the same content.",
                gradient: "from-purple-500/10 to-transparent",
              },
              {
                title: "Focus Beam",
                desc: "Distraction-free writing with adaptive ambient soundscapes. The editor fades everything away except what matters right now.",
                gradient: "from-pink-500/10 to-transparent",
              },
              {
                title: "Spectrum Search",
                desc: "Search by meaning, not just keywords. Ask questions in natural language and get answers drawn from your entire knowledge base.",
                gradient: "from-blue-500/10 to-transparent",
              },
              {
                title: "Crystal Sync",
                desc: "Real-time sync across all devices with end-to-end encryption. Your thoughts are everywhere you are, and nowhere you aren't.",
                gradient: "from-indigo-500/10 to-transparent",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-sm"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient}`} />
                <div className="relative">
                  <h3 className="mb-3 text-xl font-semibold">{f.title}</h3>
                  <p className="leading-relaxed text-white/50">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                text: "Prism is the first note app where I actually enjoy writing. The glass UI is gorgeous.",
                name: "Sarah K.",
                role: "Designer",
              },
              {
                text: "I moved 10,000 notes from Notion. The Spectrum Search alone made it worth it — I can find anything.",
                name: "David M.",
                role: "PM at Meta",
              },
              {
                text: "The Refraction Engine is magic. I write a note and instantly see it in 4 different views.",
                name: "Lena P.",
                role: "PhD Researcher",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm"
              >
                <p className="mb-6 text-sm leading-relaxed text-white/60">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-white/40">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-6 py-24 text-center">
          <div className="relative overflow-hidden rounded-3xl bg-white/5 px-8 py-20 ring-1 ring-white/10 backdrop-blur-sm">
            <div className="absolute -top-20 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-purple-500/30 blur-[80px]" />
            <div className="relative">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                See your thoughts in a{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  new light
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-md text-white/40">
                Join the waitlist for early access. Free for personal use, forever.
              </p>
              <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="h-12 flex-1 rounded-xl bg-white/10 px-5 text-sm text-white placeholder-white/30 ring-1 ring-white/10 backdrop-blur-sm focus:outline-none focus:ring-white/30"
                />
                <button className="h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:shadow-xl">
                  Join waitlist
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mx-auto max-w-6xl border-t border-white/10 px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <span className="text-sm text-white/30">&copy; 2026 Prism. All rights reserved.</span>
            <div className="flex gap-6 text-sm text-white/30">
              <a href="#" className="transition hover:text-white/60">Privacy</a>
              <a href="#" className="transition hover:text-white/60">Terms</a>
              <a href="#" className="transition hover:text-white/60">Twitter</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

