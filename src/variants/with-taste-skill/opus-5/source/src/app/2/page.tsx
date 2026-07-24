import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/variants/with-taste-skill/opus-5/source/src/components/reveal";
import { integrations, iconUrl } from "@/variants/with-taste-skill/opus-5/source/src/lib/integrations";
import { SignupForm } from "./_components/signup-form";
import heroImage from "@/variants/with-taste-skill/opus-5/source/src/assets/img/iter2-hero.png";
import slipsImage from "@/variants/with-taste-skill/opus-5/source/src/assets/img/iter2-slips.png";
import catalogImage from "@/variants/with-taste-skill/opus-5/source/src/assets/img/iter2-catalog.png";

/*
  Iteration 02 "Commonplace" - print editorial.
  DESIGN_VARIANCE 6 / MOTION_INTENSITY 4 / VISUAL_DENSITY 3.
  Theme lock: light. Accent lock: brick #a83a2c. Shape lock: radius 0 everywhere.
*/

const shell = "mx-auto w-full max-w-[1240px] px-6 lg:px-10";

const index = [
  {
    cluster: "Getting it down",
    items: [
      ["A key away", "One shortcut opens a blank note over whatever you are reading."],
      ["Send it by mail", "Every vault has an address. Forward and forget."],
      ["Clip the page", "Keep the paragraph and the citation, not the whole tab."],
      ["Speak it", "Voice notes arrive transcribed and already linked."],
    ],
  },
  {
    cluster: "Finding it again",
    items: [
      ["Links both ways", "Name a note and the mention appears at the other end."],
      ["Search by sense", "Describe the argument. The words need not match."],
      ["Returns while you write", "Old notes rise to meet the draft in front of you."],
    ],
  },
  {
    cluster: "Keeping it yours",
    items: [
      ["Markdown on disk", "A folder of text files you can read without us."],
      ["Offline first", "Everything works with the network switched off."],
      ["Encrypted, optional sync", "Turn it on per device, or never."],
    ],
  },
];

