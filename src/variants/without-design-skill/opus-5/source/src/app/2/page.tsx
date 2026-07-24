import type { Metadata } from "next";
import { instrumentSerif, instrumentSerifItalic, newsreader } from "../fonts";

export const metadata: Metadata = {
  title: "Marginalia",
  description:
    "Recall is a notebook that remembers for you — quiet, warm and built to be written in every day.",
};

const ruledPaper = {
  backgroundImage:
    "repeating-linear-gradient(to bottom, transparent 0 31px, rgba(120,53,15,0.13) 31px 32px)",
};

const notes = [
  {
    text: "The point of writing things down isn't the writing. It's the finding.",
    meta: "from — On Keeping Notes",
    rotate: "-2.2deg",
    tint: "bg-amber-100",
  },
  {
    text: "Ask Recall: what did I believe about pricing last spring?",
    meta: "Tuesday, 9:14am",
    rotate: "1.6deg",
    tint: "bg-rose-50",
  },
  {
    text: "Linked 4 notes → “compounding attention”",
    meta: "auto-linked",
    rotate: "-0.8deg",
    tint: "bg-emerald-50",
  },
];

const chapters = [
  {
    numeral: "I.",
    title: "Write first, file never",
    body: "One keystroke opens a blank page. No folder to pick, no template to choose, no tag to invent. Recall sorts it out behind you, the way a good editor does.",
  },
  {
    numeral: "II.",
    title: "The margins remember",
    body: "Annotate anything — a PDF, a recipe, a voice memo from the car. Your notes in the margin become first-class notes of their own, linked back to the source forever.",
  },
  {
    numeral: "III.",
    title: "A weekly reading of yourself",
    body: "Every Sunday, Recall sets out five things you wrote and forgot. Not a notification. A page you actually want to sit down with.",
  },
];

