/* eslint-disable @next/next/no-html-link-for-pages -- Preserve generated native navigation with gallery-scoped URLs. */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engram — Product",
};

export default function Product() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111827]">
      <header className="sticky top-0 z-40 border-b border-[#E5E7EB] bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
          <a href="/with-design-skill/mimo-x-pro-preview/4" className="flex items-center gap-2">
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
              <rect width="24" height="24" rx="6" fill="#4F46E5" />
              <path
                d="M7 8.5h10M7 12h7M7 15.5h5"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-[15px] font-semibold tracking-tight">
              Engram
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-[13.5px] text-[#6B7280] md:flex">
            <a href="#features" className="text-[#111827] hover:text-[#4F46E5]">
              Features
            </a>
            <a href="#how" className="hover:text-[#111827]">
              How it works
            </a>
            <a href="#pricing" className="hover:text-[#111827]">
              Pricing
            </a>
            <a href="#faq" className="hover:text-[#111827]">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#pricing"
              className="hidden px-3 py-1.5 text-[13.5px] text-[#6B7280] hover:text-[#111827] sm:block"
            >
              Sign in
            </a>
            <a
              href="#cta"
              className="rounded-lg bg-[#4F46E5] px-3.5 py-1.5 text-[13.5px] font-medium text-white shadow-sm transition-colors hover:bg-[#4338CA]"
            >
              Get Engram free
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="border-b border-[#E5E7EB] bg-gradient-to-b from-white to-[#F5F3FF] px-5 pb-16 pt-14 sm:pt-18">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E0E7FF] bg-[#EEF2FF] px-3 py-1 text-[12px] font-medium text-[#4338CA]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4F46E5]" />
                Now with semantic search
              </div>
              <h1 className="mt-5 text-[clamp(2.4rem,5vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-[#111827]">
                Your notes, finally working together
              </h1>
              <p className="mt-5 max-w-md text-[16px] leading-[1.65] text-[#6B7280]">
                Engram is the note-taking app that builds a second brain for
                you — linking ideas automatically, surfacing what matters, and
                keeping everything private by default.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#cta"
                  className="rounded-lg bg-[#4F46E5] px-5 py-2.5 text-[14px] font-medium text-white shadow-sm transition-colors hover:bg-[#4338CA]"
                >
                  Start for free
                </a>
                <a
                  href="#how"
                  className="rounded-lg border border-[#D1D5DB] bg-white px-5 py-2.5 text-[14px] font-medium text-[#111827] shadow-sm transition-colors hover:border-[#9CA3AF]"
                >
                  See how it works
                </a>
              </div>
              <p className="mt-4 text-[13px] text-[#9CA3AF]">
                Free forever for personal use · No credit card
              </p>
            </div>

            {/* Product mockup */}
            <div className="relative">
              <div className="overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-[0_20px_50px_rgba(17,24,39,0.1)]">
                {/* Title bar */}
                <div className="flex items-center gap-2 border-b border-[#F3F4F6] bg-[#FAFAFA] px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FCA5A5]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FCD34D]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#86EFAC]" />
                  <span className="ml-2 font-mono text-[11px] text-[#9CA3AF]">
                    Engram — Daily note
                  </span>
                </div>
                <div className="grid min-h-[320px] grid-cols-[180px_1fr_160px] text-[12px]">
                  {/* Sidebar */}
                  <div className="border-r border-[#F3F4F6] bg-[#FAFAFA] p-3">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-[#9CA3AF]">
                      Spaces
                    </p>
                    {["Inbox", "Daily", "Research", "Ideas", "Archive"].map(
                      (s, i) => (
                        <div
                          key={s}
                          className={[
                            "mb-0.5 rounded-md px-2 py-1.5",
                            i === 1
                              ? "bg-[#EEF2FF] font-medium text-[#4338CA]"
                              : "text-[#6B7280]",
                          ].join(" ")}
                        >
                          {s}
                        </div>
                      ),
                    )}
                    <p className="mb-2 mt-4 font-mono text-[10px] uppercase tracking-wider text-[#9CA3AF]">
                      Recent
                    </p>
                    {["Attention residue", "Ship checklist", "Book: Deep Work"].map(
                      (s) => (
                        <div key={s} className="truncate px-2 py-1 text-[#6B7280]">
                          {s}
                        </div>
                      ),
                    )}
                  </div>
                  {/* Editor */}
                  <div className="p-4">
                    <p className="font-mono text-[10px] text-[#9CA3AF]">
                      Wed, Mar 11
                    </p>
                    <h3 className="mt-1 text-[15px] font-semibold text-[#111827]">
                      On building a thinking practice
                    </h3>
                    <p className="mt-3 leading-relaxed text-[#4B5563]">
                      The point of a second brain isn&apos;t storage — it&apos;s{" "}
                      <span className="rounded bg-[#EEF2FF] px-1 font-medium text-[#4338CA]">
                        retrieval under pressure
                      </span>
                      . When you&apos;re mid-decision, you need the right
                      fragment, not a folder tree.
                    </p>
                    <p className="mt-3 leading-relaxed text-[#4B5563]">
                      Yesterday&apos;s note on{" "}
                      <span className="text-[#4F46E5] underline decoration-[#C7D2FE] underline-offset-2">
                        attention residue
                      </span>{" "}
                      keeps resurfacing — Engram linked it three times this week
                      without me asking.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {["#thinking", "#practice", "#attention"].map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-[#F3F4F6] px-2 py-0.5 text-[11px] text-[#6B7280]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Backlinks */}
                  <div className="border-l border-[#F3F4F6] bg-[#FAFAFA] p-3">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-[#9CA3AF]">
                      Backlinks
                    </p>
                    {[
                      ["Attention residue", "2d"],
                      ["Deep work rituals", "5d"],
                      ["Meeting notes 3/8", "1w"],
                    ].map(([t, d]) => (
                      <div
                        key={t}
                        className="mb-1.5 rounded-md border border-[#E5E7EB] bg-white p-2"
                      >
                        <p className="truncate text-[11px] font-medium text-[#111827]">
                          {t}
                        </p>
                        <p className="mt-0.5 font-mono text-[10px] text-[#9CA3AF]">
                          {d}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-2 rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 shadow-lg sm:-right-4">
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#9CA3AF]">
                  Synced
                </p>
                <p className="text-[13px] font-medium text-[#111827]">
                  3 devices · E2E
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Logo strip */}
        <section className="border-b border-[#E5E7EB] bg-white px-5 py-8">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-[12px] uppercase tracking-[0.14em] text-[#9CA3AF]">
              Trusted by teams at
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[15px] font-semibold tracking-tight text-[#D1D5DB]">
              {["NORTHWIND", "HALCYON", "FIELDNOTE", "ORBIT LABS", "PAPERTRAIL"].map(
                (c) => (
                  <span key={c}>{c}</span>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="border-b border-[#E5E7EB] px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[13px] font-medium text-[#4F46E5]">Features</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Everything you need. Nothing you don&apos;t.
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#6B7280]">
                Built for people who think for a living — and want their tools
                to get out of the way.
              </p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  t: "Bi-directional links",
                  d: "Every mention is a two-way street. See what points to a note without hunting.",
                  icon: "⇄",
                },
                {
                  t: "Semantic search",
                  d: "Find notes by meaning, not just keywords. “That idea about focus” actually works.",
                  icon: "⌘",
                },
                {
                  t: "Daily notes",
                  d: "A dated page that opens itself. Drop thoughts in without choosing a home.",
                  icon: "◷",
                },
                {
                  t: "Graph overview",
                  d: "Zoom out and see your knowledge as a map — clusters, bridges, orphans.",
                  icon: "◎",
                },
                {
                  t: "End-to-end encryption",
                  d: "Your second brain is private. We literally cannot read your notes.",
                  icon: "⚿",
                },
                {
                  t: "Export anything",
                  d: "Markdown, JSON, full archive. Leave anytime with everything intact.",
                  icon: "↗",
                },
              ].map((f) => (
                <article
                  key={f.t}
                  className="rounded-xl border border-[#E5E7EB] bg-white p-5 transition-shadow hover:shadow-md"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEF2FF] text-[#4F46E5]">
                    <span aria-hidden className="text-base">
                      {f.icon}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[15px] font-semibold">{f.t}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#6B7280]">
                    {f.d}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="border-b border-[#E5E7EB] bg-white px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-[13px] font-medium text-[#4F46E5]">
              How it works
            </p>
            <h2 className="mt-2 text-center text-3xl font-semibold tracking-tight">
              From thought to second brain in three steps
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                {
                  n: "1",
                  t: "Capture freely",
                  d: "Dump thoughts into daily notes or the inbox. No structure required at capture time.",
                },
                {
                  n: "2",
                  t: "Connect automatically",
                  d: "Engram proposes links as you write. Accept a few, ignore the rest.",
                },
                {
                  n: "3",
                  t: "Recall instantly",
                  d: "Search by phrase or browse the graph when you need the right fragment fast.",
                },
              ].map((s) => (
                <div key={s.n} className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4F46E5] text-[14px] font-semibold text-white">
                    {s.n}
                  </div>
                  <h3 className="mt-5 text-[16px] font-semibold">{s.t}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#6B7280]">
                    {s.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="border-b border-[#E5E7EB] px-5 py-16">
          <div className="mx-auto max-w-4xl">
            <p className="text-center text-[13px] font-medium text-[#4F46E5]">
              Pricing
            </p>
            <h2 className="mt-2 text-center text-3xl font-semibold tracking-tight">
              Simple plans. Serious privacy.
            </h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <article className="rounded-2xl border border-[#E5E7EB] bg-white p-7">
                <h3 className="text-[15px] font-semibold">Personal</h3>
                <p className="mt-1 text-[13px] text-[#6B7280]">
                  For individuals building a second brain
                </p>
                <p className="mt-5 text-4xl font-semibold tracking-tight">
                  $0
                  <span className="text-[15px] font-normal text-[#9CA3AF]">
                    /mo
                  </span>
                </p>
                <ul className="mt-6 space-y-2.5 text-[14px] text-[#4B5563]">
                  {[
                    "Unlimited notes & links",
                    "Local-first storage",
                    "Semantic search",
                    "Markdown export",
                  ].map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-[#4F46E5]">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className="mt-8 block rounded-lg border border-[#D1D5DB] px-4 py-2.5 text-center text-[14px] font-medium hover:border-[#9CA3AF]"
                >
                  Get started
                </a>
              </article>
              <article className="rounded-2xl border-2 border-[#4F46E5] bg-white p-7 shadow-[0_12px_30px_rgba(79,70,229,0.1)]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[15px] font-semibold">Pro</h3>
                  <span className="rounded-full bg-[#EEF2FF] px-2.5 py-0.5 text-[11px] font-medium text-[#4338CA]">
                    Popular
                  </span>
                </div>
                <p className="mt-1 text-[13px] text-[#6B7280]">
                  Sync, share, and work across devices
                </p>
                <p className="mt-5 text-4xl font-semibold tracking-tight">
                  $10
                  <span className="text-[15px] font-normal text-[#9CA3AF]">
                    /mo
                  </span>
                </p>
                <ul className="mt-6 space-y-2.5 text-[14px] text-[#4B5563]">
                  {[
                    "Everything in Personal",
                    "E2E encrypted sync",
                    "Shared spaces",
                    "Priority support",
                  ].map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-[#4F46E5]">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className="mt-8 block rounded-lg bg-[#4F46E5] px-4 py-2.5 text-center text-[14px] font-medium text-white hover:bg-[#4338CA]"
                >
                  Start Pro trial
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-b border-[#E5E7EB] bg-white px-5 py-16">
          <div className="mx-auto max-w-2xl">
            <p className="text-center text-[13px] font-medium text-[#4F46E5]">
              FAQ
            </p>
            <h2 className="mt-2 text-center text-3xl font-semibold tracking-tight">
              Common questions
            </h2>
            <div className="mt-10 divide-y divide-[#E5E7EB] border-y border-[#E5EDEB]">
              {[
                [
                  "Is Engram really local-first?",
                  "Yes. Notes live on your device first. Sync is optional and end-to-end encrypted.",
                ],
                [
                  "Can I import from Notion or Obsidian?",
                  "Markdown and common vault formats import cleanly. Link graphs are preserved where possible.",
                ],
                [
                  "Do you train AI on my notes?",
                  "No. Never. Your private notes stay private — that is a product decision, not a toggle.",
                ],
                [
                  "What happens if I cancel Pro?",
                  "You keep every note and stay on Personal. Nothing is deleted or locked away.",
                ],
              ].map(([q, a]) => (
                <details key={q} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-[15px] font-medium">
                    {q}
                    <span className="text-[#9CA3AF] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#6B7280]">
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="px-5 py-20">
          <div className="mx-auto max-w-3xl rounded-2xl bg-[#4F46E5] px-8 py-14 text-center text-white sm:px-12">
            <h2 className="text-3xl font-semibold tracking-tight">
              Build the second brain you keep starting over.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#C7D2FE]">
              Free forever for personal use. Upgrade only if you want sync and
              shared spaces.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#"
                className="rounded-lg bg-white px-6 py-3 text-[14px] font-medium text-[#4F46E5] shadow-sm hover:bg-[#F5F3FF]"
              >
                Download Engram
              </a>
              <a
                href="#features"
                className="rounded-lg border border-white/30 px-6 py-3 text-[14px] font-medium hover:bg-white/10"
              >
                Explore features
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-[#E5E7EB] bg-white px-5 py-10">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                <rect width="24" height="24" rx="6" fill="#4F46E5" />
                <path
                  d="M7 8.5h10M7 12h7M7 15.5h5"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-[14px] font-semibold">Engram</span>
            </div>
            <div className="flex flex-wrap gap-5 text-[13px] text-[#6B7280]">
              <a href="#" className="hover:text-[#111827]">
                Privacy
              </a>
              <a href="#" className="hover:text-[#111827]">
                Terms
              </a>
              <a href="#" className="hover:text-[#111827]">
                Security
              </a>
              <a href="#" className="hover:text-[#111827]">
                Changelog
              </a>
            </div>
            <p className="text-[13px] text-[#9CA3AF]">© 2026 Engram</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
