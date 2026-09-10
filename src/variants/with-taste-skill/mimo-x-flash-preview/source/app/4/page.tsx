import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "04 Desk — Marrow",
  description:
    "Marrow is a second brain that looks like the desk it replaces: a stack of sticky notes, an inbox, and a highlighter that never runs out.",
};

const STICKIES = [
  {
    text: "Ask Anika about the Kyoto budget",
    tag: "inbox",
    rotate: "-rotate-2",
    bg: "bg-[#f7e7a0]",
  },
  {
    text: "Read: _How to Take Smart Notes_ ch. 3",
    tag: "reading",
    rotate: "rotate-1",
    bg: "bg-[#f9c9d4]",
  },
  {
    text: "Idea — the inbox IS the filing system",
    tag: "idea",
    rotate: "-rotate-1",
    bg: "bg-[#b8e4c8]",
  },
  {
    text: "Draft Sunday digest copy by Friday",
    tag: "todo",
    rotate: "rotate-2",
    bg: "bg-[#c5dff5]",
  },
  {
    text: "Link the meeting note to the roadmap page",
    tag: "inbox",
    rotate: "-rotate-3",
    bg: "bg-[#f7e7a0]",
  },
  {
    text: "Quote: “Memory is the medium of thought.”",
    tag: "quote",
    rotate: "rotate-1",
    bg: "bg-[#e4d4f5]",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Dump it in the inbox",
    body: "Hit ⌘⇧Space from anywhere. Type, paste, or dictate. No tag, no folder, no title — Marrow takes the mess.",
    tools: ["global quick capture", "voice memos", "share sheet"],
  },
  {
    n: "2",
    title: "Let the highlighter work",
    body: "Marrow reads what you wrote and proposes links and tags. Accept one, accept all, or ignore — the graph still forms from plain mentions.",
    tools: ["auto-link suggestions", "tag proposals", "duplicate detection"],
  },
  {
    n: "3",
    title: "Open the desk each morning",
    body: "Today's page shows yesterday's inbox, one forgotten note resurfaced, and a blank sheet. Three things. That's the ritual.",
    tools: ["daily digest", "resurface", "weekly broadsheet"],
  },
];

const SPECS = [
  ["Storage", "Plain Markdown on your disk"],
  ["Sync", "Optional · E2E encrypted"],
  ["Platforms", "macOS · Windows · Linux · iOS"],
  ["Price", "Free personal · $8/mo teams"],
  ["Export", "One keystroke, no lock-in"],
  ["Offline", "Works fully without a network"],
];

