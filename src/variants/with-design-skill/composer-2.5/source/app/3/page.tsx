import { Cormorant_Garamond, Jost } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lumen-display",
});

const body = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-lumen-body",
});

const pillars = [
  {
    num: "I",
    title: "Capture with intention",
    text: "Every entry is a deliberate act of preservation — worthy of gold-leaf attention.",
  },
  {
    num: "II",
    title: "Connect with elegance",
    text: "Links are not wires. They are golden threads between ideas of consequence.",
  },
  {
    num: "III",
    title: "Recall with clarity",
    text: "Your second brain speaks in complete sentences, not fragmented keywords.",
  },
];

export default function ArtDecoLanding() {
  return (
    <div
      className={`${display.variable} ${body.variable} relative min-h-screen overflow-hidden`}
      style={{
        fontFamily: "var(--font-lumen-body), sans-serif",
        background: "#0a1628",
        color: "#faf8f5",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #c9a962 0px,
            #c9a962 1px,
            transparent 1px,
            transparent 40px
          )`,
        }}
      />

      <svg
        className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 opacity-[0.08]"
        viewBox="0 0 400 400"
        aria-hidden
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <line
            key={i}
            x1="200"
            y1="200"
            x2={200 + 180 * Math.cos((i * Math.PI) / 12)}
            y2={200 + 180 * Math.sin((i * Math.PI) / 12)}
            stroke="#c9a962"
            strokeWidth="0.5"
          />
        ))}
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="none"
          stroke="#c9a962"
          strokeWidth="0.5"
        />
        <circle
          cx="200"
          cy="200"
          r="120"
          fill="none"
          stroke="#c9a962"
          strokeWidth="0.5"
        />
      </svg>

      <header className="relative z-10 mx-auto flex max-w-5xl items-center justify-between px-8 py-10">
        <div className="flex flex-col items-center gap-1">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent" />
          <span
            className="text-2xl tracking-[0.3em]"
            style={{ fontFamily: "var(--font-lumen-display), serif" }}
          >
            LUMEN
          </span>
          <span className="text-[10px] tracking-[0.5em] text-[#c9a962]/70">
            COGNITIVE ATelier
          </span>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent" />
        </div>
        <button
          type="button"
          className="hidden border border-[#c9a962]/40 px-6 py-2 text-xs tracking-[0.25em] text-[#c9a962] transition hover:bg-[#c9a962]/10 sm:block"
        >
          REQUEST ACCESS
        </button>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl px-8 pb-24">
        <section className="py-16 text-center">
          <p
            className="mb-6 text-xs tracking-[0.5em] text-[#c9a962]"
            style={{ animation: "reveal-up 0.7s ease-out both" }}
          >
            EST. MMXXVI — FOR THE DISCERNING MIND
          </p>
          <h1
            className="mx-auto max-w-3xl text-5xl leading-[1.1] md:text-7xl"
            style={{
              fontFamily: "var(--font-lumen-display), serif",
              animation: "reveal-up 0.7s ease-out 0.1s both",
            }}
          >
            A second brain
            <br />
            <span className="italic text-[#c9a962]">worthy</span> of your
            finest thinking
          </h1>
          <div
            className="mx-auto my-10 flex items-center justify-center gap-4"
            style={{ animation: "reveal-up 0.7s ease-out 0.2s both" }}
          >
            <div className="h-px w-20 bg-[#c9a962]/40" />
            <svg width="12" height="12" viewBox="0 0 12 12" fill="#c9a962">
              <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
            </svg>
            <div className="h-px w-20 bg-[#c9a962]/40" />
          </div>
          <p
            className="mx-auto max-w-xl text-base font-light leading-relaxed text-[#faf8f5]/70"
            style={{ animation: "reveal-up 0.7s ease-out 0.3s both" }}
          >
            Lumen transforms scattered thoughts into an illuminated archive —
            where every note gleams with context, connection, and recall.
          </p>
          <div
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animation: "reveal-up 0.7s ease-out 0.4s both" }}
          >
            <button
              type="button"
              className="relative overflow-hidden px-10 py-3.5 text-xs tracking-[0.3em] text-[#0a1628] transition hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #d4b872, #c9a962)" }}
            >
              BEGIN YOUR ARCHIVE
            </button>
            <button
              type="button"
              className="px-10 py-3.5 text-xs tracking-[0.3em] text-[#c9a962] transition hover:text-[#faf8f5]"
            >
              VIEW THE COLLECTION →
            </button>
          </div>
        </section>

        <section className="mt-20 grid gap-px bg-[#c9a962]/20 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <article
              key={pillar.num}
              className="bg-[#0a1628] p-10 text-center"
              style={{
                animation: `reveal-up 0.7s ease-out ${0.3 + i * 0.1}s both`,
              }}
            >
              <span
                className="mb-4 block text-3xl text-[#c9a962]"
                style={{ fontFamily: "var(--font-lumen-display), serif" }}
              >
                {pillar.num}
              </span>
              <h2
                className="mb-4 text-xl"
                style={{ fontFamily: "var(--font-lumen-display), serif" }}
              >
                {pillar.title}
              </h2>
              <p className="text-sm font-light leading-relaxed text-[#faf8f5]/60">
                {pillar.text}
              </p>
            </article>
          ))}
        </section>

        <section className="relative mt-32 overflow-hidden border border-[#c9a962]/20 p-12 md:p-20">
          <div className="absolute top-0 right-0 h-32 w-32 border-b border-l border-[#c9a962]/30" />
          <div className="absolute bottom-0 left-0 h-32 w-32 border-t border-r border-[#c9a962]/30" />
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs tracking-[0.4em] text-[#c9a962]">
                THE ATELIER DIFFERENCE
              </p>
              <h2
                className="text-3xl leading-snug md:text-4xl"
                style={{ fontFamily: "var(--font-lumen-display), serif" }}
              >
                Notes that age like fine correspondence
              </h2>
            </div>
            <p className="text-sm font-light leading-7 text-[#faf8f5]/65">
              Where other apps treat knowledge as disposable data, Lumen treats
              each note as an artifact — timestamped, interlinked, and
              retrievable with the grace of a well-curated library.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
