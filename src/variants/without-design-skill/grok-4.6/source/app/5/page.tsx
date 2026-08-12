import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ma",
  description: "Lumen as a quiet archive — hold every thought, disturb none.",
};

export default function MaLanding() {
  return (
    <div className="min-h-full bg-[#e7e2d6] text-[#2a2622]">
      <div className="relative mx-auto flex min-h-full max-w-5xl flex-col px-6 pb-32 pt-8 sm:px-10">
        <p className="pointer-events-none absolute left-4 top-1/2 hidden -translate-y-1/2 text-[11px] tracking-[0.55em] text-[#2a2622]/30 [writing-mode:vertical-rl] sm:block">
          LUMEN
        </p>

        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-full border border-[#2a2622]/30" />
            <p className="font-instrument text-2xl tracking-tight">lumen</p>
          </div>
          <p className="text-[11px] tracking-[0.28em] text-[#2a2622]/45">
            間 · interval
          </p>
        </header>

        <main className="flex flex-1 flex-col justify-center py-20">
          <div className="mx-auto max-w-2xl text-center">
            <svg
              viewBox="0 0 120 120"
              className="mx-auto h-24 w-24 text-[#c45c3e]"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="60"
                cy="60"
                r="38"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeDasharray="198 40"
                transform="rotate(-18 60 60)"
              />
            </svg>
            <p className="mt-10 text-[11px] uppercase tracking-[0.38em] text-[#c45c3e]">
              A quiet second brain
            </p>
            <h1 className="mt-6 font-instrument text-[clamp(2.8rem,8vw,5.4rem)] leading-[0.96] tracking-[-0.03em]">
              Hold every thought.
              <span className="block italic">Disturb none.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-md font-instrument text-xl leading-8 text-[#2a2622]/70">
              Lumen is an archive with room around it. Write a little. Link
              when a connection appears. Leave space for the mind to return.
            </p>
            <a
              href="#practice"
              className="mt-10 inline-block text-sm tracking-[0.22em] uppercase text-[#2a2622] underline decoration-[#2a2622]/25 underline-offset-8"
            >
              Begin the practice
            </a>
          </div>

          <section
            id="practice"
            className="mx-auto mt-24 grid w-full max-w-3xl gap-12 border-t border-[#2a2622]/10 pt-14 sm:grid-cols-3"
          >
            {[
              {
                t: "Empty page",
                d: "A daily note with nothing required of it. Presence first, structure later.",
              },
              {
                t: "Soft links",
                d: "Connections are suggested, never shouted. The graph waits until you look.",
              },
              {
                t: "Closed room",
                d: "No audience. No streak. A second brain that does not perform.",
              },
            ].map((item) => (
              <article key={item.t} className="text-center sm:text-left">
                <h2 className="font-instrument text-2xl italic">{item.t}</h2>
                <p className="mt-3 text-sm leading-7 text-[#2a2622]/60">{item.d}</p>
              </article>
            ))}
          </section>
        </main>

        <footer className="flex flex-col items-center justify-between gap-3 border-t border-[#2a2622]/10 pt-6 text-[11px] tracking-[0.22em] text-[#2a2622]/40 sm:flex-row">
          <p>Stillness is a feature</p>
          <button
            type="button"
            className="rounded-full border border-[#2a2622]/20 px-5 py-2 text-[#2a2622]"
          >
            Open Lumen
          </button>
          <p>Private · Local-first</p>
        </footer>
      </div>
    </div>
  );
}
