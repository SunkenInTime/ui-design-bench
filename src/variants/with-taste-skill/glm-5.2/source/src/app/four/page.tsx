import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Notebook,
  Graph,
  Brain,
  Sparkle,
  Check,
} from "../../components/icons";
import { Reveal } from "../../components/reveal";
import { Magnetic, HoverLift, Float } from "../../components/motion-primitives";
import { Logo } from "../../components/logo";

export const metadata: Metadata = {
  title: "Marginalia · Rose Studio (Iteration 4)",
  description:
    "Keep every thought and find the ones that matter. Warm, motion-led design direction for Marginalia.",
};

const TRUSTED = [
  { slug: "figma", label: "Figma" },
  { slug: "notion", label: "Notion" },
  { slug: "linear", label: "Linear" },
  { slug: "dropbox", label: "Dropbox" },
  { slug: "slack", label: "Slack" },
];

const GRID = [
  {
    icon: Notebook,
    title: "Capture",
    body: "Notes, sketches, voice memos, and clippings land in one calm inbox.",
  },
  {
    icon: Graph,
    title: "Connect",
    body: "Ideas link themselves by meaning, so the thread is never lost.",
  },
  {
    icon: Brain,
    title: "Recall",
    body: "Ask in plain language and pull the right pages up on demand.",
  },
];

const GALLERY = [
  { seed: "marginalia-studio-a", w: 900, h: 1100, alt: "A wall of pinned notes and photographs", span: "row-span-2" },
  { seed: "marginalia-studio-b", w: 900, h: 700, alt: "A desk with a notebook open to a diagram", span: "" },
  { seed: "marginalia-studio-c", w: 900, h: 700, alt: "Close up of handwriting across a journal page", span: "" },
];

