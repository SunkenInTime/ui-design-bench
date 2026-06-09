import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cortex — Your second brain · Design 5",
};

const commands = [
  ["cortex new", "capture a thought from anywhere"],
  ["cortex link --auto", "wire related notes together"],
  ["cortex ask \"...\"", "query your entire memory"],
  ["cortex resurface", "today’s relevant old notes"],
];

const panes = [
  {
    cmd: "$ cortex stats",
    lines: [
      "notes        4,182",
      "edges        19,034",
      "oldest       2019-03-02",
      "recall avg   0.41s",
    ],
  },
  {
    cmd: "$ cortex ask \"pricing thoughts from last spring?\"",
    lines: [
      "→ 3 notes found",
      "  [0412] usage-based beats seats for solo devs",
      "  [0398] anchor against notion, not obsidian",
      "  [0371] $8 felt right. still does.",
    ],
  },
  {
    cmd: "$ cortex sync --status",
    lines: [
      "local-first  ✓ all notes on disk",
      "e2e crypto   ✓ keys never leave device",
      "conflicts    0",
      "last sync    just now",
    ],
  },
];

export default function DesignFive() {
  return (
    <div className="flex flex-1 flex-col bg-[#0a0e0a] font-mono text-[#9fb89f] selection:bg-[#33ff66]/25 selection:text-[#c8ffc8]">
      {/* Nav */}
      <header className="border-b border-[#1d2b1d]">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4 text-sm">
          <span className="text-[#33ff66]">
            ▮ cortex<span className="text-[#9fb89f]">@local</span>
          </span>
          <nav className="hidden items-center gap-6 text-[#6f8a6f] sm:flex">
            <a href="#features" className="transition-colors hover:text-[#c8ffc8]">
              ./features
            </a>
            <a href="#install" className="transition-colors hover:text-[#c8ffc8]">
              ./install
            </a>
            <a
              href="#"
              className="transition-colors hover:text-[#c8ffc8]"
            >
              ./src
            </a>
          </nav>
          <a
            href="#install"
            className="border border-[#33ff66]/40 px-3 py-1.5 text-[#33ff66] transition-colors hover:bg-[#33ff66]/10"
          >
            [ install ]
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto w-full max-w-5xl px-6 pt-20 sm:pt-28">
        <p className="text-sm text-[#6f8a6f]">
          {"// a second brain for people who live in the terminal"}
        </p>
        <h1 className="mt-6 text-4xl font-bold leading-tight text-[#e4ffe4] sm:text-6xl">
          memory, as a<br />
          command-line utility
          <span className="ml-2 inline-block h-[0.9em] w-[0.5em] translate-y-1 animate-[blink_1.1s_steps(1)_infinite] bg-[#33ff66]" />
        </h1>
        <p className="mt-6 max-w-xl leading-7 text-[#9fb89f]">
          cortex captures notes at the speed of thought, links them into a
          knowledge graph, and answers questions about everything you’ve ever
          written. plain text. local first. zero lock-in.
        </p>

        {/* Install line */}
        <div
          id="install"
          className="mt-10 flex max-w-xl items-center justify-between gap-4 border border-[#1d2b1d] bg-[#0d130d] px-5 py-4"
        >
          <code className="text-sm text-[#c8ffc8] sm:text-base">
            <span className="text-[#6f8a6f]">$</span> curl -fsSL cortex.sh | sh
          </code>
          <span className="hidden whitespace-nowrap text-xs text-[#6f8a6f] sm:block">
            macos · linux · wsl
          </span>
        </div>

        {/* Command list */}
        <div className="mt-8 max-w-xl space-y-2 text-sm">
          {commands.map(([cmd, desc]) => (
            <div key={cmd} className="flex flex-wrap gap-x-6 gap-y-0.5">
              <code className="w-44 shrink-0 text-[#33ff66]">{cmd}</code>
              <span className="text-[#6f8a6f]"># {desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Panes */}
      <section id="features" className="mx-auto w-full max-w-5xl px-6 py-24">
        <p className="mb-6 text-sm text-[#6f8a6f]">
          {"// it does what it says on the man page"}
        </p>
        <div className="grid gap-4 lg:grid-cols-3">
          {panes.map((p) => (
            <div
              key={p.cmd}
              className="border border-[#1d2b1d] bg-[#0d130d] transition-colors hover:border-[#33ff66]/40"
            >
              <div className="flex items-center gap-1.5 border-b border-[#1d2b1d] px-4 py-2.5">
                <span className="h-2 w-2 rounded-full bg-[#1d2b1d]" />
                <span className="h-2 w-2 rounded-full bg-[#1d2b1d]" />
                <span className="h-2 w-2 rounded-full bg-[#1d2b1d]" />
              </div>
              <div className="px-4 py-4 text-[13px] leading-6">
                <div className="text-[#c8ffc8]">{p.cmd}</div>
                {p.lines.map((line) => (
                  <div key={line} className="whitespace-pre text-[#9fb89f]">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Manifesto */}
      <section className="border-y border-[#1d2b1d] bg-[#0d130d]">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-sm text-[#6f8a6f]">{"// design principles"}</p>
          <div className="mt-6 grid gap-x-12 gap-y-8 text-sm leading-7 sm:grid-cols-3">
            <div>
              <h3 className="text-[#e4ffe4]">01. plain text wins</h3>
              <p className="mt-2 text-[#9fb89f]">
                every note is a markdown file on your disk. grep it, pipe it,
                back it up with rsync. cortex adds the brain, not a format.
              </p>
            </div>
            <div>
              <h3 className="text-[#e4ffe4]">02. your machine, your data</h3>
              <p className="mt-2 text-[#9fb89f]">
                recall runs locally. sync is optional and end-to-end encrypted.
                if we disappear tomorrow, your notes don’t.
              </p>
            </div>
            <div>
              <h3 className="text-[#e4ffe4]">03. speed is the feature</h3>
              <p className="mt-2 text-[#9fb89f]">
                capture in &lt;50ms, recall in &lt;500ms. a second brain you
                wait on is a second brain you stop using.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-5xl px-6 py-24 pb-36">
        <div className="border border-[#33ff66]/30 bg-[#33ff66]/[0.04] px-8 py-12 text-center">
          <p className="text-sm text-[#6f8a6f]">
            {"// free for 1,000 notes — then $8/mo"}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#e4ffe4] sm:text-4xl">
            exit your tabs. enter cortex.
          </h2>
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-4">
            <a
              href="#install"
              className="bg-[#33ff66] px-7 py-3 text-sm font-bold text-[#0a0e0a] transition-opacity hover:opacity-85"
            >
              $ install now
            </a>
            <a
              href="#"
              className="border border-[#1d2b1d] px-7 py-3 text-sm text-[#9fb89f] transition-colors hover:border-[#33ff66]/40 hover:text-[#c8ffc8]"
            >
              man cortex
            </a>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-[#445a44]">
          cortex v2.0.1 — exit code 0 · © 2026
        </p>
      </section>
    </div>
  );
}
