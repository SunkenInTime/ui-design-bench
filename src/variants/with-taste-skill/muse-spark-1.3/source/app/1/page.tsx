import Image from "next/image";
import Link from "next/link";

/* Study 1, Quiet System. Dials 5/3/3. Shape rule: buttons are pills, cards are 16px. Accent: emerald-600, locked. */

const TEAMS = ["H", "F", "K", "M", "B"];

export default function StudyOne() {
  return (
    <div className="min-h-[100dvh] bg-white font-sans text-zinc-950 antialiased">
      <header className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-[15px] font-bold tracking-tight">
          Cairn
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-6">
          <a
            href="#how"
            className="hidden text-sm text-zinc-600 hover:text-zinc-950 sm:inline"
          >
            Method
          </a>
          <a
            href="#notes"
            className="hidden text-sm text-zinc-600 hover:text-zinc-950 sm:inline"
          >
            Notes
          </a>
          <a
            href="#start"
            className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition-transform hover:bg-zinc-800 active:scale-[0.98]"
          >
            Start writing
          </a>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-16 pb-16 md:grid-cols-2 md:pt-24">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-emerald-700 uppercase">
              Notes that link themselves
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tighter text-zinc-950 md:text-6xl">
              Your notes, thinking together.
            </h1>
            <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-zinc-600">
              Cairn links each note to the next, so old ideas surface exactly
              when you need them.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#start"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-emerald-700 active:scale-[0.98]"
              >
                Start writing
              </a>
              <a
                href="#how"
                className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold whitespace-nowrap text-zinc-900 transition-colors hover:border-zinc-500 active:scale-[0.98]"
              >
                Take the tour
              </a>
            </div>
          </div>

          <div
            id="notes"
            className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          >
            <div className="flex items-center gap-2 border-b border-zinc-200 pb-3">
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
              <p className="ml-2 font-mono text-xs text-zinc-500">
                cairn.app/garden
              </p>
            </div>
            <label
              htmlFor="study1-search"
              className="mt-4 mb-1 block text-xs font-semibold text-zinc-700"
            >
              Search
            </label>
            <input
              id="study1-search"
              type="search"
              defaultValue="fermentation"
              className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/30 focus:outline-none"
            />
            <article className="mt-3 rounded-2xl bg-white p-4 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
              <h2 className="text-[15px] font-semibold">On slow breakfasts</h2>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                Oats, salt, patience. Everything worth keeping takes longer
                than the recipe admits.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-emerald-600/10 px-2.5 py-1 text-xs font-medium text-emerald-800">
                  kitchen
                </span>
                <span className="rounded-full bg-emerald-600/10 px-2.5 py-1 text-xs font-medium text-emerald-800">
                  rituals
                </span>
              </div>
            </article>
            <div className="mt-3 rounded-2xl border border-zinc-200 bg-white p-4">
              <p className="text-xs font-semibold tracking-wide text-zinc-500 uppercase">
                Linked
              </p>
              <ul className="mt-2 space-y-1.5 text-sm">
                <li>
                  <a href="#notes" className="text-zinc-800 underline decoration-emerald-600/50 underline-offset-2 hover:decoration-emerald-600">
                    Winter soup, third attempt
                  </a>
                </li>
                <li>
                  <a href="#notes" className="text-zinc-800 underline decoration-emerald-600/50 underline-offset-2 hover:decoration-emerald-600">
                    What the pantry taught me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section aria-label="Teams" className="border-y border-zinc-100 bg-zinc-50/60">
          <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-x-8 gap-y-3 px-4 py-8">
            <p className="text-sm text-zinc-500">Used at</p>
            {TEAMS.map((t) => (
              <span
                key={t}
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-sm font-bold text-zinc-700"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        <section id="how" className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-20 md:grid-cols-5 md:py-28">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Write fast. Remember slowly.
            </h2>
            <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-zinc-600">
              Capture in seconds with plain text. Cairn files, links, and
              resurfaces each note while you keep writing.
            </p>
            <a
              href="#start"
              className="mt-6 inline-block rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-zinc-800 active:scale-[0.98]"
            >
              Start writing
            </a>
          </div>
          <div className="md:col-span-3">
            <Image
              src="https://picsum.photos/seed/cairn-desk-notes/1200/800"
              alt="A desk covered with notebooks and morning light"
              width={1200}
              height={800}
              loading="lazy"
              className="aspect-[3/2] w-full rounded-2xl border border-zinc-200 bg-zinc-100 object-cover"
            />
          </div>
        </section>

        <section className="bg-zinc-950">
          <div className="mx-auto w-full max-w-7xl px-4 py-20 md:py-28">
            <blockquote className="max-w-3xl">
              <p className="text-2xl leading-snug font-medium tracking-tight text-white md:text-3xl">
                “I stopped losing ideas. Everything I kept came back to help.”
              </p>
              <footer className="mt-4 text-sm text-zinc-400">
                Mara Ellison - Novelist, Portland
              </footer>
            </blockquote>
            <div className="mt-10 grid grid-cols-1 gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
              {[
                ["Offline first", "Your words live on your device, synced gently."],
                ["Plain text", "Export anytime. No lock in, no strange formats."],
                ["Kind search", "Finds the note you meant, not just the words."],
              ].map(([h, b]) => (
                <div key={h}>
                  <h3 className="text-[15px] font-semibold text-white">{h}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="start" className="mx-auto w-full max-w-7xl px-4 py-20 text-center md:py-28">
          <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
            Begin your garden of notes.
          </h2>
          <p className="mx-auto mt-4 max-w-[65ch] text-base leading-relaxed text-zinc-600">
            Free for your first thousand notes. Bring what you already wrote.
          </p>
          <a
            href="#start"
            className="mt-8 inline-block rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-emerald-700 active:scale-[0.98]"
          >
            Start writing
          </a>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-7xl px-4 pb-28">
        <p className="border-t border-zinc-200 pt-6 text-sm text-zinc-500">
          Cairn. Notes that remember each other.
        </p>
      </footer>
    </div>
  );
}
