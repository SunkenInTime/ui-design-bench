/* eslint-disable @next/next/no-html-link-for-pages -- Preserve native source navigation with gallery-scoped URLs. */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loci — Graph",
  description: "Your second brain as a living constellation of linked notes.",
};

export default function GraphPage() {
  return (
    <div className="min-h-screen bg-[#0C0A1D] text-[#EDE9FF] [color-scheme:dark]">
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="/without-design-skill/mimo-x-flash-preview/5" className="text-lg font-semibold tracking-tight">
          Loci
        </a>
        <a
          href="#cta"
          className="inline-flex h-10 items-center rounded-full bg-[#8B5CF6] px-4 text-sm font-medium text-white transition-colors hover:bg-[#7C3AED] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
        >
          Start free
        </a>
      </header>

      <main className="relative">
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(139,92,246,0.22), transparent 60%), radial-gradient(ellipse 40% 40% at 20% 70%, rgba(34,211,238,0.12), transparent 55%)",
            }}
          />
          <svg
            viewBox="0 0 1200 640"
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden
            preserveAspectRatio="xMidYMid slice"
          >
            <g fill="none" stroke="#8B5CF6" strokeOpacity="0.35" strokeWidth="1">
              <path d="M120 420 C 260 300, 340 280, 480 300" />
              <path d="M480 300 C 620 320, 700 200, 860 180" />
              <path d="M480 300 C 560 420, 680 480, 900 460" />
              <path d="M860 180 C 980 160, 1040 260, 1080 320" />
              <path d="M200 200 C 300 220, 380 260, 480 300" />
            </g>
            <g fill="#8B5CF6">
              <circle className="motion-safe:animate-pulse" cx="480" cy="300" r="7" />
              <circle cx="120" cy="420" r="4" opacity="0.7" />
              <circle cx="200" cy="200" r="4" opacity="0.7" />
              <circle cx="860" cy="180" r="5" opacity="0.85" />
              <circle cx="900" cy="460" r="4" opacity="0.7" />
              <circle cx="1080" cy="320" r="3.5" opacity="0.6" />
            </g>
            <g fill="#22D3EE">
              <circle className="motion-safe:animate-pulse" cx="640" cy="360" r="3" />
              <circle cx="760" cy="260" r="2.5" opacity="0.7" />
            </g>
            <g fill="#F472B6" opacity="0.8">
              <circle cx="340" cy="380" r="2.5" />
              <circle cx="980" cy="240" r="2.5" />
            </g>
          </svg>

          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pt-12 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20 lg:pb-32">
            <div>
              <p className="text-sm font-medium tracking-[0.16em] text-[#9B94C7] uppercase">
                Second brain · Living graph
              </p>
              <h1 className="mt-5 max-w-xl text-5xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl md:text-7xl">
                Your mind, mapped as a constellation.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#B7B0E0]">
                Loci turns notes into a connected field. Capture sparks, link
                them into rooms, and watch the graph grow into a place you can
                actually navigate.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#cta"
                  className="inline-flex h-12 items-center rounded-full bg-[#EDE9FF] px-6 text-sm font-semibold text-[#0C0A1D] transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
                >
                  Launch your graph
                </a>
                <a
                  href="#how"
                  className="inline-flex h-12 items-center rounded-full border border-[#8B5CF6]/40 px-6 text-sm font-medium text-[#EDE9FF] transition-colors hover:bg-[#8B5CF6]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
                >
                  How links work
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-white/10 bg-[#151230]/80 p-5 backdrop-blur-sm">
                <div className="flex items-center justify-between text-xs text-[#9B94C7]">
                  <span>graph · live</span>
                  <span className="text-[#22D3EE]">142 nodes · 391 edges</span>
                </div>
                <ul className="mt-5 space-y-3">
                  {[
                    ["Design systems", "12 notes · 3 rooms", "#8B5CF6"],
                    ["Attention & focus", "9 notes · 2 rooms", "#22D3EE"],
                    ["Writing practice", "21 notes · 5 rooms", "#F472B6"],
                    ["Weekly review", "6 notes · 1 room", "#8B5CF6"],
                  ].map(([title, meta, color]) => (
                    <li
                      key={title}
                      className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3"
                    >
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full motion-safe:animate-pulse"
                        style={{ background: color }}
                      />
                      <div>
                        <p className="font-medium">{title}</p>
                        <p className="text-sm text-[#9B94C7]">{meta}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="border-t border-white/5">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Capture. Link. Recall—without leaving the graph.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  k: "01",
                  t: "Capture sparks",
                  b: "Drop a note in seconds. No taxonomy required on day one.",
                },
                {
                  k: "02",
                  t: "Link by intent",
                  b: "Connect ideas as they touch. The graph holds the relationship so you do not have to.",
                },
                {
                  k: "03",
                  t: "Recall in context",
                  b: "Open a note and see its neighborhood—what feeds it, what it feeds next.",
                },
              ].map((c) => (
                <article
                  key={c.k}
                  className="rounded-2xl border border-white/10 bg-[#151230]/60 p-6"
                >
                  <p className="text-sm font-semibold text-[#8B5CF6]">{c.k}</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">{c.t}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#B7B0E0]">{c.b}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/5">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Built for long memory, not daily streaks.
              </h2>
              <p className="mt-4 max-w-md text-[#B7B0E0]">
                Loci rewards return visits and quiet depth. The graph is a
                map of attention—not a scoreboard.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Spatial rooms", "Cluster notes into places you can re-enter."],
                ["Path memory", "Follow the chain that led you to an idea."],
                ["Offline first", "Think on a plane; sync later."],
                ["Plain export", "Your constellation leaves with you."],
              ].map(([t, b]) => (
                <div key={t} className="border-t border-[#8B5CF6]/40 pt-4">
                  <h3 className="font-semibold">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#9B94C7]">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="border-t border-white/5">
          <div className="mx-auto max-w-6xl px-6 py-24 text-center">
            <h2 className="mx-auto max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Give your notes a universe—not a folder tree.
            </h2>
            <a
              href="#cta"
              className="mt-10 inline-flex h-12 items-center rounded-full bg-[#8B5CF6] px-7 text-sm font-semibold text-white transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
            >
              Start Loci free
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-[#9B94C7] sm:flex-row sm:justify-between">
          <p>Loci · a living second brain</p>
          <p>Iteration 05 — Graph</p>
        </div>
      </footer>
    </div>
  );
}
