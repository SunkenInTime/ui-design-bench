import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Lightning,
  Link as LinkIcon,
  SunHorizon,
  MagnifyingGlass,
  StarFour,
  Asterisk,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/variants/with-taste-skill/kimi-k3/source/components/Reveal";

export const metadata: Metadata = {
  title: "Marginalia - notes that talk to each other",
  description:
    "Iteration 3: playful and loud. Capture fast, link everything, and watch old ideas introduce themselves to new ones.",
};

const accent = "#d6491f";

const features = [
  {
    icon: Lightning,
    title: "Quick capture",
    body: "One hotkey opens a blank page from anywhere. Thoughts land before they fade.",
    tint: true,
  },
  {
    icon: LinkIcon,
    title: "Two-way links",
    body: "Mention a note and it mentions you back. Ideas meet without you playing matchmaker.",
    tint: false,
  },
  {
    icon: SunHorizon,
    title: "Morning resurfacing",
    body: "Five old notes with your coffee. Half of them will surprise you.",
    tint: true,
  },
  {
    icon: MagnifyingGlass,
    title: "Search that reads",
    body: "Ask for “that thing about urban bees” and find it. Semantic search runs on your device.",
    tint: false,
  },
];

const testimonials = [
  {
    quote:
      "My thesis notes stopped being a graveyard. They argue with each other now, and I just referee.",
    name: "Priya Raghavan",
    role: "PhD candidate, Utrecht",
    rotate: "-rotate-2",
  },
  {
    quote:
      "I design games out of fragments I wrote at 2am. This is the first app that kept the fragments alive.",
    name: "Marco Bellini",
    role: "Independent game designer",
    rotate: "rotate-1 md:mt-10",
  },
  {
    quote:
      "Every newsletter issue starts as ten resurfaced notes. My readers think I plan ahead. I do not.",
    name: "June Okafor",
    role: "Writer, The Long Read Letter",
    rotate: "-rotate-1 md:mt-4",
  },
];

const marqueeWords = ["capture", "link", "resurface", "remember"];