export default function MarginaliaPage() {
  return (
    <div
      className={`${newsreader.className} relative flex flex-1 flex-col bg-[#faf6ee] text-stone-900`}
    >
      {/* Paper grain + edge vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(120,53,15,0.055) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />

      <header className="relative mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-7">
        <div className="flex items-baseline gap-2.5">
          <span
            className={`${instrumentSerif.className} text-[26px] leading-none tracking-tight`}
          >
            Recall
          </span>
          <span className="text-[11px] tracking-[0.22em] text-stone-500 uppercase">
            est. 2026
          </span>
        </div>
        <nav className="hidden items-center gap-9 text-[14.5px] text-stone-600 md:flex">
          <a className="hover:text-stone-950 hover:underline" href="#chapters">
            The idea
          </a>
          <a className="hover:text-stone-950 hover:underline" href="#library">
            Library
          </a>
          <a className="hover:text-stone-950 hover:underline" href="#price">
            Price
          </a>
        </nav>
        <a
          href="#"
          className="rounded-sm border border-stone-900 px-4 py-1.5 text-[13.5px] transition-colors hover:bg-stone-900 hover:text-[#faf6ee]"
        >
          Begin a notebook
        </a>
      </header>

      <div aria-hidden className="relative mx-auto w-full max-w-5xl px-6">
        <div className="h-px bg-stone-900/15" />
      </div>

      <main className="relative mx-auto w-full max-w-5xl px-6">
        {/* Hero */}
        <section className="grid gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div className="animate-rise">
            <p className="mb-7 text-[11.5px] tracking-[0.24em] text-orange-800 uppercase">
              A second brain, on paper terms
            </p>

            <h1
              className={`${instrumentSerif.className} text-[clamp(3rem,6.6vw,5.25rem)] leading-[0.94] tracking-[-0.02em]`}
            >
              Keep a notebook
              <br />
              that keeps
              <br />
              <span className={instrumentSerifItalic.className}>
                you.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-[19px] leading-[1.65] text-stone-700">
              Recall is a place to put things down and trust they’ll come back.
              Write the way you would in a margin — quickly, messily, in your
              own shorthand — and let the app do the remembering.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#"
                className="rounded-sm bg-stone-900 px-6 py-3 text-[15px] text-[#faf6ee] transition-colors hover:bg-orange-900"
              >
                Open a blank page
              </a>
              <a
                href="#chapters"
                className="text-[15px] text-stone-700 underline decoration-stone-400 decoration-1 underline-offset-4 transition-colors hover:text-stone-950 hover:decoration-stone-900"
              >
                Read how it works
              </a>
            </div>

            <p className="mt-8 text-[13.5px] text-stone-500 italic">
              Free for as long as you like. Your notes stay plain text on your
              own machine.
            </p>
          </div>

          {/* Stack of notes */}
          <div className="relative flex items-center justify-center py-6">
            <div className="w-full max-w-sm space-y-5">
              {notes.map((note, i) => (
                // Rotation lives on the wrapper so the inner rise animation,
                // which ends on `transform: none`, can't flatten it.
                <div key={note.meta} style={{ rotate: note.rotate }}>
                  <figure
                    className={`${note.tint} animate-rise border border-stone-900/10 p-6 shadow-[0_10px_28px_-16px_rgba(68,45,20,0.5)]`}
                    style={{ animationDelay: `${0.15 + i * 0.12}s` }}
                  >
                    <blockquote className="text-[17px] leading-[1.6] text-stone-800">
                      {note.text}
                    </blockquote>
                    <figcaption className="mt-3 text-[12px] tracking-wide text-stone-500 italic">
                      {note.meta}
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ruled paper feature strip */}
        <section
          id="library"
          className="border border-stone-900/12 bg-[#fffdf7] px-8 py-10 shadow-[0_1px_0_rgba(120,53,15,0.08)]"
          style={ruledPaper}
        >
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              ["12 years", "the longest notebook we've seen kept in Recall"],
              ["0 folders", "required to stay organised"],
              ["Every file", "yours, in Markdown, on your disk"],
            ].map(([value, label]) => (
              <div key={label}>
                <p
                  className={`${instrumentSerif.className} text-[34px] leading-none`}
                >
                  {value}
                </p>
                <p className="mt-2 text-[14.5px] leading-snug text-stone-600">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Chapters */}
        <section id="chapters" className="py-20">
          <h2
            className={`${instrumentSerif.className} max-w-xl text-[clamp(2rem,4vw,3rem)] leading-[1.05]`}
          >
            Three habits the app is built around
          </h2>

          <div className="mt-12 divide-y divide-stone-900/12 border-y border-stone-900/12">
            {chapters.map((chapter) => (
              <article
                key={chapter.numeral}
                className="grid gap-4 py-9 transition-colors hover:bg-orange-50/60 sm:grid-cols-[auto_1fr] sm:gap-10"
              >
                <span
                  className={`${instrumentSerif.className} w-14 text-[30px] leading-none text-orange-800`}
                >
                  {chapter.numeral}
                </span>
                <div className="max-w-2xl">
                  <h3
                    className={`${instrumentSerif.className} text-[25px] leading-tight`}
                  >
                    {chapter.title}
                  </h3>
                  <p className="mt-3 text-[17px] leading-[1.7] text-stone-700">
                    {chapter.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Pull quote */}
        <section className="mx-auto max-w-3xl pb-20 text-center">
          <p
            className={`${instrumentSerifItalic.className} text-[clamp(1.6rem,3.2vw,2.4rem)] leading-[1.25] text-stone-800`}
          >
            “I’ve filled eleven paper notebooks. This is the first digital one
            that felt like the twelfth rather than a filing cabinet.”
          </p>
          <p className="mt-6 text-[13.5px] tracking-[0.16em] text-stone-500 uppercase">
            Tomas Reidy · essayist
          </p>
        </section>

        {/* CTA */}
        <section
          id="price"
          className="mb-20 border-2 border-stone-900 bg-[#fffdf7] px-8 py-14 text-center"
        >
          <p className="text-[11.5px] tracking-[0.24em] text-orange-800 uppercase">
            No trial, no countdown
          </p>
          <h2
            className={`${instrumentSerif.className} mx-auto mt-5 max-w-2xl text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.02]`}
          >
            Start writing. Decide about paying in a year.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[17px] leading-relaxed text-stone-600">
            $6 a month when you’re ready, or $60 once for the desktop app. Both
            include sync, both let you export everything in one click.
          </p>
          <a
            href="#"
            className="mt-9 inline-flex rounded-sm bg-stone-900 px-7 py-3.5 text-[15px] text-[#faf6ee] transition-colors hover:bg-orange-900"
          >
            Open a blank page →
          </a>
        </section>
      </main>

      <footer className="relative mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 border-t border-stone-900/15 px-6 py-8 pb-24 text-[13px] text-stone-500">
        <p>Recall Labs · Lisbon</p>
        <div className="flex gap-6">
          <a className="hover:text-stone-900 hover:underline" href="#">
            Letters
          </a>
          <a className="hover:text-stone-900 hover:underline" href="#">
            Privacy
          </a>
          <a className="hover:text-stone-900 hover:underline" href="#">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
