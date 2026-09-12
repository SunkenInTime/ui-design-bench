import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "01 Index — Marrow",
  description:
    "Marrow is a commonplace book for the digital age. Capture, index, and rediscover what you know.",
};

const ENTRIES = [
  {
    n: "01",
    title: "Capture without ceremony",
    body: "A thought has a half-life of seconds. Marrow opens to a blank page — no folders, no forms, no ceremony. Type, paste, or speak; the inbox catches everything and sorts itself later.",
  },
  {
    n: "02",
    title: "Every note is a doorway",
    body: "Mention a note and Marrow builds the link. Two notes become a corridor; a hundred become a map. Nothing is filed away — everything stays one hop from everything else.",
  },
  {
    n: "03",
    title: "Memory that answers back",
    body: "Each morning Marrow re-surfaces one forgotten note beside the one you're writing now. The archive isn't a warehouse — it's a reading partner that never forgets a page.",
  },
];

const ENTRIES_COL_B = [
  {
    n: "04",
    title: "Local first, always yours",
    body: "Notes live as plain Markdown on your own disk. Sync is optional encryption is default. Export is a single keystroke. Marrow is a tool you own, not a tenant you rent.",
  },
  {
    n: "05",
    title: "The weekly digest",
    body: "Every Sunday Marrow prints a broadsheet of your week — what you wrote, what you linked, what you never returned to. A small ritual that keeps the second brain honest.",
  },
  {
    n: "06",
    title: "Search like an archivist",
    body: "Full-text, fuzzy, and backlink-aware. Ask in plain language and Marrow shows the page and the paragraph. Nothing you've written is ever more than a keystroke away.",
  },
];

export default function VariantOne() {
  return (
    <div className="serif min-h-screen bg-[#f3efe8] text-[#1c1a17]">
      {/* masthead */}
      <header className="border-b border-[#1c1a17]/20 px-6 pt-10 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mono flex items-baseline justify-between text-[10px] uppercase tracking-[0.2em] text-[#1c1a17]/55">
            <span>Marrow — a second brain</span>
            <span className="hidden sm:inline">
              Vol. I &nbsp;·&nbsp; No. 1 &nbsp;·&nbsp; Est. MMXXIV
            </span>
            <span>Ed. 01</span>
          </div>
          <div className="mt-8 pb-10 md:pb-14">
            <h1 className="max-w-4xl text-5xl leading-[1.04] tracking-[-0.02em] md:text-[4.5rem]">
              The commonplace
              <br />
              book for a{" "}
              <em className="font-normal italic text-[#c14a1e]">busy</em> mind.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#1c1a17]/70 md:text-xl">
              Marrow is a note-taking app shaped like a second brain: capture a
              thought in seconds, let the links grow underneath, and find it
              again months later as if you had never left.
            </p>
          </div>
        </div>
      </header>

      {/* colophon strip */}
      <div className="border-b border-[#1c1a17]/20">
        <div className="mono mx-auto grid max-w-6xl grid-cols-2 gap-px text-[10px] uppercase tracking-[0.16em] text-[#1c1a17]/55 md:grid-cols-4">
          {[
            ["Local-first storage", "Markdown on disk"],
            ["Link graph", "Bidirectional"],
            ["Daily resurface", "One forgotten note"],
            ["Export", "Plain text, always"],
          ].map(([k, v]) => (
            <div key={k} className="border-r border-[#1c1a17]/10 px-6 py-3 last:border-r-0">
              <div className="text-[#1c1a17]/40">{k}</div>
              <div className="mt-0.5 text-[#1c1a17]/80">{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* entries */}
      <main className="mx-auto max-w-6xl px-6 md:px-16">
        <div className="py-12 md:py-16">
          <div className="mono mb-8 flex items-baseline gap-4 text-[10px] uppercase tracking-[0.2em] text-[#1c1a17]/50">
            <span>§</span>
            <span>The six properties</span>
            <span className="h-px flex-1 bg-[#1c1a17]/15" />
          </div>

          <div className="grid gap-x-14 gap-y-0 md:grid-cols-2">
            <div className="border-t border-[#1c1a17]/15">
              {ENTRIES.map((e) => (
                <article key={e.n} className="border-b border-[#1c1a17]/15 py-8">
                  <div className="flex gap-5">
                    <span className="mono pt-1 text-xs tracking-widest text-[#c14a1e]">
                      {e.n}
                    </span>
                    <div>
                      <h2 className="text-2xl leading-snug tracking-[-0.01em] md:text-[1.65rem]">
                        {e.title}
                      </h2>
                      <p className="mt-3 text-base leading-relaxed text-[#1c1a17]/70">
                        {e.body}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="border-t border-[#1c1a17]/15">
              {ENTRIES_COL_B.map((e) => (
                <article key={e.n} className="border-b border-[#1c1a17]/15 py-8">
                  <div className="flex gap-5">
                    <span className="mono pt-1 text-xs tracking-widest text-[#c14a1e]">
                      {e.n}
                    </span>
                    <div>
                      <h2 className="text-2xl leading-snug tracking-[-0.01em] md:text-[1.65rem]">
                        {e.title}
                      </h2>
                      <p className="mt-3 text-base leading-relaxed text-[#1c1a17]/70">
                        {e.body}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* quote */}
        <section className="border-t border-[#1c1a17]/20 py-14 md:py-20">
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="text-3xl leading-[1.25] tracking-[-0.015em] md:text-[2.4rem]">
              &ldquo;I not only live in every moment, I live in every note.
              <span className="italic text-[#c14a1e]"> Marrow</span> is the only
              tool that has ever kept up.&rdquo;
            </p>
            <footer className="mono mt-6 text-[11px] uppercase tracking-[0.2em] text-[#1c1a17]/50">
              — Field note from an early reader, Lisbon
            </footer>
          </blockquote>
        </section>

        {/* CTA */}
        <section className="border-t border-[#1c1a17]/20 py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mono text-[10px] uppercase tracking-[0.2em] text-[#1c1a17]/50">
              Begin the volume
            </p>
            <h2 className="mt-4 text-4xl leading-tight tracking-[-0.02em] md:text-5xl">
              Your first note is
              <br />
              one keystroke away.
            </h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="ui inline-flex h-12 items-center justify-center bg-[#1c1a17] px-8 text-sm font-medium text-[#f3efe8] transition-colors hover:bg-[#c14a1e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c14a1e]"
              >
                Start writing — free
              </a>
              <a
                href="#"
                className="ui inline-flex h-12 items-center justify-center border border-[#1c1a17]/30 px-8 text-sm font-medium text-[#1c1a17] transition-colors hover:border-[#1c1a17] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c1a17]"
              >
                Read the manifesto
              </a>
            </div>
            <p className="mono mt-6 text-[10px] uppercase tracking-[0.16em] text-[#1c1a17]/45">
              No account required for the first 100 notes
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1c1a17]/20 px-6 py-8 md:px-16">
        <div className="mono mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-[10px] uppercase tracking-[0.18em] text-[#1c1a17]/45 sm:flex-row">
          <span>Marrow &copy; 2026</span>
          <span>Printed on the web, edition one of five</span>
          <span>Local-first · Markdown · Yours</span>
        </div>
      </footer>
    </div>
  );
}
