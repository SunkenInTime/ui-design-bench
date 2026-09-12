export default function Three() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-violet-600/25 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[420px] w-[420px] rounded-full bg-fuchsia-500/20 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 -left-32 h-[360px] w-[360px] rounded-full bg-cyan-500/15 blur-[120px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-fuchsia-500 to-violet-600 text-white">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2l1.9 5.8L20 10l-6.1 2.2L12 18l-1.9-5.8L4 10l6.1-2.2L12 2z" />
              </svg>
            </div>
            <span className="font-mono text-sm font-semibold tracking-tight">
              cortex
            </span>
          </div>
          <nav className="hidden items-center gap-8 font-mono text-sm text-zinc-400 sm:flex">
            <a href="#features" className="transition hover:text-white">
              features
            </a>
            <a href="#stack" className="transition hover:text-white">
              stack
            </a>
            <a href="#docs" className="transition hover:text-white">
              docs
            </a>
          </nav>
          <button className="rounded-full bg-white px-4 py-2 font-mono text-sm font-medium text-zinc-900 transition hover:bg-zinc-200">
            open app
          </button>
        </header>

        <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-fuchsia-400">
            {"> cortex // second_brain v2.0"}
          </p>
          <h1 className="mx-auto max-w-4xl bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-7xl">
            The brain you wished you had.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
            A local-first knowledge base for builders. Capture at the speed of
            thought, link everything, and query your own mind in milliseconds.
          </p>
          <div className="mt-9 flex items-center justify-center gap-3">
            <button className="rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 px-6 py-3 font-medium text-white shadow-lg shadow-fuchsia-500/30 transition hover:shadow-fuchsia-500/50">
              Install locally
            </button>
            <button className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-zinc-200 backdrop-blur transition hover:bg-white/10">
              Read the docs
            </button>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-24">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900/70 shadow-2xl shadow-black/50 backdrop-blur">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-3 font-mono text-xs text-zinc-500">
                ~/cortex — zsh
              </span>
            </div>
            <div className="space-y-2 p-5 text-left font-mono text-sm">
              <p className="text-zinc-400">
                <span className="text-emerald-400">$</span>{" "}
                {"cortex capture \"ship the graph view friday\""}
              </p>
              <p className="text-zinc-500">
                {"✓ linked to 3 existing notes · 2 new backlinks"}
              </p>
              <p className="text-zinc-400">
                <span className="text-emerald-400">$</span> cortex graph --open
              </p>
              <p className="text-zinc-500">
                {"→ rendering 1,204 nodes · 3,890 edges"}
              </p>
              <p className="text-zinc-400">
                <span className="text-emerald-400">$</span>{" "}
                {"cortex ask \"what did i learn about focus?\""}
              </p>
              <p className="text-fuchsia-300">
                {"⟳ synthesizing from 12 notes..."}
              </p>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-fuchsia-500/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-fuchsia-500/15 text-fuchsia-300">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
                </svg>
              </div>
              <h3 className="mt-5 font-semibold">Capture at light speed</h3>
              <p className="mt-2 text-sm text-zinc-400">
                A global hotkey, plain text, and Markdown. No modals, no
                friction, no thought left behind.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-violet-500/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="18" cy="18" r="3" />
                  <path d="M9 6h6M6 9v6M18 15v-6" />
                </svg>
              </div>
              <h3 className="mt-5 font-semibold">Bi-directional links</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Every link travels both ways. The graph grows itself while you
                write, no extra work required.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-cyan-500/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <h3 className="mt-5 font-semibold">Query your mind</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Full-text and semantic search across every note you have ever
                written, answered instantly.
              </p>
            </div>
          </div>
        </section>

        <section id="stack" className="mx-auto max-w-6xl px-6 py-16 pb-28">
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/10 p-10 text-center backdrop-blur">
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Local-first. End-to-end encrypted. Yours.
            </h2>
            <p className="max-w-md text-zinc-300">
              Your notes live on your machine and sync only between devices you
              trust. No servers reading your thoughts.
            </p>
            <button className="rounded-full bg-white px-6 py-3 font-medium text-zinc-900 transition hover:bg-zinc-200">
              Download for your OS
            </button>
          </div>
        </section>

        <footer className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 font-mono text-xs text-zinc-500">
            <span>cortex // second_brain</span>
            <span>Built for builders, in the dark.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
