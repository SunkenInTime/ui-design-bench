import type { JSX, ReactNode } from "react";

import type { DesignIterationId } from "@/lib/iterations";

function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.28em] ${className}`}
    >
      {children}
    </span>
  );
}

function CTAGroup({
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  primaryClassName,
  secondaryClassName,
}: {
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  primaryClassName: string;
  secondaryClassName: string;
}) {
  return (
    <div className="flex flex-wrap gap-4">
      <a
        href={primaryHref}
        className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${primaryClassName}`}
      >
        {primaryLabel}
      </a>
      <a
        href={secondaryHref}
        className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${secondaryClassName}`}
      >
        {secondaryLabel}
      </a>
    </div>
  );
}

function AtlasNoir() {
  const metrics = [
    { value: "4.2x", label: "faster idea retrieval" },
    { value: "26", label: "memory maps per project" },
    { value: "0 lost", label: "loose thoughts after capture" },
  ];

  const pillars = [
    {
      title: "Capture every spark",
      copy:
        "Drop half-formed thoughts, voice snippets, links, and scribbles into one intake stream.",
    },
    {
      title: "Watch patterns surface",
      copy:
        "Nerva threads notes into clusters, contradictions, and recurring themes you would miss alone.",
    },
    {
      title: "Build living systems",
      copy:
        "Turn fragments into research hubs, decision logs, and project briefs that stay current.",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-[#050816] text-[#f5f0e8]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-12rem] left-[-8rem] h-[26rem] w-[26rem] rounded-full bg-[#4f46e5]/30 blur-3xl" />
        <div className="absolute right-[-6rem] bottom-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#d97706]/18 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.1),_transparent_40%),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:auto,3.5rem_3.5rem,3.5rem_3.5rem] opacity-40" />
      </div>

      <section className="relative mx-auto grid min-h-screen max-w-7xl gap-16 px-6 py-24 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
        <div className="flex flex-col justify-center gap-8">
          <Eyebrow className="w-fit border-white/15 bg-white/5 text-white/72">
            Nerva / Iteration 01
          </Eyebrow>
          <div className="space-y-6">
            <h1 className="max-w-3xl text-5xl leading-[0.92] font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl [font-family:var(--font-display)]">
              A midnight map for everything your mind cannot hold.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[#c7c9d4] sm:text-xl">
              Nerva turns fleeting notes into a navigable second brain: a deep,
              cinematic workspace where ideas connect like constellations and
              insights stay alive instead of disappearing into folders.
            </p>
          </div>

          <CTAGroup
            primaryHref="#system"
            primaryLabel="Explore the memory system"
            secondaryHref="#proof"
            secondaryLabel="See what changes"
            primaryClassName="bg-[#f5f0e8] text-[#050816] hover:bg-white"
            secondaryClassName="border border-white/16 bg-white/6 text-white hover:bg-white/12"
          />

          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <article
                key={metric.label}
                className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5 backdrop-blur-sm"
              >
                <p className="text-3xl font-semibold text-white [font-family:var(--font-display)]">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/58">
                  {metric.label}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative flex min-h-[36rem] items-center justify-center">
          <div className="absolute h-80 w-80 rounded-full border border-white/10 bg-[radial-gradient(circle,_rgba(255,255,255,0.2),_rgba(255,255,255,0.02)_55%,_transparent_70%)] animate-pulse-slow" />
          <div className="absolute h-[26rem] w-[26rem] rounded-full border border-dashed border-white/12 animate-spin-slow" />

          <article className="absolute top-10 left-0 max-w-[14rem] rounded-[1.75rem] border border-white/10 bg-[#0f1734]/80 p-5 shadow-2xl shadow-black/25 animate-float">
            <p className="text-[0.66rem] uppercase tracking-[0.24em] text-[#f0b76d]">
              Capture
            </p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              One inbox for scattered thoughts.
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/66">
              Save voice notes, screenshots, meeting fragments, and raw ideas
              before they evaporate.
            </p>
          </article>

          <article className="absolute top-24 right-2 max-w-[13rem] rounded-[1.75rem] border border-white/10 bg-[#17112e]/85 p-5 shadow-2xl shadow-black/30 animate-float-delayed">
            <p className="text-[0.66rem] uppercase tracking-[0.24em] text-[#8aa5ff]">
              Connect
            </p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              Ideas link themselves.
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/66">
              Nerva spots echoes across projects, research threads, and personal
              notes.
            </p>
          </article>

          <article className="relative z-10 max-w-[17rem] rounded-[2rem] border border-white/12 bg-[#f5f0e8] p-6 text-[#090c16] shadow-[0_24px_120px_rgba(0,0,0,0.38)]">
            <div className="flex items-center justify-between text-[0.64rem] uppercase tracking-[0.28em] text-[#59564f]">
              <span>Current orbit</span>
              <span>08 linked notes</span>
            </div>
            <h2 className="mt-5 text-4xl leading-none font-semibold [font-family:var(--font-display)]">
              Second-brain homebase
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#4a4842]">
              Wake up to the exact context you need: open loops, related
              insights, and the next connection worth making.
            </p>
            <div className="mt-8 grid gap-3">
              {["Product intuition", "Reading threads", "Decision trail"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-black/8 bg-black/[0.03] px-4 py-3 text-sm font-medium"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </article>

          <article className="absolute bottom-10 left-6 max-w-[13rem] rounded-[1.75rem] border border-white/10 bg-[#102220]/85 p-5 shadow-2xl shadow-black/25 animate-float">
            <p className="text-[0.66rem] uppercase tracking-[0.24em] text-[#81e6d9]">
              Retrieve
            </p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              Ask a question. Land on the answer.
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/66">
              Surface the relevant thought, quote, or meeting moment without
              remembering where it lived.
            </p>
          </article>

          <article className="absolute right-0 bottom-16 max-w-[14rem] rounded-[1.75rem] border border-white/10 bg-[#28131b]/85 p-5 shadow-2xl shadow-black/30 animate-float-delayed">
            <p className="text-[0.66rem] uppercase tracking-[0.24em] text-[#f7a8b8]">
              Synthesize
            </p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              Turn fragments into clarity.
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/66">
              Summaries, outlines, and decision briefs stay grounded in your own
              notes.
            </p>
          </article>
        </div>
      </section>

      <section
        id="system"
        className="relative mx-auto grid max-w-7xl gap-8 px-6 pb-12 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-12"
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <Eyebrow className="border-white/12 bg-white/6 text-white/68">
            Why it sticks
          </Eyebrow>
          <div className="mt-6 space-y-5">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-[1.5rem] border border-white/8 bg-black/12 p-5"
              >
                <h3 className="text-2xl font-semibold text-white [font-family:var(--font-display)]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/66">
                  {pillar.copy}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div
          id="proof"
          className="rounded-[2rem] border border-white/10 bg-[#f5f0e8] p-8 text-[#0b1020]"
        >
          <Eyebrow className="border-black/10 bg-black/[0.04] text-black/62">
            What changes after week one
          </Eyebrow>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-[1.5rem] bg-black/[0.03] p-5">
              <p className="text-[0.66rem] uppercase tracking-[0.24em] text-black/45">
                Monday
              </p>
              <p className="mt-3 text-lg leading-8 text-black/72">
                Notes live in ten places. Important context disappears behind
                tabs, screenshots, and forgotten docs.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-black text-white p-5">
              <p className="text-[0.66rem] uppercase tracking-[0.24em] text-white/52">
                Friday
              </p>
              <p className="mt-3 text-lg leading-8 text-white/82">
                Your projects gain memory. Research, decisions, and next moves
                all resolve back to the same system.
              </p>
            </div>
          </div>
          <blockquote className="mt-8 max-w-3xl text-3xl leading-[1.2] tracking-[-0.03em] [font-family:var(--font-display)]">
            “It feels less like opening a notes app and more like stepping into
            the room where my thinking lives.”
          </blockquote>
        </div>
      </section>
    </main>
  );
}

function EditorialMemory() {
  const columns = [
    {
      title: "From fragments to feature stories",
      copy:
        "Nerva gathers highlights, field notes, and half-written ideas into editorial-grade project arcs.",
    },
    {
      title: "Context never leaves the page",
      copy:
        "Each summary carries source moments with it, so thinking stays grounded instead of vague.",
    },
    {
      title: "A second brain with taste",
      copy:
        "Elegant structure, human pacing, and just enough intelligence to sharpen the story without flattening it.",
    },
  ];

  return (
    <main className="bg-[#f6efe4] text-[#1d1813]">
      <section className="mx-auto min-h-screen max-w-7xl px-6 py-10 sm:px-10 lg:px-12">
        <header className="flex flex-wrap items-center justify-between gap-4 border-y border-black/12 py-4 text-[0.7rem] uppercase tracking-[0.28em] text-black/58">
          <span>Nerva review</span>
          <span>Iteration 02 / editorial memory</span>
          <span>Spring issue</span>
        </header>

        <div className="grid gap-10 py-10 lg:grid-cols-[0.22fr_0.5fr_0.28fr]">
          <aside className="flex flex-col justify-between gap-6 border-l border-black/10 pl-5">
            <div>
              <Eyebrow className="border-black/10 bg-[#e9dfd2] text-black/68">
                Second brain
              </Eyebrow>
              <p className="mt-6 text-sm leading-7 text-black/66">
                For thinkers, writers, researchers, and builders who want their
                notes to accumulate into perspective instead of clutter.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-[0.66rem] uppercase tracking-[0.24em] text-black/42">
                Quietly powerful
              </p>
              <div className="space-y-3 text-sm leading-7 text-black/68">
                <p>Capture in seconds.</p>
                <p>Retrieve with context.</p>
                <p>Publish from your own thinking.</p>
              </div>
            </div>
          </aside>

          <div>
            <p className="text-sm uppercase tracking-[0.34em] text-[#9d4e34]">
              Landing page study
            </p>
            <h1 className="mt-6 max-w-4xl text-6xl leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-[7.2rem] [font-family:var(--font-editorial)]">
              Your notes deserve better than a box at the bottom of the screen.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-black/68">
              Nerva treats memory like publishing. Every captured idea keeps its
              sources, joins a larger narrative, and becomes easier to return to
              when it matters.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#feature-columns"
                className="inline-flex rounded-full bg-[#1d1813] px-6 py-3 text-sm font-semibold text-[#f6efe4] transition hover:bg-black"
              >
                Read the feature
              </a>
              <a
                href="#editor-note"
                className="inline-flex rounded-full border border-black/12 px-6 py-3 text-sm font-semibold text-black transition hover:bg-black/4"
              >
                See the editor&apos;s note
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <article className="rounded-[2rem] border border-black/10 bg-[#fffaf4] p-6 shadow-[0_20px_60px_rgba(50,32,20,0.07)]">
              <p className="text-[0.66rem] uppercase tracking-[0.24em] text-black/42">
                Cover line
              </p>
              <p className="mt-4 text-3xl leading-tight [font-family:var(--font-display)]">
                “Finally, a notes app that helps me think in chapters.”
              </p>
              <p className="mt-6 text-sm leading-7 text-black/64">
                Structured capture, linked references, and page-level clarity
                for work that compounds.
              </p>
            </article>
            <article className="rounded-[2rem] bg-[#9d4e34] p-6 text-[#fff5ee]">
              <p className="text-[0.66rem] uppercase tracking-[0.24em] text-white/68">
                Featured metric
              </p>
              <p className="mt-3 text-5xl [font-family:var(--font-editorial)]">
                81%
              </p>
              <p className="mt-3 text-sm leading-7 text-white/82">
                of returning users say they remember where an idea came from,
                not just what it said.
              </p>
            </article>
          </div>
        </div>

        <section
          id="feature-columns"
          className="grid gap-8 border-t border-black/12 py-10 lg:grid-cols-3"
        >
          {columns.map((column, index) => (
            <article
              key={column.title}
              className="border-l border-black/10 pl-5"
            >
              <p className="text-[0.66rem] uppercase tracking-[0.24em] text-black/44">
                0{index + 1}
              </p>
              <h2 className="mt-4 text-4xl leading-tight [font-family:var(--font-editorial)]">
                {column.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-black/66">
                {column.copy}
              </p>
            </article>
          ))}
        </section>

        <section
          id="editor-note"
          className="grid gap-8 border-y border-black/12 py-10 lg:grid-cols-[0.36fr_0.64fr]"
        >
          <div className="space-y-3">
            <p className="text-[0.66rem] uppercase tracking-[0.24em] text-black/44">
              Editor&apos;s note
            </p>
            <p className="text-sm leading-7 text-black/66">
              Less dashboard, more desk. This direction frames Nerva as a place
              where ideas are refined, not merely stored.
            </p>
          </div>
          <blockquote className="text-4xl leading-[1.15] tracking-[-0.04em] sm:text-5xl [font-family:var(--font-editorial)]">
            Nerva turns your archive into an active publication: one that keeps
            editing itself toward clarity while preserving every source note
            that made the argument possible.
          </blockquote>
        </section>
      </section>
    </main>
  );
}

function SignalDesk() {
  const panels = [
    {
      heading: "Intake stream",
      detail: "Text, links, screenshots, voice. Everything lands in the same queue.",
    },
    {
      heading: "Relationship graph",
      detail: "Nerva identifies overlaps, contradictions, and repeated signals across work.",
    },
    {
      heading: "Action summaries",
      detail: "Daily wrap-ups turn memory into decisions instead of yet another archive.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#090d0c] px-4 py-4 text-[#d6f6df] sm:px-6 sm:py-6">
      <div className="mx-auto grid min-h-[calc(100vh-2rem)] max-w-7xl gap-4 rounded-[2rem] border border-[#20352c] bg-[#0d1411] p-4 shadow-[0_30px_120px_rgba(0,0,0,0.45)] lg:grid-cols-[0.9fr_1.1fr] lg:p-6">
        <section className="rounded-[1.75rem] border border-[#20352c] bg-[linear-gradient(180deg,#111916_0%,#0c120f_100%)] p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4 text-[0.66rem] uppercase tracking-[0.26em] text-[#74a282]">
            <span>Iteration 03</span>
            <span>Status: system armed</span>
          </div>
          <h1 className="mt-8 max-w-2xl text-5xl leading-[0.92] tracking-[-0.05em] text-[#ebfff0] sm:text-6xl lg:text-7xl [font-family:var(--font-display)]">
            Your second brain, tuned like an operations room.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#9fc3aa]">
            Built for teams and individuals who treat knowledge as a live
            system. Nerva captures everything, routes it intelligently, and
            makes the right thought available exactly when the work needs it.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#console"
              className="rounded-full border border-[#3d5d4b] bg-[#d6f6df] px-6 py-3 text-sm font-semibold text-[#09100d] transition hover:bg-white"
            >
              Open the signal flow
            </a>
            <a
              href="#panels"
              className="rounded-full border border-[#284233] px-6 py-3 text-sm font-semibold text-[#d6f6df] transition hover:bg-[#101915]"
            >
              Scan the modules
            </a>
          </div>

          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["247 ms", "average recall time"],
              ["12 streams", "merged into one feed"],
              ["99.1%", "signal retention"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-[1.25rem] border border-[#20352c] bg-[#0b120f] p-4"
              >
                <dt className="text-[0.62rem] uppercase tracking-[0.24em] text-[#6d9d7c]">
                  {label}
                </dt>
                <dd className="mt-3 text-3xl font-semibold text-[#ebfff0] [font-family:var(--font-mono)]">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="console" className="grid gap-4 lg:grid-rows-[auto_1fr]">
          <div className="rounded-[1.75rem] border border-[#20352c] bg-[#101915] p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#20352c] pb-4 text-[0.64rem] uppercase tracking-[0.24em] text-[#6d9d7c]">
              <span>Nerva command deck</span>
              <span>[ live memory routing ]</span>
            </div>
            <div className="mt-4 grid gap-4 lg:grid-cols-[0.58fr_0.42fr]">
              <div className="rounded-[1.5rem] border border-[#20352c] bg-black/20 p-4">
                <p className="text-[0.62rem] uppercase tracking-[0.24em] text-[#6d9d7c]">
                  Incoming feed
                </p>
                <div className="mt-4 space-y-3 font-medium [font-family:var(--font-mono)]">
                  {[
                    "meeting transcript -> product strategy",
                    "highlighted article -> pricing research",
                    "voice memo -> founder journal",
                    "screenshot dump -> design systems",
                  ].map((line) => (
                    <div
                      key={line}
                      className="rounded-xl border border-[#1d2d25] bg-[#0d1411] px-3 py-3 text-sm text-[#c7ead0]"
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-[#20352c] bg-[radial-gradient(circle_at_top,_rgba(135,255,189,0.16),_transparent_55%),#0b120f] p-4">
                <p className="text-[0.62rem] uppercase tracking-[0.24em] text-[#6d9d7c]">
                  Core verdict
                </p>
                <p className="mt-4 text-4xl leading-none text-[#ebfff0] [font-family:var(--font-display)]">
                  Useful memory, not passive storage.
                </p>
                <p className="mt-4 text-sm leading-7 text-[#9fc3aa]">
                  Every interaction points toward clarity: what matters, what
                  connects, and what the next move should be.
                </p>
              </div>
            </div>
          </div>

          <div id="panels" className="grid gap-4 lg:grid-cols-[0.52fr_0.48fr]">
            <div className="grid gap-4">
              {panels.map((panel, index) => (
                <article
                  key={panel.heading}
                  className="rounded-[1.5rem] border border-[#20352c] bg-[#101915] p-5"
                >
                  <p className="text-[0.62rem] uppercase tracking-[0.24em] text-[#6d9d7c]">
                    Module 0{index + 1}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-[#ebfff0]">
                    {panel.heading}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[#9fc3aa]">
                    {panel.detail}
                  </p>
                </article>
              ))}
            </div>
            <article className="rounded-[1.5rem] border border-[#20352c] bg-[#111916] p-5">
              <p className="text-[0.62rem] uppercase tracking-[0.24em] text-[#6d9d7c]">
                Operator note
              </p>
              <blockquote className="mt-4 text-3xl leading-[1.15] tracking-[-0.04em] text-[#ebfff0] [font-family:var(--font-display)]">
                Nerva gives your work a memory layer, so every future decision
                can start from signal instead of rework.
              </blockquote>
              <div className="mt-8 rounded-[1.5rem] border border-[#20352c] bg-black/20 p-4">
                <p className="text-[0.62rem] uppercase tracking-[0.24em] text-[#6d9d7c]">
                  Recommended for
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[#c7ead0]">
                  <li>Product teams synthesizing research across releases</li>
                  <li>Founders tracking decisions, context, and follow-ups</li>
                  <li>Researchers building cumulative understanding over time</li>
                </ul>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}

function QuietGarden() {
  const petals = [
    "Soft capture for ideas, links, and passing thoughts",
    "Gentle resurfacing of what matters right now",
    "Calm structure that grows with your life and work",
  ];

  return (
    <main className="relative overflow-hidden bg-[#f4efe7] text-[#2d2b24]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10rem] right-[-2rem] h-[24rem] w-[24rem] rounded-full bg-[#d9bda6]/55 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-[-4rem] h-[22rem] w-[22rem] rounded-full bg-[#c2d3b4]/50 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <Eyebrow className="border-[#d7c8b8] bg-white/60 text-[#685f56]">
              Iteration 04 / quiet garden
            </Eyebrow>
            <h1 className="mt-8 max-w-3xl text-5xl leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl [font-family:var(--font-editorial)]">
              A softer kind of second brain, made for remembering without the
              noise.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#60584f]">
              Nerva can be calm, tactile, and almost restorative. This direction
              frames the product as a warm archive where scattered thinking is
              tended carefully until it becomes usable again.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#garden-grid"
                className="rounded-full bg-[#2d2b24] px-6 py-3 text-sm font-semibold text-[#f6f1e8] transition hover:bg-black"
              >
                Walk the system
              </a>
              <a
                href="#garden-quote"
                className="rounded-full border border-[#cfbfae] bg-white/55 px-6 py-3 text-sm font-semibold text-[#3e372f] transition hover:bg-white"
              >
                Read the promise
              </a>
            </div>

            <ul className="mt-10 grid gap-4">
              {petals.map((petal) => (
                <li
                  key={petal}
                  className="flex items-center gap-4 rounded-[1.5rem] border border-[#e3d7ca] bg-white/55 px-5 py-4 shadow-[0_20px_50px_rgba(110,86,60,0.05)]"
                >
                  <span className="h-3 w-3 rounded-full bg-[#91a87d]" />
                  <span className="text-base leading-7 text-[#554d45]">
                    {petal}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[34rem]">
            <div className="absolute inset-x-10 top-8 h-64 rounded-[3rem] bg-white/55 blur-2xl" />
            <article className="absolute top-0 right-4 left-4 rounded-[2.5rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(248,241,232,0.78))] p-6 shadow-[0_30px_90px_rgba(118,95,71,0.13)] backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <p className="text-[0.66rem] uppercase tracking-[0.24em] text-[#7a6f62]">
                  Memory garden
                </p>
                <span className="rounded-full bg-[#ebe2d5] px-3 py-1 text-[0.62rem] uppercase tracking-[0.22em] text-[#73695f]">
                  12 live threads
                </span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] bg-[#f0e7dc] p-5">
                  <p className="text-sm uppercase tracking-[0.22em] text-[#8d6b53]">
                    This week
                  </p>
                  <h2 className="mt-3 text-3xl leading-tight [font-family:var(--font-display)]">
                    Research blooms when the right note returns at the right
                    moment.
                  </h2>
                </div>
                <div className="rounded-[1.75rem] bg-[#dfe7d5] p-5">
                  <p className="text-sm uppercase tracking-[0.22em] text-[#5d7352]">
                    Daily ritual
                  </p>
                  <p className="mt-3 text-base leading-7 text-[#41513a]">
                    Save, sort gently, revisit with context, and let ideas
                    mature instead of forcing instant order.
                  </p>
                </div>
              </div>
            </article>

            <article className="absolute bottom-0 left-0 w-[72%] rounded-[2.25rem] border border-white/70 bg-[#fff9f3]/90 p-6 shadow-[0_30px_90px_rgba(118,95,71,0.13)]">
              <p className="text-[0.66rem] uppercase tracking-[0.24em] text-[#7a6f62]">
                Why it feels different
              </p>
              <p className="mt-4 text-lg leading-8 text-[#5c544c]">
                This concept makes knowledge work feel more human. The product
                becomes a place to return to, not another interface to battle.
              </p>
            </article>

            <div className="absolute right-4 bottom-10 h-28 w-28 rounded-full border border-white/70 bg-[#d7e2ca]/80 shadow-[0_20px_70px_rgba(118,95,71,0.12)]" />
          </div>
        </div>

        <section
          id="garden-grid"
          className="mt-20 grid gap-6 lg:grid-cols-[0.34fr_0.33fr_0.33fr]"
        >
          {[
            "Capture what you feel before you know what it means.",
            "Return to notes through themes, not just folders.",
            "Let your archive become a source of steadiness.",
          ].map((copy, index) => (
            <article
              key={copy}
              className="rounded-[2rem] border border-[#e4d9cd] bg-white/60 p-6 backdrop-blur-sm"
            >
              <p className="text-[0.66rem] uppercase tracking-[0.24em] text-[#7a6f62]">
                Garden 0{index + 1}
              </p>
              <p className="mt-4 text-2xl leading-[1.2] [font-family:var(--font-display)]">
                {copy}
              </p>
            </article>
          ))}
        </section>

        <section
          id="garden-quote"
          className="mt-8 rounded-[2.5rem] border border-[#e4d9cd] bg-white/60 p-8 backdrop-blur-sm"
        >
          <blockquote className="max-w-4xl text-4xl leading-[1.15] tracking-[-0.04em] sm:text-5xl [font-family:var(--font-editorial)]">
            The best second brain does not shout. It quietly remembers, keeps
            your context alive, and hands it back the instant your work is ready
            for it.
          </blockquote>
        </section>
      </section>
    </main>
  );
}

function KineticRecall() {
  const cards = [
    {
      title: "Capture in the burst",
      copy: "Save thoughts fast before momentum breaks.",
      color: "bg-[#ff8a65] text-[#2a1731]",
    },
    {
      title: "Connect at speed",
      copy: "Find the thread between old notes and new moves.",
      color: "bg-[#ffd54f] text-[#1a1830]",
    },
    {
      title: "Ship with context",
      copy: "Turn a week of mess into a crisp point of view.",
      color: "bg-[#7ee0ff] text-[#10243f]",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#1518ff] text-white">
      <section className="relative mx-auto min-h-screen max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-[-10rem] left-[-8rem] h-[24rem] w-[24rem] rounded-full bg-[#ff8a65]/35 blur-3xl" />
          <div className="absolute right-[-6rem] bottom-[-12rem] h-[28rem] w-[28rem] rounded-full bg-[#7ee0ff]/28 blur-3xl" />
          <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:2.25rem_2.25rem]" />
        </div>

        <div className="relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <Eyebrow className="border-white/20 bg-white/10 text-white/78">
              Iteration 05 / kinetic recall
            </Eyebrow>
            <h1 className="mt-8 max-w-4xl text-5xl leading-[0.88] tracking-[-0.06em] sm:text-6xl lg:text-[6.8rem] [font-family:var(--font-display)]">
              Note-taking for brains that move faster than folders.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-white/78">
              Bright, playful, and high-energy. This concept makes Nerva feel
              like a creative accelerator: capture quickly, connect instantly,
              and jump back into flow with more context than you had before.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#kinetic-cards"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1518ff] transition hover:bg-[#f7f3eb]"
              >
                Jump into the loop
              </a>
              <a
                href="#kinetic-proof"
                className="rounded-full border border-white/24 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/18"
              >
                Why it works
              </a>
            </div>
          </div>

          <div className="relative min-h-[34rem]">
            <article className="absolute top-8 left-4 w-[62%] rotate-[-8deg] rounded-[2rem] bg-[#fff5ea] p-6 text-[#261a34] shadow-[0_30px_90px_rgba(0,0,0,0.24)]">
              <p className="text-[0.66rem] uppercase tracking-[0.24em] text-[#7a6075]">
                Today
              </p>
              <p className="mt-4 text-3xl leading-tight [font-family:var(--font-editorial)]">
                “Prototype flows better when I can see every thought that led to
                it.”
              </p>
            </article>
            <article className="absolute top-28 right-0 w-[58%] rotate-[8deg] rounded-[2rem] bg-[#ffd54f] p-6 text-[#1b1a31] shadow-[0_30px_90px_rgba(0,0,0,0.2)]">
              <p className="text-[0.66rem] uppercase tracking-[0.24em] text-black/46">
                Active note cluster
              </p>
              <p className="mt-4 text-lg leading-8">
                Interview quotes, bug patterns, roadmap hunches, launch copy.
                Nerva keeps the whole stack moving together.
              </p>
            </article>
            <article className="absolute bottom-0 left-12 w-[64%] rotate-[-4deg] rounded-[2rem] bg-[#7ee0ff] p-6 text-[#0e2440] shadow-[0_30px_90px_rgba(0,0,0,0.2)]">
              <p className="text-[0.66rem] uppercase tracking-[0.24em] text-[#184766]">
                Recall engine
              </p>
              <h2 className="mt-4 text-4xl leading-none [font-family:var(--font-display)]">
                Search less. Spark more.
              </h2>
            </article>
            <div className="absolute right-10 bottom-8 flex h-32 w-32 items-center justify-center rounded-full border-8 border-white/28 bg-[#ff8a65] text-center text-sm font-semibold uppercase tracking-[0.22em] text-[#2a1731] shadow-[0_30px_90px_rgba(0,0,0,0.2)]">
              Memory
              <br />
              loop
            </div>
          </div>
        </div>

        <section
          id="kinetic-cards"
          className="relative mt-16 grid gap-6 lg:grid-cols-3"
        >
          {cards.map((card) => (
            <article
              key={card.title}
              className={`rounded-[2rem] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.16)] ${card.color}`}
            >
              <p className="text-[0.66rem] uppercase tracking-[0.24em] opacity-70">
                Core move
              </p>
              <h2 className="mt-4 text-3xl leading-tight [font-family:var(--font-display)]">
                {card.title}
              </h2>
              <p className="mt-4 text-base leading-7 opacity-82">{card.copy}</p>
            </article>
          ))}
        </section>

        <section
          id="kinetic-proof"
          className="mt-8 grid gap-6 rounded-[2.5rem] border border-white/16 bg-white/10 p-8 backdrop-blur-sm lg:grid-cols-[0.42fr_0.58fr]"
        >
          <div>
            <p className="text-[0.66rem] uppercase tracking-[0.24em] text-white/60">
              Why this direction lands
            </p>
            <p className="mt-4 text-4xl leading-tight [font-family:var(--font-editorial)]">
              It sells speed without losing substance.
            </p>
          </div>
          <p className="text-lg leading-9 text-white/78">
            Kinetic Recall is built for creators and fast-moving teams who hate
            static organization. The interface feels like motion, but the
            product promise stays serious: every flash of input becomes usable
            memory instead of another loose end.
          </p>
        </section>
      </section>
    </main>
  );
}

const iterationMap: Record<DesignIterationId, () => JSX.Element> = {
  one: AtlasNoir,
  two: EditorialMemory,
  three: SignalDesk,
  four: QuietGarden,
  five: KineticRecall,
};

export function renderIteration(id: DesignIterationId) {
  const Iteration = iterationMap[id];
  return <Iteration />;
}
