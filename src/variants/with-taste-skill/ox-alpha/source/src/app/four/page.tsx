import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Outfit } from "next/font/google";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/variants/with-taste-skill/ox-alpha/source/src/components/reveal";

export const metadata: Metadata = {
  title: "Understory | A quieter place to think",
  description:
    "A calm note-taking app. Capture quickly, connect slowly, and trust everything resurfaces when needed.",
};

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const SIGNUP = "Try Understory";

const PRINCIPLES = [
  {
    title: "Local by default",
    body: "Your notes live as plain files on your own device. Sync is a choice you make, not a condition of using the app.",
  },
  {
    title: "Fast beyond habit",
    body: "It opens straight to a blank page and keeps up with your typing. Waiting for a note app is a broken promise.",
  },
  {
    title: "Yours to export",
    body: "One command writes your entire library to markdown. Leaving should never feel like moving house.",
  },
];

const FEATURES = [
  {
    title: "Morning pages, minus the paper",
    body: "A dated page opens each day and accepts whatever arrives: fragments, complaints, half-sentences. Reviewing them later is one calm scroll.",
    seed: "understory-reading-nook",
    alt: "An armchair beside a window with an open notebook",
  },
  {
    title: "Everything within reach",
    body: "Search reads meaning, not just keywords, so the note about patience surfaces while you are writing about teaching.",
    seed: "understory-notebook-tea",
    alt: "A cup of tea next to a closed notebook on a wooden table",
  },
];

export default function FourPage() {
  return (
    <div
      className={`${outfit.variable} min-h-[100dvh] bg-[#fbfbfa] font-calm text-stone-800 selection:bg-[#476c63]/15`}
    >
      <header className="sticky top-0 z-30 border-b border-stone-100 bg-[#fbfbfa]/85 backdrop-blur-sm">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/four" className="text-lg font-medium tracking-tight">
            understory
          </Link>
          <div className="hidden items-center gap-8 text-[15px] text-stone-500 md:flex">
            <a href="#principles" className="transition-colors hover:text-stone-900">
              Principles
            </a>
            <a href="#features" className="transition-colors hover:text-stone-900">
              Features
            </a>
          </div>
          <Link
            href="#cta"
            className="rounded-full border border-stone-200 px-5 py-2 text-sm text-stone-700 transition-all duration-200 hover:border-stone-300 hover:bg-white active:translate-y-px"
          >
            {SIGNUP}
          </Link>
        </nav>
      </header>

      <main>
        {/* Split hero */}
        <section className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-6xl grid-cols-1 items-center gap-14 px-4 pb-24 pt-14 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div className="max-w-xl">
            <Reveal>
              <h1 className="text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl">
                Notes that stay out of your way.
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-7 max-w-md text-lg font-light leading-relaxed text-stone-500">
                Capture the thought, then get back to your life. Understory
                keeps every note close, calm and quietly connected.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="#cta"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-[#476c63] px-7 text-[15px] text-white transition-transform duration-200 hover:-translate-y-px active:translate-y-0 active:scale-[0.98]"
                >
                  {SIGNUP}
                  <ArrowRight weight="bold" className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="https://picsum.photos/seed/understory-calm-interior/1100/1400"
              alt="A sunlit room with a wooden desk and a single chair"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </section>

        {/* Principles */}
        <section id="principles" className="scroll-mt-16 border-t border-stone-100">
          <div className="mx-auto max-w-6xl px-4 py-32 sm:px-6">
            <Reveal>
              <h2 className="max-w-md text-3xl font-light tracking-tight sm:text-4xl">
                Three promises we can keep.
              </h2>
            </Reveal>
            <div className="mt-20 space-y-20">
              {PRINCIPLES.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.05}>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-16">
                    <h3 className="text-2xl font-normal tracking-tight">
                      {p.title}
                    </h3>
                    <p className="max-w-md font-light leading-relaxed text-stone-500 md:justify-self-end">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Image band */}
        <section className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <Reveal className="relative aspect-[21/9] overflow-hidden rounded-2xl sm:aspect-[21/8]">
            <Image
              src="https://picsum.photos/seed/understory-morning-light/2400/900"
              alt="Soft morning light across an empty desk"
              fill
              sizes="(min-width: 1536px) 1400px, 100vw"
              className="object-cover"
            />
          </Reveal>
          <p className="mt-4 text-center text-sm font-light text-stone-400">
            Morning review: yesterday&rsquo;s notes, ready in one quiet scroll.
          </p>
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-16 mx-auto max-w-6xl px-4 py-32 sm:px-6">
          <div className="space-y-28">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-20"
              >
                <Reveal
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={`https://picsum.photos/seed/${f.seed}/1200/900`}
                    alt={f.alt}
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover"
                  />
                </Reveal>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <Reveal>
                    <h3 className="max-w-sm text-3xl font-light tracking-tight">
                      {f.title}
                    </h3>
                  </Reveal>
                  <Reveal delay={0.08}>
                    <p className="mt-5 max-w-md font-light leading-relaxed text-stone-500">
                      {f.body}
                    </p>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="border-t border-stone-100">
          <figure className="mx-auto max-w-2xl px-4 py-32 text-center sm:px-6">
            <blockquote className="text-2xl font-light leading-relaxed tracking-tight text-stone-700 sm:text-3xl">
              &ldquo;Ten minutes of capture, then the page goes quiet. It is
              the first tool that respects my attention.&rdquo;
            </blockquote>
            <figcaption className="mt-8 text-[15px] font-light text-stone-400">
              Aiko Tanaka
              <span className="mx-2 text-stone-300">|</span>
              Essayist, Larkspur Review
            </figcaption>
          </figure>
        </section>

        {/* CTA */}
        <section id="cta" className="scroll-mt-16 bg-stone-100/60">
          <div className="mx-auto max-w-2xl px-4 py-32 text-center sm:px-6">
            <Reveal>
              <h2 className="text-3xl font-light tracking-tight sm:text-4xl">
                Open a quieter notebook.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mx-auto mt-5 max-w-sm font-light leading-relaxed text-stone-500">
                Free while you decide. Imports from every major notes app take
                minutes.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <Link
                href="/four"
                className="mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-[#476c63] px-8 text-[15px] text-white transition-transform duration-200 hover:-translate-y-px active:translate-y-0 active:scale-[0.98]"
              >
                {SIGNUP}
                <ArrowRight weight="bold" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-stone-100/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 text-sm font-light text-stone-400 sm:flex-row sm:px-6">
          <Link href="/four" className="transition-colors hover:text-stone-600">
            understory
          </Link>
          <span>&copy; 2026 Understory Software Co.</span>
        </div>
      </footer>

    </div>
  );
}
