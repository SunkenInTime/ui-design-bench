import Link from "next/link";
import type { Metadata } from "next";
import { Spectral, Space_Mono } from "next/font/google";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Index — Star Atlas",
  description:
    "Index charts your notes like a night sky — every thought a fixed point, every connection a constellation line.",
};

const STARS = [
  { id: "014", x: 60, y: 180, r: 3, title: "The talk" },
  { id: "021", x: 130, y: 120, r: 2.4, title: "Margins" },
  { id: "002", x: 210, y: 150, r: 4.4, title: "First principles" },
  { id: "037", x: 282, y: 92, r: 2.2, title: "Reading list" },
  { id: "009", x: 322, y: 168, r: 2.6, title: "Habits" },
  { id: "044", x: 180, y: 42, r: 2, title: "Sleep" },
  { id: "018", x: 92, y: 70, r: 2.2, title: "Drafts" },
];

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [2, 4],
  [2, 5],
  [5, 6],
  [6, 1],
];

const CATALOG = [
  {
    name: "Observer",
    price: "Free",
    note: "For mapping a small patch of sky.",
    features: ["Up to 100 stars", "Manual constellation lines", "Basic search"],
    cta: "Start observing",
  },
  {
    name: "Cartographer",
    price: "$8/mo",
    note: "For charting the whole sky.",
    features: [
      "Unlimited stars and constellations",
      "Full-text search across every plate",
      "Export your chart, as image or data",
      "Revision history for every star",
    ],
    cta: "Chart the whole sky",
    featured: true,
  },
];

