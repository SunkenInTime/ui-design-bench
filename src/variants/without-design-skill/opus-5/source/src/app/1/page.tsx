import type { Metadata } from "next";
import { inter, jetbrainsMono } from "../fonts";

export const metadata: Metadata = {
  title: "Synapse",
  description:
    "Recall connects every note you take, so the idea you need finds you.",
};

const nodes = [
  { id: "a", x: 300, y: 90, r: 7, label: "Compounding", delay: "0s" },
  { id: "b", x: 132, y: 168, r: 5, label: "Reading list", delay: "0.4s" },
  { id: "c", x: 452, y: 152, r: 5.5, label: "Q3 strategy", delay: "0.8s" },
  { id: "d", x: 232, y: 300, r: 9, label: "Second brain", delay: "0.2s" },
  { id: "e", x: 418, y: 330, r: 6, label: "Interviews", delay: "1.1s" },
  { id: "f", x: 88, y: 372, r: 4.5, label: "Voice memo", delay: "1.5s" },
  { id: "g", x: 316, y: 438, r: 5, label: "Weekly review", delay: "0.6s" },
  { id: "h", x: 500, y: 254, r: 4, label: null, delay: "1.3s" },
  { id: "i", x: 176, y: 82, r: 3.5, label: null, delay: "1.7s" },
];

const edges: [string, string][] = [
  ["a", "b"],
  ["a", "c"],
  ["a", "d"],
  ["b", "d"],
  ["c", "e"],
  ["c", "h"],
  ["d", "e"],
  ["d", "f"],
  ["d", "g"],
  ["e", "g"],
  ["b", "i"],
  ["e", "h"],
];

