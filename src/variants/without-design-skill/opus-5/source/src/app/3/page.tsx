import type { Metadata } from "next";
import { plexMono } from "../fonts";

export const metadata: Metadata = {
  title: "Command",
  description:
    "Recall is a keyboard-first second brain. Capture, link and retrieve without ever reaching for the mouse.",
};

const paletteRows = [
  { key: "⌘K", label: "capture thought", hint: "anywhere in the OS" },
  { key: "⌘[", label: "jump to backlinks", hint: "12 linked notes" },
  { key: "⌘/", label: "ask the archive", hint: "answers cite sources" },
  { key: "⌘⇧E", label: "export vault", hint: "markdown + assets" },
];

const results = [
  {
    title: "pricing-experiments.md",
    line: "…moving to usage-based broke the sales narrative, but retention…",
    tag: "linked ×7",
  },
  {
    title: "1:1 / dana / 2026-03-14",
    line: "…she flagged the same objection we hit in the Q3 review…",
    tag: "linked ×3",
  },
  {
    title: "clipped: The Cost of Context",
    line: "…attention residue lasts ~23 minutes per interruption…",
    tag: "highlight",
  },
];

const specs = [
  {
    cmd: "recall capture",
    body: "Global hotkey opens a one-line input over whatever you're doing. Type, hit enter, it's filed and linked. Never breaks flow.",
  },
  {
    cmd: "recall link --auto",
    body: "Every save runs entity extraction over your vault and proposes links. Accept with tab, reject with x. Nothing happens without you.",
  },
  {
    cmd: "recall ask",
    body: "Natural language query against 50k notes in 38ms locally. Every answer footnotes the exact note and line it came from.",
  },
  {
    cmd: "recall sync --e2ee",
    body: "Encrypted before it leaves the machine. Conflict resolution is a three-way merge, not a 'copy (2)' file.",
  },
];

