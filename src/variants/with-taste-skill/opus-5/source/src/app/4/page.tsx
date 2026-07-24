import Image from "next/image";
import Link from "next/link";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/variants/with-taste-skill/opus-5/source/src/components/reveal";
import { TesseraMark } from "@/variants/with-taste-skill/opus-5/source/src/components/tessera-mark";
import { integrations, iconUrl } from "@/variants/with-taste-skill/opus-5/source/src/lib/integrations";
import { MagneticCta } from "./_components/magnetic-cta";
import { SignupForm } from "./_components/signup-form";
import { StickyStack, type StackCard } from "./_components/sticky-stack";
import heroImage from "@/variants/with-taste-skill/opus-5/source/src/assets/img/iter4-hero.png";
import lightImage from "@/variants/with-taste-skill/opus-5/source/src/assets/img/iter4-light.png";
import curtainImage from "@/variants/with-taste-skill/opus-5/source/src/assets/img/iter4-curtain.png";
import stonesImage from "@/variants/with-taste-skill/opus-5/source/src/assets/img/iter4-stones.png";

/*
  Iteration 04 "Atlas" - premium consumer calm.
  DESIGN_VARIANCE 7 / MOTION_INTENSITY 7 / VISUAL_DENSITY 3.
  Theme lock: light. Accent lock: cobalt #2549e0.
  Shape lock, documented: interactive is full pill, surfaces 24px, chips 12px.
*/

const shell = "mx-auto w-full max-w-[1320px] px-6 lg:px-10";

const story: StackCard[] = [
  {
    heading: "Put it down anywhere",
    body: "One shortcut over whatever you are reading, an address you can forward to, a button in the browser. Tessera takes the note exactly as it arrives and asks you nothing.",
    image: lightImage,
    alt: "Cool morning light crossing a plaster wall and the rounded corner of an oak surface",
  },
  {
    heading: "Let it find its own place",
    body: "Mention a person, a paper, a half-formed idea. The link appears at both ends and stays true as the note changes around it. You never open a folder tree.",
    image: curtainImage,
    alt: "Pale linen curtain diffusing cool blue daylight into soft gradients",
  },
  {
    heading: "Get it back when it counts",
    body: "Months later you start a draft on the same subject. The notes that belong to it are already sitting beside you, in the order they matter.",
    image: stonesImage,
    alt: "Three smooth pale river stones laid in a line on an off-white surface",
  },
];

