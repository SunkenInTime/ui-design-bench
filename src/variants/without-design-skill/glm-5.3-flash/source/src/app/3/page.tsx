import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BRAINSTASH — Notes that hit back',
}

const marqueeItems = Array.from({ length: 8 }, () => [
  'CAPTURE EVERYTHING',
  'FORGET NOTHING',
  'LINK EVERYTHING',
  'THINK LOUDER',
])

export default function Page() {
  return (
    <div className="min-h-dvh bg-lime-300 font-sans text-black selection:bg-fuchsia-400">
      <div className="overflow-hidden border-b-4 border-black bg-fuchsia-400 py-2.5">
        <div
          className="flex w-max items-center gap-8 text-sm font-black tracking-widest whitespace-nowrap uppercase"
          style={{ animation: 'marquee 18s linear infinite' }}
        >
          {marqueeItems.map((items, i) =>
            items.map((item) => (
              <span key={`${i}-${item}`} className="flex items-center gap-8">
                {item}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6L12 0z" />
                </svg>
              </span>
            )),
          )}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-28">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b-4 border-black py-5">
          <Link
            href="/"
            className="-rotate-1 border-3 border-black bg-white px-3 py-1.5 text-xl font-black tracking-tight uppercase shadow-[4px_4px_0_#000]"
          >
            Brainstash
          </Link>
          <nav className="flex flex-wrap items-center gap-2 text-sm font-bold uppercase">
            {['Features', 'Manifesto', 'Pricing'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="border-3 border-black bg-white px-3.5 py-1.5 transition hover:-translate-y-0.5 hover:bg-lime-200 hover:shadow-[3px_3px_0_#000]"
              >
                {item}
              </a>
            ))}
            <a
              href="#get"
              className="border-3 border-black bg-black px-3.5 py-1.5 text-lime-300 transition hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#000]"
            >
              Get it
            </a>
          </nav>
        </header>

        <main>
          <section className="relative pt-16 pb-20 md:pt-24">
            <span className="absolute top-10 right-2 hidden rotate-6 border-3 border-black bg-cyan-300 px-3 py-1 text-sm font-black uppercase shadow-[4px_4px_0_#000] md:block">
              No folders. Ever.
            </span>
            <span className="absolute top-40 right-16 hidden -rotate-6 border-3 border-black bg-white px-3 py-1 text-sm font-black uppercase shadow-[4px_4px_0_#000] lg:block">
              v2 is here!!
            </span>

            <p className="inline-block -rotate-1 border-3 border-black bg-yellow-300 px-3 py-1 text-xs font-black tracking-widest uppercase shadow-[3px_3px_0_#000]">
              The second brain for chaotic minds
            </p>
            <h1 className="mt-8 max-w-4xl text-6xl leading-[0.95] font-black tracking-tight uppercase md:text-8xl">
              Think in public.
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: '3px black' }}
              >
                Store in private.
              </span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-snug font-medium md:text-xl">
              Brainstash grabs every thought, link, and screenshot before it
              evaporates — then stitches them into a brain you can actually
              search.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <a
                href="#get"
                className="border-3 border-black bg-black px-8 py-4 text-base font-black tracking-wide text-lime-300 uppercase shadow-[7px_7px_0_#000] transition hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_#000] active:translate-x-[7px] active:translate-y-[7px] active:shadow-none"
              >
                Start free →
              </a>
              <a
                href="#features"
                className="border-3 border-black bg-white px-8 py-4 text-base font-black tracking-wide uppercase shadow-[7px_7px_0_#000] transition hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_#000] active:translate-x-[7px] active:translate-y-[7px] active:shadow-none"
              >
                See the mess
              </a>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-x-6 gap-y-8 border-y-4 border-black bg-orange-300 px-6 py-10 text-center md:grid-cols-4">
            {[
              ['4M+', 'notes stashed'],
              ['98%', 'recall faster'],
              ['0', 'folders needed'],
              ['∞', 'connections'],
            ].map(([num, label]) => (
              <div key={label}>
                <p className="text-5xl font-black">{num}</p>
                <p className="mt-1 text-xs font-bold tracking-widest uppercase">{label}</p>
              </div>
            ))}
          </section>

          <section id="features" className="py-20">
            <h2 className="text-5xl font-black uppercase md:text-6xl">
              Why your current notes app is a lie
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: 'Instant capture',
                  body: 'Global hotkey from anywhere. Thought gone? Stashed.',
                  bg: 'bg-white',
                  rotate: '-rotate-1',
                },
                {
                  title: 'Auto-linking',
                  body: 'Brainstash connects new notes to old ones while you sleep.',
                  bg: 'bg-cyan-300',
                  rotate: 'rotate-1',
                },
                {
                  title: 'Plain markdown',
                  body: 'Your data is yours. Export anytime, no ransom.',
                  bg: 'bg-fuchsia-400',
                  rotate: '-rotate-1',
                },
                {
                  title: 'Offline first',
                  body: 'Subway, plane, cabin in the woods. It all just works.',
                  bg: 'bg-white',
                  rotate: 'rotate-1',
                },
              ].map((f) => (
                <article
                  key={f.title}
                  className={`border-3 border-black ${f.bg} ${f.rotate} p-5 shadow-[8px_8px_0_#000] transition hover:rotate-0 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_#000]`}
                >
                  <span aria-hidden className="block h-3 w-12 border-3 border-black bg-lime-300" />
                  <h3 className="mt-4 text-xl font-black uppercase">{f.title}</h3>
                  <p className="mt-2 leading-snug font-medium">{f.body}</p>
                </article>
              ))}
            </div>
          </section>

          <figure className="border-3 border-black bg-black p-10 text-lime-300 shadow-[10px_10px_0_#000] md:p-14">
            <blockquote className="max-w-3xl text-2xl leading-tight font-black uppercase md:text-4xl">
              “I dumped 6,000 scattered notes in and it found connections my
              therapist hasn’t.”
            </blockquote>
            <figcaption className="mt-6 text-sm font-bold tracking-widest text-white uppercase">
              — Dev Okafor · Product manager, loud thinker
            </figcaption>
          </figure>

          <section
            id="get"
            className="mt-20 border-3 border-black bg-white p-10 text-center shadow-[10px_10px_0_#000] md:p-16"
          >
            <h2 className="text-4xl font-black uppercase md:text-5xl">
              Stop losing your best ideas to the void
            </h2>
            <p className="mx-auto mt-4 max-w-md font-medium">
              Free plan forever. Pro at $8/mo. Your brain will thank you
              loudly.
            </p>
            <form action="#" className="mx-auto mt-8 flex max-w-md flex-col gap-4 sm:flex-row">
              <input
                type="email"
                required
                placeholder="your@brain.com"
                className="w-full border-3 border-black bg-lime-50 px-4 py-3.5 font-medium outline-none placeholder:text-stone-400 focus:shadow-[4px_4px_0_#000]"
              />
              <button
                type="submit"
                className="shrink-0 border-3 border-black bg-lime-300 px-8 py-3.5 font-black uppercase shadow-[6px_6px_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000]"
              >
                Stash it
              </button>
            </form>
          </section>
        </main>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t-4 border-black pt-8 text-sm font-bold uppercase">
          <p>© 2026 Brainstash Industries</p>
          <p>Made with too many tabs open</p>
        </footer>
      </div>

    </div>
  )
}
