import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/variants/with-taste-skill/opus-5/source/src/components/reveal";
import { integrations, iconUrl } from "@/variants/with-taste-skill/opus-5/source/src/lib/integrations";
import { SignupForm } from "./_components/signup-form";
import heroImage from "@/variants/with-taste-skill/opus-5/source/src/assets/img/iter3-hero.png";
import stackImage from "@/variants/with-taste-skill/opus-5/source/src/assets/img/iter3-stack.png";
import rowImage from "@/variants/with-taste-skill/opus-5/source/src/assets/img/iter3-row.png";

/*
  Iteration 03 "Cardwall" - brutalist structural grid.
  DESIGN_VARIANCE 9 / MOTION_INTENSITY 5 / VISUAL_DENSITY 6.
  Theme lock: light. Accent lock: #d9330c. Shape lock: radius 0, hard 2px rules.
  Borders here are structure, not decoration: every rule encloses real content.
*/

const shell = "mx-auto w-full max-w-[1320px] px-5 lg:px-8";

const kept = [
  "Meeting notes",
  "Book passages",
  "Interview transcripts",
  "Code snippets",
  "Lecture notes",
  "Reading lists",
  "Half ideas",
  "Patient rounds",
  "Field observations",
  "Recipe tests",
];

export default function CardwallPage() {
  return (
    <div className="min-h-[100dvh] bg-[#e6e6e3] font-[family-name:var(--font-archivo)] text-[#141414] selection:bg-[#d9330c] selection:text-white">
      <header className="sticky top-0 z-50 border-b-2 border-[#141414] bg-[#e6e6e3]">
        <div className={`${shell} flex h-16 items-center justify-between gap-6`}>
          <Link
            href="/3"
            className="text-[19px] font-extrabold tracking-[-0.03em] uppercase"
          >
            Tessera
          </Link>
          <nav className="hidden items-center gap-7 font-jet text-[12px] tracking-wide md:flex">
            <a href="#grid" className="transition-colors hover:text-[#d9330c]">
              CAPABILITIES
            </a>
            <a href="#files" className="transition-colors hover:text-[#d9330c]">
              FILES
            </a>
            <a href="#pricing" className="transition-colors hover:text-[#d9330c]">
              PRICING
            </a>
          </nav>
          <a
            href="#start"
            className="inline-flex h-10 items-center border-2 border-[#141414] bg-[#d9330c] px-4 text-[13px] font-bold tracking-wide whitespace-nowrap text-white transition-transform hover:bg-[#141414] active:translate-y-[2px]"
          >
            START FREE
          </a>
        </div>
      </header>

      {/* Hero: 7/5, plate held in a hard frame. */}
      <section className="border-b-2 border-[#141414]">
        <div className={shell}>
          <div className="grid gap-10 pt-12 pb-16 lg:grid-cols-12 lg:gap-10 lg:pt-20 lg:pb-24">
            <div className="lg:col-span-7">
              <Reveal>
                <h1 className="max-w-[14ch] text-[2.75rem] leading-[0.94] font-extrabold tracking-[-0.045em] uppercase sm:text-[4rem] lg:text-[4.75rem]">
                  Pin everything. File nothing.
                </h1>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-7 max-w-[48ch] text-[16.5px] leading-relaxed text-[#3f3f3b]">
                  Tessera keeps the links between your notes so you never have to
                  invent a folder again.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="#start"
                    className="inline-flex h-13 items-center gap-2.5 border-2 border-[#141414] bg-[#d9330c] px-7 text-[14.5px] font-bold tracking-wide whitespace-nowrap text-white transition-transform hover:bg-[#141414] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141414] active:translate-y-[2px]"
                  >
                    START FREE
                    <ArrowRightIcon size={16} weight="bold" />
                  </a>
                  <a
                    href="#files"
                    className="inline-flex h-13 items-center border-2 border-[#141414] px-7 text-[14.5px] font-bold tracking-wide whitespace-nowrap transition-colors hover:bg-[#141414] hover:text-[#e6e6e3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141414] active:translate-y-[2px]"
                  >
                    READ THE SPEC
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.12} y={24}>
                <div className="border-2 border-[#141414]">
                  <Image
                    src={heroImage}
                    alt="A wall gridded with pinned blank cards, cut across by hard diagonal light"
                    priority
                    placeholder="blur"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Integration band. */}
      <section className="border-b-2 border-[#141414] bg-[#141414]">
        <div className={`${shell} py-7`}>
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-12">
            <p className="shrink-0 font-jet text-[11.5px] tracking-[0.18em] text-[#8a8a84]">
              READS AND WRITES
            </p>
            <ul className="flex flex-wrap items-center gap-x-9 gap-y-4">
              {integrations.map((brand) => (
                <li key={brand.slug}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={iconUrl(brand.slug, "e6e6e3")}
                    alt={brand.name}
                    width={22}
                    height={22}
                    loading="lazy"
                    className="h-[22px] w-[22px] opacity-50 transition-opacity hover:opacity-100"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Exposed grid: six items, six cells, uneven spans. */}
      <section id="grid" className="border-b-2 border-[#141414]">
        <div className={`${shell} py-16 lg:py-20`}>
          <Reveal>
            <h2 className="max-w-[20ch] text-[2rem] leading-[0.98] font-extrabold tracking-[-0.035em] uppercase sm:text-[2.75rem]">
              Six things, no settings
            </h2>
            <p className="mt-5 max-w-[54ch] text-[15.5px] leading-relaxed text-[#3f3f3b]">
              All of it on by default. There is no onboarding wizard because
              there is nothing to decide.
            </p>
          </Reveal>

          <div className="mt-12 grid border-2 border-[#141414] md:grid-cols-4">
            {/* Cell 1: wide, plate */}
            <Reveal className="md:col-span-2 md:border-r-2 md:border-b-2 md:border-[#141414]">
              <article className="flex h-full flex-col">
                <div className="relative aspect-[16/8] w-full border-b-2 border-[#141414]">
                  <Image
                    src={rowImage}
                    alt="A single row of paper slips pinned to concrete, each throwing a long shadow"
                    placeholder="blur"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[17px] leading-tight font-bold uppercase">
                    Capture on one key
                  </h3>
                  <p className="mt-2.5 max-w-[44ch] text-[14px] leading-relaxed text-[#3f3f3b]">
                    A hotkey, an inbox address, a browser button. The note lands
                    before the thought leaves.
                  </p>
                </div>
              </article>
            </Reveal>

            {/* Cell 2 */}
            <Reveal
              delay={0.05}
              className="border-t-2 border-[#141414] p-6 md:border-t-0 md:border-r-2 md:border-b-2"
            >
              <h3 className="text-[17px] leading-tight font-bold uppercase">
                Links both ways
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-[#3f3f3b]">
                Mention a note and the mention shows up at the other end, kept
                accurate as you edit.
              </p>
            </Reveal>

            {/* Cell 3: inverted */}
            <Reveal
              delay={0.1}
              className="border-t-2 border-[#141414] bg-[#141414] p-6 text-[#e6e6e3] md:border-t-0 md:border-b-2"
            >
              <h3 className="text-[17px] leading-tight font-bold uppercase text-white">
                No folder prompt
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-[#b4b4ae]">
                Tessera never asks where a note goes. Position is derived, not
                assigned.
              </p>
            </Reveal>

            {/* Cell 4 */}
            <Reveal
              delay={0.15}
              className="border-t-2 border-[#141414] p-6 md:border-t-0 md:border-r-2"
            >
              <h3 className="text-[17px] leading-tight font-bold uppercase">
                Search by sense
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-[#3f3f3b]">
                Describe the argument you half remember. The exact words are not
                required.
              </p>
            </Reveal>

            {/* Cell 5: wide, plate */}
            <Reveal
              delay={0.2}
              className="border-t-2 border-[#141414] md:col-span-2 md:border-t-0 md:border-r-2"
            >
              <article className="flex h-full flex-col">
                <div className="relative aspect-[16/8] w-full border-b-2 border-[#141414]">
                  <Image
                    src={stackImage}
                    alt="A thick block of blank cards seen edge on under hard raking light"
                    placeholder="blur"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[17px] leading-tight font-bold uppercase">
                    Old notes return
                  </h3>
                  <p className="mt-2.5 max-w-[44ch] text-[14px] leading-relaxed text-[#3f3f3b]">
                    While you draft, Tessera raises the notes that belong beside
                    this one.
                  </p>
                </div>
              </article>
            </Reveal>

            {/* Cell 6 */}
            <Reveal delay={0.25} className="border-t-2 border-[#141414] p-6 md:border-t-0">
              <h3 className="text-[17px] leading-tight font-bold uppercase">
                Runs on your disk
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-[#3f3f3b]">
                Markdown in a folder you picked. Full function with the network
                off.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Long list as a scroll-snap track, not a bulleted column. */}
      <section className="border-b-2 border-[#141414] bg-[#f4f4f2]">
        <div className={`${shell} pt-16 lg:pt-20`}>
          <Reveal>
            <p className="font-jet text-[11.5px] tracking-[0.2em] text-[#565651]">
              IN PRACTICE
            </p>
            <h2 className="mt-4 max-w-[24ch] text-[2rem] leading-[0.98] font-extrabold tracking-[-0.035em] uppercase sm:text-[2.5rem]">
              What people actually put in it
            </h2>
          </Reveal>
        </div>
        <div className="mt-10 overflow-x-auto pb-16 lg:pb-20">
          <ul className="flex snap-x snap-mandatory gap-0 px-5 lg:px-8">
            {kept.map((item) => (
              <li
                key={item}
                className="flex h-28 w-52 shrink-0 snap-start items-end border-2 border-r-0 border-[#141414] p-4 last:border-r-2 hover:bg-[#d9330c] hover:text-white"
              >
                <span className="text-[15px] leading-tight font-bold uppercase">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Colour block statement. */}
      <section className="border-b-2 border-[#141414] bg-[#d9330c]">
        <div className={`${shell} py-20 lg:py-28`}>
          <Reveal>
            <p className="max-w-[30ch] text-[2rem] leading-[1] font-extrabold tracking-[-0.035em] text-white uppercase sm:text-[3.25rem]">
              A folder tree is a guess you have to maintain forever
            </p>
          </Reveal>
        </div>
      </section>

      {/* Files: real text listing, not a mock window. */}
      <section id="files" className="border-b-2 border-[#141414]">
        <div className={`${shell} py-16 lg:py-24`}>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <h2 className="max-w-[18ch] text-[2rem] leading-[0.98] font-extrabold tracking-[-0.035em] uppercase sm:text-[2.5rem]">
                It is just a folder
              </h2>
              <p className="mt-6 max-w-[44ch] text-[15.5px] leading-relaxed text-[#3f3f3b]">
                Open the vault in Finder, in vim, in anything. Tessera reads the
                directory and writes plain Markdown back into it. Delete the app
                and the notes are untouched.
              </p>
              <a
                href="#start"
                className="mt-8 inline-flex h-12 items-center border-2 border-[#141414] px-6 text-[14px] font-bold tracking-wide whitespace-nowrap transition-colors hover:bg-[#141414] hover:text-[#e6e6e3] active:translate-y-[2px]"
              >
                FORMAT NOTES
              </a>
            </Reveal>
            <Reveal className="lg:col-span-7" delay={0.08}>
              <pre className="overflow-x-auto border-2 border-[#141414] bg-[#141414] p-6 font-jet text-[12.5px] leading-[1.85] text-[#c9c9c3]">
                <code>{`~/vault/
  kestrel-actuator-latency.md
  reading/
    seeing-like-a-state-ch4.md
    lindqvist-2024-retrieval.md
  rounds/
    2026-07-14.md
    2026-07-16.md
  half-ideas.md
  .tessera/
    index.sqlite        # rebuildable, safe to delete
    links.json`}</code>
              </pre>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Two quotes, boxed. */}
      <section className="border-b-2 border-[#141414] bg-[#f4f4f2]">
        <div className={`${shell} py-16 lg:py-20`}>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                quote:
                  "I stopped organising and started writing. The backlinks did the filing for me.",
                name: "Priya Raghunathan",
                role: "STAFF ENGINEER, KESTREL ROBOTICS",
              },
              {
                quote:
                  "Six years of reading notes finally talk to each other.",
                name: "Tobias Lindqvist",
                role: "RESEARCH LEAD, VERSO HEALTH",
              },
            ].map((item, index) => (
              <Reveal key={item.name} delay={index * 0.08}>
                <figure className="flex h-full flex-col border-2 border-[#141414] p-7">
                  <blockquote className="text-[19px] leading-[1.35] font-bold tracking-[-0.02em]">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-auto pt-8">
                    <p className="text-[14.5px] font-bold">{item.name}</p>
                    <p className="mt-1 font-jet text-[11px] tracking-[0.14em] text-[#565651]">
                      {item.role}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing: two boxed columns, uneven. */}
      <section id="pricing" className="border-b-2 border-[#141414]">
        <div className={`${shell} py-16 lg:py-24`}>
          <Reveal>
            <p className="font-jet text-[11.5px] tracking-[0.2em] text-[#565651]">
              PRICING
            </p>
            <h2 className="mt-4 text-[2rem] leading-[0.98] font-extrabold tracking-[-0.035em] uppercase sm:text-[2.5rem]">
              Two lines, no matrix
            </h2>
          </Reveal>
          <div className="mt-12 grid lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="flex h-full flex-col border-2 border-[#141414] p-8">
                <p className="font-jet text-[11.5px] tracking-[0.18em] text-[#565651]">
                  SOLO
                </p>
                <p className="mt-5 font-jet text-[2.5rem] leading-none tabular-nums">
                  $0
                </p>
                <p className="mt-5 max-w-[34ch] text-[14.5px] leading-relaxed text-[#3f3f3b]">
                  One machine. Unlimited notes, every link, the whole search
                  index. Not a trial.
                </p>
                <div className="mt-auto pt-8">
                  <a
                    href="#start"
                    className="inline-flex h-12 items-center border-2 border-[#141414] px-6 text-[14px] font-bold tracking-wide whitespace-nowrap transition-colors hover:bg-[#141414] hover:text-[#e6e6e3] active:translate-y-[2px]"
                  >
                    START FREE
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal className="lg:col-span-7" delay={0.08}>
              <div className="flex h-full flex-col border-2 border-t-0 border-[#141414] bg-[#141414] p-8 text-[#e6e6e3] lg:border-t-2 lg:border-l-0">
                <p className="font-jet text-[11.5px] tracking-[0.18em] text-[#d9330c]">
                  EVERYWHERE
                </p>
                <p className="mt-5 font-jet text-[2.5rem] leading-none tabular-nums text-white">
                  $8
                  <span className="ml-3 align-middle font-[family-name:var(--font-archivo)] text-[14px] tracking-normal text-[#8a8a84]">
                    per month
                  </span>
                </p>
                <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                  {[
                    "Encrypted sync, every device",
                    "Resurfacing while you draft",
                    "Shared vaults with a team",
                    "Daily version history",
                  ].map((feature) => (
                    <li key={feature} className="text-[14.5px] text-[#b4b4ae]">
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <a
                    href="#start"
                    className="inline-flex h-12 items-center gap-2.5 border-2 border-[#141414] bg-[#d9330c] px-6 text-[14px] font-bold tracking-wide whitespace-nowrap text-white transition-colors hover:border-white hover:bg-white hover:text-[#141414] active:translate-y-[2px]"
                  >
                    START FREE
                    <ArrowRightIcon size={15} weight="bold" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing CTA. */}
      <section id="start" className="border-b-2 border-[#141414] bg-[#f4f4f2]">
        <div className={`${shell} py-16 lg:py-24`}>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <h2 className="max-w-[16ch] text-[2rem] leading-[0.98] font-extrabold tracking-[-0.035em] uppercase sm:text-[2.75rem]">
                Point it at a folder
              </h2>
              <p className="mt-6 max-w-[40ch] text-[15.5px] leading-relaxed text-[#3f3f3b]">
                Indexing an existing vault takes seconds and modifies nothing on
                disk.
              </p>
            </Reveal>
            <Reveal className="lg:col-span-7 lg:pt-2" delay={0.08}>
              <SignupForm />
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="bg-[#141414] text-[#b4b4ae]">
        <div
          className={`${shell} flex flex-col gap-7 py-9 sm:flex-row sm:items-center sm:justify-between`}
        >
          <Link
            href="/3"
            className="text-[17px] font-extrabold tracking-[-0.03em] text-white uppercase"
          >
            Tessera
          </Link>
          <nav className="flex flex-wrap gap-x-7 gap-y-3 font-jet text-[11.5px] tracking-[0.14em]">
            <a className="transition-colors hover:text-[#d9330c]" href="#grid">
              CAPABILITIES
            </a>
            <a className="transition-colors hover:text-[#d9330c]" href="#files">
              FILES
            </a>
            <a className="transition-colors hover:text-[#d9330c]" href="#pricing">
              PRICING
            </a>
            <a className="transition-colors hover:text-[#d9330c]" href="#start">
              SUPPORT
            </a>
          </nav>
          <p className="font-jet text-[11.5px] tracking-[0.14em] text-[#6b6b66]">
            TESSERA LABS 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
