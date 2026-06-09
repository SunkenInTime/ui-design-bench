import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "../components/reveal";
import { KineticHero } from "./kinetic-hero";
import { HorizontalPan } from "./horizontal-pan";
import { MagneticLink } from "./magnetic-link";

export const metadata: Metadata = {
  title: "Trove. Your mind, indexed.",
};

/*
  Iteration 3: "Signal"
  Dials: VARIANCE 9 / MOTION 8 / DENSITY 3
  Theme lock: dark (zinc-950). Accent lock: lime.
  Radius system: interactive elements are pills, surfaces are sharp.
  Motion motivation: hero reveal sets hierarchy; the horizontal pan walks
  the four-step product loop in sequence; the marquee repeats the loop as
  rhythm. Everything collapses under reduced motion.
*/

const MARQUEE_WORDS = ["Capture", "Link", "Recall", "Resurface"];

const SLIDES = [
  {
    title: "Capture",
    body: "One keystroke from anywhere. The thought lands before you lose it.",
  },
  {
    title: "Link",
    body: "Every note connects to its neighbors the moment it is saved.",
    image: "/variants/with-taste-skill/fable/gen/trove-signal.png",
    alt: "Streaks of green light tracing paths through darkness",
  },
  {
    title: "Recall",
    body: "Search by meaning. Half-remembered ideas come back whole.",
  },
  {
    title: "Resurface",
    body: "Old notes return on their own, exactly when they become relevant.",
    image: "/variants/with-taste-skill/fable/gen/trove-cards-dark.png",
    alt: "A stack of dark glass cards edge-lit in green",
  },
];

function MarqueeRow() {
  const half = (
    <>
      {Array.from({ length: 3 }).map((_, rep) =>
        MARQUEE_WORDS.map((word, i) => (
          <span
            key={`${rep}-${word}`}
            className={`px-8 font-grotesk text-5xl font-bold uppercase tracking-tight md:text-7xl ${
              (rep * MARQUEE_WORDS.length + i) % 2 === 0
                ? "text-zinc-100"
                : "text-transparent [-webkit-text-stroke:1.5px_#52525c]"
            }`}
          >
            {word}
          </span>
        ))
      )}
    </>
  );
  return (
    <div className="flex w-max animate-marquee items-center py-8">
      <div className="flex items-center whitespace-nowrap">{half}</div>
      <div aria-hidden className="flex items-center whitespace-nowrap">
        {half}
      </div>
    </div>
  );
}

export default function SignalPage() {
  return (
    <div className="min-h-dvh overflow-x-clip bg-zinc-950 font-sans text-zinc-100">
      {/* Nav */}
      <header className="absolute inset-x-0 top-0 z-40">
        <div className="flex h-18 items-center justify-between px-6 py-5 md:px-12">
          <a
            href="#"
            className="font-grotesk text-lg font-bold uppercase tracking-tight"
          >
            Trove
          </a>
          <a
            href="#join"
            className="rounded-full bg-lime-300 px-5 py-2 font-grotesk text-xs font-semibold uppercase tracking-wide text-zinc-950 transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Start free
          </a>
        </div>
      </header>

      <main>
        <KineticHero />

        {/* Kinetic marquee: the product loop as rhythm */}
        <section className="overflow-hidden border-y border-white/10">
          <MarqueeRow />
        </section>

        {/* Horizontal pan: the loop, slide by slide */}
        <HorizontalPan>
          {SLIDES.map((slide, i) => (
            <article
              key={slide.title}
              className="relative flex min-h-[100dvh] w-screen shrink-0 items-center overflow-hidden border-r border-white/10 md:min-h-0 md:w-[62vw]"
            >
              {slide.image && (
                <>
                  <Image
                    src={slide.image}
                    alt={slide.alt ?? ""}
                    fill
                    sizes="(max-width: 768px) 100vw, 62vw"
                    className="object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent" />
                </>
              )}
              <div className="relative px-8 md:px-16">
                <h2 className="font-grotesk text-6xl font-bold uppercase tracking-tighter md:text-8xl">
                  {slide.title}
                  <span className="text-lime-300">.</span>
                </h2>
                <p className="mt-6 max-w-sm text-lg leading-relaxed text-zinc-300">
                  {slide.body}
                </p>
                <span className="sr-only">
                  Part {i + 1} of the Trove loop
                </span>
              </div>
            </article>
          ))}
        </HorizontalPan>

        {/* Big-type manifesto */}
        <section className="px-6 py-32 md:px-12">
          <Reveal>
            <h2 className="font-grotesk text-[clamp(2.75rem,8vw,7rem)] font-bold uppercase leading-[0.95] tracking-tighter">
              Stop filing.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <h2 className="font-grotesk text-[clamp(2.75rem,8vw,7rem)] font-bold uppercase leading-[0.95] tracking-tighter text-lime-300">
              Start finding.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-md text-lg leading-relaxed text-zinc-400">
              Folders made you the librarian. Trove fires the librarian and
              keeps the library.
            </p>
          </Reveal>
        </section>

        {/* CTA */}
        <section
          id="join"
          className="flex flex-col items-center border-t border-white/10 px-6 py-32 text-center"
        >
          <Reveal>
            <h2 className="max-w-3xl font-grotesk text-4xl font-bold uppercase tracking-tight md:text-6xl">
              Your next idea is already in your notes.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <MagneticLink
              href="#"
              className="mt-12 inline-block rounded-full bg-lime-300 px-12 py-6 font-grotesk text-lg font-bold uppercase tracking-wide text-zinc-950"
            >
              Start free
            </MagneticLink>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="flex flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-zinc-500 md:flex-row md:px-12">
          <span className="font-grotesk font-bold uppercase text-zinc-200">
            Trove
          </span>
          <div className="flex gap-8">
            <a href="#loop" className="transition-colors hover:text-zinc-200">
              The loop
            </a>
            <a href="#" className="transition-colors hover:text-zinc-200">
              Privacy
            </a>
          </div>
          <span>© 2026 Trove</span>
        </div>
      </footer>
    </div>
  );
}