function KnowledgeGraph() {
  const byId = new Map(nodes.map((node) => [node.id, node]));

  return (
    <svg
      viewBox="0 0 580 520"
      className="h-auto w-full"
      role="img"
      aria-label="A graph of notes linked to each other"
    >
      <defs>
        <radialGradient id="halo" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      <circle cx="270" cy="270" r="250" fill="url(#halo)" />

      {edges.map(([from, to], i) => {
        const a = byId.get(from)!;
        const b = byId.get(to)!;
        return (
          <line
            key={`${from}-${to}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="url(#edge)"
            strokeWidth="1"
            strokeDasharray="240"
            className="animate-trace"
            style={{ animationDelay: `${i * 0.18}s` }}
          />
        );
      })}

      {nodes.map((node) => (
        <g key={node.id}>
          <circle
            cx={node.x}
            cy={node.y}
            r={node.r * 2.6}
            fill="#a78bfa"
            className="animate-glow"
            style={{ animationDelay: node.delay }}
            opacity="0.18"
          />
          <circle
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill="#0a0a0f"
            stroke={node.r > 6 ? "#c4b5fd" : "#67e8f9"}
            strokeWidth="1.5"
          />
          {node.label && (
            <text
              x={node.x + node.r + 10}
              y={node.y + 4}
              className={`${jetbrainsMono.className} fill-white/55 text-[11px]`}
            >
              {node.label}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}

const capabilities = [
  {
    kicker: "01",
    title: "Bidirectional links",
    body: "Type [[ and connect anything to anything. Every link works both ways, so context travels with the note.",
  },
  {
    kicker: "02",
    title: "Surfaced, not searched",
    body: "Recall reads what you're writing and quietly pulls up the four notes you forgot you wrote about it.",
  },
  {
    kicker: "03",
    title: "Local-first sync",
    body: "Plain files on your disk, encrypted end to end across devices. Works on a plane, works in ten years.",
  },
  {
    kicker: "04",
    title: "Ask your archive",
    body: "Question your own notes in plain language. Answers cite the exact paragraph they came from.",
  },
];

export default function SynapsePage() {
  return (
    <div
      className={`${inter.className} relative flex flex-1 flex-col overflow-hidden bg-[#07070c] text-white`}
    >
      {/* Grid + bloom backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/18 blur-[130px]"
      />

      <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2.5">
          <span className="grid size-7 place-items-center rounded-md bg-gradient-to-br from-violet-400 to-cyan-300 text-[13px] font-bold text-black">
            R
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            Recall
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-[13px] text-white/55 md:flex">
          <a className="transition-colors hover:text-white" href="#graph">
            The graph
          </a>
          <a className="transition-colors hover:text-white" href="#build">
            How it works
          </a>
          <a className="transition-colors hover:text-white" href="#pricing">
            Pricing
          </a>
        </nav>
        <div className="flex items-center gap-3 text-[13px]">
          <a className="hidden text-white/60 hover:text-white sm:block" href="#">
            Sign in
          </a>
          <a
            href="#"
            className="rounded-full bg-white px-4 py-1.5 font-medium text-black transition-colors hover:bg-white/85"
          >
            Get Recall
          </a>
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-6xl px-6">
        <section className="grid items-center gap-14 py-16 lg:grid-cols-[1fr_1.05fr] lg:py-24">
          <div className="animate-rise">
            <p
              className={`${jetbrainsMono.className} mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/4 px-3 py-1 text-[11px] tracking-wider text-cyan-200/90 uppercase`}
            >
              <span className="size-1.5 rounded-full bg-cyan-300" />
              Now with graph recall
            </p>

            <h1 className="text-[clamp(2.6rem,5.4vw,4.25rem)] leading-[0.98] font-semibold tracking-[-0.035em]">
              Your notes already
              <br />
              know the answer.
              <br />
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">
                Recall finds it.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-[17px] leading-relaxed text-white/60">
              Most note apps are a place things go to be forgotten. Recall links
              every note, meeting and half-thought into one graph, then hands
              you the right one before you think to look for it.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-black transition-transform hover:scale-[1.02]"
              >
                Start your second brain
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#graph"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-[14px] text-white/75 transition-colors hover:border-white/35 hover:text-white"
              >
                See the graph
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-[12px] text-white/40">
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                Free forever tier
              </span>
              <span>No card required</span>
              <span className="hidden sm:inline">Import from anywhere</span>
            </div>
          </div>

          <div id="graph" className="relative animate-drift">
            <div className="absolute inset-8 rounded-full bg-cyan-500/8 blur-3xl" />
            <KnowledgeGraph />
          </div>
        </section>

        {/* Metric strip */}
        <section className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/8 md:grid-cols-4">
          {[
            ["1.4M", "notes linked daily"],
            ["38ms", "search across 50k notes"],
            ["0", "notes locked in a database"],
            ["4.9", "average App Store rating"],
          ].map(([value, label]) => (
            <div key={label} className="bg-[#08080e] px-6 py-7">
              <p
                className={`${jetbrainsMono.className} text-2xl font-semibold text-white`}
              >
                {value}
              </p>
              <p className="mt-1 text-[12px] text-white/45">{label}</p>
            </div>
          ))}
        </section>

        {/* Capabilities */}
        <section id="build" className="py-24">
          <div className="max-w-2xl">
            <h2 className="text-[clamp(1.9rem,3.4vw,2.75rem)] leading-tight font-semibold tracking-[-0.03em]">
              Four things a second brain
              <br />
              has to get right.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-white/55">
              Everything else is decoration. We spent three years on these.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/8 sm:grid-cols-2">
            {capabilities.map((item) => (
              <article
                key={item.kicker}
                className="group relative bg-[#08080e] p-8 transition-colors hover:bg-[#0d0d18]"
              >
                <span
                  className={`${jetbrainsMono.className} text-[11px] tracking-widest text-violet-300/70`}
                >
                  {item.kicker}
                </span>
                <h3 className="mt-4 text-[19px] font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/55">
                  {item.body}
                </p>
                <span className="absolute inset-x-8 bottom-0 h-px scale-x-0 bg-gradient-to-r from-violet-400 to-cyan-300 transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            ))}
          </div>
        </section>

        {/* Quote */}
        <section className="border-y border-white/10 py-20">
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="text-[clamp(1.4rem,2.6vw,2rem)] leading-snug font-medium tracking-[-0.02em] text-white/90">
              “I stopped organising and started writing. Six months in, Recall
              knows more about my research than I do.”
            </p>
            <footer className="mt-6 text-[13px] text-white/45">
              Dr. Naomi Ferrand — computational biologist, 11,400 notes
            </footer>
          </blockquote>
        </section>

        {/* CTA */}
        <section
          id="pricing"
          className="relative my-24 overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-b from-violet-600/18 to-transparent px-8 py-16 text-center"
        >
          <div
            aria-hidden
            className="absolute -bottom-28 left-1/2 h-56 w-[600px] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-[100px]"
          />
          <h2 className="relative text-[clamp(1.9rem,3.6vw,2.8rem)] font-semibold tracking-[-0.03em]">
            Ten years of thinking, one search away.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-[15.5px] text-white/60">
            Free for your first 500 notes. $8/month after that, and you can walk
            away with every file whenever you like.
          </p>
          <a
            href="#"
            className="relative mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold text-black transition-transform hover:scale-[1.02]"
          >
            Download for macOS
          </a>
        </section>
      </main>

      <footer className="relative mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-white/10 px-6 py-8 pb-24 text-[12.5px] text-white/40">
        <p>© 2026 Recall Labs</p>
        <div className="flex gap-6">
          <a className="hover:text-white/70" href="#">
            Privacy
          </a>
          <a className="hover:text-white/70" href="#">
            Changelog
          </a>
          <a className="hover:text-white/70" href="#">
            Docs
          </a>
        </div>
      </footer>
    </div>
  );
}
