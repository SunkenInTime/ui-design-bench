import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cortex — Your brain, but it has snacks",
};

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 text-white shadow-lg shadow-pink-500/30">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 0 0-4 4 4 4 0 0 0-2 7 4 4 0 0 0 6 4 4 4 0 0 0 6-4 4 4 0 0 0-2-7 4 4 0 0 0-4-4Z" />
          <path d="M12 6v13" />
        </svg>
      </div>
      <span className="text-xl font-bold tracking-tight text-zinc-900">Cortex</span>
    </div>
  );
}

export default function Page() {
  return (
    <div className="flex flex-1 flex-col bg-[#fdfcfb] font-sans text-zinc-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 bg-[#fdfcfb]/80 backdrop-blur-md">
        <div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
            <a href="#bento" className="transition hover:text-zinc-900">Features</a>
            <a href="#" className="transition hover:text-zinc-900">Pricing</a>
            <a href="#" className="transition hover:text-zinc-900">Blog</a>
          </nav>
          <a href="#" className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-700">
            Try it free →
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-16 pb-10 text-center sm:pt-24">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-100 to-pink-100 px-4 py-1.5 text-sm font-semibold text-pink-700">
          <span>🧠</span> 200k+ second brains and counting
        </div>
        <h1 className="mx-auto max-w-4xl text-balance text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl">
          Note-taking that{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
            actually sticks.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-zinc-600">
          Cortex catches every idea, connects the dots, and hands them back
          right when you need them. It’s the second brain that’s genuinely fun to use.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#" className="w-full rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-pink-500/30 transition hover:opacity-90 sm:w-auto">
            Get started — it’s free
          </a>
          <a href="#bento" className="w-full rounded-full border-2 border-zinc-200 px-7 py-3.5 text-sm font-bold text-zinc-800 transition hover:border-zinc-300 sm:w-auto">
            See what’s inside
          </a>
        </div>
      </section>

      {/* Bento grid */}
      <section id="bento" className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 lg:grid-cols-4">
          {/* Capture - big */}
          <div className="col-span-2 row-span-2 flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-orange-400 to-pink-500 p-7 text-white">
            <div>
              <span className="text-3xl">⚡️</span>
              <h3 className="mt-4 text-2xl font-bold leading-tight">Capture at the speed of thought</h3>
              <p className="mt-2 max-w-xs text-sm text-white/90">
                One shortcut, anywhere on your device. The thought’s saved before you finish thinking it.
              </p>
            </div>
            <div className="rounded-2xl bg-white/15 p-3 backdrop-blur">
              <div className="flex items-center gap-2 text-sm">
                <kbd className="rounded-md bg-white/25 px-2 py-1 font-mono text-xs">⌘</kbd>
                <kbd className="rounded-md bg-white/25 px-2 py-1 font-mono text-xs">K</kbd>
                <span className="text-white/80">→ new note in 0.2s</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-2 flex flex-col justify-between rounded-3xl bg-violet-100 p-6 lg:col-span-2">
            <span className="text-2xl">🔗</span>
            <div>
              <h3 className="text-lg font-bold text-violet-900">Self-linking notes</h3>
              <p className="mt-1 text-sm text-violet-700/80">Type [[ and watch your ideas wire themselves together.</p>
            </div>
          </div>

          {/* AI */}
          <div className="flex flex-col justify-between rounded-3xl bg-sky-100 p-6">
            <span className="text-2xl">✨</span>
            <div>
              <h3 className="text-lg font-bold text-sky-900">Ask anything</h3>
              <p className="mt-1 text-sm text-sky-700/80">AI recall across all your notes.</p>
            </div>
          </div>

          {/* Sync */}
          <div className="flex flex-col justify-between rounded-3xl bg-emerald-100 p-6">
            <span className="text-2xl">🔄</span>
            <div>
              <h3 className="text-lg font-bold text-emerald-900">Synced</h3>
              <p className="mt-1 text-sm text-emerald-700/80">Every device, instantly.</p>
            </div>
          </div>

          {/* Graph - wide */}
          <div className="col-span-2 flex items-center justify-between gap-4 rounded-3xl bg-zinc-900 p-6 text-white lg:col-span-2">
            <div>
              <span className="text-2xl">🕸️</span>
              <h3 className="mt-3 text-lg font-bold">Your knowledge, visualized</h3>
              <p className="mt-1 text-sm text-zinc-400">A graph of everything you know.</p>
            </div>
            <svg width="90" height="90" viewBox="0 0 90 90" className="shrink-0">
              <line x1="20" y1="25" x2="50" y2="45" stroke="#f472b6" strokeWidth="1.5" />
              <line x1="50" y1="45" x2="70" y2="20" stroke="#fb923c" strokeWidth="1.5" />
              <line x1="50" y1="45" x2="30" y2="70" stroke="#a78bfa" strokeWidth="1.5" />
              <line x1="50" y1="45" x2="72" y2="68" stroke="#38bdf8" strokeWidth="1.5" />
              <circle cx="20" cy="25" r="5" fill="#f472b6" />
              <circle cx="70" cy="20" r="5" fill="#fb923c" />
              <circle cx="50" cy="45" r="8" fill="#fff" />
              <circle cx="30" cy="70" r="5" fill="#a78bfa" />
              <circle cx="72" cy="68" r="5" fill="#38bdf8" />
            </svg>
          </div>

          {/* Daily - wide */}
          <div className="col-span-2 flex flex-col justify-between rounded-3xl bg-amber-100 p-6 lg:col-span-2">
            <span className="text-2xl">📅</span>
            <div>
              <h3 className="text-lg font-bold text-amber-900">Daily notes, on autopilot</h3>
              <p className="mt-1 text-sm text-amber-700/80">A fresh page every morning, threaded into everything else.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-500 via-pink-500 to-orange-400 px-8 py-16 text-center text-white">
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
          <h2 className="relative text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            Ready to grow a second brain?
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-white/90">Free forever for one brain. No card, no catch.</p>
          <a href="#" className="relative mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-bold text-zinc-900 transition hover:bg-zinc-100">
            Start for free →
          </a>
        </div>
      </section>

      <footer className="border-t border-zinc-100">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row">
          <Logo />
          <p>© {new Date().getFullYear()} Cortex Labs · Made with too much coffee.</p>
        </div>
      </footer>
    </div>
  );
}
