import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { HeroEnter, Reveal } from "@/variants/with-taste-skill/grok-4.6/source/components/reveal";
import { MagneticLink } from "@/variants/with-taste-skill/grok-4.6/source/components/magnetic-link";
import { MobileNav } from "@/variants/with-taste-skill/grok-4.6/source/components/mobile-nav";
import { StickyStack } from "@/variants/with-taste-skill/grok-4.6/source/components/sticky-stack";
import { WorksWith } from "@/variants/with-taste-skill/grok-4.6/source/components/works-with";
import { z } from "@/variants/with-taste-skill/grok-4.6/source/lib/z-index";

const NAV = [
  { href: "#grid", label: "Grid" },
  { href: "#stack", label: "Stack" },
  { href: "#start", label: "Start" },
];

function StackCard({
  title,
  body,
  src,
  alt,
}: {
  title: string;
  body: string;
  src: string;
  alt: string;
}) {
  return (
    <article className="mx-4 grid w-full max-w-[1400px] grid-cols-1 overflow-hidden bg-[#1a1a1a] md:grid-cols-12">
      <div className="relative min-h-[42dvh] md:col-span-7 md:min-h-[100dvh]">
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 58vw" className="object-cover" />
      </div>
      <div className="flex flex-col justify-end px-6 py-10 md:col-span-5 md:px-12 md:py-16">
        <h3 className="text-4xl font-medium tracking-tighter text-[#f4efe8] md:text-6xl">{title}</h3>
        <p className="mt-4 max-w-[36ch] text-base leading-relaxed text-[#c4bbb0]">{body}</p>
      </div>
    </article>
  );
}

