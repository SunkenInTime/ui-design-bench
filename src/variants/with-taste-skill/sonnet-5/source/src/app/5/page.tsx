import type { Metadata } from "next";
import { JetBrains_Mono, Sora } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  FlowArrow,
  LinkSimple,
  MagnifyingGlass,
  NotePencil,
} from "@phosphor-icons/react/dist/ssr";
import { LoamMark } from "../../components/logo";
import { Reveal } from "../../components/reveal";
import { LiveGraph } from "./client";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Loam - The Graph",
  description:
    "Loam maps every note as a node and every link as a path back to your thinking.",
};

const CARDS = [
  {
    icon: NotePencil,
    title: "Capture",
    body: "Drop a thought in from your phone, browser, or terminal. It lands as a node, instantly.",
  },
  {
    icon: LinkSimple,
    title: "Link",
    body: "Reference one note inside another and the edge is drawn for you, in both directions.",
  },
  {
    icon: MagnifyingGlass,
    title: "Recall",
    body: "Query the graph in plain language. Loam walks the edges to find your answer.",
  },
  {
    icon: FlowArrow,
    title: "Extend",
    body: "Pull the graph into your own tools through a local-first API and plain markdown files.",
  },
];

export default function Page() {
  return (
    <div
      className={`${sora.variable} ${jetbrainsMono.variable} min-h-[100dvh] bg-black font-[family-name:var(--font-sora)] text-zinc-200`}
    >
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/5" className="flex items-center gap-2">
            <LoamMark className="h-5 w-5 text-[#C99A4B]" />
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-medium tracking-tight text-zinc-100">
              loam_
            </span>
          </Link>
          <ul className="hidden items-center gap-8 font-[family-name:var(--font-jetbrains-mono)] text-[11px] uppercase tracking-[0.14em] text-zinc-500 md:flex">
            <li>
              <a href="#graph" className="hover:text-zinc-200">
                Graph
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-zinc-200">
                Features
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-zinc-200">
                Reviews
              </a>
            </li>
          </ul>
          <Link
            href="#start"
            className="rounded-md bg-[#C99A4B] px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-[#dbae64]"
          >
            Start free
          </Link>
        </nav>
      </header>

      <main>
        {/* Hero with full-bleed graph background */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0">
            <Image
              src="/variants/with-taste-skill/sonnet-5/images/iteration-5-constellation.png"
              alt="A constellation of glowing amber nodes connected by thin lines on a black background"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/10" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
            <Reveal>
              <h1 className="max-w-xl text-5xl font-semibold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
                Map everything you know.
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-zinc-400">
                Loam maps every note as a node and every link as a path
                back to your thinking.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="#start"
                  className="inline-flex items-center gap-2 rounded-md bg-[#C99A4B] px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#dbae64]"
                >
                  Start free
                  <ArrowRight size={16} weight="bold" />
                </Link>
                <a
                  href="#graph"
                  className="rounded-md border border-white/15 px-5 py-3 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5"
                >
                  See the graph
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Feature cards */}
        <section id="features" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Reveal>
            <h2 className="max-w-md text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Four primitives. One graph.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
            {CARDS.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.06}>
                <div className="h-full bg-black p-7">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-[#C99A4B]">
                    <card.icon size={18} weight="regular" />
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-[0.12em] text-zinc-400">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                    {card.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Signature: live graph panel */}
        <section id="graph" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Every note is a node you can stand on
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-400">
                Open today&rsquo;s note and Loam shows you the whole
                neighborhood: what led here, what this connects to, and
                what you might want to read next.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="border border-white/10 bg-white/[0.02] p-5">
                <div className="flex items-center gap-2 border border-white/10 bg-black px-3 py-2">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#C99A4B]">
                    loam
                  </span>
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-zinc-500">
                    ~ search notes
                  </span>
                </div>
                <div className="mt-4 aspect-[400/260] w-full">
                  <LiveGraph />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Testimonial */}
        <section id="reviews" className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <Reveal>
            <blockquote className="border-l-2 border-[#C99A4B] pl-6">
              <p className="text-xl leading-snug text-zinc-100 md:text-2xl">
                &ldquo;I have tried every note app with a graph view. Loam
                is the first one I actually keep open all day.&rdquo;
              </p>
              <footer className="mt-4 font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-[0.1em] text-zinc-500">
                Renata Kowalczyk, Backend engineer
              </footer>
            </blockquote>
          </Reveal>
        </section>

        {/* CTA */}
        <section id="start" className="px-6 py-20">
          <Reveal>
            <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 border border-white/10 px-8 py-12 sm:flex-row sm:items-center md:py-14">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  Start mapping your own graph
                </h2>
                <p className="mt-2 text-sm text-zinc-500">
                  Free for your first 200 notes. No credit card required.
                </p>
              </div>
              <Link
                href="#start"
                className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#C99A4B] px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#dbae64]"
              >
                Start free
                <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-[0.1em] text-zinc-500 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <LoamMark className="h-4 w-4 text-zinc-500" />
            <span>loam, a second brain for your notes</span>
          </div>
          <ul className="flex flex-wrap gap-6">
            <li>
              <a href="#features" className="hover:text-zinc-300">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-300">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-300">
                Terms
              </a>
            </li>
          </ul>
          <p>© 2026 loam</p>
        </div>
      </footer>
    </div>
  );
}
