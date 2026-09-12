import "@/generated/scoped-variant-css/without-design-skill/mimo-x-pro-preview/source/app/four/page.css";
export default function FourPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#18181B]">

      <div className="sp-page sp-mesh">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#7C3AED] text-sm font-bold text-white shadow-md shadow-violet-500/25">
              C
            </div>
            <div>
              <div className="text-[15px] font-semibold tracking-tight">Cortex</div>
              <div className="text-[11px] text-[#71717A]">Second brain, spatially</div>
            </div>
          </div>
          <nav className="hidden items-center gap-7 text-[14px] text-[#52525B] md:flex">
            <a className="transition-colors hover:text-[#7C3AED] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]" href="#product">Product</a>
            <a className="transition-colors hover:text-[#7C3AED] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]" href="#canvas">Canvas</a>
            <a className="transition-colors hover:text-[#7C3AED] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]" href="#why">Why Cortex</a>
            <a
              href="#cta"
              className="rounded-full bg-[#18181B] px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-[#7C3AED] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
            >
              Try free
            </a>
          </nav>
        </header>

        <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-8 lg:grid-cols-2 lg:items-center lg:pb-24 lg:pt-14">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3 py-1 text-[12px] font-medium text-[#7C3AED] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
              Now with spatial canvas
            </div>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#18181B] md:text-6xl">
              Your thoughts,
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#38BDF8] bg-clip-text text-transparent">
                {" "}in space.
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[#52525B]">
              Cortex is the note app for people who think in webs, not lists.
              Capture anywhere, arrange on an infinite canvas, and let links form themselves.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#cta"
                className="inline-flex min-h-12 items-center rounded-full bg-[#7C3AED] px-6 text-[15px] font-semibold text-white shadow-lg shadow-violet-500/30 transition-colors hover:bg-[#6D28D9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18181B]"
              >
                Start your vault
              </a>
              <a
                href="#canvas"
                className="inline-flex min-h-12 items-center rounded-full border border-zinc-200 bg-white px-6 text-[15px] font-medium text-[#3F3F46] transition-colors hover:border-violet-300 hover:text-[#7C3AED] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
              >
                Watch the canvas
              </a>
            </div>
            <p className="mt-5 text-[13px] text-[#71717A]">
              Free for personal use · Local-first · Export anytime
            </p>
          </div>

          <div id="canvas" className="relative mx-auto aspect-[4/3] w-full max-w-xl">
            <div className="absolute inset-0 rounded-3xl border border-zinc-200/80 bg-white/50 backdrop-blur-sm" />
            <article
              className="sp-float sp-card absolute left-[6%] top-[12%] w-[42%] rounded-2xl p-4"
              style={{ ["--r" as string]: "-3deg" }}
            >
              <div className="mono mb-2 text-[10px] uppercase tracking-wider text-[#7C3AED]">note · 2m ago</div>
              <h3 className="text-sm font-semibold">Working memory is a queue</h3>
              <p className="mt-1 text-[12px] leading-5 text-[#71717A]">
                Externalize the next action so the brain can keep thinking.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="rounded-full bg-[#EDE9FE] px-2 py-0.5 text-[10px] text-[#6D28D9]">gtd</span>
                <span className="rounded-full bg-sky-50 px-2 py-0.5 text-[10px] text-sky-700">cognition</span>
              </div>
            </article>
            <article
              className="sp-float sp-card absolute right-[4%] top-[8%] w-[38%] rounded-2xl p-4"
              style={{ ["--r" as string]: "2.5deg" }}
            >
              <div className="mono mb-2 text-[10px] uppercase tracking-wider text-pink-600">linked · graph</div>
              <h3 className="text-sm font-semibold">Atomic notes win</h3>
              <p className="mt-1 text-[12px] leading-5 text-[#71717A]">
                One idea per node makes reuse cheap.
              </p>
            </article>
            <article
              className="sp-float sp-card absolute bottom-[10%] left-[22%] w-[48%] rounded-2xl border border-violet-200 p-4 shadow-xl shadow-violet-500/10"
              style={{ ["--r" as string]: "-1deg" }}
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="mono text-[10px] uppercase tracking-wider text-[#7C3AED]">suggested link</div>
                <span className="rounded-full bg-[#7C3AED] px-2 py-0.5 text-[10px] font-medium text-white">accept</span>
              </div>
              <h3 className="text-sm font-semibold">Meeting 03.12 → onboarding friction</h3>
              <p className="mt-1 text-[12px] leading-5 text-[#71717A]">
                Shared language: “context switch cost”
              </p>
            </article>
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 400 300"
              aria-hidden
            >
              <path
                d="M90 70 C140 90, 200 80, 280 55"
                fill="none"
                stroke="#A78BFA"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.7"
              />
              <path
                d="M120 90 C150 160, 200 200, 250 230"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.55"
              />
            </svg>
          </div>
        </section>

        <section id="product" className="border-y border-zinc-200/80 bg-white/70 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="mb-10 max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Everything a second brain needs. Nothing a second brain doesn&apos;t.
              </h2>
              <p className="mt-4 text-[16px] leading-7 text-[#52525B]">
                Designed for makers, researchers, and anyone whose best ideas arrive sideways.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: "⌘",
                  title: "Capture from anywhere",
                  body: "Global hotkey, share sheet, or email-to-vault. Your inbox is always one keystroke away.",
                },
                {
                  icon: "⬡",
                  title: "Canvas + graph",
                  body: "Pin notes on an infinite board. The graph updates as you rearrange — same data, two views.",
                },
                {
                  icon: "✦",
                  title: "Ask your archive",
                  body: "Natural-language search that cites the notes it used, not a black-box summary.",
                },
              ].map((f) => (
                <article key={f.title} className="sp-card rounded-2xl p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDE9FE] text-lg text-[#7C3AED]">
                    {f.icon}
                  </div>
                  <h3 className="mb-2 text-[17px] font-semibold tracking-tight">{f.title}</h3>
                  <p className="text-[14px] leading-6 text-[#52525B]">{f.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Built for how ideas actually form
              </h2>
              <p className="mt-4 text-[16px] leading-7 text-[#52525B]">
                Ideas arrive incomplete. Cortex holds them in place long enough to grow,
                then shows you the path between what you knew and what you know now.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Bidirectional links", "See both directions of every reference."],
                ["Daily notes", "A soft inbox that stays part of the graph."],
                ["Source chips", "Quotes keep URL, page, and date."],
                ["Soft export", "Markdown and JSON, no ransom."],
              ].map(([t, b]) => (
                <div key={t} className="rounded-2xl border border-zinc-200 bg-white p-5">
                  <div className="text-[14px] font-semibold text-[#18181B]">{t}</div>
                  <div className="mt-1 text-[13px] leading-5 text-[#71717A]">{b}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="mx-auto max-w-6xl px-6 pb-20 pt-4">
          <div className="overflow-hidden rounded-3xl bg-[#18181B] px-8 py-12 text-white md:px-12 md:py-16">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div>
                <h2 className="max-w-lg text-3xl font-semibold tracking-tight md:text-4xl">
                  Give your ideas a place to live.
                </h2>
                <p className="mt-3 max-w-md text-[15px] leading-7 text-zinc-400">
                  Import from Markdown or Obsidian in under a minute. Keep your files forever.
                </p>
              </div>
              <a
                href="#cta"
                className="inline-flex min-h-12 items-center rounded-full bg-white px-7 text-[15px] font-semibold text-[#18181B] transition-colors hover:bg-[#EDE9FE] hover:text-[#6D28D9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
              >
                Get Cortex free
              </a>
            </div>
          </div>
        </section>

        <footer className="mx-auto max-w-6xl px-6 pb-16">
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200 pt-6 text-[13px] text-[#71717A]">
            <span>Cortex · Iteration 04 · Spatial</span>
            <span>Ideas deserve coordinates.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
