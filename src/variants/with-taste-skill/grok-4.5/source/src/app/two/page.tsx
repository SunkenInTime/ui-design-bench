import Image from "next/image";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../../components/Reveal";
import { TRUSTED_LOGOS, logoUrl } from "../../lib/logos";

export default function TwoPage() {
  return (
    <div className="min-h-[100dvh] bg-[#f3f4f2] text-[#1c2420]">
      <header className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-10">
        <a
          href="#top"
          className="font-[family-name:var(--font-newsreader)] text-2xl italic tracking-tight"
        >
          Lumen
        </a>
        <nav className="hidden items-center gap-8 text-sm text-[#4a5750] md:flex">
          <a href="#practice" className="hover:text-[#1c2420]">
            Practice
          </a>
          <a href="#library" className="hover:text-[#1c2420]">
            Library
          </a>
          <a href="#voices" className="hover:text-[#1c2420]">
            Voices
          </a>
        </nav>
        <a
          href="#start"
          className="rounded-none border border-[#1c2420] bg-[#1c2420] px-4 py-2 text-sm font-medium text-[#f3f4f2] transition-transform active:scale-[0.98] hover:bg-[#2d3a34]"
        >
          Start free
        </a>
      </header>

      <main id="top">
        {/* Editorial manifesto-leaning asymmetric hero */}
        <section className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-[1400px] gap-8 px-5 pb-16 pt-12 md:grid-cols-12 md:gap-6 md:px-10 md:pt-16">
          <div className="flex flex-col justify-center md:col-span-5">
            <h1 className="font-[family-name:var(--font-newsreader)] text-5xl leading-[1.08] tracking-tight md:text-6xl lg:text-[4.25rem]">
              A second brain for people who{" "}
              <em className="italic leading-[1.1]">write to think</em>.
            </h1>
            <p className="mt-6 max-w-[36ch] text-base leading-relaxed text-[#4a5750]">
              Lumen keeps your research, drafts, and half-formed ideas in one living library.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                id="start"
                href="#start"
                className="inline-flex items-center gap-2 bg-[#1c5c45] px-5 py-3 text-sm font-medium text-white transition-transform active:scale-[0.98] hover:bg-[#164a37]"
              >
                Start free
                <ArrowRightIcon weight="bold" className="h-4 w-4" />
              </a>
              <a
                href="#library"
                className="inline-flex items-center border border-[#1c2420]/40 px-5 py-3 text-sm font-medium text-[#1c2420] hover:bg-white/60"
              >
                Browse library
              </a>
            </div>
          </div>
          <div className="relative min-h-[320px] md:col-span-7 md:min-h-[520px]">
            <Image
              src="/variants/with-taste-skill/grok-4.5/iterations/two/hero-two.png"
              alt="Editorial knowledge workspace with notebooks and pinned notes"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
          </div>
        </section>

        <section className="border-y border-[#1c2420]/12 bg-white/50 py-10">
          <div className="mx-auto max-w-[1400px] px-5 md:px-10">
            <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {TRUSTED_LOGOS.map((logo) => (
                <li key={logo.slug}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logoUrl(logo.slug, "4a5750")}
                    alt={logo.name}
                    width={88}
                    height={24}
                    className="h-5 w-auto opacity-80"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Practice - full-bleed quote + stacked narrative */}
        <section id="practice" className="mx-auto max-w-[1400px] px-5 py-28 md:px-10">
          <Reveal>
            <h2 className="max-w-[18ch] font-[family-name:var(--font-newsreader)] text-4xl leading-tight tracking-tight md:text-5xl">
              Writing is thinking. Lumen is the desk that remembers.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {[
              {
                title: "Morning pages",
                body: "Dump the fog. Tag nothing. Come back when a thread pulls you.",
              },
              {
                title: "Research trails",
                body: "Clip sources beside your notes. The citation stays attached to the thought.",
              },
              {
                title: "Draft rooms",
                body: "Pull linked notes into a canvas when an essay starts to form.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <article className="border-t border-[#1c2420]/20 pt-5">
                  <h3 className="font-[family-name:var(--font-newsreader)] text-2xl italic">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4a5750]">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Library - split image feature, different family */}
        <section id="library" className="border-y border-[#1c2420]/12 bg-[#e4e8e2] py-24">
          <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 md:grid-cols-2 md:px-10">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/variants/with-taste-skill/grok-4.5/iterations/two/feature-capture.png"
                  alt="Hands writing beside a tablet with a note interface"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-[family-name:var(--font-newsreader)] text-4xl leading-tight tracking-tight md:text-5xl">
                Your library grows sideways, not into folders.
              </h2>
              <p className="mt-5 max-w-[42ch] text-base leading-relaxed text-[#4a5750]">
                Links replace nesting. Related notes gather around the idea you are holding right now.
              </p>
              <a
                href="#start"
                className="mt-8 inline-flex items-center gap-2 border border-[#1c2420]/40 bg-white/50 px-5 py-3 text-sm font-medium hover:bg-white"
              >
                Start free
                <ArrowRightIcon weight="bold" className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* Voices - testimonials as editorial columns */}
        <section id="voices" className="mx-auto max-w-[1400px] px-5 py-28 md:px-10">
          <Reveal>
            <h2 className="font-[family-name:var(--font-newsreader)] text-3xl tracking-tight md:text-4xl">
              From writers who keep a long memory
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <Reveal delay={0.05}>
              <blockquote className="border-l-2 border-[#1c5c45] pl-6">
                <p className="font-[family-name:var(--font-newsreader)] text-xl leading-relaxed md:text-2xl">
                  &ldquo;I finally stopped hunting through Drive for that one paragraph from March.&rdquo;
                </p>
                <footer className="mt-4 text-sm text-[#4a5750]">
                  Elena Voss - Essayist
                </footer>
              </blockquote>
            </Reveal>
            <Reveal delay={0.1}>
              <blockquote className="border-l-2 border-[#1c5c45] pl-6">
                <p className="font-[family-name:var(--font-newsreader)] text-xl leading-relaxed md:text-2xl">
                  &ldquo;Lumen feels like a commonplace book that learned how to search.&rdquo;
                </p>
                <footer className="mt-4 text-sm text-[#4a5750]">
                  Theo Marquez - Research lead
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* Feature image strip */}
        <section className="mx-auto max-w-[1400px] px-5 pb-8 md:px-10">
          <Reveal>
            <div className="relative aspect-[21/9] overflow-hidden md:aspect-[24/9]">
              <Image
                src="/variants/with-taste-skill/grok-4.5/iterations/two/feature-links.png"
                alt="Linked note cards on a cool gray surface"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </Reveal>
        </section>

        {/* Closing CTA */}
        <section className="mx-auto max-w-[900px] px-5 py-28 text-center md:px-10">
          <Reveal>
            <h2 className="font-[family-name:var(--font-newsreader)] text-4xl leading-tight tracking-tight md:text-5xl">
              Keep a mind you can return to.
            </h2>
            <p className="mx-auto mt-5 max-w-[40ch] text-[#4a5750]">
              Import your Markdown vault. Start linking tonight.
            </p>
            <a
              href="#start"
              className="mt-8 inline-flex items-center gap-2 bg-[#1c5c45] px-6 py-3.5 text-sm font-medium text-white transition-transform active:scale-[0.98] hover:bg-[#164a37]"
            >
              Start free
              <ArrowRightIcon weight="bold" className="h-4 w-4" />
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-[#1c2420]/12 py-10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 text-sm text-[#4a5750] md:flex-row md:items-center md:justify-between md:px-10">
          <p className="font-[family-name:var(--font-newsreader)] text-lg italic text-[#1c2420]">
            Lumen
          </p>
          <p>© 2026 Lumen Labs</p>
        </div>
      </footer>
    </div>
  );
}
