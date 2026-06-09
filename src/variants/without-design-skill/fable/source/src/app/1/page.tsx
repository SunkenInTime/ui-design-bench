import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cortex — Your second brain · Design 1",
};

const features = [
  {
    numeral: "I",
    title: "Capture without friction",
    body: "A global hotkey opens a blank line anywhere. Type the thought, hit enter, and get back to what you were doing. Filing comes later — or never.",
  },
  {
    numeral: "II",
    title: "Connections form themselves",
    body: "Cortex reads what you write and quietly links related notes together. Six months from now, the idea you forgot resurfaces exactly when it matters.",
  },
  {
    numeral: "III",
    title: "Ask your own mind",
    body: "Search is a conversation. Ask “what did I think about pricing last spring?” and get an answer drawn from your notes, with every source cited.",
  },
];

export default function DesignOne() {
  return (
    <div
      className="flex flex-1 flex-col bg-[#faf7f2] text-[#1c1917] selection:bg-[#1c1917] selection:text-[#faf7f2] [--font-newsreader:Georgia,serif]"
    >
      {/* Nav */}
      <header className="border-b border-[#1c1917]/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <span className="font-[family-name:var(--font-newsreader)] text-2xl italic tracking-tight">
            Cortex
          </span>
          <nav className="hidden items-center gap-8 text-[13px] uppercase tracking-[0.18em] text-[#1c1917]/60 sm:flex">
            <a href="#method" className="transition-colors hover:text-[#1c1917]">
              Method
            </a>
            <a href="#letter" className="transition-colors hover:text-[#1c1917]">
              Letter
            </a>
            <a href="#begin" className="transition-colors hover:text-[#1c1917]">
              Pricing
            </a>
          </nav>
          <a
            href="#begin"
            className="border border-[#1c1917] px-4 py-2 text-[13px] uppercase tracking-[0.18em] transition-colors hover:bg-[#1c1917] hover:text-[#faf7f2]"
          >
            Begin
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto w-full max-w-5xl px-6 pb-24 pt-20 sm:pt-28">
        <p className="mb-8 text-[13px] uppercase tracking-[0.22em] text-[#1c1917]/50">
          A second brain, on paper terms
        </p>
        <h1 className="font-[family-name:var(--font-newsreader)] max-w-3xl text-5xl leading-[1.08] tracking-tight sm:text-7xl">
          You don’t forget ideas. <em className="text-[#8a3324]">You misplace them.</em>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-[#1c1917]/70">
          Cortex is a note-taking application that remembers the way you do —
          by association, not by folder. Write things down once, and find them
          again by simply thinking out loud.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href="#begin"
            className="bg-[#1c1917] px-7 py-3.5 text-[13px] uppercase tracking-[0.18em] text-[#faf7f2] transition-opacity hover:opacity-85"
          >
            Start writing — free
          </a>
          <span className="text-sm italic text-[#1c1917]/50">
            No card. No setup. One blank page.
          </span>
        </div>
      </section>

      {/* Specimen note */}
      <section className="border-y border-[#1c1917]/10 bg-[#f4efe6]">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="mx-auto max-w-2xl border border-[#1c1917]/15 bg-[#fffdf8] p-8 shadow-[0_1px_0_#1c191710,0_12px_32px_-16px_#1c191730] sm:p-10">
            <div className="flex items-baseline justify-between border-b border-[#1c1917]/10 pb-4">
              <span className="font-[family-name:var(--font-newsreader)] text-xl italic">
                On compounding ideas
              </span>
              <span className="text-xs uppercase tracking-[0.18em] text-[#1c1917]/40">
                14 March
              </span>
            </div>
            <p className="mt-5 font-[family-name:var(--font-newsreader)] text-lg leading-8 text-[#1c1917]/80">
              Notes are not storage. They are soil. A thought written down today
              cross-pollinates with one from last year, and something neither
              contained appears between them…
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["↗ Zettelkasten, p.12", "↗ Compounding", "↗ Morning pages"].map(
                (link) => (
                  <span
                    key={link}
                    className="border border-[#8a3324]/30 bg-[#8a3324]/5 px-3 py-1 text-xs tracking-wide text-[#8a3324]"
                  >
                    {link}
                  </span>
                ),
              )}
            </div>
          </div>
          <p className="mt-5 text-center text-xs uppercase tracking-[0.22em] text-[#1c1917]/40">
            Fig. 1 — A note, with the connections Cortex found on its own
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="method" className="mx-auto w-full max-w-5xl px-6 py-24">
        <div className="grid gap-x-12 gap-y-16 sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.numeral}>
              <div className="font-[family-name:var(--font-newsreader)] text-4xl italic text-[#8a3324]">
                {f.numeral}.
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-newsreader)] text-2xl tracking-tight">
                {f.title}
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-[#1c1917]/65">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Letter / quote */}
      <section id="letter" className="border-t border-[#1c1917]/10">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="font-[family-name:var(--font-newsreader)] text-3xl italic leading-[1.4] text-[#1c1917]/85 sm:text-4xl">
            “I stopped organizing my notes two years ago. I’ve never found
            things faster.”
          </p>
          <p className="mt-6 text-[13px] uppercase tracking-[0.22em] text-[#1c1917]/50">
            Mara Ellison — Research lead, 11,000 notes
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="begin" className="border-t border-[#1c1917]/10 bg-[#1c1917] text-[#faf7f2]">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center">
          <h2 className="font-[family-name:var(--font-newsreader)] max-w-xl text-4xl leading-tight tracking-tight sm:text-5xl">
            Begin with a single sentence.
          </h2>
          <p className="mt-4 max-w-md text-[#faf7f2]/60">
            Free for your first thousand notes. Then $8 a month, forever.
          </p>
          <a
            href="#"
            className="mt-8 bg-[#faf7f2] px-8 py-4 text-[13px] uppercase tracking-[0.18em] text-[#1c1917] transition-opacity hover:opacity-85"
          >
            Open your notebook
          </a>
        </div>
      </section>

      <footer className="bg-[#1c1917] pb-24 text-center text-xs uppercase tracking-[0.22em] text-[#faf7f2]/35">
        Cortex · Est. on a napkin, 2024
      </footer>
    </div>
  );
}
