import Link from "next/link";

export default function DesignOne() {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <div className="mx-auto max-w-3xl px-8 py-24">
        <p className="mb-6 text-sm font-medium tracking-widest text-amber-800/70">
          YOUR SECOND BRAIN
        </p>
        <h1 className="mb-8 text-5xl font-light leading-[1.1] tracking-tight text-zinc-900">
          Think less.{" "}
          <span className="italic text-amber-900/80">Remember more.</span>
        </h1>
        <p className="mb-12 max-w-xl text-lg leading-relaxed text-zinc-600">
          A note-taking app that works like your mind—connecting ideas, surfacing
          insights, and never losing a thought.
        </p>
        <div className="flex gap-4">
          <Link
            href="#"
            className="rounded-full bg-zinc-900 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Start for free
          </Link>
          <Link
            href="#"
            className="rounded-full border border-zinc-300 px-8 py-3.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
          >
            See how it works
          </Link>
        </div>
        <div className="mt-24 border-t border-zinc-200 pt-16">
          <p className="text-sm text-zinc-500">
            Capture • Connect • Recall
          </p>
        </div>
      </div>
    </div>
  );
}

