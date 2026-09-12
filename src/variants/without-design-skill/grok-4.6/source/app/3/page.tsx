import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio",
  description: "Lumen as a calm product studio — capture, link, and find your thinking.",
};

export default function StudioLanding() {
  return (
    <div className="min-h-full bg-[#f7f6f2] font-outfit text-[#1f241d]">
      <div className="mx-auto flex min-h-full max-w-6xl flex-col px-6 pb-32 pt-6 sm:px-8">
        <header className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#5b7a62] text-sm text-white">
              L
            </span>
            <p className="text-lg font-semibold tracking-tight">Lumen</p>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-[#1f241d]/65 md:flex">
            <a href="#product">Product</a>
            <a href="#method">Method</a>
            <a href="#start">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <button type="button" className="hidden text-sm text-[#1f241d]/70 sm:block">
              Sign in
            </button>
            <button
              type="button"
              className="rounded-full bg-[#1f241d] px-4 py-2 text-sm text-white"
            >
              Start free
            </button>
          </div>
        </header>

        <main>
          <section className="grid items-center gap-12 py-12 lg:grid-cols-[1fr_1.05fr] lg:py-16">
            <div>
              <p className="inline-flex rounded-full bg-[#5b7a62]/10 px-3 py-1 text-xs font-medium tracking-wide text-[#3f5a46]">
                Second brain, first calm
              </p>
              <h1 className="mt-5 text-[clamp(2.6rem,6vw,4.8rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
                Remember the thinking, not just the notes.
              </h1>
              <p className="mt-5 max-w-md text-lg leading-8 text-[#1f241d]/65">
                Lumen is a fast, private notebook that links ideas as you write.
                Capture a spark, grow a graph, and find the thread when you need
                it — without a filing system to maintain.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="rounded-full bg-[#5b7a62] px-5 py-3 text-sm font-medium text-white"
                >
                  Make a second brain
                </button>
                <button
                  type="button"
                  className="rounded-full border border-[#1f241d]/12 bg-white px-5 py-3 text-sm"
                >
                  See a sample vault
                </button>
              </div>
              <p className="mt-6 text-sm text-[#1f241d]/45">
                Used by researchers, designers, and people who cannot afford to lose a thought.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#1f241d]/8 bg-white p-3 shadow-[0_30px_80px_rgba(31,36,29,0.08)]">
              <div className="flex items-center gap-1.5 border-b border-[#1f241d]/6 px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#e8c4b8]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ead9a8]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#c5d5c4]" />
                <p className="ml-3 text-xs text-[#1f241d]/40">Lumen · Personal vault</p>
              </div>
              <div className="grid min-h-[340px] grid-cols-[0.72fr_1.28fr] overflow-hidden rounded-b-[20px]">
                <aside className="border-r border-[#1f241d]/6 bg-[#f7f6f2] p-4 text-sm">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#1f241d]/35">
                    Library
                  </p>
                  <ul className="mt-4 space-y-2.5 text-[#1f241d]/75">
                    <li>Daily</li>
                    <li className="rounded-lg bg-white px-2 py-1 font-medium text-[#3f5a46] shadow-sm">
                      On attention
                    </li>
                    <li>People</li>
                    <li>Research</li>
                    <li>Projects</li>
                  </ul>
                </aside>
                <article className="p-5">
                  <p className="text-xs text-[#5b7a62]">Daily · 12 Aug</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                    On attention
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#1f241d]/70">
                    A second brain is not a dump. It is a place where a note
                    about sleep can find the letter you never sent, and the
                    project that still needs a quieter morning.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2 text-xs">
                    {["[[Sleep study]]", "[[Ada]]", "[[Q3 garden]]"].map((link) => (
                      <span
                        key={link}
                        className="rounded-full bg-[#5b7a62]/10 px-2.5 py-1 text-[#3f5a46]"
                      >
                        {link}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section id="product" className="grid gap-4 py-6 md:grid-cols-3">
            {[
              {
                t: "Capture in one gesture",
                d: "Inbox, daily page, or a blank note. Filing happens later, if it happens at all.",
              },
              {
                t: "Links that travel both ways",
                d: "Mention a note and Lumen builds the return path. Context accumulates without extra work.",
              },
              {
                t: "Search the feeling",
                d: "Find by phrase, person, or the shape of an old idea. The graph is there when words fail.",
              },
            ].map((item) => (
              <article
                key={item.t}
                className="rounded-3xl border border-[#1f241d]/8 bg-white p-6"
              >
                <h2 className="text-lg font-semibold">{item.t}</h2>
                <p className="mt-3 text-sm leading-7 text-[#1f241d]/60">{item.d}</p>
              </article>
            ))}
          </section>

          <section
            id="start"
            className="mt-8 mb-4 flex flex-col items-start justify-between gap-6 rounded-[28px] bg-[#1f241d] px-8 py-10 text-white md:flex-row md:items-center"
          >
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Keep a mind you can open on Monday.
              </h2>
              <p className="mt-2 max-w-xl text-white/60">
                Free for a personal vault. No feed, no public graph, no one
                reading over your shoulder.
              </p>
            </div>
            <button
              type="button"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-[#1f241d]"
            >
              Create your vault
            </button>
          </section>
        </main>
      </div>
    </div>
  );
}
