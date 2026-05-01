import Link from "next/link";

export default function TerminalVariant() {
  return (
    <div className="min-h-dvh bg-[#ebe7d8] text-neutral-950 font-sans isolate">
      <div className="border-b-2 border-neutral-950 bg-neutral-950 text-[#ebe7d8]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2 font-jetbrains text-xs sm:px-6">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#7eff9a]" />
              SYS://MNEMA
            </span>
            <span className="hidden text-neutral-500 sm:inline">
              v2.4.1 — uptime 432h
            </span>
          </div>
          <div className="hidden items-center gap-6 text-neutral-300 sm:flex tabular-nums">
            <span>idx: 14,221 notes</span>
            <span>edges: 38,902</span>
            <span>build: stable</span>
          </div>
        </div>
      </div>

      <header className="border-b-2 border-neutral-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6">
          <Link href="/2" className="flex items-center gap-3">
            <span className="grid size-8 place-items-center border-2 border-neutral-950 bg-neutral-950 text-[#ebe7d8] font-jetbrains text-sm">
              M
            </span>
            <span className="font-jetbrains text-base tracking-tight">
              MNEMA/OS
            </span>
          </Link>
          <nav className="hidden items-center gap-2 font-jetbrains text-xs uppercase md:flex">
            {["docs", "graph", "commands", "log"].map((n) => (
              <a
                key={n}
                href={`#${n}`}
                className="border-2 border-transparent px-3 py-1.5 hover:border-neutral-950"
              >
                /{n}
              </a>
            ))}
          </nav>
          <a
            href="#"
            className="border-2 border-neutral-950 bg-neutral-950 px-4 py-2 font-jetbrains text-xs uppercase tracking-wide text-[#ebe7d8] hover:bg-[#d83a16] hover:text-white transition"
          >
            ./install
          </a>
        </div>
      </header>

      <section className="border-b-2 border-neutral-950">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12">
          <div className="border-neutral-950 px-4 py-12 sm:px-6 sm:py-20 lg:col-span-8 lg:border-r-2">
            <div className="flex items-center gap-3 font-jetbrains text-xs uppercase tracking-wide">
              <span className="bg-[#d83a16] px-2 py-0.5 text-white">
                BUILD/26.04
              </span>
              <span>{"// a non-fiction operating system for thought"}</span>
            </div>
            <h1 className="mt-10 text-balance font-jetbrains text-4xl leading-[0.95] tracking-tight uppercase sm:text-6xl md:text-7xl">
              Your second
              <br />
              brain runs
              <br />
              <span className="bg-neutral-950 px-3 text-[#ebe7d8]">on disk.</span>
            </h1>
            <p className="mt-10 max-w-[58ch] text-pretty text-lg leading-relaxed">
              Mnema is a notes engine — local-first, plain-text, indexed at
              the speed of typing. No cloud lock-in. No magic. Just a
              relentless system for capturing what you know and finding it
              when it matters.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="border-2 border-neutral-950 bg-neutral-950 px-5 py-3 font-jetbrains text-sm uppercase text-[#ebe7d8] hover:bg-[#d83a16] hover:border-[#d83a16] transition"
              >
                $ mnema --new
              </a>
              <a
                href="#commands"
                className="border-2 border-neutral-950 px-5 py-3 font-jetbrains text-sm uppercase hover:bg-neutral-950 hover:text-[#ebe7d8] transition"
              >
                $ man mnema
              </a>
            </div>
          </div>

          <aside className="grid grid-cols-2 lg:col-span-4 lg:grid-cols-1">
            {[
              { k: "captures/day", v: "47.2", sub: "median user" },
              { k: "search latency", v: "8ms", sub: "p99, local" },
              { k: "footprint", v: "12mb", sub: "binary size" },
              { k: "open source", v: "yes", sub: "AGPL-3.0" },
            ].map((s, i) => (
              <div
                key={s.k}
                className={`border-neutral-950 p-6 ${
                  i < 2 ? "border-b-2" : ""
                } ${i % 2 === 0 ? "border-r-2 lg:border-r-0" : ""} ${
                  i === 2 ? "lg:border-b-2" : ""
                }`}
              >
                <p className="font-jetbrains text-[0.6875rem] uppercase tracking-wide text-neutral-600">
                  {s.k}
                </p>
                <p className="mt-3 font-jetbrains text-4xl tracking-tight tabular-nums">
                  {s.v}
                </p>
                <p className="mt-2 font-jetbrains text-xs text-neutral-600">
                  {`// ${s.sub}`}
                </p>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section id="graph" className="border-b-2 border-neutral-950 bg-[#e1ddcd]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="flex items-end justify-between gap-6 border-b-2 border-neutral-950 pb-6">
            <div>
              <p className="font-jetbrains text-xs uppercase tracking-wide text-neutral-600">
                §02 / topology
              </p>
              <h2 className="mt-3 font-jetbrains text-3xl tracking-tight uppercase sm:text-5xl">
                A graph, not a folder.
              </h2>
            </div>
            <p className="hidden font-jetbrains text-xs uppercase tracking-wide text-neutral-600 sm:block">
              [render: ascii]
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <pre className="lg:col-span-7 overflow-x-auto border-2 border-neutral-950 bg-[#fbf8eb] p-6 font-jetbrains text-[0.7rem] leading-snug sm:text-xs">
{`  [stoicism] ────── [seneca, letters] ──── [meditations, m.aurelius]
       │                    │                        │
       │                    └─── [practice: morning] ──┐
       │                                                │
  [memento mori] ──────┐                          [habits/27]
                       │
                  [death + work] ─── [oliver burkeman, 4000 weeks]
                       │
                  [time scarcity] ─── [calendar/2026-q2]
                       │
                       └────── [ideas/long compounding]`}
            </pre>
            <div className="lg:col-span-5 grid grid-cols-1 gap-0">
              {[
                {
                  cmd: ":: link",
                  desc: "Auto-discovers references between notes as you write. Backlinks update in place.",
                },
                {
                  cmd: ":: graph",
                  desc: "Render any subset of your archive as an explorable topology. Pin clusters to keep them.",
                },
                {
                  cmd: ":: ask",
                  desc: "Query the entire archive in natural language. Citations point back to source notes.",
                },
              ].map((f, i) => (
                <div
                  key={f.cmd}
                  className={`border-2 border-neutral-950 bg-[#fbf8eb] p-5 ${
                    i > 0 ? "-mt-0.5" : ""
                  }`}
                >
                  <p className="font-jetbrains text-sm">
                    <span className="bg-[#d83a16] px-1.5 py-0.5 text-white">
                      {f.cmd}
                    </span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-800">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="commands" className="border-b-2 border-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="flex items-end justify-between gap-6 border-b-2 border-neutral-950 pb-6">
            <div>
              <p className="font-jetbrains text-xs uppercase tracking-wide text-neutral-600">
                §03 / specifications
              </p>
              <h2 className="mt-3 font-jetbrains text-3xl tracking-tight uppercase sm:text-5xl">
                Every gesture is a command.
              </h2>
            </div>
            <p className="hidden font-jetbrains text-xs uppercase tracking-wide text-neutral-600 sm:block">
              [keymap: default]
            </p>
          </div>
          <table className="mt-10 w-full border-2 border-neutral-950 font-jetbrains text-sm">
            <thead className="bg-neutral-950 text-[#ebe7d8] text-xs uppercase tracking-wide">
              <tr>
                <th className="border-r-2 border-neutral-950 px-4 py-3 text-left">key</th>
                <th className="border-r-2 border-neutral-950 px-4 py-3 text-left">action</th>
                <th className="px-4 py-3 text-left">notes</th>
              </tr>
            </thead>
            <tbody className="bg-[#fbf8eb]">
              {[
                ["⌘ N", "new note", "creates an untitled fragment"],
                ["⌘ K", "open palette", "search, jump, run command"],
                ["⌘ ⇧ G", "graph view", "render the active cluster"],
                ["⌘ /", "ask the archive", "natural-language query"],
                ["⌘ E", "export", "markdown, on disk, anywhere"],
                ["⌘ ⇧ Z", "history", "every state, every revision"],
              ].map(([k, a, n], i, arr) => (
                <tr
                  key={k}
                  className={i < arr.length - 1 ? "border-b-2 border-neutral-950/15" : ""}
                >
                  <td className="border-r-2 border-neutral-950 px-4 py-4">
                    <span className="border border-neutral-950 px-2 py-0.5">{k}</span>
                  </td>
                  <td className="border-r-2 border-neutral-950 px-4 py-4">{a}</td>
                  <td className="px-4 py-4 text-neutral-700">{`// ${n}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-b-2 border-neutral-950 bg-neutral-950 text-[#ebe7d8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2">
          <div>
            <p className="font-jetbrains text-xs uppercase tracking-wide text-neutral-500">
              §04 / pricing
            </p>
            <h2 className="mt-4 font-jetbrains text-4xl uppercase tracking-tight sm:text-6xl">
              One license.
              <br />
              No subscription.
            </h2>
            <p className="mt-6 max-w-[50ch] text-pretty text-lg leading-relaxed text-neutral-300">
              Pay once for the version you have today. Updates for a year. Your
              notes stay yours, on your machine, regardless.
            </p>
          </div>
          <div className="border-2 border-[#ebe7d8] p-8 sm:p-10">
            <div className="flex items-end justify-between border-b border-[#ebe7d8]/30 pb-6">
              <p className="font-jetbrains text-xs uppercase tracking-wide text-neutral-400">
                MNEMA · LICENSE
              </p>
              <p className="font-jetbrains text-xs uppercase tracking-wide text-[#7eff9a]">
                ● in stock
              </p>
            </div>
            <p className="mt-8 font-jetbrains text-7xl tabular-nums tracking-tight">
              $79
            </p>
            <p className="mt-2 font-jetbrains text-sm text-neutral-400">
              {"// one-time, lifetime device license"}
            </p>
            <ul role="list" className="mt-8 space-y-3 font-jetbrains text-sm">
              {[
                "macOS, Windows, Linux",
                "1 year of updates included",
                "Local-first, fully offline",
                "Plaintext export, AGPL core",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-2.5 size-1.5 bg-[#7eff9a]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-10 inline-block w-full border-2 border-[#ebe7d8] bg-[#ebe7d8] px-5 py-3 text-center font-jetbrains text-sm uppercase tracking-wide text-neutral-950 hover:bg-[#d83a16] hover:border-[#d83a16] hover:text-white transition"
            >
              $ purchase --license
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="font-jetbrains text-xs uppercase tracking-wide">
            MNEMA/OS · 2026 · MIT, NYC
          </p>
          <p className="font-jetbrains text-xs uppercase tracking-wide text-neutral-600">
            {"// built by 4 people, in 6 months, with great care"}
          </p>
        </div>
      </footer>
    </div>
  );
}
