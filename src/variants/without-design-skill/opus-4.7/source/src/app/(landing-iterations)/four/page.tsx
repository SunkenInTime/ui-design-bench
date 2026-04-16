import Link from "next/link";

export const metadata = {
  title: "The Commonplace — A quarterly for your second brain",
};

export default function IterationFour() {
  return (
    <div className="min-h-screen w-full bg-[#f4efe6] text-[#1a1612] antialiased">
      <header className="border-b-[3px] border-double border-[#1a1612]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between py-3 text-[10px] uppercase tracking-[0.25em] text-[#1a1612]/70">
            <span>Vol. VII · No. 4</span>
            <span>Thursday, 16 April 2026</span>
            <span>€4 / $5 / free on device</span>
          </div>
          <div className="border-t border-[#1a1612]/30 py-8 text-center">
            <div className="mb-1 font-mono text-[11px] uppercase tracking-[0.4em] text-[#1a1612]/60">
              The
            </div>
            <h1 className="font-serif text-[88px] leading-none tracking-tight">
              Commonplace
            </h1>
            <div className="mt-2 font-serif text-sm italic text-[#1a1612]/70">
              a quarterly for the well-kept second brain
            </div>
          </div>
          <nav className="flex items-center justify-center gap-8 border-t border-[#1a1612]/30 py-3 font-serif text-sm uppercase tracking-[0.2em]">
            {["Essay", "Method", "Archive", "Library", "Letters", "Subscribe"].map(
              (i) => (
                <a key={i} href="#" className="hover:underline">
                  {i}
                </a>
              ),
            )}
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <article className="md:col-span-8">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-[#b45309]">
              Feature · The Cover Essay
            </div>
            <h2 className="font-serif text-[64px] leading-[1.02] tracking-tight">
              On keeping a<br />
              <span className="italic">commonplace</span> book
              <br />
              in the age of the feed.
            </h2>
            <div className="mt-5 font-serif text-sm text-[#1a1612]/70">
              By <span className="underline decoration-dotted">The Editors</span>{" "}
              · Illustrations by Mira Halász · 14 min read
            </div>

            <div className="mt-10 columns-1 gap-8 font-serif text-[17px] leading-[1.65] md:columns-2">
              <p className="mb-4">
                <span className="float-left mr-2 font-serif text-[80px] leading-[0.82]">
                  F
                </span>
                or four centuries, thinking people kept a single,
                ever-growing book — the{" "}
                <em>commonplace</em>. Into it they copied what struck them:
                a passage, a recipe, a diagram, an overheard phrase. The
                book was not organized by topic. It was organized by
                attention.
              </p>
              <p className="mb-4">
                Locke kept one. Jefferson kept one. Virginia Woolf kept one.
                The book was a telescope pointed at the life of its keeper —
                a record not of what the world contained, but of what the
                keeper found worth noticing.
              </p>
              <p className="mb-4">
                We built <em>The Commonplace</em> — the software and this
                quarterly that carries its name — because the feed cannot
                replace this habit. It can only distract from it.
              </p>
              <p>
                This issue: three essays on attention, an extract from
                Locke&apos;s notebook, a method for re-reading your own mind,
                and a guide to starting your first commonplace book today.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#"
                className="border border-[#1a1612] bg-[#1a1612] px-5 py-3 font-serif text-sm uppercase tracking-[0.15em] text-[#f4efe6] hover:bg-[#b45309] hover:border-[#b45309]"
              >
                Begin your book
              </Link>
              <Link
                href="#"
                className="font-serif text-sm italic text-[#1a1612]/80 underline decoration-dotted underline-offset-4 hover:text-[#b45309]"
              >
                Continue the essay →
              </Link>
            </div>
          </article>

          <aside className="space-y-8 border-l border-[#1a1612]/20 pl-8 md:col-span-4">
            <div>
              <div className="mb-3 border-b border-[#1a1612]/20 pb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#b45309]">
                From the Editors
              </div>
              <div className="font-serif italic leading-relaxed text-[#1a1612]/80">
                &ldquo;A note kept is a moment of attention that lasts longer
                than you do.&rdquo;
              </div>
            </div>

            <div>
              <div className="mb-3 border-b border-[#1a1612]/20 pb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#b45309]">
                In this issue
              </div>
              <ol className="space-y-3 font-serif text-sm">
                {[
                  ["I", "On keeping a commonplace book", "p. 04"],
                  ["II", "The method — capture, ferment, revisit", "p. 14"],
                  ["III", "Extract: Locke&apos;s index", "p. 22"],
                  ["IV", "Against folders", "p. 28"],
                  ["V", "Letters to the editor", "p. 34"],
                ].map(([n, t, p]) => (
                  <li key={n} className="flex gap-3">
                    <span className="w-6 shrink-0 font-mono text-xs text-[#1a1612]/50">
                      {n}.
                    </span>
                    <span
                      className="flex-1"
                      dangerouslySetInnerHTML={{ __html: t }}
                    />
                    <span className="font-mono text-xs text-[#1a1612]/50">
                      {p}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border border-[#1a1612]/20 bg-[#ebe3d2] p-5">
              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#b45309]">
                Specimen
              </div>
              <div className="font-serif italic leading-snug">
                &ldquo;What I like most about my notes is that they are kinder
                to me than I was to myself at the time.&rdquo;
              </div>
              <div className="mt-3 font-mono text-[11px] text-[#1a1612]/60">
                — Reader, Issue VI
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y-[3px] border-double border-[#1a1612] bg-[#ebe3d2]">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="mb-10 flex items-end justify-between border-b border-[#1a1612]/30 pb-4">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#b45309]">
                Section II
              </div>
              <h2 className="font-serif text-4xl tracking-tight">The Method</h2>
            </div>
            <div className="font-serif italic text-[#1a1612]/70">
              as practiced since 1685, adapted for the glass rectangle
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                n: "I",
                t: "The Capture",
                d: "A single keystroke opens a page. What you copy into the book today is a gift to the reader you will become. Do not classify. Do not tag. Simply write.",
              },
              {
                n: "II",
                t: "The Fermentation",
                d: "The notes sit. They age. Weeks pass. The Commonplace quietly draws connections between them — suggesting, never imposing. The value of a note grows the longer it waits.",
              },
              {
                n: "III",
                t: "The Revisit",
                d: "Each morning, the book opens to what you wrote on this day, years past. You re-read yourself. You edit. You discover you have been circling the same idea for seven years.",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="border-t-2 border-[#1a1612] pt-6"
              >
                <div className="mb-3 font-serif text-5xl italic text-[#b45309]">
                  {s.n}.
                </div>
                <h3 className="mb-3 font-serif text-2xl tracking-tight">
                  {s.t}
                </h3>
                <p className="font-serif text-[15px] leading-[1.6] text-[#1a1612]/80">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-8 md:grid-cols-12">
          <figure className="md:col-span-5">
            <div className="aspect-[4/5] w-full border border-[#1a1612]/20 bg-[#ebe3d2] p-8">
              <svg viewBox="0 0 300 400" className="h-full w-full">
                <rect x="20" y="30" width="260" height="340" fill="#f4efe6" stroke="#1a1612" strokeWidth="1.5" />
                <rect x="20" y="30" width="260" height="20" fill="#b45309" />
                <text x="150" y="45" textAnchor="middle" fill="#f4efe6" fontSize="10" fontFamily="serif" fontStyle="italic">
                  Commonplace · Vol. II
                </text>
                {Array.from({ length: 14 }).map((_, i) => (
                  <line key={i} x1="40" y1={75 + i * 20} x2="260" y2={75 + i * 20} stroke="#1a1612" strokeOpacity="0.15" strokeWidth="0.5" />
                ))}
                <text x="40" y="90" fill="#1a1612" fontFamily="serif" fontStyle="italic" fontSize="11">
                  16th · on attention
                </text>
                <text x="40" y="115" fill="#1a1612" fontSize="9">
                  Simon: a wealth of information
                </text>
                <text x="40" y="130" fill="#1a1612" fontSize="9">
                  creates a poverty of attention.
                </text>
                <text x="40" y="155" fill="#1a1612" fontFamily="serif" fontStyle="italic" fontSize="11">
                  17th · re-read Borges
                </text>
                <text x="40" y="180" fill="#1a1612" fontSize="9">
                  the library as point-of-view
                </text>
                <text x="40" y="195" fill="#1a1612" fontSize="9">
                  instrument — what do i
                </text>
                <text x="40" y="210" fill="#1a1612" fontSize="9">
                  want to aim it at?
                </text>
                <text x="40" y="235" fill="#1a1612" fontFamily="serif" fontStyle="italic" fontSize="11">
                  18th · dinner with m.
                </text>
                <text x="40" y="260" fill="#1a1612" fontSize="9">
                  &quot;the opposite of a feed
                </text>
                <text x="40" y="275" fill="#1a1612" fontSize="9">
                  is not silence — it is a
                </text>
                <text x="40" y="290" fill="#1a1612" fontSize="9">
                  book you keep yourself.&quot;
                </text>
                <circle cx="230" cy="340" r="18" fill="none" stroke="#b45309" strokeWidth="1" />
                <text x="230" y="345" textAnchor="middle" fontSize="8" fill="#b45309" fontFamily="serif" fontStyle="italic">
                  Plate I
                </text>
              </svg>
            </div>
            <figcaption className="mt-3 font-serif text-xs italic text-[#1a1612]/70">
              Pl. I — A page from the editor&apos;s commonplace, April 2026.
              Note the marginal index in amber.
            </figcaption>
          </figure>

          <div className="md:col-span-7">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-[#b45309]">
              Correspondence
            </div>
            <h2 className="mb-8 font-serif text-4xl leading-tight tracking-tight">
              What our readers write.
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "The Commonplace is the only place where my reading, my letters to friends, and my half-formed hunches all live together. It has quietly become the most important book I own.",
                  a: "— Prof. D. Akinwale, Oxford",
                },
                {
                  q: "I was a devoted user of several other apps. I did not realize I was organizing instead of thinking. This fixed that.",
                  a: "— R. Bergström, architect",
                },
                {
                  q: "A second brain that respects the first.",
                  a: "— The Paris Review",
                },
              ].map((t, i) => (
                <figure key={i} className="border-t border-[#1a1612]/20 pt-5">
                  <blockquote className="font-serif text-xl leading-[1.45] italic">
                    &ldquo;{t.q}&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#1a1612]/60">
                    {t.a}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t-[3px] border-double border-[#1a1612] bg-[#1a1612] text-[#f4efe6]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-[#e8d9b5]">
            Subscribe
          </div>
          <h2 className="font-serif text-5xl leading-tight tracking-tight">
            Begin a book you will
            <br />
            <span className="italic">reread all your life.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-serif text-lg italic text-[#f4efe6]/70">
            The Commonplace is free for individuals. The quarterly ships four
            times a year. Your notebook, always and forever, belongs to you.
          </p>
          <form className="mx-auto mt-10 flex max-w-lg items-stretch border border-[#f4efe6]/40 bg-transparent">
            <input
              type="email"
              placeholder="you@somewhere.com"
              className="flex-1 bg-transparent px-4 py-3 font-serif text-sm italic placeholder:text-[#f4efe6]/40 focus:outline-none"
            />
            <button className="border-l border-[#f4efe6]/40 bg-[#b45309] px-6 font-serif text-sm uppercase tracking-[0.15em] hover:bg-[#d97706]">
              Begin
            </button>
          </form>
          <div className="mt-6 font-serif text-xs italic text-[#f4efe6]/50">
            No advertisements · No &quot;newsletters&quot; · We will only write when
            we have something to say.
          </div>
        </div>
      </section>

      <footer className="bg-[#1a1612] text-[#f4efe6]/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 font-serif text-xs">
          <div className="italic">
            The Commonplace · founded MMXIX · Copenhagen
          </div>
          <div className="flex gap-6 uppercase tracking-[0.2em]">
            <a href="#">Colophon</a>
            <a href="#">Privacy</a>
            <a href="#">Masthead</a>
            <a href="#">Back issues</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
