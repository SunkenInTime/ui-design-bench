export default function Five() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-emerald-500 text-white">
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
          <a href="#product" className="transition hover:text-zinc-900">
            Product
          </a>
          <a href="#features" className="transition hover:text-zinc-900">
            Features
          </a>
          <a href="#pricing" className="transition hover:text-zinc-900">
            Pricing
          </a>
        </nav>
        <button className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700">
          Get started
        </button>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-violet-600">
              The second brain
            </p>
            <h1 className="max-w-2xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Your second brain, beautifully structured.
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-zinc-600">
              Capture, connect, and recall every idea in one calm, fast
              workspace built for clear thinking.
            </p>
            <button className="mt-5 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700">
              Try Cortex free
            </button>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[208px]">
          <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 lg:col-span-2 lg:row-span-2">
            <div className="flex h-full flex-col">
              <div className="flex flex-1 items-center justify-center">
                <svg
                  viewBox="0 0 200 140"
                  className="h-full max-h-44 w-full"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M40 110 L100 40 L160 90 M100 40 L100 110 M40 110 L100 110 M160 90 L100 110"
                    stroke="#d4d4d8"
                    strokeWidth="1.5"
                  />
                  <circle cx="40" cy="110" r="9" fill="#8b5cf6" />
                  <circle cx="100" cy="40" r="11" fill="#10b981" />
                  <circle cx="160" cy="90" r="9" fill="#f59e0b" />
                  <circle cx="100" cy="110" r="8" fill="#d4d4d8" />
                  <circle cx="70" cy="75" r="6" fill="#c084fc" />
                  <circle cx="130" cy="65" r="6" fill="#34d399" />
                  <path
                    d="M70 75 L100 40 M70 75 L100 110 M130 65 L100 40 M130 65 L160 90"
                    stroke="#e4e4e7"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Graph view</h3>
                <p className="mt-1 text-sm text-zinc-500">
                  Watch your knowledge connect itself. Patterns appear as your
                  notes accumulate.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5 lg:col-span-2">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-violet-500"
                  aria-hidden="true"
                >
                  <path d="M12 3l1.9 5.8L20 10l-6.1 2.2L12 18l-1.9-5.8L4 10l6.1-2.2L12 3z" />
                </svg>
                <span className="text-sm text-zinc-400">
                  Summarize my week of notes
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">AI capture</h3>
                <p className="mt-1 text-sm text-zinc-500">
                  Turn a week of fragments into a clear summary in one click.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <div className="flex h-full flex-col justify-between">
              <div className="grid grid-cols-7 gap-1.5">
                {Array.from({ length: 21 }).map((_, i) => (
                  <span
                    key={i}
                    className={`aspect-square rounded-sm ${
                      [2, 5, 9, 12, 14, 18].includes(i)
                        ? "bg-emerald-400"
                        : "bg-zinc-100"
                    }`}
                  />
                ))}
              </div>
              <div>
                <h3 className="text-base font-semibold">Daily notes</h3>
                <p className="mt-1 text-xs text-zinc-500">A streak you can see.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-2 text-sm text-zinc-400">
                  <svg
                    width="14"
                    height="14"
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
                  focus
                </div>
                <p className="mt-2 text-xs text-zinc-500">
                  12 notes match · 0.03s
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold">Instant search</h3>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5 lg:col-span-2">
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 rounded-lg bg-violet-50 px-3 py-2 text-sm">
                  <span className="text-violet-500">←</span>
                  <span className="text-zinc-600">
                    On deep work
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm">
                  <span className="text-emerald-500">←</span>
                  <span className="text-zinc-600">
                    Weekly review, June
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Backlinks</h3>
                <p className="mt-1 text-sm text-zinc-500">
                  Every connection is remembered, in both directions.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5 lg:col-span-2">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center gap-4 text-zinc-400">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="13" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-emerald-500"
                  aria-hidden="true"
                >
                  <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                  <path d="M21 3v5h-5" />
                  <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
                  <path d="M3 21v-5h5" />
                </svg>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="7" y="2" width="10" height="20" rx="2" />
                  <path d="M11 18h2" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Sync everywhere</h3>
                <p className="mt-1 text-sm text-zinc-500">
                  Laptop, phone, and tablet. End-to-end encrypted, always in
                  step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-zinc-200 bg-white px-8 py-12 text-center">
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Start with a single note.
          </h2>
          <p className="max-w-md text-zinc-600">
            Free for personal use. Upgrade only when your second brain
            outgrows it.
          </p>
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700">
              Get started free
            </button>
            <button className="rounded-full border border-zinc-200 px-6 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50">
              See pricing
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded bg-gradient-to-br from-violet-500 to-emerald-500" />
            <span className="font-medium text-zinc-600">Cortex</span>
          </div>
          <span>Structured thinking, for everyone.</span>
        </div>
      </footer>
    </div>
  );
}
