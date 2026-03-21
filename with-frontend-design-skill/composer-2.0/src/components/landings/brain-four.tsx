import Link from "next/link";
import { Orbitron, Exo_2 } from "next/font/google";

const orbit = Orbitron({
  subsets: ["latin"],
  variable: "--font-brain-four-orbit",
});

const exo = Exo_2({
  subsets: ["latin"],
  variable: "--font-brain-four-exo",
});

export default function BrainFour() {
  return (
    <div
      className={`${orbit.variable} ${exo.variable} relative min-h-screen overflow-hidden bg-[#05020f] text-[#c8f4ff]`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,240,255,0.15),transparent)]" />
      <div className="brain-scanlines pointer-events-none absolute inset-0 opacity-[0.12]" />

      <div className="pointer-events-none absolute left-1/2 top-24 h-px w-[min(90vw,800px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff00aa] to-transparent blur-[1px]" />

      <header className="relative z-10 mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 pt-10">
        <span className="font-[family-name:var(--font-brain-four-orbit)] text-xs font-semibold tracking-[0.5em] text-[#00f0ff]">
          NEURAL.CORE
        </span>
        <div className="flex gap-3 font-[family-name:var(--font-brain-four-exo)] text-[10px] uppercase tracking-widest text-[#ff00aa]/90">
          <span className="rounded border border-[#00f0ff]/40 px-2 py-1 text-[#00f0ff]">
            v2.∞
          </span>
          <span className="rounded border border-[#ff00aa]/30 px-2 py-1">
            capture stream
          </span>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl px-6 pb-32 pt-16 text-center lg:pt-24">
        <p className="font-[family-name:var(--font-brain-four-exo)] text-xs uppercase tracking-[0.4em] text-[#ff00aa]">
          External memory array
        </p>
        <h1 className="mt-6 font-[family-name:var(--font-brain-four-orbit)] text-4xl font-bold leading-tight tracking-wide text-[#00f0ff] drop-shadow-[0_0_24px_rgba(0,240,255,0.45)] sm:text-5xl lg:text-6xl">
          THINK OUTSIDE
          <br />
          <span className="text-[#ff6bcb] drop-shadow-[0_0_20px_rgba(255,0,170,0.35)]">
            YOUR SKULL
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-lg font-[family-name:var(--font-brain-four-exo)] text-sm leading-relaxed text-[#8ec8d8]">
          Ingest fragments. Link synapses. Query the graph. A note system built
          for the way futures get remembered—fast, glowing, and impossible to
          lose in a drawer.
        </p>

        <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
          {[
            { k: "INGEST", v: "OCR · voice · paste" },
            { k: "WEAVE", v: "Backlinks · blocks" },
            { k: "QUERY", v: "Semantic · instant" },
          ].map((cell) => (
            <div
              key={cell.k}
              className="border border-[#00f0ff]/25 bg-[#0a0a1a]/80 px-4 py-5 text-left backdrop-blur-sm transition hover:border-[#ff00aa]/50 hover:shadow-[0_0_20px_rgba(255,0,170,0.15)]"
            >
              <p className="font-[family-name:var(--font-brain-four-orbit)] text-[10px] tracking-[0.35em] text-[#00f0ff]">
                {cell.k}
              </p>
              <p className="mt-2 font-[family-name:var(--font-brain-four-exo)] text-xs text-[#b8e8f0]">
                {cell.v}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="#"
          className="mt-14 inline-flex items-center gap-3 border border-[#00f0ff] bg-[#00f0ff]/10 px-8 py-4 font-[family-name:var(--font-brain-four-orbit)] text-xs font-bold tracking-[0.35em] text-[#00f0ff] transition hover:bg-[#00f0ff] hover:text-[#05020f] hover:shadow-[0_0_40px_rgba(0,240,255,0.5)]"
        >
          INITIALIZE
          <span aria-hidden className="text-[#ff00aa]">
            ▸
          </span>
        </Link>
      </main>

      <footer className="relative z-10 border-t border-[#00f0ff]/20 px-6 py-8 text-center font-[family-name:var(--font-brain-four-exo)] text-[10px] uppercase tracking-[0.25em] text-[#5a8a9a]">
        Iteration IV · Retro-future terminal · Cognition as signal
      </footer>
    </div>
  );
}
