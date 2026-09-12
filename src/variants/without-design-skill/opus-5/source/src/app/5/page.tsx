import Link from "next/link";

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-grid min-w-[1.6rem] place-items-center rounded border border-neutral-700 bg-neutral-900 px-1.5 py-0.5 font-mono text-[11px] text-neutral-300 shadow-[0_1px_0_0_#404040]">
      {children}
    </kbd>
  );
}

const results = [
  {
    icon: "▸",
    title: "attention is a budget, not a skill",
    meta: "note · 4 links · Mar 2024",
    active: true,
  },
  { icon: "▸", title: "Deep Work — ch. 3 highlights", meta: "clipping · Jan 2023" },
  { icon: "▸", title: "why my mornings collapsed", meta: "daily · 6 backlinks" },
  { icon: "◆", title: "Ask recall: “what breaks my focus?”", meta: "3 sources" },
];

const commands = [
  ["capture", "open the capture bar from anywhere", "⌘⇧Space"],
  ["link", "connect this note to another", "⌘L"],
  ["graph", "open the local graph for this note", "⌘G"],
  ["recall", "ask a question across everything", "⌘K then ?"],
  ["daily", "jump to today's note", "⌘D"],
  ["export", "write the whole vault to markdown", "⌘⇧E"],
];

export default function TerminalLanding() {
  return (
    <div className="relative min-h-screen flex-1 overflow-hidden bg-[#0a0a0a] font-mono text-neutral-300 selection:bg-green-400/25">
      {/* Scanlines + glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.025)_0px,rgba(255,255,255,0.025)_1px,transparent_1px,transparent_3px)] opacity-60"
      />
      <div
        aria-hidden
        className="animate-drift-slow pointer-events-none absolute -top-40 left-1/2 size-[50rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(74,222,128,0.10),transparent_65%)] blur-3xl"
      />

      {/* Status bar nav */}
      <header className="sticky top-0 z-20 border-b border-neutral-800 bg-[#0a0a0a]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center gap-4 px-5 py-2.5 text-[11px]">
          <span className="font-bold text-green-400">loam</span>
          <span className="text-neutral-600">v4.2.0</span>
          <div className="ml-auto flex items-center gap-4 text-neutral-500">
            <a className="transition hover:text-green-400" href="#commands">
              :commands
            </a>
            <a className="hidden transition hover:text-green-400 sm:block" href="#why">
              :why
            </a>
            <a className="transition hover:text-green-400" href="#install">
              :install
            </a>
          </div>
        </nav>
      </header>

      <main className="relative z-[1] mx-auto max-w-5xl px-5">
        {/* Hero */}
        <section className="py-20 sm:py-28">
          <p className="text-[11px] text-neutral-500">
            <span className="text-green-400">$</span> loam --help
          </p>

          <h1 className="mt-7 text-4xl leading-[1.05] font-bold tracking-tight text-neutral-100 text-balance sm:text-6xl">
            A second brain
            <br />
            <span className="text-green-400">without the mouse</span>
            <span className="animate-blink ml-1 inline-block h-[0.85em] w-[0.5em] translate-y-[0.06em] bg-green-400" />
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-relaxed text-neutral-400">
            Loam is a note system for people who think faster than they can
            click. Everything — capture, linking, recall — is one keystroke deep.
            Plain markdown on your disk, always.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#install"
              className="rounded border border-green-400/40 bg-green-400/10 px-5 py-2.5 text-xs font-bold tracking-wider text-green-400 uppercase transition hover:bg-green-400 hover:text-black"
            >
              brew install loam
            </a>
            <a
              href="#commands"
              className="rounded border border-neutral-700 px-5 py-2.5 text-xs tracking-wider text-neutral-400 uppercase transition hover:border-neutral-500 hover:text-neutral-200"
            >
              read the man page
            </a>
          </div>

          {/* Command palette mock */}
          <div className="mt-16 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950/80 shadow-[0_0_60px_-15px_rgba(74,222,128,0.25)] backdrop-blur">
            <div className="flex items-center gap-2 border-b border-neutral-800 px-4 py-2 text-[10px] text-neutral-600">
              <span className="size-2 rounded-full bg-neutral-700" />
              <span className="size-2 rounded-full bg-neutral-700" />
              <span className="size-2 rounded-full bg-neutral-700" />
              <span className="ml-2">loam — recall</span>
            </div>

            <div className="flex items-center gap-3 border-b border-neutral-800 px-4 py-3.5">
              <span className="text-green-400">❯</span>
              <span className="text-sm text-neutral-200">
                what did I decide about focus
              </span>
              <span className="animate-blink h-4 w-2 bg-green-400" />
              <span className="ml-auto hidden text-[10px] text-neutral-600 sm:block">
                4 results · 12ms
              </span>
            </div>

            <ul className="divide-y divide-neutral-900">
              {results.map((r) => (
                <li
                  key={r.title}
                  className={`flex items-center gap-3 px-4 py-2.5 text-xs ${
                    r.active ? "bg-green-400/10" : ""
                  }`}
                >
                  <span
                    className={r.active ? "text-green-400" : "text-neutral-700"}
                  >
                    {r.icon}
                  </span>
                  <span
                    className={
                      r.active ? "text-neutral-100" : "text-neutral-400"
                    }
                  >
                    {r.title}
                  </span>
                  <span className="ml-auto hidden text-[10px] text-neutral-600 sm:block">
                    {r.meta}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 border-t border-neutral-800 px-4 py-2 text-[10px] text-neutral-600">
              <span className="flex items-center gap-1.5">
                <Kbd>↑</Kbd>
                <Kbd>↓</Kbd> navigate
              </span>
              <span className="flex items-center gap-1.5">
                <Kbd>↵</Kbd> open
              </span>
              <span className="hidden items-center gap-1.5 sm:flex">
                <Kbd>⌘</Kbd>
                <Kbd>↵</Kbd> ask recall
              </span>
            </div>
          </div>
        </section>

        {/* Why — terminal output */}
        <section id="why" className="scroll-mt-16 border-t border-neutral-900 py-20">
          <p className="text-[11px] text-neutral-500">
            <span className="text-green-400">$</span> loam why
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "no folders",
                "Filing is a tax you pay forever. Loam links instead: mention a note and the connection is made, both ways, immediately.",
              ],
              [
                "no lock-in",
                "~/notes/*.md — your files, your disk, your git repo if you like. Sync is end-to-end encrypted and entirely optional.",
              ],
              [
                "no waiting",
                "Local index. Median recall in 12ms across 40,000 notes. Works on a plane, works in a tunnel, works when we go under.",
              ],
            ].map(([title, body]) => (
              <div
                key={title}
                className="grid gap-2 border-l-2 border-neutral-800 pl-5 transition-colors hover:border-green-400/60 sm:grid-cols-[10rem_1fr] sm:gap-8"
              >
                <p className="text-sm font-bold text-green-400">{title}</p>
                <p className="max-w-xl text-sm leading-relaxed text-neutral-400">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Commands table */}
        <section
          id="commands"
          className="scroll-mt-16 border-t border-neutral-900 py-20"
        >
          <p className="text-[11px] text-neutral-500">
            <span className="text-green-400">$</span> loam --list-bindings
          </p>

          <div className="mt-8 overflow-hidden rounded-lg border border-neutral-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-950 text-[10px] tracking-wider text-neutral-500 uppercase">
                <tr>
                  <th className="px-4 py-2.5 font-medium">command</th>
                  <th className="hidden px-4 py-2.5 font-medium sm:table-cell">
                    description
                  </th>
                  <th className="px-4 py-2.5 text-right font-medium">binding</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-900">
                {commands.map(([cmd, desc, key]) => (
                  <tr key={cmd} className="transition-colors hover:bg-neutral-900/60">
                    <td className="px-4 py-3 font-bold text-green-400">{cmd}</td>
                    <td className="hidden px-4 py-3 text-neutral-400 sm:table-cell">
                      {desc}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Kbd>{key}</Kbd>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Install */}
        <section
          id="install"
          className="scroll-mt-16 border-t border-neutral-900 py-20"
        >
          <p className="text-[11px] text-neutral-500">
            <span className="text-green-400">$</span> loam install
          </p>
          <h2 className="mt-7 text-2xl font-bold tracking-tight text-neutral-100 text-balance sm:text-4xl">
            Free for 500 notes.
            <br />
            <span className="text-neutral-500">$8/mo after that.</span>
          </h2>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-5">
              <p className="text-[10px] tracking-wider text-neutral-500 uppercase">
                macOS / Linux
              </p>
              <code className="mt-3 block rounded bg-black/60 px-3 py-2.5 text-xs text-green-400">
                brew install loam
              </code>
            </div>
            <div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-5">
              <p className="text-[10px] tracking-wider text-neutral-500 uppercase">
                Windows
              </p>
              <code className="mt-3 block rounded bg-black/60 px-3 py-2.5 text-xs text-green-400">
                winget install loam
              </code>
            </div>
          </div>

          <form className="mt-6 flex max-w-lg flex-col gap-2.5 sm:flex-row">
            <input
              type="email"
              required
              placeholder="you@host.tld"
              aria-label="Email address"
              className="min-w-0 flex-1 rounded border border-neutral-800 bg-neutral-950 px-4 py-3 text-xs text-neutral-200 placeholder:text-neutral-600 focus:border-green-400/60 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded bg-green-400 px-6 py-3 text-xs font-bold tracking-wider text-black uppercase transition hover:bg-green-300"
            >
              send me the build
            </button>
          </form>
        </section>
      </main>

      <footer className="relative z-[1] border-t border-neutral-900 px-5 pt-6 pb-28 sm:pb-6">
        <div className="mx-auto flex max-w-5xl flex-col justify-between gap-2 text-[11px] text-neutral-600 sm:flex-row">
          <span>loam 2026 — MIT licensed core</span>
          <Link className="transition hover:text-green-400" href="/">
            ../all-designs
          </Link>
        </div>
      </footer>
    </div>
  );
}
