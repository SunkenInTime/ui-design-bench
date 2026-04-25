import Link from "next/link";

export const metadata = {
  title: "Axon — The operating system for your mind",
};

export default function IterationTwo() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050510] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-indigo-600/30 blur-[160px]" />
        <div className="absolute -right-40 top-40 h-[700px] w-[700px] rounded-full bg-fuchsia-500/20 blur-[160px]" />
        <div className="absolute left-1/2 top-[60%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-[160px]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 0%, rgba(0,0,0,0) 0%, rgba(5,5,16,0.8) 70%)",
        }}
      />

      <div className="relative">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <div className="flex items-center gap-2.5">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
              <defs>
                <linearGradient id="ax-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
              <path
                d="M4 12h4l2-6 4 12 2-6h4"
                stroke="url(#ax-grad)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-semibold tracking-tight">Axon</span>
            <span className="ml-2 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-white/60">
              2.0
            </span>
          </div>
          <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <a className="hover:text-white" href="#product">Product</a>
            <a className="hover:text-white" href="#ai">AI</a>
            <a className="hover:text-white" href="#pricing">Pricing</a>
            <a className="hover:text-white" href="#docs">Docs</a>
            <a className="hover:text-white" href="#changelog">Changelog</a>
          </div>
          <div className="flex items-center gap-3">
            <a className="hidden text-sm text-white/70 hover:text-white md:inline" href="#">
              Sign in
            </a>
            <Link
              href="#"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-white to-white/80 px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
            >
              Download
              <svg className="h-3 w-3" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 12L3 7h3V2h4v5h3l-5 5z" />
              </svg>
            </Link>
          </div>
        </nav>

        <section className="mx-auto max-w-7xl px-8 pt-24 pb-32 text-center">
          <a
            href="#"
            className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-sm transition-colors hover:border-white/20"
          >
            <span className="rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 px-2 py-0.5 text-[10px] font-bold text-black">
              NEW
            </span>
            Introducing Axon Resonance — AI that thinks alongside you
            <svg className="h-3 w-3 text-white/60" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <h1 className="mx-auto max-w-5xl text-[88px] font-semibold leading-[0.95] tracking-[-0.04em]">
            The operating system
            <br />
            for{" "}
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              your mind.
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/60">
            Axon captures, connects, and surfaces everything you learn —
            automatically. A second brain that actually thinks.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="relative">Get Axon — free for Mac</span>
              <svg className="relative h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 8h12m-4-4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                <path d="M3 2l11 6-11 6V2z" />
              </svg>
              Watch keynote (4 min)
            </Link>
          </div>

          <div className="mt-6 text-xs text-white/40">
            macOS · Windows · iOS · Web · Linux · Available in 14 languages
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-8 pb-24">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-violet-500/30 via-fuchsia-500/20 to-cyan-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a18]/80 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-1.5 border-b border-white/5 px-5 py-3">
                <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <div className="ml-6 flex-1 text-center font-mono text-[11px] text-white/30">
                  axon · workspace / thinking
                </div>
              </div>
              <div className="grid grid-cols-[240px_1fr_320px] text-sm">
                <aside className="border-r border-white/5 p-4">
                  <div className="mb-3 flex items-center gap-2 rounded-lg bg-white/5 px-2 py-1.5">
                    <svg className="h-3.5 w-3.5 text-white/40" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="7" cy="7" r="5" />
                      <path d="M14 14l-3-3" strokeLinecap="round" />
                    </svg>
                    <span className="text-xs text-white/50">Search everything…</span>
                    <span className="ml-auto font-mono text-[10px] text-white/30">⌘K</span>
                  </div>
                  <div className="mb-1 px-2 text-[10px] font-semibold uppercase tracking-wider text-white/40">
                    Workspace
                  </div>
                  {[
                    ["Inbox", "12", false],
                    ["Today", "", true],
                    ["Ideas", "48", false],
                    ["Research", "", false],
                    ["Library", "203", false],
                    ["Archive", "", false],
                  ].map(([n, c, a]) => (
                    <div
                      key={String(n)}
                      className={`mb-0.5 flex items-center justify-between rounded-md px-2 py-1.5 text-xs ${
                        a ? "bg-white/10 text-white" : "text-white/60"
                      }`}
                    >
                      <span>{n}</span>
                      {c && <span className="text-[10px] text-white/30">{c}</span>}
                    </div>
                  ))}
                </aside>

                <main className="p-6">
                  <div className="mb-1 text-[11px] text-white/40">Today — focused</div>
                  <h2 className="mb-6 text-2xl font-semibold tracking-tight">
                    The attention economy of ideas
                  </h2>

                  <div className="space-y-4 leading-relaxed text-white/75">
                    <p>
                      If information is abundant, attention is the real scarce
                      resource. A second brain is less a filing cabinet and
                      more a cultivated attention budget.
                    </p>
                    <p className="relative rounded-lg border border-violet-400/20 bg-violet-500/10 p-4 text-white/90">
                      <span className="absolute -top-2 left-3 rounded bg-violet-500 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider">
                        Axon suggests
                      </span>
                      This echoes your note from Jan 8: “Herbert Simon — a
                      wealth of information creates a poverty of attention.”
                      Should I link them?
                      <span className="mt-3 block space-x-2 text-xs">
                        <button className="rounded-md bg-white px-2.5 py-1 text-black">
                          Link both
                        </button>
                        <button className="rounded-md border border-white/20 px-2.5 py-1 text-white/80">
                          Dismiss
                        </button>
                      </span>
                    </p>
                    <p>
                      <span className="rounded bg-cyan-400/20 px-1 text-cyan-200">
                        @emma
                      </span>{" "}
                      is researching something adjacent. Consider a shared
                      thread?
                    </p>
                  </div>
                </main>

                <aside className="border-l border-white/5 bg-white/[0.02] p-5">
                  <div className="mb-3 flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-white/40">
                    <span>Graph</span>
                    <span className="font-normal normal-case text-white/30">14 nodes</span>
                  </div>
                  <svg viewBox="0 0 240 180" className="w-full">
                    {[
                      [120, 90],
                      [60, 50],
                      [180, 50],
                      [40, 110],
                      [200, 110],
                      [90, 150],
                      [170, 150],
                      [140, 30],
                    ].map(([x, y], i) => (
                      <line
                        key={i}
                        x1="120"
                        y1="90"
                        x2={x}
                        y2={y}
                        stroke="url(#edge-grad)"
                        strokeWidth="0.8"
                        opacity="0.5"
                      />
                    ))}
                    <defs>
                      <linearGradient id="edge-grad" x1="0" x2="1">
                        <stop offset="0%" stopColor="#a78bfa" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                    </defs>
                    {[
                      [120, 90, 6, "#fff"],
                      [60, 50, 3, "#a78bfa"],
                      [180, 50, 3, "#f0abfc"],
                      [40, 110, 2.5, "#22d3ee"],
                      [200, 110, 3.5, "#a78bfa"],
                      [90, 150, 2.5, "#22d3ee"],
                      [170, 150, 3, "#f0abfc"],
                      [140, 30, 2, "#fff"],
                    ].map(([x, y, r, c], i) => (
                      <circle key={i} cx={x as number} cy={y as number} r={r as number} fill={c as string} opacity="0.9" />
                    ))}
                  </svg>
                  <div className="mt-4 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-white/60">
                      <span>Herbert Simon</span>
                      <span className="text-white/30">94%</span>
                    </div>
                    <div className="flex items-center justify-between text-white/60">
                      <span>Attention economy</span>
                      <span className="text-white/30">88%</span>
                    </div>
                    <div className="flex items-center justify-between text-white/60">
                      <span>Nicholas Carr — Shallows</span>
                      <span className="text-white/30">76%</span>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-xs uppercase tracking-[0.2em] text-white/30">
            <span>Trusted by researchers at</span>
            <span>MIT Media Lab</span>
            <span>Stripe</span>
            <span>DeepMind</span>
            <span>a16z</span>
            <span>Nature</span>
          </div>
        </section>

        <section id="product" className="mx-auto max-w-7xl px-8 py-24">
          <div className="mb-20 max-w-3xl">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              Capabilities
            </div>
            <h2 className="text-5xl font-semibold leading-[1.05] tracking-tight">
              Built for the way you
              <br />
              <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
                actually think.
              </span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 md:col-span-4">
              <div className="mb-6 inline-flex rounded-lg bg-violet-500/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-violet-200">
                Resonance AI
              </div>
              <h3 className="mb-3 text-2xl font-semibold tracking-tight">
                An intelligence that grows with your archive
              </h3>
              <p className="max-w-md text-white/60">
                Axon trains a private model on just your notes. It surfaces
                echoes, detects contradictions, and drafts in your voice —
                never leaving your device.
              </p>
              <div className="mt-8 flex gap-3 text-xs">
                {["Private by design", "On-device", "Open weights"].map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-transparent p-8 md:col-span-2">
              <div className="mb-6 inline-flex rounded-lg bg-cyan-500/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-200">
                Capture
              </div>
              <h3 className="mb-3 text-2xl font-semibold tracking-tight">
                Faster than Apple Notes
              </h3>
              <p className="text-sm text-white/60">
                Global shortcut. Markdown. Voice. Web clipper. Email-in. If
                you can think it, Axon can hold it — in under 80ms.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-transparent p-8 md:col-span-2">
              <div className="mb-6 inline-flex rounded-lg bg-fuchsia-500/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-fuchsia-200">
                Connect
              </div>
              <h3 className="mb-3 text-2xl font-semibold tracking-tight">
                Bidirectional everything
              </h3>
              <p className="text-sm text-white/60">
                Links, tags, dates, people, citations, embeddings. Axon
                automatically keeps your knowledge graph coherent.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 md:col-span-4">
              <div className="mb-6 inline-flex rounded-lg bg-white/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80">
                Local-first · end-to-end encrypted
              </div>
              <h3 className="mb-3 text-2xl font-semibold tracking-tight">
                Your mind. Your files. Your keys.
              </h3>
              <p className="max-w-md text-white/60">
                Notes live on your machine as plain markdown. Sync is
                zero-knowledge, powered by CRDTs. Cancel anytime — your data
                is already in your pocket.
              </p>
              <div className="mt-6 flex items-center gap-4 font-mono text-[11px] text-white/40">
                <span>SOC 2 Type II</span>
                <span>·</span>
                <span>ISO 27001</span>
                <span>·</span>
                <span>GDPR</span>
                <span>·</span>
                <span>Open-source core</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 py-24">
          <div className="grid grid-cols-2 gap-8 border-y border-white/10 py-16 md:grid-cols-4">
            {[
              ["2.4M+", "Notes synced daily"],
              ["180ms", "Capture-to-save"],
              ["99.99%", "Sync uptime"],
              ["0", "Data leaks, ever"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="bg-gradient-to-br from-white to-white/40 bg-clip-text text-5xl font-semibold tracking-tight text-transparent">
                  {v}
                </div>
                <div className="mt-2 text-sm text-white/50">{l}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-5xl px-8 pb-32 text-center">
          <div className="absolute inset-0 -z-10 rounded-[40px] bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-cyan-400/10 blur-3xl" />
          <h2 className="text-5xl font-semibold leading-[1.05] tracking-tight">
            Start thinking in public.
            <br />
            <span className="text-white/50">Or don&apos;t. It&apos;s yours.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-white/60">
            Download Axon free. No account required until you decide to sync.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="#" className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black">
              Download for Mac
            </Link>
            <Link href="#" className="rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium">
              Read the manifesto
            </Link>
          </div>
        </section>

        <footer className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-8 py-10 text-sm text-white/40">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path d="M4 12h4l2-6 4 12 2-6h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>© 2026 Axon Labs</span>
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="#">Download</a>
              <a href="#">Docs</a>
              <a href="#">Security</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
              <a href="#">Status</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