export default function FourPage() {
  return (
    <div className="min-h-[100dvh] bg-[#171113] text-zinc-100 antialiased selection:bg-rose-500/30">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#171113]/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link href="/four" aria-label="Marginalia home">
            <Logo className="text-zinc-100" markClassName="size-5 text-rose-400" />
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/four#studio" className="text-sm text-zinc-400 transition-colors hover:text-zinc-100">
              The studio
            </Link>
            <Link href="/four#features" className="text-sm text-zinc-400 transition-colors hover:text-zinc-100">
              Features
            </Link>
            <Link href="/four#gallery" className="text-sm text-zinc-400 transition-colors hover:text-zinc-100">
              Gallery
            </Link>
          </div>
          <Link
            href="/four#cta"
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-rose-500 px-4 text-sm font-medium text-white transition-all hover:bg-rose-400 active:translate-y-px"
          >
            Get started
            <ArrowRight size={15} weight="bold" />
          </Link>
        </nav>
      </header>

      <main>
        {/* Hero - split with overlapping image collage */}
        <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 pt-20 pb-24 md:grid-cols-2 md:gap-16 md:pt-24 md:pb-32">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-300">
              <Sparkle size={14} weight="fill" />
              New · Recall is here
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
              Keep every thought.
              <br />
              Find the ones that matter.
            </h1>
            <p className="mt-6 max-w-[50ch] text-lg leading-relaxed text-zinc-400">
              Marginalia gathers what you read, sketch, and scribble, then
              connects it into ideas you can pull up on demand.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Magnetic>
                <Link
                  href="/four#cta"
                  className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-rose-500 px-6 text-[15px] font-medium text-white transition-colors hover:bg-rose-400 active:translate-y-px"
                >
                  Get started free
                  <ArrowRight size={16} weight="bold" />
                </Link>
              </Magnetic>
              <Link
                href="/four#studio"
                className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full border border-white/15 px-6 text-[15px] font-medium text-zinc-200 transition-all hover:bg-white/5 active:translate-y-px"
              >
                See the studio
              </Link>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[480px]">
            <div className="absolute -inset-6 -z-10 rounded-full bg-rose-500/15 blur-3xl" aria-hidden="true" />
            <div className="absolute left-0 top-4 h-[78%] w-[72%] overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
              <Image
                src="https://picsum.photos/seed/marginalia-studio-hero/900/1100"
                alt="A creative studio wall covered in notes and images"
                width={900}
                height={1100}
                preload
                sizes="(max-width: 768px) 70vw, 40vw"
                className="h-full w-full object-cover"
              />
            </div>
            <Float className="absolute bottom-2 right-0 w-[46%]" delay={0.4}>
              <div className="overflow-hidden rounded-2xl border border-rose-500/40 bg-zinc-900 shadow-[0_30px_70px_-25px_rgba(244,63,94,0.5)]">
                <Image
                  src="https://picsum.photos/seed/marginalia-studio-detail/700/700"
                  alt="A close detail of a journal page with sketches"
                  width={700}
                  height={700}
                  sizes="(max-width: 768px) 40vw, 22vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </Float>
          </div>
        </section>

        {/* Trusted by - static row */}
        <section className="border-y border-white/10 bg-white/[0.02] py-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5">
            <p className="text-xs text-zinc-500">
              Kept by teams at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
              {TRUSTED.map((b) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={b.slug}
                  src={`https://cdn.simpleicons.org/${b.slug}/d4d4d8`}
                  alt={`${b.label} logo`}
                  width={84}
                  height={22}
                  className="h-5 w-auto opacity-80"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Studio - zigzag feature (image left, text right) */}
        <section id="studio" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
                <Image
                  src="https://picsum.photos/seed/marginalia-studio-desk/1200/1000"
                  alt="A warm-lit desk with an open notebook and tools"
                  width={1200}
                  height={1000}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                A studio for your thinking.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                Marginalia is built around the way creative work actually
                happens: scattered, then resolved. Capture first, organize
                never, retrieve always.
              </p>
              <ul className="mt-8 space-y-4">
                {["One inbox for every kind of input", "Links that form while you write", "Retrieve by asking, not by remembering"].map(
                  (item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-zinc-300">
                      <Check size={15} weight="bold" className="mt-1 shrink-0 text-rose-400" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Features - 3-up hover-lift grid */}
        <section id="features" className="border-y border-white/10 bg-white/[0.02] py-24 md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal className="mb-12 max-w-2xl">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-rose-400">
                Features
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                Three moves, one calm workspace.
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {GRID.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.08}>
                  <HoverLift className="h-full">
                    <div className="group h-full rounded-2xl border border-white/10 bg-[#221719] p-7 transition-colors hover:border-rose-500/40">
                      <f.icon size={28} weight="duotone" className="text-rose-400" />
                      <h3 className="mt-8 text-xl font-semibold tracking-tight text-zinc-50">
                        {f.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-zinc-400">
                        {f.body}
                      </p>
                    </div>
                  </HoverLift>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery - asymmetric image grid with hover zoom */}
        <section id="gallery" className="mx-auto max-w-6xl px-5 py-24 md:py-28">
          <Reveal className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
              From the pages of real users.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              A glimpse of notebooks kept in Marginalia.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:grid-rows-2">
            {GALLERY.map((g, i) => (
              <Reveal
                key={g.seed}
                delay={i * 0.08}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 ${g.span}`}
              >
                <Image
                  src={`https://picsum.photos/seed/${g.seed}/${g.w}/${g.h}`}
                  alt={g.alt}
                  width={g.w}
                  height={g.h}
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Pull quote */}
        <section className="mx-auto max-w-4xl px-5 py-28 text-center md:py-36">
          <Reveal>
            <blockquote className="text-balance text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl md:text-[2.75rem]">
              &ldquo;Marginalia feels less like an app and more like a room I
              can go think inside.&rdquo;
            </blockquote>
            <figcaption className="mt-8 text-sm text-zinc-500">
              <span className="font-medium text-zinc-200">Mira Tahan</span>
              {" · "}
              Illustrator and note-taker
            </figcaption>
          </Reveal>
        </section>

        {/* CTA - magnetic, rose gradient */}
        <section id="cta" className="mx-auto max-w-6xl px-5 pb-24">
          <div className="relative overflow-hidden rounded-3xl border border-rose-500/20 bg-gradient-to-br from-[#2a171c] to-[#171113] px-6 py-16 text-center sm:px-12 md:py-20">
            <div className="absolute -right-24 -bottom-24 size-72 rounded-full bg-rose-500/20 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                Give your thinking a home.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-zinc-300">
                Free for personal use. Set up in a minute, keep it for years.
              </p>
              <div className="mt-8 flex justify-center">
                <Magnetic strength={0.45}>
                  <Link
                    href="/four#"
                    className="inline-flex h-12 items-center justify-center gap-1.5 rounded-full bg-rose-500 px-7 text-[15px] font-medium text-white transition-colors hover:bg-rose-400 active:translate-y-px"
                  >
                    Get started free
                    <ArrowRight size={16} weight="bold" />
                  </Link>
                </Magnetic>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-12 sm:flex-row sm:items-center">
          <div>
            <Logo className="text-zinc-100" markClassName="size-5 text-rose-400" />
            <p className="mt-3 max-w-xs text-sm text-zinc-500">
              A second brain for what you read, think, and make.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-400">
            <Link href="/four#studio" className="hover:text-zinc-100">The studio</Link>
            <Link href="/four#features" className="hover:text-zinc-100">Features</Link>
            <Link href="/four#gallery" className="hover:text-zinc-100">Gallery</Link>
            <Link href="/" className="hover:text-zinc-100">All iterations</Link>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-5 pb-10 text-xs text-zinc-600">
          <ArrowUpRight size={12} />
          <span>Marginalia, a design concept.</span>
        </div>
      </footer>
    </div>
  );
}
