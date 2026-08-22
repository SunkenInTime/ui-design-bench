import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Foliage — A quiet place to think',
}

const cards = [
  {
    ref: 'No. 214',
    title: 'On slow reading',
    body: 'A page read three times outweighs a chapter skimmed once. Attention is the rarest ink.',
    tag: 'Attention',
  },
  {
    ref: 'No. 87',
    title: 'The commonplace book',
    body: 'For four centuries, thinkers copied passages by hand — not to store them, but to digest them.',
    tag: 'History',
  },
  {
    ref: 'No. 132',
    title: 'Links over folders',
    body: 'Ideas refuse to live in one place. A file system asks “where does this go?” A web asks “what is this near?”',
    tag: 'Method',
  },
  {
    ref: 'No. 301',
    title: 'Writing as thinking',
    body: 'We do not write what we think; we discover it mid-sentence. Notes are thought rehearsal.',
    tag: 'Craft',
  },
  {
    ref: 'No. 45',
    title: 'Forgetting, on purpose',
    body: 'A good system lets most notes sleep. What resurfaces earns its return.',
    tag: 'Memory',
  },
  {
    ref: 'No. 178',
    title: 'Small notes, long life',
    body: 'One idea per note. Atomic thoughts recombine; essays merely contain.',
    tag: 'Method',
  },
]

export default function Page() {
  return (
    <div className="min-h-dvh bg-stone-50 font-serif text-stone-900">
      <div className="mx-auto max-w-4xl px-6">
        <div aria-hidden className="h-1.5 w-full bg-stone-900" />

        <header className="flex items-baseline justify-between border-b border-stone-300 py-5">
          <Link href="/" className="text-xl font-semibold tracking-tight italic">
            Foliage
          </Link>
          <nav className="flex items-center gap-6 text-[13px] tracking-wide text-stone-600 uppercase">
            <a href="#method" className="hover:text-stone-950">Method</a>
            <a href="#cards" className="hover:text-stone-950">Notes</a>
            <a href="#quote" className="hover:text-stone-950">Readers</a>
            <a
              href="#subscribe"
              className="border-b-2 border-red-700 pb-0.5 font-medium text-red-800 hover:text-red-600"
            >
              Subscribe
            </a>
          </nav>
        </header>

        <main>
          <section className="py-20 text-center md:py-28">
            <p className="text-[11px] tracking-[0.35em] text-red-800 uppercase">
              A quiet place to think
            </p>
            <h1 className="mt-8 text-5xl leading-[1.08] font-medium tracking-tight text-balance md:text-[64px]">
              Your mind deserves
              <br />
              <em className="text-stone-600">better furniture.</em>
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-stone-600 text-pretty">
              Foliage is a second brain for people who still believe in
              sentences. Capture quotations, ideas, and fragments — then watch
              them converse across years.
            </p>
            <p className="mt-10 text-[13px] tracking-widest text-stone-400 uppercase">
              Est. 2026 · Read in 40 countries · 12,400 members
            </p>
          </section>

          <hr className="border-stone-300" />

          <section id="method" className="grid gap-x-10 gap-y-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['01', 'Capture', 'A single keystroke files away any passage, with its source intact.'],
              ['02', 'Connect', 'Foliage notices when a new note rhymes with something you wrote in 2019.'],
              ['03', 'Contemplate', 'A weekly letter of your own thinking, typeset and ready to reread.'],
              ['04', 'Create', 'Drafts assemble themselves from connected notes. You take the credit.'],
            ].map(([num, title, body]) => (
              <article key={title}>
                <p className="text-sm tracking-widest text-red-800">{num}</p>
                <h2 className="mt-3 text-2xl font-medium italic">{title}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-stone-600">{body}</p>
              </article>
            ))}
          </section>

          <hr className="border-stone-300" />

          <section id="cards" className="py-16">
            <div className="flex items-baseline justify-between">
              <h2 className="text-3xl font-medium">From a member’s notebook</h2>
              <span className="text-[13px] tracking-wide text-stone-500 uppercase">Index cards</span>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cards.map((c) => (
                <article
                  key={c.ref}
                  className="relative rounded-sm border border-stone-200 bg-white p-5 pt-7 shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.09)]"
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-4 h-px bg-red-300/70"
                  />
                  <p className="absolute top-1.5 right-4 text-[11px] tracking-widest text-stone-400">
                    {c.ref}
                  </p>
                  <h3 className="font-semibold italic">{c.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-stone-600">{c.body}</p>
                  <p className="mt-4 text-[11px] tracking-widest text-red-800 uppercase">{c.tag}</p>
                </article>
              ))}
            </div>
          </section>

          <figure id="quote" className="border-y border-stone-300 py-20 text-center">
            <blockquote className="mx-auto max-w-2xl text-3xl leading-snug font-medium text-balance md:text-4xl">
              “I have kept journals since I was fourteen. Foliage is the first
              thing that made them talk back.”
            </blockquote>
            <figcaption className="mt-8 text-[13px] tracking-widest text-stone-500 uppercase">
              Eleanor West · Essayist
            </figcaption>
          </figure>

          <section id="subscribe" className="py-20 text-center md:py-24">
            <h2 className="text-4xl font-medium text-balance">
              Begin your commonplace book
            </h2>
            <p className="mx-auto mt-4 max-w-md leading-relaxed text-stone-600">
              Thirty days free. Your notes export as plain markdown, always.
              Cancellation is one click and holds no grudges.
            </p>
            <form action="#" className="mx-auto mt-8 flex max-w-md items-end gap-3">
              <label className="w-full text-left">
                <span className="text-[11px] tracking-widest text-stone-500 uppercase">Your address</span>
                <input
                  type="email"
                  required
                  placeholder="you@somewhere.com"
                  className="mt-1 w-full border-0 border-b border-stone-400 bg-transparent px-0 py-2 text-lg outline-none placeholder:text-stone-300 focus:border-red-700"
                />
              </label>
              <button
                type="submit"
                className="shrink-0 bg-stone-900 px-6 py-2.5 text-sm font-medium text-stone-50 transition hover:bg-red-800"
              >
                Subscribe
              </button>
            </form>
          </section>
        </main>

        <footer className="flex flex-col items-center justify-between gap-2 border-t border-stone-300 py-8 text-[13px] text-stone-500 sm:flex-row">
          <p>© 2026 Foliage Press</p>
          <p className="italic">Set in serif, like all serious things.</p>
        </footer>
      </div>

    </div>
  )
}
