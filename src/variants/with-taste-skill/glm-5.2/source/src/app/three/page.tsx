import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "../../components/icons";
import { Reveal } from "../../components/reveal";
import { Logo } from "../../components/logo";

export const metadata: Metadata = {
  title: "Marginalia · Cobalt Editorial (Iteration 3)",
  description:
    "A quiet place to collect what you read and think. Editorial design direction for Marginalia.",
};

const TOC = [
  { title: "On capture, and letting go of folders", page: "02", href: "#method" },
  { title: "The case for links over labels", page: "04", href: "#method" },
  { title: "Recall, or how memory becomes useful", page: "06", href: "#quote" },
  { title: "A colophon on plain text", page: "08", href: "#cta" },
];

const METHOD = [
  {
    title: "Capture without deciding",
    body: "A note lands in one inbox. You do not name a folder, choose a tag, or commit to a structure. Decisions can come later, or never.",
  },
  {
    title: "Connect without filing",
    body: "Links form from the words you already wrote. A note about habits finds the note about decisions without you placing it there.",
  },
  {
    title: "Recall without remembering",
    body: "Ask a question in the language you think in. Marginalia gathers the relevant pages and shows the thread between them.",
  },
];

export default function ThreePage() {
  return (
    <div className="min-h-[100dvh] bg-[#f5f6f8] text-zinc-900 antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-zinc-300/70 bg-[#f5f6f8]/85 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
          <Link href="/three" aria-label="Marginalia home">
            <Logo className="text-zinc-900" />
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/three#index" className="text-sm text-zinc-600 transition-colors hover:text-zinc-900">
              Index
            </Link>
            <Link href="/three#method" className="text-sm text-zinc-600 transition-colors hover:text-zinc-900">
              The method
            </Link>
            <Link href="/three#cta" className="text-sm text-zinc-600 transition-colors hover:text-zinc-900">
              Subscribe
            </Link>
          </div>
          <Link
            href="/three#cta"
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-blue-600 px-4 text-sm font-medium text-white transition-all hover:bg-blue-700 active:translate-y-px"
          >
            Start reading
            <ArrowRight size={15} weight="bold" />
          </Link>
        </nav>
      </header>

      <main>
        {/* Hero - editorial split: type left, tall grayscale portrait right */}
        <section className="mx-auto grid max-w-5xl grid-cols-1 items-end gap-10 px-5 pt-20 pb-20 md:grid-cols-12 md:gap-12 md:pt-24 md:pb-28">
          <div className="md:col-span-7">
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-blue-700">
              Issue 01 · A field guide to the second brain
            </p>
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight text-zinc-900 sm:text-6xl md:text-7xl">
              Think on paper.
              <br />
              Find it years later.
            </h1>
            <p className="mt-7 max-w-[48ch] text-lg leading-relaxed text-zinc-600">
              Marginalia is a quiet place to collect what you read and think,
              then surface it the moment a question forms.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/three#cta"
                className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-blue-600 px-6 text-[15px] font-medium text-white transition-all hover:bg-blue-700 active:translate-y-px"
              >
                Start reading
                <ArrowRight size={16} weight="bold" />
              </Link>
              <Link
                href="/three#index"
                className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full border border-zinc-400 px-6 text-[15px] font-medium text-zinc-800 transition-all hover:bg-white active:translate-y-px"
              >
                Browse the index
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden border border-zinc-300 bg-zinc-200">
              <Image
                src="https://picsum.photos/seed/marginalia-editorial-portrait/800/1000?grayscale"
                alt="A person reading beside a tall stack of books"
                width={800}
                height={1000}
                preload
                sizes="(max-width: 768px) 100vw, 40vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* In this issue - editorial TOC */}
        <section id="index" className="border-y border-zinc-300/70 bg-white/40 py-20 md:py-24">
          <div className="mx-auto max-w-5xl px-5">
            <Reveal className="mb-10">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                In this issue
              </h2>
            </Reveal>
            <ul className="border-t border-zinc-300/70">
              {TOC.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.05}>
                  <li>
                    <Link
                      href={item.href}
                      className="group flex items-baseline justify-between gap-6 border-b border-zinc-300/70 py-5 transition-colors hover:bg-white/60"
                    >
                      <span className="flex items-baseline gap-5">
                        <span className="font-mono text-sm tabular-nums text-blue-700">
                          {item.page}
                        </span>
                        <span className="text-lg text-zinc-800 transition-colors group-hover:text-zinc-950 sm:text-xl">
                          {item.title}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={18}
                        weight="regular"
                        className="shrink-0 text-zinc-400 transition-all group-hover:translate-x-0.5 group-hover:text-blue-700"
                      />
                    </Link>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* The method - editorial feature row with top rules */}
        <section id="method" className="mx-auto max-w-5xl px-5 py-24 md:py-32">
          <Reveal className="mb-14 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
              Three moves, no system to maintain.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-px md:grid-cols-3">
            {METHOD.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.08}>
                <article className="border-t border-zinc-400 pt-6 md:pr-8">
                  <span className="font-mono text-sm tabular-nums text-blue-700">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-zinc-900">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-zinc-600">
                    {m.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Full-bleed image break */}
        <section className="relative">
          <div className="relative h-[60vh] min-h-[360px] w-full overflow-hidden border-y border-zinc-300 bg-zinc-200">
            <Image
              src="https://picsum.photos/seed/marginalia-editorial-bleed/2400/1000?grayscale"
              alt="An open notebook spread with handwriting and a pen"
              width={2400}
              height={1000}
              sizes="100vw"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent" />
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 text-center text-balance text-lg italic text-white sm:text-xl">
              The second brain is not a vault. It is a working surface.
            </p>
          </div>
        </section>

        {/* Pull quote */}
        <section id="quote" className="mx-auto max-w-3xl px-5 py-28 text-center md:py-36">
          <Reveal>
            <blockquote className="text-balance text-3xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-4xl md:text-[2.6rem]">
              &ldquo;I stopped searching for the note I knew I had. Marginalia
              hands me the five I forgot I needed.&rdquo;
            </blockquote>
            <figcaption className="mt-8 text-sm text-zinc-500">
              <span className="font-medium text-zinc-800">Henrik Vass</span>
              {" · "}
              Editor, quarterly review
            </figcaption>
          </Reveal>
        </section>

        {/* CTA - quiet, signed */}
        <section id="cta" className="mx-auto max-w-5xl px-5 pb-28">
          <div className="border-t border-zinc-400 pt-12 text-center">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
              Begin your own field notes.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-zinc-600">
              Free for personal use. No folder structure required.
            </p>
            <Link
              href="/three#"
              className="mt-8 inline-flex h-12 items-center justify-center gap-1.5 rounded-full bg-blue-600 px-7 text-[15px] font-medium text-white transition-all hover:bg-blue-700 active:translate-y-px"
            >
              Start reading
              <ArrowRight size={16} weight="bold" />
            </Link>
            <p className="mt-10 font-mono text-xs text-zinc-400">
              Marginalia · published on plain text
            </p>
          </div>
        </section>
      </main>

      {/* Footer - colophon */}
      <footer className="border-t border-zinc-300/70">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 px-5 py-12 sm:flex-row sm:items-center">
          <div>
            <Logo className="text-zinc-900" />
            <p className="mt-3 max-w-xs text-sm text-zinc-500">
              A second brain for what you read, think, and write.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-600">
            <Link href="/three#index" className="hover:text-zinc-900">Index</Link>
            <Link href="/three#method" className="hover:text-zinc-900">The method</Link>
            <Link href="/three#cta" className="hover:text-zinc-900">Subscribe</Link>
            <Link href="/" className="hover:text-zinc-900">All iterations</Link>
          </div>
        </div>
        <div className="mx-auto max-w-5xl px-5 pb-10 font-mono text-xs text-zinc-400">
          Set in Geist · A design concept
        </div>
      </footer>
    </div>
  );
}
