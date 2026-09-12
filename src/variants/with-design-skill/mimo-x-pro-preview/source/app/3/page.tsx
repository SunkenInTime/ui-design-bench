/* eslint-disable @next/next/no-html-link-for-pages -- Preserve generated native navigation with gallery-scoped URLs. */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engram — Editorial",
};

export default function Editorial() {
  return (
    <div className="min-h-screen bg-[#F0EDE6] text-[#0D0D0D]">
      <header className="border-b-2 border-[#0D0D0D]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="/with-design-skill/mimo-x-pro-preview/3" className="flex items-baseline gap-2">
            <span className="text-xl font-black tracking-tight">ENGRAM</span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#E23D28]">
              Issue 05
            </span>
          </a>
          <nav className="hidden items-center gap-6 font-mono text-[11px] uppercase tracking-[0.12em] md:flex">
            <a href="#essay" className="hover:text-[#E23D28]">
              Essay
            </a>
            <a href="#features" className="hover:text-[#E23D28]">
              Features
            </a>
            <a href="#dispatch" className="hover:text-[#E23D28]">
              Dispatch
            </a>
          </nav>
          <a
            href="#dispatch"
            className="bg-[#0D0D0D] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#F0EDE6] hover:bg-[#E23D28]"
          >
            Subscribe
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="border-b-2 border-[#0D0D0D]">
          <div className="mx-auto max-w-6xl px-5 pb-0 pt-10 sm:pt-14">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end">
              <div className="flex-1">
                <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#E23D28]">
                  Note-taking · Volume 05 · 2026
                </p>
                <h1 className="mt-4 text-[clamp(3.2rem,10vw,7rem)] font-black uppercase leading-[0.88] tracking-[-0.03em]">
                  Think less.
                  <br />
                  <span className="text-[#E23D28]">Remember</span>
                  <br />
                  more.
                </h1>
              </div>
              <div className="w-full max-w-sm border-t-2 border-[#0D0D0D] pt-4 lg:border-l-2 lg:border-t-0 lg:pl-6 lg:pt-0">
                <p className="text-[15px] leading-[1.6]">
                  Engram is a note-taking app for people who are tired of
                  organizing instead of thinking. Capture fragments. Link them
                  without ceremony. Build a second brain that actually behaves
                  like one.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <a
                    href="#dispatch"
                    className="bg-[#E23D28] px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.12em] text-white hover:bg-[#0D0D0D]"
                  >
                    Start free
                  </a>
                  <a
                    href="#essay"
                    className="border-2 border-[#0D0D0D] px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.12em] hover:bg-[#0D0D0D] hover:text-[#F0EDE6]"
                  >
                    Read the case
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Ticker strip */}
          <div className="mt-10 overflow-hidden border-t-2 border-[#0D0D0D] bg-[#0D0D0D] py-3 text-[#F0EDE6]">
            <p className="font-mono text-[12px] uppercase tracking-[0.2em] whitespace-nowrap">
              CAPTURE — LINK — RECALL — COMPOUND — EXPORT — OWN — CAPTURE —
              LINK — RECALL — COMPOUND — EXPORT — OWN —
            </p>
          </div>
        </section>

        {/* Essay */}
        <section id="essay" className="border-b-2 border-[#0D0D0D] px-5 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#E23D28]">
                01 / Essay
              </p>
              <h2 className="mt-3 text-2xl font-black uppercase leading-tight tracking-tight">
                The case against folders
              </h2>
            </div>
            <div className="space-y-6 text-[16px] leading-[1.7] lg:col-span-5">
              <p>
                Folders demand you decide what something is before you know why
                it matters. That is the opposite of how insight works. Ideas
                arrive as scraps — a sentence from a book, a half-question, a
                diagram drawn in a meeting that went sideways.
              </p>
              <p>
                Engram refuses the filing cabinet. Notes float. Connections
                surface when they are useful. The archive grows without asking
                you to become a librarian after every capture.
              </p>
              <blockquote className="border-l-4 border-[#E23D28] pl-4 text-xl font-semibold leading-snug">
                “A second brain should feel like a desk, not a warehouse.”
              </blockquote>
            </div>
            <aside className="border-2 border-[#0D0D0D] p-5 lg:col-span-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em]">
                Pull quote
              </p>
              <p className="mt-4 text-[18px] font-bold leading-snug">
                Most productivity tools optimize for finishing. Engram optimizes
                for returning.
              </p>
              <hr className="my-5 border-2 border-[#0D0D0D]" />
              <ul className="space-y-2 font-mono text-[12px] uppercase tracking-wider">
                <li>→ No nested folders</li>
                <li>→ No tag taxonomies</li>
                <li>→ No empty inbox guilt</li>
                <li>→ Full markdown export</li>
              </ul>
            </aside>
          </div>
        </section>

        {/* Features as magazine grid */}
        <section id="features" className="border-b-2 border-[#0D0D0D]">
          <div className="mx-auto max-w-6xl">
            <div className="border-b-2 border-[#0D0D0D] px-5 py-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#E23D28]">
                02 / What it does
              </p>
            </div>
            <div className="grid md:grid-cols-3">
              {[
                {
                  n: "I",
                  t: "Instant capture",
                  b: "One hotkey. A blank page. Your thought before it evaporates. Sync later if you want — the write never waits.",
                  k: "0.2s",
                },
                {
                  n: "II",
                  t: "Living backlinks",
                  b: "Every note shows what points at it, in plain language. Not a graph for its own sake — a map of what you already know.",
                  k: "auto",
                },
                {
                  n: "III",
                  t: "Fragment search",
                  b: "Type the half-sentence you remember. Engram finds the rest — including notes you wrote last spring and forgot existed.",
                  k: "∞",
                },
              ].map((f, i) => (
                <article
                  key={f.n}
                  className={[
                    "border-b-2 border-[#0D0D0D] p-8 md:border-b-0",
                    i < 2 ? "md:border-r-2" : "",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-4xl font-black tracking-tight">
                      {f.n}
                    </span>
                    <span className="font-mono text-[13px] text-[#E23D28]">
                      {f.k}
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-black uppercase tracking-tight">
                    {f.t}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.65]">{f.b}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Spec table */}
        <section className="border-b-2 border-[#0D0D0D] px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#E23D28]">
              03 / Specs
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-4xl">
              The facts, set in type
            </h2>
            <table className="mt-10 w-full border-collapse text-left">
              <thead>
                <tr className="border-y-2 border-[#0D0D0D] font-mono text-[11px] uppercase tracking-[0.12em]">
                  <th className="py-3 pr-4 font-medium">Layer</th>
                  <th className="py-3 pr-4 font-medium">Detail</th>
                  <th className="py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-[15px]">
                {[
                  ["Storage", "Local-first SQLite + optional E2E sync", "Shipped"],
                  ["Format", "Markdown + portable link graph", "Shipped"],
                  ["Platforms", "macOS, Windows, Linux, Web", "Shipped"],
                  ["Privacy", "No training on your notes. Ever.", "Policy"],
                  ["Price", "Free personal · Pro teams", "Open"],
                ].map(([a, b, c]) => (
                  <tr key={a} className="border-b border-[#0D0D0D]/25">
                    <td className="py-4 pr-4 font-semibold">{a}</td>
                    <td className="py-4 pr-4">{b}</td>
                    <td className="py-4 font-mono text-[12px] uppercase text-[#E23D28]">
                      {c}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section id="dispatch" className="bg-[#0D0D0D] px-5 py-20 text-[#F0EDE6]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#E23D28]">
              04 / Dispatch
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
              Stop filing.
              <br />
              Start compounding.
            </h2>
            <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-[#B0AAA0]">
              Join 18,000 writers, researchers, and founders who keep their
              second brain on Engram.
            </p>
            <div className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="email@domain.com"
                className="flex-1 border-2 border-[#F0EDE6] bg-transparent px-4 py-3 font-mono text-[13px] outline-none placeholder:text-[#6B6660] focus:border-[#E23D28]"
              />
              <a
                href="#dispatch"
                className="bg-[#E23D28] px-6 py-3 text-center font-mono text-[12px] uppercase tracking-[0.12em] text-white hover:bg-[#F0EDE6] hover:text-[#0D0D0D]"
              >
                Subscribe
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t-2 border-[#0D0D0D] px-5 py-8">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.12em] sm:flex-row">
            <p>Engram Press · 2026</p>
            <p>All rights reserved · No folders were harmed</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
