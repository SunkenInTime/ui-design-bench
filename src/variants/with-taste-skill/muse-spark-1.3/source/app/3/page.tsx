import Image from "next/image";
import Link from "next/link";

/* Study 3, Commonplace. Dials 6/4/3. Serif is justified: the brief is a manuscript
   heritage commonplace book, so headlines set in the system serif stack.
   Shape rule: sharp edges, hairline rules. Accent: cobalt blue, locked. */

export default function StudyThree() {
  return (
    <div className="min-h-[100dvh] bg-zinc-50 font-sans text-zinc-950 antialiased">
      <header className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between border-b border-zinc-950/15 px-4">
        <Link href="/" className="font-serif text-xl font-bold tracking-tight">
          Cairn
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-6 text-sm">
          <a href="#reading" className="hidden text-zinc-600 hover:text-zinc-950 sm:inline">
            Reading
          </a>
          <a href="#keeping" className="hidden text-zinc-600 hover:text-zinc-950 sm:inline">
            Keeping
          </a>
          <a
            href="#start"
            className="bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800 active:scale-[0.98]"
          >
            Start writing
          </a>
        </nav>
      </header>

      <main>
        <section className="mx-auto w-full max-w-6xl px-4 pt-14 pb-14 md:pt-20">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-blue-800 uppercase">
            The commonplace issue
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.05] font-medium tracking-tight md:pl-24 md:text-7xl">
            Keep everything worth rereading.
          </h1>
          <div className="mt-8 md:pl-24">
            <p className="max-w-[65ch] text-base leading-relaxed text-zinc-600">
              Cairn is a notebook that files itself. Write daily, and old
              passages return with their margins intact.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#start"
                className="bg-blue-800 px-6 py-3 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-blue-900 active:scale-[0.98]"
              >
                Start writing
              </a>
              <a
                href="#reading"
                className="border border-zinc-400 px-6 py-3 text-sm font-semibold whitespace-nowrap text-zinc-900 transition-colors hover:border-zinc-900 active:scale-[0.98]"
              >
                Take the tour
              </a>
            </div>
          </div>
        </section>

        <section id="reading" className="border-y border-zinc-950/15">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-12 md:py-24">
            <figure className="md:col-span-7">
              <Image
                src="https://picsum.photos/seed/cairn-manuscript/1200/800?grayscale"
                alt="Open journal pages filled with handwriting"
                width={1200}
                height={800}
                loading="lazy"
                className="aspect-[3/2] w-full border border-zinc-950/15 bg-zinc-200 object-cover"
              />
              <figcaption className="mt-2 text-sm text-zinc-500">
                A kept volume, photographed flat for the archive.
              </figcaption>
            </figure>
            <div className="md:col-span-4 md:col-start-9">
              <h2 className="font-serif text-3xl leading-tight font-medium tracking-tight">
                A margin for every thought.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-zinc-600">
                <span
                  aria-hidden="true"
                  className="float-left mt-1 mr-2 font-serif text-5xl leading-[0.8] text-zinc-950"
                >
                  E
                </span>
                very note keeps its context. Who wrote it, what it answered,
                which older note it corrected. Nothing arrives stripped of its
                history.
              </p>
              <p className="mt-4 border-l-2 border-blue-800 pl-4 font-serif text-lg leading-snug text-zinc-800 italic">
                “The best page is the one that sends you to three others.”
              </p>
            </div>
          </div>
        </section>

        <section id="keeping" className="mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="font-serif text-3xl leading-tight font-medium tracking-tight">
                Ordered without effort.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-zinc-600">
                Three habits carry the whole system. The rest happens quietly
                underneath.
              </p>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              {[
                ["Capture", "One keystroke opens a blank page from anywhere. Date, place, and source attach themselves."],
                ["Connect", "Bracket two words to tie notes together. The reverse link appears on its own."],
                ["Revisit", "Each morning opens with five old notes worth a second look."],
              ].map(([h, b]) => (
                <div key={h} className="border-b border-zinc-950/15 py-6 first:border-t">
                  <h3 className="font-serif text-xl font-medium">{h}</h3>
                  <p className="mt-1.5 max-w-[60ch] text-[15px] leading-relaxed text-zinc-600">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-950">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
            <p className="font-serif text-2xl leading-snug text-white md:text-3xl">
              “Twenty years of journals, and finally one shelf for all of them.”
            </p>
            <p className="mt-4 text-sm text-zinc-400">
              Priya Natarajan - Essayist, London
            </p>
          </div>
        </section>

        <section id="start" className="mx-auto w-full max-w-6xl px-4 py-16 text-center md:py-24">
          <h2 className="mx-auto max-w-xl font-serif text-4xl leading-tight font-medium tracking-tight">
            Open a fresh volume.
          </h2>
          <p className="mx-auto mt-4 max-w-[65ch] text-base leading-relaxed text-zinc-600">
            Plain text in, plain text out. Your archive stays yours.
          </p>
          <a
            href="#start"
            className="mt-8 inline-block bg-blue-800 px-8 py-3.5 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-blue-900 active:scale-[0.98]"
          >
            Start writing
          </a>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-4 pb-28">
        <div className="flex flex-wrap justify-between gap-4 border-t border-zinc-950/15 pt-6 text-sm text-zinc-500">
          <p>Cairn. Notes that remember each other.</p>
          <p>Set in the system serif, printed on pixels.</p>
        </div>
      </footer>
    </div>
  );
}
