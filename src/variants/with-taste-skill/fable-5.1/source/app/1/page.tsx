import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  HardDrives,
  LinkSimple,
  MagnifyingGlass,
  Tray,
} from "@phosphor-icons/react/dist/ssr";
import { brand, features, pricing, testimonials } from "../_shared/copy";
import { BrandLogo, LOGOS } from "../_shared/Logos";
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
    "inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-btn px-5 text-[15px] font-medium transition-[background-color,transform] duration-200 active:scale-[0.98]";
  const styles =
    variant === "primary"
      ? "bg-accent text-on-accent hover:brightness-110"
      : "border border-line text-ink hover:bg-surface-2";
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
      className="sticky top-0 border-b border-line/70 bg-surface/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/with-taste-skill/fable-5.1/1" className="font-display text-[19px] font-semibold tracking-tight">
          {brand.name}
        </Link>
        <nav className="hidden items-center gap-8 text-[14px] text-ink-2 md:flex">
          <a href="#features" className="transition-colors hover:text-ink">
            Features
          </a>
          <a href="#pricing" className="transition-colors hover:text-ink">
            Pricing
          </a>
          <a href="#" className="transition-colors hover:text-ink">
            Changelog
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="hidden h-9 items-center px-3 text-[14px] text-ink-2 transition-colors hover:text-ink sm:inline-flex"
          >
            Log in
          </a>
          <Link
            href="#pricing"
            className="inline-flex h-9 items-center whitespace-nowrap rounded-btn bg-accent px-4 text-[14px] font-medium text-on-accent transition-[filter,transform] duration-200 hover:brightness-110 active:scale-[0.98]"
          >
            Start free
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-14 pb-16 lg:grid-cols-12 lg:gap-8 lg:pt-20 lg:pb-24">
      <Reveal className="lg:col-span-6">
        <h1 className="font-display text-5xl font-semibold tracking-[-0.035em] text-ink lg:text-6xl lg:leading-[1.02]">
          Notes that come back to you.
        </h1>
        <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink-2">
          A second brain that brings the right note back at the right time. Plain
          files, encrypted sync, nothing to organize.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#pricing">
            Start free
            <ArrowRight size={16} weight="bold" />
          </Button>
          <Button href="#resurface" variant="ghost">
            See how it works
          </Button>
        </div>
      </Reveal>
      <Reveal index={1} className="lg:col-span-6">
        <div className="relative aspect-[4/3] overflow-hidden rounded-ui border border-line bg-surface-2">
          <Image
            src="/variants/with-taste-skill/fable-5.1/loam/loam-1-hero.jpg"
            alt="Frosted index cards suspended on thin blue threads"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}

function LogoWall() {
  return (
    <section className="border-y border-line bg-surface-2/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:gap-12">
        <p className="shrink-0 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-3">
          Used by people at
        </p>
        <ul className="grid flex-1 grid-cols-4 gap-x-6 gap-y-8 text-ink-2 lg:grid-cols-8">
          {LOGOS.map((logo) => (
            <li key={logo.slug} className="flex items-center justify-center">
              <BrandLogo icon={logo} className="h-6 w-auto opacity-80" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Resurface() {
  const f = features.find((x) => x.key === "resurface")!;
  return (
    <section id="resurface" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <Reveal className="max-w-3xl">
        <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-ink md:text-5xl">
          The point is not storing notes. It is getting them back.
        </h2>
        <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-ink-2">
          {f.body}
        </p>
      </Reveal>
      <Reveal index={1} className="mt-12">
        <div className="relative aspect-[16/9] overflow-hidden rounded-ui border border-line md:aspect-[21/9]">
          <Image
            src="/variants/with-taste-skill/fable-5.1/loam/loam-1-desk.jpg"
            alt="An open notebook, a cup and a phone on a desk in morning light"
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}

const FEATURE_ICONS = {
  capture: Tray,
  connect: LinkSimple,
  own: HardDrives,
  search: MagnifyingGlass,
} as const;

function FeatureGrid() {
  const list = features.filter((f) => f.key !== "resurface");
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 pb-24 lg:pb-32">
      <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-ink md:text-4xl">
        Everything else stays out of the way.
      </h2>
      <ul className="mt-12 grid grid-cols-1 gap-x-12 md:grid-cols-2">
        {list.map((f, i) => {
          const Icon = FEATURE_ICONS[f.key as keyof typeof FEATURE_ICONS];
          return (
            <Reveal key={f.key} index={i} as="li" className="border-t border-line py-8">
              <Icon size={22} weight="regular" className="text-accent-text" />
              <h3 className="mt-5 text-lg font-medium text-ink">{f.title}</h3>
              <p className="mt-2 max-w-[44ch] leading-relaxed text-ink-2">{f.body}</p>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

function Quote() {
  const t = testimonials[0];
  return (
    <section className="border-y border-line bg-surface-2/60">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <Reveal className="max-w-3xl">
          <blockquote className="font-display text-2xl leading-snug tracking-tight text-ink md:text-4xl">
            “{t.quote}”
          </blockquote>
          <p className="mt-6 text-[15px] text-ink-2">
            {t.name}, {t.role}
            {t.org ? `, ${t.org}` : ""}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-ink md:text-4xl">
            Free to think. Pay to sync.
          </h2>
          <p className="mt-4 max-w-[38ch] leading-relaxed text-ink-2">
            Your notes never leave your disk on the free plan. Sync adds every
            device and the clipper.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-8">
          {pricing.map((tier, i) => (
            <Reveal
              key={tier.name}
              index={i}
              as="li"
              className={`flex flex-col rounded-ui border p-7 ${
                tier.featured ? "border-accent bg-surface" : "border-line bg-surface"
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-medium text-ink">{tier.name}</h3>
                <p className="text-ink">
                  <span className="text-3xl font-semibold tracking-tight">{tier.price}</span>
                  {tier.period ? (
                    <span className="ml-1 text-[13px] text-ink-3">{tier.period}</span>
                  ) : null}
                </p>
              </div>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{tier.blurb}</p>
              <ul className="mt-6 flex flex-1 flex-col gap-3 text-[15px] text-ink-2">
                {tier.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={16} weight="bold" className="mt-1 shrink-0 text-accent-text" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="#" variant={tier.featured ? "primary" : "ghost"}>
                  Start free
                </Button>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 text-[14px] text-ink-3 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-[17px] font-semibold tracking-tight text-ink">
          {brand.name}
        </p>
        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          <a href="#" className="transition-colors hover:text-ink">Docs</a>
          <a href="#" className="transition-colors hover:text-ink">Changelog</a>
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
        <LogoWall />
        <Resurface />
        <FeatureGrid />
        <Quote />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
