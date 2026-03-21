/** Iteration 1 — Editorial minimal: calm whitespace, serif headline, quiet confidence. */
export function LandingOne() {
  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#1c1917]">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-8 py-24">
        <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.35em] text-stone-500">
          Note-taking, reimagined
        </p>
        <h1 className="font-serif text-5xl font-normal leading-[1.08] tracking-tight sm:text-6xl">
          A second brain
          <span className="block text-stone-400">for the way you think.</span>
        </h1>
        <p className="mt-10 max-w-md text-lg leading-relaxed text-stone-600">
          Capture ideas in the moment, connect them over time, and return to a
          living map of your mind—not a pile of forgotten files.
        </p>
        <div className="mt-14 flex flex-wrap items-center gap-6">
          <a
            href="#"
            className="border-b border-stone-900 pb-0.5 text-sm font-medium transition hover:border-transparent hover:opacity-70"
          >
            Start free
          </a>
          <a href="#" className="text-sm text-stone-500 underline-offset-4 hover:underline">
            Watch overview
          </a>
        </div>
      </div>
    </div>
  );
}

