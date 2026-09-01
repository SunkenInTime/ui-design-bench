const INK = "#1b1a17";

function Wordmark() {
  return (
    <span className="font-serif text-[26px] italic leading-none tracking-tight">
      Tessera
    </span>
  );
}

function NoteCard() {
  return (
    <div className="relative">
      <div className="absolute -left-6 top-10 hidden rotate-[-6deg] rounded-sm border border-black/10 bg-[#fff7c2] px-3 py-2 font-serif text-[15px] italic shadow-[2px_3px_0_rgba(0,0,0,0.08)] md:block">
        revisit before Thursday →
      </div>
      <article className="ruled relative rotate-[1.5deg] rounded-[3px] border border-black/10 bg-[#fffdf7] px-8 pb-10 pt-7 shadow-[0_1px_0_rgba(0,0,0,0.04),0_18px_40px_-20px_rgba(27,26,23,0.35)]">
        <div className="mb-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-black/45">
          <span>notes / reading</span>
          <span>Tue, Sep 1</span>
        </div>
        <h3 className="font-serif text-[30px] leading-[32px]">
          Why we forget what we read
        </h3>
        <p className="mt-4 text-[15px] leading-[32px] text-black/75">
          Retention isn&rsquo;t about rereading — it&rsquo;s about{" "}
          <span className="rounded-sm bg-[#b5472b]/10 px-1 text-[#8f3720] underline decoration-[#b5472b]/40 decoration-dotted underline-offset-4">
            [[spaced retrieval]]
          </span>
          . Ebbinghaus showed the curve in 1885; the fix is to be reminded
          right before you&rsquo;d forget. That&rsquo;s what{" "}
          <span className="rounded-sm bg-[#b5472b]/10 px-1 text-[#8f3720] underline decoration-[#b5472b]/40 decoration-dotted underline-offset-4">
            [[resurfacing]]
          </span>{" "}
          should do — not a feed, a nudge.
        </p>
        <div className="mt-8 border-t border-dashed border-black/15 pt-4">
          <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-black/45">
            3 backlinks
          </div>
          <ul className="space-y-1.5 text-[14px] text-black/70">
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#b5472b]" />
              Ebbinghaus &amp; the forgetting curve
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#b5472b]" />
              Weekly review — template
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#b5472b]" />
              Book: Make It Stick
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}

const PILLARS = [
  {
    n: "I",
    title: "Capture without friction",
    body: "A blank page in under a second. Web clipper, email-in, voice memos transcribed. Everything lands in one inbox and nothing is lost to a tab you closed.",
  },
  {
    n: "II",
    title: "Connect as you write",
    body: "Type [[ and link to any thought you've ever had. Backlinks appear automatically. Over months, a structure emerges that no folder tree could have predicted.",
  },
  {
    n: "III",
    title: "Recall when it matters",
    body: "Search that understands meaning, not just keywords. Old notes resurface next to new ones. You stop re-learning what you already knew.",
  },
];

const FEATURES = [
  ["Bidirectional links", "Every mention becomes a two-way connection."],
  ["Daily notes", "A fresh page every morning, threaded to yesterday."],
  ["Semantic search", "Find the note you half-remember writing."],
  ["Local-first", "Plain Markdown files on your disk. Sync is optional."],
  ["Resurfacing", "A quiet nudge toward the things worth rereading."],
  ["Publish", "Turn any note into a page with one link."],
];

export default function Page() {
  return (
    <div
      className="grain relative min-h-screen bg-[#f4efe4] font-sans"
      style={{ color: INK }}
    >
      <div className="relative z-10">
        {/* Nav */}
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-8 md:px-10">
          <Wordmark />
          <nav className="hidden items-center gap-9 text-[14px] text-black/65 md:flex">
            <a className="transition hover:text-black" href="#method">
              Method
            </a>
            <a className="transition hover:text-black" href="#features">
              Features
            </a>
            <a className="transition hover:text-black" href="#pricing">
              Pricing
            </a>
            <a className="transition hover:text-black" href="#">
              Journal
            </a>
          </nav>
          <div className="flex items-center gap-5 text-[14px]">
            <a className="hidden text-black/65 hover:text-black sm:block" href="#">
              Sign in
            </a>
            <a
              href="#"
              className="rounded-full bg-[#1b1a17] px-4 py-2 text-[#f4efe4] transition hover:bg-[#b5472b]"
            >
              Start writing
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-20 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:pb-32 md:pt-28">
          <div>
            <div className="mb-7 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-black/50">
              <span className="h-px w-8 bg-[#b5472b]" />
              A second brain, on paper
            </div>
            <h1 className="text-balance font-serif text-[52px] leading-[0.98] tracking-[-0.02em] md:text-[76px]">
              Thoughts you won&rsquo;t lose.{" "}
              <em className="text-[#b5472b]">Connections</em> you
              didn&rsquo;t see coming.
            </h1>
            <p className="mt-8 max-w-[52ch] text-pretty text-[18px] leading-[1.6] text-black/70">
              Tessera is a notebook that remembers for you. Write in plain
              text, link ideas with two brackets, and watch a decade of
              thinking become something you can actually navigate.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="group inline-flex items-center gap-3 rounded-full bg-[#1b1a17] px-6 py-3.5 text-[15px] text-[#f4efe4] transition hover:bg-[#b5472b]"
              >
                Open your notebook
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#method"
                className="inline-flex items-center gap-2 px-2 py-3.5 text-[15px] text-black/70 underline decoration-black/25 underline-offset-[6px] transition hover:text-black hover:decoration-black"
              >
                Read the method
              </a>
            </div>
            <p className="mt-6 font-mono text-[12px] text-black/45">
              Free for up to 1,000 notes · No card required · Files stay yours
            </p>
          </div>
          <div className="md:pl-6">
            <NoteCard />
          </div>
        </section>

        {/* Ledger strip */}
        <div className="border-y border-black/10">
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-black/10 px-6 md:grid-cols-4 md:px-10">
            {[
              ["41M", "notes written"],
              ["6.2", "links per note, avg."],
              ["1885", "year we learned we forget"],
              ["0", "trackers"],
            ].map(([k, v]) => (
              <div key={v} className="px-5 py-7 first:pl-0">
                <div className="font-serif text-[36px] leading-none">{k}</div>
                <div className="mt-2 text-[13px] text-black/55">{v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Method */}
        <section id="method" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-black/50">
                The method
              </div>
              <h2 className="mt-4 text-balance font-serif text-[40px] leading-[1.02] md:text-[52px]">
                Three habits. <br className="hidden md:block" />
                One place to keep them.
              </h2>
            </div>
            <div className="divide-y divide-black/10">
              {PILLARS.map((p) => (
                <div
                  key={p.n}
                  className="grid gap-4 py-8 first:pt-0 last:pb-0 md:grid-cols-[64px_1fr]"
                >
                  <div className="font-serif text-[28px] italic text-[#b5472b]">
                    {p.n}
                  </div>
                  <div>
                    <h3 className="font-serif text-[26px] leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-[58ch] text-pretty text-[16px] leading-[1.65] text-black/70">
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pull quote */}
        <section className="border-y border-black/10 bg-[#ece6d6]/60">
          <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-10">
            <p className="text-balance font-serif text-[34px] leading-[1.15] md:text-[48px]">
              &ldquo;I used to have four hundred notes I never reopened. Now I
              have four hundred notes that keep reopening{" "}
              <em className="text-[#b5472b]">me</em>.&rdquo;
            </p>
            <div className="mt-8 font-mono text-[12px] uppercase tracking-[0.2em] text-black/50">
              Maren Lindqvist — Historian, Uppsala
            </div>
          </div>
        </section>

        {/* Features as a table of contents */}
        <section id="features" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="font-serif text-[40px] leading-none md:text-[52px]">
              Contents
            </h2>
            <div className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-black/50 md:block">
              What&rsquo;s inside
            </div>
          </div>
          <ol className="grid gap-x-16 md:grid-cols-2">
            {FEATURES.map(([title, body], i) => (
              <li
                key={title}
                className="group flex items-baseline gap-4 border-b border-black/10 py-5"
              >
                <span className="font-mono text-[12px] text-black/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-[24px] leading-tight transition group-hover:text-[#b5472b]">
                  {title}
                </span>
                <span className="mx-2 flex-1 translate-y-[-6px] border-b border-dotted border-black/25" />
                <span className="hidden max-w-[24ch] text-right text-[13px] leading-snug text-black/55 sm:block">
                  {body}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mx-auto max-w-6xl px-6 pb-28 md:px-10">
          <div className="grid overflow-hidden rounded-[4px] border border-black/15 md:grid-cols-2">
            <div className="border-b border-black/15 p-10 md:border-b-0 md:border-r">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-black/50">
                Personal
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-serif text-[56px] leading-none">$0</span>
                <span className="text-black/55">forever</span>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-black/70">
                Up to 1,000 notes, all core features, files on your disk.
              </p>
              <a
                href="#"
                className="mt-8 inline-block rounded-full border border-black/25 px-5 py-2.5 text-[14px] transition hover:border-black hover:bg-black hover:text-[#f4efe4]"
              >
                Start free
              </a>
            </div>
            <div className="bg-[#1b1a17] p-10 text-[#f4efe4]">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
                Unlimited
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-serif text-[56px] leading-none">$6</span>
                <span className="text-white/55">per month</span>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-white/70">
                Unlimited notes, semantic search, end-to-end encrypted sync,
                publishing.
              </p>
              <a
                href="#"
                className="mt-8 inline-block rounded-full bg-[#f4efe4] px-5 py-2.5 text-[14px] text-[#1b1a17] transition hover:bg-[#b5472b] hover:text-white"
              >
                Go unlimited
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-black/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-[13px] text-black/55 md:flex-row md:items-center md:justify-between md:px-10">
            <div className="flex items-center gap-4">
              <Wordmark />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em]">
                Est. 2026
              </span>
            </div>
            <div className="flex gap-7">
              <a className="hover:text-black" href="#">
                Manifesto
              </a>
              <a className="hover:text-black" href="#">
                Changelog
              </a>
              <a className="hover:text-black" href="#">
                Privacy
              </a>
              <a className="hover:text-black" href="#">
                Twitter
              </a>
            </div>
          </div>
        </footer>
        <div className="h-20" />
      </div>
    </div>
  );
}