export default function CommonplacePage() {
  return (
    <div className="min-h-[100dvh] bg-[#f2f2f0] font-tight text-[#17191b] selection:bg-[#a83a2c]/18">
      {/* Paper texture. Fixed and inert so it never repaints on scroll. */}
      <div
        aria-hidden="true"
        className="grain-overlay pointer-events-none fixed inset-0 z-50 opacity-[0.035] mix-blend-multiply"
      />

      <header className="border-b border-[#d6d6d0]">
        <div className={`${shell} flex h-[72px] items-center justify-between gap-8`}>
          <Link
            href="/2"
            className="font-garamond text-[26px] leading-none tracking-[-0.01em]"
          >
            Tessera
          </Link>
          <nav className="hidden items-center gap-9 text-[14px] text-[#5c6063] md:flex">
            <a href="#index" className="transition-colors hover:text-[#a83a2c]">
              What it does
            </a>
            <a href="#reading" className="transition-colors hover:text-[#a83a2c]">
              How it reads
            </a>
            <a href="#yours" className="transition-colors hover:text-[#a83a2c]">
              Your files
            </a>
          </nav>
          <a
            href="#start"
            className="inline-flex h-10 items-center bg-[#17191b] px-5 text-[13.5px] font-medium whitespace-nowrap text-white transition-[transform,background-color] hover:bg-[#a83a2c] active:translate-y-[1px]"
          >
            Start free
          </a>
        </div>
      </header>

      {/* Hero: asymmetric 7/5 with a tall portrait plate. */}
      <section className="border-b border-[#d6d6d0]">
        <div className={shell}>
          <div className="grid items-center gap-12 pt-14 pb-20 lg:grid-cols-12 lg:gap-16 lg:pt-24 lg:pb-28">
            <div className="lg:col-span-7">
              <Reveal>
                {/* leading-[1.1] plus bottom reserve keeps the italic clear of clipping */}
                <h1 className="max-w-[17ch] pb-1 font-garamond text-[3rem] leading-[1.08] tracking-[-0.015em] sm:text-[4rem] lg:text-[4.5rem]">
                  A place to keep what you <em className="italic">notice</em>.
                </h1>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-7 max-w-[50ch] text-[17px] leading-[1.65] text-[#4d5154]">
                  A commonplace book that remembers the connections you were too
                  busy to make.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <a
                    href="#start"
                    className="inline-flex h-12 items-center bg-[#a83a2c] px-7 text-[14.5px] font-medium whitespace-nowrap text-white transition-[transform,background-color] hover:bg-[#8f2f22] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a83a2c] active:translate-y-[1px]"
                  >
                    Start free
                  </a>
                  <a
                    href="#index"
                    className="border-b border-[#17191b]/30 pb-0.5 text-[14.5px] font-medium whitespace-nowrap text-[#17191b] transition-colors hover:border-[#a83a2c] hover:text-[#a83a2c]"
                  >
                    Read a sample vault
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.12} y={26}>
                <Image
                  src={heroImage}
                  alt="An open notebook filled edge to edge with handwriting, a red ribbon marking a page"
                  priority
                  placeholder="blur"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="w-full border border-[#d6d6d0] object-cover"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Integration band. Marks only. */}
      <section className="border-b border-[#d6d6d0] bg-[#ecece8]">
        <div className={`${shell} py-10`}>
          <div className="flex flex-col items-start gap-7 lg:flex-row lg:items-center lg:gap-14">
            <p className="max-w-[28ch] shrink-0 text-[13.5px] leading-relaxed text-[#5c6063]">
              Takes what you already read and write elsewhere.
            </p>
            <ul className="flex flex-wrap items-center gap-x-9 gap-y-5">
              {integrations.map((brand) => (
                <li key={brand.slug}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={iconUrl(brand.slug, "17191b")}
                    alt={brand.name}
                    width={22}
                    height={22}
                    loading="lazy"
                    className="h-[22px] w-[22px] opacity-45 transition-opacity hover:opacity-90"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* The index: clustered, one rule per cluster rather than per row. */}
      <section id="index" className="border-b border-[#d6d6d0]">
        <div className={`${shell} py-20 lg:py-28`}>
          <Reveal>
            <h2 className="max-w-[22ch] font-garamond text-[2.25rem] leading-[1.12] tracking-[-0.01em] sm:text-[3rem]">
              Everything it does, in one page
            </h2>
            <p className="mt-6 max-w-[58ch] text-[16px] leading-[1.65] text-[#4d5154]">
              Nothing here needs configuring before it earns its keep. The rest
              of the product is getting out of the way.
            </p>
          </Reveal>

          <div className="mt-16 flex flex-col gap-14">
            {index.map((group, groupIndex) => (
              <Reveal key={group.cluster} delay={groupIndex * 0.06}>
                <div
                  className={`grid gap-8 lg:grid-cols-12 lg:gap-12 ${
                    groupIndex > 0 ? "border-t border-[#d6d6d0] pt-14" : ""
                  }`}
                >
                  <h3 className="font-garamond text-[1.6rem] leading-tight text-[#a83a2c] lg:col-span-3">
                    {group.cluster}
                  </h3>
                  <dl className="grid gap-x-12 gap-y-7 sm:grid-cols-2 lg:col-span-9">
                    {group.items.map(([term, gloss]) => (
                      <div key={term}>
                        <dt className="font-garamond text-[1.3rem] leading-snug">
                          {term}
                        </dt>
                        <dd className="mt-1.5 max-w-[42ch] text-[14.5px] leading-relaxed text-[#5c6063]">
                          {gloss}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed plate, caption below and outside the image. */}
      <section className="border-b border-[#d6d6d0]">
        <Reveal y={0}>
          <div className="relative aspect-[16/7] w-full">
            <Image
              src={slipsImage}
              alt="A fan of aged paper slips on grey linen, tied loosely together by a red thread"
              placeholder="blur"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <div className={`${shell} py-5`}>
          <p className="text-[13px] text-[#5c6063]">
            Loose notes, before anyone decided where they belonged.
          </p>
        </div>
      </section>

      {/* Pull quote. One, short. */}
      <section className="border-b border-[#d6d6d0] bg-[#ecece8]">
        <div className={`${shell} py-20 lg:py-28`}>
          <Reveal>
            <blockquote className="mx-auto max-w-[34ch] text-center font-garamond text-[2rem] leading-[1.25] tracking-[-0.01em] sm:text-[2.6rem]">
              &ldquo;It gave me back a note from 2021 while I was drafting. That
              paragraph became the chapter.&rdquo;
            </blockquote>
            <footer className="mt-8 text-center">
              <p className="text-[14.5px] font-medium">Naomi Okafor</p>
              <p className="mt-1 text-[13.5px] text-[#5c6063]">
                Author, and lecturer at Ashgrove Press
              </p>
            </footer>
          </Reveal>
        </div>
      </section>

      {/* Three columns, vertical rules, verb headings and no step numbers. */}
      <section id="reading" className="border-b border-[#d6d6d0]">
        <div className={`${shell} py-20 lg:py-28`}>
          <Reveal>
            <h2 className="max-w-[24ch] font-garamond text-[2.25rem] leading-[1.12] tracking-[-0.01em] sm:text-[2.75rem]">
              The whole method, three verbs long
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-0">
            {[
              {
                verb: "Capture",
                body: "Write the thought where you had it. No folder prompt, no title, no tags. Tessera takes the note as it comes and reads it later.",
              },
              {
                verb: "Connect",
                body: "Mention a person, a paper, an idea. Tessera makes the link in both directions and keeps it accurate as the note changes.",
              },
              {
                verb: "Return",
                body: "Months on, start a new draft. The notes that belong to it appear beside you, in the order they matter.",
              },
            ].map((step, stepIndex) => (
              <Reveal
                key={step.verb}
                delay={stepIndex * 0.08}
                className={
                  stepIndex === 0
                    ? "md:pr-10"
                    : "md:border-l md:border-[#d6d6d0] md:px-10"
                }
              >
                <h3 className="font-garamond text-[1.75rem] leading-none">
                  {step.verb}
                </h3>
                <p className="mt-4 max-w-[38ch] text-[15px] leading-[1.7] text-[#4d5154]">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Split: plate left, copy right. */}
      <section id="yours" className="border-b border-[#d6d6d0]">
        <div className={`${shell} py-20 lg:py-28`}>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal y={24}>
              <Image
                src={catalogImage}
                alt="A painted wooden card catalogue with one drawer drawn out on a block of filed cards"
                placeholder="blur"
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="w-full border border-[#d6d6d0] object-cover"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="max-w-[20ch] font-garamond text-[2.25rem] leading-[1.12] tracking-[-0.01em] sm:text-[2.75rem]">
                The drawer stays in your house
              </h2>
              <p className="mt-6 max-w-[46ch] text-[16px] leading-[1.7] text-[#4d5154]">
                Your vault is a folder of Markdown files on a disk you chose.
                Tessera reads that folder. It does not own it, and it cannot
                keep it.
              </p>
              <p className="mt-5 max-w-[46ch] text-[16px] leading-[1.7] text-[#4d5154]">
                Leave whenever you like. The notes are already in a format that
                outlives us both.
              </p>
              <a
                href="#start"
                className="mt-8 inline-block border-b border-[#17191b]/30 pb-0.5 text-[14.5px] font-medium whitespace-nowrap transition-colors hover:border-[#a83a2c] hover:text-[#a83a2c]"
              >
                Read the file format notes
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing CTA with the form. */}
      <section id="start" className="border-b border-[#d6d6d0] bg-[#ecece8]">
        <div className={`${shell} py-20 lg:py-28`}>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-6">
              <h2 className="max-w-[18ch] font-garamond text-[2.25rem] leading-[1.12] tracking-[-0.01em] sm:text-[3rem]">
                Begin with an empty folder
              </h2>
              <p className="mt-6 max-w-[44ch] text-[16px] leading-[1.7] text-[#4d5154]">
                Or point Tessera at the notes you already keep. It indexes them
                in seconds and changes nothing on disk.
              </p>
            </Reveal>
            <Reveal className="lg:col-span-6 lg:pt-3" delay={0.08}>
              <SignupForm />
            </Reveal>
          </div>
        </div>
      </section>

      <footer>
        <div
          className={`${shell} flex flex-col gap-8 py-10 sm:flex-row sm:items-baseline sm:justify-between`}
        >
          <Link href="/2" className="font-garamond text-[22px] leading-none">
            Tessera
          </Link>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[13.5px] text-[#5c6063]">
            <a className="transition-colors hover:text-[#a83a2c]" href="#index">
              What it does
            </a>
            <a className="transition-colors hover:text-[#a83a2c]" href="#reading">
              How it reads
            </a>
            <a className="transition-colors hover:text-[#a83a2c]" href="#yours">
              Your files
            </a>
            <a className="transition-colors hover:text-[#a83a2c]" href="#start">
              Support
            </a>
          </nav>
          <p className="text-[13px] text-[#84888b]">Tessera Labs, 2026</p>
        </div>
      </footer>
    </div>
  );
}
