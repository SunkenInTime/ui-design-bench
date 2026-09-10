import "@/generated/scoped-variant-css/without-design-skill/mimo-x-pro-preview/source/app/five/page.css";
export default function FivePage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0C0C0C]">

      <div className="lg-page">
        <header className="mx-auto max-w-6xl px-5 pt-5 md:px-8">
          <div className="lg-heavy-rule flex flex-wrap items-end justify-between gap-3 pb-3">
            <div>
              <div className="mono text-[10px] uppercase tracking-[0.22em] text-[#C23B22]">
                Vol. I · No. 01
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[#3F3A34] sans">
                A journal of second minds
              </div>
            </div>
            <div className="sans text-[11px] uppercase tracking-[0.14em] text-[#3F3A34]">
              Free to read · Free to keep
            </div>
          </div>
          <div className="border-b border-[#0C0C0C] pb-4 pt-3">
            <div className="text-center">
              <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Cortex</h1>
              <p className="sans mt-2 text-[12px] uppercase tracking-[0.28em] text-[#3F3A34]">
                On the keeping of a mind
              </p>
            </div>
          </div>
          <nav className="sans flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-b border-[#0C0C0C] py-3 text-[12px] uppercase tracking-[0.12em]">
            <a className="transition-colors hover:text-[#C23B22] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C23B22]" href="#manifesto">Manifesto</a>
            <a className="transition-colors hover:text-[#C23B22] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C23B22]" href="#columns">The Practice</a>
            <a className="transition-colors hover:text-[#C23B22] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C23B22]" href="#extracts">Extracts</a>
            <a className="font-semibold text-[#C23B22] transition-colors hover:text-[#0C0C0C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C23B22]" href="#subscribe">
              Subscribe
            </a>
          </nav>
        </header>

        <main className="mx-auto max-w-6xl px-5 pb-16 pt-8 md:px-8">
          <section id="manifesto" className="lg-rule grid gap-8 pt-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-8">
              <p className="sans mb-3 text-[11px] uppercase tracking-[0.18em] text-[#C23B22]">
                Lead essay
              </p>
              <h2 className="text-4xl leading-[1.1] tracking-tight md:text-5xl">
                A second brain is not a warehouse. It is a correspondence with your future self.
              </h2>
              <div className="mt-6 space-y-5 text-[18px] leading-[1.7] text-[#1a1814] md:text-[19px]">
                <p className="lg-drop">
                  Most note systems fail the way attics fail: they accumulate, then they intimidate.
                  Cortex begins from a different premise. A thought is only finished when it has
                  been written somewhere you will look again, and linked to something that changes
                  how you read it.
                </p>
                <p>
                  Capture is easy. Connection is the craft. The app proposes neighbors from the
                  language you already used — then waits while you accept, rewrite, or refuse.
                  Structure is earned, not assigned.
                </p>
                <p>
                  When you need an answer, you do not dig. You ask. Cortex returns the note,
                  the source, and the path of relations that made the idea mean something.
                </p>
              </div>
            </div>
            <aside className="md:col-span-4">
              <div className="border border-[#0C0C0C] bg-[#fff] p-5">
                <h3 className="sans mb-3 text-[11px] font-bold uppercase tracking-[0.16em]">
                  In this issue
                </h3>
                <ol className="space-y-3 text-[15px] leading-snug">
                  <li className="border-b border-[#0C0C0C]/15 pb-3">
                    <span className="sans mono mr-2 text-[11px] text-[#C23B22]">01</span>
                    The capture reflex
                  </li>
                  <li className="border-b border-[#0C0C0C]/15 pb-3">
                    <span className="sans mono mr-2 text-[11px] text-[#C23B22]">02</span>
                    Links before folders
                  </li>
                  <li className="border-b border-[#0C0C0C]/15 pb-3">
                    <span className="sans mono mr-2 text-[11px] text-[#C23B22]">03</span>
                    Recall without ceremony
                  </li>
                  <li>
                    <span className="sans mono mr-2 text-[11px] text-[#C23B22]">04</span>
                    On keeping a common-place
                  </li>
                </ol>
              </div>
              <blockquote className="mt-5 border-l-4 border-[#C23B22] pl-4 text-[17px] italic leading-relaxed text-[#1a1814]">
                “I write so that I may reread — and be surprised by who I was.”
                <footer className="sans mt-2 text-[11px] not-italic uppercase tracking-[0.14em] text-[#3F3A34]">
                  — Cortex field manual
                </footer>
              </blockquote>
            </aside>
          </section>

          <section id="columns" className="lg-heavy-rule mt-12 pt-8">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <h2 className="text-3xl tracking-tight md:text-4xl">The practice, in three columns</h2>
              <p className="sans text-[12px] uppercase tracking-[0.14em] text-[#3F3A34]">
                Capture · Connect · Compile
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3 md:gap-8">
              {[
                {
                  k: "I.",
                  t: "Capture",
                  b: "A global hotkey, a mobile share, a plain file. The thought is preserved before the kettle boils. Titles are optional; courage is not.",
                },
                {
                  k: "II.",
                  t: "Connect",
                  b: "Wikilinks by hand. Semantic neighbors by machine. You remain the editor of the graph — the app is only the typesetter.",
                },
                {
                  k: "III.",
                  t: "Compile",
                  b: "Ask in sentences. Receive notes with their lineage. Export as Markdown when the essay, deck, or decision is ready to leave the vault.",
                },
              ].map((col) => (
                <article key={col.k} className="lg-rule pt-4">
                  <div className="text-4xl font-bold text-[#C23B22]">{col.k}</div>
                  <h3 className="mt-3 text-2xl tracking-tight">{col.t}</h3>
                  <p className="mt-3 text-[16px] leading-[1.65] text-[#1a1814]">{col.b}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="extracts" className="lg-heavy-rule mt-12 pt-8">
            <h2 className="mb-6 text-3xl tracking-tight md:text-4xl">Extracts from the vault</h2>
            <div className="grid gap-px bg-[#0C0C0C]/20 md:grid-cols-2">
              {[
                {
                  meta: "Note · cognition · linked ×4",
                  t: "Working memory is a bottleneck, not a badge of honor.",
                  b: "Systems that externalize the next action free the mind for judgment. GTD, Zettelkasten, and field notebooks all rediscover this.",
                },
                {
                  meta: "Note · product · linked ×7",
                  t: "Onboarding friction is usually a missing story, not a missing feature.",
                  b: "Users do not fail to find the button. They fail to believe the next click is worth it.",
                },
                {
                  meta: "Quote · source kept",
                  t: "“The palest ink is better than the best memory.”",
                  b: "Chinese proverb, cited in every Cortex onboarding letter — and kept with attribution.",
                },
                {
                  meta: "Daily · 12 March",
                  t: "Ship the essay before the taxonomy is perfect.",
                  b: "A finished argument with messy tags beats a pristine empty vault.",
                },
              ].map((x) => (
                <article key={x.t} className="bg-[#FAF8F5] p-6">
                  <div className="sans mono mb-3 text-[10px] uppercase tracking-[0.14em] text-[#C23B22]">
                    {x.meta}
                  </div>
                  <h3 className="text-[22px] leading-snug tracking-tight">{x.t}</h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-[#3F3A34]">{x.b}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="subscribe" className="lg-heavy-rule mt-12 pt-10">
            <div className="grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <p className="sans mb-3 text-[11px] uppercase tracking-[0.18em] text-[#C23B22]">
                  Masthead CTA
                </p>
                <h2 className="text-4xl leading-[1.1] tracking-tight md:text-5xl">
                  Begin the correspondence.
                </h2>
                <p className="mt-4 max-w-xl text-[17px] leading-[1.65] text-[#1a1814]">
                  Cortex is free for personal use. Import Markdown, Obsidian, or a drawer of text files.
                  Your archive stays yours — in files, on disk, forever readable.
                </p>
              </div>
              <div className="md:col-span-5">
                <a
                  href="#subscribe"
                  className="sans inline-flex min-h-12 w-full items-center justify-center border-2 border-[#0C0C0C] bg-[#C23B22] px-6 text-[13px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#0C0C0C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C23B22]"
                >
                  Open your first page
                </a>
                <p className="sans mt-3 text-center text-[12px] text-[#3F3A34]">
                  No streaks. No gamification. Just the work.
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
          <div className="lg-rule flex flex-wrap items-center justify-between gap-3 pt-5">
            <p className="sans text-[12px] uppercase tracking-[0.14em] text-[#3F3A34]">
              Cortex · Iteration 05 · Ledger
            </p>
            <p className="mono text-[11px] tracking-[0.12em] text-[#3F3A34]">
              Printed for the mind’s library
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
