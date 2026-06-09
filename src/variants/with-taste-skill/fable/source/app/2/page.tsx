import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "../components/reveal";

export const metadata: Metadata = {
  title: "Trove. A commonplace book that keeps itself.",
};

/*
  Iteration 2: "Commonplace"
  Dials: VARIANCE 6 / MOTION 4 / DENSITY 3
  Theme lock: light paper (stone-50). Accent lock: deep wine, drawn from
  the book cover in the desk photograph.
  Serif justification: publication / manuscript aesthetic for a product
  about writing and reading. EB Garamond, display only.
  Radius system: all-sharp (radius 0), print-like.
*/

const WINE = "text-[#6d2233]";

const PRINCIPLES = [
  {
    title: "Capture without ceremony",
    body: "No folders to choose, no tags to invent, no template to fill in. Write the thought down and move on. Filing is the software's job.",
  },
  {
    title: "Connection over collection",
    body: "A note gains its value next to its neighbors. Trove links related ideas the moment they are written, the way a good margin note points across a library.",
  },
  {
    title: "Owned like paper",
    body: "Your notes are plain Markdown files on your own device. Readable in fifty years, with or without us. Sync, when you want it, is end-to-end encrypted.",
  },
];

export default function CommonplacePage() {
  return (
    <div className="min-h-dvh bg-stone-50 font-sans text-stone-900">
      {/* Nav */}
      <header className="border-b border-stone-200">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="font-serif text-2xl tracking-tight">
            Trove
          </a>
          <nav className="flex items-center gap-8 text-sm text-stone-600">
            <a
              href="#manifesto"
              className="hidden transition-colors hover:text-stone-900 sm:block"
            >
              Manifesto
            </a>
            <a
              href="#principles"
              className="hidden transition-colors hover:text-stone-900 sm:block"
            >
              Principles
            </a>
            <a
              href="#"
              className="bg-stone-900 px-4 py-1.5 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-700 active:scale-[0.98]"
            >
              Start free
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Manifesto hero: centered, the message is the design */}
        <section className="mx-auto max-w-4xl px-6 pb-20 pt-24 text-center">
          <Reveal>
            <h1 className="font-serif text-5xl leading-[1.08] tracking-tight md:text-7xl">
              A commonplace book that{" "}
              <em className="italic">keeps</em> itself.
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-stone-600">
              Trove holds every note, quote, and half-formed thought, then
              connects them so nothing you write is ever lost.
            </p>
            <div className="mt-9 flex items-center justify-center gap-6">
              <a
                href="#"
                className="bg-stone-900 px-7 py-3 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-700 active:scale-[0.98]"
              >
                Start free
              </a>
              <a
                href="#manifesto"
                className={`text-sm font-medium underline underline-offset-4 transition-colors hover:text-stone-600 ${WINE}`}
              >
                Read the manifesto
              </a>
            </div>
          </Reveal>
        </section>

        {/* Full-bleed photograph */}
        <Reveal>
          <section className="relative aspect-[21/9] min-h-[320px] w-full">
            <Image
              src="/variants/with-taste-skill/fable/gen/trove-desk.png"
              alt="A writing desk with an open notebook, index cards, and a fountain pen"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </section>
        </Reveal>

        {/* Principles: staggered editorial rows */}
        <section id="principles" className="mx-auto max-w-6xl px-6 py-28">
          <Reveal>
            <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
              Three principles
            </h2>
          </Reveal>
          <div className="mt-16 space-y-20">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={0.05}>
                <div
                  className={`grid gap-6 md:grid-cols-12 ${
                    i === 1 ? "md:text-right" : ""
                  }`}
                >
                  <div
                    className={`md:col-span-7 ${
                      i === 1 ? "md:col-start-6" : i === 2 ? "md:col-start-3" : ""
                    }`}
                  >
                    <h3 className="font-serif text-3xl leading-snug md:text-4xl">
                      {p.title}
                    </h3>
                    <p
                      className={`mt-4 max-w-[58ch] leading-relaxed text-stone-600 ${
                        i === 1 ? "md:ml-auto" : ""
                      }`}
                    >
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Split: catalog photograph + recall copy */}
        <section className="border-y border-stone-200 bg-stone-100/60">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/5] max-h-[560px] overflow-hidden">
                <Image
                  src="/variants/with-taste-skill/fable/gen/trove-catalog.png"
                  alt="A library card catalog with one drawer pulled open"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="max-w-md font-serif text-4xl leading-tight tracking-tight md:text-5xl">
                The card catalog, without the cards
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-stone-600">
                Scholars once kept commonplace books and card indexes because
                memory is unreliable. Trove keeps the index for you. Ask for a
                half-remembered idea in your own words, and the right note
                returns, alongside everything written near it.
              </p>
              <p className="mt-4 max-w-md leading-relaxed text-stone-600">
                Old notes resurface on their own when they become relevant to
                what you are writing today.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Pull quote */}
        <section className="mx-auto max-w-3xl px-6 py-28 text-center">
          <Reveal>
            <blockquote
              className={`font-serif text-3xl italic leading-[1.25] md:text-4xl ${WINE} pb-1`}
            >
              “Trove gives me what a shelf of notebooks never could: the page
              I need, at the moment I need it.”
            </blockquote>
            <p className="mt-7 text-sm text-stone-500">
              Tomás Ferreira, doctoral researcher at TU Delft
            </p>
          </Reveal>
        </section>

        {/* Manifesto prose */}
        <section id="manifesto" className="border-t border-stone-200">
          <div className="mx-auto max-w-2xl px-6 py-24">
            <Reveal>
              <h2 className="font-serif text-4xl tracking-tight">
                Why a second brain
              </h2>
              <div className="mt-8 space-y-5 leading-[1.8] text-stone-700">
                <p className="first-letter:float-left first-letter:pr-3 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.8]">
                  For five centuries, serious readers kept commonplace books:
                  bound volumes of quotations, observations, and arguments
                  worth returning to. The practice worked because it separated
                  capturing from organizing. You wrote things down as they
                  came, and the book held them until they were needed.
                </p>
                <p>
                  Modern note apps broke that bargain. They made you the
                  librarian: choose a folder, pick the tags, maintain the
                  hierarchy. The filing became the work, and the work made
                  people quit.
                </p>
                <p>
                  Trove restores the old bargain with new machinery. You
                  write. The software reads what you wrote, ties it to what
                  you have written before, and brings it back when your
                  current work calls for it. The book keeps itself.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="border-t border-stone-200 bg-stone-900 text-stone-50">
          <div className="mx-auto max-w-4xl px-6 py-24 text-center">
            <Reveal>
              <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
                Begin your book.
              </h2>
              <p className="mx-auto mt-5 max-w-md leading-relaxed text-stone-400">
                Free on one device, with your notes in plain Markdown from the
                first line.
              </p>
              <a
                href="#"
                className="mt-9 inline-block bg-stone-50 px-8 py-3.5 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-200 active:scale-[0.98]"
              >
                Start free
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-stone-500 md:flex-row">
          <span className="font-serif text-lg text-stone-800">Trove</span>
          <div className="flex gap-8">
            <a href="#manifesto" className="transition-colors hover:text-stone-800">
              Manifesto
            </a>
            <a href="#principles" className="transition-colors hover:text-stone-800">
              Principles
            </a>
            <a href="#" className="transition-colors hover:text-stone-800">
              Privacy
            </a>
          </div>
          <span>© 2026 Trove</span>
        </div>
      </footer>
    </div>
  );
}
