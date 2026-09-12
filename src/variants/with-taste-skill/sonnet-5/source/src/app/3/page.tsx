import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quotes } from "@phosphor-icons/react/dist/ssr";
import { LoamMark } from "../../components/logo";
import { Reveal } from "../../components/reveal";
import { Marquee } from "./client";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Loam - Open Notebook",
  description:
    "Loam turns scattered notes into a living map of how you actually think.",
};

const MANIFESTO = [
  "Folders worked for filing cabinets.",
  "Your mind doesn\u2019t work like a filing cabinet.",
  "Loam works like your mind does.",
];

const LIST = [
  {
    title: "Daily notes",
    body: "A new page every morning, already linked to the one before it.",
  },
  {
    title: "Instant search",
    body: "Find any note by what it means, not just what it says.",
  },
  {
    title: "Works offline",
    body: "Write on a plane. Loam syncs the moment you land.",
  },
  {
    title: "Plain markdown export",
    body: "Your notes leave exactly as easily as they arrived.",
  },
];

export default function Page() {
  return (
    <div
      className={`${spaceGrotesk.variable} min-h-[100dvh] bg-zinc-50 font-[family-name:var(--font-space-grotesk)] text-zinc-950`}
    >
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-zinc-950/10 bg-zinc-50/90 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/3" className="flex items-center gap-2">
            <LoamMark className="h-6 w-6 text-zinc-950" />
            <span className="text-base font-semibold uppercase tracking-tight text-zinc-950">
              Loam
            </span>
          </Link>
          <ul className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
            <li>
              <a href="#method" className="hover:text-zinc-950">
                Method
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-zinc-950">
                Features
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-zinc-950">
                Reviews
              </a>
            </li>
          </ul>
          <Link
            href="#start"
            className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Start free
          </Link>
        </nav>
      </header>

      <main>
        {/* Hero: editorial manifesto */}
        <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-24">
          <Reveal>
            <h1 className="max-w-3xl text-6xl font-medium leading-[1.04] tracking-tight md:text-7xl">
              Stop filing.
              <br />
              Start{" "}
              <span className="inline-block pb-1 italic leading-[1.1]">
                connecting
              </span>
              .
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-600">
              Loam turns scattered notes into a living map of how you
              actually think.
            </p>
            <Link
              href="#start"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#B5502F]"
            >
              Start free
              <ArrowRight size={16} weight="bold" />
            </Link>
          </Reveal>
        </section>

        {/* Manifesto statements */}
        <section id="method" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="space-y-3">
            {MANIFESTO.map((line, i) => (
              <Reveal key={line} delay={i * 0.12}>
                <p
                  className={`text-3xl font-medium leading-tight tracking-tight md:text-5xl ${
                    i === MANIFESTO.length - 1
                      ? "text-[#B5502F]"
                      : "text-zinc-950"
                  }`}
                >
                  {line}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Marquee rhythm break */}
        <Marquee words={["Capture", "Connect", "Recall", "Repeat"]} />

        {/* Feature showcase */}
        <section id="features" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
                Links happen while you write
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-zinc-600">
                Mention an old note inside a new one and Loam keeps the
                thread, both ways, without you lifting a finger. Open the
                old note later and the new one is waiting right there.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="overflow-hidden border border-zinc-950/10">
                <Image
                  src="/variants/with-taste-skill/sonnet-5/images/iteration-3-ink.png"
                  alt="Abstract ink brushstrokes in black and burnt terracotta, evoking thoughts taking shape"
                  width={1024}
                  height={683}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Secondary feature list */}
        <section className="mx-auto max-w-4xl px-6 py-24 md:py-32">
          <Reveal>
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
              The rest of the notebook
            </h2>
          </Reveal>
          <div className="mt-10 divide-y divide-zinc-950/10 border-t border-zinc-950/10">
            {LIST.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="flex flex-col gap-1.5 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <h3 className="text-lg font-medium tracking-tight">
                    {item.title}
                  </h3>
                  <p className="max-w-sm text-sm leading-relaxed text-zinc-600 sm:text-right">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section id="reviews" className="mx-auto max-w-4xl px-6 py-24 md:py-32">
          <Reveal>
            <Quotes
              size={40}
              weight="fill"
              className="text-[#B5502F]/30"
            />
            <p className="mt-4 text-3xl font-medium leading-tight tracking-tight md:text-4xl">
              Loam is the first note app that didn&rsquo;t make me feel
              behind.
            </p>
            <div className="mt-6">
              <p className="text-sm font-medium text-zinc-950">
                Teodora Marchetti
              </p>
              <p className="text-sm text-zinc-500">Editor</p>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <section id="start" className="bg-[#B5502F] px-6 py-20 md:py-24">
          <Reveal>
            <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
              <h2 className="max-w-md text-3xl font-medium tracking-tight text-zinc-950 md:text-4xl">
                Start your own notebook
              </h2>
              <Link
                href="#start"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Start free
                <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="select-none text-[18vw] font-semibold uppercase leading-none tracking-tighter text-zinc-950/5 sm:text-[14vw]">
            Loam
          </p>
          <div className="-mt-6 flex flex-col items-start justify-between gap-6 border-t border-zinc-950/10 pt-6 sm:flex-row sm:items-center">
            <p className="text-sm text-zinc-500">
              © 2026 Loam, a second brain for your notes.
            </p>
            <ul className="flex gap-6 text-sm text-zinc-500">
              <li>
                <a href="#" className="hover:text-zinc-950">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-950">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
