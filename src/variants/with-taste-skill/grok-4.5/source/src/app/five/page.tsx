import Image from "next/image";
import {
  ArrowRightIcon,
  LightningIcon,
  SparkleIcon,
  WaveSineIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../../components/Reveal";
import { KineticMarquee } from "../../components/KineticMarquee";
import { TRUSTED_LOGOS, logoUrl } from "../../lib/logos";

export default function FivePage() {
  return (
    <div className="min-h-[100dvh] bg-[#faf6f1] text-[#1a1410]">
      <header className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-8">
        <a
          href="#top"
          className="font-[family-name:var(--font-outfit)] text-xl font-bold tracking-tight"
        >
          Lumen
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-[#5c4f45] md:flex">
          <a href="#moves" className="hover:text-[#1a1410]">
            Moves
          </a>
          <a href="#proof" className="hover:text-[#1a1410]">
            Proof
          </a>
          <a href="#go" className="hover:text-[#1a1410]">
            Go
          </a>
        </nav>
        <a
          href="#start"
          className="rounded-xl bg-[#e85d2a] px-4 py-2 text-sm font-semibold text-white transition-transform active:scale-[0.98] hover:bg-[#d14e1f]"
        >
          Start free
        </a>
      </header>

      <main id="top">
        {/* Kinetic asymmetric hero */}
        <section className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-[1400px] items-end gap-8 px-5 pb-12 pt-10 md:grid-cols-12 md:px-8 md:pb-16 md:pt-12">
          <div className="md:col-span-7">
            <Reveal y={28}>
              <h1 className="font-[family-name:var(--font-outfit)] text-5xl font-bold leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
                Think loud.
                <br />
                <span className="text-[#e85d2a]">Keep everything.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-[36ch] text-lg leading-relaxed text-[#5c4f45]">
                Lumen is the second brain for builders who move fast and hate losing the thread.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  id="start"
                  href="#start"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#1a1410] px-5 py-3.5 text-sm font-semibold text-white transition-transform active:scale-[0.98] hover:bg-[#2e241c]"
                >
                  Start free
                  <ArrowRightIcon weight="bold" className="h-4 w-4" />
                </a>
                <a
                  href="#moves"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-[#1a1410] px-5 py-3.5 text-sm font-semibold hover:bg-white/60"
                >
                  See moves
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal className="md:col-span-5" delay={0.1} y={40}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:aspect-auto md:h-[min(70vh,560px)]">
              <Image
                src="/variants/with-taste-skill/grok-4.5/iterations/five/hero-five.png"
                alt="Energetic desk with coral accents and sticky notes"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </Reveal>
        </section>

        <KineticMarquee />

        <section className="py-12">
          <ul className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-12 gap-y-6 px-5 md:px-8">
            {TRUSTED_LOGOS.map((logo) => (
              <li key={logo.slug}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logoUrl(logo.slug, "5c4f45")}
                  alt={logo.name}
                  width={88}
                  height={24}
                  className="h-5 w-auto opacity-70"
                />
              </li>
            ))}
          </ul>
        </section>

        {/* Moves - staggered big type list, not cards */}
        <section id="moves" className="mx-auto max-w-[1400px] px-5 py-24 md:px-8">
          <Reveal>
            <h2 className="font-[family-name:var(--font-outfit)] text-4xl font-bold tracking-tight md:text-5xl">
              Three moves that stick
            </h2>
          </Reveal>
          <ul className="mt-14 space-y-0">
            {[
              {
                icon: LightningIcon,
                title: "Dump it",
                body: "Inbox anything in under five seconds. Structure comes later.",
              },
              {
                icon: WaveSineIcon,
                title: "Wire it",
                body: "Link with [[brackets]]. Watch the graph thicken around your work.",
              },
              {
                icon: SparkleIcon,
                title: "Pull it back",
                body: "Ask in plain English. Get the note plus the trail that led there.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <li className="grid items-start gap-4 border-t border-[#1a1410]/15 py-10 md:grid-cols-12">
                  <div className="flex items-center gap-3 md:col-span-4">
                    <item.icon weight="duotone" className="h-7 w-7 text-[#e85d2a]" />
                    <h3 className="font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight md:text-4xl">
                      {item.title}
                    </h3>
                  </div>
                  <p className="max-w-[42ch] text-base leading-relaxed text-[#5c4f45] md:col-span-8 md:pt-2">
                    {item.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* Proof - full width image + overlay-free caption below */}
        <section id="proof" className="border-y border-[#1a1410]/10 bg-[#f3ebe3] py-24">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <Reveal>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl md:aspect-[21/9]">
                <Image
                  src="/variants/with-taste-skill/grok-4.5/iterations/five/feature-capture.png"
                  alt="Hands capturing notes beside a tablet"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <p className="mt-5 max-w-[50ch] text-[#5c4f45]">
                Teams use Lumen as the shared memory between standups, docs, and late-night ideas.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              <Reveal delay={0.05}>
                <blockquote className="rounded-2xl border border-[#1a1410]/10 bg-white p-8">
                  <p className="font-[family-name:var(--font-outfit)] text-xl font-medium leading-snug md:text-2xl">
                    &ldquo;We stopped re-explaining decisions. The graph holds the why.&rdquo;
                  </p>
                  <footer className="mt-5 text-sm text-[#5c4f45]">
                    Jules Park - Product lead, Northline
                  </footer>
                </blockquote>
              </Reveal>
              <Reveal delay={0.1}>
                <blockquote className="rounded-2xl bg-[#e85d2a] p-8 text-white">
                  <p className="font-[family-name:var(--font-outfit)] text-xl font-medium leading-snug md:text-2xl">
                    &ldquo;Feels like Notion met a search engine that actually gets me.&rdquo;
                  </p>
                  <footer className="mt-5 text-sm text-orange-100">
                    Samir Adeyemi - Founder, Kite Studio
                  </footer>
                </blockquote>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Go - big CTA */}
        <section id="go" className="mx-auto max-w-[1400px] px-5 py-28 md:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-[#e85d2a] px-8 py-16 text-white md:px-16 md:py-20">
              <h2 className="max-w-[12ch] font-[family-name:var(--font-outfit)] text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                Your second brain is one import away.
              </h2>
              <p className="mt-5 max-w-[36ch] text-lg text-orange-50">
                Bring Markdown, Notion export, or a blank page. Start linking today.
              </p>
              <a
                href="#start"
                className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#1a1410] px-6 py-3.5 text-sm font-semibold text-white transition-transform active:scale-[0.98] hover:bg-[#2e241c]"
              >
                Start free
                <ArrowRightIcon weight="bold" className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-[#1a1410]/12 py-10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 text-sm text-[#5c4f45] md:flex-row md:items-center md:justify-between md:px-8">
          <p className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[#1a1410]">
            Lumen
          </p>
          <p>© 2026 Lumen Labs</p>
        </div>
      </footer>
    </div>
  );
}
