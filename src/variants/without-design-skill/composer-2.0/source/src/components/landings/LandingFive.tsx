/** Iteration 5 — Glass & mesh: soft gradients, frosted panels, calm SaaS polish. */
export function LandingFive() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(56,189,248,0.22),transparent),radial-gradient(ellipse_60%_50%_at_100%_50%,rgba(167,139,250,0.15),transparent),radial-gradient(ellipse_50%_40%_at_0%_80%,rgba(52,211,153,0.12),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1 lg:max-w-xl">
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-sky-200/90 backdrop-blur-md">
            Second brain for modern thinkers
          </div>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Notes that remember
            <span className="mt-1 block bg-gradient-to-r from-sky-300 via-violet-300 to-emerald-300 bg-clip-text text-transparent">
              how ideas relate.
            </span>
          </h1>
          <p className="mt-8 text-base leading-relaxed text-slate-400">
            Write once. Link forever. Surface the right thought at the right
            time—with a calm interface that stays out of your way.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-500/10 transition hover:bg-slate-100"
            >
              Try it free
            </a>
            <a
              href="#"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 backdrop-blur-md transition hover:bg-white/10"
            >
              View product tour
            </a>
          </div>
        </div>
        <div className="mt-14 flex flex-1 justify-center lg:mt-0">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Today
            </p>
            <div className="mt-4 space-y-3">
              {[
                { t: "Meeting: narrative arc", c: "sky" },
                { t: "Link → Character voice doc", c: "violet" },
                { t: "Random: subway scene", c: "emerald" },
              ].map((row) => (
                <div
                  key={row.t}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.04] px-4 py-3"
                >
                  <span
                    className={`h-2 w-2 shrink-0 rounded-full ${
                      row.c === "sky"
                        ? "bg-sky-400"
                        : row.c === "violet"
                          ? "bg-violet-400"
                          : "bg-emerald-400"
                    }`}
                  />
                  <span className="text-sm text-slate-200">{row.t}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-slate-500">
              Bi-directional links · Full-text search · Offline-ready
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

