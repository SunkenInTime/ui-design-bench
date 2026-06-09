import type { Metadata } from "next";
import Image from "next/image";
import {
  Lightning,
  ShareNetwork,
  MagnifyingGlass,
  ClockCounterClockwise,
  LockKey,
  Export,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Trove. Every thought, on record.",
};

/*
  Iteration 5: "Raw Index"
  Dials: VARIANCE 8 / MOTION 3 / DENSITY 5
  Theme lock: light (neutral-100 paper). Accent lock: red-600.
  Radius system: all-sharp (radius 0). Motion: CSS hover/active only.
*/

const FEATURES = [
  {
    icon: Lightning,
    title: "Capture",
    body: "One keystroke from any app. The thought lands before you lose it.",
  },
  {
    icon: ShareNetwork,
    title: "Link",
    body: "Every note connects to related notes on save. No folders, no tags.",
  },
  {
    icon: MagnifyingGlass,
    title: "Recall",
    body: "Search by meaning, in your own words. Ideas come back whole.",
  },
  {
    icon: ClockCounterClockwise,
    title: "Resurface",
    body: "Old notes return on their own when they become relevant again.",
  },
  {
    icon: LockKey,
    title: "Encrypt",
    body: "Local-first storage. Sync, when you want it, is end-to-end encrypted.",
  },
  {
    icon: Export,
    title: "Export",
    body: "Plain Markdown files, always. Leave any time and take everything.",
  },
];

const FACTS = [
  { label: "FORMAT", value: "Markdown" },
  { label: "STORAGE", value: "Local-first" },
  { label: "SYNC", value: "Encrypted" },
  { label: "LOCK-IN", value: "None" },
];

export default function RawIndexPage() {
  return (
    <div className="min-h-dvh bg-neutral-100 font-sans text-neutral-900">
      <div className="mx-auto max-w-6xl border-x-2 border-neutral-900">
        {/* Top bar */}
        <header className="sticky top-0 z-40 border-b-2 border-neutral-900 bg-neutral-100">
          <div className="flex h-14 items-stretch justify-between">
            <a
              href="#"
              className="flex items-center border-r-2 border-neutral-900 px-5 font-archivo text-lg font-black uppercase tracking-tight"
            >
              Trove
            </a>
            <nav className="hidden flex-1 items-center gap-8 px-6 font-jet text-xs uppercase tracking-wide text-neutral-600 md:flex">
              <a href="#index" className="transition-colors hover:text-neutral-900">
                Index
              </a>
              <a href="#position" className="transition-colors hover:text-neutral-900">
                Position
              </a>
              <a href="#facts" className="transition-colors hover:text-neutral-900">
                Facts
              </a>
            </nav>
            <a
              href="#join"
              className="flex items-center bg-red-600 px-6 font-jet text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-neutral-900"
            >
              Start free
            </a>
          </div>
        </header>

        <main>
          {/* Hero */}
          <section className="border-b-2 border-neutral-900 px-5 py-16 md:px-10 md:py-20">
            <h1 className="font-archivo text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.92] tracking-tight">
              Every thought,
              <br />
              <span className="text-red-600">on record.</span>
            </h1>
            <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <p className="max-w-md font-jet text-sm leading-relaxed text-neutral-700">
                Trove is a plain-text second brain. Capture fast, link
                automatically, retrieve by meaning.
              </p>
              <div className="flex gap-3">
                <a
                  href="#join"
                  className="flex items-center gap-2 bg-red-600 px-7 py-4 font-jet text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-neutral-900"
                >
                  Start free
                  <ArrowRight size={16} weight="bold" />
                </a>
                <a
                  href="#index"
                  className="border-2 border-neutral-900 px-7 py-4 font-jet text-sm font-bold uppercase tracking-wide transition-colors hover:bg-neutral-900 hover:text-neutral-100"
                >
                  The index
                </a>
              </div>
            </div>
          </section>

          {/* Feature grid: 6 items, shared 1px borders */}
          <section
            id="index"
            className="grid grid-cols-1 gap-px border-b-2 border-neutral-900 bg-neutral-900 md:grid-cols-3"
          >
            {FEATURES.map((f) => (
              <article
                key={f.title}
                className="group bg-neutral-100 p-7 transition-colors hover:bg-neutral-900 hover:text-neutral-100"
              >
                <f.icon
                  size={24}
                  weight="bold"
                  className="text-red-600"
                />
                <h2 className="mt-8 font-archivo text-2xl font-black uppercase tracking-tight">
                  {f.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 transition-colors group-hover:text-neutral-400">
                  {f.body}
                </p>
              </article>
            ))}
          </section>

          {/* Image band */}
          <section className="relative aspect-[3/1.4] min-h-[280px] border-b-2 border-neutral-900">
            <Image
              src="/variants/with-taste-skill/fable/gen/trove-brutal.png"
              alt="A brutalist concrete facade with a strict grid of recessed windows"
              fill
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="object-cover grayscale"
            />
          </section>

          {/* Position: split manifesto */}
          <section
            id="position"
            className="grid gap-10 border-b-2 border-neutral-900 px-5 py-16 md:grid-cols-2 md:px-10 md:py-20"
          >
            <h2 className="font-archivo text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-6xl">
              No folders.
              <br />
              No tags.
              <br />
              <span className="text-red-600">No filing.</span>
            </h2>
            <div className="flex flex-col justify-end gap-5 font-jet text-sm leading-relaxed text-neutral-700">
              <p>
                Organizing notes is unpaid clerical work. You do it badly,
                resent it, and quit by February.
              </p>
              <p>
                Trove deletes the job. Notes are parsed, linked to their
                neighbors, and indexed by meaning the moment they are saved.
                The structure exists; you just never have to build it.
              </p>
            </div>
          </section>

          {/* Facts: 4 items, 2x2 grid */}
          <section
            id="facts"
            className="grid grid-cols-1 gap-px border-b-2 border-neutral-900 bg-neutral-900 sm:grid-cols-2"
          >
            {FACTS.map((fact) => (
              <div key={fact.label} className="bg-neutral-100 p-7">
                <span className="font-jet text-xs uppercase tracking-wide text-neutral-500">
                  {fact.label}
                </span>
                <p className="mt-3 font-archivo text-4xl font-black uppercase tracking-tight">
                  {fact.value}
                </p>
              </div>
            ))}
          </section>

          {/* CTA block */}
          <section id="join">
            <a
              href="#"
              className="group flex items-center justify-between bg-red-600 px-5 py-14 text-white transition-colors hover:bg-neutral-900 md:px-10"
            >
              <span className="font-archivo text-4xl font-black uppercase tracking-tight md:text-7xl">
                Start free
              </span>
              <ArrowRight
                size={48}
                weight="bold"
                className="shrink-0 transition-transform group-hover:translate-x-2"
              />
            </a>
          </section>
        </main>

        <footer className="border-t-2 border-neutral-900">
          <div className="flex flex-col items-start justify-between gap-3 px-5 py-8 font-jet text-xs uppercase tracking-wide text-neutral-600 md:flex-row md:items-center md:px-10">
            <span className="font-bold text-neutral-900">Trove</span>
            <div className="flex gap-8">
              <a href="#index" className="transition-colors hover:text-neutral-900">
                Index
              </a>
              <a href="#" className="transition-colors hover:text-neutral-900">
                Privacy
              </a>
            </div>
            <span>© 2026 Trove</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
