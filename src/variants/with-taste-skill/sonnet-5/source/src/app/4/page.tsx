import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarBlank,
  Export,
  LinkSimple,
  MagnifyingGlass,
  NotePencil,
} from "@phosphor-icons/react/dist/ssr";
import { LoamMark } from "../../components/logo";
import { Reveal } from "../../components/reveal";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Loam - Everyday Brain",
  description:
    "Jot it down, and Loam quietly weaves it into everything else you've written.",
};

const FEATURES = [
  {
    icon: NotePencil,
    title: "Capture in seconds",
    body: "A quick-add button on your phone and a clipper for your browser. Nothing gets lost on the way.",
    tint: true,
  },
  {
    icon: CalendarBlank,
    title: "Daily notes",
    body: "A fresh page every morning, already linked to yesterday.",
  },
  {
    icon: LinkSimple,
    title: "Quiet connections",
    body: "Loam links related thoughts on its own, no tidying required.",
  },
  {
    icon: MagnifyingGlass,
    title: "Find anything",
    body: "Search by what you meant, not just what you typed.",
  },
  {
    icon: Export,
    title: "Always yours",
    body: "Export every note as plain text whenever you like.",
    tint: true,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I finally have one place for everything, and it doesn\u2019t feel like homework.",
    name: "Dara Whitfield",
    role: "Freelance writer",
    seed: "dara-whitfield-loam",
  },
  {
    quote:
      "Loam is the only habit I\u2019ve kept every single day this year.",
    name: "Iris Tanaka",
    role: "Graduate student",
    seed: "iris-tanaka-loam",
  },
  {
    quote: "It remembers the small stuff so my brain doesn\u2019t have to.",
    name: "Mateo Solis",
    role: "Product designer",
    seed: "mateo-solis-loam",
  },
];

export default function Page() {
  return (
    <div
      className={`${manrope.variable} min-h-[100dvh] bg-[#F6F6F4] font-[family-name:var(--font-manrope)] text-slate-800`}
    >
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-slate-900/[0.06] bg-[#F6F6F4]/90 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/4" className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D9603B] text-white">
              <LoamMark className="h-4 w-4" />
            </span>
            <span className="text-[15px] font-bold tracking-tight text-slate-900">
              Loam
            </span>
          </Link>
          <ul className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <li>
              <a href="#features" className="hover:text-slate-900">
                Features
              </a>
            </li>
            <li>
              <a href="#ritual" className="hover:text-slate-900">
                Daily ritual
              </a>
            </li>
            <li>
              <a href="#stories" className="hover:text-slate-900">
                Stories
              </a>
            </li>
          </ul>
          <Link
            href="#start"
            className="rounded-full bg-[#D9603B] px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Start free
          </Link>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-14 md:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <Reveal>
              <h1 className="max-w-md text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-[3.4rem]">
                A home for every idea.
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-600">
                Jot it down, and Loam quietly weaves it into everything
                else you&rsquo;ve written.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="#start"
                  className="inline-flex items-center gap-2 rounded-full bg-[#D9603B] px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Start free
                  <ArrowRight size={16} weight="bold" />
                </Link>
                <a
                  href="#ritual"
                  className="rounded-full px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-900/5"
                >
                  See a daily note
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-[2rem] border border-slate-900/[0.06] shadow-xl shadow-slate-900/5">
                <Image
                  src="/variants/with-taste-skill/sonnet-5/images/iteration-4-roots.png"
                  alt="Warm abstract artwork of overlapping organic shapes in terracotta and slate, like roots taking hold"
                  width={1024}
                  height={683}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Bento features */}
        <section id="features" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Reveal>
            <h2 className="max-w-md text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
              Built for the way you actually think
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {FEATURES.map((feature, i) => (
              <Reveal
                key={feature.title}
                delay={i * 0.06}
                className={feature.tint && i === 0 ? "md:col-span-2" : ""}
              >
                <div
                  className={`h-full rounded-[1.75rem] border border-slate-900/[0.06] p-7 ${
                    feature.tint
                      ? "bg-gradient-to-br from-[#D9603B]/10 via-white to-white"
                      : "bg-white"
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#D9603B]/10 text-[#D9603B]">
                    <feature.icon size={20} weight="bold" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
                    {feature.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Signature: daily note preview */}
        <section id="ritual" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal delay={0.1} className="lg:order-2">
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                Five minutes a day, and Loam remembers the rest
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">
                No streaks to protect, no empty page anxiety. Just a short
                prompt, a place to land, and a thread back to everything
                you&rsquo;ve noticed before.
              </p>
            </Reveal>
            <Reveal className="lg:order-1">
              <div className="rounded-[1.75rem] border border-slate-900/[0.06] bg-white p-6 shadow-lg shadow-slate-900/5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900">
                    Wednesday, June 30
                  </p>
                  <CalendarBlank
                    size={18}
                    weight="bold"
                    className="text-[#D9603B]"
                  />
                </div>
                <p className="mt-4 text-sm font-medium text-slate-500">
                  What&rsquo;s one thing you noticed today?
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  The morning light through the kitchen window made me
                  want to finally write down that essay idea from last
                  week.
                </p>
                <div className="mt-5 flex gap-2">
                  {["gratitude", "writing", "mornings"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Testimonials */}
        <section id="stories" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
              People who kept the habit
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial, i) => (
              <Reveal key={testimonial.name} delay={i * 0.08}>
                <div className="h-full rounded-[1.75rem] border border-slate-900/[0.06] bg-white p-6 shadow-md shadow-slate-900/5">
                  <p className="text-sm leading-relaxed text-slate-700">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <Image
                      src={`https://picsum.photos/seed/${testimonial.seed}/72/72`}
                      alt=""
                      width={36}
                      height={36}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-slate-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="start" className="px-6 py-16">
          <Reveal>
            <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#D9603B] px-8 py-14 text-center md:py-16">
              <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                Give your thoughts somewhere to go
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-white/85">
                Free for your first 200 notes. No credit card required.
              </p>
              <Link
                href="#start"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#D9603B] transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Start free
                <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900/[0.06] px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D9603B]/10 text-[#D9603B]">
              <LoamMark className="h-3.5 w-3.5" />
            </span>
            <span className="text-sm text-slate-500">
              Loam, a second brain for your notes.
            </span>
          </div>
          <ul className="flex flex-wrap gap-6 text-sm text-slate-500">
            <li>
              <a href="#features" className="hover:text-slate-800">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-800">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-800">
                Terms
              </a>
            </li>
          </ul>
          <p className="text-sm text-slate-400">© 2026 Loam</p>
        </div>
      </footer>
    </div>
  );
}
