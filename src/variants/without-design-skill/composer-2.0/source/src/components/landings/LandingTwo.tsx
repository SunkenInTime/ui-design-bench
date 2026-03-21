/** Iteration 2 — Night garden: deep gradients, soft glow, constellation metaphor. */
export function LandingTwo() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050508] text-violet-50">
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-violet-600/25 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-[90px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-16 h-px w-[min(80vw,720px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-400/40 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-8 py-24 lg:flex-row lg:items-center lg:gap-20">
        <div className="flex-1">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_#a78bfa]" />
            Second brain
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-[3.25rem]">
            Thoughts that
            <span className="block bg-gradient-to-r from-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
              find each other.
            </span>
          </h1>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-violet-200/75">
            Notes link, resurface, and grow with you. Build a personal knowledge
            galaxy instead of a dusty drawer of docs.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#"
              className="rounded-full bg-violet-400 px-6 py-3 text-sm font-semibold text-violet-950 shadow-[0_0_24px_rgba(167,139,250,0.35)] transition hover:bg-violet-300"
            >
              Get started
            </a>
            <a
              href="#"
              className="rounded-full border border-violet-400/40 px-6 py-3 text-sm font-medium text-violet-100 transition hover:border-violet-300/60 hover:bg-violet-500/10"
            >
              See how linking works
            </a>
          </div>
        </div>
        <div className="mt-16 flex flex-1 justify-center lg:mt-0">
          <div className="relative grid h-72 w-72 grid-cols-3 gap-4 sm:h-80 sm:w-80">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className={`rounded-2xl border border-violet-400/20 bg-violet-950/40 backdrop-blur-sm ${
                  i === 4 ? "ring-2 ring-violet-400/50" : ""
                }`}
              />
            ))}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl border border-violet-400/10"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </div>
  );
}

