const features = [
  {
    title: "Instant capture",
    body: "One global hotkey summons the quick-capture panel from anywhere. Zero friction, zero lost thoughts.",
    icon: "M13 2 3 14h7l-1 8 10-12h-7l1-8z",
  },
  {
    title: "Backlinks everywhere",
    body: "Every note knows what points at it. Context assembles itself while you type.",
    icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
  },
  {
    title: "On-device AI",
    body: "Summaries, auto-tagging, and semantic search run locally. Your thoughts never train someone else's model.",
    icon: "M12 2l2.2 6.6L21 11l-6.8 2.4L12 20l-2.2-6.6L3 11l6.8-2.4L12 2z",
  },
  {
    title: "Offline-first",
    body: "Planes, basements, dead zones — Cortex works the same. Sync resolves conflicts when you reconnect.",
    icon: "M12 3v10m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",
  },
  {
    title: "End-to-end encrypted",
    body: "AES-256 with keys only you hold. We couldn't read your second brain if we wanted to.",
    icon: "M7 11V7a5 5 0 0 1 10 0v4M5 11h14v10H5z",
  },
  {
    title: "API & export",
    body: "A full local API and one-click Markdown export. Script your brain, leave whenever you like.",
    icon: "m8 6-6 6 6 6M16 6l6 6-6 6",
  },
];

const logos = ["Northwind", "Globex", "Initech", "Umbrella", "Hooli", "Stark Labs"];

