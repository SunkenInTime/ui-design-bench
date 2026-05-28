import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cortex — A mind that never forgets",
};

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-[0_0_20px_-2px_rgba(168,85,247,0.7)]">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 0 0-4 4 4 4 0 0 0-2 7 4 4 0 0 0 6 4 4 4 0 0 0 6-4 4 4 0 0 0-2-7 4 4 0 0 0-4-4Z" />
          <path d="M12 6v13" />
        </svg>
      </div>
      <span className="text-lg font-semibold tracking-tight text-white">Cortex</span>
    </div>
  );
}

const features = [
  {
    title: "Frictionless capture",
    body: "A global hotkey, a quick-add bar, a share sheet. Get the thought down in under a second.",
    glow: "from-violet-500/20",
    icon: <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />,
  },
  {
    title: "Bidirectional links",
    body: "Every reference becomes a two-way street. Watch a web of knowledge assemble itself.",
    glow: "from-fuchsia-500/20",
    icon: (
      <>
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="m8.5 8.5 7 7" />
      </>
    ),
  },
  {
    title: "AI that knows your context",
    body: "Summarize, connect and resurface ideas. Cortex AI is trained on your notes — and only yours.",
    glow: "from-indigo-500/20",
    icon: (
      <>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        <circle cx="12" cy="12" r="4" />
      </>
    ),
  },
  {
    title: "Real-time everywhere",
    body: "Encrypted sync across every device. Start on mobile, finish on desktop, never lose a word.",
    glow: "from-sky-500/20",
    icon: (
      <>
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        <path d="M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" />
      </>
    ),
  },
  {
    title: "Graph view",
    body: "Zoom out and see how your thinking connects. Spot clusters, gaps and bridges.",
    glow: "from-purple-500/20",
    icon: (
      <>
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="M12 7v4m0 0-5 5m5-5 5 5" />
      </>
    ),
  },
  {
    title: "End-to-end encrypted",
    body: "Your second brain is yours alone. Zero-knowledge encryption, your keys, your data.",
    glow: "from-emerald-500/20",
    icon: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
  },
];

export default function Page() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden bg-[#08070d] font-sans text-zinc-200">
      {/* Aurora background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600/30 via-fuchsia-600/25 to-indigo-600/30 blur-[120px]" />
        <div className="absolute top-[40%] -left-40 h-[400px] w-[400px] rounded-full bg-fuchsia-700/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-indigo-700/20 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      {/* Nav */}
      <header className="relative z-40">
        <div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-6 py-5">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#" className="transition hover:text-white">Pricing</a>
            <a href="#" className="transition hover:text-white">Changelog</a>
          </nav>
          <a href="#" className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-white/20">
            Open app
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-20 pb-24 text-center sm:pt-28">
        <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_8px_2px_rgba(232,121,249,0.8)]" />
          Cortex 3.0 — now with the knowledge graph
        </div>
        <h1 className="mx-auto max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl">
          Your second brain,{" "}
          <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
            fully awake.
          </span>
        </h1>
        <p className="mx-auto mt-7 max-w-xl text-balance text-lg leading-relaxed text-zinc-400">
          Capture every idea, connect every dot, and let AI resurface exactly
          what you need — the moment you need it.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#" className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_-6px_rgba(168,85,247,0.8)] transition hover:shadow-[0_0_40px_-4px_rgba(217,70,239,0.9)] sm:w-auto">
            Build your brain — free
          </a>
          <a href="#" className="w-full rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 sm:w-auto">
            Book a demo
          </a>
        </div>

        {/* Glass mock */}
        <div className="relative mx-auto mt-20 max-w-3xl">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-2 shadow-2xl backdrop-blur-xl">
            <div className="rounded-xl border border-white/5 bg-[#0c0a14]/80 p-6 text-left">
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
                <span className="ml-2">cortex · ask anything</span>
              </div>
              <div className="mt-5 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-300">
                <span className="text-fuchsia-300">›</span> What did I conclude about pricing last quarter?
              </div>
              <div className="mt-3 space-y-2 rounded-lg bg-gradient-to-br from-violet-500/10 to-transparent p-4 text-sm leading-relaxed text-zinc-300">
                <p>You landed on usage-based tiers. Key sources:</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["Q3 strategy", "Pricing experiments", "Call · Acme"].map((t) => (
                    <span key={t} className="rounded-md border border-violet-400/30 bg-violet-500/10 px-2 py-1 text-xs text-violet-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Everything a thought needs.</h2>
          <p className="mt-4 text-zinc-400">From the spark to the synthesis, Cortex holds it all together.</p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-white/20">
              <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${f.glow} to-transparent blur-2xl`} />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-fuchsia-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {f.icon}
                </svg>
              </div>
              <h3 className="relative mt-5 text-lg font-semibold text-white">{f.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-zinc-400">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-28">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-fuchsia-600/10 to-indigo-600/20 px-8 py-16 text-center backdrop-blur">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.15),transparent_60%)]" />
          <h2 className="relative text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Wake up your second brain today.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-zinc-300">Free to start. Upgrade when your ideas outgrow you.</p>
          <a href="#" className="relative mt-8 inline-block rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200">
            Get started free
          </a>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row">
          <Logo />
          <p>© {new Date().getFullYear()} Cortex Labs</p>
        </div>
      </footer>
    </div>
  );
}
