import Link from "next/link";

export const metadata = {
  title: "Memora v2 — Dark Bold | Second Brain",
  description: "Version 2: a dark, bold landing page for Memora, your second brain.",
};

const stats = [
  { value: "12×", label: "faster recall" },
  { value: "40k+", label: "second brains" },
  { value: "2M+", label: "notes connected" },
];

const cards = [
  { title: "Instant capture", body: "⌘K anywhere. Thought saved before you blink.", glow: "from-violet-500/40" },
  { title: "Knowledge graph", body: "Watch ideas collide and form new ones.", glow: "from-fuchsia-500/40" },
  { title: "AI recall", body: "Ask anything. Answers cite your own notes.", glow: "from-cyan-500/40" },
];

export default function V2() {
  return (
    <div className="min-h-screen bg-[#08080f] font-sans text-white antialiased">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(139,92,246,0.35),transparent_70%)]"
      />
      <header className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="text-sm font-black tracking-[0.25em] uppercase">
          ◆ Memora
        </span>
        <nav className="hidden items-center gap-8 text-sm text-zinc-400 sm:flex">
          <a href="#graph" className="transition-colors hover:text-white">Graph</a>
          <a href="#power" className="transition-colors hover:text-white">Power</a>
          <a href="#cta" className="transition-colors hover:text-white">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#cta" className="text-sm text-zinc-400 transition-colors hover:text-white">
            Log in
          </a>
          <Link
            href="/3"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black transition-transform hover:scale-105"
          >
            Get Memora
          </Link>
        </div>
      </header>

      <main className="relative mx-auto max-w-6xl px-6 pt-16 pb-24 text-center sm:pt-24">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-violet-300 uppercase">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Version 02 — Dark · Bold
        </p>
        <h1 className="mx-auto mt-8 max-w-4xl text-6xl leading-[0.95] font-black tracking-tighter text-balance sm:text-8xl">
          THINK
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
            {" "}BIGGER
          </span>
          <br />
          FORGET NOTHING
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
          The note-taking app with a neural edge. Every idea you save wires
          itself into a living graph of everything you know.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#cta"
            className="w-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-4 text-sm font-bold shadow-lg shadow-fuchsia-500/30 transition-transform hover:scale-105 sm:w-auto"
          >
            Build your second brain
          </a>
          <a
            href="#graph"
            className="w-full rounded-full border border-white/15 px-8 py-4 text-sm font-bold text-zinc-200 transition-colors hover:border-white/40 sm:w-auto"
          >
            Watch the graph ▶
          </a>
        </div>

        <div className="mx-auto mt-10 flex max-w-lg items-center justify-center gap-8 border-y border-white/10 py-6">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-black tracking-tight">{s.value}</p>
              <p className="mt-1 text-xs tracking-widest text-zinc-500 uppercase">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Graph visual */}
        <div
          id="graph"
          className="relative mx-auto mt-16 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur"
        >
          <div aria-hidden className="relative mx-auto h-56 max-w-md">
            <div className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-[0_0_60px_rgba(168,85,247,0.6)]" />
            <div className="absolute top-4 left-8 h-12 w-12 rounded-xl border border-white/20 bg-white/10 backdrop-blur" />
            <div className="absolute top-10 right-10 h-14 w-14 rounded-full border border-cyan-300/40 bg-cyan-400/20" />
            <div className="absolute bottom-6 left-16 h-10 w-10 rounded-lg border border-fuchsia-300/40 bg-fuchsia-400/20" />
            <div className="absolute right-16 bottom-10 h-12 w-12 rounded-xl border border-violet-300/40 bg-violet-400/20" />
            <div className="absolute top-2 right-1/3 h-8 w-8 rounded-full bg-emerald-400/40" />
            <svg aria-hidden className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 400 224">
              <line x1="200" y1="112" x2="80" y2="40" stroke="#8b5cf6" strokeWidth="1.5" />
              <line x1="200" y1="112" x2="320" y2="60" stroke="#22d3ee" strokeWidth="1.5" />
              <line x1="200" y1="112" x2="110" y2="180" stroke="#e879f9" strokeWidth="1.5" />
              <line x1="200" y1="112" x2="300" y2="170" stroke="#8b5cf6" strokeWidth="1.5" />
              <line x1="200" y1="112" x2="260" y2="20" stroke="#34d399" strokeWidth="1.5" />
            </svg>
          </div>
          <p className="mt-6 text-sm tracking-widest text-zinc-500 uppercase">
            Live · 2,418 connections in your graph
          </p>
        </div>

        <section id="power" className="mt-20 grid gap-4 text-left sm:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className={`rounded-3xl border border-white/10 bg-gradient-to-b ${c.glow} to-transparent p-[1px]`}
            >
              <div className="h-full rounded-3xl bg-[#0d0d18] p-7">
                <h3 className="text-xl font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{c.body}</p>
              </div>
            </div>
          ))}
        </section>

        <section id="cta" className="mt-20 rounded-3xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 px-8 py-16">
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Your mind, supercharged.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/80">
            Free 30 days. Import from Notion, Obsidian, or Apple Notes in one click.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/" className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-black transition-transform hover:scale-105">
              Start free
            </Link>
            <Link href="/1" className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-bold transition-colors hover:border-white">
              ← Back to calm v1
            </Link>
          </div>
        </section>

        <footer className="mt-12 text-xs text-zinc-600">
          Memora v2 · Dark Bold —{" "}
          <Link href="/3" className="underline hover:text-zinc-300">v3</Link>{" · "}
          <Link href="/4" className="underline hover:text-zinc-300">v4</Link>{" · "}
          <Link href="/5" className="underline hover:text-zinc-300">v5</Link>
        </footer>
      </main>
    </div>
  );
}
