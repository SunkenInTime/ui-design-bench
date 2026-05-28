import { DM_Serif_Display, Newsreader, Caveat } from "next/font/google";

const display = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--mg-display",
});

const body = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--mg-body",
});

const hand = Caveat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--mg-hand",
});

const NOTES = [
  {
    n: "i.",
    title: "The margin is the method",
    body: "Every note keeps its own margin — a quiet column for second thoughts, questions, and the connections you only notice later.",
  },
  {
    n: "ii.",
    title: "Backlinks, like footnotes",
    body: "Reference any note and it remembers. Your library threads itself together the way a good book cites its sources.",
  },
  {
    n: "iii.",
    title: "Daily pages",
    body: "Begin each morning with a blank leaf. Yesterday's thoughts wait patiently in the stacks, indexed and recallable.",
  },
];

export default function MarginaliaPage() {
  return (
    <main
      className={`${display.variable} ${body.variable} ${hand.variable} relative min-h-screen bg-[#f4ede0] text-[#211c16] selection:bg-[#c8472f] selection:text-[#f4ede0]`}
      style={{ fontFamily: "var(--mg-body), Georgia, serif" }}
    >
      {/* Dotted ledger paper */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(33,28,22,0.14) 1px, transparent 1.4px)",
          backgroundSize: "22px 22px",
          backgroundPosition: "-1px -1px",
        }}
      />
      {/* Warm paper vignette + fiber */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(100% 80% at 50% 0%, rgba(255,250,240,0.7), transparent 60%), radial-gradient(120% 120% at 50% 100%, rgba(160,120,70,0.12), transparent 55%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        {/* Masthead */}
        <header className="border-b-2 border-[#211c16] pt-8">
          <div className="flex items-center justify-between pb-2 text-[11px] uppercase tracking-[0.28em] text-[#7a6a54]">
            <span>Est. for the curious</span>
            <span className="hidden sm:block">A note-taking quarterly</span>
            <span>No. 02</span>
          </div>
          <h1
            className="pb-2 text-center text-[clamp(2.8rem,11vw,8rem)] leading-none tracking-tight"
            style={{ fontFamily: "var(--mg-display), Georgia, serif" }}
          >
            Marginalia
          </h1>
          <nav className="flex items-center justify-center gap-6 border-t border-[#211c16]/30 py-2 text-[11px] uppercase tracking-[0.24em] text-[#5a4d3c]">
            <a className="hover:text-[#c8472f]" href="#read">
              The method
            </a>
            <span className="text-[#c8472f]">✦</span>
            <a className="hover:text-[#c8472f]" href="#specimen">
              Specimen
            </a>
            <span className="text-[#c8472f]">✦</span>
            <a className="hover:text-[#c8472f]" href="#begin">
              Subscribe
            </a>
          </nav>
        </header>

        {/* Hero — editorial */}
        <section
          id="read"
          className="grid gap-8 py-14 md:grid-cols-[1fr_280px] md:gap-12"
        >
          <div className="relative">
            <p className="mb-5 text-[12px] uppercase tracking-[0.3em] text-[#c8472f]">
              The case for a paper mind
            </p>
            <h2
              className="text-[clamp(2.2rem,6vw,4.4rem)] leading-[1.02] tracking-tight"
              style={{ fontFamily: "var(--mg-display), Georgia, serif" }}
            >
              Think on paper.
              <br />
              <span className="italic text-[#c8472f]">Keep it forever.</span>
            </h2>

            <p className="mt-7 max-w-prose text-[1.18rem] leading-[1.7] text-[#3a3127]">
              <span
                className="float-left mr-3 mt-1 leading-[0.7] text-[#c8472f]"
                style={{
                  fontFamily: "var(--mg-display), Georgia, serif",
                  fontSize: "4.2rem",
                }}
              >
                M
              </span>
              arginalia is a second brain dressed as a beloved notebook. Capture
              a thought and it settles onto the page like ink — then quietly
              links itself to everything you&apos;ve ever written, so nothing you
              know is ever truly lost.
            </p>

            <div id="begin" className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#"
                className="group inline-flex items-center gap-2 bg-[#211c16] px-7 py-3.5 text-[12px] uppercase tracking-[0.18em] text-[#f4ede0] transition-colors hover:bg-[#c8472f]"
              >
                Open a new leaf
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <span
                className="text-[1.5rem] text-[#5a4d3c]"
                style={{ fontFamily: "var(--mg-hand), cursive" }}
              >
                free for 30 days, no ink required
              </span>
            </div>
          </div>

          {/* The margin column */}
          <aside className="relative border-l border-dashed border-[#211c16]/30 pl-6 md:pl-7">
            <span
              className="absolute -left-3 top-0 hidden -rotate-6 text-[1.5rem] text-[#c8472f] md:block"
              style={{ fontFamily: "var(--mg-hand), cursive" }}
            >
              ↙ notes in the margin
            </span>
            <div
              className="space-y-5 text-[1.35rem] leading-snug text-[#4a3f30]"
              style={{ fontFamily: "var(--mg-hand), cursive" }}
            >
              <p>&ldquo;the bit you scribble beside the text is usually the real idea.&rdquo;</p>
              <p className="text-[#c8472f]">— so we built the whole app around it.</p>
              <hr className="border-[#211c16]/20" />
              <p>everything searchable. everything linked. nothing precious lost.</p>
            </div>
          </aside>
        </section>

        {/* Specimen */}
        <section id="specimen" className="pb-16">
          <div className="mb-4 flex items-baseline justify-between border-b border-[#211c16]/30 pb-2">
            <h3
              className="text-2xl"
              style={{ fontFamily: "var(--mg-display), Georgia, serif" }}
            >
              A specimen page
            </h3>
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#7a6a54]">
              fig. 1
            </span>
          </div>

          <div className="grid gap-6 rounded-sm border border-[#211c16]/25 bg-[#fbf6ec] p-6 shadow-[6px_6px_0_rgba(33,28,22,0.12)] md:grid-cols-[1fr_220px] md:p-9">
            <article className="leading-[1.8] text-[#33291d]">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#c8472f]">
                Tuesday · 6 march
              </p>
              <h4
                className="mt-2 text-3xl"
                style={{ fontFamily: "var(--mg-display), Georgia, serif" }}
              >
                On keeping a commonplace book
              </h4>
              <p className="mt-4 text-[1.05rem]">
                The renaissance scholar kept a{" "}
                <span className="bg-[#f3d6a0]/70 px-1">commonplace book</span> —
                a running ledger of quotations, ideas, and observations,
                cross-referenced by theme. It was, in every meaningful sense, a
                second brain made of paper.
              </p>
              <p className="mt-3 text-[1.05rem]">
                Marginalia revives the practice with{" "}
                <span className="underline decoration-[#c8472f] decoration-2 underline-offset-4">
                  living links
                </span>{" "}
                and instant recall.
              </p>
            </article>
            <aside
              className="relative border-t border-dashed border-[#211c16]/30 pt-4 text-[1.25rem] leading-snug text-[#4a3f30] md:border-l md:border-t-0 md:pl-5 md:pt-0"
              style={{ fontFamily: "var(--mg-hand), cursive" }}
            >
              <p className="-rotate-2">connect this to &ldquo;Zettelkasten&rdquo; →</p>
              <p className="mt-5 rotate-1 text-[#c8472f]">
                ✶ this is the whole pitch
              </p>
              <p className="mt-5">remember to re-read in spring</p>
            </aside>
          </div>
        </section>

        {/* Footnotes / features */}
        <section className="border-t-2 border-[#211c16] py-14">
          <p className="mb-8 text-center text-[12px] uppercase tracking-[0.3em] text-[#7a6a54]">
            Footnotes
          </p>
          <div className="grid gap-x-10 gap-y-9 sm:grid-cols-3">
            {NOTES.map((f) => (
              <article key={f.n} className="border-t border-[#211c16]/30 pt-4">
                <span className="text-[#c8472f]" style={{ fontFamily: "var(--mg-display), serif" }}>
                  {f.n}
                </span>
                <h4
                  className="mt-2 text-[1.5rem] leading-tight"
                  style={{ fontFamily: "var(--mg-display), Georgia, serif" }}
                >
                  {f.title}
                </h4>
                <p className="mt-2 text-[1.02rem] leading-relaxed text-[#4a3f30]">
                  {f.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <footer className="flex flex-col items-center gap-2 border-t border-[#211c16]/30 py-10 text-center">
          <p
            className="text-3xl"
            style={{ fontFamily: "var(--mg-display), Georgia, serif" }}
          >
            Marginalia
          </p>
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#7a6a54]">
            © {new Date().getFullYear()} · Printed in the margins
          </p>
        </footer>
      </div>
    </main>
  );
}
