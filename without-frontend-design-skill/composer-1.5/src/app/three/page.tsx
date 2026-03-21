import Link from "next/link";

export default function DesignThree() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50/50 to-rose-50">
      <div className="mx-auto max-w-3xl px-8 py-24">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-amber-100/80 px-4 py-1.5">
          <span className="text-2xl">🧠</span>
          <span className="text-sm font-medium text-amber-900/80">
            Your external mind
          </span>
        </div>
        <h1 className="mb-8 text-5xl font-semibold leading-tight text-stone-800 md:text-6xl">
          Notes that think
          <br />
          <span className="text-amber-700">with you.</span>
        </h1>
        <p className="mb-12 max-w-xl text-lg leading-relaxed text-stone-600">
          Like a trusted friend who never forgets—capture ideas, connect them
          naturally, and rediscover what matters when you need it.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="#"
            className="rounded-2xl bg-amber-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-amber-600/25 transition-all hover:bg-amber-700 hover:shadow-amber-600/30"
          >
            Try it free
          </Link>
          <Link
            href="#"
            className="rounded-2xl border-2 border-amber-200 bg-white/60 px-8 py-4 text-base font-semibold text-amber-900 backdrop-blur-sm transition-colors hover:border-amber-300 hover:bg-white/80"
          >
            Learn more
          </Link>
        </div>
        <div className="mt-24 flex gap-8 text-sm text-stone-500">
          <span>✨ Capture instantly</span>
          <span>🔗 Connect ideas</span>
          <span>💡 Surface insights</span>
        </div>
      </div>
    </div>
  );
}
