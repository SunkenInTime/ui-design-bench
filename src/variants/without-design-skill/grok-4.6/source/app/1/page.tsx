import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Folio",
  description: "Lumen as a commonplace book — paper, ink, and a mind that keeps.",
};

export default function FolioLanding() {
  return (
    <div className="grain min-h-full bg-[#f3ece1] text-[#1c1915]">
      <div className="mx-auto flex min-h-full max-w-[1120px] flex-col px-6 pb-32 pt-8 sm:px-10">
        <header className="flex items-baseline justify-between border-b border-[#1c1915]/15 pb-5">
          <p className="font-editorial text-2xl italic tracking-tight">Lumen</p>
          <nav className="hidden gap-8 text-[11px] uppercase tracking-[0.28em] text-[#1c1915]/70 sm:flex">
            <a href="#method">Method</a>
            <a href="#volumes">Volumes</a>
            <a href="#begin">Begin</a>
          </nav>
        </header>

        <main className="flex flex-1 flex-col">
          <section className="grid gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-24">
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-[#8b3a3a]">
                A commonplace for the living mind
              </p>
              <h1 className="mt-6 font-editorial text-[clamp(3.2rem,8vw,7.2rem)] leading-[0.88] tracking-[-0.03em]">
                A second brain,
                <span className="block italic text-[#8b3a3a]"> bound in light.</span>
              </h1>
            </div>
            <div className="max-w-md pb-2 font-editorial text-xl leading-relaxed text-[#1c1915]/80">
              <p>
                Lumen is a private notebook that remembers the connections you
                would otherwise lose. Write as you think. Link as you wander.
                Return years later and find the thread still warm.
              </p>
              <a
                id="begin"
                href="#volumes"
                className="mt-8 inline-flex items-center gap-3 border-b border-[#1c1915] pb-1 text-sm tracking-[0.18em] uppercase"
              >
                Open the journal
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </section>

          <section className="grid gap-px overflow-hidden rounded-[2px] border border-[#1c1915]/20 bg-[#1c1915]/20 shadow-[0_30px_80px_rgba(28,25,21,0.12)] md:grid-cols-2">
            <article className="bg-[#f7f1e7] p-8 sm:p-10">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#8b3a3a]">
                Tuesday · Daily note
              </p>
              <h2 className="mt-6 font-editorial text-3xl italic">On attention</h2>
              <p className="mt-5 font-editorial text-lg leading-8 text-[#1c1915]/75">
                The mind is not a cabinet. It is a garden that forgets the
                names of its own plants. I keep a page for what I notice, then
                let Lumen keep the roots.
              </p>
              <p className="mt-6 text-[12px] uppercase tracking-[0.22em] text-[#1c1915]/45">
                Linked · Sleep study · Ada · Q3
              </p>
            </article>
            <article className="bg-[#efe6d6] p-8 sm:p-10">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#8b3a3a]">
                Backlink · 14 August
              </p>
              <h2 className="mt-6 font-editorial text-3xl">The thread holds</h2>
              <p className="mt-5 font-editorial text-lg leading-8 text-[#1c1915]/75">
                A note is only a spark. The second brain is the lattice that
                grows between sparks — quiet, searchable, and yours.
              </p>
              <blockquote className="mt-8 border-l border-[#8b3a3a] pl-4 font-editorial italic leading-7">
                “I did not remember the idea. The idea remembered me.”
              </blockquote>
            </article>
          </section>

          <section id="method" className="grid gap-10 py-20 md:grid-cols-3">
            {[
              {
                n: "I",
                title: "Capture without ceremony",
                body: "A sentence, a quote, a half-thought on the walk home. Lumen files the spark before it cools.",
              },
              {
                n: "II",
                title: "Let notes find each other",
                body: "Bidirectional links and gentle suggestions turn a pile of pages into a living commonplace book.",
              },
              {
                n: "III",
                title: "Return to the source",
                body: "Search the feeling, not the filename. The archive is arranged the way your mind actually works.",
              },
            ].map((item) => (
              <article key={item.n} className="border-t border-[#1c1915]/20 pt-6">
                <p className="font-editorial text-sm italic text-[#8b3a3a]">{item.n}</p>
                <h3 className="mt-3 font-editorial text-2xl leading-tight">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#1c1915]/70">{item.body}</p>
              </article>
            ))}
          </section>

          <section
            id="volumes"
            className="mb-6 flex flex-col items-start justify-between gap-8 border-t border-[#1c1915]/15 py-12 sm:flex-row sm:items-end"
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#8b3a3a]">
                Begin a volume
              </p>
              <h2 className="mt-3 font-editorial text-4xl italic sm:text-5xl">
                Keep a mind you can open.
              </h2>
            </div>
            <button
              type="button"
              className="rounded-full bg-[#1c1915] px-7 py-3 text-[11px] uppercase tracking-[0.24em] text-[#f3ece1]"
            >
              Start writing
            </button>
          </section>
        </main>

        <footer className="flex flex-col gap-2 border-t border-[#1c1915]/15 pt-6 text-[11px] uppercase tracking-[0.22em] text-[#1c1915]/50 sm:flex-row sm:justify-between">
          <p>Lumen Press · Est. for the overfull mind</p>
          <p>Private by default · Local-first</p>
        </footer>
      </div>
    </div>
  );
}
