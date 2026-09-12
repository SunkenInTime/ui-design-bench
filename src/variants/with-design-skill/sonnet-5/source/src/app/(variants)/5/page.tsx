import Link from "next/link";
import type { Metadata } from "next";
import { Bricolage_Grotesque, Staatliches, IBM_Plex_Sans } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});

const staatliches = Staatliches({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-stencil",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Index — Switchboard",
  description:
    "Index patches your notes together like lines on a switchboard — plug two in, and the connection holds.",
};

const CABLES: { x1: number; y1: number; x2: number; y2: number; color: string }[] = [
  { x1: 8.33, y1: 25, x2: 41.67, y2: 75, color: "#C1432B" },
  { x1: 58.33, y1: 25, x2: 75, y2: 75, color: "#2F7A6F" },
  { x1: 91.67, y1: 25, x2: 8.33, y2: 75, color: "#D9A23B" },
  { x1: 25, y1: 75, x2: 58.33, y2: 75, color: "#2F7A6F" },
];

const JACK_COLS = [8.33, 25, 41.67, 58.33, 75, 91.67];

const LOG_ENTRIES = [
  { time: "09:30", action: "PATCHED", detail: "Jack 02 → Jack 07" },
  { time: "11:15", action: "NEW LINE", detail: "Jack 09 opened" },
  { time: "13:47", action: "PATCHED", detail: "Jack 06 → Jack 01" },
  { time: "14:02", action: "PATCHED", detail: "Jack 03 → Jack 11" },
];

const LINES = [
  {
    name: "Party Line",
    price: "Free",
    note: "Share the board — one line in, one line out.",
    features: ["Up to 20 jacks (notes)", "Patch up to 10 connections", "Shared search"],
    cta: "Get a party line",
  },
  {
    name: "Private Line",
    price: "$8/mo",
    note: "Your own switchboard, every line open.",
    features: [
      "Unlimited jacks and patches",
      "Full-text search across the board",
      "Operator log, full history",
      "Export the whole board, anytime",
    ],
    cta: "Get a private line",
    featured: true,
  },
];

function PatchBay() {
  return (
    <div className="w-full max-w-lg rounded-md border border-[#A9824C]/30 bg-[#1a1410] p-6">
      <div className="relative grid grid-cols-6 gap-x-2 gap-y-10">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        >
          {CABLES.map((c, i) => (
            <path
              key={i}
              d={`M ${c.x1} ${c.y1} Q ${(c.x1 + c.x2) / 2} ${Math.max(c.y1, c.y2) + 14} ${c.x2} ${c.y2}`}
              fill="none"
              stroke={c.color}
              strokeWidth="1.6"
              strokeLinecap="round"
              opacity="0.9"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        {JACK_COLS.concat(JACK_COLS).map((_, i) => {
          const num = String(i + 1).padStart(2, "0");
          return (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#A9824C] bg-[#211a16] shadow-inner">
                <div className="h-2.5 w-2.5 rounded-full bg-black/70" />
              </div>
              <span className="font-[family-name:var(--font-stencil)] text-[10px] tracking-wide text-[#EDE3D0]/50">
                {num}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function SwitchboardLanding() {
  return (
    <div
      className={`min-h-screen bg-[#211a16] text-[#EDE3D0] ${bricolage.variable} ${staatliches.variable} ${plexSans.variable}`}
    >
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7 sm:px-10">
        <span className="font-[family-name:var(--font-stencil)] text-2xl tracking-wide text-[#EDE3D0]">
          Index
        </span>
        <nav className="hidden items-center gap-8 font-[family-name:var(--font-body)] text-[13px] font-medium text-[#EDE3D0]/55 sm:flex">
          <a className="transition-colors hover:text-[#D9A23B]" href="#patch">Patch</a>
          <a className="transition-colors hover:text-[#D9A23B]" href="#log">Operator log</a>
          <a className="transition-colors hover:text-[#D9A23B]" href="#lines">Lines</a>
        </nav>
        <a
          href="#lines"
          className="flex items-center gap-2 rounded-full border border-[#A9824C]/50 px-4 py-2 font-[family-name:var(--font-body)] text-[13px] font-medium text-[#EDE3D0] transition-colors hover:bg-[#A9824C]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9824C]"
        >
          <span className="h-2 w-2 rounded-full bg-[#2F7A6F]" />
          Sign in
        </a>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-14 px-6 pb-24 pt-10 sm:px-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-10">
          <div>
            <p className="font-[family-name:var(--font-stencil)] text-sm tracking-[0.1em] text-[#D9A23B]">
              Line status: open
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-[2.7rem] font-semibold leading-[1.05] tracking-tight text-[#EDE3D0] sm:text-[3.4rem]">
              Every idea is a call waiting to be connected.
            </h1>
            <p className="mt-6 max-w-md font-[family-name:var(--font-body)] text-[16px] leading-7 text-[#EDE3D0]/65">
              Index treats your notes like lines on a switchboard. Patch
              two together and the connection holds — permanently,
              visibly, ready to trace back whenever you need it.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a
                href="#lines"
                className="rounded-md bg-[#D9A23B] px-6 py-3 font-[family-name:var(--font-body)] text-[14px] font-semibold text-[#211a16] transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9A23B]"
              >
                Plug in
              </a>
              <a
                href="#patch"
                className="font-[family-name:var(--font-body)] text-[14px] font-medium text-[#EDE3D0]/60 underline decoration-[#A9824C]/50 decoration-2 underline-offset-4 transition-colors hover:text-[#EDE3D0] hover:decoration-[#A9824C]"
              >
                See the board
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <PatchBay />
          </div>
        </section>

        <section id="patch" className="border-t border-[#EDE3D0]/10">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="font-[family-name:var(--font-stencil)] text-sm tracking-[0.1em] text-[#D9A23B]">
                How it works
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-[#EDE3D0] sm:text-4xl">
                Patch your ideas together.
              </h2>
            </div>
            <p className="font-[family-name:var(--font-body)] text-[16px] leading-7 text-[#EDE3D0]/65">
              Pick up a note. Plug it into another. Index keeps the line
              open between them for good, and logs the connection so you
              can trace it back later — no tangled cables, even once the
              board fills up.
            </p>
          </div>
        </section>

        <section id="log" className="border-t border-[#EDE3D0]/10 bg-[#1a1410]">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
            <p className="font-[family-name:var(--font-stencil)] text-sm tracking-[0.1em] text-[#D9A23B]">
              Today&rsquo;s shift
            </p>
            <h2 className="mt-4 max-w-lg font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-[#EDE3D0] sm:text-4xl">
              The operator&rsquo;s log.
            </h2>

            <div className="mt-10 max-w-xl divide-y divide-[#EDE3D0]/10 border-y border-[#EDE3D0]/10">
              {LOG_ENTRIES.map((entry) => (
                <div
                  key={entry.time + entry.detail}
                  className="flex items-center gap-5 py-3.5 font-[family-name:var(--font-body)] text-[14px]"
                >
                  <span className="w-12 shrink-0 text-[#EDE3D0]/40">{entry.time}</span>
                  <span
                    className={`w-20 shrink-0 font-[family-name:var(--font-stencil)] text-[11px] tracking-wide ${
                      entry.action === "PATCHED" ? "text-[#2F7A6F]" : "text-[#D9A23B]"
                    }`}
                  >
                    {entry.action}
                  </span>
                  <span className="text-[#EDE3D0]/80">{entry.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="lines" className="border-t border-[#EDE3D0]/10">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
            <p className="font-[family-name:var(--font-stencil)] text-sm tracking-[0.1em] text-[#D9A23B]">
              Lines available
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-[#EDE3D0] sm:text-4xl">
              Pick a line.
            </h2>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {LINES.map((line) => (
                <div
                  key={line.name}
                  className={`flex flex-col rounded-md border p-7 ${
                    line.featured ? "border-[#D9A23B] bg-[#1a1410]" : "border-[#EDE3D0]/15"
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[#EDE3D0]">
                      {line.name}
                    </h3>
                    <span className="font-[family-name:var(--font-body)] text-lg font-semibold text-[#EDE3D0]">
                      {line.price}
                    </span>
                  </div>
                  <p className="mt-2 font-[family-name:var(--font-body)] text-sm text-[#EDE3D0]/55">
                    {line.note}
                  </p>
                  <ul className="mt-6 flex flex-col gap-2.5 font-[family-name:var(--font-body)] text-[14px] text-[#EDE3D0]/80">
                    {line.features.map((f) => (
                      <li key={f} className="flex gap-2.5">
                        <span className="text-[#D9A23B]">●</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className={`mt-8 rounded-md px-5 py-3 text-center font-[family-name:var(--font-body)] text-[14px] font-semibold transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      line.featured
                        ? "bg-[#D9A23B] text-[#211a16] focus-visible:outline-[#D9A23B]"
                        : "border border-[#EDE3D0]/30 text-[#EDE3D0] focus-visible:outline-[#EDE3D0]/60"
                    }`}
                  >
                    {line.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#EDE3D0]/10 bg-[#1a1410]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div className="flex items-center gap-3">
            <span className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-[#2F7A6F]" />
              <span className="h-2 w-2 rounded-full bg-[#D9A23B]" />
              <span className="h-2 w-2 rounded-full bg-[#C1432B]" />
            </span>
            <span className="font-[family-name:var(--font-stencil)] text-sm tracking-wide text-[#EDE3D0]">
              All lines open — Index switchboard
            </span>
          </div>
          <Link
            href="/"
            className="font-[family-name:var(--font-body)] text-[13px] text-[#EDE3D0]/55 underline-offset-4 hover:text-[#D9A23B] hover:underline"
          >
            View all five directions
          </Link>
        </div>
      </footer>
    </div>
  );
}
