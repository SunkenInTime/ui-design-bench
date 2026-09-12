import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cairn / Lamplight",
  description: "Night-study literary landing direction for Cairn.",
};

const marginNotes = [
  {
    ref: "→ p.14",
    text: "Folders end. Links begin. The desk stays open.",
  },
  {
    ref: "→ today",
    text: "Recalled a quote from 2023 without searching.",
  },
  {
    ref: "→ later",
    text: "Weekly digest only if it earns the interruption.",
  },
];

export default function LamplightPage() {
  return (
    <div className="min-h-screen bg-[#16120E] text-[#F3EDE2]">

      {/* lamp pool */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 h-[48vh] bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(201,165,60,0.22),transparent_70%)]"
      />

      <header className="relative z-10 mx-auto flex max-w-5xl items-center justify-between px-5 pt-8 sm:px-8">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="block h-2 w-2 rounded-full bg-[#C9A53C] cairn-pulse"
          />
          <span className="font-[family-name:var(--font-newsreader)] text-lg tracking-tight">
            Cairn
          </span>
        </div>
        <nav className="flex items-center gap-5 font-[family-name:var(--font-plex-mono)] text-[11px] text-[#F3EDE2]/55">
          <a href="#practice" className="hover:text-[#C9A53C]">
            Practice
          </a>
          <a href="#" className="text-[#C9A53C] hover:underline">
            Sign in
          </a>
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl px-5 pb-24 sm:px-8">
        <section className="pt-16 sm:pt-24">
          <p className="font-[family-name:var(--font-plex-mono)] text-[11px] tracking-wide text-[#C9A53C]/80">
            For people who keep too many notebooks
          </p>
          <h1 className="mt-6 max-w-[18ch] font-[family-name:var(--font-newsreader)] text-[2.75rem] leading-[1.05] font-light tracking-tight sm:text-6xl lg:text-[4.5rem]">
            Keep the lamp on
            <span className="italic text-[#C9A53C]"> for the thought</span>{" "}
            you had at midnight.
          </h1>
          <p className="mt-8 max-w-[38rem] font-[family-name:var(--font-newsreader)] text-lg leading-relaxed text-[#F3EDE2]/78 sm:text-xl">
            Cairn is a quiet place to dump drafts, voice memos, and half-formed
            ideas — then watches the connections form on their own so morning-you
            can walk the trail night-you left.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center bg-[#C9A53C] px-6 font-[family-name:var(--font-newsreader)] text-base font-medium text-[#16120E] transition hover:bg-[#d4b34a]"
            >
              Open your desk
            </a>
            <p className="font-[family-name:var(--font-plex-mono)] text-[11px] text-[#F3EDE2]/45">
              Free while you’re building the habit
            </p>
          </div>
        </section>

        {/* manuscript + margin */}
        <section
          id="practice"
          className="mt-20 border-t border-[#F3EDE2]/12 pt-14 sm:mt-28"
        >
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <h2 className="font-[family-name:var(--font-newsreader)] text-3xl font-light tracking-tight sm:text-4xl">
                A practice, not a productivity system
              </h2>
              <div className="mt-8 space-y-6 font-[family-name:var(--font-newsreader)] text-[1.125rem] leading-[1.7] text-[#F3EDE2]/82">
                <p>
                  Most note apps reward filing. You spend the evening color-coding
                  folders and call it thinking. Cairn asks for less: write the
                  thing, mention the other thing, close the laptop.
                </p>
                <p>
                  Behind the page, links accrue like notes in a margin. The weekly
                  return shows you what kept resurfacing — not what you forced into
                  a tree.
                </p>
                <p>
                  Local-first by default. Your vault is a folder you own. Export is
                  plain Markdown, not a hostage exchange.
                </p>
              </div>
            </div>
            <aside className="lg:col-span-5">
              <p className="font-[family-name:var(--font-plex-mono)] text-[10px] tracking-widest text-[#F3EDE2]/40">
                MARGINALIA
              </p>
              <ul className="mt-5 space-y-5 border-l border-[#C9A53C]/35 pl-5">
                {marginNotes.map((m) => (
                  <li key={m.ref}>
                    <p className="font-[family-name:var(--font-plex-mono)] text-[11px] text-[#C9A53C]/85">
                      {m.ref}
                    </p>
                    <p className="mt-1 font-[family-name:var(--font-newsreader)] text-[1.05rem] leading-snug text-[#F3EDE2]/75 italic">
                      {m.text}
                    </p>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="mt-16 grid gap-8 border-t border-[#F3EDE2]/12 pt-14 sm:grid-cols-3">
          {[
            {
              h: "Daily page",
              p: "One dated canvas. Dump freely. Structure only what asks for it.",
            },
            {
              h: "Soft links",
              p: "Type [[ and the desk remembers. Backlinks appear without ceremony.",
            },
            {
              h: "Night mode that means it",
              p: "Warm ink, low contrast floor, no pure black glare at 1 a.m.",
            },
          ].map((c) => (
            <div key={c.h}>
              <h3 className="font-[family-name:var(--font-newsreader)] text-xl text-[#C9A53C]">
                {c.h}
              </h3>
              <p className="mt-2 font-[family-name:var(--font-newsreader)] text-[1.05rem] leading-relaxed text-[#F3EDE2]/70">
                {c.p}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-20 rounded-sm border border-[#C9A53C]/35 bg-[#1e1812]/80 px-6 py-10 text-center sm:px-10">
          <h2 className="font-[family-name:var(--font-newsreader)] text-3xl font-light tracking-tight sm:text-4xl">
            Leave the lamp on.
          </h2>
          <p className="mx-auto mt-3 max-w-md font-[family-name:var(--font-newsreader)] text-[#F3EDE2]/70">
            Import from Obsidian, Apple Notes, or a plain folder of text files.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex h-11 items-center bg-[#C9A53C] px-6 font-[family-name:var(--font-newsreader)] text-base font-medium text-[#16120E] hover:bg-[#d4b34a]"
          >
            Start free
          </a>
        </section>
      </main>
    </div>
  );
}
