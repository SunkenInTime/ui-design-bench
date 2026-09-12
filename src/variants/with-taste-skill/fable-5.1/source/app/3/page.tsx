import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ClockCounterClockwise,
  DownloadSimple,
  GithubLogo,
  LinkSimple,
  MagnifyingGlass,
  Tray,
} from "@phosphor-icons/react/dist/ssr";
import { brand, features, pricing, steps, testimonials } from "../_shared/copy";
import { Reveal } from "../_shared/Reveal";
import { Z } from "../_shared/z";

function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-btn px-5 text-[15px] font-medium transition-[background-color,filter,transform] duration-200 active:scale-[0.98]";
  const styles =
    variant === "primary"
      ? "bg-accent text-on-accent hover:brightness-110"
      : "border border-line bg-surface-2/40 text-ink hover:bg-surface-2";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

function Nav() {
  return (
    <header
      style={{ zIndex: Z.nav }}
      className="sticky top-0 border-b border-line bg-surface/85 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/with-taste-skill/fable-5.1/3" className="text-[19px] font-semibold tracking-tight text-ink">
          {brand.name}
        </Link>
        <nav className="hidden items-center gap-8 text-[14px] text-ink-2 md:flex">
          <a href="#disk" className="transition-colors hover:text-ink">
            Format
          </a>
          <a href="#features" className="transition-colors hover:text-ink">
            Features
          </a>
          <a href="#pricing" className="transition-colors hover:text-ink">
            Pricing
          </a>
          <a href="#" className="inline-flex items-center gap-1.5 transition-colors hover:text-ink">
            <GithubLogo size={16} />
            GitHub
          </a>
        </nav>
        <Link
          href="#pricing"
          className="inline-flex h-9 items-center gap-2 whitespace-nowrap rounded-btn bg-accent px-4 text-[14px] font-medium text-on-accent transition-[filter,transform] hover:brightness-110 active:scale-[0.98]"
        >
          <DownloadSimple size={15} weight="bold" />
          Download for Mac
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-14 pb-16 lg:grid-cols-12 lg:pt-24 lg:pb-24">
      <Reveal className="lg:col-span-6">
        <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-ink lg:text-6xl">
          A second brain made of plain text files.
        </h1>
        <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-ink-2">
          Markdown on disk, links and backlinks, encrypted sync you can turn off.
          Works offline. Scriptable. Yours.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#pricing">
            <DownloadSimple size={16} weight="bold" />
            Download for Mac
          </Button>
          <Button href="#" variant="ghost">
            Read the docs
            <ArrowUpRight size={15} weight="bold" />
          </Button>
        </div>
      </Reveal>
      <Reveal index={1} className="lg:col-span-6">
        <div className="relative aspect-[4/3] overflow-hidden rounded-ui border border-line bg-[#0b0d0f]">
          <Image
            src="/variants/with-taste-skill/fable-5.1/loam/loam-3-graph.jpg"
            alt="A dark knowledge graph with a few softly lit green nodes"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-right"
          />
        </div>
      </Reveal>
    </section>
  );
}

const NOTE = `---
title: Working memory
created: 2026-09-01
tags: [cognition, reading]
---

Miller's "seven plus or minus two" is mostly folklore now.
Cowan (2001) puts the practical limit closer to four chunks,
which is why long outlines stop working past the fourth level.

Related: [[Chunking]], [[Why outlines fail]]`;

function OnDisk() {
  return (
    <section id="disk" className="border-y border-line bg-surface-2/50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-12 lg:py-28">
        <Reveal className="lg:col-span-7">
          <div className="overflow-hidden rounded-ui border border-line bg-surface">
            <div className="flex items-center gap-2 border-b border-line px-4 py-2.5 font-mono text-[12.5px] text-ink-3">
              notes/working-memory.md
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13.5px] leading-[1.7] text-ink-2">
              <code>
                {NOTE.split(/(\[\[[^\]]+\]\])/g).map((part, i) =>
                  part.startsWith("[[") ? (
                    <span key={i} className="text-accent-text">
                      {part}
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  ),
                )}
              </code>
            </pre>
          </div>
        </Reveal>
        <Reveal index={1} className="lg:col-span-4 lg:col-start-9">
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.02em] text-ink md:text-4xl">
            This is a note. All of it.
          </h2>
          <p className="mt-5 leading-relaxed text-ink-2">
            One file per note. Front matter for metadata, wiki-links for
            connections. Open it in any editor, grep it, commit it to git. If
            Loam disappeared tomorrow, your notes would not.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const ICONS = {
  capture: Tray,
  connect: LinkSimple,
  search: MagnifyingGlass,
  resurface: ClockCounterClockwise,
} as const;

