import DesignSwitcher from "@/components/DesignSwitcher";

export default function DesignTwo() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <DesignSwitcher />

      {/* Glow effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[128px]" />
        <div className="absolute top-1/3 -right-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[96px]" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-fuchsia-600/10 blur-[96px]" />
      </div>

      <div className="relative z-10">
        {/* Nav */}
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 text-xs font-black">
              N
            </div>
            <span className="text-lg font-bold tracking-tight">Neuron</span>
          </div>
          <div className="hidden items-center gap-8 text-sm text-zinc-500 md:flex">
            <a href="#" className="transition hover:text-white">Features</a>
            <a href="#" className="transition hover:text-white">Research</a>
            <a href="#" className="transition hover:text-white">Changelog</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition hover:text-white">
              Sign in
            </button>
            <button className="rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90">
              Try Neuron
            </button>
          </div>
        </nav>

        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pt-28 pb-16 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
              </span>
              AI-powered knowledge engine
            </div>
            <h1 className="text-5xl font-black leading-[1.1] tracking-tight md:text-8xl">
              <span className="bg-gradient-to-b from-white via-white to-zinc-500 bg-clip-text text-transparent">
                Your neural
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                knowledge network
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
              Neuron maps the connections between your ideas using AI.
              Think of it as a second brain that doesn&apos;t just store &mdash;
              it understands, surfaces, and evolves your knowledge.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="group relative h-12 overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 text-sm font-semibold text-white">
                <span className="relative z-10">Start building your brain</span>
              </button>
              <button className="flex h-12 items-center gap-2 rounded-xl border border-zinc-800 px-8 text-sm font-medium text-zinc-400 transition hover:border-zinc-700 hover:text-white">
                See how it works
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </section>

        {/* Neural Graph Visualization */}
        <section className="mx-auto max-w-4xl px-6 pb-24">
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-1 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-cyan-500/5" />
            <div className="relative rounded-xl bg-[#0a0a0f]/80 p-8">
              {/* Simulated node graph */}
              <svg className="h-72 w-full" viewBox="0 0 800 300">
                {/* Connections */}
                <line x1="400" y1="150" x2="200" y2="80" stroke="url(#grad1)" strokeWidth="1" opacity="0.4" />
                <line x1="400" y1="150" x2="600" y2="80" stroke="url(#grad1)" strokeWidth="1" opacity="0.4" />
                <line x1="400" y1="150" x2="150" y2="220" stroke="url(#grad1)" strokeWidth="1" opacity="0.3" />
                <line x1="400" y1="150" x2="650" y2="200" stroke="url(#grad1)" strokeWidth="1" opacity="0.3" />
                <line x1="200" y1="80" x2="100" y2="140" stroke="url(#grad1)" strokeWidth="1" opacity="0.2" />
                <line x1="200" y1="80" x2="300" y2="40" stroke="url(#grad1)" strokeWidth="1" opacity="0.2" />
                <line x1="600" y1="80" x2="700" y2="130" stroke="url(#grad1)" strokeWidth="1" opacity="0.2" />
                <line x1="600" y1="80" x2="520" y2="30" stroke="url(#grad1)" strokeWidth="1" opacity="0.2" />
                <line x1="150" y1="220" x2="250" y2="260" stroke="url(#grad1)" strokeWidth="1" opacity="0.2" />
                <line x1="650" y1="200" x2="550" y2="260" stroke="url(#grad1)" strokeWidth="1" opacity="0.2" />
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                {/* Nodes */}
                <circle cx="400" cy="150" r="20" fill="#8b5cf6" opacity="0.8" />
                <circle cx="400" cy="150" r="28" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.3" />
                <circle cx="200" cy="80" r="12" fill="#06b6d4" opacity="0.7" />
                <circle cx="600" cy="80" r="14" fill="#a78bfa" opacity="0.6" />
                <circle cx="150" cy="220" r="10" fill="#22d3ee" opacity="0.5" />
                <circle cx="650" cy="200" r="11" fill="#c084fc" opacity="0.5" />
                <circle cx="100" cy="140" r="6" fill="#06b6d4" opacity="0.4" />
                <circle cx="300" cy="40" r="7" fill="#8b5cf6" opacity="0.4" />
                <circle cx="700" cy="130" r="8" fill="#22d3ee" opacity="0.4" />
                <circle cx="520" cy="30" r="6" fill="#a78bfa" opacity="0.3" />
                <circle cx="250" cy="260" r="5" fill="#06b6d4" opacity="0.3" />
                <circle cx="550" cy="260" r="7" fill="#c084fc" opacity="0.3" />
                {/* Labels */}
                <text x="400" y="153" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">CORE</text>
                <text x="200" y="83" textAnchor="middle" fill="white" fontSize="6">Ideas</text>
                <text x="600" y="83" textAnchor="middle" fill="white" fontSize="6">Projects</text>
                <text x="150" y="223" textAnchor="middle" fill="white" fontSize="6">Notes</text>
                <text x="650" y="203" textAnchor="middle" fill="white" fontSize="6">Tasks</text>
              </svg>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Intelligence
              </span>{" "}
              meets note-taking
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-zinc-500">
              Neuron doesn&apos;t just store your notes. It understands context,
              surfaces connections, and grows smarter the more you use it.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "AI Connections",
                desc: "Automatically discover hidden links between your notes using semantic analysis.",
                gradient: "from-violet-600/20 to-violet-600/0",
                border: "border-violet-500/20",
                accent: "text-violet-400",
              },
              {
                title: "Smart Summaries",
                desc: "Get instant summaries of complex notes and long-form research documents.",
                gradient: "from-cyan-600/20 to-cyan-600/0",
                border: "border-cyan-500/20",
                accent: "text-cyan-400",
              },
              {
                title: "Daily Digest",
                desc: "Your brain sends you a morning brief of the most relevant notes for your day.",
                gradient: "from-fuchsia-600/20 to-fuchsia-600/0",
                border: "border-fuchsia-500/20",
                accent: "text-fuchsia-400",
              },
              {
                title: "Temporal Layers",
                desc: "Travel through time to see how your ideas evolved. Full version history, always.",
                gradient: "from-amber-600/20 to-amber-600/0",
                border: "border-amber-500/20",
                accent: "text-amber-400",
              },
              {
                title: "Contextual Tags",
                desc: "Tags that understand context. #meeting in a project note behaves differently than in a personal one.",
                gradient: "from-emerald-600/20 to-emerald-600/0",
                border: "border-emerald-500/20",
                accent: "text-emerald-400",
              },
              {
                title: "Block Protocol",
                desc: "Every piece of content is a composable block. Embed, remix, and reuse across your entire brain.",
                gradient: "from-rose-600/20 to-rose-600/0",
                border: "border-rose-500/20",
                accent: "text-rose-400",
              },
            ].map((f, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl border ${f.border} bg-zinc-900/50 p-6 backdrop-blur-sm transition hover:border-zinc-700`}
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${f.gradient}`} />
                <div className="relative">
                  <h3 className={`mb-2 text-lg font-semibold ${f.accent}`}>{f.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { value: "2M+", label: "Notes created" },
              { value: "850K", label: "Connections discovered" },
              { value: "99.9%", label: "Uptime guaranteed" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-5xl font-black text-transparent md:text-6xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-zinc-500">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-6 py-24 text-center">
          <div className="rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 px-8 py-20">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Upgrade your mind
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-zinc-500">
              Your knowledge deserves better than scattered notes and forgotten bookmarks.
            </p>
            <button className="mt-8 h-12 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 text-sm font-semibold text-white transition hover:opacity-90">
              Launch your second brain
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="mx-auto max-w-6xl border-t border-zinc-800/60 px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <span className="text-sm text-zinc-600">&copy; 2026 Neuron. All rights reserved.</span>
            <div className="flex gap-6 text-sm text-zinc-600">
              <a href="#" className="transition hover:text-zinc-400">Privacy</a>
              <a href="#" className="transition hover:text-zinc-400">Terms</a>
              <a href="#" className="transition hover:text-zinc-400">Discord</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
