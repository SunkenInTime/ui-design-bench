import Link from "next/link";

export default function DesignFour() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-600 via-fuchsia-600 to-cyan-500">
      <div className="mx-auto max-w-4xl px-8 py-24">
        <div className="mb-12 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md">
          <span className="text-sm font-semibold text-white/90">
            The future of note-taking
          </span>
        </div>
        <h1 className="mb-8 text-5xl font-bold leading-tight text-white drop-shadow-lg md:text-7xl">
          Your second brain
          <br />
          <span className="bg-gradient-to-r from-cyan-200 to-yellow-200 bg-clip-text text-transparent">
            starts here.
          </span>
        </h1>
        <p className="mb-14 max-w-2xl text-xl leading-relaxed text-white/90">
          Stop forgetting. Start connecting. A note-taking app that understands
          how your mind works—and amplifies it.
        </p>
        <div className="flex gap-4">
          <Link
            href="#"
            className="rounded-xl bg-white px-8 py-4 text-base font-bold text-violet-600 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
          >
            Get started free
          </Link>
          <Link
            href="#"
            className="rounded-xl border-2 border-white/50 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/20"
          >
            Watch demo
          </Link>
        </div>
        <div className="mt-24 grid grid-cols-3 gap-8 text-white/80">
          <div>
            <p className="text-3xl font-bold">10x</p>
            <p className="text-sm">Faster recall</p>
          </div>
          <div>
            <p className="text-3xl font-bold">∞</p>
            <p className="text-sm">Connections</p>
          </div>
          <div>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm">Lost ideas</p>
          </div>
        </div>
      </div>
    </div>
  );
}
