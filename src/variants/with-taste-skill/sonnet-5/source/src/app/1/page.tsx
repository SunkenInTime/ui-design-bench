import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarBlank,
  Devices,
  Lightning,
  LinkSimple,
  MagnifyingGlass,
  NotePencil,
} from "@phosphor-icons/react/dist/ssr";
import { LoamMark } from "../../components/logo";
import { Reveal } from "../../components/reveal";

export const metadata: Metadata = {
  title: "Loam - Calm Systems",
  description:
    "Loam connects your ideas as you write, so the right note finds you first.",
};

const RESULTS = [
  {
    title: "Reading list: systems thinking",
    snippet: "12 highlights, last touched Tuesday",
    links: 6,
  },
  {
    title: "On compounding small habits",
    snippet: "Linked from 3 daily notes",
    links: 4,
  },
  {
    title: "Q3 retro: what actually shipped",
    snippet: "Connected to 2 project notes",
    links: 2,
  },
];

const HABITS = [
  {
    icon: NotePencil,
    title: "Capture",
    body: "Jot a thought from your phone, your browser, or your inbox in under five seconds.",
  },
  {
    icon: LinkSimple,
    title: "Connect",
    body: "Loam links related notes automatically in the background. No tags or folders required.",
  },
  {
    icon: MagnifyingGlass,
    title: "Recall",
    body: "Ask a question in plain language and Loam surfaces the note that already answers it.",
  },
];

