export default function Two() {
  return (
    <div className="min-h-screen bg-[#f7f5f0] text-zinc-900">
      <header className="border-b border-zinc-300">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          <span>Cortex</span>
          <span className="hidden sm:inline">A Field Guide to Thinking</span>
          <span>Issue 01</span>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pt-24 pb-28 lg:grid-cols-12">
        <div className="lg:col-span-9">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
            On the second brain
          </p>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl lg:text-[5.5rem]">
            The quiet practice of{" "}
            <em className="italic text-indigo-600">remembering</em> well.
          </h1>
        </div>
        <aside className="flex flex-col justify-end gap-4 border-l border-zinc-300 pl-6 text-sm text-zinc-500 lg:col-span-3">
          <div>
            <p className="text-xs uppercase tracking-wider text-zinc-400">
              Subject
            </p>
            <p className="mt-1 text-zinc-800">Memory, in writing</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-zinc-400">
              Form
            </p>
            <p className="mt-1 text-zinc-800">A notebook that thinks back</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-zinc-400">
              Pages
            </p>
            <p className="mt-1 text-zinc-800">Capture, Connect, Recall</p>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-10 border-y border-zinc-300 py-16 lg:grid-cols-12">
          <p className="font-serif text-2xl leading-relaxed text-zinc-700 lg:col-span-7 lg:text-3xl">
            Cortex is a notebook built for thinking in public with yourself:
            capture fragments as they arrive, draw the lines between them, and
            return to a mind that is more than memory.
          </p>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-sm leading-relaxed text-zinc-500">
              Most notes die the day they are written. The few that survive
              tend to be the ones that touched another note, and another after
              that. Cortex is engineered around that single observation.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-x-12 gap-y-14 md:grid-cols-3">
          <article>
            <p className="font-serif text-5xl text-indigo-600">01</p>
            <h3 className="mt-4 text-lg font-semibold">Capture</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              A thought is most useful while it is still warm. Cortex meets you
              in a single keystroke and gets out of the way just as fast.
            </p>
          </article>
          <article>
            <p className="font-serif text-5xl text-indigo-600">02</p>
            <h3 className="mt-4 text-lg font-semibold">Connect</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Link a note to another and the graph begins to think. Patterns
              surface on their own, without effort or ceremony.
            </p>
          </article>
          <article>
            <p className="font-serif text-5xl text-indigo-600">03</p>
            <h3 className="mt-4 text-lg font-semibold">Recall</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Search is instant and forgiving. The note you need is never lost,
              only waiting to be asked the right question.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="font-serif text-3xl leading-snug text-zinc-800 sm:text-4xl">
          &ldquo;The faintest note, taken in time, outweighs the sharpest
          memory taken too late.&rdquo;
        </p>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
          Field Note 14
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28 text-center">
        <a
          href="#begin"
          className="inline-block border-b-2 border-indigo-600 pb-1 font-serif text-2xl text-indigo-600 transition hover:text-indigo-700 hover:border-indigo-700"
        >
          Begin your field guide
          <span className="ml-2">&rarr;</span>
        </a>
      </section>

      <footer className="border-t border-zinc-300">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
          <span>Cortex</span>
          <span>Printed for thinkers, daily</span>
          <span>Issue 01</span>
        </div>
      </footer>
    </div>
  );
}
