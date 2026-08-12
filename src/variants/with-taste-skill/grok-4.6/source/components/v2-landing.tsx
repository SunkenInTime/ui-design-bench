import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { HeroEnter, Reveal } from "@/variants/with-taste-skill/grok-4.6/source/components/reveal";
import { MagneticLink } from "@/variants/with-taste-skill/grok-4.6/source/components/magnetic-link";
import { MobileNav } from "@/variants/with-taste-skill/grok-4.6/source/components/mobile-nav";
import { WaitlistForm } from "@/variants/with-taste-skill/grok-4.6/source/components/waitlist-form";
import { WorksWith } from "@/variants/with-taste-skill/grok-4.6/source/components/works-with";
import { z } from "@/variants/with-taste-skill/grok-4.6/source/lib/z-index";

const NAV = [
  { href: "#product", label: "Product" },
  { href: "#practice", label: "Practice" },
  { href: "#get", label: "Get Cairn" },
];

export function V2Landing() {
  return (
    <div className="bg-[#eceef1] font-outfit text-[#1c1e22] dark:bg-[#121417] dark:text-[#e8eaee]">
      <header
        className="sticky top-0 border-b border-[#d5d8de]/80 bg-[#eceef1]/85 backdrop-blur-md dark:border-white/10 dark:bg-[#121417]/85"
        style={{ zIndex: z.nav }}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 md:px-8">
          <a href="#top" className="text-[15px] font-medium tracking-tight">
            Cairn
          </a>
          <nav className="hidden items-center gap-8 text-sm text-[#5c6370] md:flex dark:text-[#9aa3b0]">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[#1c1e22] dark:hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <a
              href="#get"
              className="inline-flex h-9 items-center rounded-full bg-[#3d6ec9] px-4 text-sm font-medium text-white active:scale-[0.98]"
            >
              Get Cairn
            </a>
          </div>
          <MobileNav
            links={NAV}
            cta="Get Cairn"
            ctaHref="#get"
            buttonClass="flex h-10 w-10 items-center justify-center rounded-full text-[#1c1e22] dark:text-[#e8eaee]"
            panelClass="fixed left-4 right-4 top-[4.5rem] rounded-2xl border border-[#d5d8de] bg-[#eceef1] p-4 dark:border-white/10 dark:bg-[#121417]"
            linkClass="block rounded-full px-3 py-2 text-sm"
            ctaClass="mt-3 flex h-11 items-center justify-center rounded-full bg-[#3d6ec9] text-sm font-medium text-white"
          />
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid min-h-[100dvh] max-w-[1400px] grid-cols-1 items-center gap-10 px-4 pb-16 pt-16 md:grid-cols-12 md:px-8 md:pt-20 lg:pt-24">
          <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-2xl md:order-1 md:col-span-6 md:aspect-[4/5] lg:aspect-[5/6]">
            <Image
              src="/variants/with-taste-skill/grok-4.6/images/v2-hero.png"
              alt="Silver desk with a chrome vase, closed laptop, and a slim blue notebook"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <HeroEnter className="order-1 md:order-2 md:col-span-6 md:pl-6 lg:pl-12">
            <h1 className="text-4xl font-medium tracking-tighter text-[#1c1e22] md:text-5xl lg:text-6xl lg:leading-[1.05] dark:text-[#f3f5f8]">
              Think once. Find it again.
            </h1>
            <p className="mt-5 max-w-[34ch] text-base leading-relaxed text-[#5c6370] dark:text-[#9aa3b0]">
              A quiet second brain for notes, links, and the ideas you keep meaning to finish.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <MagneticLink
                href="#get"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#3d6ec9] px-6 text-sm font-medium text-white"
              >
                Get Cairn
                <ArrowRight size={16} weight="regular" />
              </MagneticLink>
              <a
                href="#product"
                className="inline-flex h-11 items-center rounded-full border border-[#c5cad3] px-6 text-sm font-medium text-[#1c1e22] dark:border-white/15 dark:text-[#e8eaee]"
              >
                See the desk
              </a>
            </div>
          </HeroEnter>
        </section>

        <section className="px-4 py-12 md:px-8">
          <div className="mx-auto max-w-[1400px]">
            <WorksWith className="flex flex-wrap items-center justify-between gap-8" />
          </div>
        </section>

        <section id="product" className="px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <h2 className="max-w-[18ch] text-3xl font-medium tracking-tight md:text-5xl">
                Built for the hour you actually write.
              </h2>
            </Reveal>
            <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-12 md:overflow-visible md:pb-0">
              <Reveal className="w-[84vw] shrink-0 snap-start md:col-span-7 md:w-auto">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image
                    src="/variants/with-taste-skill/grok-4.6/images/v2-write.png"
                    alt="Hands writing on a pale tablet in cool daylight"
                    fill
                    sizes="(max-width: 768px) 84vw, 58vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 text-xl font-medium">Capture on glass</h3>
                <p className="mt-2 max-w-[48ch] text-sm leading-relaxed text-[#5c6370] dark:text-[#9aa3b0]">
                  Phone, tablet, or desktop. The inbox is the same surface. File nothing until the thought is safe.
                </p>
              </Reveal>
              <Reveal className="w-[84vw] shrink-0 snap-start md:col-span-5 md:w-auto" delay={0.08}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl md:aspect-auto md:h-[calc(100%-5.5rem)] md:min-h-[280px]">
                  <Image
                    src="/variants/with-taste-skill/grok-4.6/images/v2-stack.png"
                    alt="Stacked silver notebooks with a chrome paperweight"
                    fill
                    sizes="(max-width: 768px) 84vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 text-xl font-medium">Plain files, still</h3>
                <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-[#5c6370] dark:text-[#9aa3b0]">
                  Markdown on disk. Sync however you already sync. Cairn is a lens, not a vault.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="relative min-h-[70dvh] overflow-hidden">
          <Image
            src="/variants/with-taste-skill/grok-4.6/images/v2-room.png"
            alt="Minimal silver study with a long desk and fog outside the window"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#121417]/45" />
          <div className="relative mx-auto flex min-h-[70dvh] max-w-[1400px] items-end px-4 py-16 md:px-8 md:py-24">
            <Reveal>
              <p className="max-w-[20ch] text-3xl font-medium tracking-tight text-white md:text-5xl">
                A room for unfinished thinking.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="practice" className="px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 md:grid-cols-12">
            <Reveal className="relative aspect-[3/4] overflow-hidden rounded-2xl md:col-span-5">
              <Image
                src="/variants/with-taste-skill/grok-4.6/images/v2-person.png"
                alt="A man writing in a notebook beside a foggy window"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal className="md:col-span-6 md:col-start-7" delay={0.06}>
              <blockquote className="text-2xl font-medium leading-snug tracking-tight md:text-3xl">
                “I open Cairn the way I used to open a paper pad. The links showed up later, when I needed them.”
              </blockquote>
              <p className="mt-6 text-sm text-[#5c6370] dark:text-[#9aa3b0]">
                Mateo Ruiz
                <span className="mt-1 block">Staff engineer, maps</span>
              </p>
            </Reveal>
          </div>
        </section>

        <section id="get" className="px-4 pb-24 md:px-8 md:pb-32">
          <Reveal className="mx-auto max-w-[1400px] rounded-2xl bg-[#dfe3e9] px-6 py-12 md:px-16 md:py-20 dark:bg-[#1b1f26]">
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Get Cairn when desktop ships.</h2>
            <p className="mt-3 max-w-[50ch] text-base text-[#5c6370] dark:text-[#9aa3b0]">
              Mac and Windows first. Your notes stay local. Sync is optional.
            </p>
            <div className="mt-8 text-[#1c1e22] dark:text-[#e8eaee]">
              <WaitlistForm
                accentClass="rounded-full bg-[#3d6ec9] text-white"
                inputClass="h-12 w-full rounded-full border border-[#c5cad3] bg-white px-4 text-sm text-[#1c1e22] placeholder:text-[#5c6370] focus:outline-none focus:ring-2 focus:ring-[#3d6ec9] dark:border-white/15 dark:bg-[#121417] dark:text-[#e8eaee] dark:placeholder:text-[#9aa3b0]"
                helperClass="text-sm text-[#5c6370] dark:text-[#9aa3b0]"
                errorClass="text-sm text-[#9a3b3b]"
                successClass="max-w-md text-base text-[#1c1e22] dark:text-[#e8eaee]"
              />
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-[#d5d8de] px-4 pb-28 pt-12 dark:border-white/10 md:px-8">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 md:flex-row md:justify-between">
          <p className="text-sm font-medium">Cairn</p>
          <p className="text-sm text-[#5c6370] dark:text-[#9aa3b0]">© 2026 Cairn Labs</p>
        </div>
      </footer>
    </div>
  );
}
