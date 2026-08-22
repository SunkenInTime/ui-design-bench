import type { Metadata } from "next";
import Link from "next/link";
import { Inter_Tight } from "next/font/google";
import {
  ArrowUpRight,
  BookOpen,
  ChatCircleText,
  EnvelopeSimple,
  Globe,
  Microphone,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/variants/with-taste-skill/ox-alpha/source/src/components/reveal";

export const metadata: Metadata = {
  title: "Understory | Retrieval beats filing",
  description:
    "Understory indexes everything you capture, so folders become optional and nothing disappears.",
};

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

const SIGNUP = "Get the app";

const MARQUEE_ITEMS = [
  "Type",
  "Speak",
  "Snap",
  "Clip",
  "Scan",
  "Forward",
  "Paste",
  "Highlight",
];

const INDEX_CLUSTERS = [
  {
    group: "Capture",
    rows: [
      {
        name: "Quick-capture window",
        detail: "Global hotkey files a thought under today\u2019s note",
      },
      {
        name: "Email forwarding",
        detail: "A private address turns any inbox into an entry",
      },
      {
        name: "Voice memos",
        detail: "Transcribed on device, searchable immediately",
      },
    ],
  },
  {
    group: "Structure",
    rows: [
      {
        name: "Bidirectional links",
        detail: "Every mention updates both notes, always",
      },
      {
        name: "Daily notes",
        detail: "Chronology by default, hierarchy only when asked",
      },
      {
        name: "Nested tags",
        detail: "Lightweight structure that never locks you in",
      },
    ],
  },
  {
    group: "Recall",
    rows: [
      {
        name: "Paraphrase search",
        detail: "Finds the note, not just the exact wording",
      },
      {
        name: "Weekly digest",
        detail: "Resurfaces what you wrote on this date before",
      },
      {
        name: "Saved questions",
        detail: "Standing queries that collect matches over time",
      },
    ],
  },
];

const SOURCES = [
  { icon: EnvelopeSimple, label: "Email" },
  { icon: Globe, label: "Web pages" },
  { icon: BookOpen, label: "Books & PDFs" },
  { icon: ChatCircleText, label: "Chats" },
  { icon: Microphone, label: "Voice" },
];

const CLAIMS = ["No folders.", "No filing.", "Nothing lost."];

export default function ThreePage() {
  return (
    <div
      className={`${interTight.variable} min-h-[100dvh] bg-zinc-100 font-sans text-zinc-900 selection:bg-orange-700/15`}
    >
      <header className="sticky top-0 z-30 border-b border-zinc-300 bg-zinc-100">
        <nav className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/three"
            className="font-swiss text-sm font-bold uppercase tracking-tight"
          >
            Understory
          </Link>
          <div className="hidden items-center gap-7 font-mono text-xs uppercase tracking-[0.12em] text-zinc-600 md:flex">
            <a href="#index" className="transition-colors hover:text-zinc-950">
              Index
            </a>
            <a href="#sources" className="transition-colors hover:text-zinc-950">
              Sources
            </a>
            <a href="#claims" className="transition-colors hover:text-zinc-950">
              Manifesto
            </a>
          </div>
          <Link
            href="#cta"
            className="bg-zinc-900 px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-zinc-50 transition-colors hover:bg-orange-700 active:translate-y-px"
          >
            {SIGNUP}
          </Link>
        </nav>
      </header>

      <main>
        {/* Typographic hero */}
        <section className="mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-[1400px] flex-col justify-end px-4 pb-14 pt-16 sm:px-6 md:pt-20 lg:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-700">
              Note-taking, engineered
            </p>
            <h1 className="mt-6 font-swiss text-[clamp(3rem,9vw,8rem)] font-bold uppercase leading-[0.95] tracking-tighter">
              Retrieval
              <br />
              beats filing<span className="text-orange-700">.</span>
            </h1>
          </Reveal>
          <div className="mt-10 flex flex-col gap-8 border-t border-zinc-400 pt-6 md:flex-row md:items-center md:justify-between">
            <Reveal delay={0.08}>
              <p className="max-w-md text-base leading-relaxed text-zinc-600">
                Understory indexes everything you capture, so folders become
                optional and nothing disappears.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="flex items-center gap-5">
                <Link
                  href="#cta"
                  className="inline-flex h-12 items-center gap-2 bg-orange-700 px-7 font-mono text-sm uppercase tracking-[0.08em] text-zinc-50 transition-transform duration-200 hover:-translate-y-px active:translate-y-0 active:scale-[0.98]"
                >
                  {SIGNUP}
                  <ArrowUpRight weight="bold" className="h-4 w-4" />
                </Link>
                <a
                  href="#index"
                  className="font-mono text-sm uppercase tracking-[0.08em] text-zinc-700 underline underline-offset-4 transition-colors hover:text-zinc-950"
                >
                  Read the index
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Kinetic strip */}
        <section aria-label="Ways to capture notes" className="overflow-hidden border-y border-zinc-300 bg-zinc-100 py-5">
          <div className="flex overflow-hidden">
            <div className="marquee-track flex w-max items-center">
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  aria-hidden={copy === 1}
                  className="flex items-center"
                >
                  {MARQUEE_ITEMS.map((item) => (
                    <span
                      key={`${copy}-${item}`}
                      className="flex items-center font-swiss text-2xl font-semibold uppercase tracking-tight text-zinc-800"
                    >
                      <span className="px-6">{item}</span>
                      <span aria-hidden="true" className="text-orange-700">/</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Index table */}
        <section id="index" className="mx-auto max-w-[1400px] scroll-mt-16 px-4 py-24 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-swiss text-3xl font-bold uppercase tracking-tighter sm:text-4xl">
              What it does
            </h2>
          </Reveal>
          <div className="mt-14 border-t border-zinc-400">
            {INDEX_CLUSTERS.map((cluster, ci) => (
              <div
                key={cluster.group}
                className={`grid grid-cols-1 gap-y-4 py-8 md:grid-cols-[10rem_1fr] md:gap-x-12 ${
                  ci < INDEX_CLUSTERS.length - 1 ? "border-b border-zinc-300" : ""
                }`}
              >
                <h3 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-orange-700 md:pt-1">
                  {cluster.group}
                </h3>
                <ul className="space-y-5">
                  {cluster.rows.map((row) => (
                    <li
                      key={row.name}
                      className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-8"
                    >
                      <span className="font-swiss text-lg font-semibold tracking-tight">
                        {row.name}
                      </span>
                      <span className="text-sm leading-relaxed text-zinc-600 sm:text-right">
                        {row.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Sources scroll-snap */}
        <section id="sources" className="scroll-mt-16 border-t border-zinc-300 bg-white py-20">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="font-swiss text-3xl font-bold uppercase tracking-tighter sm:text-4xl">
                Everything flows in
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-zinc-600">
                One inbox, every medium. Drag the row to see where captures
                come from.
              </p>
            </Reveal>
          </div>
          <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {SOURCES.map((source) => (
              <div
                key={source.label}
                className="group flex w-64 shrink-0 snap-start flex-col justify-between border border-zinc-300 bg-zinc-100 p-6 transition-colors hover:border-zinc-900"
              >
                <source.icon
                  weight="regular"
                  className="h-7 w-7 text-zinc-500 transition-colors group-hover:text-orange-700"
                />
                <p className="mt-14 font-swiss text-xl font-semibold tracking-tight">
                  {source.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Manifesto claims */}
        <section id="claims" className="scroll-mt-16 mx-auto max-w-[1400px] px-4 py-24 sm:px-6 lg:px-8">
          <div>
            {CLAIMS.map((claim, i) => (
              <Reveal key={claim} delay={i * 0.05}>
                <p
                  className={`border-t border-zinc-400 py-8 font-swiss text-4xl font-bold uppercase tracking-tighter sm:text-6xl ${
                    i === 1 ? "sm:text-right" : ""
                  } ${i === CLAIMS.length - 1 ? "border-b" : ""}`}
                >
                  {claim}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-12 max-w-lg text-center leading-relaxed text-zinc-600">
              Structure emerges from links and dates. You write; Understory
              keeps the ledger.
            </p>
          </Reveal>
        </section>

        {/* CTA */}
        <section id="cta" className="scroll-mt-16 border-t border-zinc-300">
          <div className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6 lg:px-8">
            <Reveal>
              <div className="border-2 border-zinc-900 px-6 py-16 text-center sm:px-12">
                <h2 className="font-swiss text-3xl font-bold uppercase tracking-tighter sm:text-5xl">
                  Start the index
                </h2>
                <p className="mx-auto mt-4 max-w-md leading-relaxed text-zinc-600">
                  Free on Mac, Windows and Linux. Your notes stay in open
                  formats you can leave with.
                </p>
                <Link
                  href="/three"
                  className="mt-9 inline-flex h-12 items-center gap-2 bg-orange-700 px-8 font-mono text-sm uppercase tracking-[0.08em] text-zinc-50 transition-transform duration-200 hover:-translate-y-px active:translate-y-0 active:scale-[0.98]"
                >
                  {SIGNUP}
                  <ArrowUpRight weight="bold" className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-300">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-4 py-8 font-mono text-xs uppercase tracking-[0.12em] text-zinc-500 sm:flex-row sm:px-6 lg:px-8">
          <span>Understory</span>
          <span>&copy; 2026 Understory Software Co.</span>
        </div>
      </footer>

    </div>
  );
}
