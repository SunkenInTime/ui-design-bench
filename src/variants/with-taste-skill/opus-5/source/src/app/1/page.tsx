import Image from "next/image";
import Link from "next/link";
import {
  AirplaneTiltIcon,
  ArrowRightIcon,
  CheckIcon,
  FolderOpenIcon,
  LockKeyIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/variants/with-taste-skill/opus-5/source/src/components/reveal";
import { TesseraMark } from "@/variants/with-taste-skill/opus-5/source/src/components/tessera-mark";
import { integrations, iconUrl } from "@/variants/with-taste-skill/opus-5/source/src/lib/integrations";
import { SignupForm } from "./_components/signup-form";
import heroImage from "@/variants/with-taste-skill/opus-5/source/src/assets/img/iter1-hero.png";
import linksImage from "@/variants/with-taste-skill/opus-5/source/src/assets/img/iter1-links.png";
import localImage from "@/variants/with-taste-skill/opus-5/source/src/assets/img/iter1-local.png";

/*
  Iteration 01 "Signal" - restrained dark minimalism.
  DESIGN_VARIANCE 6 / MOTION_INTENSITY 4 / VISUAL_DENSITY 3.
  Theme lock: dark. Accent lock: emerald-400, nothing else.
  Shape lock: interactive 8px, surfaces 12px, chips 6px.
*/

const shell = "mx-auto w-full max-w-[1400px] px-6 lg:px-10";

const capabilities = [
  {
    title: "Capture before you know why",
    body: "A global hotkey, an inbox address, a browser button. Get the thought down and keep reading.",
  },
  {
    title: "Links point both ways",
    body: "Mention a note and the mention appears on the other side too. Nothing to file, no tags to maintain.",
  },
  {
    title: "Search reads for meaning",
    body: "Ask for the argument you half remember. Tessera finds it without the exact words.",
  },
  {
    title: "Old notes come back",
    body: "While you draft, Tessera raises the notes that belong here. Most days it is right.",
  },
];

export default function SignalPage() {
  return (
    <div className="min-h-[100dvh] bg-[#0a0a0b] font-sans text-zinc-100 selection:bg-emerald-400/25">
      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#0a0a0b]/85 backdrop-blur-md">
        <div className={`${shell} flex h-16 items-center justify-between gap-8`}>
          <Link
            href="/1"
            className="flex items-center gap-2.5 text-[15px] font-medium tracking-tight"
          >
            <TesseraMark size={16} className="text-emerald-400" />
            Tessera
          </Link>
          <nav className="hidden items-center gap-8 text-[14px] text-zinc-400 md:flex">
            <a href="#capabilities" className="transition-colors hover:text-zinc-100">
              How it works
            </a>
            <a href="#local" className="transition-colors hover:text-zinc-100">
              Local-first
            </a>
            <a href="#pricing" className="transition-colors hover:text-zinc-100">
              Pricing
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#start"
              className="hidden h-9 items-center rounded-lg px-3 text-[14px] text-zinc-400 transition-colors hover:text-zinc-100 sm:inline-flex"
            >
              Sign in
            </a>
            <a
              href="#start"
              className="inline-flex h-9 items-center rounded-lg bg-emerald-400 px-4 text-[14px] font-semibold text-[#06130d] transition-[transform,background-color] hover:bg-emerald-300 active:translate-y-[1px]"
            >
              Start free
            </a>
          </div>
        </div>
      </header>

      {/* Hero: asymmetric split, 6/5. Three text elements only. */}
      <section className="border-b border-white/8">
        <div className={shell}>
          <div className="grid items-center gap-12 pt-14 pb-20 lg:grid-cols-11 lg:gap-16 lg:pt-24 lg:pb-32">
            <div className="lg:col-span-6">
              <Reveal>
                <h1 className="max-w-[19ch] text-[2.6rem] leading-[1.04] font-medium tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.7rem]">
                  Your notes already know each other.
                </h1>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-zinc-400">
                  Tessera links what you write as you write it, so the note you
                  need finds you.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a
                    href="#start"
                    className="inline-flex h-11 items-center gap-2 rounded-lg bg-emerald-400 px-5 text-[15px] font-semibold whitespace-nowrap text-[#06130d] transition-[transform,background-color] hover:bg-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 active:translate-y-[1px]"
                  >
                    Start free
                    <ArrowRightIcon size={15} weight="bold" />
                  </a>
                  <a
                    href="#capabilities"
                    className="inline-flex h-11 items-center rounded-lg border border-white/15 px-5 text-[15px] font-medium whitespace-nowrap text-zinc-100 transition-colors hover:border-white/30 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-[1px]"
                  >
                    Read the docs
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.12} y={28}>
                <div className="overflow-hidden rounded-xl border border-white/10 bg-[#101012]">
                  <Image
                    src={heroImage}
                    alt="Stacked panes of smoked glass, each one catching a different edge of light"
                    priority
                    placeholder="blur"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations band. Marks only, no category labels. */}
      <section className="border-b border-white/8">
        <div className={`${shell} py-12`}>
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-16">
            <p className="max-w-[30ch] shrink-0 text-[14px] leading-relaxed text-zinc-500">
              Reads from and writes to the tools already open on your machine.
            </p>
            <ul className="flex flex-wrap items-center gap-x-10 gap-y-6">
              {integrations.map((brand) => (
                <li key={brand.slug}>
                  {/* Remote single-colour SVG: next/image would need SVG opt-in for no gain. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={iconUrl(brand.slug, "d4d4d8")}
                    alt={brand.name}
                    width={24}
                    height={24}
                    loading="lazy"
                    className="h-6 w-6 opacity-55 transition-opacity hover:opacity-100"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bento: four items, four cells, no empty tiles. */}
      <section id="capabilities" className="border-b border-white/8">
        <div className={`${shell} py-24 lg:py-32`}>
          <Reveal>
            <h2 className="max-w-[24ch] text-[2rem] leading-[1.1] font-medium tracking-[-0.03em] text-white sm:text-[2.5rem]">
              What you get for filing nothing
            </h2>
            <p className="mt-5 max-w-[58ch] text-[16px] leading-relaxed text-zinc-400">
              Structure is a byproduct here, not homework. You write, and the
              shape of what you know assembles itself underneath.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-3 md:grid-rows-2">
            {/* Cell 1: image */}
            <Reveal className="md:col-span-2" y={24}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#101012]">
                <div className="relative aspect-[16/7] w-full">
                  <Image
                    src={linksImage}
                    alt="Two dark glass panes meeting, a single line of green light along the shared edge"
                    fill
                    placeholder="blur"
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-[17px] font-medium text-white">
                    {capabilities[0].title}
                  </h3>
                  <p className="mt-2.5 max-w-[46ch] text-[14.5px] leading-relaxed text-zinc-400">
                    {capabilities[0].body}
                  </p>
                </div>
              </article>
            </Reveal>

            {/* Cell 2: tall, accent wash */}
            <Reveal className="md:row-span-2" delay={0.06} y={24}>
              <article className="relative flex h-full flex-col justify-end overflow-hidden rounded-xl border border-emerald-400/20 bg-[#0d1512] p-7">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_80%_0%,rgba(52,211,153,0.22),transparent_62%)]"
                />
                <div className="relative">
                  <h3 className="text-[17px] font-medium text-white">
                    {capabilities[1].title}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-zinc-300">
                    {capabilities[1].body}
                  </p>
                </div>
              </article>
            </Reveal>

            {/* Cell 3: textured */}
            <Reveal delay={0.12} y={24}>
              <article className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-[#101012] p-7">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:radial-gradient(rgba(255,255,255,0.11)_1px,transparent_1px)] [background-size:14px_14px]"
                />
                <div className="relative">
                  <h3 className="text-[17px] font-medium text-white">
                    {capabilities[2].title}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-zinc-400">
                    {capabilities[2].body}
                  </p>
                </div>
              </article>
            </Reveal>

            {/* Cell 4 */}
            <Reveal delay={0.18} y={24}>
              <article className="h-full rounded-xl border border-white/10 bg-[#101012] p-7">
                <h3 className="text-[17px] font-medium text-white">
                  {capabilities[3].title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-zinc-400">
                  {capabilities[3].body}
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Split: image left, copy right. */}
      <section id="local" className="border-b border-white/8">
        <div className={`${shell} py-24 lg:py-32`}>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal y={24}>
              <div className="overflow-hidden rounded-xl border border-white/10">
                <Image
                  src={localImage}
                  alt="A steel drawer half open on a dense block of filed cards"
                  placeholder="blur"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="max-w-[22ch] text-[2rem] leading-[1.1] font-medium tracking-[-0.03em] text-white sm:text-[2.5rem]">
                Plain files, on a disk you own
              </h2>
              <p className="mt-5 max-w-[50ch] text-[16px] leading-relaxed text-zinc-400">
                Every note is a Markdown file in a folder you chose. Tessera is
                a reader of that folder, not a landlord.
              </p>
              <ul className="mt-9 flex flex-col gap-5">
                {[
                  {
                    Icon: FolderOpenIcon,
                    text: "Open the same notes in any editor, today or in ten years.",
                  },
                  {
                    Icon: AirplaneTiltIcon,
                    text: "Full search and linking with the network switched off.",
                  },
                  {
                    Icon: LockKeyIcon,
                    text: "Sync is end-to-end encrypted, and entirely optional.",
                  },
                ].map(({ Icon, text }) => (
                  <li key={text} className="flex items-start gap-3.5">
                    <Icon
                      size={19}
                      weight="regular"
                      className="mt-px shrink-0 text-emerald-400"
                    />
                    <span className="text-[15px] leading-relaxed text-zinc-300">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Full-width statement. */}
      <section className="border-b border-white/8">
        <div className={`${shell} py-28 lg:py-36`}>
          <Reveal>
            <p className="mx-auto max-w-[26ch] text-center text-[2rem] leading-[1.15] font-medium tracking-[-0.03em] text-white sm:text-[2.75rem]">
              Nobody ever organised their way to an idea.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Two quotes, hairline between, no cards. */}
      <section className="border-b border-white/8">
        <div className={`${shell} py-24 lg:py-28`}>
          <div className="grid gap-12 md:grid-cols-2 md:gap-0">
            {[
              {
                quote:
                  "I stopped organising and started writing. The backlinks did the filing for me.",
                name: "Priya Raghunathan",
                role: "Staff engineer, Kestrel Robotics",
              },
              {
                quote:
                  "Six years of reading notes finally talk to each other.",
                name: "Tobias Lindqvist",
                role: "Research lead, Verso Health",
              },
            ].map((item, index) => (
              <Reveal
                key={item.name}
                delay={index * 0.08}
                className={
                  index === 1
                    ? "md:border-l md:border-white/8 md:pl-14"
                    : "md:pr-14"
                }
              >
                <blockquote className="text-[19px] leading-[1.5] font-medium tracking-[-0.01em] text-zinc-200 sm:text-[21px]">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <footer className="mt-6">
                  <p className="text-[14.5px] font-medium text-zinc-100">
                    {item.name}
                  </p>
                  <p className="mt-0.5 text-[13.5px] text-zinc-500">
                    {item.role}
                  </p>
                </footer>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing: two tiers, asymmetric split. */}
      <section id="pricing" className="border-b border-white/8">
        <div className={`${shell} py-24 lg:py-32`}>
          <Reveal>
            <h2 className="text-[2rem] leading-[1.1] font-medium tracking-[-0.03em] text-white sm:text-[2.5rem]">
              Two plans
            </h2>
            <p className="mt-5 max-w-[52ch] text-[16px] leading-relaxed text-zinc-400">
              The free plan is not a countdown. It is the whole app on one
              machine, for as long as you want it.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 lg:grid-cols-12">
            <Reveal className="lg:col-span-5" y={24}>
              <div className="flex h-full flex-col rounded-xl border border-white/10 bg-[#101012] p-8">
                <h3 className="text-[15px] font-medium text-zinc-300">Solo</h3>
                <p className="mt-5 font-mono text-[2.25rem] leading-none tracking-tight text-white">
                  $0
                </p>
                <p className="mt-4 text-[14.5px] leading-relaxed text-zinc-400">
                  One machine, unlimited notes, every link and search feature.
                </p>
                <a
                  href="#start"
                  className="mt-8 inline-flex h-11 items-center justify-center rounded-lg border border-white/15 px-5 text-[15px] font-medium whitespace-nowrap text-zinc-100 transition-colors hover:border-white/30 hover:bg-white/5 active:translate-y-[1px]"
                >
                  Start free
                </a>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.08} y={24}>
              <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-emerald-400/25 bg-[#0d1512] p-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_70%_at_100%_0%,rgba(52,211,153,0.16),transparent_60%)]"
                />
                <div className="relative flex h-full flex-col">
                  <h3 className="text-[15px] font-medium text-emerald-300">
                    Everywhere
                  </h3>
                  <p className="mt-5 font-mono text-[2.25rem] leading-none tracking-tight text-white">
                    $8
                    <span className="ml-2 align-middle font-sans text-[14px] font-normal tracking-normal text-zinc-400">
                      per month
                    </span>
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "Encrypted sync, every device",
                      "Resurfacing while you draft",
                      "Shared vaults with a team",
                      "Version history by the day",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckIcon
                          size={15}
                          weight="bold"
                          className="mt-1 shrink-0 text-emerald-400"
                        />
                        <span className="text-[14.5px] leading-relaxed text-zinc-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <a
                      href="#start"
                      className="inline-flex h-11 items-center gap-2 rounded-lg bg-emerald-400 px-5 text-[15px] font-semibold whitespace-nowrap text-[#06130d] transition-[transform,background-color] hover:bg-emerald-300 active:translate-y-[1px]"
                    >
                      Start free
                      <ArrowRightIcon size={15} weight="bold" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing CTA with a real form. */}
      <section id="start">
        <div className={`${shell} py-24 lg:py-32`}>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-6">
              <h2 className="max-w-[20ch] text-[2rem] leading-[1.1] font-medium tracking-[-0.03em] text-white sm:text-[2.5rem]">
                Start with the notes you already have
              </h2>
              <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-zinc-400">
                Point Tessera at a folder of Markdown. It indexes in seconds and
                changes nothing on disk.
              </p>
            </Reveal>
            <Reveal className="lg:col-span-6 lg:pt-2" delay={0.08}>
              <SignupForm />
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/8">
        <div
          className={`${shell} flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between`}
        >
          <Link
            href="/1"
            className="flex items-center gap-2.5 text-[14px] font-medium tracking-tight text-zinc-300"
          >
            <TesseraMark size={14} className="text-emerald-400" />
            Tessera
          </Link>
          <nav className="flex flex-wrap gap-x-7 gap-y-3 text-[13.5px] text-zinc-500">
            <a className="transition-colors hover:text-zinc-200" href="#capabilities">
              How it works
            </a>
            <a className="transition-colors hover:text-zinc-200" href="#local">
              Local-first
            </a>
            <a className="transition-colors hover:text-zinc-200" href="#pricing">
              Pricing
            </a>
            <a className="transition-colors hover:text-zinc-200" href="#start">
              Support
            </a>
          </nav>
          <p className="text-[13px] text-zinc-600">Tessera Labs, 2026</p>
        </div>
      </footer>
    </div>
  );
}
