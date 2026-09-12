import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "../../components/icons";
import { Reveal } from "../../components/reveal";
import { Logo, LogoMark } from "../../components/logo";

export const metadata: Metadata = {
  title: "Marginalia · Mono Brutalist (Iteration 5)",
  description:
    "A second brain in plain text. Sharp, brutalist design direction for Marginalia.",
};

const INDEX = [
  { n: "01", title: "Capture", body: "One inbox. Text, images, audio, links. No folder required." },
  { n: "02", title: "Link", body: "Write [[note]] once. Backlinks appear on their own." },
  { n: "03", title: "Search", body: "Query syntax across years of notes in milliseconds." },
  { n: "04", title: "Sync", body: "Local-first files with end-to-end encrypted sync." },
  { n: "05", title: "Own", body: "Plain markdown on disk. No proprietary format. No lock-in." },
];

export default function FivePage() {
  return (
    <div className="min-h-[100dvh] bg-[#ececea] text-[#111110] antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b-2 border-[#111110] bg-[#ececea]/90 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link href="/five" aria-label="Marginalia home">
            <Logo className="text-[#111110]" />
          </Link>
          <div className="hidden items-center gap-7 md:flex">
            <Link href="/five#index" className="font-mono text-sm uppercase tracking-tight text-[#111110]/70 transition-colors hover:text-[#111110]">
              Index
            </Link>
            <Link href="/five#features" className="font-mono text-sm uppercase tracking-tight text-[#111110]/70 transition-colors hover:text-[#111110]">
              Features
            </Link>
            <Link href="/five#docs" className="font-mono text-sm uppercase tracking-tight text-[#111110]/70 transition-colors hover:text-[#111110]">
              Docs
            </Link>
          </div>
          <Link
            href="/five#cta"
            className="inline-flex h-9 items-center gap-1.5 bg-[#1f47ff] px-4 font-mono text-sm font-bold uppercase tracking-tight text-white transition-colors hover:bg-[#0b2fd6] active:translate-y-px"
          >
            Get started
            <ArrowRight size={15} weight="bold" />
          </Link>
        </nav>
      </header>

      <main>
        {/* Hero - brutalist poster */}
        <section className="mx-auto max-w-6xl px-5 pt-16 pb-20 md:pt-20 md:pb-24">
          <div className="border-b-2 border-[#111110] pb-3 font-mono text-[11px] uppercase tracking-[0.15em] text-[#111110]/70">
            Marginalia / A second brain / Plain text
          </div>

          <div className="grid grid-cols-1 items-end gap-8 pt-10 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-8">
              <h1 className="text-5xl font-bold uppercase leading-[0.95] tracking-tight text-[#111110] sm:text-6xl md:text-7xl lg:text-8xl">
                A second brain in plain text.
              </h1>
              <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-[#111110]/75 sm:text-lg">
                No folders. No lock-in. Just your notes as files, linked both
                ways, searchable in milliseconds, owned by you.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch">
                <Link
                  href="/five#cta"
                  className="inline-flex h-12 items-center justify-center gap-1.5 bg-[#1f47ff] px-6 font-mono text-sm font-bold uppercase tracking-tight text-white transition-colors hover:bg-[#0b2fd6] active:translate-y-px"
                >
                  Get started
                  <ArrowRight size={16} weight="bold" />
                </Link>
                <Link
                  href="/five#docs"
                  className="inline-flex h-12 items-center justify-center gap-1.5 border-2 border-[#111110] bg-transparent px-6 font-mono text-sm font-bold uppercase tracking-tight text-[#111110] transition-colors hover:bg-[#111110] hover:text-white active:translate-y-px"
                >
                  Read docs
                </Link>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="relative border-2 border-[#111110] bg-white">
                <div className="absolute -left-2 -top-2 size-full border-2 border-[#1f47ff]" aria-hidden="true" />
                <Image
                  src="https://picsum.photos/seed/marginalia-brutalist-object/800/1000"
                  alt="A stark photograph of a stack of index cards on a desk"
                  width={800}
                  height={1000}
                  preload
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="relative h-auto w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Slogan marquee - the one marquee for this page */}
        <section className="overflow-hidden border-y-2 border-[#111110] bg-[#111110] py-4 text-white">
          <div className="flex w-max animate-marquee items-center gap-8 pr-8 font-mono text-2xl font-bold uppercase tracking-tight sm:text-3xl">
            {Array.from({ length: 2 }).map((_, dup) => (
              <span key={dup} className="flex items-center gap-8" aria-hidden={dup === 1}>
                <span>Plain text</span>
                <span className="text-[#1f47ff]">/</span>
                <span>Bidirectional</span>
                <span className="text-[#1f47ff]">/</span>
                <span>Local-first</span>
                <span className="text-[#1f47ff]">/</span>
                <span>Encrypted</span>
                <span className="text-[#1f47ff]">/</span>
                <span>Yours</span>
                <span className="text-[#1f47ff]">/</span>
              </span>
            ))}
          </div>
        </section>

        {/* Index - brutalist spec list */}
        <section id="index" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <Reveal className="mb-10">
            <h2 className="text-3xl font-bold uppercase tracking-tight text-[#111110] sm:text-4xl md:text-5xl">
              The index.
            </h2>
          </Reveal>
          <ul className="border-t-2 border-[#111110]">
            {INDEX.map((row, i) => (
              <Reveal key={row.n} delay={i * 0.05}>
                <li className="grid grid-cols-12 items-baseline gap-4 border-b-2 border-[#111110] py-6 transition-colors hover:bg-[#111110] hover:text-white">
                  <span className="col-span-2 font-mono text-base font-bold tabular-nums text-[#1f47ff] sm:col-span-1 sm:text-lg">
                    {row.n}
                  </span>
                  <span className="col-span-10 text-xl font-bold uppercase tracking-tight sm:col-span-4 sm:text-2xl">
                    {row.title}
                  </span>
                  <span className="col-span-12 max-w-[48ch] text-[15px] leading-relaxed text-[#111110]/75 sm:col-span-7 sm:text-base">
                    {row.body}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* Features - brutalist cards with invert hover */}
        <section id="features" className="border-y-2 border-[#111110] bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal className="mb-10 max-w-2xl">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.15em] text-[#1f47ff]">
                02 / Features
              </p>
              <h2 className="text-3xl font-bold uppercase tracking-tight text-[#111110] sm:text-4xl md:text-5xl">
                Built like infrastructure.
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 border-2 border-[#111110] md:grid-cols-3">
              {[
                { n: "01", title: "Files, not a database", body: "Your notes are markdown on disk. Greppable, portable, permanent." },
                { n: "02", title: "Links both ways", body: "Every [[link]] creates a backlink. The graph builds itself." },
                { n: "03", title: "Search that scales", body: "Instant full-text and query syntax across decades of notes." },
              ].map((c, i) => (
                <Reveal
                  key={c.n}
                  delay={i * 0.08}
                  className={`group bg-[#ececea] p-7 transition-colors hover:bg-[#1f47ff] hover:text-white ${
                    i < 2 ? "border-b-2 border-[#111110] md:border-b-0 md:border-r-2" : ""
                  }`}
                >
                  <span className="font-mono text-sm font-bold tabular-nums text-[#1f47ff] group-hover:text-white">
                    {c.n}
                  </span>
                  <h3 className="mt-6 text-xl font-bold uppercase tracking-tight">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#111110]/75 group-hover:text-white/85">
                    {c.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pull quote - thick left rule */}
        <section className="mx-auto max-w-5xl px-5 py-24 md:py-32">
          <Reveal>
            <div className="border-l-4 border-[#1f47ff] pl-6 sm:pl-10">
              <blockquote className="text-balance text-3xl font-bold uppercase leading-tight tracking-tight text-[#111110] sm:text-4xl md:text-[2.6rem]">
                &ldquo;The first note app that did not try to own my
                thinking.&rdquo;
              </blockquote>
              <figcaption className="mt-6 font-mono text-sm uppercase tracking-tight text-[#111110]/70">
                Soren K. / Backend engineer
              </figcaption>
            </div>
          </Reveal>
        </section>

        {/* CTA - black block */}
        <section id="cta" className="mx-auto max-w-6xl px-5 pb-24">
          <div className="relative border-2 border-[#111110] bg-[#111110] px-6 py-16 text-center sm:px-12 md:py-20">
            <div className="absolute -right-2 -top-2 size-full border-2 border-[#1f47ff]" aria-hidden="true" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
                Take it. It is yours.
              </h2>
              <p className="mx-auto mt-4 max-w-md font-mono text-sm uppercase tracking-tight text-white/70">
                Free for personal use / No card / No lock-in
              </p>
              <Link
                href="/five#"
                className="mt-8 inline-flex h-12 items-center justify-center gap-1.5 bg-[#1f47ff] px-7 font-mono text-sm font-bold uppercase tracking-tight text-white transition-colors hover:bg-[#0b2fd6] active:translate-y-px"
              >
                Get started free
                <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - brutalist colophon */}
      <footer className="border-t-2 border-[#111110] bg-[#ececea]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-12 sm:flex-row sm:items-center">
          <div>
            <Logo className="text-[#111110]" />
            <p className="mt-3 max-w-xs font-mono text-sm text-[#111110]/70">
              A second brain in plain text.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-3 font-mono text-sm uppercase tracking-tight text-[#111110]/70">
            <Link href="/five#index" className="hover:text-[#111110]">Index</Link>
            <Link href="/five#features" className="hover:text-[#111110]">Features</Link>
            <Link href="/five#docs" className="hover:text-[#111110]">Docs</Link>
            <Link href="/" className="hover:text-[#111110]">All iterations</Link>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl items-center gap-2 border-t-2 border-[#111110] px-5 py-6 font-mono text-xs uppercase tracking-tight text-[#111110]/60">
          <LogoMark className="size-4" />
          <span>Marginalia / a design concept</span>
          <span className="ml-auto hidden sm:inline">Set in Geist &amp; Geist Mono</span>
        </div>
      </footer>
    </div>
  );
}
