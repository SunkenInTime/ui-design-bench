import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "03 Quiet — Marrow",
  description:
    "A note-taking app that stays out of the way. Marrow is a second brain built for deep, uninterrupted thinking.",
};

const BACKLINKS = [
  {
    title: "On writing as thinking",
    note: "I keep coming back to the idea that the draft is the thought…",
  },
  {
    title: "Weekly review — March 3",
    note: "Marrow resurfaced the Gödel note today. Coincidence?…",
  },
  {
    title: "Reading list, Q1",
    note: "Add a note about commonplace books and memory palaces…",
  },
];

const PRINCIPLES = [
  {
    n: "i",
    title: "One page at a time",
    body: "Marrow opens to a single page. No sidebar of competing projects, no unread badges, no infinite sidebar. The page in front of you is the only page that exists.",
  },
  {
    n: "ii",
    title: "Plain text underneath",
    body: "Everything is Markdown on your disk. Open it in any editor. Version it with git. The app is a lens, not a vault — your words never live only inside Marrow.",
  },
  {
    n: "iii",
    title: "A gentle second memory",
    body: "Each morning, one forgotten note appears at the bottom of today's page. Read it, keep it, or dismiss it. That's the entire system.",
  },
];

export default function VariantThree() {
  return (
    <div className="ui min-h-screen bg-[#fafaf8] text-[#3a3a38]">
      {/* top bar */}
      <header className="sticky top-0 z-40 border-b border-[#e7e5e0] bg-[#fafaf8]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-3">
          <a href="#" className="flex items-center gap-2 text-[13px] font-medium text-[#2a2a28]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#c9a227]" />
            Marrow
          </a>
          <div className="flex items-center gap-5 text-[12px] text-[#8a8a84]">
            <a href="#note" className="transition-colors hover:text-[#2a2a28]">
              The page
            </a>
            <a href="#principles" className="transition-colors hover:text-[#2a2a28]">
              Principles
            </a>
            <a
              href="#get"
              className="rounded-full border border-[#ddd9d0] px-3.5 py-1 text-[11px] text-[#2a2a28] transition-colors hover:border-[#2a2a28] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a227]"
            >
              Get Marrow
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* the note itself IS the hero */}
        <article id="note" className="mx-auto max-w-3xl px-5 pt-14 pb-10 md:pt-24">
          {/* note metadata */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-[#a0a098]">
            <span className="mono">2026-03-12 · 09:14</span>
            <span className="h-3 w-px bg-[#e0ddd6]" />
            <span className="rounded-full bg-[#f3f1ea] px-2 py-0.5 text-[#8a8a84]">
              #essay
            </span>
            <span className="rounded-full bg-[#f3f1ea] px-2 py-0.5 text-[#8a8a84]">
              #memory
            </span>
            <span className="h-3 w-px bg-[#e0ddd6]" />
            <span className="mono text-[#c9a227]">3 backlinks</span>
          </div>

          <h1 className="serif mt-8 text-4xl leading-[1.15] tracking-[-0.01em] text-[#1f1f1d] md:text-5xl">
            A second brain should
            <br />
            feel like{" "}
            <span className="bg-[linear-gradient(transparent_78%,#f5e8a8_78%)]">
              one quiet room
            </span>
            .
          </h1>

          <div className="serif mt-8 space-y-5 text-[1.0625rem] leading-[1.75] text-[#4a4a46]">
            <p>
              Most note apps ask you to organize first and think second. Folders,
              tags, templates, databases — a filing cabinet you have to build
              before you can write a single sentence. Marrow inverts that.
            </p>
            <p>
              You open it and there is a page. You type. When you mention another
              note, Marrow quietly draws the link behind the scenes. Weeks later,
              that link is waiting for you when you least expect it.
            </p>
            <p className="text-[#2a2a28]">
              The goal is not more features. The goal is fewer decisions between
              a thought and the page.
            </p>
          </div>

          {/* backlinks panel — the signature device */}
          <aside className="mt-12 border-l-2 border-[#c9a227]/40 pl-5">
            <p className="mono text-[10px] uppercase tracking-[0.2em] text-[#a0a098]">
              Linked mentions
            </p>
            <ul className="mt-4 space-y-3">
              {BACKLINKS.map((b) => (
                <li key={b.title}>
                  <a
                    href="#"
                    className="group block rounded-r-md py-1.5 pr-3 transition-colors hover:bg-[#f6f4ee] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a227]"
                  >
                    <span className="text-[13px] font-medium text-[#2a2a28] underline decoration-[#c9a227]/40 decoration-1 underline-offset-3 group-hover:decoration-[#c9a227]">
                      {b.title}
                    </span>
                    <span className="mt-0.5 block text-[12px] leading-snug text-[#8a8a84]">
                      {b.note}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </article>

        {/* principles */}
        <section
          id="principles"
          className="border-t border-[#ebe9e2] bg-[#f6f5f1]"
        >
          <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
            <p className="mono text-[10px] uppercase tracking-[0.22em] text-[#a0a098]">
              Three quiet principles
            </p>
            <div className="mt-10 divide-y divide-[#e4e1d8] border-y border-[#e4e1d8]">
              {PRINCIPLES.map((p) => (
                <div key={p.n} className="grid gap-3 py-8 md:grid-cols-12 md:gap-8">
                  <span className="serif text-lg italic text-[#c9a227] md:col-span-2">
                    {p.n}.
                  </span>
                  <div className="md:col-span-10">
                    <h2 className="serif text-2xl leading-snug text-[#1f1f1d]">
                      {p.title}
                    </h2>
                    <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-[#5a5a54]">
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="get" className="mx-auto max-w-3xl px-5 py-16 text-center md:py-24">
          <h2 className="serif text-3xl leading-snug text-[#1f1f1d] md:text-[2.5rem]">
            Open a page.
            <br />
            That&rsquo;s the whole onboarding.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#7a7a74]">
            Marrow is free for personal notes. No account, no cloud required —
            your first page starts the moment you open the app.
          </p>
          <a
            href="#"
            className="mt-9 inline-flex h-11 items-center justify-center rounded-full bg-[#1f1f1d] px-7 text-[13px] font-medium text-[#fafaf8] transition-colors hover:bg-[#c9a227] hover:text-[#1f1f1d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a227]"
          >
            Download for Mac &amp; Windows
          </a>
          <p className="mono mt-5 text-[10px] uppercase tracking-[0.16em] text-[#b0b0a8]">
            Also on iOS and Linux &nbsp;·&nbsp; v1.4.0
          </p>
        </section>
      </main>

      <footer className="border-t border-[#ebe9e2] px-5 py-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-2 text-[11px] text-[#a0a098] sm:flex-row">
          <span>Marrow &copy; 2026</span>
          <span className="mono">plain text · local-first · quiet</span>
        </div>
      </footer>
    </div>
  );
}
