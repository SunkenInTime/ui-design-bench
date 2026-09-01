import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import { brand, features, pricing, testimonials } from "../_shared/copy";
import { BrandLogo, LOGOS } from "../_shared/Logos";
import { Reveal } from "../_shared/Reveal";
import { Z } from "../_shared/z";
import { HeroStagger } from "./HeroMotion";

function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "onImage";
  className?: string;
}) {
  const base =
    "inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-btn px-6 text-[15px] font-semibold transition-[background-color,filter,transform] duration-200 active:scale-[0.98]";
  const styles = {
    primary: "bg-accent text-on-accent hover:brightness-105",
    ghost: "border border-line text-ink hover:bg-surface-2",
    onImage:
      "border border-white/30 bg-white/10 text-[#ece9df] backdrop-blur-sm hover:bg-white/20",
  }[variant];
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}

function Nav() {
  return (
    <header style={{ zIndex: Z.nav }} className="fixed inset-x-0 top-4 px-4">
      <div className="glass mx-auto flex h-14 max-w-4xl items-center justify-between rounded-btn pr-2 pl-6">
        <Link href="/with-taste-skill/fable-5.1/4" className="text-[19px] font-extrabold tracking-tight text-ink">
          {brand.name}
        </Link>
        <nav className="hidden items-center gap-7 text-[14px] font-medium text-ink-2 md:flex">
          <a href="#features" className="transition-colors hover:text-ink">
            Features
          </a>
          <a href="#stories" className="transition-colors hover:text-ink">
            Stories
          </a>
          <a href="#pricing" className="transition-colors hover:text-ink">
            Pricing
          </a>
        </nav>
        <Link
          href="#pricing"
          className="inline-flex h-10 items-center whitespace-nowrap rounded-btn bg-accent px-5 text-[14px] font-semibold text-on-accent transition-[filter,transform] hover:brightness-105 active:scale-[0.98]"
        >
          Start free
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-end overflow-hidden">
      <Image
        src="/variants/with-taste-skill/fable-5.1/loam/loam-4-hero.jpg"
        alt="A person on a mossy forest floor at golden hour holding a phone and a notebook"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a12] via-[#0a1a12]/45 to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-28 pt-32 md:pb-24">
        <HeroStagger>
          <h1 className="text-5xl font-extrabold leading-[0.98] tracking-[-0.035em] text-[#ece9df] md:text-7xl">
            Remember everything you meant to.
          </h1>
          <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-[#d5dbd3] md:text-xl">
            Capture in a second. Loam connects it to what you already know and
            brings it back when you need it.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="#pricing">
              Start free
              <ArrowRight size={16} weight="bold" />
            </Button>
            <Button href="#features" variant="onImage">
              See what it does
            </Button>
          </div>
        </HeroStagger>
      </div>
    </section>
  );
}

function LogoWall() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <p className="text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-3">
        Used by people at
      </p>
      <ul className="mt-8 grid grid-cols-4 gap-x-6 gap-y-8 text-ink-2 md:grid-cols-8">
        {LOGOS.map((logo) => (
          <li key={logo.slug} className="flex items-center justify-center">
            <BrandLogo icon={logo} className="h-6 w-auto opacity-75" />
          </li>
        ))}
      </ul>
    </section>
  );
}

