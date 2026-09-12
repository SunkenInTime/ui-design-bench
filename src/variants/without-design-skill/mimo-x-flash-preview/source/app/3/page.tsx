/* eslint-disable @next/next/no-html-link-for-pages -- Preserve native source navigation with gallery-scoped URLs. */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loci — Swiss",
  description: "A precise second-brain instrument: grid, graph, daily review.",
};

const modules = [
  {
    id: "01",
    title: "Capture",
    body: "One inbox. Fast notes. No folder tax on day one.",
  },
  {
    id: "02",
    title: "Structure",
    body: "Links and rooms form automatically as your practice settles.",
  },
  {
    id: "03",
    title: "Recall",
    body: "Search returns context: the note, its neighbors, and the path.",
  },
  {
    id: "04",
    title: "Review",
    body: "A short daily pass. Surface what is cold before it is lost.",
  },
];

export default function SwissPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#0A0A0A]">
      <header className="border-b border-[#E4E4E7]">
        <div className="mx-auto grid max-w-6xl grid-cols-12 items-center gap-4 px-6 py-5">
          <a href="/without-design-skill/mimo-x-flash-preview/3" className="col-span-4 text-lg font-semibold tracking-tight sm:col-span-2">
            Loci
          </a>
          <nav className="col-span-8 hidden gap-6 text-sm text-[#52525B] sm:col-span-6 sm:flex">
            <a href="#system" className="hover:text-[#0A0A0A]">System</a>
            <a href="#graph" className="hover:text-[#0A0A0A]">Graph</a>
            <a href="#method" className="hover:text-[#0A0A0A]">Method</a>
          </nav>
          <div className="col-span-12 sm:col-span-4 sm:justify-self-end">
            <a
              href="#cta"
              className="inline-flex h-10 items-center bg-[#2563EB] px-4 text-sm font-medium text-white transition-colors hover:bg-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
            >
              Start free
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="border-b border-[#E4E4E7]">
          <div className="mx-auto grid max-w-6xl grid-cols-12 gap-4 px-6 pt-16 pb-20">
            <div className="col-span-12 lg:col-span-8">
              <p className="text-xs font-medium tracking-[0.18em] text-[#A1A1AA] uppercase">
                Second brain · Instrument panel
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl md:text-7xl">
                Organize thought the way you organize space.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#3F3F46]">
                Loci is a note-taking system built for structure without
                stiffness. Capture in the open, let links form a graph, and
                retrieve with the precision of a well-labeled drawer.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#cta"
                  className="inline-flex h-11 items-center bg-[#0A0A0A] px-5 text-sm font-medium text-white transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                >
                  Create your palace
                </a>
                <a
                  href="#system"
                  className="inline-flex h-11 items-center border border-[#D4D4D8] px-5 text-sm font-medium transition-colors hover:bg-[#F4F4F5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                >
                  See the system
                </a>
              </div>
            </div>
            <aside className="col-span-12 lg:col-span-4">
              <div className="border border-[#E4E4E7] bg-white">
                <div className="border-b border-[#E4E4E7] px-4 py-3 text-xs font-medium tracking-[0.12em] text-[#A1A1AA] uppercase">
                  Status
                </div>
                <dl className="divide-y divide-[#F4F4F5] text-sm">
                  {[
                    ["Rooms", "12"],
                    ["Links", "48"],
                    ["Open captures", "3"],
                    ["Review queue", "7"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between px-4 py-3">
                      <dt className="text-[#52525B]">{k}</dt>
                      <dd className="font-medium tabular-nums">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </section>

        <section id="system" className="border-b border-[#E4E4E7]">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid grid-cols-12 gap-4">
              <h2 className="col-span-12 text-sm font-medium tracking-[0.18em] text-[#A1A1AA] uppercase md:col-span-3">
                01 — System
              </h2>
              <p className="col-span-12 max-w-2xl text-2xl font-medium tracking-tight md:col-span-9 md:text-3xl">
                Four operations. No ceremony between them.
              </p>
            </div>
            <div className="mt-10 grid gap-px bg-[#E4E4E7] sm:grid-cols-2 lg:grid-cols-4">
              {modules.map((m) => (
                <article key={m.id} className="bg-[#FAFAF9] p-6">
                  <p className="text-xs font-medium text-[#2563EB]">{m.id}</p>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight">{m.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#52525B]">{m.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="graph" className="border-b border-[#E4E4E7]">
          <div className="mx-auto grid max-w-6xl grid-cols-12 gap-8 px-6 py-16">
            <div className="col-span-12 lg:col-span-5">
              <p className="text-sm font-medium tracking-[0.18em] text-[#A1A1AA] uppercase">
                02 — Graph
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                A map of what you actually think.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#3F3F46]">
                Every link is an edge. Every room is a node. The graph is not a
                decoration—it is how Loci answers “what else touches this idea?”
              </p>
              <ul className="mt-8 space-y-3 text-sm text-[#3F3F46]">
                <li className="flex gap-3">
                  <span className="text-[#2563EB]">01</span> Bidirectional by default
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2563EB]">02</span> Orphan detection when a note goes cold
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2563EB]">03</span> Path recall across long chains
                </li>
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <div className="border border-[#E4E4E7] bg-white p-4">
                <svg viewBox="0 0 560 320" className="h-auto w-full" role="img" aria-label="Abstract knowledge graph with connected nodes">
                  <rect width="560" height="320" fill="#FAFAF9" />
                  <g stroke="#D4D4D8" strokeWidth="1">
                    <line x1="120" y1="80" x2="280" y2="140" />
                    <line x1="280" y1="140" x2="420" y2="90" />
                    <line x1="280" y1="140" x2="200" y2="240" />
                    <line x1="280" y1="140" x2="400" y2="220" />
                    <line x1="200" y1="240" x2="400" y2="220" />
                    <line x1="120" y1="80" x2="200" y2="240" />
                    <line x1="420" y1="90" x2="400" y2="220" />
                  </g>
                  <g fill="#FAFAF9" stroke="#0A0A0A" strokeWidth="2">
                    <circle cx="120" cy="80" r="18" />
                    <circle cx="420" cy="90" r="18" />
                    <circle cx="200" cy="240" r="18" />
                    <circle cx="400" cy="220" r="18" />
                  </g>
                  <circle cx="280" cy="140" r="28" fill="#2563EB" stroke="#2563EB" />
                  <g
                    fill="#3F3F46"
                    fontSize="12"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    <text x="120" y="54" textAnchor="middle">inbox</text>
                    <text x="420" y="64" textAnchor="middle">essays</text>
                    <text x="200" y="274" textAnchor="middle">research</text>
                    <text x="400" y="254" textAnchor="middle">daily</text>
                    <text x="280" y="145" textAnchor="middle" fill="#fff" fontWeight="600">core</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section id="method" className="border-b border-[#E4E4E7]">
          <div className="mx-auto grid max-w-6xl grid-cols-12 gap-6 px-6 py-16">
            <div className="col-span-12 md:col-span-4">
              <p className="text-sm font-medium tracking-[0.18em] text-[#A1A1AA] uppercase">
                03 — Method
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                Built for people who already have too many tools.
              </h2>
            </div>
            <div className="col-span-12 grid gap-6 md:col-span-8 md:grid-cols-3">
              {[
                ["Spatial search", "Query by room and phrase together."],
                ["Calm review", "Daily surface area, not endless feeds."],
                ["Portable core", "Plain files. Export is not an afterthought."],
              ].map(([t, b]) => (
                <div key={t} className="border-t-2 border-[#0A0A0A] pt-4">
                  <h3 className="font-semibold tracking-tight">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#52525B]">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cta">
          <div className="mx-auto grid max-w-6xl grid-cols-12 items-end gap-6 px-6 py-20">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Start with one room.
              </h2>
              <p className="mt-4 max-w-md text-[#3F3F46]">
                Structure can wait. The first note cannot.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:justify-self-end">
              <a
                href="#cta"
                className="inline-flex h-12 items-center bg-[#2563EB] px-6 text-sm font-medium text-white transition-colors hover:bg-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
              >
                Open Loci free
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E4E4E7]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-[#71717A] sm:flex-row sm:justify-between">
          <p>Loci · structured second brain</p>
          <p>Iteration 03 — Swiss</p>
        </div>
      </footer>
    </div>
  );
}
