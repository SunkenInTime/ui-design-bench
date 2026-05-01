import Link from "next/link";

export default function EditorialVariant() {
  return (
    <div className="min-h-dvh bg-[#f4ede0] text-neutral-950 font-sans isolate">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 sm:px-10">
        <Link href="/1" className="font-fraunces text-2xl tracking-tight">
          Mnema
        </Link>
        <nav className="hidden items-center gap-10 text-sm md:flex">
          <a href="#essay" className="hover:underline underline-offset-4">
            Manifesto
          </a>
          <a href="#practice" className="hover:underline underline-offset-4">
            Practice
          </a>
          <a href="#preview" className="hover:underline underline-offset-4">
            Preview
          </a>
          <a href="#price" className="hover:underline underline-offset-4">
            Subscription
          </a>
        </nav>
        <a
          href="#"
          className="rounded-full border border-neutral-950 px-5 py-2 text-sm tracking-wide hover:bg-neutral-950 hover:text-[#f4ede0] transition"
        >
          Begin reading
        </a>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-32 sm:px-10 sm:pt-24 sm:pb-44">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-600">
          Volume I &middot; A Manual for Thought
        </p>
        <h1 className="mt-10 font-fraunces text-5xl text-balance leading-[0.95] sm:text-7xl md:text-8xl">
          Notes that{" "}
          <span className="font-instrument-serif italic text-neutral-700">
            think
          </span>{" "}
          back at you.
        </h1>
        <div className="mt-14 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 md:col-start-7">
            <p className="text-pretty text-lg leading-relaxed text-neutral-800 sm:text-xl">
              Mnema is a quiet writing room for the long-form thinker — a second
              brain bound in restraint. It remembers what you wrote at three in
              the morning, and serves it back at the precise moment you need it
              again.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#"
                className="rounded-full bg-neutral-950 px-7 py-3 text-sm tracking-wide text-[#f4ede0] hover:bg-neutral-800 transition"
              >
                Try Mnema, free
              </a>
              <a
                href="#essay"
                className="text-sm tracking-wide underline underline-offset-[6px] decoration-1 hover:decoration-2"
              >
                Read the essay below ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="essay"
        className="border-y border-neutral-950/15 bg-[#ede4d2]"
      >
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 sm:px-10 md:grid-cols-12 md:py-32">
          <aside className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-600">
              §01 — On forgetting
            </p>
            <p className="mt-4 font-instrument-serif text-2xl italic text-neutral-700">
              &ldquo;The mind is a poor archivist.&rdquo;
            </p>
          </aside>
          <article className="md:col-span-9">
            <p className="font-fraunces text-3xl text-pretty leading-[1.25] sm:text-4xl">
              <span className="float-left mt-2 mr-3 font-fraunces text-[5.5rem] leading-[0.85] tracking-tight">
                W
              </span>
              e write things down so we may safely forget them. The notebook is
              a prosthesis — a small grace extended to a brain too restless to
              hold its own thinking. For three centuries, the great writers
              kept commonplace books: a chamber of quotations, half-formed
              ideas, and stray observations, indexed by hand and waiting to be
              re-read.
            </p>
            <p className="mt-8 max-w-[60ch] text-pretty text-lg leading-[1.7] text-neutral-800">
              Mnema is a return to that practice, made answerable to a screen.
              Every note is a fragment, every fragment a thread, every thread a
              memory waiting to be pulled. We have built no chatbot, no agent,
              no infinite canvas. Just an honest, beautiful place to think in
              sentences.
            </p>
            <p className="mt-12 font-instrument-serif text-xl italic text-neutral-600">
              — From the founders, on a slow afternoon in October.
            </p>
          </article>
        </div>
      </section>

      <section
        id="practice"
        className="mx-auto max-w-6xl px-6 py-28 sm:px-10 md:py-40"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-600">
            §02 — Three modes of thought
          </p>
          <h2 className="mt-6 max-w-[24ch] font-fraunces text-4xl text-balance tracking-tight sm:text-6xl">
            A library, a workshop, and a{" "}
            <span className="font-instrument-serif italic">conversation.</span>
          </h2>
        </div>

        <div className="mt-20 grid gap-x-12 gap-y-16 md:grid-cols-3">
          {[
            {
              num: "I.",
              title: "The Library",
              body: "Every note enters a quiet archive. No folders, no tags required — Mnema reads what you write and shelves it among its kin. You can search the way you remember: a phrase, a season, a person.",
            },
            {
              num: "II.",
              title: "The Workshop",
              body: "Pull threads of related notes onto a working page. Rearrange. Annotate the margins. Watch fragments become essays. When the piece is done, the workings remain — a record of the thought.",
            },
            {
              num: "III.",
              title: "The Conversation",
              body: "Ask the archive a question and it answers in your own words, citing the notes it draws from. Not a synthetic voice — your voice, returned to you with footnotes.",
            },
          ].map((f) => (
            <div key={f.title}>
              <p className="font-fraunces text-3xl text-neutral-500">{f.num}</p>
              <h3 className="mt-4 font-fraunces text-2xl">{f.title}</h3>
              <p className="mt-4 max-w-[36ch] text-pretty leading-relaxed text-neutral-800">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="preview"
        className="border-y border-neutral-950/15 bg-[#ede4d2]"
      >
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-600">
                §03 — A page from the manuscript
              </p>
              <p className="mt-6 font-fraunces text-3xl text-pretty leading-tight">
                Every note rendered like a page set in lead — wide margins,
                proper measure,{" "}
                <span className="font-instrument-serif italic">
                  generous air.
                </span>
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="border border-neutral-950/20 bg-[#fbf6e9] p-10 sm:p-14">
                <div className="flex items-center justify-between border-b border-neutral-950/15 pb-4 font-mono text-[0.6875rem] uppercase tracking-[0.25em] text-neutral-600">
                  <span>Folio 047</span>
                  <span>Tuesday, March 12</span>
                </div>
                <h4 className="mt-8 font-fraunces text-3xl">
                  On the patience of long ideas
                </h4>
                <p className="mt-6 max-w-[58ch] text-pretty leading-[1.75] text-neutral-800">
                  An idea worth keeping rarely arrives finished. It comes in
                  pieces, weeks apart, in the margins of unrelated days. A
                  second brain&apos;s job is not to hurry the idea — only to
                  catch each piece and place it gently next to the others until
                  the shape becomes obvious.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-instrument-serif text-sm italic text-neutral-600">
                  <span>↳ linked: «slow thought», «commonplace»</span>
                  <span>↳ revisited 4 times</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="price"
        className="mx-auto max-w-6xl px-6 py-28 sm:px-10 md:py-40"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-600">
            §04 — Subscription
          </p>
          <h2 className="mt-6 max-w-[20ch] font-fraunces text-4xl text-balance tracking-tight sm:text-6xl">
            One price. No tiers, no upsells.
          </h2>
        </div>

        <div className="mt-20 grid gap-12 border-t border-neutral-950/20 pt-12 md:grid-cols-12 md:gap-16 md:pt-16">
          <div className="md:col-span-5">
            <p className="font-fraunces text-7xl tracking-tight tabular-nums">
              $9
              <span className="font-instrument-serif text-2xl italic text-neutral-600">
                {" "}
                / month
              </span>
            </p>
            <p className="mt-4 font-instrument-serif text-xl italic text-neutral-600">
              or $84 the year, billed once, like a periodical.
            </p>
            <a
              href="#"
              className="mt-10 inline-block rounded-full bg-neutral-950 px-7 py-3 text-sm tracking-wide text-[#f4ede0] hover:bg-neutral-800 transition"
            >
              Subscribe to Mnema
            </a>
          </div>
          <ul role="list" className="md:col-span-7 grid gap-y-5 sm:grid-cols-2 sm:gap-x-12">
            {[
              "Unlimited notes, kept forever",
              "End-to-end encrypted archive",
              "Native Mac, iPhone, and web",
              "Search that reads your writing",
              "Conversation with your own notes",
              "Export, always, to plain Markdown",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 leading-relaxed">
                <span className="mt-2 size-1.5 rounded-full bg-neutral-950" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="border-t border-neutral-950/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-10">
          <div>
            <p className="font-fraunces text-2xl">Mnema</p>
            <p className="mt-2 font-instrument-serif text-sm italic text-neutral-700">
              Bound for the long-form thinker.
            </p>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-600">
            Set in Fraunces &middot; MMXXVI &middot; All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
