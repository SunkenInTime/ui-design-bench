import Link from "next/link";

type VariantId = "one" | "two" | "three" | "four" | "five";

const variants: { id: VariantId; href: string; label: string; name: string }[] = [
  { id: "one", href: "/one", label: "1", name: "Desk" },
  { id: "two", href: "/two", label: "2", name: "Graph" },
  { id: "three", href: "/three", label: "3", name: "Archive" },
  { id: "four", href: "/four", label: "4", name: "Studio" },
  { id: "five", href: "/five", label: "5", name: "Pocket" },
];

export function LandingPage({ active }: { active: VariantId }) {
  return (
    <>
      {active === "one" && <DeskLanding />}
      {active === "two" && <GraphLanding />}
      {active === "three" && <ArchiveLanding />}
      {active === "four" && <StudioLanding />}
      {active === "five" && <PocketLanding />}
    </>
  );
}

function DeskLanding() {
  return (
    <main className="min-h-screen bg-[#f7f2e8] text-[#17150f]">
      <section className="relative overflow-hidden border-b border-[#d6c9ad]">
        <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-28 pt-8 sm:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-12">
          <header className="absolute left-6 right-6 top-6 mx-auto flex max-w-7xl items-center justify-between sm:left-10 sm:right-10 lg:left-12 lg:right-12">
            <Link href="/one" className="text-lg font-semibold">
              Cortex Notes
            </Link>
            <a
              href="#waitlist"
              className="rounded-full border border-[#17150f]/15 bg-white/55 px-4 py-2 text-sm font-semibold shadow-sm transition hover:bg-white"
            >
              Join waitlist
            </a>
          </header>

          <div className="pt-20">
            <p className="mb-5 inline-flex rounded-full border border-[#9b8151]/25 bg-[#fff9ea] px-4 py-2 text-sm font-semibold text-[#735b2b]">
              For thinkers with too many tabs open
            </p>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              Cortex Notes
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-8 text-[#5d5546]">
              A quiet second brain that turns scattered notes into connected
              context, memory trails, and next actions you can trust.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#waitlist"
                className="rounded-full bg-[#17150f] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#3b321f]"
              >
                Start building memory
              </a>
              <a
                href="#demo"
                className="rounded-full border border-[#17150f]/15 bg-white/50 px-6 py-3 text-center text-sm font-semibold text-[#17150f] transition hover:bg-white"
              >
                See workspace
              </a>
            </div>
          </div>

          <div
            id="demo"
            className="relative mx-auto w-full max-w-2xl rounded-[8px] border border-[#2c2418]/15 bg-[#fbfaf4] p-4 shadow-[0_30px_90px_rgba(61,43,19,0.24)]"
          >
            <div className="mb-4 flex h-10 items-center justify-between border-b border-[#ded3b9] pb-3">
              <div className="font-mono text-xs font-semibold uppercase text-[#8d7345]">
                today / research-memory
              </div>
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#d8694f]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#e6b45e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#4f9a7e]" />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_0.72fr]">
              <article className="min-h-[360px] rounded-[8px] bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase text-[#98773d]">
                  Active note
                </p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight">
                  Why recurring ideas deserve a home
                </h2>
                <p className="mt-4 leading-7 text-[#6b6254]">
                  The app clusters fragments by intent, resurfaces past
                  thinking at the right moment, and keeps every source attached
                  to the thought that used it.
                </p>
                <div className="mt-6 space-y-3">
                  {["Quote from Annals", "Meeting note", "Draft outline"].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between border-t border-[#eee5d2] pt-3 text-sm"
                      >
                        <span>{item}</span>
                        <span className="font-mono text-[#937240]">linked</span>
                      </div>
                    ),
                  )}
                </div>
              </article>
              <aside className="grid gap-4">
                <div className="rounded-[8px] bg-[#20251d] p-5 text-white">
                  <p className="text-xs font-semibold uppercase text-[#bcd087]">
                    Suggested trail
                  </p>
                  <p className="mt-4 text-2xl font-semibold leading-tight">
                    memory {">"} synthesis {">"} publish
                  </p>
                </div>
                <div className="rounded-[8px] bg-[#e8dcc2] p-5">
                  <p className="text-xs font-semibold uppercase text-[#6d5a32]">
                    Connected ideas
                  </p>
                  <div className="mt-5 h-36">
                    <GraphMini tone="warm" />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section
        id="waitlist"
        className="mx-auto grid max-w-7xl gap-6 px-6 py-16 sm:px-10 md:grid-cols-3 lg:px-12"
      >
        {["Capture without sorting", "Recall with receipts", "Write from a trail"].map(
          (feature) => (
            <div key={feature} className="border-t border-[#bfae89] pt-5">
              <h2 className="text-xl font-semibold">{feature}</h2>
              <p className="mt-3 leading-7 text-[#6a604f]">
                Cortex keeps the surface calm while the structure grows
                underneath every note, source, and decision.
              </p>
            </div>
          ),
        )}
      </section>
    </main>
  );
}

