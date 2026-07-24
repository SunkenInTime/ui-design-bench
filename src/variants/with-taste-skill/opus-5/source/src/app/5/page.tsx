import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/variants/with-taste-skill/opus-5/source/src/components/reveal";
import { integrations, iconUrl } from "@/variants/with-taste-skill/opus-5/source/src/lib/integrations";
import { HorizontalPan, type Panel } from "./_components/horizontal-pan";
import { SignupForm } from "./_components/signup-form";
import { ZoomPlate } from "./_components/zoom-plate";
import heroImage from "@/variants/with-taste-skill/opus-5/source/src/assets/img/iter5-hero.png";
import wallImage from "@/variants/with-taste-skill/opus-5/source/src/assets/img/iter5-wall.png";
import edgeImage from "@/variants/with-taste-skill/opus-5/source/src/assets/img/iter5-edge.png";

/*
  Iteration 05 "Constellation" - kinetic launch page.
  DESIGN_VARIANCE 9 / MOTION_INTENSITY 9 / VISUAL_DENSITY 3.
  Theme lock: dark. Accent lock: chartreuse #c9f24d.
  Shape lock, documented: surfaces are square, interactive is full pill.
  Three motion devices, one each: a marquee, a pinned horizontal pan, a zoom plate.
*/

const shell = "mx-auto w-full max-w-[1400px] px-6 lg:px-10";

const marqueeWords = [
  "Capture",
  "Backlinks",
  "Meaning search",
  "Resurfacing",
  "Markdown",
  "Offline",
  "Encrypted",
];

const panels: Panel[] = [
  {
    heading: "Write it anywhere",
    body: "One shortcut over whatever you are reading. An address you can forward mail to. A button in the browser. The note lands before the thought goes.",
    image: wallImage,
    alt: "A mosaic wall running into shadow, cut by a diagonal band of chartreuse tiles",
  },
  {
    heading: "The links make themselves",
    body: "Name a paper, a person, an argument. Tessera writes the connection at both ends and keeps it correct while the note changes around it.",
  },
  {
    heading: "Ask for the shape of it",
    body: "Search by what the note argued, not the words it used. Describe the idea badly and Tessera still finds the right one.",
    image: edgeImage,
    alt: "Charcoal mosaic meeting a field of bone white tiles along a chartreuse seam",
  },
  {
    heading: "It comes back on its own",
    body: "A year later you start a draft on the same subject. The notes that belong to it are already open beside you, in the order they matter.",
  },
];

