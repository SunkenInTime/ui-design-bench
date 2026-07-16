import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MagnifyingGlass,
  Link as LinkIcon,
  CalendarCheck,
  LockKey,
  FileMd,
  ArrowsClockwise,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/variants/with-taste-skill/kimi-k3/source/components/Reveal";

export const metadata: Metadata = {
  title: "Marginalia - your knowledge, connected",
  description:
    "Iteration 2: dark, local-first, systems-flavored. Backlinks, instant search, and spaced resurfacing in one notebook.",
};

const accentText = "#7aa0ff";

const stats = [
  ["40 ms", "median full-text search"],
  ["100%", "usable offline"],
  ["0", "trackers in the app"],
  ["1 file", "per note, plain Markdown"],
];

const features = [
  {
    icon: MagnifyingGlass,
    title: "Instant search",
    body: "Every note indexed locally. Results appear as you type, even across a decade of writing.",
  },
  {
    icon: LinkIcon,
    title: "Backlinks",
    body: "Type [[ and link to anything. Each note lists what points at it, so context survives.",
  },
  {
    icon: CalendarCheck,
    title: "Spaced resurfacing",
    body: "Five old notes each morning, scheduled by how often you return to them.",
  },
  {
    icon: LockKey,
    title: "End-to-end encrypted",
    body: "Sync is encrypted on your device before it leaves. We could not read your notes if asked.",
  },
  {
    icon: FileMd,
    title: "Plain Markdown",
    body: "No proprietary format. Your archive opens in any editor, today and in twenty years.",
  },
  {
    icon: ArrowsClockwise,
    title: "Sync when you want",
    body: "Devices sync peer to peer or through our relay. Airplane mode is a first-class state.",
  },
];

const marqueeItems = [
  "reading log, july",
  "forgetting curve",
  "q3 research plan",
  "books to reread",
  "interview notes, okafor",
  "memory palace",
  "garden layout 2026",
  "thesis outline v4",
  "conference talks",
  "recipes to test",
];