function GraphLanding() {
  return (
    <main className="min-h-screen bg-[#101112] text-[#f8f7f2]">
      <section className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-28 pt-8 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <header className="absolute left-6 right-6 top-6 mx-auto flex max-w-7xl items-center justify-between sm:left-10 sm:right-10 lg:left-12 lg:right-12">
          <Link href="/two" className="text-lg font-semibold">
            Cortex Notes
          </Link>
          <a
            href="#trial"
            className="rounded-full bg-[#e7ff62] px-4 py-2 text-sm font-semibold text-[#11120f] transition hover:bg-[#f3ff9d]"
          >
            Try beta
          </a>
        </header>

        <div className="pt-20">
          <p className="mb-5 inline-flex rounded-full border border-white/12 px-4 py-2 text-sm font-semibold text-[#e7ff62]">
            Graph-native notes for nonlinear work
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            Cortex Notes
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-8 text-[#c6c4bb]">
            Treat every idea as a living node. Cortex maps relationships,
            highlights tension, and lets your knowledge base answer back.
          </p>
          <div className="mt-8 grid max-w-md grid-cols-3 gap-3">
            {[
              ["24k", "nodes"],
              ["1.8s", "recall"],
              ["92%", "sources"],
            ].map(([value, label]) => (
              <div key={label} className="border-l border-white/15 pl-4">
                <div className="text-2xl font-semibold text-white">{value}</div>
                <div className="mt-1 text-xs font-semibold uppercase text-[#8f9189]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[560px] overflow-hidden rounded-[8px] border border-white/12 bg-[#17191b] shadow-[0_34px_100px_rgba(0,0,0,0.45)]">
          <div className="grid min-h-[560px] grid-cols-[0.56fr_1fr]">
            <aside className="border-r border-white/10 bg-[#121314] p-5">
              <div className="mb-6 font-mono text-xs font-semibold uppercase text-[#e7ff62]">
                semantic map
              </div>
              {["Signals", "Contradictions", "People", "Drafts"].map((item) => (
                <div
                  key={item}
                  className="mb-3 rounded-[8px] border border-white/8 bg-white/[0.03] px-3 py-3 text-sm text-[#dbdad3]"
                >
                  {item}
                </div>
              ))}
            </aside>
            <section className="relative p-6">
              <div className="absolute inset-6">
                <GraphField />
              </div>
              <div className="relative ml-auto max-w-xs rounded-[8px] border border-[#e7ff62]/35 bg-[#11120f]/88 p-5 shadow-2xl backdrop-blur">
                <p className="text-xs font-semibold uppercase text-[#e7ff62]">
                  Cortex found
                </p>
                <h2 className="mt-4 text-2xl font-semibold leading-tight">
                  Three notes that change this conclusion.
                </h2>
                <p className="mt-4 leading-6 text-[#c8c7bf]">
                  Open the opposing source trail, compare the meeting summary,
                  and revise the draft from the same view.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section
        id="trial"
        className="border-t border-white/10 bg-[#e9eee2] px-6 py-16 text-[#161712] sm:px-10 lg:px-12"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-xl text-4xl font-semibold leading-tight">
            Follow the shape of your thinking, not the shape of a folder tree.
          </h2>
          <a
            href="mailto:beta@cortex.example"
            className="rounded-full bg-[#101112] px-6 py-3 text-center text-sm font-semibold text-white"
          >
            Request access
          </a>
        </div>
      </section>
    </main>
  );
}

function ArchiveLanding() {
  return (
    <main className="min-h-screen bg-[#ebe8df] text-[#211f1a]">
      <section className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-28 pt-8 sm:px-10 lg:grid-cols-[1fr_0.95fr] lg:px-12">
        <header className="absolute left-6 right-6 top-6 mx-auto flex max-w-7xl items-center justify-between sm:left-10 sm:right-10 lg:left-12 lg:right-12">
          <Link href="/three" className="text-lg font-semibold">
            Cortex Notes
          </Link>
          <a
            href="#collections"
            className="rounded-full border border-[#211f1a]/20 bg-[#f8f5eb] px-4 py-2 text-sm font-semibold transition hover:bg-white"
          >
            Browse system
          </a>
        </header>

        <div className="pt-20">
          <p className="mb-5 inline-flex rounded-full bg-[#355e5b] px-4 py-2 text-sm font-semibold text-white">
            A personal archive that stays alive
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            Cortex Notes
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-8 text-[#625e52]">
            Save the source, the quote, the thought, and the decision in one
            durable place. Cortex gives your past work a reading room.
          </p>
        </div>

        <div className="overflow-hidden rounded-[8px] border border-[#28251f]/15 bg-[#f8f5eb] shadow-[0_28px_80px_rgba(61,55,42,0.24)]">
          <div className="border-b border-[#d9d1bc] px-5 py-4">
            <div className="font-mono text-xs font-semibold uppercase text-[#7b6d4d]">
              library / permanence
            </div>
          </div>
          <div className="grid md:grid-cols-[0.82fr_1fr]">
            <aside className="border-r border-[#d9d1bc] p-5">
              {["Essays", "Highlights", "People", "Decisions", "Questions"].map(
                (item, index) => (
                  <div
                    key={item}
                    className={[
                      "mb-3 flex items-center justify-between rounded-[8px] px-3 py-3 text-sm",
                      index === 1
                        ? "bg-[#355e5b] text-white"
                        : "bg-[#eee8d8] text-[#4e483b]",
                    ].join(" ")}
                  >
                    <span>{item}</span>
                    <span className="font-mono">{index * 18 + 42}</span>
                  </div>
                ),
              )}
            </aside>
            <section className="p-6">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase text-[#8c7746]">
                    saved source
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight">
                    How ideas become infrastructure
                  </h2>
                </div>
                <span className="rounded-full bg-[#f0c45d] px-3 py-1 text-xs font-semibold">
                  cited
                </span>
              </div>
              <div className="space-y-4 leading-7 text-[#5c5547]">
                <p>
                  Highlighted paragraphs are stored beside the note they
                  inspired, so synthesis never loses the path back to evidence.
                </p>
                <p>
                  Related authors, projects, and decisions appear as shelves
                  instead of search results.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {["source", "idea", "draft"].map((item) => (
                  <div
                    key={item}
                    className="min-h-24 rounded-[8px] border border-[#d9d1bc] bg-white/55 p-3 text-sm font-semibold"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <section
        id="collections"
        className="border-t border-[#d0c6ae] bg-[#2b302d] px-6 py-16 text-white sm:px-10 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {["Sources", "Clippings", "Daily logs", "Long projects"].map((item) => (
            <div key={item} className="border-t border-white/20 pt-5">
              <h2 className="text-xl font-semibold">{item}</h2>
              <p className="mt-3 leading-7 text-[#cdd2ca]">
                Structured enough to retrieve, loose enough to keep thinking.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function StudioLanding() {
  return (
    <main className="min-h-screen bg-[#f6f7f8] text-[#111827]">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-28 pt-8 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between">
          <Link href="/four" className="text-lg font-semibold">
            Cortex Notes
          </Link>
          <a
            href="#teams"
            className="rounded-full bg-[#2557d6] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1944aa]"
          >
            Book demo
          </a>
        </header>

        <div className="grid flex-1 grid-cols-1 items-center gap-10 py-16 lg:grid-cols-[0.84fr_1.16fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-[#2557d6]/20 bg-[#eaf0ff] px-4 py-2 text-sm font-semibold text-[#2557d6]">
              Team memory without the wiki tax
            </p>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              Cortex Notes
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-8 text-[#5b6472]">
              A second brain for teams that captures decisions, summarizes
              messy threads, and keeps project context ready for the next move.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#teams"
                className="rounded-full bg-[#111827] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#293241]"
              >
                Build team memory
              </a>
              <a
                href="#workflow"
                className="rounded-full border border-[#111827]/15 bg-white px-6 py-3 text-center text-sm font-semibold text-[#111827] transition hover:bg-[#eef2f7]"
              >
                View workflow
              </a>
            </div>
          </div>

          <div
            id="workflow"
            className="rounded-[8px] border border-[#dbe0e7] bg-white shadow-[0_28px_70px_rgba(17,24,39,0.14)]"
          >
            <div className="grid min-h-[540px] grid-cols-[0.34fr_0.66fr]">
              <aside className="border-r border-[#e4e8ee] p-4">
                <div className="mb-4 rounded-[8px] bg-[#111827] px-3 py-3 text-sm font-semibold text-white">
                  Product OS
                </div>
                {["Roadmap", "Research", "Changelog", "Risks"].map((item) => (
                  <div key={item} className="mb-2 px-3 py-2 text-sm text-[#687386]">
                    {item}
                  </div>
                ))}
              </aside>
              <section className="p-5">
                <div className="mb-5 flex flex-col justify-between gap-4 border-b border-[#e4e8ee] pb-5 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-xs font-semibold uppercase text-[#2557d6]">
                      launch review
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold">
                      Decision brief
                    </h2>
                  </div>
                  <span className="rounded-full bg-[#dff7ea] px-3 py-1 text-xs font-semibold text-[#177245]">
                    synced
                  </span>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    ["What changed", "Pricing moved after customer interviews."],
                    ["Why it matters", "Activation now depends on import speed."],
                    ["Open risk", "Enterprise notes need retention controls."],
                    ["Next action", "Ship import audit by Friday."],
                  ].map(([title, body]) => (
                    <article
                      key={title}
                      className="min-h-36 rounded-[8px] border border-[#e4e8ee] p-4"
                    >
                      <h3 className="font-semibold">{title}</h3>
                      <p className="mt-3 leading-6 text-[#5d6675]">{body}</p>
                    </article>
                  ))}
                </div>
                <div className="mt-5 rounded-[8px] bg-[#fff4db] p-4">
                  <p className="text-sm font-semibold text-[#7d5513]">
                    Cortex linked this brief to 11 calls, 3 docs, and 2 prior
                    decisions.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section
        id="teams"
        className="border-t border-[#dbe0e7] bg-white px-6 py-16 sm:px-10 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {["Meetings become memory", "Docs stay connected", "Search gets context"].map(
            (item) => (
              <div key={item} className="border-t border-[#dbe0e7] pt-5">
                <h2 className="text-xl font-semibold">{item}</h2>
                <p className="mt-3 leading-7 text-[#5d6675]">
                  Keep the work moving without asking everyone to maintain a
                  perfect knowledge base.
                </p>
              </div>
            ),
          )}
        </div>
      </section>
    </main>
  );
}

function PocketLanding() {
  return (
    <main className="min-h-screen bg-[#f4fbf8] text-[#10201c]">
      <section className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-28 pt-8 sm:px-10 lg:grid-cols-[1fr_0.86fr] lg:px-12">
        <header className="absolute left-6 right-6 top-6 mx-auto flex max-w-7xl items-center justify-between sm:left-10 sm:right-10 lg:left-12 lg:right-12">
          <Link href="/five" className="text-lg font-semibold">
            Cortex Notes
          </Link>
          <a
            href="#mobile"
            className="rounded-full bg-[#ef6f4d] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#d65d3f]"
          >
            Get app
          </a>
        </header>

        <div className="pt-20">
          <p className="mb-5 inline-flex rounded-full bg-[#d9f2ea] px-4 py-2 text-sm font-semibold text-[#1d6f5c]">
            Your second brain, always within reach
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            Cortex Notes
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-8 text-[#536862]">
            Capture tiny sparks on the move, then return to a clean daily brief
            that connects them to projects, people, and promises.
          </p>
          <form className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="h-12 min-w-0 flex-1 rounded-full border border-[#b8d8cf] bg-white px-5 text-sm outline-none transition focus:border-[#ef6f4d]"
            />
            <button
              type="submit"
              className="h-12 rounded-full bg-[#10201c] px-6 text-sm font-semibold text-white transition hover:bg-[#25413a]"
            >
              Send invite
            </button>
          </form>
        </div>

        <div
          id="mobile"
          className="mx-auto w-full max-w-sm rounded-[36px] border-[10px] border-[#10201c] bg-[#10201c] shadow-[0_34px_80px_rgba(16,32,28,0.28)]"
        >
          <div className="min-h-[640px] overflow-hidden rounded-[26px] bg-[#f9fffc]">
            <div className="flex items-center justify-between border-b border-[#d9ece7] px-5 py-4">
              <span className="font-semibold">Today</span>
              <span className="rounded-full bg-[#d9f2ea] px-3 py-1 text-xs font-semibold text-[#1d6f5c]">
                7 links
              </span>
            </div>
            <div className="p-5">
              <div className="rounded-[8px] bg-[#10201c] p-5 text-white">
                <p className="text-xs font-semibold uppercase text-[#98ddc9]">
                  morning brief
                </p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight">
                  Your notes point to one unfinished promise.
                </h2>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  ["Voice memo", "Idea for onboarding checklist"],
                  ["Book highlight", "Memory works through repetition"],
                  ["Meeting", "Follow up with Nina"],
                  ["Photo note", "Whiteboard from strategy review"],
                ].map(([title, body]) => (
                  <article
                    key={title}
                    className="rounded-[8px] border border-[#d9ece7] bg-white p-4"
                  >
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#5b6f69]">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function GraphMini({ tone }: { tone: "warm" }) {
  const colors =
    tone === "warm"
      ? ["bg-[#355e5b]", "bg-[#c16f4f]", "bg-[#d5aa49]", "bg-[#1f2421]"]
      : [];

  return (
    <div className="relative h-full w-full">
      <span className="absolute left-[12%] top-[44%] h-px w-[64%] rotate-[-12deg] bg-[#8f7d58]" />
      <span className="absolute left-[34%] top-[18%] h-px w-[42%] rotate-[38deg] bg-[#8f7d58]" />
      <span className="absolute left-[28%] top-[70%] h-px w-[48%] rotate-[-45deg] bg-[#8f7d58]" />
      {[
        "left-[8%] top-[38%]",
        "left-[38%] top-[12%]",
        "left-[70%] top-[34%]",
        "left-[48%] top-[68%]",
      ].map((position, index) => (
        <span
          key={position}
          className={`absolute h-8 w-8 rounded-full ${position} ${colors[index]} shadow-sm`}
        />
      ))}
    </div>
  );
}

function GraphField() {
  const nodes = [
    "left-[10%] top-[18%] h-20 w-20 bg-[#e7ff62] text-[#11120f]",
    "left-[44%] top-[9%] h-14 w-14 bg-[#ff765f] text-white",
    "left-[72%] top-[26%] h-24 w-24 bg-[#f8f7f2] text-[#11120f]",
    "left-[20%] top-[62%] h-16 w-16 bg-[#5edbd3] text-[#11120f]",
    "left-[56%] top-[68%] h-18 w-18 bg-[#2c2f34] text-white",
  ];

  return (
    <div className="relative h-full w-full overflow-hidden">
      <span className="absolute left-[19%] top-[28%] h-px w-[35%] rotate-[-10deg] bg-white/18" />
      <span className="absolute left-[50%] top-[20%] h-px w-[34%] rotate-[28deg] bg-white/18" />
      <span className="absolute left-[28%] top-[64%] h-px w-[34%] rotate-[10deg] bg-white/18" />
      <span className="absolute left-[33%] top-[36%] h-px w-[42%] rotate-[48deg] bg-white/18" />
      {nodes.map((classes, index) => (
        <span
          key={classes}
          className={`absolute flex items-center justify-center rounded-full text-xs font-bold shadow-[0_18px_36px_rgba(0,0,0,0.32)] ${classes}`}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
}