function Bento() {
  const byKey = Object.fromEntries(features.map((f) => [f.key, f]));
  const cellBase =
    "relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-ui p-8 transition-transform duration-300 ease-out-expo hover:-translate-y-0.5";
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <Reveal className="max-w-2xl">
        <h2 className="text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-ink md:text-5xl">
          Five things, done properly.
        </h2>
      </Reveal>
      <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-12">
        <Reveal as="li" index={0} className={`${cellBase} md:col-span-8`}>
          <Image
            src="/variants/with-taste-skill/fable-5.1/loam/loam-4-stack.jpg"
            alt=""
            fill
            sizes="(min-width: 768px) 66vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a12] via-[#0a1a12]/30 to-transparent" />
          <div className="relative max-w-md text-[#ece9df]">
            <h3 className="text-2xl font-bold tracking-tight">{byKey.capture.title}</h3>
            <p className="mt-2 leading-relaxed text-[#c9d1c8]">{byKey.capture.body}</p>
          </div>
        </Reveal>
        <Reveal
          as="li"
          index={1}
          className={`${cellBase} bg-(--forest) text-(--on-forest) md:col-span-4`}
        >
          <p className="mb-auto font-mono text-[13px] text-(--on-forest-2)">
            [[Chunking]]
          </p>
          <h3 className="text-2xl font-bold tracking-tight">{byKey.connect.title}</h3>
          <p className="mt-2 leading-relaxed text-(--on-forest-2)">{byKey.connect.body}</p>
        </Reveal>
        <Reveal as="li" index={2} className={`${cellBase} md:col-span-5`}>
          <Image
            src="/variants/with-taste-skill/fable-5.1/loam/loam-4-soil.jpg"
            alt=""
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a12] via-[#0a1a12]/40 to-transparent" />
          <div className="relative text-[#ece9df]">
            <h3 className="text-2xl font-bold tracking-tight">{byKey.search.title}</h3>
            <p className="mt-2 leading-relaxed text-[#c9d1c8]">{byKey.search.body}</p>
          </div>
        </Reveal>
        <Reveal
          as="li"
          index={3}
          className={`${cellBase} border border-line bg-surface-2 md:col-span-3`}
        >
          <p className="mb-auto font-mono text-[13px] text-ink-3">notes/*.md</p>
          <h3 className="text-2xl font-bold tracking-tight text-ink">{byKey.own.title}</h3>
          <p className="mt-2 leading-relaxed text-ink-2">{byKey.own.body}</p>
        </Reveal>
        <Reveal
          as="li"
          index={4}
          className={`${cellBase} bg-accent text-on-accent md:col-span-4`}
        >
          <h3 className="text-2xl font-bold tracking-tight">{byKey.resurface.title}</h3>
          <p className="mt-2 leading-relaxed opacity-80">{byKey.resurface.body}</p>
        </Reveal>
      </ul>
    </section>
  );
}

function Statement() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <Reveal className="rounded-ui bg-(--forest) px-8 py-20 text-(--on-forest) md:px-16 md:py-28">
        <h2 className="max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] md:text-6xl">
          Most notes are written once and never seen again. Loam changes the
          second half.
        </h2>
        <p className="mt-7 max-w-[52ch] text-lg leading-relaxed text-(--on-forest-2)">
          While you write, Loam quietly finds the older notes that relate. The
          next morning, it hands you three of them.
        </p>
        <div className="mt-10">
          <Button href="#pricing">
            Start free
            <ArrowRight size={16} weight="bold" />
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

function Stories() {
  const [big, ...rest] = [testimonials[1], testimonials[0], testimonials[3]];
  return (
    <section id="stories" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <Reveal as="figure" className="rounded-ui bg-surface-2 p-10 md:col-span-7 md:p-14">
          <blockquote className="text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-ink md:text-4xl">
            “{big.quote}”
          </blockquote>
          <figcaption className="mt-8 text-[15px] text-ink-2">
            <span className="font-semibold text-ink">{big.name}</span>, {big.role},{" "}
            {big.org}
          </figcaption>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 md:col-span-5">
          {rest.map((t, i) => (
            <Reveal
              key={t.name}
              as="figure"
              index={i + 1}
              className="rounded-ui border border-line p-8"
            >
              <blockquote className="text-xl font-semibold leading-snug tracking-tight text-ink">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 text-[14px] text-ink-2">
                <span className="font-semibold text-ink">{t.name}</span>, {t.role}
                {t.org ? `, ${t.org}` : ""}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
      <Reveal className="max-w-2xl">
        <h2 className="text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-ink md:text-5xl">
          Free on one device. Eight dollars for all of them.
        </h2>
      </Reveal>
      <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
        {pricing.map((tier, i) => (
          <Reveal
            key={tier.name}
            as="li"
            index={i}
            className={`flex flex-col rounded-ui p-8 md:p-10 ${
              tier.featured
                ? "bg-(--forest) text-(--on-forest)"
                : "border border-line bg-surface-2 text-ink"
            }`}
          >
            <h3 className="text-xl font-bold">{tier.name}</h3>
            <p className="mt-4 text-5xl font-extrabold tracking-[-0.03em]">
              {tier.price}
              {tier.period ? (
                <span
                  className={`ml-2 text-[15px] font-medium ${
                    tier.featured ? "text-(--on-forest-2)" : "text-ink-3"
                  }`}
                >
                  {tier.period}
                </span>
              ) : null}
            </p>
            <p
              className={`mt-4 max-w-[38ch] leading-relaxed ${
                tier.featured ? "text-(--on-forest-2)" : "text-ink-2"
              }`}
            >
              {tier.blurb}
            </p>
            <ul
              className={`mt-8 flex flex-1 flex-col gap-3 text-[15px] ${
                tier.featured ? "text-(--on-forest)" : "text-ink-2"
              }`}
            >
              {tier.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    size={16}
                    weight="bold"
                    className={`mt-1 shrink-0 ${tier.featured ? "text-accent" : "text-accent-text"}`}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="#" variant={tier.featured ? "primary" : "ghost"}>
                Start free
              </Button>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 text-[14px] text-ink-3 md:flex-row md:items-center md:justify-between">
        <p className="text-[19px] font-extrabold tracking-tight text-ink">{brand.name}</p>
        <nav className="flex flex-wrap gap-x-7 gap-y-3 font-medium">
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
        <LogoWall />
        <Bento />
        <Statement />
        <Stories />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