export default function IterationTwo() {
  return (
    <main className="min-h-[100dvh]">
      {/* Nav */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="#" className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#2b57e8] font-mono text-sm font-bold text-white">
              M
            </span>
            <span className="font-mono text-sm tracking-tight text-zinc-100">
              marginalia
            </span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
            <a href="#features" className="transition hover:text-zinc-100">
              Features
            </a>
            <a href="#privacy" className="transition hover:text-zinc-100">
              Privacy
            </a>
            <a href="#pricing" className="transition hover:text-zinc-100">
              Pricing
            </a>
            <a href="#start" className="transition hover:text-zinc-100">
              Sign in
            </a>
          </nav>
          <a
            href="#start"
            className="rounded-md bg-[#2b57e8] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#2448c4] active:translate-y-px"
          >
            Get started
          </a>
        </div>
      </header>

      {/* Hero: copy left, real component preview right */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 py-16 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-12 lg:py-0">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em]" style={{ color: accentText }}>
              Local-first notes
            </p>
            <h1 className="mt-5 max-w-[16ch] text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Your knowledge, connected.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-zinc-400 md:text-lg">
              Backlinks, instant search, and spaced resurfacing in a notebook
              that works offline and syncs when you want.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#start"
                className="rounded-md bg-[#2b57e8] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2448c4] active:translate-y-px"
              >
                Get started
              </a>
              <a
                href="#features"
                className="group inline-flex items-center gap-1.5 rounded-md border border-white/15 px-6 py-3 text-sm font-medium text-zinc-100 transition hover:border-white/30 active:translate-y-px"
              >
                How it works
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Real component preview: an actual note with backlinks */}
        <div className="lg:col-span-6">
          <Reveal delay={0.15}>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -left-14 -top-14 hidden w-56 -rotate-6 rounded-md border border-white/10 bg-[#101014] p-4 md:block"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                  Linked note
                </p>
                <p className="mt-2 text-sm font-medium text-zinc-200">
                  memory palace
                </p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                  Loci work because spatial recall is older than writing.
                </p>
              </div>
              <div className="relative rounded-md border border-white/10 bg-[#101014] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                  <p className="font-mono text-xs text-zinc-500">
                    daily/2026-07-16.md
                  </p>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                    synced
                  </span>
                </div>
                <div className="px-5 py-5">
                  <p className="text-base font-medium text-zinc-100">
                    Reading log, July
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    Finished the chapter on spaced repetition. The spacing
                    effect is stronger when retrieval is effortful. Connect to{" "}
                    <span className="rounded-sm bg-[#2b57e8]/15 px-1 text-[#9dbcff]">
                      [[forgetting curve]]
                    </span>{" "}
                    and{" "}
                    <span className="rounded-sm bg-[#2b57e8]/15 px-1 text-[#9dbcff]">
                      [[memory palace]]
                    </span>
                    .
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    Idea: resurfacing queue should weight notes I almost
                    remembered higher than ones I recalled instantly.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 border-t border-white/10 px-5 py-3">
                  {["forgetting curve", "memory palace", "srs research"].map(
                    (b) => (
                      <span
                        key={b}
                        className="rounded-sm border border-white/10 bg-white/5 px-2 py-1 font-mono text-[11px] text-zinc-400"
                      >
                        {b}
                      </span>
                    )
                  )}
                  <span className="ml-auto font-mono text-[11px] text-zinc-600">
                    3 backlinks, edited 2h ago
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stat strip */}
      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 lg:grid-cols-4">
          {stats.map(([figure, label]) => (
            <div key={label}>
              <p className="font-mono text-2xl text-zinc-100 md:text-3xl">
                {figure}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature grid: hairline cells, no cards */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="max-w-[22ch] text-3xl font-semibold leading-[1.1] tracking-tight md:text-4xl">
            Built for decades of notes, not demo day
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-14 overflow-hidden rounded-md border border-white/10">
            <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div key={f.title} className="bg-[#0a0a0b] p-7">
                  <f.icon size={22} weight="light" color={accentText} />
                  <h3 className="mt-4 text-sm font-semibold text-zinc-100">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Single marquee: real note titles drifting by */}
      <section aria-label="Example note titles" className="overflow-hidden border-y border-white/10 py-4">
        <div className="animate-marquee flex w-max items-center gap-8 motion-reduce:animate-none">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="whitespace-nowrap font-mono text-xs text-zinc-500"
            >
              {item}
              <span className="ml-8 text-zinc-700">/</span>
            </span>
          ))}
        </div>
      </section>

      {/* Privacy: text + image split */}
      <section id="privacy" className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div>
          <Reveal>
            <h2 className="max-w-[20ch] text-3xl font-semibold leading-[1.1] tracking-tight md:text-4xl">
              Your notes never train a model
            </h2>
            <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-zinc-400">
              Encryption keys live on your devices. Sync moves ciphertext, the
              relay stores ciphertext, and deletion actually deletes. No ads, no
              data resale, no exceptions buried in a policy.
            </p>
            <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-zinc-400">
              The business model is a subscription. That is the whole model.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <Image
            src="https://picsum.photos/id/0/1100/850"
            alt="A laptop and phone on a dark desk, in black and white"
            width={1100}
            height={850}
            className="aspect-[11/8.5] w-full rounded-md border border-white/10 object-cover grayscale"
          />
        </Reveal>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <h2 className="max-w-[20ch] text-3xl font-semibold leading-[1.1] tracking-tight md:text-4xl">
              Two plans, one of them free
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <div className="rounded-md border border-white/10 p-8">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Solo
                </p>
                <p className="mt-4 font-mono text-4xl text-zinc-100">
                  $0
                  <span className="text-base text-zinc-500"> forever</span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  One device, unlimited notes, full search and backlinks. Most
                  people never need more.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-md border border-[#2b57e8]/50 bg-[#2b57e8]/10 p-8">
                <p className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: accentText }}>
                  Sync
                </p>
                <p className="mt-4 font-mono text-4xl text-zinc-100">
                  $8
                  <span className="text-base text-zinc-500"> per month</span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  Encrypted sync across every device, version history, and
                  priority support. 30-day trial, cancel in two clicks.
                </p>
                <a
                  id="start"
                  href="#"
                  className="mt-6 inline-block rounded-md bg-[#2b57e8] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2448c4] active:translate-y-px"
                >
                  Get started
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#2b57e8] font-mono text-sm font-bold text-white">
                M
              </span>
              <span className="font-mono text-sm text-zinc-100">marginalia</span>
            </div>
            <p className="mt-3 max-w-[36ch] text-xs leading-relaxed text-zinc-500">
              A second brain that works offline and answers only to you.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 text-sm text-zinc-400 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-600">
                Product
              </p>
              <a href="#features" className="transition hover:text-zinc-100">Features</a>
              <a href="#pricing" className="transition hover:text-zinc-100">Pricing</a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-600">
                Company
              </p>
              <a href="#" className="transition hover:text-zinc-100">About</a>
              <a href="#" className="transition hover:text-zinc-100">Blog</a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-600">
                Legal
              </p>
              <a href="#" className="transition hover:text-zinc-100">Privacy</a>
              <a href="#" className="transition hover:text-zinc-100">Terms</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <p className="mx-auto max-w-6xl px-6 py-5 font-mono text-xs text-zinc-600">
            © 2026 Marginalia
          </p>
        </div>
      </footer>
    </main>
  );
}