export default function IterationThree() {
  return (
    <main className="min-h-[100dvh] overflow-x-clip">
      {/* Nav */}
      <header>
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="#" className="text-xl font-bold tracking-tight">
            marginalia<span style={{ color: accent }}>*</span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#features" className="transition hover:text-[#d6491f]">
              Features
            </a>
            <a href="#stories" className="transition hover:text-[#d6491f]">
              Stories
            </a>
            <a href="#start" className="transition hover:text-[#d6491f]">
              Sign in
            </a>
          </nav>
          <a
            href="#start"
            className="rounded-full bg-[#191813] px-5 py-2 text-sm font-medium text-[#fbfaf6] transition hover:bg-[#35352c] active:translate-y-px"
          >
            Try free
          </a>
        </div>
      </header>

      {/* Hero: big type left, tilted collage right */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 py-14 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-12 lg:py-0">
        <div className="lg:col-span-7">
          <Reveal>
            <h1 className="max-w-[18ch] text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
              Notes that{" "}
              <span className="-rotate-1 inline-block bg-[#ffd9c4] px-2">
                talk
              </span>{" "}
              to each other.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[44ch] text-base leading-relaxed text-[#5a584e] md:text-lg">
              Capture fast, link everything, and watch old ideas introduce
              themselves to new ones.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#start"
                className="rounded-full bg-[#191813] px-7 py-3 text-sm font-medium text-[#fbfaf6] transition hover:bg-[#35352c] active:translate-y-px"
              >
                Try free
              </a>
              <a
                href="#features"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold transition hover:text-[#d6491f]"
              >
                See the features
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-5">
          <Reveal delay={0.15}>
            <div className="relative mx-auto max-w-md">
              <Image
                src="https://picsum.photos/id/20/620/720"
                alt="An overhead mess of notebooks, pens, and papers"
                width={620}
                height={720}
                priority
                className="w-3/4 -rotate-3 rounded-2xl border border-[#191813]/10 object-cover shadow-[0_20px_60px_rgba(25,24,19,0.16)]"
              />
              <Image
                src="https://picsum.photos/id/225/520/480"
                alt="A coffee pot and yellow flowers on a table"
                width={520}
                height={480}
                className="absolute -bottom-10 right-0 w-3/5 rotate-2 rounded-2xl border-4 border-[#fbfaf6] object-cover shadow-[0_20px_60px_rgba(25,24,19,0.18)]"
              />
              <div
                aria-hidden
                className="absolute -left-4 -top-6 flex h-20 w-20 rotate-12 items-center justify-center rounded-full text-[#fbfaf6]"
                style={{ backgroundColor: accent }}
              >
                <StarFour size={30} weight="fill" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Single marquee */}
      <section aria-hidden className="-rotate-1 border-y-2 border-[#191813] py-3" style={{ backgroundColor: accent }}>
        <div className="animate-marquee flex w-max items-center motion-reduce:animate-none">
          {[...Array(4)].flatMap((_, r) =>
            marqueeWords.map((w) => (
              <span
                key={`${r}-${w}`}
                className="flex items-center gap-6 pr-6 text-lg font-bold uppercase tracking-[0.08em] text-[#fbfaf6]"
              >
                {w}
                <Asterisk size={18} weight="bold" />
              </span>
            ))
          )}
        </div>
      </section>

      {/* Feature wall: offset two-column, mixed tints + photo */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-28">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: accent }}>
            What it does
          </p>
          <h2 className="mt-4 max-w-[20ch] text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
            Small habits, compounding hard
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            {[features[0], features[2]].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <div
                  className={`rounded-2xl p-8 ${
                    f.tint
                      ? "bg-[#ffe8db]"
                      : "border border-[#191813]/10 bg-white"
                  }`}
                >
                  <f.icon size={26} weight="duotone" color={accent} />
                  <h3 className="mt-5 text-xl font-bold tracking-tight">
                    {f.title}
                  </h3>
                  <p className="mt-2 max-w-[40ch] text-sm leading-relaxed text-[#5a584e]">
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.12}>
              <Image
                src="https://picsum.photos/id/163/900/640"
                alt="A colorful desk with a keyboard and monitor from above"
                width={900}
                height={640}
                className="aspect-[9/6.4] w-full rounded-2xl object-cover"
              />
            </Reveal>
          </div>
          <div className="flex flex-col gap-6 md:mt-20">
            {[features[1], features[3]].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <div
                  className={`rounded-2xl p-8 ${
                    f.tint
                      ? "bg-[#ffe8db]"
                      : "border border-[#191813]/10 bg-white"
                  }`}
                >
                  <f.icon size={26} weight="duotone" color={accent} />
                  <h3 className="mt-5 text-xl font-bold tracking-tight">
                    {f.title}
                  </h3>
                  <p className="mt-2 max-w-[40ch] text-sm leading-relaxed text-[#5a584e]">
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.12}>
              <div className="rounded-2xl bg-[#191813] p-8 text-[#fbfaf6]">
                <p className="text-lg font-bold leading-snug tracking-tight">
                  And when you leave, everything leaves with you. Plain
                  Markdown, one folder, no ransom.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials: tilted cards */}
      <section id="stories" className="mx-auto max-w-6xl px-6 pb-28">
        <Reveal>
          <h2 className="max-w-[22ch] text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
            People keep their weirdest ideas here
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <figure
                className={`${t.rotate} rounded-2xl border border-[#191813]/10 bg-white p-7 shadow-[0_16px_40px_rgba(25,24,19,0.10)] transition-transform hover:rotate-0`}
              >
                <blockquote className="text-sm leading-relaxed text-[#3d3c34]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-[#5a584e]">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section id="start" className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <div
            className="rounded-2xl px-8 py-20 text-center text-[#fbfaf6] md:py-28"
            style={{ backgroundColor: accent }}
          >
            <h2 className="mx-auto max-w-[16ch] text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Start your second brain
            </h2>
            <p className="mx-auto mt-5 max-w-[42ch] text-base leading-relaxed text-[#ffe3d3]">
              Free up to a thousand notes. Your weirdest ideas are welcome.
            </p>
            <a
              href="#"
              className="mt-10 inline-block rounded-full bg-[#fbfaf6] px-8 py-3.5 text-sm font-bold text-[#191813] transition hover:bg-white active:translate-y-px"
            >
              Try free
            </a>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#191813]/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xl font-bold tracking-tight">
              marginalia<span style={{ color: accent }}>*</span>
            </p>
            <p className="mt-2 max-w-[36ch] text-xs leading-relaxed text-[#5a584e]">
              A second brain with a sense of humor.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 text-sm sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8a887c]">
                Product
              </p>
              <a href="#features" className="transition hover:text-[#d6491f]">Features</a>
              <a href="#stories" className="transition hover:text-[#d6491f]">Stories</a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8a887c]">
                Company
              </p>
              <a href="#" className="transition hover:text-[#d6491f]">About</a>
              <a href="#" className="transition hover:text-[#d6491f]">Blog</a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8a887c]">
                Legal
              </p>
              <a href="#" className="transition hover:text-[#d6491f]">Privacy</a>
              <a href="#" className="transition hover:text-[#d6491f]">Terms</a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#191813]/10">
          <p className="mx-auto max-w-6xl px-6 py-5 text-xs text-[#8a887c]">
            © 2026 Marginalia
          </p>
        </div>
      </footer>
    </main>
  );
}