export default function AtlasPage() {
  return (
    <div className="relative min-h-[100dvh] overflow-x-clip bg-[#f6f7f9] font-[family-name:var(--font-manrope)] text-[#0f141a] selection:bg-[#2549e0]/18">
      {/* Cobalt light behind the top of the page. Brand colour, not a stock mesh. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[820px] bg-[radial-gradient(90%_60%_at_78%_-5%,rgba(37,73,224,0.20),transparent_58%),radial-gradient(70%_50%_at_10%_5%,rgba(37,73,224,0.08),transparent_60%)]"
      />

      <header className="sticky top-0 z-50 pt-4">
        <div className={shell}>
          <div className="glass flex h-16 items-center justify-between gap-6 rounded-full pr-2 pl-6">
            <Link
              href="/4"
              className="flex items-center gap-2.5 font-[family-name:var(--font-outfit)] text-[16px] font-medium tracking-tight"
            >
              <TesseraMark size={16} className="text-[#2549e0]" />
              Tessera
            </Link>
            <nav className="hidden items-center gap-8 text-[14px] text-[#586274] md:flex">
              <a href="#story" className="transition-colors hover:text-[#2549e0]">
                How it works
              </a>
              <a href="#details" className="transition-colors hover:text-[#2549e0]">
                Details
              </a>
              <a href="#pricing" className="transition-colors hover:text-[#2549e0]">
                Pricing
              </a>
            </nav>
            <a
              href="#start"
              className="inline-flex h-11 items-center rounded-full bg-[#2549e0] px-5 text-[14px] font-semibold whitespace-nowrap text-white shadow-[0_12px_28px_-12px_rgba(37,73,224,0.6)] transition-[transform,background-color] hover:bg-[#1d3cc4] active:scale-[0.98]"
            >
              Start free
            </a>
          </div>
        </div>
      </header>

      {/* Hero: asymmetric split, plate held in glass. */}
      <section className="relative">
        <div className={shell}>
          <div className="grid items-center gap-12 pt-14 pb-20 lg:grid-cols-12 lg:gap-14 lg:pt-24 lg:pb-28">
            <div className="lg:col-span-6">
              <Reveal>
                <h1 className="max-w-[15ch] font-[family-name:var(--font-outfit)] text-[2.75rem] leading-[1.03] font-medium tracking-[-0.035em] sm:text-[3.5rem] lg:text-[4.1rem]">
                  Everything you meant to remember
                </h1>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-7 max-w-[48ch] text-[17px] leading-relaxed text-[#586274]">
                  Tessera holds your notes and the links between them, so nothing
                  needs filing and nothing gets lost.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <MagneticCta href="#start">Start free</MagneticCta>
                  <a
                    href="#story"
                    className="inline-flex h-13 items-center rounded-full border border-[#c9d1de] bg-white/60 px-7 text-[15px] font-semibold whitespace-nowrap text-[#0f141a] transition-colors hover:border-[#9aa7bd] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#2549e0] active:scale-[0.98]"
                  >
                    Watch the tour
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.12} y={30}>
                <div className="glass overflow-hidden rounded-3xl p-2">
                  <Image
                    src={heroImage}
                    alt="A bare oak desk beside a tall window, one closed notebook and a glass of water in cold morning light"
                    priority
                    placeholder="blur"
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="w-full rounded-[1.15rem] object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Integration band. */}
      <section className="relative">
        <div className={shell}>
          <div className="flex flex-col items-start gap-7 border-t border-[#dfe4ec] py-12 lg:flex-row lg:items-center lg:gap-16">
            <p className="max-w-[28ch] shrink-0 text-[14px] leading-relaxed text-[#6b7688]">
              Reads from and writes to the places your thinking already lives.
            </p>
            <ul className="flex flex-wrap items-center gap-x-10 gap-y-6">
              {integrations.map((brand) => (
                <li key={brand.slug}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={iconUrl(brand.slug, "3b4759")}
                    alt={brand.name}
                    width={24}
                    height={24}
                    loading="lazy"
                    className="h-6 w-6 opacity-40 transition-opacity hover:opacity-85"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sticky pile: three cards, one story, told in order. */}
      <section id="story" className="relative">
        {/* Gives the frosted cards something to actually refract as they pile up. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(60%_38%_at_15%_18%,rgba(37,73,224,0.14),transparent_60%),radial-gradient(55%_35%_at_90%_62%,rgba(37,73,224,0.11),transparent_62%)]"
        />
        <div className={`${shell} pt-20 lg:pt-28`}>
          <Reveal>
            <h2 className="max-w-[24ch] font-[family-name:var(--font-outfit)] text-[2.1rem] leading-[1.08] font-medium tracking-[-0.03em] sm:text-[2.75rem]">
              Three motions, and the last one is the point
            </h2>
            <p className="mt-6 max-w-[54ch] text-[16.5px] leading-relaxed text-[#586274]">
              Most tools are good at the first. Tessera is built for what happens
              a year after you wrote something down.
            </p>
          </Reveal>
        </div>
        <div className={`${shell} pt-14 pb-20 lg:pb-28`}>
          <StickyStack cards={story} />
        </div>
      </section>

      {/* Bento: five items, five cells. */}
      <section id="details" className="relative">
        <div className={`${shell} pb-20 lg:pb-28`}>
          <Reveal>
            <h2 className="max-w-[20ch] font-[family-name:var(--font-outfit)] text-[2.1rem] leading-[1.08] font-medium tracking-[-0.03em] sm:text-[2.5rem]">
              The rest of the details
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <Reveal className="md:col-span-2" y={24}>
              <article className="glass flex h-full flex-col overflow-hidden rounded-3xl">
                <div className="relative aspect-[16/7] w-full">
                  <Image
                    src={curtainImage}
                    alt="Cool daylight filtered through pale linen"
                    placeholder="blur"
                    fill
                    sizes="(min-width: 768px) 62vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-[family-name:var(--font-outfit)] text-[19px] font-medium">
                    Search that reads for meaning
                  </h3>
                  <p className="mt-2.5 max-w-[46ch] text-[14.5px] leading-relaxed text-[#586274]">
                    Describe the argument you half remember. Tessera finds the
                    note without the exact words in it.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.06} y={24}>
              <article className="flex h-full flex-col justify-end rounded-3xl bg-[#2549e0] p-8 text-white shadow-[0_24px_60px_-24px_rgba(37,73,224,0.5)]">
                <h3 className="font-[family-name:var(--font-outfit)] text-[19px] font-medium">
                  Works with the network off
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/85">
                  Full search, full linking, on a plane. Sync catches up when you
                  land.
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.12} y={24}>
              <article className="glass flex h-full flex-col overflow-hidden rounded-3xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={stonesImage}
                    alt="Three pale river stones on an off-white surface"
                    placeholder="blur"
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-[family-name:var(--font-outfit)] text-[19px] font-medium">
                    Plain Markdown, your disk
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-[#586274]">
                    A folder you chose, readable without us, today or in ten
                    years.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.18} y={24}>
              <article className="glass h-full rounded-3xl p-8">
                <h3 className="font-[family-name:var(--font-outfit)] text-[19px] font-medium">
                  Encrypted end to end
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-[#586274]">
                  Keys stay on your devices. We hold ciphertext and nothing that
                  reads.
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.24} y={24}>
              <article className="glass h-full rounded-3xl p-8">
                <h3 className="font-[family-name:var(--font-outfit)] text-[19px] font-medium">
                  Vaults you can share
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-[#586274]">
                  Invite two people or a department. Links resolve across all of
                  it.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* One quote, centred. */}
      <section className="relative">
        <div className={`${shell} border-t border-[#dfe4ec] py-20 lg:py-28`}>
          <Reveal>
            <blockquote className="mx-auto max-w-[30ch] text-center font-[family-name:var(--font-outfit)] text-[1.9rem] leading-[1.22] font-medium tracking-[-0.025em] sm:text-[2.4rem]">
              &ldquo;I stopped organising and started writing. The backlinks did
              the filing for me.&rdquo;
            </blockquote>
            <footer className="mt-8 text-center">
              <p className="text-[15px] font-semibold">Priya Raghunathan</p>
              <p className="mt-1 text-[14px] text-[#6b7688]">
                Staff engineer, Kestrel Robotics
              </p>
            </footer>
          </Reveal>
        </div>
      </section>

      {/* Pricing: two tiers, uneven split. */}
      <section id="pricing" className="relative">
        <div className={`${shell} pb-20 lg:pb-28`}>
          <Reveal>
            <h2 className="font-[family-name:var(--font-outfit)] text-[2.1rem] leading-[1.08] font-medium tracking-[-0.03em] sm:text-[2.5rem]">
              Two plans
            </h2>
            <p className="mt-6 max-w-[50ch] text-[16.5px] leading-relaxed text-[#586274]">
              The free plan is the whole app on one machine, with no clock
              running on it.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-12">
            <Reveal className="lg:col-span-5" y={24}>
              <div className="glass flex h-full flex-col rounded-3xl p-9">
                <h3 className="text-[14px] font-semibold text-[#6b7688]">Solo</h3>
                <p className="mt-6 font-[family-name:var(--font-outfit)] text-[3rem] leading-none font-medium tracking-tight">
                  Free
                </p>
                <p className="mt-5 max-w-[32ch] text-[14.5px] leading-relaxed text-[#586274]">
                  One machine, unlimited notes, every link and every search
                  feature.
                </p>
                <div className="mt-auto pt-9">
                  <a
                    href="#start"
                    className="inline-flex h-12 items-center rounded-full border border-[#c9d1de] bg-white/70 px-6 text-[14.5px] font-semibold whitespace-nowrap transition-colors hover:border-[#9aa7bd] hover:bg-white active:scale-[0.98]"
                  >
                    Start free
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.08} y={24}>
              <div className="flex h-full flex-col rounded-3xl bg-[#0f141a] p-9 text-white shadow-[0_30px_70px_-30px_rgba(15,20,26,0.6)]">
                <h3 className="text-[14px] font-semibold text-[#8fa5ff]">
                  Everywhere
                </h3>
                <p className="mt-6 font-[family-name:var(--font-outfit)] text-[3rem] leading-none font-medium tracking-tight">
                  $8
                  <span className="ml-3 align-middle text-[15px] font-normal tracking-normal text-white/60">
                    per month
                  </span>
                </p>
                <ul className="mt-7 grid gap-3.5 sm:grid-cols-2">
                  {[
                    "Encrypted sync, every device",
                    "Notes resurfaced while you draft",
                    "Shared vaults with a team",
                    "Version history by the day",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckIcon
                        size={15}
                        weight="bold"
                        className="mt-1 shrink-0 text-[#8fa5ff]"
                      />
                      <span className="text-[14.5px] leading-relaxed text-white/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-9">
                  <a
                    href="#start"
                    className="inline-flex h-12 items-center rounded-full bg-white px-6 text-[14.5px] font-semibold whitespace-nowrap text-[#0f141a] transition-colors hover:bg-[#e6eaf2] active:scale-[0.98]"
                  >
                    Start free
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing CTA. */}
      <section id="start" className="relative">
        <div className={`${shell} border-t border-[#dfe4ec] py-20 lg:py-28`}>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-6">
              <h2 className="max-w-[18ch] font-[family-name:var(--font-outfit)] text-[2.1rem] leading-[1.08] font-medium tracking-[-0.03em] sm:text-[2.75rem]">
                Begin with the notes you already have
              </h2>
              <p className="mt-6 max-w-[42ch] text-[16.5px] leading-relaxed text-[#586274]">
                Point Tessera at a folder of Markdown. It reads in seconds and
                changes nothing on disk.
              </p>
            </Reveal>
            <Reveal className="lg:col-span-6 lg:pt-2" delay={0.08}>
              <SignupForm />
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-[#dfe4ec]">
        <div
          className={`${shell} flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between`}
        >
          <Link
            href="/4"
            className="flex items-center gap-2.5 font-[family-name:var(--font-outfit)] text-[15px] font-medium tracking-tight"
          >
            <TesseraMark size={14} className="text-[#2549e0]" />
            Tessera
          </Link>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[13.5px] text-[#6b7688]">
            <a className="transition-colors hover:text-[#2549e0]" href="#story">
              How it works
            </a>
            <a className="transition-colors hover:text-[#2549e0]" href="#details">
              Details
            </a>
            <a className="transition-colors hover:text-[#2549e0]" href="#pricing">
              Pricing
            </a>
            <a className="transition-colors hover:text-[#2549e0]" href="#start">
              Support
            </a>
          </nav>
          <p className="text-[13px] text-[#8b95a6]">Tessera Labs, 2026</p>
        </div>
      </footer>
    </div>
  );
}
