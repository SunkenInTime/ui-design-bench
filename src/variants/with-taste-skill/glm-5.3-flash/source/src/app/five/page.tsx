import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Bricolage_Grotesque } from "next/font/google";
import {
  ArrowRight,
  CloudCheck,
  Command,
  LinkBreak,
  Microphone,
  Monitor,
  MoonStars,
  Phone,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/variants/with-taste-skill/glm-5.3-flash/source/src/components/reveal";
import { SpringCard } from "./spring-card";

export const metadata: Metadata = {
  title: "Understory | Every idea, kept and connected",
  description:
    "Understory gathers highlights, notes and voice memos into a private network that surfaces exactly what you need.",
};

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const SIGNUP = "Download Understory";

const SEARCH_RESULT = {
  query: "negotiation tactics",
  matches: ["Getting to yes, annotated", "Offsite debrief", "Salary talk prep"],
};

const SHORTCUTS = [
  { keys: "\u2318 \u21E7 N", label: "New note" },
  { keys: "[ [", label: "Link note" },
  { keys: "\u2318 K", label: "Find anything" },
];

const QUOTES = [
  {
    text: "It reads like a garden, not a database. I wander in and leave with something.",
    name: "Priya Raghavan",
    role: "Product designer, Kelpworks",
    letter: "P",
  },
  {
    text: "Voice notes finally became useful. Everything is transcribed before I am back at my desk.",
    name: "Jonas Lindqvist",
    role: "Documentary producer",
    letter: "J",
  },
  {
    text: "The weekly digest resurfaced an idea I had entirely forgotten. That paid for the year.",
    name: "Camille Fournier",
    role: "Founder, Studio Terrane",
    letter: "C",
  },
];

const SHEETS = [
  {
    title: "Capture",
    body: "A quick-capture window follows you across the system. Thoughts land on today\u2019s page in under two seconds, tagged by source.",
    tint: "bg-[#1c1a17]",
  },
  {
    title: "Connect",
    body: "Type two brackets to link any past note. Understory suggests connections you would not have thought to make yourself.",
    tint: "bg-[#24211d]",
  },
  {
    title: "Reflect",
    body: "Every Sunday, a quiet digest of what you wrote, read and linked. Your thinking, reviewed like a good journal should be.",
    tint: "bg-[#2c2823]",
  },
];

function Monogram({ letter }: { letter: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-9 w-9 text-[#5b78ff]">
      <circle cx="16" cy="16" r="15" fill="#26231f" stroke="currentColor" strokeWidth="1.5" />
      <text
        x="16"
        y="21"
        textAnchor="middle"
        fontSize="14"
        fontWeight="600"
        fill="#f4f2ec"
        fontFamily="var(--font-bricolage), sans-serif"
      >
        {letter}
      </text>
    </svg>
  );
}

export default function FivePage() {
  return (
    <div
      className={`${bricolage.variable} min-h-[100dvh] bg-[#141311] font-sans text-[#f4f2ec] selection:bg-[#5b78ff]/30`}
    >
      <header className="fixed inset-x-0 top-4 z-40 flex justify-center px-4">
        <nav className="flex h-12 w-full max-w-xl items-center justify-between rounded-full border border-white/10 bg-[#141311]/80 pl-5 pr-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
          <Link href="/five" className="text-sm font-semibold tracking-tight">
            Understory
          </Link>
          <div className="hidden items-center gap-6 text-sm text-[#f4f2ec]/60 md:flex">
            <a href="#features" className="transition-colors hover:text-[#f4f2ec]">
              Features
            </a>
            <a href="#deep" className="transition-colors hover:text-[#f4f2ec]">
              Deep dive
            </a>
            <a href="#voices" className="transition-colors hover:text-[#f4f2ec]">
              Voices
            </a>
          </div>
          <Link
            href="#cta"
            className="rounded-full bg-[#5b78ff] px-4 py-2 text-sm font-medium text-[#0e1226] transition-transform duration-200 hover:-translate-y-px active:translate-y-0 active:scale-[0.97]"
          >
            {SIGNUP}
          </Link>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto grid min-h-[100dvh] max-w-[1400px] grid-cols-1 items-center gap-14 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8">
          <div className="max-w-xl">
            <Reveal>
              <h1 className="font-bloom-display text-balance text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
                Every idea you kept, one keystroke away.
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-[#f4f2ec]/60">
                Understory grows a private network of notes that gets smarter
                the more you think.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="#cta"
                  className="group inline-flex h-12 items-center gap-2 rounded-full bg-[#5b78ff] px-7 text-base font-medium text-[#0e1226] transition-transform duration-200 hover:-translate-y-px active:translate-y-0 active:scale-[0.98]"
                >
                  {SIGNUP}
                  <ArrowRight
                    weight="bold"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="relative hidden lg:block">
            <div className="relative ml-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[20px]">
              <Image
                src="https://picsum.photos/seed/understory-studio-plants/900/1120"
                alt="A plant-filled studio corner with warm evening light"
                fill
                sizes="(min-width: 1024px) 480px, 0px"
                className="object-cover"
              />
            </div>
            <SpringCard className="absolute -bottom-6 -left-2 w-64 rounded-[20px] border border-white/10 bg-[#1c1a17]/95 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.5)] backdrop-blur">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5b78ff]">
                Linked just now
              </p>
              <p className="mt-2 text-sm font-medium">Deep work rituals</p>
              <p className="mt-1 text-xs text-[#f4f2ec]/50">
                links to Attention as a budget
              </p>
            </SpringCard>
          </Reveal>
        </section>

        {/* Bento */}
        <section id="features" className="mx-auto max-w-[1400px] scroll-mt-28 px-4 pb-28 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
            <Reveal className="md:col-span-4" delay={0}>
              <SpringCard className="h-full rounded-[20px] border border-white/5 bg-[#1c1a17] p-8">
                <div className="flex h-full flex-col justify-between gap-8 md:flex-row md:items-end">
                  <div className="max-w-xs">
                    <h3 className="font-bloom-display text-2xl font-semibold tracking-tight">
                      Ask your past self
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#f4f2ec]/55">
                      Search answers with the notes you already wrote, however
                      long ago.
                    </p>
                  </div>
                  <div className="flex-1 rounded-2xl border border-white/5 bg-[#141311] p-4">
                    <p className="font-mono text-xs text-[#f4f2ec]/40">
                      &ldquo;{SEARCH_RESULT.query}&rdquo;
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {SEARCH_RESULT.matches.map((m) => (
                        <li
                          key={m}
                          className="rounded-lg px-3 py-2 text-sm text-[#f4f2ec]/85 transition-colors hover:bg-white/5"
                        >
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SpringCard>
            </Reveal>

            <Reveal className="md:col-span-2" delay={0.06}>
              <SpringCard className="relative h-full min-h-64 overflow-hidden rounded-[20px]">
                <Image
                  src="https://picsum.photos/seed/understory-desk-lamp-night/800/1000"
                  alt="A desk lamp glowing over notebooks at night"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141311]/90 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-6 right-6 text-sm font-medium">
                  Beautiful after dark
                </p>
              </SpringCard>
            </Reveal>

            <Reveal className="md:col-span-2" delay={0}>
              <SpringCard className="h-full rounded-[20px] bg-gradient-to-br from-[#5b78ff] to-[#3346b8] p-8">
                <CloudCheck weight="duotone" className="h-9 w-9 text-white/90" />
                <h3 className="mt-14 font-bloom-display text-xl font-semibold tracking-tight text-white">
                  Private by design
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  End-to-end encrypted sync. We could not read your notes if we
                  wanted to.
                </p>
              </SpringCard>
            </Reveal>

            <Reveal className="md:col-span-2" delay={0.06}>
              <SpringCard className="h-full rounded-[20px] border border-white/5 bg-[#1c1a17] p-8">
                <Microphone weight="duotone" className="h-9 w-9 text-[#5b78ff]" />
                <div className="mt-6 flex h-10 items-center gap-1.5">
                  {[3, 7, 12, 18, 24, 16, 10, 22, 28, 14, 8, 19, 25, 11, 6, 15, 21, 9].map(
                    (h, i) => (
                      <span
                        key={i}
                        style={{ height: `${h}px` }}
                        className="w-1 rounded-full bg-[#5b78ff]/70 transition-all duration-300 group-hover:bg-[#5b78ff]"
                      />
                    )
                  )}
                </div>
                <h3 className="mt-6 font-bloom-display text-xl font-semibold tracking-tight">
                  Say it out loud
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#f4f2ec]/55">
                  Voice memos arrive transcribed, timestamped and searchable.
                </p>
              </SpringCard>
            </Reveal>

            <Reveal className="md:col-span-2" delay={0.12}>
              <SpringCard className="h-full rounded-[20px] border border-white/5 bg-[#1c1a17] p-8">
                <Command weight="duotone" className="h-9 w-9 text-[#5b78ff]" />
                <ul className="mt-6 space-y-2">
                  {SHORTCUTS.map((s) => (
                    <li
                      key={s.label}
                      className="flex items-center justify-between rounded-xl bg-[#141311] px-3 py-2"
                    >
                      <span className="text-sm text-[#f4f2ec]/80">{s.label}</span>
                      <kbd className="font-mono text-[11px] text-[#f4f2ec]/40">
                        {s.keys}
                      </kbd>
                    </li>
                  ))}
                </ul>
              </SpringCard>
            </Reveal>
          </div>
        </section>

        {/* Sticky sheets */}
        <section id="deep" className="mx-auto max-w-[1400px] scroll-mt-28 px-4 pb-28 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mx-auto max-w-lg text-center font-bloom-display text-3xl font-semibold tracking-tight sm:text-4xl">
              One loop, three moves.
            </h2>
          </Reveal>
          <div className="mt-14">
            {SHEETS.map((sheet, i) => (
              <div
                key={sheet.title}
                className={`sticky mb-4 overflow-hidden rounded-[20px] border border-white/5 ${sheet.tint}`}
                style={{ top: `${88 + i * 16}px` }}
              >
                <div className="flex min-h-[300px] flex-col justify-between gap-10 p-8 sm:p-14 md:flex-row md:items-end">
                  <h3 className="font-bloom-display text-4xl font-semibold tracking-tight text-[#5b78ff] sm:text-5xl">
                    {sheet.title}
                  </h3>
                  <p className="max-w-md text-base leading-relaxed text-[#f4f2ec]/65">
                    {sheet.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Voices */}
        <section id="voices" className="scroll-mt-28 border-t border-white/5">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-x-10 gap-y-12 px-4 py-28 sm:px-6 md:grid-cols-3 lg:px-8">
            {QUOTES.map((q, i) => (
              <Reveal key={q.name} delay={i * 0.06}>
                <figure>
                  <blockquote className="text-lg leading-relaxed text-[#f4f2ec]/80">
                    &ldquo;{q.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <Monogram letter={q.letter} />
                    <span className="text-sm">
                      {q.name}
                      <span className="block text-xs text-[#f4f2ec]/45">{q.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Platforms + CTA */}
        <section id="cta" className="scroll-mt-28 px-4 pb-28 pt-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-[20px] bg-gradient-to-br from-[#5b78ff] to-[#3346b8] px-6 py-20 text-center sm:px-12">
              <h2 className="mx-auto max-w-lg font-bloom-display text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Plant your first note tonight.
              </h2>
              <p className="mx-auto mt-5 max-w-md leading-relaxed text-white/75">
                Free on every device you own. Imports from Obsidian, Notion
                and Evernote take minutes.
              </p>
              <Link
                href="/five"
                className="mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-white px-8 text-base font-medium text-[#1c1a17] transition-transform duration-200 hover:-translate-y-px active:translate-y-0 active:scale-[0.98]"
              >
                {SIGNUP}
                <ArrowRight weight="bold" className="h-4 w-4" />
              </Link>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/70">
                <span className="flex items-center gap-2">
                  <Monitor className="h-4 w-4" /> Mac &amp; Windows
                </span>
                <span className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> iOS &amp; Android
                </span>
                <span className="flex items-center gap-2">
                  <MoonStars className="h-4 w-4" /> Dark mode native
                </span>
                <span className="flex items-center gap-2">
                  <LinkBreak className="h-4 w-4" /> Works offline
                </span>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-4 py-10 text-sm text-[#f4f2ec]/45 sm:flex-row sm:px-6 lg:px-8">
          <Link href="/five" className="transition-colors hover:text-[#f4f2ec]">
            Understory
          </Link>
          <span>&copy; 2026 Understory Software Co.</span>
        </div>
      </footer>

    </div>
  );
}
