import { IterationSwitcher } from "../iteration-switcher";

export default function IterationTwoPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-sky-500 via-cyan-400 to-emerald-300 p-8 text-slate-950 shadow-2xl shadow-cyan-950/30 sm:p-12">
          <p className="text-xs uppercase tracking-[0.45em] text-slate-800/70">
            Iteration Two / Product
          </p>
          <h1 className="mt-8 max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Launch the idea with speed, clarity, and visible momentum.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-900/80">
            This route favors a direct product-marketing posture: bold headline, measurable traction, and
            clear next actions.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["24%", "faster onboarding"],
              ["8 days", "to ship campaign"],
              ["3x", "lift in trial intent"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-[1.5rem] bg-white/70 p-5 backdrop-blur">
                <p className="text-3xl font-semibold">{value}</p>
                <p className="mt-2 text-sm text-slate-700">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-200">Action Stack</p>
            <div className="mt-8 grid gap-3">
              {["Request concept review", "Open prototype", "Share with team"].map((item) => (
                <button
                  key={item}
                  type="button"
                  className="flex h-12 items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 text-left text-sm font-medium text-white transition hover:border-sky-300"
                >
                  {item}
                  <span className="text-sky-200">Go</span>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#111827] p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">Why it works</p>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Compared with the first route, this concept compresses the story and emphasizes conversion
              cues much earlier in the layout.
            </p>
          </div>
        </section>
      </div>
      <IterationSwitcher currentSlug="two" />
    </main>
  );
}

