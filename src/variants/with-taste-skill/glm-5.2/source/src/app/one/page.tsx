import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Notebook,
  Graph,
  Brain,
  ArrowsClockwise,
  Lock,
} from "../../components/icons";
import { Reveal } from "../../components/reveal";
import { Logo, LogoMark } from "../../components/logo";

export const metadata: Metadata = {
  title: "Marginalia · Quiet Index (Iteration 1)",
  description:
    "A second brain for every thought. Light, minimalist design direction for Marginalia.",
};

const TRUSTED = [
  { slug: "github", label: "GitHub" },
  { slug: "vercel", label: "Vercel" },
  { slug: "stripe", label: "Stripe" },
  { slug: "linear", label: "Linear" },
  { slug: "figma", label: "Figma" },
  { slug: "slack", label: "Slack" },
  { slug: "notion", label: "Notion" },
  { slug: "dropbox", label: "Dropbox" },
];

const STEPS = [
  {
    icon: Notebook,
    title: "Capture",
    body: "Jot a note, paste a link, or forward an email. Marginalia takes it in without asking where it goes.",
  },
  {
    icon: Graph,
    title: "Connect",
    body: "Links form themselves as you write. Related notes find each other without folders or filing.",
  },
  {
    icon: Brain,
    title: "Recall",
    body: "Ask a question in plain language. Marginalia pulls the threads together from across years of notes.",
  },
];

