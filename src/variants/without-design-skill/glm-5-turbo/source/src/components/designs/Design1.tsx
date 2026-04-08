export default function Design1() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center bg-white dark:bg-black px-6">
      <div className="max-w-2xl text-center">
        <div className="mb-12">
          <span className="text-[11px] uppercase tracking-[0.35em] font-medium text-zinc-300 dark:text-zinc-700">
            Cortex
          </span>
        </div>
        <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-extralight tracking-tighter text-zinc-900 dark:text-zinc-50 leading-[0.95] mb-8">
          Think
          <br />
          clearer.
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 dark:text-zinc-500 max-w-sm mx-auto mb-14 leading-relaxed font-light">
          A private space for your notes, ideas, and everything in between. Your
          thoughts, organized effortlessly.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
          <button className="px-8 py-3.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full text-sm font-medium hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors">
            Get started free
          </button>
          <button className="px-8 py-3.5 text-sm font-light text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
            See how it works &rarr;
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
    </div>
  );
}
