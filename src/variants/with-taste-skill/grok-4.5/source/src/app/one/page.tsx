import Image from "next/image";
import {
  ArrowRightIcon,
  BrainIcon,
  LinkSimpleIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../../components/Reveal";
import { TRUSTED_LOGOS, logoUrl } from "../../lib/logos";

export default function OnePage() {
  return (
    <div className="min-h-[100dvh] bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <header className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-8">
        <a href="#top" className="font-[family-name:var(--font-outfit)] text-lg font-semibold tracking-tight">
          Lumen
        </a>
        <nav className="hidden items-center gap-8 text-sm text-zinc-600 md:flex dark:text-zinc-400">
          <a href="#product" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Product
          </a>
          <a href="#how" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            How it works
          </a>
          <a href="#pricing" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Pricing
          </a>
        </nav>
        <a
          href="#start"
          className="rounded-lg bg-emerald-700 px-3.5 py-2 text-sm font-medium text-white transition-transform active:scale-[0.98] hover:bg-emerald-800"
        >
          Start free
        </a>
      </header>

      <main id="top">
        {/* Hero - asymmetric split */}
        <section className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-[1400px] items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-2 md:gap-12 md:px-8 md:pb-20 md:pt-16">
          <div>
            <h1 className="font-[family-name:var(--font-outfit)] text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl lg:text-6xl dark:text-zinc-50">
              Your notes, finally connected.
            </h1>
            <p className="mt-5 max-w-[42ch] text-base leading-relaxed text-zinc-600 md:text-lg dark:text-zinc-400">
              Lumen turns fleeting thoughts into a living second brain you can search, link, and trust.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                id="start"
                href="#start"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 text-sm font-medium text-white transition-transform active:scale-[0.98] hover:bg-emerald-800"
              >
                Start free
                <ArrowRightIcon weight="bold" className="h-4 w-4" />
              </a>
              <a
                href="#product"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
              >
                See product
              </a>
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800">
            <Image
              src="/variants/with-taste-skill/grok-4.5/iterations/one/hero-one.png"
              alt="Lumen knowledge workspace on a desk"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* Logo wall */}
        <section className="border-y border-zinc-200 bg-white py-10 dark:border-zinc-800 dark:bg-zinc-900/40">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <p className="mb-6 text-center text-sm text-zinc-500">Used by teams at</p>
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
              {TRUSTED_LOGOS.map((logo) => (
                <li key={logo.slug}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logoUrl(logo.slug, "71717a")}
                    alt={logo.name}
                    width={88}
                    height={24}
                    className="h-6 w-auto opacity-70 dark:invert dark:opacity-60"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Product features - asymmetric, not 3 equal cards */}
        <section id="product" className="mx-auto max-w-[1400px] px-5 py-24 md:px-8">
          <Reveal>
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight md:text-4xl">
              Capture once. Find forever.
            </h2>
            <p className="mt-3 max-w-[55ch] text-zinc-600 dark:text-zinc-400">
              Write freely. Lumen builds the graph underneath so related ideas surface when you need them.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-12">
            <Reveal className="md:col-span-7" delay={0.05}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800">
                <Image
                  src="/variants/with-taste-skill/grok-4.5/iterations/one/feature-links.png"
                  alt="Linked note cards connected by emerald thread"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 58vw"
                />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-outfit)] text-xl font-semibold">
                Bidirectional links
              </h3>
              <p className="mt-2 max-w-[50ch] text-zinc-600 dark:text-zinc-400">
                Every mention becomes a two-way door. Jump from a meeting note to the project that spawned it.
              </p>
            </Reveal>

            <div className="flex flex-col gap-6 md:col-span-5">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                  <MagnifyingGlassIcon weight="duotone" className="h-7 w-7 text-emerald-700" />
                  <h3 className="mt-4 font-[family-name:var(--font-outfit)] text-lg font-semibold">
                    Instant recall
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Search meaning, not just keywords. Ask for last quarter&apos;s pricing notes and get them.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="rounded-2xl bg-emerald-700 p-6 text-white">
                  <BrainIcon weight="duotone" className="h-7 w-7" />
                  <h3 className="mt-4 font-[family-name:var(--font-outfit)] text-lg font-semibold">
                    Graph view
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-emerald-50/90">
                    See clusters form as you write. Spot orphan ideas and pull them into the map.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* How it works - vertical steps, different layout family */}
        <section
          id="how"
          className="border-y border-zinc-200 bg-zinc-100/80 py-24 dark:border-zinc-800 dark:bg-zinc-900/50"
        >
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <Reveal>
              <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight md:text-4xl">
                Three moves. That&apos;s the whole product.
              </h2>
            </Reveal>
            <ol className="mt-14 grid gap-10 md:grid-cols-3">
              {[
                {
                  icon: LinkSimpleIcon,
                  title: "Write",
                  body: "Dump thoughts in plain text. No folders required on day one.",
                },
                {
                  icon: BrainIcon,
                  title: "Link",
                  body: "Type [[ to connect notes. Lumen suggests neighbors as you go.",
                },
                {
                  icon: MagnifyingGlassIcon,
                  title: "Recall",
                  body: "Ask in natural language. Get the note, the context, and the trail.",
                },
              ].map((step, i) => (
                <Reveal key={step.title} delay={i * 0.08}>
                  <li className="border-t border-zinc-300 pt-6 dark:border-zinc-700">
                    <step.icon weight="duotone" className="h-6 w-6 text-emerald-700 dark:text-emerald-400" />
                    <h3 className="mt-4 font-[family-name:var(--font-outfit)] text-xl font-semibold">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {step.body}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Quote */}
        <section className="mx-auto max-w-[900px] px-5 py-24 text-center md:px-8">
          <Reveal>
            <blockquote className="font-[family-name:var(--font-outfit)] text-2xl font-medium tracking-tight text-zinc-900 md:text-3xl dark:text-zinc-50">
              &ldquo;I stopped losing research mid-sprint. Lumen is the only notes app that feels like memory.&rdquo;
            </blockquote>
            <p className="mt-6 text-sm text-zinc-500">
              Mira Okonkwo - Staff engineer, Relay Labs
            </p>
          </Reveal>
        </section>

        {/* Pricing teaser */}
        <section id="pricing" className="border-t border-zinc-200 bg-white py-24 dark:border-zinc-800 dark:bg-zinc-900/30">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <Reveal>
              <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight md:text-4xl">
                Free to think. Paid to scale.
              </h2>
              <p className="mt-3 max-w-[50ch] text-zinc-600 dark:text-zinc-400">
                Personal graphs stay free. Teams unlock shared spaces and admin controls.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              <Reveal delay={0.05}>
                <div className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-700">
                  <p className="font-[family-name:var(--font-outfit)] text-lg font-semibold">Personal</p>
                  <p className="mt-2 font-[family-name:var(--font-outfit)] text-4xl font-semibold tracking-tight">
                    $0
                  </p>
                  <p className="mt-2 text-sm text-zinc-500">Unlimited notes, local sync, graph view</p>
                  <a
                    href="#start"
                    className="mt-8 inline-flex rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-medium hover:bg-zinc-50 dark:border-zinc-600 dark:hover:bg-zinc-800"
                  >
                    Start free
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="rounded-2xl bg-emerald-700 p-8 text-white">
                  <p className="font-[family-name:var(--font-outfit)] text-lg font-semibold">Team</p>
                  <p className="mt-2 font-[family-name:var(--font-outfit)] text-4xl font-semibold tracking-tight">
                    $12
                    <span className="text-base font-normal text-emerald-100"> /seat mo</span>
                  </p>
                  <p className="mt-2 text-sm text-emerald-50/90">Shared graphs, permissions, SSO</p>
                  <a
                    href="#start"
                    className="mt-8 inline-flex rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-emerald-900 transition-transform active:scale-[0.98] hover:bg-emerald-50"
                  >
                    Start free
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-8">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-emerald-800/20 bg-emerald-700 px-8 py-12 text-white md:flex-row md:items-center md:px-12">
              <div>
                <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight">
                  Build your second brain today.
                </h2>
                <p className="mt-2 max-w-[40ch] text-emerald-50/90">
                  Import Markdown in minutes. Keep writing the way you already do.
                </p>
              </div>
              <a
                href="#start"
                className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-emerald-900 transition-transform active:scale-[0.98] hover:bg-emerald-50"
              >
                Start free
                <ArrowRightIcon weight="bold" className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-10 dark:border-zinc-800">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-5 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="font-[family-name:var(--font-outfit)] font-semibold text-zinc-800 dark:text-zinc-200">
            Lumen
          </p>
          <p>© 2026 Lumen Labs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