export default function Page() {
  return (
    <div className="min-h-[100dvh] bg-white text-zinc-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/85 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/1" className="flex items-center gap-2">
            <LoamMark className="h-6 w-6 text-indigo-600" />
            <span className="text-[15px] font-semibold tracking-tight text-zinc-900">
              Loam
            </span>
          </Link>
          <ul className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
            <li>
              <a href="#method" className="hover:text-zinc-900">
                Method
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-zinc-900">
                Features
              </a>
            </li>
            <li>
              <a href="#stories" className="hover:text-zinc-900">
                Stories
              </a>
            </li>
          </ul>
          <Link
            href="#start"
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-600 active:scale-[0.98]"
          >
            Start free
          </Link>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-16 md:pt-20">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
            <Reveal>
              <h1 className="max-w-lg text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-900 md:text-5xl lg:text-6xl">
                Every note, one click away.
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-zinc-600">
                Loam connects your ideas as you write, so the right note
                finds you first.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="#start"
                  className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-indigo-600 active:scale-[0.98]"
                >
                  Start free
                  <ArrowRight size={16} weight="bold" />
                </Link>
                <a
                  href="#method"
                  className="rounded-full px-5 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
                >
                  Explore the method
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-xl shadow-zinc-200/60">
                <div className="flex items-center gap-2.5 rounded-lg border border-zinc-200 bg-zinc-50 px-3.5 py-2.5">
                  <MagnifyingGlass
                    size={17}
                    weight="regular"
                    className="text-zinc-400"
                  />
                  <span className="text-sm text-zinc-400">
                    Search your second brain...
                  </span>
                </div>
                <ul className="mt-4 divide-y divide-zinc-100">
                  {RESULTS.map((result) => (
                    <li
                      key={result.title}
                      className="flex items-center justify-between gap-3 py-3"
                    >
                      <div className="flex items-start gap-3">
                        <NotePencil
                          size={16}
                          weight="regular"
                          className="mt-0.5 shrink-0 text-indigo-500"
                        />
                        <div>
                          <p className="text-sm font-medium text-zinc-800">
                            {result.title}
                          </p>
                          <p className="mt-0.5 text-xs text-zinc-500">
                            {result.snippet}
                          </p>
                        </div>
                      </div>
                      <span className="shrink-0 rounded-full bg-indigo-50 px-2 py-0.5 text-[11px] font-medium text-indigo-600">
                        {result.links} links
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Method */}
        <section id="method" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
                A simple loop, repeated
              </h2>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-zinc-600">
                Most note apps ask you to file things perfectly. Loam asks
                you to write, then quietly handles the organizing for you.
              </p>
            </Reveal>
            <div className="divide-y divide-zinc-200 lg:col-span-7">
              {HABITS.map((habit, i) => (
                <Reveal key={habit.title} delay={i * 0.08}>
                  <div className="flex items-start gap-5 py-6 first:pt-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                      <habit.icon size={20} weight="regular" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-zinc-900">
                        {habit.title}
                      </h3>
                      <p className="mt-1 max-w-md text-sm leading-relaxed text-zinc-600">
                        {habit.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Bento features */}
        <section id="features" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <Reveal>
            <h2 className="max-w-md text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
              Everything stays in reach
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Reveal className="md:col-span-2">
              <div className="h-full rounded-2xl border border-zinc-200 bg-gradient-to-br from-indigo-50 via-white to-white p-7">
                <NotePencil
                  size={24}
                  weight="regular"
                  className="text-indigo-600"
                />
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                  Capture anywhere
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-600">
                  A browser clipper, a mobile widget, and an email forward
                  address. Wherever a thought shows up, Loam is already
                  there.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="h-full rounded-2xl border border-zinc-200 bg-white p-7">
                <LinkSimple
                  size={24}
                  weight="regular"
                  className="text-indigo-600"
                />
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                  Automatic backlinks
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Mention a note inside another and the connection is kept,
                  both ways, forever.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="h-full rounded-2xl border border-zinc-200 bg-white p-7">
                <Lightning
                  size={24}
                  weight="regular"
                  className="text-indigo-600"
                />
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                  Instant search
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Full-text and semantic search across every note you have
                  ever written.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="h-full rounded-2xl border border-indigo-100 bg-indigo-50 p-7">
                <CalendarBlank
                  size={24}
                  weight="regular"
                  className="text-indigo-600"
                />
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                  Daily notes
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                  A fresh page every morning, automatically linked to
                  yesterday&rsquo;s.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="h-full rounded-2xl border border-zinc-800 bg-zinc-900 p-7">
                <Devices
                  size={24}
                  weight="regular"
                  className="text-indigo-400"
                />
                <h3 className="mt-4 text-lg font-semibold text-white">
                  Works everywhere
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  Mac, Windows, iOS, Android, and the web, fully synced
                  within seconds.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Signature: graph visual */}
        <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
                <Image
                  src="/variants/with-taste-skill/sonnet-5/images/iteration-1-graph.png"
                  alt="A diagram of small circular nodes connected by thin lines, representing linked notes"
                  width={1024}
                  height={683}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
                Watch the graph build itself
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-600">
                Every link you make becomes part of a living map. Open any
                note and Loam shows you everything that touches it, even
                connections you forgot you made.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-600">
                <li className="flex items-center gap-2.5">
                  <span className="h-1 w-1 rounded-full bg-indigo-500" />
                  Backlinks update the moment you save
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1 w-1 rounded-full bg-indigo-500" />
                  Related notes surface as you type
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1 w-1 rounded-full bg-indigo-500" />
                  Export the whole graph as plain markdown
                </li>
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Testimonial */}
        <section id="stories" className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <Reveal>
            <p className="text-2xl font-medium leading-snug tracking-tight text-zinc-900 md:text-3xl">
              &ldquo;I stopped trying to file my notes the right way. Loam
              just remembers where everything connects.&rdquo;
            </p>
            <div className="mt-7 flex items-center justify-center gap-3">
              <Image
                src="https://picsum.photos/seed/priya-nair-loam/80/80"
                alt=""
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-left">
                <p className="text-sm font-medium text-zinc-900">
                  Priya Nair
                </p>
                <p className="text-sm text-zinc-500">Product researcher</p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <section id="start" className="px-6 py-20">
          <Reveal>
            <div className="mx-auto max-w-5xl rounded-3xl bg-indigo-600 px-8 py-14 text-center md:py-16">
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Start writing in your second brain today
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-indigo-100">
                Free for your first 200 notes. No credit card required.
              </p>
              <Link
                href="#start"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-700 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Start free
                <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <LoamMark className="h-5 w-5 text-zinc-400" />
            <span className="text-sm text-zinc-500">
              Loam, a second brain for your notes.
            </span>
          </div>
          <ul className="flex flex-wrap gap-6 text-sm text-zinc-500">
            <li>
              <a href="#method" className="hover:text-zinc-800">
                Method
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-zinc-800">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-800">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-800">
                Terms
              </a>
            </li>
          </ul>
          <p className="text-sm text-zinc-400">© 2026 Loam</p>
        </div>
      </footer>
    </div>
  );
}
