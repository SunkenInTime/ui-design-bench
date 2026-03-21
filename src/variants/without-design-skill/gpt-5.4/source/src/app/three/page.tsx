import { IterationSwitcher } from "../iteration-switcher";

export default function IterationThreePage() {
  return (
    <main className="min-h-screen bg-[#fff8ef] px-6 py-10 text-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <header className="rounded-[2rem] border border-orange-200 bg-white p-8 shadow-lg shadow-orange-200/40 sm:p-12">
          <p className="text-xs uppercase tracking-[0.45em] text-orange-500">
            Iteration Three / Playful
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                A brighter concept built from stacked moments.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                This version adds more color, more contrast between sections, and a friendlier card-based
                rhythm.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-[#1d4ed8] p-6 text-white">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-100">Snapshot</p>
              <p className="mt-6 text-5xl font-semibold">5</p>
              <p className="mt-2 max-w-[12rem] text-sm leading-6 text-blue-100">
                modular cards driving the page composition.
              </p>
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[1.75rem] bg-[#f97316] p-7 text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-100">Personality</p>
            <p className="mt-8 text-3xl font-semibold">Warm and energetic.</p>
          </div>
          <div className="rounded-[1.75rem] bg-[#22c55e] p-7 text-slate-950">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-900/60">Layout</p>
            <p className="mt-8 text-3xl font-semibold">Card-first storytelling.</p>
          </div>
          <div className="rounded-[1.75rem] bg-[#0f172a] p-7 text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Intent</p>
            <p className="mt-8 text-3xl font-semibold">Designed to feel approachable.</p>
          </div>
        </section>
      </div>
      <IterationSwitcher currentSlug="three" />
    </main>
  );
}

