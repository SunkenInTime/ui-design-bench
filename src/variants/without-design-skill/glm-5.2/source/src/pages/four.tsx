export default function Four() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-800">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-orange-200/60 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 rounded-full bg-rose-200/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-amber-200/60 blur-3xl" />

      <div className="relative">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 22c4-2 7-6 7-11a7 7 0 0 0-14 0c0 5 3 9 7 11Z" />
                <path d="M12 22V8" />
                <path d="M12 8c0-3 2-5 5-5" />
              </svg>
            </div>
            <span className="text-base font-semibold tracking-tight">Cortex</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-stone-600 sm:flex">
            <a href="#garden" className="transition hover:text-stone-900">
              The garden
            </a>
            <a href="#values" className="transition hover:text-stone-900">
              Values
            </a>
            <a href="#story" className="transition hover:text-stone-900">
              Our story
            </a>
          </nav>
          <button className="rounded-full bg-stone-900 px-5 py-2 text-sm font-medium text-[#f6f1ea] transition hover:bg-stone-700">
            Start growing
          </button>
        </header>

        <section className="mx-auto max-w-6xl px-6 pt-20 pb-24 text-center">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-orange-600">
            A second brain, grown gently
          </p>
          <h1 className="mx-auto max-w-3xl font-serif text-5xl leading-tight tracking-tight sm:text-6xl">
            A garden for your thoughts.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-stone-600">
            Cortex is a warm, patient place for your ideas to take root, grow
            connections, and bloom into insight when the season is right.
          </p>
          <div className="mt-9 flex items-center justify-center gap-3">
            <button className="rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600">
              Plant your first note
            </button>
            <button className="rounded-full border border-stone-300 bg-white/60 px-6 py-3 text-sm font-medium text-stone-700 backdrop-blur transition hover:bg-white">
              Take the tour
            </button>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-24">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-stone-200/80 bg-white/70 p-6 shadow-xl shadow-orange-200/40 backdrop-blur">
              <div className="flex items-center gap-2 text-stone-400">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                <span className="text-xs font-medium uppercase tracking-wider">
                  Today
                </span>
              </div>
              <h3 className="mt-4 font-serif text-xl">Morning pages</h3>
              <p className="mt-2 text-sm text-stone-600">
                Three quiet pages before the world wakes. Linked to
                #stillness and #ritual.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                  #stillness
                </span>
                <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-700">
                  #ritual
                </span>
              </div>
            </div>
            <div className="rounded-3xl border border-stone-200/80 bg-white/70 p-6 shadow-xl shadow-rose-200/40 backdrop-blur">
              <div className="flex items-center gap-2 text-stone-400">
                <span className="h-2 w-2 rounded-full bg-rose-400" />
                <span className="text-xs font-medium uppercase tracking-wider">
                  Yesterday
                </span>
              </div>
              <h3 className="mt-4 font-serif text-xl">A walk in the orchard</h3>
              <p className="mt-2 text-sm text-stone-600">
                Notes on slowness, ripening, and giving ideas time to mature.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                  #patience
                </span>
                <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
                  #walking
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="values" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-white/50 p-8 backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 22V8" />
                  <path d="M12 8c0-3 2-5 5-5" />
                  <path d="M12 14c-3 0-5-2-5-5" />
                </svg>
              </div>
              <h3 className="mt-5 font-serif text-xl">Plant ideas</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Drop a seed of a thought and let it rest. Cortex keeps it safe
                until you return to tend it.
              </p>
            </div>
            <div className="rounded-3xl bg-white/50 p-8 backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-600">
                <svg
                  width="22"
                  height="22"
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
              <h3 className="mt-5 font-serif text-xl">Tend connections</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Notes cross-pollinate through gentle links, growing a living
                garden rather than a pile of files.
              </p>
            </div>
            <div className="rounded-3xl bg-white/50 p-8 backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" />
                </svg>
              </div>
              <h3 className="mt-5 font-serif text-xl">Harvest insight</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                When the time is right, gather what has grown into something
                you can finally share.
              </p>
            </div>
          </div>
        </section>

        <section id="story" className="mx-auto max-w-6xl px-6 pb-28">
          <div className="flex flex-col items-center gap-6 rounded-[2.5rem] bg-gradient-to-br from-orange-500 to-rose-500 px-8 py-14 text-center text-white">
            <h2 className="max-w-xl font-serif text-3xl tracking-tight sm:text-4xl">
              Grow a mind that remembers kindly.
            </h2>
            <p className="max-w-md text-orange-50">
              Start with one small note today. In a year, you will have a
              garden.
            </p>
            <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-orange-600 transition hover:bg-orange-50">
              Begin, gently
            </button>
          </div>
        </section>

        <footer className="border-t border-stone-200">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-stone-500">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-orange-500" />
              <span className="font-medium text-stone-700">Cortex</span>
            </div>
            <span>Tend your thoughts. They grow.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