function FeatureBento() {
  const byKey = Object.fromEntries(features.map((f) => [f.key, f]));
  const cells = [
    { f: byKey.capture, span: "lg:col-span-7", image: "/variants/with-taste-skill/fable-5.1/loam/loam-3-desk.jpg" },
    { f: byKey.connect, span: "lg:col-span-5" },
    { f: byKey.search, span: "lg:col-span-5" },
    { f: byKey.resurface, span: "lg:col-span-7", image: "/variants/with-taste-skill/fable-5.1/loam/loam-3-graph.jpg" },
  ];
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.02em] text-ink md:text-4xl">
        Built for the part where you come back to it.
      </h2>
      <ul className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-12">
        {cells.map(({ f, span, image }, i) => {
          const Icon = ICONS[f.key as keyof typeof ICONS];
          return (
            <Reveal
              key={f.key}
              as="li"
              index={i}
              className={`relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-ui border border-line bg-surface-2/60 p-7 ${span}`}
            >
              {image ? (
                <>
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0f] via-[#0b0d0f]/70 to-[#0b0d0f]/10" />
                </>
              ) : null}
              <div className={`relative ${image ? "text-[#e6e8ea]" : ""}`}>
                <Icon
                  size={22}
                  className={image ? "text-[#8fe699]" : "text-accent-text"}
                />
                <h3 className="mt-4 text-xl font-medium">{f.title}</h3>
                <p
                  className={`mt-2 max-w-[46ch] leading-relaxed ${
                    image ? "text-[#a9afb6]" : "text-ink-2"
                  }`}
                >
                  {f.body}
                </p>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

function Steps() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.02em] text-ink md:text-4xl">
            How a note travels
          </h2>
        </div>
        <dl className="lg:col-span-8">
          {steps.map((s, i) => (
            <Reveal
              key={s.verb}
              index={i}
              className="grid grid-cols-1 gap-2 border-t border-line py-7 first:border-t-0 first:pt-0 sm:grid-cols-[160px_1fr]"
            >
              <dt className="font-mono text-[15px] font-medium text-accent-text">{s.verb}</dt>
              <dd className="max-w-[56ch] text-[17px] leading-relaxed text-ink-2">{s.body}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Quotes() {
  const pair = [testimonials[2], testimonials[3]];
  return (
    <section className="border-t border-line bg-surface-2/50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-2 lg:py-28">
        {pair.map((t, i) => (
          <Reveal key={t.name} index={i} as="figure">
            <blockquote className="text-2xl leading-snug tracking-[-0.01em] text-ink md:text-[28px]">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-5 font-mono text-[13px] text-ink-3">
              {t.name}, {t.role}
              {t.org ? ` at ${t.org}` : ""}
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.02em] text-ink md:text-4xl">
          Free on your machine. Eight dollars to sync it.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          {pricing.map((tier, i) => (
            <Reveal
              key={tier.name}
              index={i}
              className={`border-l-2 pl-6 ${tier.featured ? "border-accent" : "border-line"}`}
            >
              <div className="flex items-baseline gap-3">
                <h3 className="text-xl font-medium text-ink">{tier.name}</h3>
                <p className="font-mono text-[15px] text-ink-3">
                  {tier.price}
                  {tier.period ? ` ${tier.period}` : ""}
                </p>
              </div>
              <p className="mt-2 max-w-[40ch] leading-relaxed text-ink-2">{tier.blurb}</p>
              <ul className="mt-6 grid grid-cols-1 gap-2 font-mono text-[13.5px] text-ink-2 sm:grid-cols-2">
                {tier.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="#" variant={tier.featured ? "primary" : "ghost"}>
                  <DownloadSimple size={16} weight="bold" />
                  Download for Mac
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-[14px] text-ink-3 md:flex-row md:items-center md:justify-between">
        <p className="text-[17px] font-semibold tracking-tight text-ink">{brand.name}</p>
        <nav className="flex flex-wrap gap-x-7 gap-y-3">
          <a href="#" className="transition-colors hover:text-ink">Docs</a>
          <a href="#" className="transition-colors hover:text-ink">Changelog</a>
          <a href="#" className="inline-flex items-center gap-1.5 transition-colors hover:text-ink">
            <GithubLogo size={15} />
            GitHub
          </a>
          <a href="#" className="transition-colors hover:text-ink">Privacy</a>
        </nav>
        <p className="font-mono text-[13px]">© 2026 Loam</p>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <OnDisk />
        <FeatureBento />
        <Steps />
        <Quotes />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
