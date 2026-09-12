import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarBlank,
  LinkSimple,
  MagnifyingGlass,
  NotePencil,
} from "@phosphor-icons/react/dist/ssr";
import { LoamMark } from "../../components/logo";
import { Reveal } from "../../components/reveal";
import { MagneticButton } from "./client";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Loam - Quiet Depth",
  description:
    "Loam keeps every note connected and within reach, long after you've forgotten writing it.",
};

const FEATURES = [
  {
    icon: NotePencil,
    title: "Capture anywhere",
    body: "Write a thought from your phone, browser, or inbox in seconds. Loam is already there.",
  },
  {
    icon: LinkSimple,
    title: "Automatic connections",
    body: "Loam links related notes the moment you write them. No filing required.",
  },
  {
    icon: MagnifyingGlass,
    title: "Search that understands you",
    body: "Ask in plain language. Loam finds the note that already has your answer.",
  },
  {
    icon: CalendarBlank,
    title: "Daily notes",
    body: "One page for today, quietly linked to every page that came before it.",
  },
];

const RELATED = [
  { title: "Notes on deep work", meta: "Opened 2 days ago" },
  { title: "The cost of switching tasks", meta: "3 backlinks" },
  { title: "Weekly review, March 14", meta: "Linked from today" },
];

export default function Page() {
  return (
    <div
      className={`${outfit.variable} min-h-[100dvh] bg-zinc-950 font-[family-name:var(--font-outfit)] text-zinc-100`}
    >
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/2" className="flex items-center gap-2">
            <LoamMark className="h-6 w-6 text-sky-300" />
            <span className="text-[15px] font-medium tracking-tight text-white">
              Loam
            </span>
          </Link>
          <ul className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <li>
              <a href="#inside" className="hover:text-white">
                Inside Loam
              </a>
            </li>
            <li>
              <a href="#connections" className="hover:text-white">
                Connections
              </a>
            </li>
            <li>
              <a href="#stories" className="hover:text-white">
                Stories
              </a>
            </li>
          </ul>
          <Link
            href="#start"
            className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            Start free
          </Link>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative mx-auto max-w-7xl overflow-hidden px-6 pt-16 md:pt-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-3xl"
          />
          <div className="relative grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
            <Reveal>
              <h1 className="max-w-md text-4xl font-medium leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
                Where your best ideas live.
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-zinc-400">
                Loam keeps every note connected and within reach, long after
                you&rsquo;ve forgotten writing it.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <MagneticButton
                  href="#start"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition-transform"
                >
                  Start free
                  <ArrowRight size={16} weight="bold" />
                </MagneticButton>
                <a
                  href="#inside"
                  className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5"
                >
                  Look inside
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <Image
                  src="/variants/with-taste-skill/sonnet-5/images/iteration-2-glass.png"
                  alt="Translucent glass spheres connected by glowing threads, representing linked notes"
                  width={1024}
                  height={683}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Proof line */}
        <section className="mx-auto max-w-3xl px-6 py-16 text-center">
          <Reveal>
            <p className="text-sm leading-relaxed text-zinc-500">
              Used daily by writers, researchers, and product teams who
              think for a living.
            </p>
          </Reveal>
        </section>

        {/* Bento glass grid */}
        <section id="inside" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Reveal>
            <h2 className="max-w-md text-2xl font-medium tracking-tight text-white md:text-3xl">
              A calmer place to think
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {FEATURES.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 0.06}>
                <div
                  className={`h-full rounded-2xl border p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors ${
                    i % 2 === 0
                      ? "border-sky-400/15 bg-gradient-to-br from-sky-500/10 via-white/[0.03] to-white/[0.03] hover:from-sky-500/15"
                      : "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sky-300">
                    <feature.icon size={20} weight="light" />
                  </div>
                  <h3 className="mt-5 text-base font-medium text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {feature.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Signature: smart connections */}
        <section id="connections" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
                Related notes surface as you write
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-400">
                Loam reads what you&rsquo;re writing and quietly pulls up
                the notes that matter, the ones you wrote last week and the
                ones you forgot about entirely.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                  Related to this note
                </p>
                <ul className="mt-4 divide-y divide-white/10">
                  {RELATED.map((item) => (
                    <li
                      key={item.title}
                      className="flex items-center justify-between gap-3 py-3.5"
                    >
                      <div className="flex items-center gap-3">
                        <LinkSimple
                          size={15}
                          weight="light"
                          className="text-sky-300"
                        />
                        <span className="text-sm text-zinc-200">
                          {item.title}
                        </span>
                      </div>
                      <span className="shrink-0 text-xs text-zinc-500">
                        {item.meta}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Testimonials */}
        <section id="stories" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                <p className="text-lg leading-snug text-zinc-100">
                  &ldquo;Loam feels less like an app and more like a place
                  I keep coming back to.&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src="https://picsum.photos/seed/marcus-oyelaran-loam/80/80"
                    alt=""
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-white">
                      Marcus Oyelaran
                    </p>
                    <p className="text-xs text-zinc-500">
                      Independent researcher
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                <p className="text-lg leading-snug text-zinc-100">
                  &ldquo;I forgot most of what I wrote this year. Loam
                  didn&rsquo;t.&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src="https://picsum.photos/seed/elin-vasara-loam/80/80"
                    alt=""
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-white">
                      Elin Vasara
                    </p>
                    <p className="text-xs text-zinc-500">Design lead</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section id="start" className="px-6 py-20">
          <Reveal>
            <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-14 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:py-16">
              <h2 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
                Give your thinking a quieter home
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-zinc-400">
                Free for your first 200 notes. No credit card required.
              </p>
              <div className="mt-7 flex justify-center">
                <MagneticButton
                  href="#start"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950"
                >
                  Start free
                  <ArrowRight size={16} weight="bold" />
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <LoamMark className="h-5 w-5 text-zinc-500" />
            <span className="text-sm text-zinc-500">
              Loam, a second brain for your notes.
            </span>
          </div>
          <ul className="flex flex-wrap gap-6 text-sm text-zinc-500">
            <li>
              <a href="#inside" className="hover:text-zinc-200">
                Inside Loam
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-200">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-200">
                Terms
              </a>
            </li>
          </ul>
          <p className="text-sm text-zinc-600">© 2026 Loam</p>
        </div>
      </footer>
    </div>
  );
}
