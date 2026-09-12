/* eslint-disable @next/next/no-html-link-for-pages -- Preserve native source navigation with gallery-scoped URLs. */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loci — Desk",
  description: "A warm, tactile second brain that feels like a working desk.",
};

export default function DeskPage() {
  return (
    <div className="min-h-screen bg-[#E7DCC8] text-[#3B2F2F]">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-7">
        <a href="/without-design-skill/mimo-x-flash-preview/4" className="font-serif text-2xl tracking-tight">
          Loci
        </a>
        <a
          href="#begin"
          className="rounded-full border border-[#3B2F2F]/20 bg-[#FFFCF5] px-4 py-2 text-sm shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C2703D]"
        >
          Start free
        </a>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        <section className="grid items-center gap-12 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24">
          <div>
            <p className="font-serif text-sm italic text-[#6F7F6B]">
              for people who think in margins
            </p>
            <h1 className="mt-4 max-w-xl font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl">
              A second brain that feels like your desk—not a dashboard.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#5C4A4A]">
              Loci is a note-taking app with the warmth of paper and the
              memory of a palace. Capture what matters, pin it where you can
              see it, and find it again when the thought returns.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                id="begin"
                href="#practice"
                className="inline-flex h-12 items-center rounded-full bg-[#C2703D] px-6 font-medium text-[#FFFCF5] shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C2703D]"
              >
                Clear a space
              </a>
              <span className="text-sm text-[#6F7F6B]">Free to start · Stays on your device first</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div
              className="rotate-[-2deg] rounded-sm bg-[#FFFCF5] p-6 shadow-[0_10px_30px_rgba(59,47,47,0.12)]"
            >
              <p className="text-xs font-medium tracking-wide text-[#6F7F6B] uppercase">
                Index card · Morning
              </p>
              <h2 className="mt-3 font-serif text-2xl leading-snug">
                What did I learn that changed a decision?
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#5C4A4A]">
                Three notes from yesterday already answer this. Loci pulled
                them into one pile before I opened the drawer.
              </p>
              <p className="mt-5 border-t border-dashed border-[#C2703D]/40 pt-3 font-serif text-sm italic text-[#C2703D]">
                keep near the kettle — good for Fridays
              </p>
            </div>
            <div
              className="absolute -right-2 -bottom-6 w-40 rotate-[3deg] rounded-sm bg-[#F5E6A8] px-4 py-3 shadow-[0_8px_20px_rgba(59,47,47,0.1)]"
            >
              <p className="text-xs font-medium text-[#3B2F2F]">link later</p>
              <p className="mt-1 text-sm text-[#5C4A4A]">essay ↔ reading list</p>
            </div>
          </div>
        </section>

        <section id="practice" className="rounded-sm bg-[#FFFCF5]/70 px-2 py-14 sm:px-8">
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            The practice, in three gestures
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                n: "I",
                t: "Capture",
                b: "A single desk tray for half-thoughts, quotes, and tasks that are really ideas.",
              },
              {
                n: "II",
                t: "Arrange",
                b: "Pin notes into rooms the way you pin papers to a corkboard—by feel first, system second.",
              },
              {
                n: "III",
                t: "Return",
                b: "When an old thought knocks, Loci opens the right drawer instead of a blank search box.",
              },
            ].map((g) => (
              <article key={g.n} className="border-t border-[#C2703D]/40 pt-5">
                <p className="font-serif text-3xl text-[#C2703D]">{g.n}</p>
                <h3 className="mt-3 font-serif text-2xl">{g.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#5C4A4A]">{g.b}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                t: "Soft structure",
                b: "Tags, rooms, and links exist—without forcing you to file on capture.",
                accent: "#6F7F6B",
              },
              {
                t: "Paper calm",
                b: "Typography that reads like a notebook, not a feed of badges.",
                accent: "#C2703D",
              },
              {
                t: "Morning pages",
                b: "A daily open page that never scolds you for skipping.",
                accent: "#6F7F6B",
              },
              {
                t: "Yours to take",
                b: "Export plain text anytime. Your desk does not lock the drawers.",
                accent: "#C2703D",
              },
            ].map((item) => (
              <div
                key={item.t}
                className="rounded-sm bg-[#FFFCF5] p-6 shadow-[0_1px_0_rgba(59,47,47,0.06)]"
              >
                <div
                  className="mb-4 h-2 w-10 rounded-full"
                  style={{ background: item.accent }}
                />
                <h3 className="font-serif text-2xl">{item.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#5C4A4A]">{item.b}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-24 text-center">
          <h2 className="mx-auto max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
            Make room for the thinking you keep postponing.
          </h2>
          <a
            href="#begin"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-[#3B2F2F] px-6 font-medium text-[#FFFCF5] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C2703D]"
          >
            Begin with Loci
          </a>
        </section>
      </main>

      <footer className="border-t border-[#3B2F2F]/10">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-[#6F7F6B] sm:flex-row sm:justify-between">
          <p>Loci · notes with a place to live</p>
          <p>Iteration 04 — Desk</p>
        </div>
      </footer>
    </div>
  );
}