export function V5Landing() {
  return (
    <div className="bg-[#f4efe8] font-space text-[#1a1a1a] dark:bg-[#141414] dark:text-[#f4efe8]">
      <div className="grain" aria-hidden="true" />
      <header
        className="sticky top-0 border-b border-[#1a1a1a]/10 bg-[#f4efe8]/88 backdrop-blur-md dark:border-white/10 dark:bg-[#141414]/88"
        style={{ zIndex: z.nav }}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 md:px-8">
          <a href="#top" className="text-[15px] font-medium tracking-tight">
            Cairn
          </a>
          <nav className="hidden items-center gap-8 text-sm text-[#5c564e] md:flex dark:text-[#b8b0a6]">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[#1a1a1a] dark:hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <a
              href="#start"
              className="inline-flex h-9 items-center rounded-full bg-[#c45b7a] px-4 text-sm font-medium text-white active:scale-[0.98]"
            >
              Start
            </a>
          </div>
          <MobileNav
            links={NAV}
            cta="Start"
            ctaHref="#start"
            buttonClass="flex h-10 w-10 items-center justify-center rounded-full"
            panelClass="fixed left-4 right-4 top-[4.5rem] border border-[#1a1a1a]/10 bg-[#f4efe8] p-4 dark:border-white/10 dark:bg-[#141414]"
            linkClass="block px-3 py-2 text-sm"
            ctaClass="mt-3 flex h-11 items-center justify-center rounded-full bg-[#c45b7a] text-sm font-medium text-white"
          />
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid min-h-[100dvh] max-w-[1400px] grid-cols-1 items-end gap-8 px-4 pb-12 pt-16 md:grid-cols-12 md:items-center md:px-8 md:pt-20 lg:pt-24">
          <HeroEnter className="md:col-span-8">
            <h1 className="text-5xl font-medium tracking-tighter md:text-7xl lg:text-[6.5rem] lg:leading-[0.92]">
              The brain
              <span className="mt-1 block italic leading-[1.1] pb-1">you build.</span>
            </h1>
            <p className="mt-6 max-w-[36ch] text-base leading-relaxed text-[#5c564e] dark:text-[#b8b0a6]">
              Capture fast, link freely, and let old notes surface when you need them.
            </p>
            <MagneticLink
              href="#start"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-[#c45b7a] px-6 text-sm font-medium text-white"
            >
              Start
              <ArrowRight size={16} weight="regular" />
            </MagneticLink>
          </HeroEnter>
          <div className="relative aspect-[3/4] overflow-hidden md:col-span-4">
            <Image
              src="/variants/with-taste-skill/grok-4.6/images/v5-portrait.png"
              alt="A person in a cream coat holding a pink notebook against a charcoal wall"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="px-4 py-10 md:px-8">
          <div className="mx-auto max-w-[1400px]">
            <WorksWith className="grid grid-cols-3 gap-8 md:grid-cols-6" />
          </div>
        </section>

        <section id="grid" className="px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-3 md:grid-cols-12">
            <Reveal className="relative min-h-[280px] md:col-span-8 md:min-h-[420px]">
              <Image
                src="/variants/with-taste-skill/grok-4.6/images/v5-hero.png"
                alt="Folded cream paper architecture with a hot-pink sheet in the folds"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal className="flex flex-col justify-between bg-[#c45b7a] p-8 text-white md:col-span-4" delay={0.05}>
              <p className="text-sm">Local files</p>
              <p className="mt-8 text-3xl font-medium tracking-tight">Your folder. Your graph.</p>
            </Reveal>
            <Reveal className="relative min-h-[240px] md:col-span-5" delay={0.04}>
              <Image
                src="/variants/with-taste-skill/grok-4.6/images/v5-sculpture.png"
                alt="Crumpled cream paper sculpture with pink light on one edge"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal className="relative min-h-[240px] md:col-span-7" delay={0.08}>
              <Image
                src="/variants/with-taste-skill/grok-4.6/images/v5-collage.png"
                alt="Overlapping cream index cards on a charcoal floor with one pink card"
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </section>

        <section id="stack" className="bg-[#1a1a1a]">
          <StickyStack
            cards={[
              <StackCard
                key="capture"
                title="Capture"
                body="A daily page that does not care if the thought is finished. Dump it. Keep walking."
                src="/variants/with-taste-skill/grok-4.6/images/v5-collage.png"
                alt="Paper cards spread on a studio floor"
              />,
              <StackCard
                key="link"
                title="Link"
                body="Point both ways. Tomorrow’s note can still find Tuesday."
                src="/variants/with-taste-skill/grok-4.6/images/v5-sculpture.png"
                alt="Paper sculpture in hard studio light"
              />,
              <StackCard
                key="recall"
                title="Recall"
                body="Search the half-remembered. The graph is a map, not a dashboard."
                src="/variants/with-taste-skill/grok-4.6/images/v5-hero.png"
                alt="Folded paper standing like architecture"
              />,
            ]}
          />
        </section>

        <section className="px-4 py-24 md:px-8 md:py-32">
          <Reveal className="mx-auto max-w-[1400px]">
            <blockquote className="max-w-[22ch] text-3xl font-medium tracking-tight md:text-5xl">
              “It feels like a studio for thoughts, not a filing cabinet.”
            </blockquote>
            <div className="mt-8 flex items-center gap-3">
              <Image
                src="/variants/with-taste-skill/grok-4.6/images/avatar-mateo.png"
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 object-cover"
              />
              <p className="text-sm text-[#5c564e] dark:text-[#b8b0a6]">
                Leila Voss
                <span className="mt-1 block">Creative director</span>
              </p>
            </div>
          </Reveal>
        </section>

        <section id="start" className="px-4 pb-24 md:px-8 md:pb-32">
          <Reveal className="mx-auto flex max-w-[1400px] flex-col gap-6 border-t border-[#1a1a1a] pt-16 dark:border-[#f4efe8] md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-medium tracking-tight md:text-5xl">Start building it.</h2>
              <p className="mt-3 max-w-[42ch] text-base text-[#5c564e] dark:text-[#b8b0a6]">
                Free on disk. Pro is $8 a month when you want sync in your pocket.
              </p>
            </div>
            <MagneticLink
              href="#top"
              className="inline-flex h-12 items-center rounded-full bg-[#c45b7a] px-8 text-sm font-medium text-white"
            >
              Start
            </MagneticLink>
          </Reveal>
        </section>
      </main>

      <footer className="px-4 pb-28 pt-8 md:px-8">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 md:flex-row md:justify-between">
          <p className="text-sm font-medium">Cairn</p>
          <p className="text-sm text-[#5c564e] dark:text-[#b8b0a6]">© 2026 Cairn Labs</p>
        </div>
      </footer>
    </div>
  );
}