export default function VariantFour() {
  return (
    <div className="ui min-h-screen bg-[#d6d1c4] text-[#141414]">
      {/* top bar */}
      <header className="border-b-[3px] border-[#141414] bg-[#d6d1c4]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center border-[2.5px] border-[#141414] bg-[#f5e642] text-sm font-black leading-none">
              M
            </span>
            <span className="text-lg font-black uppercase tracking-tight">
              Marrow
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#steps"
              className="hidden border-[2.5px] border-[#141414] px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors hover:bg-[#141414] hover:text-[#f5e642] sm:inline-flex"
            >
              How it works
            </a>
            <a
              href="#get"
              className="inline-flex border-[2.5px] border-[#141414] bg-[#f5e642] px-4 py-2 text-xs font-bold uppercase tracking-wide shadow-[3px_3px_0_#141414] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141414]"
            >
              Get it
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* hero */}
        <section className="border-b-[3px] border-[#141414] px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block border-[2.5px] border-[#141414] bg-[#141414] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5e642]">
                Second brain, zero filing
              </span>
              <h1 className="mt-6 text-5xl font-black uppercase leading-[0.95] tracking-[-0.03em] md:text-[4rem]">
                Your desk,
                <br />
                minus the
                <br />
                <span className="bg-[#f5e642] px-1 box-decoration-clone">
                  paper cuts.
                </span>
              </h1>
              <p className="mt-6 max-w-md text-base font-medium leading-relaxed text-[#141414]/80">
                Marrow is a note-taking app shaped like the messy desk it
                replaces: a stack of sticky notes, a real inbox, and a
                highlighter that never runs out. Dump it in. Find it later.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#get"
                  className="inline-flex h-12 items-center border-[3px] border-[#141414] bg-[#141414] px-6 text-sm font-bold uppercase tracking-wide text-[#f5e642] shadow-[4px_4px_0_#f5e642] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141414]"
                >
                  Grab the stack
                </a>
                <a
                  href="#steps"
                  className="inline-flex h-12 items-center border-[3px] border-[#141414] px-6 text-sm font-bold uppercase tracking-wide transition-colors hover:bg-[#141414] hover:text-[#f5e642] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141414]"
                >
                  See the method
                </a>
              </div>
            </div>

            {/* sticky-note board — signature */}
            <div className="relative">
              <div className="border-[3px] border-[#141414] bg-[#c4bba8] p-6 shadow-[6px_6px_0_#141414]">
                <div className="mono mb-4 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.16em]">
                  <span>desk.board — today</span>
                  <span className="bg-[#141414] px-2 py-0.5 text-[#f5e642]">
                    6 notes
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {STICKIES.map((s, i) => (
                    <div
                      key={i}
                      className={`flex min-h-[110px] flex-col justify-between border-[2.5px] border-[#141414] p-3 ${s.bg} ${s.rotate} shadow-[2px_2px_0_rgba(20,20,20,0.25)]`}
                    >
                      <p className="text-[11px] font-semibold leading-snug">
                        {s.text}
                      </p>
                      <span className="mono mt-2 self-start bg-[#141414]/85 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-[#f5e642]">
                        #{s.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* steps */}
        <section id="steps" className="border-b-[3px] border-[#141414] px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-baseline gap-4">
              <h2 className="text-3xl font-black uppercase tracking-tight md:text-4xl">
                Three moves
              </h2>
              <span className="h-[3px] flex-1 bg-[#141414]" />
              <span className="mono text-[11px] font-bold uppercase tracking-[0.18em]">
                No manual required
              </span>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {STEPS.map((s) => (
                <article
                  key={s.n}
                  className="border-[3px] border-[#141414] bg-[#e4dfd2] p-6 shadow-[4px_4px_0_#141414]"
                >
                  <span className="flex h-10 w-10 items-center justify-center border-[2.5px] border-[#141414] bg-[#f5e642] text-lg font-black">
                    {s.n}
                  </span>
                  <h3 className="mt-4 text-xl font-black uppercase leading-tight tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm font-medium leading-relaxed text-[#141414]/80">
                    {s.body}
                  </p>
                  <ul className="mono mt-5 space-y-1.5 border-t-2 border-dashed border-[#141414]/40 pt-4 text-[10px] font-bold uppercase tracking-wide">
                    {s.tools.map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <span className="inline-block h-1.5 w-1.5 bg-[#141414]" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* specs table */}
        <section className="border-b-[3px] border-[#141414] px-5 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-black uppercase tracking-tight md:text-3xl">
              The fine print, in big type
            </h2>
            <dl className="mt-8 divide-y-[2.5px] divide-[#141414] border-y-[3px] border-[#141414]">
              {SPECS.map(([k, v]) => (
                <div
                  key={k}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-8"
                >
                  <dt className="mono w-40 shrink-0 text-[11px] font-bold uppercase tracking-[0.18em]">
                    {k}
                  </dt>
                  <dd className="text-base font-bold uppercase tracking-tight">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CTA */}
        <section id="get" className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-6xl border-[3px] border-[#141414] bg-[#f5e642] px-8 py-14 text-center shadow-[8px_8px_0_#141414]">
            <h2 className="mx-auto max-w-xl text-4xl font-black uppercase leading-[0.98] tracking-[-0.03em] md:text-[3.5rem]">
              Clear the desk.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm font-semibold leading-relaxed">
              Free for personal notes. Paid only when your team wants shared
              boards. No trial timers, no feature gates on the basics.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex h-12 items-center border-[3px] border-[#141414] bg-[#141414] px-8 text-sm font-bold uppercase tracking-wide text-[#f5e642] shadow-[4px_4px_0_#d6d1c4] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141414]"
            >
              Download Marrow
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t-[3px] border-[#141414] px-5 py-6 md:px-8">
        <div className="mono mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-[10px] font-bold uppercase tracking-[0.18em] sm:flex-row">
          <span>Marrow &copy; 2026</span>
          <span>Sticky notes, grown up</span>
        </div>
      </footer>
    </div>
  );
}
