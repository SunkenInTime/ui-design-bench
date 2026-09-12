import Image from "next/image";
import {
  ArrowRightIcon,
  CloudArrowUpIcon,
  LockSimpleIcon,
  SparkleIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../../components/Reveal";
import { TRUSTED_LOGOS, logoUrl } from "../../lib/logos";

export default function ThreePage() {
  return (
    <div className="min-h-[100dvh] bg-[#e8eaee] text-[#12141a]">
      <header className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 md:px-8">
        <a
          href="#top"
          className="font-[family-name:var(--font-outfit)] text-lg font-semibold tracking-[0.02em]"
        >
          LUMEN
        </a>
        <nav className="hidden items-center gap-9 text-sm text-[#5c6370] md:flex">
          <a href="#craft" className="hover:text-[#12141a]">
            Craft
          </a>
          <a href="#sync" className="hover:text-[#12141a]">
            Sync
          </a>
          <a href="#plans" className="hover:text-[#12141a]">
            Plans
          </a>
        </nav>
        <a
          href="#start"
          className="rounded-full bg-[#1a4fd6] px-4 py-2 text-sm font-medium text-white transition-transform active:scale-[0.98] hover:bg-[#1643b5]"
        >
          Start free
        </a>
      </header>

      <main id="top">
        {/* Full-bleed hero with brand-forward type */}
        <section className="relative min-h-[calc(100dvh-72px)] overflow-hidden">
          <Image
            src="/variants/with-taste-skill/grok-4.5/iterations/three/hero-three.png"
            alt="Cold luxury desk with a premium notebook"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#e8eaee]/95 via-[#e8eaee]/70 to-transparent" />
          <div className="relative mx-auto flex min-h-[calc(100dvh-72px)] max-w-[1400px] items-center px-5 py-16 md:px-8">
            <div className="max-w-xl">
              <p className="font-[family-name:var(--font-outfit)] text-5xl font-semibold tracking-tight text-[#12141a] md:text-6xl lg:text-7xl">
                Lumen
              </p>
              <h1 className="mt-4 font-[family-name:var(--font-outfit)] text-3xl font-medium tracking-tight text-[#12141a] md:text-4xl">
                Quiet memory for a loud day.
              </h1>
              <p className="mt-5 max-w-[38ch] text-base leading-relaxed text-[#4a5160]">
                A second brain with chrome restraint. Capture fast, retrieve with calm precision.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  id="start"
                  href="#start"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1a4fd6] px-6 py-3 text-sm font-medium text-white transition-transform active:scale-[0.98] hover:bg-[#1643b5]"
                >
                  Start free
                  <ArrowRightIcon weight="bold" className="h-4 w-4" />
                </a>
                <a
                  href="#craft"
                  className="inline-flex items-center rounded-full border border-[#12141a]/20 bg-white/70 px-6 py-3 text-sm font-medium backdrop-blur-sm hover:bg-white"
                >
                  Explore craft
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/60 py-12 backdrop-blur-sm">
          <ul className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-12 gap-y-6 px-5 md:px-8">
            {TRUSTED_LOGOS.map((logo) => (
              <li key={logo.slug}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logoUrl(logo.slug, "5c6370")}
                  alt={logo.name}
                  width={88}
                  height={24}
                  className="h-5 w-auto opacity-70"
                />
              </li>
            ))}
          </ul>
        </section>

        {/* Craft - horizontal scroll-snap pills for capabilities */}
        <section id="craft" className="mx-auto max-w-[1400px] px-5 py-24 md:px-8">
          <Reveal>
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight md:text-4xl">
              Built for daily return
            </h2>
            <p className="mt-3 max-w-[48ch] text-[#5c6370]">
              Soft surfaces, sharp retrieval. Every interaction is tuned for speed without noise.
            </p>
          </Reveal>
          <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {[
              {
                title: "Ink capture",
                body: "Type or dictate. Notes land in your graph within a breath.",
              },
              {
                title: "Smart links",
                body: "Lumen suggests connections from context, not just titles.",
              },
              {
                title: "Focus mode",
                body: "One note, full width, zero chrome until you need it.",
              },
              {
                title: "Daily digest",
                body: "A quiet morning brief of what you touched yesterday.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05} className="snap-start shrink-0">
                <article className="flex h-full w-[280px] flex-col justify-between rounded-3xl border border-[#c5cad3] bg-white p-6 md:w-[300px]">
                  <div>
                    <h3 className="font-[family-name:var(--font-outfit)] text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#5c6370]">{item.body}</p>
                  </div>
                  <SparkleIcon weight="duotone" className="mt-8 h-6 w-6 text-[#1a4fd6]" />
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Sync - image + feature list, different layout */}
        <section id="sync" className="border-y border-[#c5cad3] bg-white/70 py-24">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:grid-cols-12 md:px-8">
            <Reveal className="md:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
                <Image
                  src="/variants/with-taste-skill/grok-4.5/iterations/three/feature-capture.png"
                  alt="Writing beside a tablet showing Lumen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 58vw"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col justify-center md:col-span-5">
              <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight md:text-4xl">
                Sync that stays out of the way
              </h2>
              <ul className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <CloudArrowUpIcon weight="duotone" className="h-6 w-6 shrink-0 text-[#1a4fd6]" />
                  <div>
                    <p className="font-medium">End-to-end encrypted</p>
                    <p className="mt-1 text-sm text-[#5c6370]">
                      Your vault is readable only by your devices.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <LockSimpleIcon weight="duotone" className="h-6 w-6 shrink-0 text-[#1a4fd6]" />
                  <div>
                    <p className="font-medium">Offline first</p>
                    <p className="mt-1 text-sm text-[#5c6370]">
                      Write on a plane. Merge when you land.
                    </p>
                  </div>
                </li>
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Plans */}
        <section id="plans" className="mx-auto max-w-[1400px] px-5 py-24 md:px-8">
          <Reveal>
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight md:text-4xl">
              Simple plans
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { name: "Solo", price: "$0", detail: "Personal vault, mobile + desktop" },
              { name: "Pro", price: "$9", detail: "AI recall, version history, priority sync" },
              { name: "Family", price: "$16", detail: "Up to 5 vaults, shared spaces" },
            ].map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.06}>
                <div
                  className={`rounded-3xl p-8 ${
                    plan.name === "Pro"
                      ? "bg-[#1a4fd6] text-white"
                      : "border border-[#c5cad3] bg-white"
                  }`}
                >
                  <p className="text-sm font-medium opacity-80">{plan.name}</p>
                  <p className="mt-2 font-[family-name:var(--font-outfit)] text-4xl font-semibold tracking-tight">
                    {plan.price}
                    {plan.price !== "$0" && (
                      <span className="text-sm font-normal opacity-70"> /mo</span>
                    )}
                  </p>
                  <p
                    className={`mt-3 text-sm ${
                      plan.name === "Pro" ? "text-blue-100" : "text-[#5c6370]"
                    }`}
                  >
                    {plan.detail}
                  </p>
                  <a
                    href="#start"
                    className={`mt-8 inline-flex rounded-full px-4 py-2.5 text-sm font-medium transition-transform active:scale-[0.98] ${
                      plan.name === "Pro"
                        ? "bg-white text-[#1a4fd6] hover:bg-blue-50"
                        : "bg-[#12141a] text-white hover:bg-[#2a2e3a]"
                    }`}
                  >
                    Start free
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="border-t border-[#c5cad3] px-5 py-24 md:px-8">
          <Reveal>
            <div className="mx-auto max-w-[700px] text-center">
              <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight md:text-4xl">
                Make room for what matters.
              </h2>
              <p className="mx-auto mt-4 max-w-[40ch] text-[#5c6370]">
                Lumen holds the rest so you can stay in the work.
              </p>
              <a
                href="#start"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1a4fd6] px-6 py-3 text-sm font-medium text-white transition-transform active:scale-[0.98] hover:bg-[#1643b5]"
              >
                Start free
                <ArrowRightIcon weight="bold" className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-[#c5cad3] py-10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 text-sm text-[#5c6370] md:flex-row md:items-center md:justify-between md:px-8">
          <p className="font-[family-name:var(--font-outfit)] font-semibold tracking-[0.08em] text-[#12141a]">
            LUMEN
          </p>
          <p>© 2026 Lumen Labs</p>
        </div>
      </footer>
    </div>
  );
}
