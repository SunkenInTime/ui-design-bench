/* eslint-disable @next/next/no-html-link-for-pages -- Preserve generated native navigation with gallery-scoped URLs. */
import "@/generated/scoped-variant-css/with-design-skill/mimo-x-pro-preview/source/app/1/page.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engram — Quiet Study",
};

export default function QuietStudy() {
  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#1C1917]">

      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 pb-8 pt-8">
        <a href="/with-design-skill/mimo-x-pro-preview/1" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4D6B5C] text-sm font-semibold text-[#F7F3EB]">
            E
          </span>
          <span className="text-[15px] font-medium tracking-tight">Engram</span>
        </a>
        <nav className="hidden items-center gap-8 text-[14px] text-[#5C564C] sm:flex">
          <a href="#method" className="transition-colors hover:text-[#1C1917]">
            Method
          </a>
          <a href="#practice" className="transition-colors hover:text-[#1C1917]">
            Practice
          </a>
          <a
            href="#begin"
            className="rounded-full bg-[#1C1917] px-4 py-2 text-[#F7F3EB] transition-opacity hover:opacity-85"
          >
            Begin writing
          </a>
        </nav>
        <a
          href="#begin"
          className="rounded-full bg-[#1C1917] px-4 py-2 text-sm text-[#F7F3EB] sm:hidden"
        >
          Begin
        </a>
      </header>

      <main>
        <section className="relative mx-auto max-w-5xl px-6 pb-24 pt-12 sm:pt-20">
          <div className="max-w-2xl">
            <p className="mb-6 font-mono text-[12px] uppercase tracking-[0.2em] text-[#4D6B5C]">
              A second brain, gently kept
            </p>
            <h1 className="font-serif text-[clamp(2.75rem,7vw,4.5rem)] font-normal leading-[1.05] tracking-tight">
              Remember what you meant
              <span className="text-[#4D6B5C]"> to think.</span>
            </h1>
            <p className="mt-7 max-w-lg text-[17px] leading-[1.7] text-[#5C564C]">
              Engram is a quiet place for ideas that arrive half-formed. Capture
              a sentence, a sketch of a plan, a half-remembered quote — and
              watch it settle into the mind you are building over time.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#begin"
                className="rounded-full bg-[#4D6B5C] px-6 py-3.5 text-[15px] font-medium text-[#F7F3EB] transition-colors hover:bg-[#3F5A4C]"
              >
                Open your desk
              </a>
              <a
                href="#method"
                className="rounded-full border border-[#C8BDA8] px-6 py-3.5 text-[15px] text-[#1C1917] transition-colors hover:border-[#1C1917]"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* Floating paper notes */}
          <div
            aria-hidden
            className="pointer-events-none absolute right-6 top-24 hidden h-[380px] w-[340px] lg:block"
          >
            <article
              className="qs-float-a absolute right-8 top-4 w-[220px] rounded-sm bg-[#FFFCF6] p-4 shadow-[0_8px_28px_rgba(28,25,23,0.08)]"
              style={{ ["--r" as string]: "3deg" }}
            >
              <p className="font-mono text-[10px] uppercase tracking-wider text-[#A39A88]">
                Today · 09:14
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-[#1C1917]">
                Insight isn&apos;t more information — it&apos;s fewer places to
                look.
              </p>
              <div className="mt-3 flex gap-1.5">
                <span className="rounded-full bg-[#E8E0D2] px-2 py-0.5 text-[11px] text-[#5C564C]">
                  insight
                </span>
                <span className="rounded-full bg-[#E8E0D2] px-2 py-0.5 text-[11px] text-[#5C564C]">
                  writing
                </span>
              </div>
            </article>
            <article
              className="qs-float-b absolute left-0 top-36 w-[200px] rounded-sm bg-[#FFFCF6] p-4 shadow-[0_8px_28px_rgba(28,25,23,0.08)]"
              style={{ ["--r" as string]: "-4deg" }}
            >
              <p className="font-mono text-[10px] uppercase tracking-wider text-[#A39A88]">
                Yesterday
              </p>
              <p className="mt-2 text-[14px] leading-relaxed">
                Linked to <span className="text-[#4D6B5C]">§ Attention</span> ·{" "}
                <span className="text-[#4D6B5C]">§ Clarity</span>
              </p>
            </article>
            <article
              className="qs-float-c absolute bottom-4 right-0 w-[190px] rounded-sm bg-[#4D6B5C] p-4 text-[#F7F3EB] shadow-[0_8px_28px_rgba(77,107,92,0.25)]"
              style={{ ["--r" as string]: "2deg" }}
            >
              <p className="font-mono text-[10px] uppercase tracking-wider opacity-70">
                Recalled
              </p>
              <p className="mt-2 text-[14px] leading-relaxed">
                12 notes connected this week. Your garden is growing.
              </p>
            </article>
          </div>
        </section>

        <section
          id="method"
          className="border-y border-[#E5DCCB] bg-[#F1EBE0] px-6 py-20"
        >
          <div className="mx-auto max-w-5xl">
            <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#4D6B5C]">
              The method
            </p>
            <h2 className="mt-3 max-w-xl font-serif text-3xl leading-snug sm:text-4xl">
              Three habits. One living archive.
            </h2>
            <div className="mt-12 grid gap-10 sm:grid-cols-3">
              {[
                {
                  n: "01",
                  t: "Capture without ceremony",
                  d: "One keystroke opens a blank page. No folders to choose, no tags to invent. Just the thought, still warm.",
                },
                {
                  n: "02",
                  t: "Let links find themselves",
                  d: "As you write, Engram surfaces related notes — not as noise, but as quiet suggestions from past you.",
                },
                {
                  n: "03",
                  t: "Return when ready",
                  d: "Search the way memory works: by fragment, by feeling, by the sentence you almost forgot.",
                },
              ].map((item) => (
                <article key={item.n} className="border-t border-[#C8BDA8] pt-5">
                  <p className="font-mono text-[13px] text-[#4D6B5C]">{item.n}</p>
                  <h3 className="mt-3 text-lg font-medium leading-snug">
                    {item.t}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#5C564C]">
                    {item.d}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="practice" className="mx-auto max-w-5xl px-6 py-24">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#4D6B5C]">
                Daily practice
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-snug sm:text-[2.5rem]">
                Built for the long middle of thinking.
              </h2>
              <p className="mt-5 text-[16px] leading-[1.75] text-[#5C564C]">
                Most tools are designed for finished work. Engram is designed
                for the drafts, the maybes, the sentences that might become
                something later.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Daily notes that never feel like homework",
                  "Backlinks you can actually read",
                  "End-to-end encrypted by default",
                  "Export everything — your words stay yours",
                ].map((line) => (
                  <li key={line} className="flex gap-3 text-[15px] leading-relaxed">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4D6B5C]"
                    />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-[#E5DCCB] bg-[#FFFCF6] p-6 shadow-[0_16px_40px_rgba(28,25,23,0.06)]">
              <div className="flex items-center justify-between border-b border-[#E5DCCB] pb-3">
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#A39A88]">
                  Wednesday, quiet morning
                </p>
                <p className="font-mono text-[11px] text-[#4D6B5C]">3 links</p>
              </div>
              <h3 className="mt-5 font-serif text-xl">
                Why “second brain” is the wrong metaphor
              </h3>
              <p className="mt-3 text-[15px] leading-[1.75] text-[#5C564C]">
                Brains forget on purpose. A better aim is a{" "}
                <span className="bg-[#E8E0D2] px-1 text-[#1C1917]">
                  practice of return
                </span>{" "}
                — not a warehouse of everything, but a desk you trust enough to
                leave things on.
              </p>
              <div className="mt-6 rounded-md bg-[#F1EBE0] p-3">
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#A39A88]">
                  Related
                </p>
                <p className="mt-1.5 text-[13px] text-[#4D6B5C]">
                  → Forgetting as design · Spaced return · Desk metaphor
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="begin"
          className="mx-auto max-w-5xl px-6 pb-28 pt-8"
        >
          <div className="rounded-2xl bg-[#1C1917] px-8 py-14 text-center text-[#F7F3EB] sm:px-16">
            <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#A8C4B4]">
              Begin
            </p>
            <h2 className="mx-auto mt-4 max-w-xl font-serif text-3xl leading-snug sm:text-[2.5rem]">
              Your next good idea needs somewhere soft to land.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-[#C8C2B4]">
              Free for personal use. Sync when you want. Leave with a full
              export whenever you like.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#"
                className="rounded-full bg-[#F7F3EB] px-7 py-3.5 text-[15px] font-medium text-[#1C1917] transition-opacity hover:opacity-90"
              >
                Create a free desk
              </a>
              <a
                href="#method"
                className="rounded-full border border-white/25 px-7 py-3.5 text-[15px] transition-colors hover:border-white/50"
              >
                Read the method
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-[#E5DCCB] px-6 py-10">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 text-[13px] text-[#8A8172] sm:flex-row sm:items-center">
            <p>© 2026 Engram. Kept with care.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#1C1917]">
                Privacy
              </a>
              <a href="#" className="hover:text-[#1C1917]">
                Security
              </a>
              <a href="#" className="hover:text-[#1C1917]">
                Docs
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
