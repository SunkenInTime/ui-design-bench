import Link from "next/link";

export default function DesignTwo() {
  return (
    <div className="min-h-screen bg-[#0d0d0f] font-mono">
      <div className="mx-auto max-w-4xl px-8 py-24">
        <div className="mb-12 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-sm text-zinc-500">SYSTEM ONLINE</span>
        </div>
        <h1 className="mb-6 font-mono text-4xl font-bold tracking-tight text-white md:text-6xl">
          &gt; second_brain.init()
        </h1>
        <p className="mb-4 font-mono text-lg text-emerald-400/90">
          // Your thoughts. Indexed. Searchable. Connected.
        </p>
        <p className="mb-16 max-w-2xl font-mono text-zinc-500">
          A note-taking system that mirrors neural networks—every idea links to
          another. Build your external cortex.
        </p>
        <div className="flex gap-4">
          <Link
            href="#"
            className="rounded border border-emerald-500/50 bg-emerald-500/10 px-6 py-3 font-mono text-sm text-emerald-400 transition-colors hover:bg-emerald-500/20"
          >
            $ launch
          </Link>
          <Link
            href="#"
            className="rounded border border-zinc-600 px-6 py-3 font-mono text-sm text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-300"
          >
            view_docs()
          </Link>
        </div>
        <div className="mt-24 border-t border-zinc-800 pt-16">
          <pre className="text-xs text-zinc-600">
            {`[capture] → [tag] → [link] → [recall]
  ↓         ↓        ↓        ↓
  fast    smart   graph   instant`}
          </pre>
        </div>
      </div>
    </div>
  );
}
