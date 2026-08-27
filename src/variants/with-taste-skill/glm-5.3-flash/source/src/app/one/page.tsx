import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Command,
  GithubLogo,
  HardDrives,
  Lightning,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/variants/with-taste-skill/glm-5.3-flash/source/src/components/reveal";
import { GraphCanvas } from "./graph-canvas";

export const metadata: Metadata = {
  title: "Understory | Every thought, connected",
  description:
    "A note-taking app that links your reading, ideas and projects into one living graph. Local-first, blazingly fast.",
};

const SIGNUP = "Start writing free";

function Monogram({ letter, className }: { letter: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={className}
    >
      <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text
        x="16"
        y="21"
        textAnchor="middle"
        fontSize="14"
        fontWeight="600"
        fill="currentColor"
        fontFamily="var(--font-geist-mono), monospace"
      >
        {letter}
      </text>
    </svg>
  );
}

const CUSTOMERS = [
  { name: "Meridian Labs", letter: "M" },
  { name: "Copperline", letter: "C" },
  { name: "Old Harbor Games", letter: "O" },
  { name: "Northsouth Press", letter: "N" },
  { name: "Halden & Co", letter: "H" },
  { name: "Fieldnote Studio", letter: "F" },
];

const BACKLINK_NOTE = {
  title: "Attention as a budget",
  backlinks: [
    "Deep work rituals",
    "Reading queue 2026",
    "Team offsite prep",
  ],
};

const PALETTE_ROWS = [
  { icon: Command, label: "Link a note", keys: "[ [" },
  { icon: Lightning, label: "Capture from anywhere", keys: "⌘ ⇧ N" },
];

