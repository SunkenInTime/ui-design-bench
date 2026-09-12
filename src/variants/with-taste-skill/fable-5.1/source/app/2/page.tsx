import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { brand, features, pricing, testimonials } from "../_shared/copy";
import { Reveal } from "../_shared/Reveal";
import { Z } from "../_shared/z";

function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "text";
}) {
  if (variant === "text") {
    return (
      <a
        href={href}
        className="inline-flex h-12 items-center gap-2 whitespace-nowrap px-2 text-[15px] text-ink underline decoration-accent decoration-2 underline-offset-[6px] transition-colors hover:text-accent-text active:scale-[0.98]"
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href}
      className="inline-flex h-12 items-center whitespace-nowrap rounded-btn bg-ink px-6 text-[15px] font-medium text-surface transition-[opacity,transform] duration-200 hover:opacity-90 active:scale-[0.98]"
    >
      {children}
    </Link>
  );
}

function Nav() {
  return (
    <header style={{ zIndex: Z.nav }} className="relative">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/with-taste-skill/fable-5.1/2" className="font-display text-[26px] leading-none text-ink">
          {brand.name}
        </Link>
        <nav className="flex items-center gap-7 text-[15px] text-ink-2">
          <a href="#why" className="hidden transition-colors hover:text-ink sm:inline">
            Why
          </a>
          <a href="#what" className="hidden transition-colors hover:text-ink sm:inline">
            What it does
          </a>
          <a href="#pricing" className="hidden transition-colors hover:text-ink sm:inline">
            Pricing
          </a>
          <Link
            href="#pricing"
            className="inline-flex h-9 items-center whitespace-nowrap rounded-btn bg-ink px-4 text-[14px] font-medium text-surface transition-[opacity,transform] hover:opacity-90 active:scale-[0.98]"
          >
            Start free
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 md:pt-20">
      <Reveal className="mx-auto max-w-4xl text-center">
        <h1 className="font-display text-5xl leading-[1.02] tracking-[-0.015em] text-ink md:text-7xl">
          A commonplace book for people who read too much.
        </h1>
        <p className="mx-auto mt-7 max-w-[46ch] text-lg leading-relaxed text-ink-2 md:text-xl">
          Loam keeps what you read, think and clip, then hands it back when you
          need it.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
          <Button href="#pricing">Start free</Button>
          <Button href="#why" variant="text">
            Read why
            <ArrowDown size={14} weight="bold" />
          </Button>
        </div>
      </Reveal>
      <Reveal index={1} className="mt-14 md:mt-20">
        <div className="relative aspect-[16/9] overflow-hidden md:aspect-[21/9]">
          <Image
            src="/variants/with-taste-skill/fable-5.1/loam/loam-2-cards.jpg"
            alt="A library card catalog drawer full of index cards, one pulled forward"
            fill
            priority
            sizes="(min-width: 1152px) 1104px, 100vw"
            className="object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}

function Why() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <Reveal className="md:col-span-7 md:col-start-4">
          <h2 className="font-display text-4xl leading-[1.05] text-ink md:text-5xl">
            Notes were never meant to be filed away.
          </h2>
          <div className="mt-10 space-y-6 text-[19px] leading-[1.65] text-ink-2 md:text-[21px]">
            <p>
              <span className="float-left mr-3 mt-[6px] font-display text-[76px] leading-[0.75] text-accent-text md:text-[88px]">
                R
              </span>
              enaissance readers kept a commonplace book: a notebook where
              passages, ideas and observations were copied down and indexed by
              topic. The point was rereading. Notes were meant to be returned to,
              argued with and combined into something new.
            </p>
            <p>
              Most note apps are good at the copying and useless at the return.
              Loam is built for the return. It links what you write to what you
              wrote before, and each morning it puts a few old notes back in
              front of you.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function What() {
  return (
    <section id="what" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-24">
            <h2 className="font-display text-4xl leading-[1.05] text-ink md:text-5xl">
              What it does
            </h2>
            <p className="mt-5 max-w-[30ch] leading-relaxed text-ink-2">
              Five things, done carefully. Nothing that needs a tutorial.
            </p>
          </div>
        </div>
        <ol className="space-y-14 md:col-span-7 md:col-start-6">
          {features.map((f, i) => (
            <Reveal key={f.key} as="li" index={i}>
              <h3 className="font-display text-3xl leading-tight text-ink md:text-4xl">
                {f.title}
              </h3>
              <p className="mt-3 max-w-[52ch] text-[17px] leading-relaxed text-ink-2">
                {f.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function PullQuote() {
  const t = testimonials[1];
  return (
    <section className="border-t border-line">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-12 md:py-32">
        <Reveal className="md:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/variants/with-taste-skill/fable-5.1/loam/loam-2-hands.jpg"
              alt="Hands writing in a small notebook at a cafe table"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal index={1} className="md:col-span-6 md:col-start-7">
          <blockquote className="font-display text-3xl italic leading-[1.15] text-ink md:text-[40px]">
            <span className="text-accent-text">“</span>
            {t.quote}
            <span className="text-accent-text">”</span>
          </blockquote>
          <p className="mt-8 text-[15px] text-ink-2">
            {t.name}
            <br />
            {t.role}, {t.org}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl leading-[1.05] text-ink md:text-5xl">
            Free to read. Pay to carry it with you.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-line">
          {pricing.map((tier, i) => (
            <Reveal
              key={tier.name}
              index={i}
              className={`flex flex-col py-8 md:py-2 ${i === 0 ? "md:pr-14" : "md:pl-14"} ${
                i === 0 ? "border-b border-line md:border-b-0" : ""
              }`}
            >
              <h3 className="font-display text-3xl text-ink">{tier.name}</h3>
              <p className="mt-4 font-display text-6xl leading-none text-ink">
                {tier.price}
                {tier.period ? (
                  <span className="ml-2 font-sans text-[15px] text-ink-3">{tier.period}</span>
                ) : null}
              </p>
              <p className="mt-5 max-w-[36ch] leading-relaxed text-ink-2">{tier.blurb}</p>
              <ul className="mt-8 flex flex-1 flex-col gap-2.5 text-[16px] text-ink-2">
                {tier.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-10">
                <Button href="#">Start free</Button>
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
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 text-[14px] text-ink-3 md:flex-row md:items-end md:justify-between">
        <p className="font-display text-4xl leading-none text-ink">{brand.name}</p>
        <nav className="flex flex-wrap gap-x-7 gap-y-3">
          <a href="#" className="transition-colors hover:text-ink">Help</a>
          <a href="#" className="transition-colors hover:text-ink">Privacy</a>
          <a href="#" className="transition-colors hover:text-ink">Contact</a>
        </nav>
        <p>© 2026 Loam</p>
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
        <Why />
        <What />
        <PullQuote />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
