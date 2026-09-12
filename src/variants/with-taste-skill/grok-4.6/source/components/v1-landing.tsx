import Image from "next/image";
import { ArrowRight, HardDrives, MagnifyingGlass } from "@phosphor-icons/react/ssr";
import { HeroEnter, Reveal } from "@/variants/with-taste-skill/grok-4.6/source/components/reveal";
import { MobileNav } from "@/variants/with-taste-skill/grok-4.6/source/components/mobile-nav";
import { WorksWith } from "@/variants/with-taste-skill/grok-4.6/source/components/works-with";
import { z } from "@/variants/with-taste-skill/grok-4.6/source/lib/z-index";

const NAV = [
  { href: "#capture", label: "Capture" },
  { href: "#graph", label: "Graph" },
  { href: "#plans", label: "Plans" },
];

export function V1Landing() {
  return (
    <div className="bg-zinc-50 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <header
        className="sticky top-0 border-b border-zinc-200/80 bg-zinc-50/90 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/90"
        style={{ zIndex: z.nav }}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 md:px-8">
          <a href="#top" className="text-[15px] font-medium tracking-tight">
            Cairn
          </a>
          <nav className="hidden items-center gap-8 text-sm text-zinc-600 md:flex dark:text-zinc-400">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-zinc-950 dark:hover:text-zinc-50">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <a
              href="#plans"
              className="inline-flex h-9 items-center whitespace-nowrap rounded-lg bg-emerald-700 px-4 text-sm font-medium text-white active:scale-[0.98] dark:bg-emerald-400 dark:text-zinc-950"
            >
              Start free
            </a>
          </div>
          <MobileNav
            links={NAV}
            cta="Start free"
            ctaHref="#plans"
            buttonClass="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-900 dark:text-zinc-100"
            panelClass="fixed left-4 right-4 top-[4.5rem] rounded-lg border border-zinc-200 bg-zinc-50 p-4 shadow-[0_16px_40px_rgb(24_24_27_/_0.12)] dark:border-zinc-800 dark:bg-zinc-950"
            linkClass="block rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
            ctaClass="mt-3 flex h-11 items-center justify-center rounded-lg bg-emerald-700 text-sm font-medium text-white dark:bg-emerald-400 dark:text-zinc-950"
          />
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid min-h-[100dvh] max-w-[1400px] grid-cols-1 items-center gap-10 px-4 pb-16 pt-16 md:grid-cols-12 md:gap-12 md:px-8 md:pt-20 lg:pt-24">
          <HeroEnter className="md:col-span-5">
            <h1 className="text-4xl font-semibold tracking-tighter text-zinc-950 md:text-5xl lg:text-6xl lg:leading-[1.05] dark:text-zinc-50">
              Notes that find each other.
            </h1>
            <p className="mt-5 max-w-[36ch] text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Cairn is a local-first second brain for people who capture thoughts and need them back.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#plans"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-emerald-700 px-5 text-sm font-medium text-white active:scale-[0.98] dark:bg-emerald-400 dark:text-zinc-950"
              >
                Start free
                <ArrowRight size={16} weight="regular" />
              </a>
              <a
                href="#capture"
                className="inline-flex h-11 items-center rounded-lg border border-zinc-300 px-5 text-sm font-medium text-zinc-800 active:scale-[0.98] dark:border-zinc-700 dark:text-zinc-200"
              >
                See capture
              </a>
            </div>
          </HeroEnter>
          <div className="relative aspect-[3/2] overflow-hidden rounded-lg md:col-span-7">
            <Image
              src="/variants/with-taste-skill/grok-4.6/images/v1-hero.png"
              alt="Dark zinc desk with a laptop and an emerald glass paperweight"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="border-y border-zinc-200 py-10 dark:border-zinc-800">
          <div className="mx-auto max-w-[1400px] px-4 md:px-8">
            <p className="mb-6 text-sm text-zinc-500">Works with</p>
            <WorksWith className="grid grid-cols-3 items-center gap-8 md:grid-cols-6" />
          </div>
        </section>

        <section id="graph" className="mx-auto max-w-[1400px] px-4 py-24 md:px-8 md:py-32">
          <Reveal>
            <h2 className="max-w-[16ch] text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl dark:text-zinc-50">
              Link a note. The other side links back.
            </h2>
            <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Bidirectional links turn a pile of files into a map. Follow a thread from a meeting into last winter&apos;s research without hunting folders.
            </p>
          </Reveal>
          <Reveal className="relative mt-12 aspect-[16/9] overflow-hidden rounded-lg md:mt-16" delay={0.08}>
            <Image
              src="/variants/with-taste-skill/grok-4.6/images/v1-graph.png"
              alt="Index cards connected by taut black threads and emerald pins"
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover"
            />
          </Reveal>
        </section>

        <section id="capture" className="bg-zinc-100 py-24 dark:bg-zinc-900 md:py-32">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-4 px-4 md:grid-cols-12 md:px-8">
            <Reveal className="relative min-h-[280px] overflow-hidden rounded-lg md:col-span-7 md:min-h-[420px]">
              <Image
                src="/variants/with-taste-skill/grok-4.6/images/v1-capture.png"
                alt="Hands typing on a dark keyboard at night"
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal
              className="flex flex-col justify-end rounded-lg bg-zinc-950 p-8 text-zinc-50 md:col-span-5 md:p-10 dark:bg-zinc-800"
              delay={0.06}
            >
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Inbox in one keystroke</h3>
              <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-zinc-400">
                Dump a thought before it evaporates. Sort later. Cairn never asks you to file first.
              </p>
            </Reveal>
            <Reveal className="rounded-lg border border-zinc-200 bg-zinc-50 p-7 md:col-span-4 dark:border-zinc-800 dark:bg-zinc-950">
              <MagnifyingGlass size={22} weight="regular" className="text-emerald-700 dark:text-emerald-400" />
              <h3 className="mt-5 text-lg font-medium">Search that forgives</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Half a phrase, a date, a person. Recalled notes surface even when the title was terrible.
              </p>
            </Reveal>
            <Reveal className="rounded-lg border border-zinc-200 bg-zinc-50 p-7 md:col-span-4 dark:border-zinc-800 dark:bg-zinc-950" delay={0.05}>
              <HardDrives size={22} weight="regular" className="text-emerald-700 dark:text-emerald-400" />
              <h3 className="mt-5 text-lg font-medium">Files on your machine</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Plain Markdown in a folder you already back up. Leave whenever you want. Nothing is trapped.
              </p>
            </Reveal>
            <Reveal className="relative min-h-[220px] overflow-hidden rounded-lg md:col-span-4" delay={0.08}>
              <Image
                src="/variants/with-taste-skill/grok-4.6/images/v1-portrait.png"
                alt="A researcher working in a notebook under a cool desk lamp"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-4 py-24 md:grid-cols-12 md:px-8 md:py-32">
          <Reveal className="md:col-span-8">
            <blockquote className="text-2xl font-medium leading-snug tracking-tight text-zinc-950 md:text-4xl dark:text-zinc-50">
              “I stopped rebuilding the same argument from scratch. The old notes were already talking to each other.”
            </blockquote>
            <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
              Priya Nandakumar
              <span className="mt-1 block text-zinc-500">Research lead, climate modeling</span>
            </p>
          </Reveal>
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-lg md:col-span-4" delay={0.08}>
            <Image
              src="/variants/with-taste-skill/grok-4.6/images/v1-portrait.png"
              alt="Portrait of Priya Nandakumar"
              fill
              sizes="(max-width: 768px) 40vw, 20vw"
              className="object-cover"
            />
          </Reveal>
        </section>

        <section className="border-t border-zinc-200 px-4 py-24 dark:border-zinc-800 md:px-8 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Capture, then keep going</h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
              <Reveal>
                <p className="font-mono text-xs text-emerald-700 dark:text-emerald-400">Capture</p>
                <p className="mt-3 max-w-[48ch] text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  A daily page is waiting. Type, paste, or drop a file. No schema, no board to groom.
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="font-mono text-xs text-emerald-700 dark:text-emerald-400">Recall</p>
                <p className="mt-3 max-w-[48ch] text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  Links, backlinks, and search sit behind the writing. The graph is there when you want it, not before.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="plans" className="bg-zinc-100 px-4 py-24 dark:bg-zinc-900 md:px-8 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">Plans</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Free on disk. Pro for sync.</h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
              <Reveal className="rounded-lg border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-950">
                <h3 className="text-lg font-medium">Free</h3>
                <p className="mt-2 text-4xl font-semibold tracking-tight">$0</p>
                <p className="mt-4 max-w-[40ch] text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Unlimited local notes, links, and search. Sync is on you: Git, iCloud, a USB drive.
                </p>
                <a
                  href="#top"
                  className="mt-8 inline-flex h-11 items-center rounded-lg border border-zinc-300 px-5 text-sm font-medium dark:border-zinc-700"
                >
                  Download
                </a>
              </Reveal>
              <Reveal className="rounded-lg bg-zinc-950 p-8 text-zinc-50 dark:bg-emerald-950" delay={0.06}>
                <h3 className="text-lg font-medium">Pro</h3>
                <p className="mt-2 text-4xl font-semibold tracking-tight">
                  $8<span className="text-lg font-normal text-zinc-400"> / month</span>
                </p>
                <p className="mt-4 max-w-[40ch] text-sm leading-relaxed text-zinc-400">
                  Encrypted sync, publish-to-web, and a phone capture inbox. Cancel any month.
                </p>
                <a
                  href="#top"
                  className="mt-8 inline-flex h-11 items-center rounded-lg bg-emerald-400 px-5 text-sm font-medium text-zinc-950 active:scale-[0.98]"
                >
                  Start free
                </a>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 px-4 pb-28 pt-16 dark:border-zinc-800 md:px-8">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg font-medium">Cairn</p>
            <p className="mt-2 max-w-[40ch] text-sm text-zinc-500">A second brain that stays a folder of files.</p>
          </div>
          <p className="text-sm text-zinc-500">© 2026 Cairn Labs</p>
        </div>
      </footer>
    </div>
  );
}
