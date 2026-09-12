const principles = [
  {
    number: "01",
    title: "Capture everything",
    body: "A thought arrives unannounced and leaves without warning. Cortex holds the door open — one keystroke and the fragment is kept, source and all, before it evaporates.",
  },
  {
    number: "02",
    title: "Link as you think",
    body: "Notes are not filed, they are woven. Every sentence can reach every other sentence, so your archive grows a nervous system instead of a graveyard of folders.",
  },
  {
    number: "03",
    title: "Resurface on time",
    body: "A second brain earns its name by remembering for you. Old notes return precisely when they become relevant — in the document where they matter most.",
  },
];

const ledger = [
  ["Notes captured by our members", "4,821,309"],
  ["Connections drawn between ideas", "19,204,556"],
  ["Average time to file a thought", "0.8 s"],
  ["Members who call it indispensable", "97%"],
];

export default function IterationOne() {
  return (
    <main className="min-h-screen w-full bg-[#FAF6EF] pb-36 text-[#1C1917] selection:bg-[#7A2E2E] selection:text-[#FAF6EF]">
      {/* Top bar */}
      <header className="mx-auto flex max-w-5xl items-baseline justify-between border-b border-[#1C1917]/15 px-6 py-6">
        <a href="#" className="font-serif text-2xl italic tracking-tight">
          Cortex
        </a>
        <nav className="hidden items-baseline gap-8 text-[11px] font-semibold uppercase tracking-[0.18em] sm:flex">
          <a className="hover:text-[#7A2E2E]" href="#principles">
            Principles
          </a>
          <a className="hover:text-[#7A2E2E]" href="#ledger">
            Ledger
          </a>
          <a className="hover:text-[#7A2E2E]" href="#register">
            Register
          </a>
          <a
            href="#register"
            className="border border-[#1C1917] px-4 py-2 transition-colors hover:bg-[#1C1917] hover:text-[#FAF6EF]"
          >
            Start writing
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-5xl gap-12 px-6 pt-20 md:grid-cols-[1.2fr_1fr] md:pt-28">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7A2E2E]">
            Est. 2025 — A notebook that thinks back
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Your mind,
            <br />
            <span className="italic">faithfully</span> kept.
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-[#1C1917]/75">
            Cortex is a second brain for people who think in sentences. Capture
            the fragment, connect it to the whole, and let your knowledge
            compound like interest.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              id="register"
              href="#"
              className="bg-[#7A2E2E] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-[#FAF6EF] transition-colors hover:bg-[#5E2323]"
            >
              Begin your archive
            </a>
            <a
              href="#principles"
              className="text-sm font-semibold uppercase tracking-[0.14em] underline decoration-[#7A2E2E] decoration-2 underline-offset-8 hover:text-[#7A2E2E]"
            >
              Read the manifesto
            </a>
          </div>
          <p className="mt-12 border-t border-[#1C1917]/15 pt-5 text-xs leading-relaxed text-[#1C1917]/55">
            Free for the first 500 notes. No credit card, no lock-in — your
            archive exports to plain Markdown, forever yours.
          </p>
        </div>

        {/* Index card */}
        <div className="relative md:pt-6">
          <div className="absolute -left-3 top-8 h-full w-full border border-[#1C1917]/20 bg-[#F3ECDF]" />
          <figure className="relative -rotate-1 border border-[#1C1917]/25 bg-[#FFFDF7] shadow-[0_18px_40px_-18px_rgba(28,25,23,0.35)]">
            <div
              className="border-l-2 border-[#C97B7B] px-6 py-6"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, transparent 0, transparent 31px, rgba(90,120,160,0.22) 31px, rgba(90,120,160,0.22) 32px)",
              }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1C1917]/45">
                Note № 2,481 — Tuesday
              </p>
              <p className="mt-4 font-serif text-[15px] leading-8">
                A city is a second brain we built together — streets are its
                axons, cafés its synapses.{" "}
                <span className="text-[#7A2E2E] underline decoration-[#7A2E2E]/40 underline-offset-4">
                  [[urbanism]]
                </span>{" "}
                meets{" "}
                <span className="text-[#7A2E2E] underline decoration-[#7A2E2E]/40 underline-offset-4">
                  [[memory palaces]]
                </span>
                . Follow up with the piece on medieval{" "}
                <span className="text-[#7A2E2E] underline decoration-[#7A2E2E]/40 underline-offset-4">
                  [[cathedrals as notebooks]]
                </span>
                .
              </p>
              <figcaption className="mt-5 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-[#1C1917]/45">
                <span>Linked to 14 notes</span>
                <span>Resurfaces in 3 days</span>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      {/* Principles */}
      <section id="principles" className="mx-auto max-w-5xl px-6 pt-28">
        <div className="flex items-baseline justify-between border-b-2 border-[#1C1917] pb-4">
          <h2 className="font-serif text-3xl italic">Three principles</h2>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1C1917]/50">
            § 1 — Method
          </span>
        </div>
        <ol>
          {principles.map((p) => (
            <li
              key={p.number}
              className="grid gap-4 border-b border-[#1C1917]/15 py-10 md:grid-cols-[120px_240px_1fr] md:gap-10"
            >
              <span className="font-serif text-4xl text-[#7A2E2E]">
                {p.number}
              </span>
              <h3 className="font-serif text-2xl tracking-tight">{p.title}</h3>
              <p className="max-w-xl leading-relaxed text-[#1C1917]/75">
                {p.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Ledger */}
      <section id="ledger" className="mx-auto max-w-5xl px-6 pt-24">
        <div className="flex items-baseline justify-between border-b-2 border-[#1C1917] pb-4">
          <h2 className="font-serif text-3xl italic">The ledger</h2>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1C1917]/50">
            § 2 — In numbers
          </span>
        </div>
        <dl className="mt-2">
          {ledger.map(([label, value]) => (
            <div
              key={label}
              className="flex items-baseline justify-between gap-6 border-b border-dotted border-[#1C1917]/30 py-5"
            >
              <dt className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#1C1917]/70">
                {label}
              </dt>
              <dd className="font-serif text-3xl tabular-nums tracking-tight">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Pull quote */}
      <section className="mx-auto max-w-3xl px-6 pt-24 text-center">
        <p className="font-serif text-3xl leading-snug tracking-tight md:text-4xl">
          <span className="text-[#7A2E2E]">&ldquo;</span>I stopped rereading my
          notes years ago. Now my notes reread{" "}
          <span className="italic">me</span> — and hand me the paragraph I
          forgot I wrote.
          <span className="text-[#7A2E2E]">&rdquo;</span>
        </p>
        <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1C1917]/55">
          Mara Ellison — Essayist, member since 2025
        </p>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pt-24">
        <div className="border-2 border-[#1C1917] px-8 py-14 text-center md:px-16">
          <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
            Open an account with your <span className="italic">future self</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-lg leading-relaxed text-[#1C1917]/70">
            Every note is a deposit. Every link is interest. Start your archive
            today — it pays out for the rest of your thinking life.
          </p>
          <a
            href="#"
            className="mt-9 inline-block bg-[#1C1917] px-9 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#FAF6EF] transition-colors hover:bg-[#7A2E2E]"
          >
            Claim your first 500 notes
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto mt-24 flex max-w-5xl flex-col items-start justify-between gap-4 border-t border-[#1C1917]/15 px-6 pt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1C1917]/50 sm:flex-row sm:items-center">
        <span className="font-serif text-base italic normal-case tracking-tight text-[#1C1917]">
          Cortex
        </span>
        <span>A second brain, kept in plain text</span>
        <span>© 2026 — Set in Georgia, printed daily</span>
      </footer>
    </main>
  );
}
