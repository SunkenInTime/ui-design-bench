/* eslint-disable @next/next/no-html-link-for-pages -- Preserve native source navigation with gallery-scoped URLs. */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loci — Archive",
  description: "A quiet second brain for people who keep a private collection of ideas.",
};

const exhibits = [
  {
    n: "01",
    title: "Capture without ceremony",
    body: "Open a room. Write. Close it. Loci keeps the room until you are ready to furnish it with links.",
  },
  {
    n: "02",
    title: "Link by place, not folder",
    body: "Ideas sit near each other the way objects sit in a memory palace—by adjacency, path, and return.",
  },
  {
    n: "03",
    title: "Recall when it matters",
    body: "Search walks the rooms. You get the note, the corridor that led there, and the neighbors you forgot.",
  },
];

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-[#F6F1E7] text-[#1C1917]">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8">
        <a href="/without-design-skill/mimo-x-flash-preview/1" className="font-serif text-xl tracking-tight">
          Loci
        </a>
        <div className="flex items-center gap-6 text-sm">
          <span className="hidden text-[#78716C] sm:inline">Private collection</span>
          <a
            href="#start"
            className="border-b border-[#1C1917] pb-0.5 transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7C2D12]"
          >
            Start free
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-5xl gap-12 px-6 pt-16 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24">
          <div>
            <p className="mb-8 font-mono text-xs tracking-[0.2em] text-[#78716C] uppercase">
              Vol. II · Memory systems
            </p>
            <h1 className="max-w-xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Your second brain should feel like a place, not a pile.
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-[#44403C]">
              Loci is a note-taking app arranged like a private museum. Capture
              freely, place ideas with intention, and walk back through what you
              know when you need it.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                id="start"
                href="#rooms"
                className="inline-flex h-12 items-center bg-[#7C2D12] px-6 text-[#F6F1E7] transition-colors hover:bg-[#9A3412] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7C2D12]"
              >
                Enter the palace
              </a>
              <span className="text-sm text-[#78716C]">No card · Works offline</span>
            </div>
          </div>

          <figure className="relative mx-auto w-full max-w-md">
            <div className="border border-[#D6CFC0] bg-[#FFFCF7] p-8 shadow-[0_1px_0_#D6CFC0]">
              <p className="font-mono text-[11px] tracking-[0.18em] text-[#78716C] uppercase">
                Exhibit A · Open note
              </p>
              <h2 className="mt-6 font-serif text-3xl leading-snug">
                On keeping a commonplace book that answers back
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#44403C]">
                Most notes apps are drawers. This one is a corridor: left room
                holds the quote from March; the alcove holds the diagram you
                traced at the café; the window ledge still has last week&apos;s
                question.
              </p>
              <div className="mt-8 flex flex-wrap gap-2 text-xs text-[#7C2D12]">
                <span className="border border-[#E7D5C8] px-2 py-1">↳ memory palace</span>
                <span className="border border-[#E7D5C8] px-2 py-1">↳ method of loci</span>
                <span className="border border-[#E7D5C8] px-2 py-1">↳ return path</span>
              </div>
            </div>
            <figcaption className="mt-4 font-mono text-[11px] text-[#78716C]">
              Catalog no. LOCI-0142 · Daily capture
            </figcaption>
          </figure>
        </section>

        <section id="rooms" className="border-t border-[#D6CFC0]">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="font-serif text-2xl tracking-tight sm:text-3xl">
              Three rooms. One practice.
            </p>
            <div className="mt-14 space-y-0">
              {exhibits.map((item) => (
                <article
                  key={item.n}
                  className="grid gap-4 border-t border-[#D6CFC0] py-10 md:grid-cols-[80px_1fr_1.2fr] md:gap-8"
                >
                  <p className="font-serif text-4xl text-[#7C2D12]">{item.n}</p>
                  <h3 className="font-serif text-2xl leading-snug">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-[#44403C]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#D6CFC0]">
          <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-3">
            {[
              ["Spatial search", "Find a thought by the room it lived in, not only by keyword."],
              ["Living graph", "See which rooms keep drawing you back—and which ones are cold."],
              ["Daily review", "A short walk through yesterday’s open notes. No streaks. No guilt."],
            ].map(([title, body]) => (
              <div key={title} className="border-t border-[#1C1917] pt-4">
                <h3 className="font-serif text-xl">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#44403C]">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-[#D6CFC0]">
          <div className="mx-auto max-w-5xl px-6 py-24 text-center">
            <p className="font-mono text-xs tracking-[0.2em] text-[#78716C] uppercase">
              Closing wall text
            </p>
            <h2 className="mx-auto mt-6 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
              Build the first room today. Leave the rest unfinished on purpose.
            </h2>
            <a
              href="#start"
              className="mt-10 inline-flex h-12 items-center border border-[#1C1917] px-6 transition-colors hover:bg-[#1C1917] hover:text-[#F6F1E7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7C2D12]"
            >
              Start your collection
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#D6CFC0]">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-[#78716C] sm:flex-row sm:justify-between">
          <p>Loci · A private memory system</p>
          <p>Iteration 01 — Archive</p>
        </div>
      </footer>
    </div>
  );
}