function StarChart() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-8">
      <svg viewBox="0 0 380 220" className="h-auto w-full max-w-md text-[#7FA8C9]">
        <defs>
          <pattern id="graticule" width="38" height="38" patternUnits="userSpaceOnUse">
            <path d="M0 0H38M0 0V38" stroke="#7FA8C9" strokeWidth="0.3" opacity="0.25" />
          </pattern>
        </defs>
        <rect width="380" height="220" fill="url(#graticule)" />

        {EDGES.map(([a, b], i) => {
          const s1 = STARS[a];
          const s2 = STARS[b];
          return (
            <line
              key={i}
              x1={s1.x}
              y1={s1.y}
              x2={s2.x}
              y2={s2.y}
              stroke="#7FA8C9"
              strokeWidth="0.7"
              opacity="0.55"
            />
          );
        })}

        {STARS.map((s) => (
          <g key={s.id}>
            <circle cx={s.x} cy={s.y} r={s.r + 3} fill="#D4AF6A" opacity="0.16" />
            <circle cx={s.x} cy={s.y} r={s.r} fill="#D4AF6A" />
            <text
              x={s.x + s.r + 5}
              y={s.y + 3}
              fontFamily="var(--font-mono)"
              fontSize="8"
              fill="#F2F0E6"
              opacity="0.6"
            >
              {s.id}
            </text>
          </g>
        ))}
      </svg>

      <dl className="grid grid-cols-2 gap-x-6 gap-y-2 font-[family-name:var(--font-mono)] text-[11px] text-[#F2F0E6]/55 sm:grid-cols-1">
        {STARS.map((s) => (
          <div key={s.id} className="flex items-baseline gap-2 whitespace-nowrap">
            <dt className="text-[#D4AF6A]">IDX-{s.id}</dt>
            <dd>{s.title}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function StarAtlasLanding() {
  return (
    <div
      className={`min-h-screen bg-[#0e1a2b] text-[#F2F0E6] ${spectral.variable} ${spaceMono.variable}`}
    >
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20% 30%, rgba(242,240,230,0.5) 50%, transparent), radial-gradient(1px 1px at 70% 60%, rgba(242,240,230,0.4) 50%, transparent), radial-gradient(1px 1px at 40% 80%, rgba(242,240,230,0.35) 50%, transparent), radial-gradient(1.5px 1.5px at 85% 15%, rgba(242,240,230,0.5) 50%, transparent), radial-gradient(1px 1px at 55% 45%, rgba(242,240,230,0.3) 50%, transparent), radial-gradient(1px 1px at 10% 65%, rgba(242,240,230,0.4) 50%, transparent)",
          backgroundSize: "100% 100%",
        }}
      />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-7 sm:px-10">
        <span className="font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.3em] text-[#F2F0E6]">
          Index
        </span>
        <nav className="hidden items-center gap-8 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[#F2F0E6]/55 sm:flex">
          <a className="transition-colors hover:text-[#D4AF6A]" href="#method">Chart</a>
          <a className="transition-colors hover:text-[#D4AF6A]" href="#instruments">Instruments</a>
          <a className="transition-colors hover:text-[#D4AF6A]" href="#catalog">Catalog</a>
        </nav>
        <a
          href="#catalog"
          className="rounded-full border border-[#D4AF6A]/50 px-4 py-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[#F2F0E6] transition-colors hover:bg-[#D4AF6A]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF6A]"
        >
          Sign in
        </a>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-6xl gap-16 px-6 pb-28 pt-10 sm:px-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-10">
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[#D4AF6A]">
              Plate I · a chart of your own thinking
            </p>
            <h1 className="mt-5 font-[family-name:var(--font-display)] text-[2.9rem] italic leading-[1.08] text-[#F2F0E6] sm:text-[3.6rem]">
              Map your thinking like a night sky.
            </h1>
            <p className="mt-6 max-w-md font-[family-name:var(--font-display)] text-[17px] leading-7 text-[#F2F0E6]/65">
              Every note becomes a point of light. Connect two and Index
              draws the line between them — until your thinking looks the
              way it always does at 2 a.m.: a sky full of constellations
              only you can read.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a
                href="#catalog"
                className="rounded-full bg-[#D4AF6A] px-6 py-3 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.1em] text-[#0e1a2b] transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF6A]"
              >
                Start your chart
              </a>
              <a
                href="#method"
                className="font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.1em] text-[#F2F0E6]/60 underline decoration-[#7FA8C9]/50 decoration-1 underline-offset-4 transition-colors hover:text-[#F2F0E6] hover:decoration-[#7FA8C9]"
              >
                Read a sample chart
              </a>
            </div>
          </div>

          <StarChart />
        </section>

        <section id="method" className="border-t border-[#F2F0E6]/10">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[#D4AF6A]">
                Plate II · method
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl italic leading-tight text-[#F2F0E6] sm:text-4xl">
                Every note, a fixed point.
              </h2>
            </div>
            <p className="font-[family-name:var(--font-display)] text-[16px] leading-7 text-[#F2F0E6]/65">
              Write a note and Index logs it like a star: a designation,
              a date discovered, a position relative to everything else
              you&rsquo;ve written. Reference one note from another and
              the two are joined by a line — permanent, visible, and
              easy to trace back at 3am when you can&rsquo;t remember
              where a thought came from.{" "}
              <span className="text-[#F2F0E6]">IDX-002</span>, above, has
              the most lines running to it. That&rsquo;s not an accident
              — it&rsquo;s the note everything else keeps pointing back
              toward.
            </p>
          </div>
        </section>

        <section id="instruments" className="border-t border-[#F2F0E6]/10 bg-[#0a1420]">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[#D4AF6A]">
                  Plate III · instruments
                </p>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl italic leading-tight text-[#F2F0E6] sm:text-4xl">
                  Take a bearing on anything you&rsquo;ve written.
                </h2>
                <p className="mt-5 max-w-md font-[family-name:var(--font-display)] text-[16px] leading-7 text-[#F2F0E6]/65">
                  Search reads every star in the sky at once — titles,
                  bodies, even notes you connected to years ago. Type
                  what you half-remember and Index plots a course
                  straight to it.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="h-48 w-48 text-[#7FA8C9]/70">
                  <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="0.6" />
                  <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.6" />
                  {Array.from({ length: 36 }).map((_, i) => {
                    const angle = (i * 10 * Math.PI) / 180;
                    const long = i % 9 === 0;
                    const r1 = 92;
                    const r2 = long ? 80 : 86;
                    return (
                      <line
                        key={i}
                        x1={100 + r1 * Math.cos(angle)}
                        y1={100 + r1 * Math.sin(angle)}
                        x2={100 + r2 * Math.cos(angle)}
                        y2={100 + r2 * Math.sin(angle)}
                        stroke="currentColor"
                        strokeWidth={long ? 0.8 : 0.4}
                      />
                    );
                  })}
                  <line x1="100" y1="100" x2="146" y2="58" stroke="#D4AF6A" strokeWidth="1.2" />
                  <circle cx="100" cy="100" r="2.5" fill="#D4AF6A" />
                  <text x="100" y="22" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="#F2F0E6" opacity="0.7">N</text>
                  <text x="100" y="186" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="#F2F0E6" opacity="0.7">S</text>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section id="catalog" className="border-t border-[#F2F0E6]/10">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
            <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[#D4AF6A]">
              Plate IV · the catalog
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl italic leading-tight text-[#F2F0E6] sm:text-4xl">
              Pick how much sky you need.
            </h2>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {CATALOG.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex flex-col border p-7 ${
                    plan.featured ? "border-[#D4AF6A] bg-[#0a1420]" : "border-[#F2F0E6]/15"
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-[family-name:var(--font-display)] text-xl italic text-[#F2F0E6]">
                      {plan.name}
                    </h3>
                    <span className="font-[family-name:var(--font-mono)] text-lg text-[#F2F0E6]">
                      {plan.price}
                    </span>
                  </div>
                  <p className="mt-2 font-[family-name:var(--font-display)] text-sm text-[#F2F0E6]/55">
                    {plan.note}
                  </p>
                  <ul className="mt-6 flex flex-col gap-2.5 font-[family-name:var(--font-display)] text-[14px] text-[#F2F0E6]/80">
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-2.5">
                        <span className="text-[#D4AF6A]">✦</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className={`mt-8 px-5 py-3 text-center font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.1em] transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      plan.featured
                        ? "bg-[#D4AF6A] text-[#0e1a2b] focus-visible:outline-[#D4AF6A]"
                        : "border border-[#F2F0E6]/30 text-[#F2F0E6] focus-visible:outline-[#F2F0E6]/60"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[#F2F0E6]/10 bg-[#0a1420]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.1em] text-[#F2F0E6]/45 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <span>Plate I — Index, a chart of everything you know. Engr. 2026.</span>
          <Link href="/" className="text-[#F2F0E6]/45 hover:text-[#D4AF6A]">
            View all five directions
          </Link>
        </div>
      </footer>
    </div>
  );
}
