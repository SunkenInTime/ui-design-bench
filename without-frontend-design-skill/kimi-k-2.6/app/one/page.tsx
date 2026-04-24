export default function One() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-zinc-900 px-6">
      <div className="max-w-2xl text-center space-y-8">
        <span className="inline-block rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-medium text-zinc-600">
          Introducing Cortex
        </span>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-zinc-950 leading-[1.1]">
          Your second brain, <br /> finally organized.
        </h1>
        <p className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-lg mx-auto">
          A quiet place for your loudest ideas. Capture notes, connect thoughts, and never lose an insight again.
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <button className="h-12 px-8 rounded-full bg-zinc-950 text-white font-medium hover:bg-zinc-800 transition cursor-pointer">
            Start free
          </button>
          <button className="h-12 px-8 rounded-full border border-zinc-200 text-zinc-700 font-medium hover:border-zinc-300 transition cursor-pointer">
            Watch demo
          </button>
        </div>
      </div>
      <div className="mt-24 w-full max-w-4xl h-64 rounded-3xl bg-zinc-100 border border-zinc-200" />
    </div>
  );
}
