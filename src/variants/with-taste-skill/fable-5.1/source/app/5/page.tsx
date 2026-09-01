import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { brand, features, pricing, testimonials } from "../_shared/copy";
import { BrandLogo, LOGOS } from "../_shared/Logos";
import { Reveal } from "../_shared/Reveal";
import { Z } from "../_shared/z";
import { HorizontalPan } from "./HorizontalPan";
import { HeroTile, KineticHeadline } from "./Kinetic";

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
    "inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-btn px-6 text-[16px] font-semibold transition-[background-color,color,transform] duration-200 active:scale-[0.98]";
  const styles =
    variant === "primary"
      ? "bg-accent text-on-accent hover:bg-ink hover:text-surface"
      : "border-2 border-ink text-ink hover:bg-ink hover:text-surface";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

function Nav() {
  return (
    <header style={{ zIndex: Z.nav }} className="relative">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6">
        <Link href="/with-taste-skill/fable-5.1/5" className="text-[26px] font-extrabold tracking-[-0.04em] text-ink">
          {brand.name}
        </Link>
        <nav className="flex items-center gap-6 text-[15px] font-medium text-ink-2">
          <a href="#features" className="hidden transition-colors hover:text-ink sm:inline">
            Features
          </a>
          <a href="#pricing" className="hidden transition-colors hover:text-ink sm:inline">
            Pricing
          </a>
          <Link
            href="#pricing"
            className="inline-flex h-10 items-center whitespace-nowrap rounded-btn bg-ink px-5 text-[14px] font-semibold text-surface transition-[background-color,color,transform] hover:bg-accent hover:text-on-accent active:scale-[0.98]"
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
    <section className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-6 pt-10 pb-20 lg:grid-cols-12 lg:pt-16 lg:pb-28">
      <div className="lg:col-span-8">
        <KineticHeadline
          words={["Your", "head,", "but", "searchable."]}
          accent="searchable."
          className="text-6xl font-bold leading-[0.95] tracking-[-0.045em] text-ink md:text-7xl lg:text-[6.25rem]"
        />
        <Reveal index={4} className="mt-8 max-w-[44ch]">
          <p className="text-xl leading-relaxed text-ink-2">
            Loam catches everything you would otherwise lose, links it together,
            and brings it back when it is useful.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#pricing">
              Start free
              <ArrowRight size={18} weight="bold" />
            </Button>
            <Button href="#features" variant="ghost">
              See it move
            </Button>
          </div>
        </Reveal>
      </div>
      <div className="lg:col-span-4 lg:col-start-9">
        <HeroTile>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/variants/with-taste-skill/fable-5.1/loam/loam-5-hero.jpg"
              alt="Blank paper sheets frozen mid-air against a hot pink backdrop"
              fill
              priority
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        </HeroTile>
      </div>
    </section>
  );
}

function LogoMarquee() {
  const row = [...LOGOS, ...LOGOS];
  return (
    <section aria-label="Used by people at" className="overflow-hidden border-y-2 border-ink py-6">
      <div className="flex w-max animate-[marquee_36s_linear_infinite] items-center gap-16 pr-16 text-ink">
        {row.map((logo, i) => (
          <BrandLogo key={`${logo.slug}-${i}`} icon={logo} className="h-8 w-auto shrink-0" />
        ))}
      </div>
    </section>
  );
}

const PANEL_STYLE: Record<string, string> = {
  capture: "bg-ink text-surface",
  connect: "bg-accent text-on-accent",
  resurface: "bg-surface text-ink",
  own: "bg-surface-2 text-ink",
  search: "bg-surface text-ink border-l-2 border-ink",
};