export default function CommandPage() {
  return (
    <div
      className={`${plexMono.className} relative flex flex-1 flex-col bg-[#05070a] text-neutral-300 selection:bg-green-400/25`}
    >
      {/* Scanline + phosphor wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-55"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(74,222,128,0.05) 0 1px, transparent 1px 4px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-80 w-[820px] -translate-x-1/2 rounded-full bg-green-500/10 blur-[110px]"
      />

      <header className="relative mx-auto flex w-full max-w-5xl items-center justify-between border-b border-green-400/15 px-6 py-4 text-[13px]">
        <div className="flex items-center gap-2">
          <span className="text-green-400">▮</span>
          <span className="font-semibold tracking-tight text-neutral-100">
            recall
          </span>
          <span className="text-neutral-600">v4.2.0</span>
        </div>
        <nav className="hidden items-center gap-7 text-neutral-500 md:flex">
          <a className="transition-colors hover:text-green-300" href="#spec">
            ./spec
          </a>
          <a className="transition-colors hover:text-green-300" href="#keys">
            ./keybinds
          </a>
          <a className="transition-colors hover:text-green-300" href="#install">
            ./install
          </a>
        </nav>
        <a
          href="#install"
          className="border border-green-400/40 px-3 py-1.5 text-green-300 transition-colors hover:bg-green-400 hover:text-black"
        >
          brew install recall
        </a>
      </header>

      <main className="relative mx-auto w-full max-w-5xl px-6">
        {/* Hero */}
        <section className="py-16 lg:py-20">
          <p className="text-[12.5px] tracking-[0.2em] text-green-400/80 uppercase">
            keyboard-first second brain
          </p>

          <h1 className="mt-6 max-w-3xl text-[clamp(2.3rem,5vw,3.9rem)] leading-[1.06] font-semibold tracking-[-0.03em] text-neutral-50">
            Your mouse has no
            <br />
            business in your
            <br />
            <span className="text-green-400">train of thought.</span>
          </h1>

          <p className="mt-7 max-w-xl text-[16px] leading-relaxed text-neutral-400">
            Recall is a note system for people who type faster than they think.
            Capture in one keystroke, link with two, and search ten years of
            notes before your hand leaves home row.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 text-[13.5px]">
            <a
              href="#install"
              className="bg-green-400 px-5 py-2.5 font-semibold text-black transition-colors hover:bg-green-300"
            >
              Install (14 MB)
            </a>
            <a
              href="#keys"
              className="border border-neutral-700 px-5 py-2.5 text-neutral-300 transition-colors hover:border-green-400/60 hover:text-green-300"
            >
              See all 41 keybinds
            </a>
          </div>

          {/* Terminal / command palette mock */}
          <div className="mt-14 overflow-hidden rounded-lg border border-green-400/25 bg-[#080b0f] shadow-[0_0_60px_-20px_rgba(74,222,128,0.35)]">
            <div className="flex items-center gap-2 border-b border-green-400/15 px-4 py-2.5 text-[11.5px] text-neutral-500">
              <span className="size-2 rounded-full bg-neutral-700" />
              <span className="size-2 rounded-full bg-neutral-700" />
              <span className="size-2 rounded-full bg-green-400/70" />
              <span className="ml-2">~/vault — recall</span>
              <span className="ml-auto">50,412 notes indexed</span>
            </div>

            <div className="px-5 py-5">
              <p className="flex items-center gap-2 text-[15px]">
                <span className="text-green-400">❯</span>
                <span className="text-neutral-100">
                  recall ask &quot;why did we drop usage-based pricing?&quot;
                </span>
                <span className="inline-block h-4 w-2 animate-caret bg-green-400 align-middle" />
              </p>

              <p className="mt-4 text-[12.5px] text-neutral-600">
                → resolved 3 sources in 38ms · confidence high
              </p>

              <ul className="mt-4 space-y-2.5">
                {results.map((result) => (
                  <li
                    key={result.title}
                    className="group flex items-start gap-4 border border-neutral-800/80 bg-black/40 px-4 py-3 transition-colors hover:border-green-400/40"
                  >
                    <span className="mt-0.5 text-green-400/70">◆</span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[13.5px] text-neutral-100">
                        {result.title}
                      </span>
                      <span className="mt-1 block truncate text-[12.5px] text-neutral-500">
                        {result.line}
                      </span>
                    </span>
                    <span className="shrink-0 text-[11px] text-green-400/60">
                      {result.tag}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-neutral-800/80 pt-4 text-[11.5px] text-neutral-600">
                {paletteRows.map((row) => (
                  <span key={row.key} className="flex items-center gap-2">
                    <kbd className="border border-neutral-700 px-1.5 py-0.5 text-neutral-300">
                      {row.key}
                    </kbd>
                    {row.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Spec list */}
        <section id="spec" className="border-t border-neutral-800/80 py-20">
          <h2 className="text-[12.5px] tracking-[0.2em] text-green-400/80 uppercase">
            # what it actually does
          </h2>

          <div className="mt-10 divide-y divide-neutral-800/80">
            {specs.map((spec) => (
              <article
                key={spec.cmd}
                className="grid gap-3 py-7 transition-colors hover:bg-green-400/3 sm:grid-cols-[280px_1fr] sm:gap-10"
              >
                <h3 className="text-[15px] font-semibold text-green-300">
                  <span className="text-neutral-600">$ </span>
                  {spec.cmd}
                </h3>
                <p className="max-w-2xl text-[14.5px] leading-relaxed text-neutral-400">
                  {spec.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Keybind grid */}
        <section id="keys" className="border-t border-neutral-800/80 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-[clamp(1.6rem,3vw,2.3rem)] font-semibold tracking-[-0.02em] text-neutral-50">
              41 keybinds. Zero menus.
            </h2>
            <p className="text-[13px] text-neutral-600">
              all remappable · vim + emacs presets included
            </p>
          </div>

          <div className="mt-10 grid gap-px bg-neutral-800/80 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["⌘K", "Capture from anywhere"],
              ["⌘O", "Open note by title"],
              ["⌘/", "Ask your archive"],
              ["[[", "Insert link inline"],
              ["⌘⇧G", "Open graph view"],
              ["⌘J", "Jump to daily note"],
              ["⌘E", "Toggle raw markdown"],
              ["⌘⌥←", "Back through history"],
              ["⌘.", "Accept suggested link"],
            ].map(([key, label]) => (
              <div
                key={key}
                className="flex items-center gap-3 bg-[#05070a] px-5 py-4 transition-colors hover:bg-[#0a1017]"
              >
                <kbd className="min-w-14 border border-green-400/30 bg-green-400/6 px-2 py-1 text-center text-[12px] text-green-300">
                  {key}
                </kbd>
                <span className="text-[13.5px] text-neutral-400">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Install */}
        <section
          id="install"
          className="mb-20 border border-green-400/25 bg-gradient-to-b from-green-400/6 to-transparent px-8 py-14"
        >
          <h2 className="text-[clamp(1.7rem,3.4vw,2.6rem)] font-semibold tracking-[-0.025em] text-neutral-50">
            One line. Then never leave the keyboard again.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-neutral-400">
            Free for personal vaults. $8/month adds encrypted sync across
            machines. Uninstall takes your notes with you — they were always
            just files.
          </p>

          <div className="mt-8 flex max-w-md items-center gap-3 border border-neutral-700 bg-black/60 px-4 py-3">
            <span className="text-green-400">$</span>
            <code className="flex-1 text-[14px] text-neutral-200">
              brew install recall
            </code>
            <button
              type="button"
              className="text-[11.5px] tracking-wider text-neutral-500 uppercase transition-colors hover:text-green-300"
            >
              copy
            </button>
          </div>
        </section>
      </main>

      <footer className="relative mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 border-t border-neutral-800/80 px-6 py-8 pb-24 text-[12px] text-neutral-600">
        <p>recall-labs/recall · MIT core</p>
        <div className="flex gap-6">
          <a className="hover:text-green-300" href="#">
            man page
          </a>
          <a className="hover:text-green-300" href="#">
            changelog
          </a>
          <a className="hover:text-green-300" href="#">
            issues
          </a>
        </div>
      </footer>
    </div>
  );
}