export default function ConstellationPage() {
  return (
    <div className="min-h-[100dvh] overflow-x-clip bg-[#0b0b0c] font-[family-name:var(--font-space-grotesk)] text-[#f2f1ee] selection:bg-[#c9f24d] selection:text-[#0b0b0c]">
      <div
        aria-hidden="true"
        className="grain-overlay pointer-events-none fixed inset-0 z-50 opacity-[0.05] mix-blend-overlay"
      />

      <header className="absolute inset-x-0 top-0 z-40">
        <div className={`${shell} flex h-20 items-center justify-between gap-6`}>
          <Link
            href="/5"
            className="font-[family-name:var(--font-syne)] text-[19px] font-extrabold tracking-[-0.02em]"
          >
            Tessera
          </Link>
          <nav className="hidden items-center gap-8 text-[14px] text-[#8e8e88] md:flex">
            <a href="#pan" className="transition-colors hover:text-[#c9f24d]">
              What it does
            </a>
            <a href="#holds" className="transition-colors hover:text-[#c9f24d]">
              What it holds
            </a>
            <a href="#start" className="transition-colors hover:text-[#c9f24d]">
              Pricing
            </a>
          </nav>
          <a
            href="#start"
            className="inline-flex h-10 items-center rounded-full bg-[#c9f24d] px-5 font-[family-name:var(--font-syne)] text-[13.5px] font-extrabold whitespace-nowrap text-[#0b0b0c] transition-[transform,background-color] hover:bg-[#d8fb6e] active:scale-[0.98]"
          >
            Start free
          </a>
        </div>
      </header>

      {/* Hero: centred manifesto. The line is the design, so it earns the centre. */}
      <section className="relative">
        <div className={shell}>
          <div className="flex flex-col items-center pt-32 pb-16 text-center lg:pt-40 lg:pb-20">
            <Reveal>
              <h1 className="max-w-[15ch] font-[family-name:var(--font-syne)] text-[3rem] leading-[0.94] font-normal tracking-[-0.04em] sm:text-[4.5rem] lg:text-[6rem]">
                Notes that{" "}
                <span className="font-extrabold text-[#c9f24d]">
                  find each other
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-8 max-w-[46ch] text-[17px] leading-relaxed text-[#a3a39c]">
                Tessera links every note as you write it, then brings the right
                ones back when you need them.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#start"
                  className="inline-flex h-13 items-center gap-2 rounded-full bg-[#c9f24d] px-7 font-[family-name:var(--font-syne)] text-[15px] font-extrabold whitespace-nowrap text-[#0b0b0c] transition-[transform,background-color] hover:bg-[#d8fb6e] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c9f24d] active:scale-[0.98]"
                >
                  Start free
                  <ArrowUpRightIcon size={16} weight="bold" />
                </a>
                <a
                  href="#pan"
                  className="inline-flex h-13 items-center rounded-full border border-white/18 px-7 text-[15px] font-medium whitespace-nowrap text-[#f2f1ee] transition-colors hover:border-[#c9f24d] hover:text-[#c9f24d] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white active:scale-[0.98]"
                >
                  See it move
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Full-bleed plate under the type rather than behind it, so nothing sits
            on a photograph at low contrast. */}
        <Reveal y={0}>
          <div className="relative aspect-[16/8] w-full sm:aspect-[16/6]">
            <Image
              src={heroImage}
              alt="A dense mosaic of charcoal and bone tesserae with scattered chartreuse pieces under raking light"
              priority
              placeholder="blur"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* The page's one marquee. */}
      <section
        aria-label="What Tessera does"
        className="overflow-hidden border-y border-white/10 py-6"
      >
        <div className="marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="flex items-center"
            >
              {marqueeWords.map((word) => (
                <li
                  key={word}
                  className="flex items-center px-7 font-[family-name:var(--font-syne)] text-[1.5rem] font-extrabold tracking-[-0.02em] whitespace-nowrap text-[#f2f1ee] sm:text-[2rem]"
                >
                  {word}
                  <span
                    aria-hidden="true"
                    className="ml-7 inline-block h-2 w-2 shrink-0 bg-[#c9f24d]"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* Pinned horizontal pan. */}
      <section id="pan">
        <div className={`${shell} pt-20 pb-14 lg:pt-28`}>
          <Reveal>
            <h2 className="max-w-[20ch] font-[family-name:var(--font-syne)] text-[2.25rem] leading-[0.98] font-extrabold tracking-[-0.035em] sm:text-[3.25rem]">
              Four moves, in the order they happen
            </h2>
          </Reveal>
        </div>
        <HorizontalPan panels={panels} />
      </section>

      {/* Zoom plate carrying the single strongest line. */}
      <ZoomPlate
        image={wallImage}
        alt="A mosaic wall receding into darkness, split by a band of chartreuse"
      >
        <div className={shell}>
          <Reveal>
            <p className="max-w-[24ch] font-[family-name:var(--font-syne)] text-[2.25rem] leading-[1] font-extrabold tracking-[-0.035em] text-white sm:text-[3.5rem] lg:text-[4.25rem]">
              A folder tree is a guess you maintain forever
            </p>
          </Reveal>
        </div>
      </ZoomPlate>

      {/* Offset grid: what people keep in it. Deliberately uneven. */}
      <section id="holds" className="border-b border-white/10">
        <div className={`${shell} py-20 lg:py-28`}>
          <Reveal>
            <h2 className="max-w-[22ch] font-[family-name:var(--font-syne)] text-[2.25rem] leading-[0.98] font-extrabold tracking-[-0.035em] sm:text-[3rem]">
              What people actually keep in it
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-12">
            {[
              {
                title: "Reading notes",
                body: "Passages and the argument they were serving, linked to the book and to whatever you were writing at the time.",
                span: "lg:col-span-5",
                offset: "",
              },
              {
                title: "Meetings",
                body: "What was decided and who owns it, connected to the project rather than buried by date.",
                span: "lg:col-span-4",
                offset: "lg:mt-16",
              },
              {
                title: "Interviews",
                body: "Transcripts that link themselves to the themes you are tracking across all of them.",
                span: "lg:col-span-3",
                offset: "lg:mt-32",
              },
              {
                title: "Half ideas",
                body: "The ones with no home yet. Tessera holds them until something they belong to turns up.",
                span: "lg:col-span-4",
                offset: "",
              },
              {
                title: "Field notes",
                body: "Written on a phone, out of signal, indexed the moment it reconnects.",
                span: "lg:col-span-3",
                offset: "lg:mt-12",
              },
              {
                title: "The long project",
                body: "Six years of thinking that finally reads as one body of work instead of four hundred files.",
                span: "lg:col-span-5",
                offset: "lg:mt-24",
              },
            ].map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.05}
                className={`${item.span} ${item.offset}`}
              >
                <div className="border-t border-[#c9f24d]/40 pt-5">
                  <h3 className="font-[family-name:var(--font-syne)] text-[1.35rem] leading-tight font-extrabold tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[38ch] text-[14.5px] leading-relaxed text-[#a3a39c]">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Integration band. */}
      <section className="border-b border-white/10">
        <div className={`${shell} py-12`}>
          <div className="flex flex-col items-start gap-7 lg:flex-row lg:items-center lg:gap-16">
            <p className="max-w-[26ch] shrink-0 text-[14px] leading-relaxed text-[#6f6f69]">
              Reads from and writes to what you already have open.
            </p>
            <ul className="flex flex-wrap items-center gap-x-10 gap-y-6">
              {integrations.map((brand) => (
                <li key={brand.slug}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={iconUrl(brand.slug, "f2f1ee")}
                    alt={brand.name}
                    width={24}
                    height={24}
                    loading="lazy"
                    className="h-6 w-6 opacity-45 transition-opacity hover:opacity-100"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* One quote. */}
      <section className="border-b border-white/10">
        <div className={`${shell} py-20 lg:py-28`}>
          <Reveal>
            <blockquote className="max-w-[34ch] font-[family-name:var(--font-syne)] text-[1.9rem] leading-[1.12] font-extrabold tracking-[-0.03em] sm:text-[2.75rem]">
              &ldquo;Six years of reading notes finally talk to each
              other.&rdquo;
            </blockquote>
            <footer className="mt-8">
              <p className="text-[15px] font-medium">Tobias Lindqvist</p>
              <p className="mt-1 text-[14px] text-[#8e8e88]">
                Research lead, Verso Health
              </p>
            </footer>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA. */}
      <section id="start">
        <div className={`${shell} py-20 lg:py-28`}>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6">
              <h2 className="max-w-[16ch] font-[family-name:var(--font-syne)] text-[2.5rem] leading-[0.96] font-extrabold tracking-[-0.04em] sm:text-[3.5rem]">
                Free on one machine, forever
              </h2>
              <p className="mt-7 max-w-[42ch] text-[16.5px] leading-relaxed text-[#a3a39c]">
                Every link, every search. Eight dollars a month adds encrypted
                sync and shared vaults when you want them.
              </p>
            </Reveal>
            <Reveal className="lg:col-span-6 lg:pt-3" delay={0.08}>
              <SignupForm />
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div
          className={`${shell} flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between`}
        >
          <Link
            href="/5"
            className="font-[family-name:var(--font-syne)] text-[17px] font-extrabold tracking-[-0.02em]"
          >
            Tessera
          </Link>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[13.5px] text-[#8e8e88]">
            <a className="transition-colors hover:text-[#c9f24d]" href="#pan">
              What it does
            </a>
            <a className="transition-colors hover:text-[#c9f24d]" href="#holds">
              What it holds
            </a>
            <a className="transition-colors hover:text-[#c9f24d]" href="#start">
              Pricing
            </a>
            <a className="transition-colors hover:text-[#c9f24d]" href="#start">
              Support
            </a>
          </nav>
          <p className="text-[13px] text-[#6f6f69]">Tessera Labs, 2026</p>
        </div>
      </footer>
    </div>
  );
}