export default function IterationTwo() {
  return (
    <main className="min-h-screen w-full bg-[#08080C] pb-36 font-sans text-[#E7E7EC] selection:bg-indigo-500/40">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#08080C]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-400 to-violet-600 shadow-[0_0_24px_-4px_rgba(129,140,248,0.8)]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                <circle cx="6" cy="6" r="2.2" />
                <circle cx="18" cy="9" r="2.2" />
                <circle cx="9" cy="18" r="2.2" />
                <path d="M8 7.5 16 8.6M7 8.2l1.5 7.6M16.4 11 10.6 16.4" />
              </svg>
            </span>
            <span className="text-[15px] font-semibold tracking-tight">Cortex</span>
          </a>
          <nav className="hidden items-center gap-7 text-[13px] text-white/60 md:flex">
            <a className="transition-colors hover:text-white" href="#features">Features</a>
            <a className="transition-colors hover:text-white" href="#method">Method</a>
            <a className="transition-colors hover:text-white" href="#pricing">Pricing</a>
            <a className="transition-colors hover:text-white" href="#changelog">Changelog</a>
          </nav>
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 font-mono text-[11px] text-white/45 sm:flex">
              <kbd className="text-white/70">⌘</kbd>K
            </span>
            <a
              href="#"
              className="rounded-lg bg-white px-4 py-2 text-[13px] font-semibold text-[#08080C] transition-colors hover:bg-white/85"
            >
              Download
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
          }}
        />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[52rem] -translate-x-1/2 rounded-full bg-indigo-600/25 blur-[130px]" />

        <div className="relative mx-auto max-w-6xl px-6 pt-24 text-center md:pt-32">
          <a
            href="#changelog"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-2 pr-4 text-xs text-white/70 transition-colors hover:border-white/20"
          >
            <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 font-mono text-[10px] font-semibold text-indigo-300">
              v3.0
            </span>
            Local-first sync is here
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m9 18 6-6-6-6"/></svg>
          </a>

          <h1 className="mx-auto mt-8 max-w-3xl text-5xl font-semibold leading-[1.06] tracking-tight md:text-7xl">
            Think at the{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              speed of thought
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/55">
            Cortex is the note-taking app that works as a second brain.
            Capture in a keystroke, connect without folders, and recall
            anything before you finish typing its name.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="rounded-lg bg-gradient-to-b from-indigo-400 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-6px_rgba(99,102,241,0.7)] transition-transform hover:scale-[1.03]"
            >
              Get started free
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-lg border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/[0.08]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              Watch the demo
              <span className="font-mono text-[11px] text-white/40">2:14</span>
            </a>
          </div>
          <p className="mt-5 font-mono text-[11px] text-white/35">
            No account needed · Press <kbd className="rounded border border-white/15 bg-white/[0.06] px-1.5 py-0.5 text-white/60">⌘N</kbd> to capture your first thought
          </p>

          {/* App window mock */}
          <div className="relative mx-auto mt-16 max-w-4xl">
            <div className="pointer-events-none absolute -inset-x-8 -top-8 bottom-1/3 rounded-[2rem] bg-gradient-to-b from-indigo-500/25 via-violet-500/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0D0D14] text-left shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-3 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
                <span className="flex gap-1.5">
                  <i className="h-2.5 w-2.5 rounded-full bg-[#3A3A45]" />
                  <i className="h-2.5 w-2.5 rounded-full bg-[#3A3A45]" />
                  <i className="h-2.5 w-2.5 rounded-full bg-[#3A3A45]" />
                </span>
                <span className="text-[11px] text-white/40">Daily Note — Thu Jul 16</span>
                <span className="ml-auto flex items-center gap-2 rounded-md border border-white/[0.08] bg-[#08080C] px-3 py-1 font-mono text-[10px] text-white/35">
                  Search or create… <kbd className="text-white/50">⌘K</kbd>
                </span>
              </div>
              <div className="grid text-[12px] leading-relaxed md:grid-cols-[180px_1fr_200px]">
                <aside className="hidden border-r border-white/[0.06] p-4 md:block">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-white/30">Pinned</p>
                  {["Reading list", "Project: Aurora", "Meeting notes", "Ideas — raw", "Weekly review"].map((n, i) => (
                    <p key={n} className={`mb-1.5 truncate rounded-md px-2 py-1.5 ${i === 1 ? "bg-indigo-500/15 text-indigo-300" : "text-white/45"}`}>
                      {n}
                    </p>
                  ))}
                </aside>
                <div className="p-5">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-white/30">Project: Aurora</p>
                  <p className="mt-3 text-[15px] font-semibold text-white/90">Launch plan — second brain positioning</p>
                  <p className="mt-3 text-white/55">
                    The landing page should sell <span className="rounded bg-indigo-500/20 px-1 text-indigo-300">[[compounding knowledge]]</span>, not features.
                    Pull the quote from <span className="rounded bg-indigo-500/20 px-1 text-indigo-300">[[Mara Ellison interview]]</span> and link it to
                    the <span className="rounded bg-indigo-500/20 px-1 text-indigo-300">[[positioning doc]]</span>.
                  </p>
                  <div className="mt-4 space-y-2 text-white/55">
                    <p className="flex items-center gap-2"><span className="flex h-4 w-4 items-center justify-center rounded border border-indigo-400 bg-indigo-500/20 text-[10px] text-indigo-300">✓</span><s className="text-white/30">Draft hero headline</s></p>
                    <p className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-white/20" />Wire the graph preview to real backlinks</p>
                    <p className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-white/20" />Ship to the waitlist</p>
                  </div>
                </div>
                <aside className="hidden border-l border-white/[0.06] p-4 md:block">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-white/30">Backlinks · 6</p>
                  {["Positioning doc", "Q3 roadmap", "Launch checklist", "Homepage copy"].map((n) => (
                    <p key={n} className="mb-1.5 truncate rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-1.5 text-white/50">
                      {n}
                    </p>
                  ))}
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.25em] text-white/30">
          Trusted by deep-work teams at
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {logos.map((l) => (
            <span key={l} className="text-lg font-semibold tracking-tight text-white/25">{l}</span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 pt-28">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-indigo-300">Features</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Built like a power tool, tuned like an instrument
          </h2>
          <p className="mt-4 text-white/50">
            Everything in Cortex exists to shorten the distance between having a
            thought and keeping it forever.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors hover:border-indigo-400/30 hover:bg-indigo-500/[0.04]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-[#08080C] text-indigo-300 transition-colors group-hover:border-indigo-400/40">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={f.icon} />
                </svg>
              </span>
              <h3 className="mt-5 text-[15px] font-semibold">{f.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-white/45">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-4xl px-6 pt-28">
        <figure className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-transparent p-10 md:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-600/20 blur-[90px]" />
          <blockquote className="relative text-xl leading-relaxed text-white/80 md:text-2xl">
            &ldquo;I&rsquo;ve tried every notes app since 2010. Cortex is the
            first one that feels like it&rsquo;s on my side of the keyboard —
            it surfaces the note I need{" "}
            <span className="text-indigo-300">before I remember writing it</span>.&rdquo;
          </blockquote>
          <figcaption className="relative mt-8 flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-violet-600 text-sm font-bold text-white">
              DK
            </span>
            <span>
              <span className="block text-sm font-semibold">Dana Kim</span>
              <span className="block text-xs text-white/40">Staff Researcher, Stark Labs</span>
            </span>
          </figcaption>
        </figure>
      </section>

      {/* CTA */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 pt-28 text-center">
        <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Your second brain is{" "}
          <span className="bg-gradient-to-r from-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">
            one hotkey away
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-white/50">
          Free up to 1,000 notes. Pro is $8/month — less than the notebook
          you&rsquo;ll stop buying.
        </p>
        <a
          href="#"
          className="mt-9 inline-block rounded-lg bg-gradient-to-b from-indigo-400 to-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_-6px_rgba(99,102,241,0.7)] transition-transform hover:scale-[1.03]"
        >
          Download Cortex
        </a>
        <p className="mt-4 font-mono text-[11px] text-white/30">macOS · Windows · Linux · iOS · Android</p>
      </section>

      {/* Footer */}
      <footer className="mx-auto mt-24 flex max-w-6xl flex-col items-start justify-between gap-4 border-t border-white/[0.06] px-6 pt-8 text-xs text-white/30 sm:flex-row sm:items-center">
        <span className="flex items-center gap-2 text-white/60">
          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-indigo-400 to-violet-600">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="6" cy="6" r="2.2" /><circle cx="18" cy="9" r="2.2" /><circle cx="9" cy="18" r="2.2" />
              <path d="M8 7.5 16 8.6M7 8.2l1.5 7.6M16.4 11 10.6 16.4" />
            </svg>
          </span>
          Cortex Systems, Inc.
        </span>
        <span className="flex gap-6">
          <a className="hover:text-white/60" href="#">Privacy</a>
          <a className="hover:text-white/60" href="#">Security</a>
          <a className="hover:text-white/60" href="#">Docs</a>
        </span>
        <span>© 2026 — Made offline, synced later</span>
      </footer>
    </main>
  );
}
