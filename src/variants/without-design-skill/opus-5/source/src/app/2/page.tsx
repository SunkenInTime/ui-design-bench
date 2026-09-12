import Link from "next/link";

const entries = [
  {
    n: "I",
    title: "Write first, organise never",
    body: "No folders to design before you begin. Type. Loam reads what you wrote and files it against everything else you have ever written.",
  },
  {
    n: "II",
    title: "Links that point both ways",
    body: "Mention an idea and the idea learns your name. Every note keeps a quiet record of who has referred to it, and why.",
  },
  {
    n: "III",
    title: "A memory you can question",
    body: "Ask “what did I conclude about attention spans?” and get an answer assembled from your own margins — with citations back to the page.",
  },
  {
    n: "IV",
    title: "Plain text, plainly yours",
    body: "Markdown files in a folder you choose. Loam can vanish tomorrow and your library will open in any editor on earth.",
  },
];

export default function PaperLanding() {
  return (
    <div className="relative min-h-screen flex-1 bg-[#faf7f2] font-serif text-[#1a1815] selection:bg-[#e8dcc8]">
      {/* Paper grain + rule lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(26,24,21,0.05)_1px,transparent_1px)] bg-[size:100%_2rem] opacity-40"
      />

      <div className="relative mx-auto max-w-[68rem] px-6 sm:px-10">
        {/* Masthead */}
        <header className="flex items-center justify-between border-b border-[#1a1815]/15 py-6">
          <span className="font-sans text-[11px] tracking-[0.3em] uppercase">
            Loam
          </span>
          <nav className="hidden gap-8 font-sans text-[11px] tracking-[0.18em] text-[#1a1815]/55 uppercase sm:flex">
            <a className="transition hover:text-[#1a1815]" href="#method">
              Method
            </a>
            <a className="transition hover:text-[#1a1815]" href="#reading">
              Reading room
            </a>
            <a className="transition hover:text-[#1a1815]" href="#join">
              Join
            </a>
          </nav>
          <span className="font-sans text-[11px] tracking-[0.18em] text-[#1a1815]/45 uppercase">
            Est. MMXXVI
          </span>
        </header>

        {/* Hero */}
        <section className="relative border-b border-[#1a1815]/15 py-24 sm:py-36">
          <p className="text-center font-sans text-[11px] tracking-[0.3em] text-[#b4532a] uppercase">
            A second brain, in plain language
          </p>

          <h1 className="mx-auto mt-10 max-w-3xl text-center text-[2.75rem] leading-[1.06] tracking-[-0.02em] text-balance sm:text-[4.5rem]">
            A quiet place for
            <br />
            everything{" "}
            <span className="relative inline-block italic">
              you know
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-2.5 w-full text-[#b4532a]/50"
              >
                <path
                  d="M2 8 C 60 2, 110 11, 160 5 S 250 2, 298 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h1>

          <p className="mx-auto mt-10 max-w-xl text-center text-lg leading-[1.75] text-pretty text-[#1a1815]/70">
            Most note apps are filing cabinets. Loam is closer to a commonplace
            book — a lifetime of reading, thinking and second-guessing, kept in
            one place and quietly cross-referenced.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 font-sans sm:flex-row">
            <a
              href="#join"
              className="rounded-sm bg-[#1a1815] px-8 py-3.5 text-sm font-medium text-[#faf7f2] transition hover:bg-[#3a352e]"
            >
              Begin a library
            </a>
            <a
              href="#method"
              className="border-b border-[#1a1815]/30 pb-0.5 text-sm text-[#1a1815]/70 transition hover:border-[#1a1815] hover:text-[#1a1815]"
            >
              Read the method
            </a>
          </div>

          {/* Marginalia */}
          <aside className="pointer-events-none absolute top-32 -right-4 hidden w-44 -rotate-2 font-sans text-[11px] leading-relaxed text-[#b4532a]/85 xl:block">
            <span className="mb-1.5 block h-px w-8 bg-[#b4532a]/40" />
            “Commonplace book” — a scrapbook of quotes, kept by readers since the
            15th century.
          </aside>
          <aside className="pointer-events-none absolute bottom-28 -left-6 hidden w-40 rotate-1 font-sans text-[11px] leading-relaxed text-[#1a1815]/45 xl:block">
            <span className="mb-1.5 block h-px w-8 bg-[#1a1815]/25" />
            No folders. No tag taxonomies to maintain on a Sunday evening.
          </aside>
        </section>

        {/* Method — numbered editorial entries */}
        <section id="method" className="scroll-mt-16 py-24">
          <h2 className="mb-16 text-center font-sans text-[11px] tracking-[0.3em] text-[#1a1815]/50 uppercase">
            The method
          </h2>

          <div className="divide-y divide-[#1a1815]/12">
            {entries.map((entry) => (
              <article
                key={entry.n}
                className="group grid gap-x-10 gap-y-4 py-10 sm:grid-cols-[4rem_1fr] sm:py-12"
              >
                <span className="text-2xl text-[#b4532a]/60 italic transition-colors group-hover:text-[#b4532a]">
                  {entry.n}
                </span>
                <div className="max-w-2xl">
                  <h3 className="text-2xl tracking-[-0.01em] sm:text-[1.75rem]">
                    {entry.title}
                  </h3>
                  <p className="mt-3 leading-[1.8] text-pretty text-[#1a1815]/65">
                    {entry.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Pull quote */}
        <section className="border-y border-[#1a1815]/15 py-24">
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="text-[1.75rem] leading-[1.45] text-balance italic sm:text-[2.25rem]">
              “I have kept notes for eleven years. Loam is the first tool that
              made the older ones feel alive rather than archived.”
            </p>
            <footer className="mt-8 font-sans text-[11px] tracking-[0.2em] text-[#1a1815]/50 uppercase">
              Ada Wren — historian, Edinburgh
            </footer>
          </blockquote>
        </section>

        {/* Reading room */}
        <section id="reading" className="scroll-mt-16 py-24">
          <div className="grid gap-14 md:grid-cols-[1fr_1.1fr] md:items-center">
            <div>
              <h2 className="text-3xl leading-tight tracking-[-0.01em] text-balance sm:text-[2.5rem]">
                Your margins, gathered into one long conversation.
              </h2>
              <p className="mt-6 leading-[1.8] text-[#1a1815]/65">
                Highlights from what you read arrive alongside the notes you
                wrote years ago on the same subject. Agreement and contradiction,
                side by side.
              </p>
              <a
                href="#join"
                className="mt-8 inline-block border-b border-[#1a1815]/30 pb-0.5 font-sans text-sm transition hover:border-[#1a1815]"
              >
                Import from Kindle, Readwise & Instapaper →
              </a>
            </div>

            {/* An index card stack. Offsets are Tailwind classes rather than
                inline styles so they can shrink on narrow screens — the cards
                must stay inside the container at 320px. */}
            <div className="relative h-[26rem]">
              {[
                {
                  t: "On attention",
                  b: "Depth is a scarce resource. Guard the first two hours.",
                  pos: "top-0 left-0 rotate-[-6deg]",
                },
                {
                  t: "Reading — Deep Work",
                  b: "Cal Newport, ch. 3. Cross-ref: my 2021 sabbatical notes.",
                  pos: "top-[8rem] left-6 rotate-[3deg] sm:left-10",
                },
                {
                  t: "Half-thought, 02:14",
                  b: "Is a second brain just an admission the first one leaks?",
                  pos: "top-[16rem] left-12 rotate-[-2deg] sm:left-20",
                },
              ].map((card) => (
                <div
                  key={card.t}
                  className={`absolute w-60 border border-[#1a1815]/12 bg-white p-5 shadow-[0_10px_30px_-12px_rgba(26,24,21,0.25)] sm:w-72 ${card.pos}`}
                >
                  <p className="font-sans text-[10px] tracking-[0.18em] text-[#b4532a] uppercase">
                    {card.t}
                  </p>
                  <p className="mt-2.5 leading-[1.7] text-[#1a1815]/75">
                    {card.b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join */}
        <section
          id="join"
          className="scroll-mt-16 border-t border-[#1a1815]/15 py-24 text-center"
        >
          <h2 className="text-3xl tracking-[-0.01em] text-balance sm:text-[2.75rem]">
            Start keeping better company
            <br className="hidden sm:block" /> with your own ideas.
          </h2>
          <form className="mx-auto mt-10 flex max-w-md flex-col gap-3 font-sans sm:flex-row">
            <input
              type="email"
              required
              placeholder="you@example.com"
              aria-label="Email address"
              className="min-w-0 flex-1 border-b border-[#1a1815]/25 bg-transparent px-1 py-3 text-sm placeholder:text-[#1a1815]/55 focus:border-[#1a1815] focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-sm bg-[#1a1815] px-7 py-3 text-sm font-medium text-[#faf7f2] transition hover:bg-[#3a352e]"
            >
              Request an invitation
            </button>
          </form>
          <p className="mt-5 font-sans text-xs text-[#1a1815]/45">
            Free for 500 notes · £6 a month thereafter
          </p>
        </section>

        <footer className="flex flex-col items-center justify-between gap-3 border-t border-[#1a1815]/15 pt-10 pb-28 font-sans text-[11px] tracking-[0.15em] text-[#1a1815]/55 uppercase sm:flex-row sm:pb-10">
          <span>Loam — © MMXXVI</span>
          <Link className="transition hover:text-[#1a1815]" href="/">
            All designs
          </Link>
        </footer>
      </div>
    </div>
  );
}