export default function OnePage() {
  return (
    <div className="min-h-[100dvh] bg-zinc-950 text-zinc-100 selection:bg-emerald-400/25">
      <header className="sticky top-0 z-30 border-b border-white/5 bg-zinc-950/70 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/with-taste-skill/glm-5.3-flash/1" className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400 font-mono text-sm font-bold text-zinc-950">
              U
            </span>
            <span className="text-[15px] font-semibold tracking-tight">Understory</span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-zinc-400 transition-colors hover:text-zinc-100">
              Features
            </a>
            <a href="#how" className="text-sm text-zinc-400 transition-colors hover:text-zinc-100">
              Method
            </a>
            <a href="#customers" className="text-sm text-zinc-400 transition-colors hover:text-zinc-100">
              Customers
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-1.5 text-sm text-zinc-400 md:flex">
              <GithubLogo weight="fill" className="h-4 w-4" />
              Open source
            </span>
            <Link
              href="#download"
              className="rounded-xl bg-emerald-400 px-4 py-2 text-sm font-medium text-zinc-950 transition-transform duration-200 hover:-translate-y-px active:translate-y-0 active:scale-[0.98]"
            >
              {SIGNUP}
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_75%_20%,rgba(52,211,153,0.08),transparent_65%)]"
          />
          <div className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-[1400px] items-center gap-12 px-4 pb-16 pt-16 sm:px-6 md:pt-20 lg:grid-cols-2 lg:gap-8 lg:px-8">
            <div className="max-w-xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-300">
                Your second brain, wired
              </p>
              <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tighter sm:text-5xl lg:text-6xl">
                Notes that link themselves.
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-400">
                Understory links every capture to what you already know, so
                resurfacing an idea takes seconds.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  id="download"
                  href="#features"
                  className="group inline-flex h-11 items-center gap-2 rounded-xl bg-emerald-400 px-6 text-[15px] font-medium text-zinc-950 transition-transform duration-200 hover:-translate-y-px active:translate-y-0 active:scale-[0.98]"
                >
                  {SIGNUP}
                  <ArrowRight
                    weight="bold"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>
                <a
                  href="#how"
                  className="inline-flex h-11 items-center rounded-xl border border-white/10 px-6 text-[15px] text-zinc-200 transition-colors hover:border-white/25 hover:bg-white/5"
                >
                  See the method
                </a>
              </div>
            </div>
            <div className="relative aspect-square max-h-[520px] w-full max-w-[520px] justify-self-end rounded-xl border border-white/5 bg-zinc-900/40 lg:aspect-auto lg:h-[560px]">
              <GraphCanvas />
            </div>
          </div>
        </section>

        {/* Customers */}
        <section id="customers" className="border-y border-white/5 bg-zinc-900/30">
          <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8">
            <Reveal className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-zinc-500">
              {CUSTOMERS.map((c) => (
                <Monogram key={c.name} letter={c.letter} className="h-8 w-8" />
              ))}
            </Reveal>
          </div>
        </section>

        {/* Bento features */}
        <section id="features" className="mx-auto max-w-[1400px] scroll-mt-16 px-4 py-24 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl">
              Built for how memory actually works.
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-zinc-400">
              Associations first, hierarchies later. Each feature strengthens
              the web between your notes.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-6">
            <Reveal className="md:col-span-4" delay={0}>
              <div className="flex h-full flex-col justify-between gap-8 rounded-xl border border-white/5 bg-zinc-900/50 p-8">
                <div>
                  <h3 className="text-xl font-medium tracking-tight">Backlinks build themselves</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-400">
                    Mention a note anywhere and every reference updates in
                    place. No manual cross-referencing.
                  </p>
                </div>
                <div className="rounded-lg border border-white/5 bg-zinc-950/80 p-5">
                  <p className="text-sm font-medium">{BACKLINK_NOTE.title}</p>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                    Linked mentions
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {BACKLINK_NOTE.backlinks.map((b) => (
                      <li
                        key={b}
                        className="rounded-lg bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal className="md:col-span-2" delay={0.06}>
              <div className="relative h-full min-h-56 overflow-hidden rounded-xl border border-white/5">
                <Image
                  src="https://picsum.photos/seed/understory-library-desk/800/1000"
                  alt="A desk covered in open notebooks and index cards"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-lg font-medium tracking-tight">Your library, searchable</h3>
                </div>
              </div>
            </Reveal>

            <Reveal className="md:col-span-2" delay={0}>
              <div className="flex h-full flex-col gap-4 rounded-xl border border-white/5 bg-gradient-to-br from-emerald-400/15 via-zinc-900/60 to-zinc-900/60 p-8">
                <Lightning weight="duotone" className="h-8 w-8 text-emerald-300" />
                <h3 className="text-xl font-medium tracking-tight">Capture in half a second</h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  A global quick-capture window files thoughts under today&rsquo;s
                  note before the idea cools.
                </p>
              </div>
            </Reveal>

            <Reveal className="md:col-span-2" delay={0.06}>
              <div className="flex h-full flex-col gap-4 rounded-xl border border-white/5 bg-zinc-900/50 p-8">
                <HardDrives weight="duotone" className="h-8 w-8 text-emerald-300" />
                <h3 className="text-xl font-medium tracking-tight">Local-first, yours forever</h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  Plain files on your disk. Sync is optional, export is
                  instant, lock-in is zero.
                </p>
              </div>
            </Reveal>

            <Reveal className="md:col-span-2" delay={0.12}>
              <div className="flex h-full flex-col justify-between gap-6 rounded-xl border border-white/5 bg-zinc-900/50 p-8">
                <Command weight="duotone" className="h-8 w-8 text-emerald-300" />
                <div>
                  <h3 className="text-xl font-medium tracking-tight">One keystroke away</h3>
                  <div className="mt-4 space-y-2">
                    {PALETTE_ROWS.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between rounded-lg bg-zinc-950/80 px-3 py-2"
                      >
                        <span className="flex items-center gap-2 text-sm text-zinc-300">
                          <row.icon className="h-3.5 w-3.5 text-zinc-500" />
                          {row.label}
                        </span>
                        <kbd className="font-mono text-[11px] text-zinc-500">{row.keys}</kbd>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Quote */}
        <section className="border-y border-white/5 bg-zinc-900/30">
          <figure className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
            <blockquote className="text-2xl font-medium leading-snug tracking-tight text-zinc-100 sm:text-3xl">
              &ldquo;I stopped filing notes and started finding them. The graph
              surfaced connections across papers I had read years apart.&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm text-zinc-400">
              Maren Vogel
              <span className="mx-2 text-zinc-600">|</span>
              Research lead, Meridian Labs
            </figcaption>
          </figure>
        </section>

        {/* Method */}
        <section id="how" className="mx-auto max-w-[1400px] scroll-mt-16 px-4 py-24 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl">
              A loop you close daily.
            </h2>
          </Reveal>
          <div className="mt-14 max-w-3xl">
            {[
              {
                verb: "Capture",
                body: "Clip quotes, jot voice memos, forward emails. Everything lands in one inbox note dated today.",
              },
              {
                verb: "Connect",
                body: "While writing, type two brackets and link to any past note. Understory suggests related ones inline.",
              },
              {
                verb: "Compose",
                body: "Pull linked notes into essays and briefs. Your first draft assembles itself from what you already wrote.",
              },
            ].map((step, i, arr) => (
              <Reveal key={step.verb} delay={i * 0.06}>
                <div
                  className={`grid grid-cols-[7rem_1fr] gap-6 py-8 sm:grid-cols-[10rem_1fr] ${
                    i < arr.length - 1 ? "border-b border-white/5" : ""
                  }`}
                >
                  <dt className="pt-1 text-right font-mono text-sm uppercase tracking-[0.2em] text-emerald-300">
                    {step.verb}
                  </dt>
                  <dd className="max-w-xl leading-relaxed text-zinc-300">{step.body}</dd>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-[1400px] px-4 pb-32 pt-8 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-xl border border-emerald-400/20 bg-[radial-gradient(80%_120%_at_50%_0%,rgba(52,211,153,0.12),rgba(9,9,11,0))] px-6 py-20 text-center sm:px-12">
              <h2 className="mx-auto max-w-xl text-balance text-3xl font-semibold tracking-tighter sm:text-4xl">
                Give every future idea a place to land.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-zinc-400">
                Free for your personal vault. Import from Notion, Obsidian or
                Evernote in minutes.
              </p>
              <Link
                href="#download"
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-emerald-400 px-8 text-base font-medium text-zinc-950 transition-transform duration-200 hover:-translate-y-px active:translate-y-0 active:scale-[0.98]"
              >
                {SIGNUP}
                <ArrowRight weight="bold" className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row lg:px-8">
          <Link href="/with-taste-skill/glm-5.3-flash/1" className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-400 font-mono text-xs font-bold text-zinc-950">
              U
            </span>
            <span className="text-sm font-semibold">Understory</span>
          </Link>
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <a href="#features" className="transition-colors hover:text-zinc-300">
              Features
            </a>
            <a href="#how" className="transition-colors hover:text-zinc-300">
              Method
            </a>
            <a href="#" className="transition-colors hover:text-zinc-300">
              Privacy
            </a>
          </div>
          <div className="flex items-center gap-4 text-zinc-500">
            <a href="#" aria-label="GitHub" className="transition-colors hover:text-zinc-300">
              <GithubLogo className="h-5 w-5" />
            </a>
            <a href="#" aria-label="X" className="transition-colors hover:text-zinc-300">
              <XLogo className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="border-t border-white/5 py-5 text-center font-mono text-xs text-zinc-600">
          &copy; 2026 Understory Software Co.
        </div>
      </footer>

    </div>
  );
}
