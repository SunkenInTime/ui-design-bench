export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto max-w-2xl px-8 py-24 text-center">
        <div className="mb-8 text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
          Note-taking, reimagined
        </div>
        <h1 className="mb-6 text-5xl font-light leading-tight tracking-tight sm:text-6xl">
          Your mind deserves a
          <span className="block font-semibold">second brain</span>
        </h1>
        <p className="mx-auto mb-12 max-w-md text-lg leading-relaxed text-zinc-500">
          Capture every thought. Connect every idea. Build a knowledge base that
          thinks alongside you.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button className="rounded-full bg-zinc-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">
            Start for free
          </button>
          <button className="rounded-full border border-zinc-200 px-8 py-3 text-sm font-medium text-zinc-600 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-500 dark:hover:text-zinc-100">
            See how it works
          </button>
        </div>
        <div className="mt-20 grid grid-cols-3 gap-12 text-center">
          <div>
            <div className="mb-2 text-3xl font-light text-zinc-900 dark:text-zinc-100">10ms</div>
            <div className="text-xs uppercase tracking-widest text-zinc-400">Sync speed</div>
          </div>
          <div>
            <div className="mb-2 text-3xl font-light text-zinc-900 dark:text-zinc-100">∞</div>
            <div className="text-xs uppercase tracking-widest text-zinc-400">Connections</div>
          </div>
          <div>
            <div className="mb-2 text-3xl font-light text-zinc-900 dark:text-zinc-100">0</div>
            <div className="text-xs uppercase tracking-widest text-zinc-400">Lost ideas</div>
          </div>
        </div>
      </div>
    </div>
  );
}