export default function OnePage() {
  return (
    <div className="min-h-[100dvh] bg-[#f6f6f4] text-zinc-900 antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-zinc-200/60 bg-[#f6f6f4]/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link href="/one" aria-label="Marginalia home">
            <Logo className="text-zinc-900" />
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/one#features" className="text-sm text-zinc-600 transition-colors hover:text-zinc-900">
              Features
            </Link>
            <Link href="/one#how" className="text-sm text-zinc-600 transition-colors hover:text-zinc-900">
              How it works
            </Link>
            <Link href="/one#pricing" className="text-sm text-zinc-600 transition-colors hover:text-zinc-900">
              Pricing
            </Link>
          </div>
          <Link
            href="/one#cta"
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-emerald-600 px-4 text-sm font-medium text-white transition-all hover:bg-emerald-700 active:translate-y-px"
          >
            Get started
            <ArrowRight size={15} weight="bold" />
          </Link>
        </nav>
      </header>

      <main>
        {/* Hero - asymmetric split */}
        <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 pt-20 pb-24 md:grid-cols-2 md:gap-14 md:pt-24 md:pb-28">
          <div className="max-w-xl">
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
              A second brain for every thought.
            </h1>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-zinc-600">
              Capture ideas as they come. Marginalia links them across notes,
              books, and drafts so insight surfaces on its own.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/one#cta"
                className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-emerald-600 px-6 text-[15px] font-medium text-white transition-all hover:bg-emerald-700 active:translate-y-px"
              >
                Get started free
                <ArrowRight size={16} weight="bold" />
              </Link>
              <Link
                href="/one#how"
                className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full border border-zinc-300 bg-white px-6 text-[15px] font-medium text-zinc-800 transition-all hover:border-zinc-400 hover:bg-zinc-50 active:translate-y-px"
              >
                See how it works
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-emerald-200/30 blur-2xl" aria-hidden="true" />
            <div className="overflow-hidden rounded-3xl border border-zinc-200/80 bg-white shadow-[0_20px_60px_-20px_rgba(16,24,40,0.18)]">
              <Image
                src="https://picsum.photos/seed/marginalia-quiet-desk/1200/1400"
                alt="A calm desk with an open notebook and a cup of coffee"
                width={1200}
                height={1400}
                preload
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        {/* Trusted by - logo marquee (the one marquee for this page) */}
        <section className="border-y border-zinc-200/60 bg-white/50 py-10">
          <div className="mx-auto max-w-6xl px-5">
            <p className="mb-7 text-center text-xs text-zinc-400">
              In use by writers, researchers, and builders
            </p>
          </div>
          <div className="marquee-mask overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-12 pr-12">
              {[...TRUSTED, ...TRUSTED].map((b, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={`https://cdn.simpleicons.org/${b.slug}/71717a`}
                  alt={`${b.label} logo`}
                  width={96}
                  height={24}
                  className="h-6 w-auto opacity-70 grayscale"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features - bento */}
        <section id="features" className="mx-auto max-w-6xl px-5 py-24 md:py-28">
          <Reveal className="mb-12 max-w-2xl">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-700">
              Features
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Less app. More thinking.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
              Four things Marginalia does, and almost nothing else.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Cell 1 - wide, image */}
            <Reveal className="md:col-span-2">
              <div className="relative h-full min-h-[260px] overflow-hidden rounded-2xl border border-zinc-200/80">
                <Image
                  src="https://picsum.photos/seed/marginalia-capture/1600/900"
                  alt="A close-up of a hand writing in a paper notebook"
                  width={1600}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-7">
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    Capture anything
                  </h3>
                  <p className="mt-2 max-w-md text-[15px] leading-relaxed text-white/80">
                    Text, images, audio, links, and email. One inbox that never
                    asks you to decide first.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Cell 2 - emerald tint */}
            <Reveal delay={0.06}>
              <div className="flex h-full flex-col justify-between rounded-2xl bg-emerald-50 p-7 ring-1 ring-emerald-100">
                <Graph size={26} weight="duotone" className="text-emerald-700" />
                <div className="mt-10">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                    Links itself
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">
                    Notes connect by meaning, not by the folder you happened to
                    choose.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Cell 3 - white */}
            <Reveal delay={0.06}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white p-7">
                <Brain size={26} weight="duotone" className="text-emerald-700" />
                <div className="mt-10">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                    Recall on demand
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">
                    Ask in plain language. Get answers built from your own
                    archive.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Cell 4 - wide, light gradient */}
            <Reveal delay={0.12} className="md:col-span-2">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-zinc-200/80 bg-gradient-to-br from-white to-emerald-50/60 p-7 sm:flex-row sm:items-center">
                <div className="max-w-md">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                    Syncs everywhere, owned by you
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">
                    Local-first storage with end-to-end encrypted sync. Your
                    notes work offline and stay yours.
                  </p>
                </div>
                <div className="mt-6 flex gap-3 sm:mt-0">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm text-zinc-700 ring-1 ring-zinc-200">
                    <ArrowsClockwise size={16} weight="regular" /> Sync
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm text-zinc-700 ring-1 ring-zinc-200">
                    <Lock size={16} weight="regular" /> E2E
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* How it works - steps */}
        <section id="how" className="border-y border-zinc-200/60 bg-white/60 py-24 md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal className="mb-14 max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                Three moves, not a workflow.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                No setup, no taxonomy to maintain. You write; Marginalia does
                the rest.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-200/80 md:grid-cols-3">
              {STEPS.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.08}>
                  <div className="flex h-full flex-col bg-white p-8">
                    <div className="flex items-center justify-between">
                      <step.icon size={28} weight="duotone" className="text-emerald-700" />
                      <span className="font-mono text-sm tabular-nums text-zinc-300">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-8 text-xl font-semibold tracking-tight text-zinc-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pull quote - editorial full width */}
        <section className="mx-auto max-w-4xl px-5 py-28 text-center md:py-36">
          <Reveal>
            <blockquote className="text-balance text-3xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-4xl md:text-[2.75rem]">
              &ldquo;Marginalia replaced four apps and a notebook I kept losing.
              Now the thinking lives somewhere I can find it.&rdquo;
            </blockquote>
            <figcaption className="mt-8 text-sm text-zinc-500">
              <span className="font-medium text-zinc-800">Dana Okafor</span>
              {" · "}
              Researcher, still writing by hand
            </figcaption>
          </Reveal>
        </section>

        {/* CTA band */}
        <section id="cta" className="mx-auto max-w-6xl px-5 pb-24">
          <div className="relative overflow-hidden rounded-3xl bg-zinc-900 px-6 py-16 text-center sm:px-12 md:py-20">
            <div className="absolute -right-20 -top-20 size-64 rounded-full bg-emerald-500/20 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                Start your second brain today.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-zinc-300">
                Free for personal use. No card, no folders to set up.
              </p>
              <Link
                href="/one#"
                className="mt-8 inline-flex h-12 items-center justify-center gap-1.5 rounded-full bg-emerald-500 px-7 text-[15px] font-medium text-white transition-all hover:bg-emerald-400 active:translate-y-px"
              >
                Get started free
                <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200/60">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-12 sm:flex-row sm:items-center">
          <div>
            <Logo className="text-zinc-900" />
            <p className="mt-3 max-w-xs text-sm text-zinc-500">
              A second brain for what you read, think, and write.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-600">
            <Link href="/one#features" className="hover:text-zinc-900">Features</Link>
            <Link href="/one#how" className="hover:text-zinc-900">How it works</Link>
            <Link href="/one#pricing" className="hover:text-zinc-900">Pricing</Link>
            <Link href="/" className="hover:text-zinc-900">All iterations</Link>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-5 pb-10 text-xs text-zinc-400">
          <LogoMark className="size-4" />
          <span>Marginalia, a design concept.</span>
        </div>
      </footer>
    </div>
  );
}