function Panels() {
  return (
    <HorizontalPan>
      {features.map((f) => {
        const image =
          f.key === "capture"
            ? "/variants/with-taste-skill/fable-5.1/loam/loam-5-street.jpg"
            : f.key === "own"
              ? "/variants/with-taste-skill/fable-5.1/loam/loam-5-tower.jpg"
              : null;
        return (
          <article
            key={f.key}
            className={`relative flex w-full min-h-[80dvh] shrink-0 flex-col justify-end overflow-hidden p-8 md:p-14 md:group-data-[mode=pan]:h-full md:group-data-[mode=pan]:min-h-0 md:group-data-[mode=pan]:w-[68vw] ${PANEL_STYLE[f.key]}`}
          >
            {image ? (
              <>
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="70vw"
                  className={`object-cover ${f.key === "own" ? "opacity-90" : ""}`}
                />
                {f.key === "capture" ? (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#f3f2ee] via-[#f3f2ee]/60 to-transparent" />
                )}
              </>
            ) : null}
            <div className={`relative ${f.key === "own" ? "text-[#121212]" : ""}`}>
              <h3 className="max-w-[12ch] text-5xl font-bold leading-[0.95] tracking-[-0.04em] md:text-7xl">
                {f.title}
              </h3>
              <p
                className={`mt-6 max-w-[40ch] text-lg leading-relaxed md:text-xl ${
                  f.key === "capture"
                    ? "text-[#c4c3be]"
                    : f.key === "connect"
                      ? "opacity-80"
                      : f.key === "own"
                        ? "text-[#454545]"
                        : "text-ink-2"
                }`}
              >
                {f.body}
              </p>
            </div>
          </article>
        );
      })}
    </HorizontalPan>
  );
}

function Statement() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 md:py-40">
      <Reveal>
        <h2 className="max-w-6xl text-5xl font-bold leading-[0.98] tracking-[-0.04em] text-ink md:text-7xl lg:text-8xl">
          Notes you wrote in March show up in September,{" "}
          <span className="text-accent-text">exactly</span> when they are useful.
        </h2>
      </Reveal>
    </section>
  );
}

function Quotes() {
  const list = [testimonials[0], testimonials[3], testimonials[2]];
  return (
    <section className="border-t-2 border-ink">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-20 px-6 py-24 md:py-32">
        {list.map((t, i) => (
          <Reveal
            key={t.name}
            as="figure"
            index={i}
            className={`max-w-3xl ${i % 2 === 1 ? "md:ml-auto md:text-right" : ""}`}
          >
            <blockquote className="text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-[40px]">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-5 text-[15px] text-ink-2">
              {t.name}, {t.role}
              {t.org ? `, ${t.org}` : ""}
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-ink">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-2">
        {pricing.map((tier, i) => (
          <Reveal
            key={tier.name}
            index={i}
            className={`flex flex-col px-6 py-16 md:py-24 ${
              i === 1 ? "border-t-2 border-ink md:border-t-0 md:border-l-2 md:pl-14" : "md:pr-14"
            }`}
          >
            <h3 className="text-xl font-semibold text-ink-2">{tier.name}</h3>
            <p className="mt-2 text-7xl font-bold leading-none tracking-[-0.05em] text-ink md:text-9xl">
              {tier.price}
            </p>
            {tier.period ? (
              <p className="mt-3 text-[15px] font-medium text-ink-3">{tier.period}</p>
            ) : (
              <p className="mt-3 text-[15px] font-medium text-ink-3">No card required.</p>
            )}
            <p className="mt-6 max-w-[38ch] text-lg leading-relaxed text-ink-2">{tier.blurb}</p>
            <ul className="mt-8 flex flex-1 flex-wrap gap-2">
              {tier.items.map((item) => (
                <li
                  key={item}
                  className="rounded-btn border border-line px-3.5 py-1.5 text-[14px] font-medium text-ink-2"
                >
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
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="overflow-hidden border-t-2 border-ink">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-6 pt-10 text-[15px] font-medium text-ink-2 md:flex-row md:items-center md:justify-between">
        <nav className="flex flex-wrap gap-x-7 gap-y-3">
          <a href="#" className="transition-colors hover:text-ink">Help</a>
          <a href="#" className="transition-colors hover:text-ink">Privacy</a>
          <a href="#" className="transition-colors hover:text-ink">Contact</a>
        </nav>
        <p className="text-ink-3">© 2026 Loam</p>
      </div>
      <p
        aria-hidden
        className="mx-auto max-w-[1400px] px-6 pt-6 text-[26vw] font-extrabold leading-[0.8] tracking-[-0.06em] text-ink md:text-[20vw]"
      >
        {brand.name}
      </p>
    </footer>
  );
}

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoMarquee />
        <Panels />
        <Statement />
        <Quotes />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
