import type { Metadata } from "next";
import Image from "next/image";
import {
  Lightning,
  ShareNetwork,
  MagnifyingGlass,
  LockKey,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../components/reveal";

export const metadata: Metadata = {
  title: "Trove. A second brain that organizes itself.",
};

/*
  Iteration 1: "Quiet"
  Dials: VARIANCE 5 / MOTION 4 / DENSITY 3
  Theme lock: dark (zinc-950). Accent lock: emerald.
  Radius system: interactive elements are pills, surfaces are 12px (rounded-xl).
*/

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
];

const LOGOS = [
  { slug: "vercel", name: "Vercel" },
  { slug: "linear", name: "Linear" },
  { slug: "figma", name: "Figma" },
  { slug: "stripe", name: "Stripe" },
  { slug: "raycast", name: "Raycast" },
  { slug: "arc", name: "Arc" },
];

export default function QuietPage() {
  return (
    <div className="min-h-dvh bg-zinc-950 font-sans text-zinc-100">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="text-[15px] font-semibold tracking-tight">
            trove
          </a>
          <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-zinc-100"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#pricing"
            className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200 active:scale-[0.98]"
          >
            Start free
          </a>
        </div>
      </header>

      <main>
        {/* Hero: asymmetric split */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-20 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h1 className="max-w-xl text-5xl font-semibold leading-[1.05] tracking-tighter lg:text-6xl">
              A second brain that organizes itself.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-400">
              Trove captures notes from anywhere, links them automatically,
              and resurfaces the right idea exactly when you need it.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition-all hover:bg-zinc-200 active:scale-[0.98]"
              >
                Start free
              </a>
              <a
                href="#workflow"
                className="group flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
              >
                See how it works
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-[16/11] overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/variants/with-taste-skill/fable/gen/trove-constellation.png"
                alt="A constellation of linked notes rendered as glowing nodes"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </section>

        {/* Logo wall, under the hero */}
        <section className="border-y border-white/5 py-10">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-center text-sm text-zinc-500">
              Used by researchers and engineers at
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {LOGOS.map((logo) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={logo.slug}
                  src={`https://cdn.simpleicons.org/${logo.slug}/71717b`}
                  alt={logo.name}
                  className="h-6 w-6 opacity-80"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features: asymmetric grid, 3 items in 3 cells */}
        <section id="features" className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <h2 className="max-w-lg text-3xl font-semibold tracking-tight lg:text-4xl">
              Notes that file themselves
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            <Reveal className="lg:col-span-3" delay={0.05}>
              <div className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/variants/with-taste-skill/fable/gen/trove-cards-dark.png"
                    alt="A stack of dark glass cards edge-lit in emerald"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-start gap-4 p-7">
                  <ShareNetwork
                    size={22}
                    className="mt-0.5 shrink-0 text-emerald-400"
                  />
                  <div>
                    <h3 className="font-medium">Automatic linking</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                      Every note is connected to related notes the moment you
                      save it. No folders to choose, no tags to maintain.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="flex flex-col gap-4 lg:col-span-2">
              <Reveal delay={0.1} className="flex-1">
                <div className="flex h-full flex-col justify-between rounded-xl border border-white/10 bg-zinc-900/60 p-7">
                  <Lightning size={22} className="text-emerald-400" />
                  <div className="mt-10">
                    <h3 className="font-medium">Instant capture</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                      One keystroke from any app. The thought lands in your
                      trove before you lose it.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.15} className="flex-1">
                <div className="flex h-full flex-col justify-between rounded-xl border border-emerald-400/20 bg-gradient-to-b from-emerald-400/10 to-zinc-900/60 p-7">
                  <MagnifyingGlass size={22} className="text-emerald-400" />
                  <div className="mt-10">
                    <h3 className="font-medium">Semantic recall</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                      Search by meaning, not keywords. Half-remembered ideas
                      come back whole.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Workflow: sticky heading + stacked rows */}
        <section id="workflow" className="border-t border-white/5">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2">
            <div>
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <h2 className="max-w-sm text-3xl font-semibold tracking-tight lg:text-4xl">
                    What using Trove feels like
                  </h2>
                  <p className="mt-4 max-w-sm text-zinc-400">
                    There is no filing step. The work you used to do to stay
                    organized simply disappears.
                  </p>
                </Reveal>
              </div>
            </div>
            <div className="divide-y divide-white/5">
              {[
                {
                  title: "Write it down",
                  body: "Capture from the keyboard, a browser highlight, or a voice memo. Trove accepts thoughts in whatever shape they arrive.",
                },
                {
                  title: "Trove files it",
                  body: "The note is parsed, linked to its neighbors, and placed in your graph. You never see an inbox to triage.",
                },
                {
                  title: "It comes back",
                  body: "Start a draft about pricing, and your old pricing notes appear beside the cursor. Relevance does the retrieval.",
                },
              ].map((step, i) => (
                <Reveal key={step.title} delay={i * 0.08}>
                  <div className="py-8 first:pt-0 last:pb-0">
                    <h3 className="text-lg font-medium">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-zinc-400">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="border-t border-white/5 py-24">
          <Reveal className="mx-auto max-w-3xl px-6 text-center">
            <blockquote className="text-2xl font-medium leading-snug tracking-tight lg:text-3xl">
              “I stopped deciding where notes should live. I write things
              down, and Trove hands them back at the right moment.”
            </blockquote>
            <p className="mt-6 text-sm text-zinc-500">
              Priya Raghunathan, Research Lead at the Calder Institute
            </p>
          </Reveal>
        </section>

        {/* Pricing */}
        <section id="pricing" className="border-t border-white/5">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight lg:text-4xl">
                Pricing
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              <Reveal delay={0.05}>
                <div className="flex h-full flex-col rounded-xl border border-white/10 p-8">
                  <h3 className="font-medium">Personal</h3>
                  <p className="mt-4 text-4xl font-semibold tracking-tight">
                    $0
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">
                    Unlimited notes on one device. Plain Markdown files,
                    exportable any time.
                  </p>
                  <a
                    href="#"
                    className="mt-8 rounded-full border border-white/15 px-6 py-3 text-center text-sm font-medium transition-colors hover:border-white/30"
                  >
                    Start free
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="flex h-full flex-col rounded-xl border border-emerald-400/30 bg-emerald-400/[0.04] p-8">
                  <h3 className="font-medium text-emerald-300">Pro</h3>
                  <p className="mt-4 text-4xl font-semibold tracking-tight">
                    $8
                    <span className="text-base font-normal text-zinc-400">
                      {" "}
                      / month
                    </span>
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">
                    Encrypted sync across devices, full version history, and
                    shared troves for small teams.
                  </p>
                  <a
                    href="#"
                    className="mt-8 rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200 active:scale-[0.98]"
                  >
                    Upgrade to Pro
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="border-t border-white/5">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-center">
            <Reveal>
              <div className="flex items-start gap-4">
                <LockKey size={22} className="mt-1 text-emerald-400" />
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Start keeping everything.
                  </h2>
                  <p className="mt-2 max-w-md text-zinc-400">
                    Local-first, end-to-end encrypted, and yours in plain
                    Markdown forever.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href="#pricing"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200 active:scale-[0.98]"
              >
                Start free
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-zinc-500 md:flex-row">
          <span className="font-medium text-zinc-300">trove</span>
          <div className="flex gap-8">
            <a href="#features" className="transition-colors hover:text-zinc-200">
              Features
            </a>
            <a href="#pricing" className="transition-colors hover:text-zinc-200">
              Pricing
            </a>
            <a href="#" className="transition-colors hover:text-zinc-200">
              Privacy
            </a>
          </div>
          <span>© 2026 Trove</span>
        </div>
      </footer>
    </div>
  );
}
