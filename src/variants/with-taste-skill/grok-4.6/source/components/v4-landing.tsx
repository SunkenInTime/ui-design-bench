import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { HeroEnter, Reveal } from "@/variants/with-taste-skill/grok-4.6/source/components/reveal";
import { MobileNav } from "@/variants/with-taste-skill/grok-4.6/source/components/mobile-nav";
import { WorksWith } from "@/variants/with-taste-skill/grok-4.6/source/components/works-with";
import { z } from "@/variants/with-taste-skill/grok-4.6/source/lib/z-index";

const NAV = [
  { href: "#stones", label: "Stones" },
  { href: "#field", label: "Field" },
  { href: "#start", label: "Start a cairn" },
];

export function V4Landing() {
  return (
    <div className="bg-[#e7eadf] font-figtree text-[#1c2418] dark:bg-[#12160f] dark:text-[#e7eadf]">
      <header
        className="sticky top-0 border-b border-[#cfd6c0]/80 bg-[#e7eadf]/88 backdrop-blur-md dark:border-white/10 dark:bg-[#12160f]/88"
        style={{ zIndex: z.nav }}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 md:px-8">
          <a href="#top" className="text-[15px] font-semibold tracking-tight">
            Cairn
          </a>
          <nav className="hidden items-center gap-8 text-sm text-[#4d5a42] md:flex dark:text-[#b7c2a8]">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[#1c2418] dark:hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <a
              href="#start"
              className="inline-flex h-9 items-center whitespace-nowrap rounded-xl bg-[#c4841d] px-4 text-sm font-medium text-[#1c2418] active:scale-[0.98]"
            >
              Start a cairn
            </a>
          </div>
          <MobileNav
            links={NAV}
            cta="Start a cairn"
            ctaHref="#start"
            buttonClass="flex h-10 w-10 items-center justify-center rounded-xl text-[#1c2418] dark:text-[#e7eadf]"
            panelClass="fixed left-4 right-4 top-[4.5rem] rounded-xl border border-[#cfd6c0] bg-[#e7eadf] p-4 dark:border-white/10 dark:bg-[#12160f]"
            linkClass="block rounded-xl px-3 py-2 text-sm"
            ctaClass="mt-3 flex h-11 items-center justify-center whitespace-nowrap rounded-xl bg-[#c4841d] text-sm font-medium text-[#1c2418]"
          />
        </div>
      </header>

      <main id="top">
        <section className="relative min-h-[100dvh] overflow-hidden">
          <Image
            src="/variants/with-taste-skill/grok-4.6/images/v4-hero.png"
            alt="A small stone cairn on a mossy forest trail in amber light"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12160f]/78 via-[#12160f]/40 to-transparent" />
          <div className="relative mx-auto flex min-h-[100dvh] max-w-[1400px] items-center px-4 pb-16 pt-16 md:px-8 md:pt-20">
            <HeroEnter className="max-w-xl">
              <h1 className="text-4xl font-semibold tracking-tighter text-[#f3f6ea] md:text-5xl lg:text-6xl lg:leading-[1.05]">
                A trail through your thinking.
              </h1>
              <p className="mt-5 max-w-[34ch] text-base leading-relaxed text-[#d5ddc6]">
                Stack notes like stones. Follow them back when the path gets faint.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#start"
                  className="inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-xl bg-[#c4841d] px-5 text-sm font-medium text-[#1c2418] active:scale-[0.98]"
                >
                  Start a cairn
                  <ArrowRight size={16} weight="regular" />
                </a>
                <a
                  href="#stones"
                  className="inline-flex h-11 items-center whitespace-nowrap rounded-xl border border-[#f3f6ea]/40 px-5 text-sm font-medium text-[#f3f6ea]"
                >
                  See the stones
                </a>
              </div>
            </HeroEnter>
          </div>
        </section>

        <section className="px-4 py-12 md:px-8">
          <div className="mx-auto max-w-[1400px]">
            <WorksWith className="flex flex-wrap items-center justify-between gap-8" />
          </div>
        </section>

        <section id="stones" className="px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <h2 className="max-w-[16ch] text-3xl font-semibold tracking-tight md:text-5xl">
                One stone is a note. The pile is a path.
              </h2>
            </Reveal>
            <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-12">
              <Reveal className="relative min-h-[320px] overflow-hidden rounded-xl md:col-span-8 md:min-h-[480px]">
                <Image
                  src="/variants/with-taste-skill/grok-4.6/images/v4-field.png"
                  alt="Hands writing in a field notebook on a mossy log"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover"
                />
              </Reveal>
              <Reveal className="relative min-h-[280px] overflow-hidden rounded-xl md:col-span-4" delay={0.06}>
                <Image
                  src="/variants/with-taste-skill/grok-4.6/images/v4-stones.png"
                  alt="Close-up of wet river stones stacked as a cairn"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </Reveal>
              <Reveal className="rounded-xl bg-[#2f3d28] p-8 text-[#e7eadf] md:col-span-5 md:p-10" delay={0.04}>
                <h3 className="text-2xl font-semibold tracking-tight">Daily pages</h3>
                <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-[#c5d0b4]">
                  A page for today, every day. Tomorrow you can still walk back. Nothing expires.
                </p>
              </Reveal>
              <Reveal className="rounded-xl bg-[#dfe6d2] p-8 md:col-span-7 md:p-10 dark:bg-[#1c2418]" delay={0.08}>
                <h3 className="text-2xl font-semibold tracking-tight">Links that hold</h3>
                <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-[#4d5a42] dark:text-[#b7c2a8]">
                  Point from a hike to a book to a half-built idea. The next time you are lost, the markers are still there.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="field" className="px-4 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
            <Reveal className="relative aspect-[16/10] overflow-hidden rounded-xl md:col-span-8">
              <Image
                src="/variants/with-taste-skill/grok-4.6/images/v4-cabin.png"
                alt="Cabin desk beside a forest window with an open notebook"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal className="md:col-span-4" delay={0.06}>
              <blockquote className="text-xl font-medium leading-snug md:text-2xl">
                “I take it into the woods. When I get home, the links are already waiting.”
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src="/variants/with-taste-skill/grok-4.6/images/v4-hiker.png"
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-xl object-cover"
                />
                <p className="text-sm text-[#4d5a42] dark:text-[#b7c2a8]">
                  Rowan Hale
                  <span className="mt-1 block">Field biologist</span>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="start" className="px-4 pb-24 md:px-8 md:pb-32">
          <Reveal className="mx-auto max-w-[1400px] rounded-xl bg-[#2f3d28] px-6 py-14 text-[#e7eadf] md:px-16 md:py-20">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Start a cairn on your machine.</h2>
            <p className="mt-4 max-w-[48ch] text-base text-[#c5d0b4]">
              Free for local notes. Pro is $8 a month for encrypted sync and phone capture.
            </p>
            <a
              href="#top"
              className="mt-8 inline-flex h-12 items-center whitespace-nowrap rounded-xl bg-[#c4841d] px-6 text-sm font-medium text-[#1c2418] active:scale-[0.98]"
            >
              Start a cairn
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-[#cfd6c0] px-4 pb-28 pt-12 dark:border-white/10 md:px-8">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 md:flex-row md:justify-between">
          <p className="text-sm font-semibold">Cairn</p>
          <p className="text-sm text-[#4d5a42] dark:text-[#b7c2a8]">© 2026 Cairn Labs</p>
        </div>
      </footer>
    </div>
  );
}
