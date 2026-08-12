import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { HeroEnter, Reveal } from "@/variants/with-taste-skill/grok-4.6/source/components/reveal";
import { MobileNav } from "@/variants/with-taste-skill/grok-4.6/source/components/mobile-nav";
import { WorksWith } from "@/variants/with-taste-skill/grok-4.6/source/components/works-with";
import { z } from "@/variants/with-taste-skill/grok-4.6/source/lib/z-index";

const NAV = [
  { href: "#pages", label: "Pages" },
  { href: "#voices", label: "Voices" },
  { href: "#begin", label: "Begin" },
];

const STRIP = [
  "Q3 research questions",
  "Kitchen renovation",
  "Letter to Dad",
  "Berlin trip notes",
  "Grant draft, take four",
  "Names I keep forgetting",
  "The argument from Tuesday",
  "Recipes that actually work",
];

export function V3Landing() {
  return (
    <div className="bg-[#f3f1ef] font-syne text-[#1f1c1b] dark:bg-[#161412] dark:text-[#f1ece8]">
      <header
        className="sticky top-0 border-b border-[#e4dfd8] bg-[#f3f1ef]/90 backdrop-blur-md dark:border-[#2a2623] dark:bg-[#161412]/90"
        style={{ zIndex: z.nav }}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 md:px-8">
          <a href="#top" className="text-[15px] font-semibold tracking-tight">
            Cairn
          </a>
          <nav className="hidden items-center gap-8 text-sm text-[#6a635c] md:flex dark:text-[#b7aea6]">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[#1f1c1b] dark:hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <a
              href="#begin"
              className="inline-flex h-9 items-center bg-[#b44a62] px-4 text-sm font-medium text-white active:scale-[0.98]"
            >
              Begin
            </a>
          </div>
          <MobileNav
            links={NAV}
            cta="Begin"
            ctaHref="#begin"
            buttonClass="flex h-10 w-10 items-center justify-center text-[#1f1c1b] dark:text-[#f1ece8]"
            panelClass="fixed left-4 right-4 top-[4.5rem] border border-[#e4dfd8] bg-[#f3f1ef] p-4 dark:border-[#2a2623] dark:bg-[#161412]"
            linkClass="block px-3 py-2 text-sm"
            ctaClass="mt-3 flex h-11 items-center justify-center bg-[#b44a62] text-sm font-medium text-white"
          />
        </div>
      </header>

      <main id="top">
        <section className="mx-auto min-h-[100dvh] max-w-[1400px] px-4 pb-12 pt-16 md:px-8 md:pt-20 lg:pt-24">
          <HeroEnter>
            <h1 className="max-w-[12ch] text-4xl font-semibold tracking-tighter md:text-6xl lg:text-7xl lg:leading-[1.05]">
              Write it down. Mean it later.
            </h1>
            <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-[#6a635c] dark:text-[#b7aea6]">
              Cairn keeps every note in conversation with the rest of your work.
            </p>
            <a
              href="#begin"
              className="mt-8 inline-flex h-11 items-center gap-2 bg-[#b44a62] px-6 text-sm font-medium text-white active:scale-[0.98]"
            >
              Begin
              <ArrowRight size={16} weight="regular" />
            </a>
          </HeroEnter>
          <div className="relative mt-12 aspect-[16/8] overflow-hidden md:mt-16">
            <Image
              src="/variants/with-taste-skill/grok-4.6/images/v3-hero.png"
              alt="Overlapping manuscript pages with a deep rose wax seal"
              fill
              priority
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover"
            />
          </div>
        </section>

        <section className="overflow-hidden border-y border-[#e4dfd8] py-5 dark:border-[#2a2623]">
          <div className="flex w-max marquee-track">
            {[0, 1].map((copy) => (
              <ul key={copy} className="flex items-center">
                {STRIP.map((item) => (
                  <li
                    key={`${copy}-${item}`}
                    className="px-8 text-sm tracking-wide text-[#6a635c] dark:text-[#b7aea6]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        <section className="px-4 py-16 md:px-8">
          <div className="mx-auto max-w-[1400px]">
            <WorksWith className="grid grid-cols-3 gap-8 md:grid-cols-6" />
          </div>
        </section>

        <section id="pages" className="px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <h2 className="max-w-[16ch] text-3xl font-semibold tracking-tight md:text-5xl">
                A page for today. A web for the rest.
              </h2>
              <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-[#6a635c] dark:text-[#b7aea6]">
                Daily notes catch the raw material. Links pull last month into this sentence. Nothing is a dead end unless you leave it that way.
              </p>
            </Reveal>
            <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-2">
              <Reveal className="relative min-h-[360px] md:col-span-5 md:row-span-2">
                <Image
                  src="/variants/with-taste-skill/grok-4.6/images/v3-writer.png"
                  alt="A writer standing beside a tall window with a thin notebook"
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover"
                />
              </Reveal>
              <Reveal className="relative min-h-[220px] md:col-span-7" delay={0.06}>
                <Image
                  src="/variants/with-taste-skill/grok-4.6/images/v3-pages.png"
                  alt="Overlapping typewritten pages bound with rose thread"
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover"
                />
              </Reveal>
              <Reveal className="relative min-h-[220px] md:col-span-7" delay={0.1}>
                <Image
                  src="/variants/with-taste-skill/grok-4.6/images/v3-paper.png"
                  alt="A geometric stack of white paper with a rose ink stamp"
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover"
                />
              </Reveal>
            </div>
          </div>
        </section>

        <section id="voices" className="border-y border-[#e4dfd8] px-4 py-24 dark:border-[#2a2623] md:px-8 md:py-32">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 md:grid-cols-2">
            <Reveal>
              <blockquote className="text-2xl font-medium leading-snug md:text-3xl">
                “I draft in Cairn because the backlinks keep the essay honest. Old notes argue with the new ones.”
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src="/variants/with-taste-skill/grok-4.6/images/avatar-hana.png"
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12 object-cover"
                />
                <p className="text-sm text-[#6a635c] dark:text-[#b7aea6]">
                  Hana Okonkwo
                  <span className="mt-1 block">Essayist</span>
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <blockquote className="text-2xl font-medium leading-snug md:text-3xl">
                “Search found a paragraph I wrote in 2022. I had forgotten the words. The idea was still right.”
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src="/variants/with-taste-skill/grok-4.6/images/avatar-colin.png"
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12 object-cover"
                />
                <p className="text-sm text-[#6a635c] dark:text-[#b7aea6]">
                  Colin Ferris
                  <span className="mt-1 block">Historian</span>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="begin" className="px-4 py-24 md:px-8 md:py-32">
          <Reveal className="mx-auto max-w-[1400px]">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Begin with a blank daily page.</h2>
            <p className="mt-4 max-w-[50ch] text-base text-[#6a635c] dark:text-[#b7aea6]">
              Free forever for local files. Pro adds encrypted sync and a capture inbox on your phone.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#top"
                className="inline-flex h-12 items-center bg-[#b44a62] px-6 text-sm font-medium text-white active:scale-[0.98]"
              >
                Begin
              </a>
              <a
                href="#pages"
                className="inline-flex h-12 items-center border border-[#1f1c1b] px-6 text-sm font-medium dark:border-[#f1ece8]"
              >
                Read the pages
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-[#e4dfd8] px-4 pb-28 pt-12 dark:border-[#2a2623] md:px-8">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 md:flex-row md:justify-between">
          <p className="text-sm font-semibold">Cairn</p>
          <p className="text-sm text-[#6a635c] dark:text-[#b7aea6]">© 2026 Cairn Labs</p>
        </div>
      </footer>
    </div>
  );
}
