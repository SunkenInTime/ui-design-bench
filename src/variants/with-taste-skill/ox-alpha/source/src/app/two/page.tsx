import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EB_Garamond } from "next/font/google";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/variants/with-taste-skill/ox-alpha/source/src/components/reveal";

export const metadata: Metadata = {
  title: "Understory | A commonplace book for modern life",
  description:
    "Understory turns scattered notes into one connected manuscript. Write it down once, find it forever.",
};

const garamond = EB_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
});

const SIGNUP = "Begin your first note";

export default function TwoPage() {
  return (
    <div
      className={`${garamond.variable} min-h-[100dvh] bg-stone-50 font-sans text-stone-900 selection:bg-green-800/15`}
    >
      <header className="sticky top-0 z-30 border-b border-stone-200 bg-stone-50/85 backdrop-blur-sm">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link
            href="/two"
            className="font-serif-display text-xl tracking-tight"
          >
            Understory
          </Link>
          <div className="hidden items-center gap-8 text-sm text-stone-600 md:flex">
            <a href="#method" className="transition-colors hover:text-stone-950">
              The practice
            </a>
            <a href="#features" className="transition-colors hover:text-stone-950">
              Features
            </a>
          </div>
          <Link
            href="#cta"
            className="border border-stone-900 px-4 py-2 text-sm transition-colors hover:bg-stone-900 hover:text-stone-50 active:translate-y-px"
          >
            {SIGNUP}
          </Link>
        </nav>
      </header>

      <main>
        {/* Manifesto hero */}
        <section className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-4xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
          <Reveal>
            <h1 className="font-serif-display text-5xl leading-[1.06] tracking-tight text-balance sm:text-6xl md:text-7xl">
              Write it down <em className="italic">once.</em> Find it{" "}
              <em className="italic">forever.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-7 max-w-md text-base leading-relaxed text-stone-600">
              Understory turns scattered notes into one connected manuscript
              you will actually reread.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#cta"
                className="inline-flex h-12 items-center gap-2 bg-green-800 px-7 text-[15px] text-stone-50 transition-transform duration-200 hover:-translate-y-px active:translate-y-0 active:scale-[0.98]"
              >
                {SIGNUP}
                <ArrowRight weight="bold" className="h-4 w-4" />
              </Link>
              <a
                href="#method"
                className="inline-flex h-12 items-center px-2 text-[15px] text-stone-700 underline decoration-stone-300 underline-offset-8 transition-colors hover:decoration-stone-900"
              >
                See the practice
              </a>
            </div>
          </Reveal>
        </section>

        {/* Split feature */}
        <section id="features" className="scroll-mt-16 border-t border-stone-200">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:gap-16">
            <Reveal className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://picsum.photos/seed/understory-manuscript-desk/1400/1050"
                alt="An open notebook beside stacked books on a writing desk"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            <div>
              <Reveal>
                <h2 className="font-serif-display text-3xl leading-tight tracking-tight sm:text-4xl">
                  Today&rsquo;s page, kept the way journals always were.
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-6 max-w-md leading-relaxed text-stone-600">
                  Each morning opens a dated entry. Quotes, sketches and half
                  thoughts accumulate there, then weave backward into every
                  related note you have ever kept.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-stone-200 pt-8">
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500">
                      Entries per day
                    </dt>
                    <dd className="mt-1 font-serif-display text-3xl">Dozens</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500">
                      Kept privately
                    </dt>
                    <dd className="mt-1 font-serif-display text-3xl">Always</dd>
                  </div>
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Practice */}
        <section id="method" className="scroll-mt-16 border-t border-stone-200 bg-white">
          <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6">
            <Reveal>
              <h2 className="text-center font-serif-display text-3xl tracking-tight sm:text-4xl">
                The practice
              </h2>
            </Reveal>
            <div className="mt-16 space-y-16">
              {[
                {
                  verb: "Gather",
                  body: "Highlight a passage anywhere on the web and it arrives on today\u2019s page with its source attached. Nothing gets lost between reading and remembering.",
                },
                {
                  verb: "Gloss",
                  body: "Write a line of your own beneath each capture. Two sentences in your own words teach you whether you understood it at all.",
                },
                {
                  verb: "Weave",
                  body: "Link an entry to an older one whenever they speak to each other. Over a year these threads become a map of how your thinking actually moves.",
                },
              ].map((item, i, arr) => (
                <Reveal key={item.verb} delay={i * 0.06}>
                  <article>
                    <h3 className="text-center font-serif-display text-2xl italic tracking-tight">
                      {item.verb}
                    </h3>
                    <p className="mt-4 text-center font-serif-display text-lg leading-relaxed text-stone-600">
                      {item.body}
                    </p>
                    {i < arr.length - 1 && (
                      <p aria-hidden="true" className="mt-12 text-center tracking-[0.5em] text-stone-400">
                        ***
                      </p>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Asymmetric feature trio */}
        <section className="border-t border-stone-200">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-12 gap-y-14 px-4 py-24 sm:px-6 md:grid-cols-5">
            <Reveal className="md:col-span-2">
              <h3 className="border-t-2 border-stone-900 pt-5 font-serif-display text-2xl tracking-tight">
                Recall that reads your mind
              </h3>
              <p className="mt-4 max-w-sm leading-relaxed text-stone-600">
                Search understands paraphrase. Type &ldquo;that essay about
                walking&rdquo; and the actual note surfaces, however you titled
                it.
              </p>
            </Reveal>
            <Reveal className="md:col-span-3 md:border-l md:border-stone-200 md:pl-12" delay={0.08}>
              <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
                <div>
                  <h3 className="border-t-2 border-green-800 pt-5 font-serif-display text-xl tracking-tight">
                    Clipping, done properly
                  </h3>
                  <p className="mt-3 leading-relaxed text-stone-600">
                    Articles arrive cleaned of ads and saved as readable text,
                    source link intact.
                  </p>
                </div>
                <div>
                  <h3 className="border-t-2 border-green-800 pt-5 font-serif-display text-xl tracking-tight">
                    Handwriting, transcribed
                  </h3>
                  <p className="mt-3 leading-relaxed text-stone-600">
                    Photograph a notebook page and the ink becomes searchable
                    text alongside the scan.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Pull quote */}
        <section className="border-t border-stone-200 bg-white">
          <figure className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
            <blockquote className="font-serif-display text-3xl italic leading-snug tracking-tight text-stone-900 sm:text-4xl">
              &ldquo;It is the first app that treats my notes as a body of work
              rather than a pile of files.&rdquo;
            </blockquote>
            <figcaption className="mt-8 text-sm text-stone-500">
              Tomás Rivera
              <span className="mx-2 text-stone-300">|</span>
              Essayist and critic
            </figcaption>
          </figure>
        </section>

        {/* CTA */}
        <section id="cta" className="scroll-mt-16 border-t border-stone-200">
          <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
            <Reveal>
              <div className="border border-stone-900 p-10 text-center shadow-[0_0_0_4px_#fafaf9,0_0_0_5px_#1c1917] sm:p-14">
                <h2 className="font-serif-display text-3xl leading-tight tracking-tight sm:text-4xl">
                  Start the manuscript of your own attention.
                </h2>
                <p className="mx-auto mt-5 max-w-md leading-relaxed text-stone-600">
                  Free while your library is small. Bring notes from any other
                  app when you are ready.
                </p>
                <Link
                  href="/two"
                  className="mt-9 inline-flex h-12 items-center gap-2 bg-green-800 px-8 text-[15px] text-stone-50 transition-transform duration-200 hover:-translate-y-px active:translate-y-0 active:scale-[0.98]"
                >
                  {SIGNUP}
                  <ArrowRight weight="bold" className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
          <Link href="/two" className="font-serif-display text-lg tracking-tight">
            Understory
          </Link>
          <p className="font-mono text-xs text-stone-500">
            &copy; 2026 Understory Software Co.
          </p>
        </div>
      </footer>

    </div>
  );
}
