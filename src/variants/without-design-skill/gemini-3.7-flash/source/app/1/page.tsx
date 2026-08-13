import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mneme — Paper",
  description: "A commonplace book for the rest of your life.",
};

export default function PaperPage() {
  return (
    <div className="min-h-full bg-[#f3ede3] text-[#1c1917] selection:bg-[#c45c26] selection:text-[#fff8f0]">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <header className="relative mx-auto flex max-w-6xl items-baseline justify-between px-6 py-8 sm:px-10">
        <Link
          href="/without-design-skill/gemini-3.7-flash/1"
          className="font-serif text-2xl tracking-tight"
        >
          Mneme
        </Link>
        <nav className="hidden items-baseline gap-8 text-[13px] tracking-wide text-[#1c1917]/70 sm:flex">
          <a href="#journal" className="hover:text-[#1c1917]">
            Journal
          </a>
          <a href="#method" className="hover:text-[#1c1917]">
            Method
          </a>
          <a href="#start" className="hover:text-[#1c1917]">
            Start writing
          </a>
        </nav>
      </header>

      <main className="relative">
        <section className="mx-auto grid max-w-6xl gap-16 px-6 pb-24 pt-10 sm:px-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] lg:gap-20 lg:pt-16">
          <div>
            <p className="mb-8 text-[11px] tracking-[0.28em] text-[#7a4a32] uppercase">
              A commonplace book
            </p>
            <h1 className="font-editorial text-[clamp(3.4rem,9vw,7.4rem)] leading-[0.9] tracking-[-0.03em]">
              The mind,
              <br />
              <span className="italic text-[#8a331c]">filed.</span>
            </h1>
            <p className="mt-10 max-w-md text-[1.15rem] leading-8 text-[#1c1917]/75">
              Mneme is a private notebook for people who think in fragments.
              Capture what you notice. Link what belongs together. Meet the
              thought again when you need it.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <a
                id="start"
                href="#start"
                className="border-b border-[#8a331c] pb-0.5 text-[15px] text-[#8a331c]"
              >
                Begin a journal
              </a>
              <a
                href="#method"
                className="text-[15px] text-[#1c1917]/55 hover:text-[#1c1917]"
              >
                Read the method
              </a>
            </div>
          </div>

          <aside className="self-end border-l border-[#1c1917]/15 pl-8">
            <p className="font-editorial text-[13px] tracking-[0.18em] text-[#7a4a32] uppercase">
              In the margin
            </p>
            <p className="mt-5 font-editorial text-[1.35rem] leading-8 italic text-[#1c1917]/80">
              Named for Mnemosyne — memory as the mother of making. Not a
              filing cabinet. A second mind that keeps the thread.
            </p>
            <p className="mt-8 font-editorial text-sm text-[#1c1917]/45">
              Vol. I · Private edition
            </p>
          </aside>
        </section>

        <section
          id="journal"
          className="mx-auto max-w-6xl px-6 pb-24 sm:px-10"
        >
          <article className="relative overflow-hidden rounded-[2px] border border-[#1c1917]/10 bg-[#f8f4ec] p-8 shadow-[0_24px_60px_rgba(60,40,20,0.08)] sm:p-12">
            <p className="text-[11px] tracking-[0.22em] text-[#1c1917]/40 uppercase">
              Today · 12 August
            </p>
            <h2 className="mt-4 font-editorial text-3xl italic sm:text-4xl">
              Attention residue
            </h2>
            <p className="mt-6 max-w-2xl text-[1.05rem] leading-8 text-[#1c1917]/75">
              Every unfinished task leaves a film on the next one. The notebook
              is where that film can live instead of in the skull. Write the
              leftover thought down and the next hour becomes available again.
            </p>
            <p className="mt-6 font-editorial text-sm italic text-[#8a331c]">
              Linked from · Deep work · Cal Newport · Walking notes
            </p>
          </article>
        </section>

        <section
          id="method"
          className="border-t border-[#1c1917]/10"
        >
          <div className="mx-auto grid max-w-6xl gap-0 px-6 sm:px-10 lg:grid-cols-3">
            {[
              {
                n: "01",
                title: "Capture",
                body: "A daily inbox for what you notice before it dissolves. One keystroke. No taxonomy required.",
              },
              {
                n: "02",
                title: "Connect",
                body: "Bidirectional links instead of folders. Structure is something the notes grow, not something you impose.",
              },
              {
                n: "03",
                title: "Recall",
                body: "Search that understands “that essay about attention” even if you never named it that.",
              },
            ].map((item) => (
              <article
                key={item.n}
                className="border-[#1c1917]/10 py-16 lg:border-l lg:px-10 lg:first:border-l-0 lg:first:pl-0"
              >
                <p className="font-editorial text-sm tracking-[0.2em] text-[#8a331c]">
                  {item.n}
                </p>
                <h3 className="mt-4 font-editorial text-3xl italic">
                  {item.title}
                </h3>
                <p className="mt-5 max-w-sm leading-7 text-[#1c1917]/70">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative mx-auto flex max-w-6xl flex-col gap-4 border-t border-[#1c1917]/10 px-6 py-10 text-[12px] tracking-wide text-[#1c1917]/45 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>Mneme · A private notebook · Est. for the long memory</p>
        <p className="font-editorial italic">Set in Newsreader & Instrument Serif</p>
      </footer>
    </div>
  );
}
