/* eslint-disable @next/next/no-html-link-for-pages -- Preserve generated native navigation with gallery-scoped URLs. */
import "@/generated/scoped-variant-css/with-design-skill/mimo-x-pro-preview/source/app/5/page.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engram — Organic",
};

export default function Organic() {
  return (
    <div className="min-h-screen bg-[#FDF8FF] text-[#2D1B4E]">

      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <a href="/with-design-skill/mimo-x-pro-preview/5" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C5CFC] to-[#FF7A59] text-sm font-bold text-white">
            E
          </span>
          <span className="text-[17px] font-bold tracking-tight">Engram</span>
        </a>
        <nav className="hidden items-center gap-7 text-[14px] font-medium text-[#6B5A8A] md:flex">
          <a href="#ideas" className="hover:text-[#2D1B4E]">
            Ideas
          </a>
          <a href="#flow" className="hover:text-[#2D1B4E]">
            Flow
          </a>
          <a href="#community" className="hover:text-[#2D1B4E]">
            Community
          </a>
        </nav>
        <a
          href="#join"
          className="rounded-full bg-[#2D1B4E] px-5 py-2.5 text-[14px] font-semibold text-white shadow-lg shadow-[#2D1B4E]/15 transition-transform hover:scale-[1.03]"
        >
          Try Engram
        </a>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-20 pt-10 sm:pt-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-16 h-80 w-80 rounded-full bg-gradient-to-br from-[#EDE4FF] to-[#FFE8E0] opacity-80 or-blob or-spin-slow"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-10 -left-16 h-56 w-56 rounded-full bg-gradient-to-tr from-[#D4F5E9] to-[#EDE4FF] opacity-70 or-blob"
          />

          <div className="relative mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#6B5A8A] shadow-sm">
                <span className="text-[#3DBE8B]">●</span>
                A kinder second brain
              </div>
              <h1 className="mt-6 text-[clamp(2.6rem,7vw,4.25rem)] font-bold leading-[1.08] tracking-tight">
                Ideas grow better
                <br />
                when they{" "}
                <span className="bg-gradient-to-r from-[#7C5CFC] via-[#FF7A59] to-[#3DBE8B] bg-clip-text text-transparent">
                  feel connected.
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-[17px] leading-[1.7] text-[#6B5A8A]">
                Engram is a note-taking app that treats your mind like a garden,
                not a filing cabinet. Plant thoughts. Water links. Harvest
                clarity when you need it.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#join"
                  className="rounded-full bg-[#7C5CFC] px-7 py-3.5 text-[15px] font-semibold text-white shadow-xl shadow-[#7C5CFC]/30 transition-transform hover:scale-[1.03]"
                >
                  Start growing free
                </a>
                <a
                  href="#flow"
                  className="rounded-full border-2 border-[#E8DFF5] bg-white px-7 py-3.5 text-[15px] font-semibold text-[#2D1B4E] transition-colors hover:border-[#7C5CFC]"
                >
                  See the flow
                </a>
              </div>
            </div>

            {/* Molecule / brain constellation */}
            <div className="or-bob relative mx-auto mt-14 max-w-xl">
              <svg
                viewBox="0 0 560 320"
                className="h-auto w-full"
                role="img"
                aria-label="Colorful connected idea nodes forming a brain-like cluster"
              >
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#7C5CFC" />
                    <stop offset="100%" stopColor="#A78BFA" />
                  </linearGradient>
                  <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FF7A59" />
                    <stop offset="100%" stopColor="#FFB4A0" />
                  </linearGradient>
                  <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3DBE8B" />
                    <stop offset="100%" stopColor="#8AE0C0" />
                  </linearGradient>
                </defs>

                {/* soft plate */}
                <ellipse
                  cx="280"
                  cy="160"
                  rx="220"
                  ry="130"
                  fill="#F3ECFF"
                />

                {/* edges */}
                {[
                  [120, 160, 200, 100],
                  [200, 100, 300, 90],
                  [300, 90, 400, 130],
                  [120, 160, 210, 200],
                  [210, 200, 300, 90],
                  [210, 200, 320, 230],
                  [320, 230, 400, 130],
                  [400, 130, 450, 200],
                  [320, 230, 450, 200],
                  [200, 100, 210, 200],
                  [300, 90, 320, 230],
                ].map(([x1, y1, x2, y2], i) => (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#D4C6F0"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                ))}

                {/* nodes */}
                <circle cx="120" cy="160" r="28" fill="url(#g1)" />
                <circle cx="200" cy="100" r="18" fill="url(#g2)" />
                <circle cx="300" cy="90" r="22" fill="url(#g3)" />
                <circle cx="400" cy="130" r="26" fill="url(#g1)" />
                <circle cx="210" cy="200" r="16" fill="url(#g3)" />
                <circle cx="320" cy="230" r="20" fill="url(#g2)" />
                <circle cx="450" cy="200" r="14" fill="url(#g3)" />

                {/* labels */}
                <text
                  x="120"
                  y="165"
                  textAnchor="middle"
                  fill="white"
                  fontSize="11"
                  fontWeight="600"
                >
                  Capture
                </text>
                <text
                  x="400"
                  y="135"
                  textAnchor="middle"
                  fill="white"
                  fontSize="11"
                  fontWeight="600"
                >
                  Recall
                </text>
                <text
                  x="320"
                  y="235"
                  textAnchor="middle"
                  fill="white"
                  fontSize="10"
                  fontWeight="600"
                >
                  Link
                </text>
                <text
                  x="300"
                  y="95"
                  textAnchor="middle"
                  fill="white"
                  fontSize="10"
                  fontWeight="600"
                >
                  Ideas
                </text>
              </svg>
            </div>
          </div>
        </section>

        {/* Three pillars */}
        <section id="ideas" className="px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-xl text-center">
              <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#7C5CFC]">
                Three petals
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-[2.5rem]">
                A second brain that feels human
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {[
                {
                  c: "from-[#7C5CFC] to-[#A78BFA]",
                  t: "Plant freely",
                  d: "Dump half-thoughts into a daily page. No folder tax. No tag ceremony. Just write.",
                  tag: "Capture",
                },
                {
                  c: "from-[#FF7A59] to-[#FFB4A0]",
                  t: "Let links bloom",
                  d: "Engram gently suggests connections between notes. You decide what to keep — or ignore.",
                  tag: "Connect",
                },
                {
                  c: "from-[#3DBE8B] to-[#8AE0C0]",
                  t: "Harvest clarity",
                  d: "When you need an answer, search the way you remember: messy, partial, human.",
                  tag: "Recall",
                },
              ].map((p) => (
                <article
                  key={p.t}
                  className="rounded-3xl border border-[#F0E8FA] bg-white p-7 shadow-[0_8px_30px_rgba(45,27,78,0.05)]"
                >
                  <span
                    className={`inline-flex rounded-full bg-gradient-to-r ${p.c} px-3 py-1 text-[12px] font-semibold text-white`}
                  >
                    {p.tag}
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{p.t}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#6B5A8A]">
                    {p.d}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Flow */}
        <section id="flow" className="bg-white px-5 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#3DBE8B]">
                Daily flow
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-[2.5rem]">
                From spark to second nature
              </h2>
              <p className="mt-5 text-[16px] leading-[1.7] text-[#6B5A8A]">
                Engram fits around the way you already think. Open it in the
                morning, dump what&apos;s in your head, and leave. The app
                keeps the threads warm until you&apos;re ready to pull them.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  {
                    dot: "bg-[#7C5CFC]",
                    t: "Morning page",
                    d: "One blank note. Write three things. Done.",
                  },
                  {
                    dot: "bg-[#FF7A59]",
                    t: "Gentle nudges",
                    d: "A quiet sidebar of related notes — never a popup.",
                  },
                  {
                    dot: "bg-[#3DBE8B]",
                    t: "Week in review",
                    d: "A colorful map of what you thought about this week.",
                  },
                ].map((i) => (
                  <li key={i.t} className="flex gap-4">
                    <span
                      className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ${i.dot}`}
                    />
                    <div>
                      <p className="font-semibold text-[#2D1B4E]">{i.t}</p>
                      <p className="mt-0.5 text-[14px] text-[#6B5A8A]">{i.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Soft UI card */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#EDE4FF] via-[#FFE8E0] to-[#D4F5E9] opacity-60" />
              <div className="relative rounded-3xl border border-[#F0E8FA] bg-white p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <p className="text-[14px] font-bold">Today · soft focus</p>
                  <span className="rounded-full bg-[#D4F5E9] px-2.5 py-1 text-[11px] font-semibold text-[#1F7A55]">
                    4 links
                  </span>
                </div>
                <div className="mt-5 space-y-3">
                  <div className="rounded-2xl bg-[#F8F3FF] p-4">
                    <p className="text-[14px] leading-relaxed">
                      Insight: rest is part of the work. Linked to{" "}
                      <span className="font-semibold text-[#7C5CFC]">
                        sleep notes
                      </span>{" "}
                      and{" "}
                      <span className="font-semibold text-[#FF7A59]">
                        sprint plan
                      </span>
                      .
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#FFF4F0] p-4">
                    <p className="text-[14px] leading-relaxed">
                      Half-idea from the walk: maybe maps need legends more
                      than they need more data.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#EEFBF5] p-4">
                    <p className="text-[14px] leading-relaxed">
                      <span className="font-semibold text-[#3DBE8B]">
                        Recalled
                      </span>{" "}
                      — “attention is a practice, not a resource” from 3 weeks
                      ago.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community */}
        <section id="community" className="px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-[13px] font-semibold uppercase tracking-[0.16em] text-[#FF7A59]">
              Community
            </p>
            <h2 className="mt-3 text-center text-3xl font-bold tracking-tight">
              People growing minds together
            </h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                {
                  q: "I stopped dreading my notes app. Engram feels like leaving sticky notes for my future self.",
                  n: "Maya R.",
                  r: "PhD student",
                  bg: "bg-[#F8F3FF]",
                },
                {
                  q: "The linked suggestions actually help. I rediscovered three ideas I forgot I had.",
                  n: "Jon K.",
                  r: "Product designer",
                  bg: "bg-[#FFF4F0]",
                },
                {
                  q: "Finally a second brain that doesn’t require a second job to maintain.",
                  n: "Priya S.",
                  r: "Writer",
                  bg: "bg-[#EEFBF5]",
                },
              ].map((c) => (
                <figure
                  key={c.n}
                  className={`rounded-3xl p-6 ${c.bg} border border-white`}
                >
                  <blockquote className="text-[15px] leading-relaxed text-[#2D1B4E]">
                    “{c.q}”
                  </blockquote>
                  <figcaption className="mt-5">
                    <p className="font-semibold text-[14px]">{c.n}</p>
                    <p className="text-[13px] text-[#6B5A8A]">{c.r}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Join */}
        <section id="join" className="px-5 pb-24">
          <div className="mx-auto max-w-4xl rounded-[2rem] bg-gradient-to-br from-[#2D1B4E] via-[#4A2D7A] to-[#7C5CFC] px-8 py-16 text-center text-white sm:px-14">
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#C4B5FD]">
              Join
            </p>
            <h2 className="mx-auto mt-4 max-w-xl text-3xl font-bold leading-snug sm:text-[2.5rem]">
              Give your thoughts somewhere kind to land.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-[#E9DFFC]">
              Free for personal use. Sync when you want. Export whenever you
              leave — no guilt, no lock-in.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="#"
                className="rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-[#2D1B4E] shadow-lg transition-transform hover:scale-[1.03]"
              >
                Create your garden
              </a>
              <a
                href="#flow"
                className="rounded-full border-2 border-white/25 px-7 py-3.5 text-[15px] font-semibold hover:bg-white/10"
              >
                Watch the flow
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-[#F0E8FA] px-5 py-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-[13px] text-[#6B5A8A] sm:flex-row">
            <p className="flex items-center gap-2 font-semibold text-[#2D1B4E]">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#7C5CFC] to-[#FF7A59]" />
              Engram
            </p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-[#2D1B4E]">
                Privacy
              </a>
              <a href="#" className="hover:text-[#2D1B4E]">
                Stories
              </a>
              <a href="#" className="hover:text-[#2D1B4E]">
                Support
              </a>
            </div>
            <p>© 2026 · Grown with care</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
