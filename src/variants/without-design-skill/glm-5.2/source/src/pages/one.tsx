export default function One() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-zinc-900 text-white">
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
          <span className="text-sm font-semibold tracking-tight">Cortex</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-zinc-600 sm:flex">
          <a href="#features" className="transition hover:text-zinc-900">
            Features
          </a>
          <a href="#how" className="transition hover:text-zinc-900">
            How it works
          </a>
          <a href="#pricing" className="transition hover:text-zinc-900">
            Pricing
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="text-sm text-zinc-600 transition hover:text-zinc-900">
            Sign in
          </button>
          <button className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700">
            Get started
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-20 pb-24 text-center">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
          The second brain
        </p>
        <h1 className="mx-auto max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">
          Think better. Remember everything.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-600">
          Cortex is the calm place to capture ideas, connect them, and recall
          them exactly when they matter.
        </p>
        <div className="mt-9 flex items-center justify-center gap-3">
          <button className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700">
            Get started free
          </button>
          <button className="rounded-full border border-zinc-200 px-6 py-3 text-sm font-medium text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50">
            Watch the demo
          </button>
        </div>
        <p className="mt-5 text-xs text-zinc-400">
          Free forever. No credit card required.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-300/40">
          <div className="flex items-center gap-1.5 border-b border-zinc-100 bg-zinc-50 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
            <span className="ml-3 text-xs text-zinc-400">
              cortex — second brain
            </span>
          </div>
          <div className="grid grid-cols-3">
            <div className="border-r border-zinc-100 p-4 text-sm">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Notes
              </p>
              <div className="space-y-2">
                <div className="rounded-md bg-zinc-100 px-3 py-2 font-medium text-zinc-900">
                  Reading list
                </div>
                <div className="px-3 py-2 text-zinc-500">Product ideas</div>
                <div className="px-3 py-2 text-zinc-500">Neuroscience</div>
                <div className="px-3 py-2 text-zinc-500">Quotes</div>
              </div>
            </div>
            <div className="col-span-2 p-6">
              <h3 className="text-lg font-semibold">Reading list</h3>
              <p className="mt-1 text-xs text-zinc-400">Updated today</p>
              <div className="mt-5 space-y-3 text-sm text-zinc-600">
                <p className="flex items-center gap-2">
                  <span className="text-emerald-500">●</span>
                  Thinking, Fast and Slow — Kahneman
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-zinc-300">○</span>
                  The Builder&apos;s Secret — on compounding
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-zinc-300">○</span>
                  Notes on a second brain — linked to [[Neuroscience]]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
          Why Cortex
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-center text-3xl font-semibold tracking-tight sm:text-4xl">
          A complete loop for your thinking
        </h2>
        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900">
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
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
              </svg>
            </div>
            <h3 className="mt-5 text-lg font-semibold">Capture</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Jot a note the moment it arrives. Markdown, backlinks, and tags
              keep it tidy.
            </p>
          </div>
          <div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900">
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
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <h3 className="mt-5 text-lg font-semibold">Connect</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Link related notes and let the graph reveal patterns you would
              never spot alone.
            </p>
          </div>
          <div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900">
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
            <h3 className="mt-5 text-lg font-semibold">Recall</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Search across everything in milliseconds. Your past self becomes
              a trusted advisor.
            </p>
          </div>
        </div>
      </section>

      <section id="how" className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Start in under a minute
        </h2>
        <p className="mx-auto mt-4 max-w-md text-zinc-600">
          Capture your first note, link it to an idea, and watch your second
          brain grow.
        </p>
        <button className="mt-8 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700">
          Get started free
        </button>
      </section>

      <footer className="border-t border-zinc-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded bg-zinc-900" />
            <span className="font-medium text-zinc-600">Cortex</span>
          </div>
          <span>A second brain, calmly designed.</span>
        </div>
      </footer>
    </div>
  );
}
