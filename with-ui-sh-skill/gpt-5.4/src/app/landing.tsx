import Link from "next/link";

const variants = [
  {
    href: "/1",
    number: "01",
    title: "Workspace",
    summary: "Straight product landing with a practical app preview.",
  },
  {
    href: "/2",
    number: "02",
    title: "Library",
    summary: "A cleaner, index-like direction focused on organization.",
  },
  {
    href: "/3",
    number: "03",
    title: "Desk",
    summary: "Dark desktop framing for heavier daily knowledge work.",
  },
  {
    href: "/4",
    number: "04",
    title: "Search",
    summary: "A retrieval-first version built around fast recall.",
  },
  {
    href: "/5",
    number: "05",
    title: "Review",
    summary: "A quieter landing page centered on daily and weekly review.",
  },
] as const;

function IterationNav({ active }: { active?: string }) {
  return (
    <header className="border-b border-black/10 bg-white/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-[#451a03]"
        >
          Commonplace
        </Link>
        <nav className="flex flex-wrap items-center gap-2 text-sm text-[#6b4f3c]">
          {variants.map((variant) => {
            const selected = active === variant.href;

            return (
              <Link
                key={variant.href}
                href={variant.href}
                className={`rounded-md border px-3 py-1.5 transition-colors ${
                  selected
                    ? "border-[#b45309] bg-[#b45309] text-white"
                    : "border-[#d7c8bb] bg-white hover:border-[#b45309]"
                }`}
              >
                {variant.number}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

function AppFrame({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-lg border ${
        dark
          ? "border-white/10 bg-[#232326] text-white"
          : "border-[#d7c8bb] bg-white text-[#2f241b]"
      }`}
    >
      {children}
    </div>
  );
}

function SectionHeading({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-3 text-base leading-7 text-[#6b4f3c]">{text}</p>
    </div>
  );
}

export function LandingIndex() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#451a03]">
      <IterationNav />
      <main className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 border-b border-[#dccfc4] pb-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Five landing-page directions for a note-taking second brain.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#6b4f3c]">
              Each route keeps the structure restrained and product-led. Open
              <span className="font-medium text-[#451a03]"> /1 </span>
              through
              <span className="font-medium text-[#451a03]"> /5 </span>
              to compare layouts, hierarchy, and product framing.
            </p>
          </div>
          <div className="rounded-lg border border-[#dccfc4] bg-white p-5">
            <p className="text-sm leading-6 text-[#6b4f3c]">
              Product:
              <span className="ml-2 font-medium text-[#451a03]">
                Commonplace
              </span>
            </p>
            <p className="mt-3 text-sm leading-6 text-[#6b4f3c]">
              Positioning:
              <span className="ml-2 font-medium text-[#451a03]">
                notes, links, highlights, and voice memos that stay connected
              </span>
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {variants.map((variant) => (
            <Link
              key={variant.href}
              href={variant.href}
              className="rounded-lg border border-[#dccfc4] bg-white p-6 transition-colors hover:border-[#b45309]"
            >
              <p className="text-sm font-medium text-[#8b5a2b]">
                {variant.number}
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                {variant.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#6b4f3c]">
                {variant.summary}
              </p>
              <p className="mt-6 text-sm font-medium text-[#451a03]">
                Open route
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export function LandingOne() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#451a03]">
      <IterationNav active="/1" />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <section className="grid gap-10 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Notes that keep their context.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#6b4f3c]">
              Commonplace stores quick thoughts, reading notes, meeting
              fragments, and saved links in one workspace. Search brings back
              the note and the notes around it, so your memory does not depend
              on folder names.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-md bg-[#b45309] px-4 py-2.5 text-sm font-medium text-white"
              >
                Start free
              </a>
              <a
                href="#details"
                className="rounded-md border border-[#d7c8bb] px-4 py-2.5 text-sm font-medium text-[#451a03]"
              >
                See how it works
              </a>
            </div>
            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Capture", "Text, links, voice, and screenshots"],
                ["Connect", "Backlinks and related notes stay visible"],
                ["Recall", "Search by idea, not exact wording"],
              ].map(([term, desc]) => (
                <div key={term} className="rounded-md border border-[#dccfc4] p-4">
                  <dt className="text-sm font-medium">{term}</dt>
                  <dd className="mt-2 text-sm leading-6 text-[#6b4f3c]">
                    {desc}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <AppFrame>
            <div className="grid min-h-[460px] grid-cols-[220px_1fr]">
              <aside className="border-r border-[#e7ddd3] bg-[#fffaf3] p-5">
                <div className="rounded-md border border-[#e7ddd3] bg-white px-3 py-2 text-sm text-[#6b4f3c]">
                  Search notes
                </div>
                <div className="mt-6 space-y-2 text-sm">
                  {[
                    "Daily notes",
                    "Reading highlights",
                    "Product ideas",
                    "Research",
                    "Voice memos",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className={`rounded-md px-3 py-2 ${
                        index === 1 ? "bg-white font-medium" : "text-[#6b4f3c]"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </aside>
              <div className="p-6">
                <div className="border-b border-[#e7ddd3] pb-4">
                  <h2 className="text-xl font-semibold tracking-tight">
                    Building a second brain that is still easy to use
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[#6b4f3c]">
                    Keep capture friction low. Every note should support links,
                    source references, and a short summary for future you.
                  </p>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-[1fr_220px]">
                  <div className="space-y-4 text-sm leading-7 text-[#3d2e21]">
                    <p>
                      The best note is the one you can trust later. Add context
                      while the idea is fresh, then let search and related notes
                      carry the rest.
                    </p>
                    <p>
                      Commonplace keeps each note close to its sources, open
                      questions, and connected projects.
                    </p>
                  </div>
                  <div className="rounded-md border border-[#e7ddd3] bg-[#fffaf3] p-4">
                    <p className="text-sm font-medium">Linked from</p>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-[#6b4f3c]">
                      <li>Weekly review</li>
                      <li>Book notes</li>
                      <li>Product strategy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AppFrame>
        </section>

        <section
          id="details"
          className="grid gap-8 border-t border-[#dccfc4] py-12 lg:grid-cols-3"
        >
          <SectionHeading
            title="Built for everyday knowledge work"
            text="The product framing stays close to actual note-taking behavior: quick capture, patient organization, and reliable retrieval."
          />
          <div className="rounded-md border border-[#dccfc4] bg-white p-6">
            <h3 className="text-lg font-semibold tracking-tight">
              Save before you lose it
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#6b4f3c]">
              Web clips, meeting takeaways, and unpolished thoughts land in the
              same inbox instead of scattering across apps.
            </p>
          </div>
          <div className="rounded-md border border-[#dccfc4] bg-white p-6">
            <h3 className="text-lg font-semibold tracking-tight">
              Find it with context
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#6b4f3c]">
              Search results show linked notes, recent edits, and original
              source material next to the match.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export function LandingTwo() {
  return (
    <div className="min-h-screen bg-[#f5f5f4] text-[#1c1917]">
      <IterationNav active="/2" />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <section className="grid gap-10 py-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-lg border border-[#ddd6ce] bg-[#fafaf9] p-6">
            <div className="rounded-md border border-[#e7e5e4] bg-white px-3 py-2 text-sm text-[#57534e]">
              Search people, topics, and notes
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-[220px_1fr]">
              <div className="space-y-2 text-sm">
                {[
                  "Inbox",
                  "Projects",
                  "Research",
                  "Quotes",
                  "Archive",
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-md border px-3 py-2 ${
                      index === 2
                        ? "border-[#d6d3d1] bg-white font-medium"
                        : "border-transparent text-[#57534e]"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="rounded-md border border-[#e7e5e4] bg-white p-5">
                <h2 className="text-lg font-semibold tracking-tight">
                  Research notes for long projects
                </h2>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-[#57534e]">
                  <li>Save source excerpts next to your own summary.</li>
                  <li>Turn one note into many linked working notes.</li>
                  <li>Keep open questions attached to the source material.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Keep notes like a library, not a pile.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#57534e]">
              Commonplace gives every note a stable home without forcing rigid
              structure too early. Start with an inbox, move notes into
              projects, and keep related material connected while your thinking
              changes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-md bg-[#57534e] px-4 py-2.5 text-sm font-medium text-white"
              >
                Try the workspace
              </a>
              <a
                href="#library-details"
                className="rounded-md border border-[#d6d3d1] px-4 py-2.5 text-sm font-medium"
              >
                View structure
              </a>
            </div>
          </div>
        </section>

        <section
          id="library-details"
          className="grid gap-6 border-t border-[#ddd6ce] py-12 lg:grid-cols-3"
        >
          <div className="rounded-md border border-[#ddd6ce] bg-white p-6">
            <h2 className="text-lg font-semibold tracking-tight">Capture</h2>
            <p className="mt-3 text-sm leading-6 text-[#57534e]">
              Notes accept rough input first. Clean them up later when the idea
              proves worth keeping.
            </p>
          </div>
          <div className="rounded-md border border-[#ddd6ce] bg-white p-6">
            <h2 className="text-lg font-semibold tracking-tight">Arrange</h2>
            <p className="mt-3 text-sm leading-6 text-[#57534e]">
              Move notes into projects and collections without breaking links or
              losing reference trails.
            </p>
          </div>
          <div className="rounded-md border border-[#ddd6ce] bg-white p-6">
            <h2 className="text-lg font-semibold tracking-tight">Revisit</h2>
            <p className="mt-3 text-sm leading-6 text-[#57534e]">
              Review pages surface recent work, stale notes, and unfinished
              questions that still matter.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export function LandingThree() {
  return (
    <div className="min-h-screen bg-[#18181b] text-[#fafafa]">
      <header className="border-b border-white/10 bg-[#18181b]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            Commonplace
          </Link>
          <nav className="flex flex-wrap items-center gap-2 text-sm text-white/70">
            {variants.map((variant) => {
              const selected = variant.href === "/3";

              return (
                <Link
                  key={variant.href}
                  href={variant.href}
                  className={`rounded-md border px-3 py-1.5 ${
                    selected
                      ? "border-[#14b8a6] bg-[#14b8a6] text-[#111827]"
                      : "border-white/15 hover:border-[#14b8a6]"
                  }`}
                >
                  {variant.number}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <section className="grid gap-10 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              A calmer desktop for serious note-taking.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#d4d4d8]">
              This direction frames Commonplace as the place where active work
              happens: source notes on one side, the working note in the middle,
              and linked ideas nearby when you need them.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-md bg-[#14b8a6] px-4 py-2.5 text-sm font-medium text-[#111827]"
              >
                Open the app
              </a>
              <a
                href="#desk-details"
                className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium"
              >
                Read the workflow
              </a>
            </div>
          </div>

          <AppFrame dark>
            <div className="border-b border-white/10 px-5 py-3 text-sm text-white/60">
              Tuesday workspace
            </div>
            <div className="grid min-h-[470px] grid-cols-[200px_1fr_220px]">
              <aside className="border-r border-white/10 bg-[#1f1f23] p-5 text-sm text-white/65">
                <div className="rounded-md border border-white/10 px-3 py-2">
                  Search
                </div>
                <div className="mt-5 space-y-2">
                  {["Today", "Ideas", "Sources", "Drafts", "Archive"].map(
                    (item, index) => (
                      <div
                        key={item}
                        className={`rounded-md px-3 py-2 ${
                          index === 0 ? "bg-white/8 text-white" : ""
                        }`}
                      >
                        {item}
                      </div>
                    ),
                  )}
                </div>
              </aside>
              <section className="p-6">
                <h2 className="text-xl font-semibold tracking-tight">
                  Designing a note system that gets reused
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-white/75">
                  <p>
                    The harder part is not capture. It is making yesterday&apos;s
                    notes useful next month.
                  </p>
                  <p>
                    Keep sources beside the working draft, pull in older notes
                    as references, and leave short summaries for the next pass.
                  </p>
                </div>
              </section>
              <aside className="border-l border-white/10 bg-[#1f1f23] p-5">
                <h3 className="text-sm font-medium text-white">Related</h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/65">
                  <li>Weekly review template</li>
                  <li>Book notes on retrieval</li>
                  <li>Research capture checklist</li>
                  <li>Open questions</li>
                </ul>
              </aside>
            </div>
          </AppFrame>
        </section>

        <section
          id="desk-details"
          className="grid gap-6 border-t border-white/10 py-12 lg:grid-cols-3"
        >
          <div className="rounded-md border border-white/10 bg-[#232326] p-6">
            <h2 className="text-lg font-semibold tracking-tight">Collect</h2>
            <p className="mt-3 text-sm leading-6 text-white/65">
              Save from browser, phone, or desktop without choosing the perfect
              destination first.
            </p>
          </div>
          <div className="rounded-md border border-white/10 bg-[#232326] p-6">
            <h2 className="text-lg font-semibold tracking-tight">Work</h2>
            <p className="mt-3 text-sm leading-6 text-white/65">
              Build project notes from smaller fragments instead of rewriting
              the same material from scratch.
            </p>
          </div>
          <div className="rounded-md border border-white/10 bg-[#232326] p-6">
            <h2 className="text-lg font-semibold tracking-tight">Review</h2>
            <p className="mt-3 text-sm leading-6 text-white/65">
              Revisit old notes through linked references and recent edits, not
              by drilling through folders.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export function LandingFour() {
  return (
    <div className="min-h-screen bg-[#fcfbf8] text-[#2c241d]">
      <IterationNav active="/4" />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <section className="grid gap-10 py-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Search is the front door.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#5f5347]">
              If a second brain fails at recall, the rest does not matter. This
              version puts retrieval first: search by wording, topic, source, or
              the person attached to a note, then move outward through related
              material.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-md bg-[#57534e] px-4 py-2.5 text-sm font-medium text-white"
              >
                Try search
              </a>
              <a
                href="#search-details"
                className="rounded-md border border-[#d6d3d1] px-4 py-2.5 text-sm font-medium"
              >
                Review examples
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-[#ddd6ce] bg-white p-5">
            <div className="rounded-md border border-[#ddd6ce] px-4 py-3 text-sm text-[#5f5347]">
              search: notes about spaced repetition from last month
            </div>
            <div className="mt-5 grid gap-4">
              {[
                [
                  "Designing a better review habit",
                  "Matched in title, body, and linked source notes.",
                ],
                [
                  "Reading notes from Make It Stick",
                  "Matched in highlights, summary, and follow-up tasks.",
                ],
                [
                  "Weekly review - March 11",
                  "Matched in references and open questions.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-md border border-[#e7e5e4] p-4"
                >
                  <h2 className="text-base font-semibold tracking-tight">
                    {title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#5f5347]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="search-details"
          className="grid gap-6 border-t border-[#ddd6ce] py-12 lg:grid-cols-[1fr_1fr_1fr]"
        >
          <div className="rounded-md border border-[#ddd6ce] bg-white p-6">
            <h2 className="text-lg font-semibold tracking-tight">
              Search by intent
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#5f5347]">
              Look for an idea even when you cannot remember the exact note
              title, folder, or date.
            </p>
          </div>
          <div className="rounded-md border border-[#ddd6ce] bg-white p-6">
            <h2 className="text-lg font-semibold tracking-tight">
              Keep the trail visible
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#5f5347]">
              Results show nearby notes, source links, and follow-up tasks so
              recall turns into action quickly.
            </p>
          </div>
          <div className="rounded-md border border-[#ddd6ce] bg-white p-6">
            <h2 className="text-lg font-semibold tracking-tight">
              Trust what you saved
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#5f5347]">
              Notes stay useful because context comes back with the match, not
              just the matched sentence.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export function LandingFive() {
  return (
    <div className="min-h-screen bg-[#fefce8] text-[#365314]">
      <IterationNav active="/5" />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <section className="grid gap-10 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight text-[#365314] sm:text-5xl">
              Build a second brain you will actually revisit.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#4d7c0f]">
              Commonplace is designed around the habit that matters most:
              returning to your notes. Daily notes, weekly reviews, and linked
              references keep older material in circulation instead of drifting
              into storage.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-md bg-[#65a30d] px-4 py-2.5 text-sm font-medium text-white"
              >
                Start writing
              </a>
              <a
                href="#review-details"
                className="rounded-md border border-[#d9f99d] px-4 py-2.5 text-sm font-medium text-[#365314]"
              >
                See the review loop
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-[#d9f99d] bg-[#fefce8] p-5">
            <div className="rounded-md border border-[#d9f99d] bg-white p-4">
              <h2 className="text-base font-semibold tracking-tight text-[#365314]">
                Today
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#4d7c0f]">
                <li>Capture loose ideas during the day.</li>
                <li>Pull one older note into current work.</li>
                <li>End with a short summary for tomorrow.</li>
              </ul>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-md border border-[#d9f99d] bg-white p-4">
                <h3 className="text-sm font-semibold text-[#365314]">
                  This week
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#4d7c0f]">
                  Surface unfinished threads and connect them to current work.
                </p>
              </div>
              <div className="rounded-md border border-[#d9f99d] bg-white p-4">
                <h3 className="text-sm font-semibold text-[#365314]">
                  This month
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#4d7c0f]">
                  Revisit projects that have gone quiet before they disappear.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="review-details"
          className="grid gap-6 border-t border-[#d9f99d] py-12 lg:grid-cols-3"
        >
          <div className="rounded-md border border-[#d9f99d] bg-white p-6">
            <h2 className="text-lg font-semibold tracking-tight text-[#365314]">
              Daily notes
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#4d7c0f]">
              Keep rough thinking in one place, then move durable material into
              longer-lived notes.
            </p>
          </div>
          <div className="rounded-md border border-[#d9f99d] bg-white p-6">
            <h2 className="text-lg font-semibold tracking-tight text-[#365314]">
              Weekly review
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#4d7c0f]">
              Bring back important notes, tidy the inbox, and link what should
              stay connected.
            </p>
          </div>
          <div className="rounded-md border border-[#d9f99d] bg-white p-6">
            <h2 className="text-lg font-semibold tracking-tight text-[#365314]">
              Long-term memory
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#4d7c0f]">
              Good notes become more useful as they collect context over time,
              not less.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
