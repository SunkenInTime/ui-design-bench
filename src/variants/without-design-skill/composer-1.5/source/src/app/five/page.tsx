import Link from "next/link";

export default function DesignFive() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-8 py-24">
        <div className="mb-16 grid gap-16 md:grid-cols-[1fr_2fr]">
          <aside>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
              Note-taking reimagined
            </p>
          </aside>
          <main>
            <h1 className="mb-6 text-6xl font-bold leading-[0.95] tracking-tighter text-zinc-900 md:text-8xl">
              A second
              <br />
              brain.
            </h1>
            <p className="mb-4 max-w-md text-2xl font-light leading-snug text-zinc-600">
              Not a folder. Not a database. A mind.
            </p>
            <p className="mb-12 max-w-lg text-zinc-500">
              Capture everything. Connect anything. Retrieve instantly. Your
              notes become a living extension of how you think.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="group flex items-center gap-2 border-b-2 border-zinc-900 pb-1 text-sm font-semibold text-zinc-900 transition-colors hover:border-zinc-600"
              >
                Begin
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-zinc-500 underline-offset-4 hover:underline"
              >
                Read the manifesto
              </Link>
            </div>
          </main>
        </div>
        <div className="border-t border-zinc-200 pt-16">
          <div className="flex flex-wrap gap-x-16 gap-y-4 text-sm">
            <div>
              <p className="font-semibold text-zinc-900">Capture</p>
              <p className="text-zinc-500">From anywhere, in seconds</p>
            </div>
            <div>
              <p className="font-semibold text-zinc-900">Connect</p>
              <p className="text-zinc-500">Ideas link like neurons</p>
            </div>
            <div>
              <p className="font-semibold text-zinc-900">Recall</p>
              <p className="text-zinc-500">Find anything, instantly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

