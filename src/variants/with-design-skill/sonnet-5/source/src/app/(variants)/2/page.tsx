import Link from "next/link";
import type { Metadata } from "next";
import { Big_Shoulders, Public_Sans, IBM_Plex_Mono } from "next/font/google";

const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-display",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Index — Mind Palace",
  description:
    "Index organizes your notes into rooms you can walk back into, like a memory palace built in software.",
};

const ROOMS = [
  { code: "RM.01", name: "Study", fn: "capture", desc: "Quick capture, any device, under five seconds." },
  { code: "RM.02", name: "Workshop", fn: "connect", desc: "Draw a line between any two notes, seen from both." },
  { code: "RM.03", name: "Archive", fn: "recall", desc: "Full-text search across every room you've built." },
  { code: "RM.04", name: "Library", fn: "overview", desc: "A floor plan of your whole mind, zoomed out." },
];

const PLANS = [
  {
    name: "Sketch",
    price: "Free",
    note: "One floor, as many rooms as you can sketch.",
    features: ["Up to 4 rooms", "Connections between notes", "Search within a floor"],
    cta: "Start sketching",
  },
  {
    name: "Construction Set",
    price: "$8/mo",
    note: "Unlimited floors, built to last.",
    features: [
      "Unlimited floors and rooms",
      "Full-text search across the building",
      "Revision history for every room",
      "Export the blueprint as PDF or Markdown",
    ],
    cta: "Get the construction set",
    featured: true,
  },
];

function CornerMarks({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={`h-4 w-4 text-[#6CC4D9]/50 ${className}`} fill="none">
      <path d="M1 6V1H6" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function FloorPlan() {
  return (
    <div className="relative w-full max-w-md">
      <div className="relative grid grid-cols-2 gap-px border border-[#6CC4D9]/40 bg-[#6CC4D9]/40">
        {ROOMS.map((room) => (
          <div
            key={room.code}
            className="relative flex aspect-square flex-col justify-between bg-[#0c1f33] p-3.5 sm:p-5"
          >
            <CornerMarks className="absolute left-1.5 top-1.5" />
            <CornerMarks className="absolute right-1.5 top-1.5 rotate-90" />
            <CornerMarks className="absolute bottom-1.5 left-1.5 -rotate-90" />
            <CornerMarks className="absolute bottom-1.5 right-1.5 rotate-180" />
            <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#6CC4D9]/70">
              {room.code}
            </span>
            <div>
              <p className="font-[family-name:var(--font-display)] text-xl font-semibold uppercase leading-none tracking-wide text-[#EAF2F5] sm:text-2xl">
                {room.name}
              </p>
              <p className="mt-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[#D98E3B]">
                {room.fn}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 text-[#6CC4D9]/50">
        <span className="h-2 w-px bg-current" />
        <span className="h-px flex-1 bg-current" />
        <span className="shrink-0 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.12em]">
          4 rooms · unlimited notes
        </span>
        <span className="h-px flex-1 bg-current" />
        <span className="h-2 w-px bg-current" />
      </div>
    </div>
  );
}

export default function MindPalaceLanding() {
  return (
    <div
      className={`min-h-screen bg-[#0c1f33] text-[#EAF2F5] ${bigShoulders.variable} ${publicSans.variable} ${plexMono.variable}`}
    >
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#6CC4D9 1px, transparent 1px), linear-gradient(90deg, #6CC4D9 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-7 sm:px-10">
        <span className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wide text-[#EAF2F5]">
          Index
        </span>
        <nav className="hidden items-center gap-8 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[#EAF2F5]/55 sm:flex">
          <a className="transition-colors hover:text-[#6CC4D9]" href="#method">Method</a>
          <a className="transition-colors hover:text-[#6CC4D9]" href="#rooms">Rooms</a>
          <a className="transition-colors hover:text-[#6CC4D9]" href="#plans">Plans</a>
        </nav>
        <a
          href="#plans"
          className="rounded-none border border-[#6CC4D9]/50 px-4 py-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.1em] text-[#EAF2F5] transition-colors hover:bg-[#6CC4D9]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6CC4D9]"
        >
          Sign in
        </a>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-6xl gap-16 px-6 pb-28 pt-10 sm:px-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-12">
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[#D98E3B]">
              Dwg. IDX—001 · A floor plan for your memory
            </p>
            <h1 className="mt-5 font-[family-name:var(--font-display)] text-[3.2rem] font-bold uppercase leading-[0.98] tracking-tight text-[#EAF2F5] sm:text-[4rem]">
              Build a mind palace you can actually walk through.
            </h1>
            <p className="mt-6 max-w-md font-[family-name:var(--font-body)] text-[16px] leading-7 text-[#EAF2F5]/65">
              Index organizes your notes the way the ancient memory
              technique does — into rooms you can walk back into, not tags
              you have to remember.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a
                href="#plans"
                className="bg-[#EAF2F5] px-6 py-3 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.1em] text-[#0c1f33] transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAF2F5]"
              >
                Start the blueprint
              </a>
              <a
                href="#rooms"
                className="font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.1em] text-[#EAF2F5]/65 underline decoration-[#6CC4D9]/50 decoration-1 underline-offset-4 transition-colors hover:text-[#EAF2F5] hover:decoration-[#6CC4D9]"
              >
                See the floor plan
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <FloorPlan />
          </div>
        </section>

        <section id="method" className="border-t border-[#EAF2F5]/10">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[#D98E3B]">
                  Note 01 — method
                </p>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold uppercase leading-tight text-[#EAF2F5] sm:text-4xl">
                  The method of loci, rebuilt in software.
                </h2>
              </div>
              <p className="font-[family-name:var(--font-body)] text-[16px] leading-7 text-[#EAF2F5]/65">
                Two thousand years ago, orators memorized long speeches by
                placing each idea in a room of an imagined building, then
                recalling the speech by walking through it in order. Index
                gives every note a room instead of a tag — so finding a
                thought is less like searching, and more like remembering
                where you put it.
              </p>
            </div>
          </div>
        </section>

        <section id="rooms" className="border-t border-[#EAF2F5]/10 bg-[#0a1827]">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
            <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[#D98E3B]">
              Room schedule
            </p>
            <h2 className="mt-4 max-w-lg font-[family-name:var(--font-display)] text-3xl font-bold uppercase leading-tight text-[#EAF2F5] sm:text-4xl">
              Four rooms, one building.
            </h2>

            <div className="mt-12 overflow-hidden border border-[#EAF2F5]/15">
              <div className="grid grid-cols-[auto_1fr_auto] gap-x-4 border-b border-[#EAF2F5]/15 bg-[#0c1f33] px-5 py-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-[#EAF2F5]/40 sm:grid-cols-[5rem_8rem_1fr]">
                <span>Room</span>
                <span>Function</span>
                <span className="hidden sm:block">Notes</span>
              </div>
              {ROOMS.map((room, i) => (
                <div
                  key={room.code}
                  className={`grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 px-5 py-4 font-[family-name:var(--font-body)] text-sm sm:grid-cols-[5rem_8rem_1fr] ${
                    i % 2 === 0 ? "bg-[#0c1f33]/40" : ""
                  }`}
                >
                  <span className="font-[family-name:var(--font-mono)] text-[#D98E3B]">{room.code}</span>
                  <span className="font-medium text-[#EAF2F5]">{room.name}</span>
                  <span className="col-span-3 text-[#EAF2F5]/55 sm:col-span-1">{room.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="plans" className="border-t border-[#EAF2F5]/10">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
            <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[#D98E3B]">
              Drawing set
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold uppercase leading-tight text-[#EAF2F5] sm:text-4xl">
              Pick your drawing set.
            </h2>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex flex-col border p-7 ${
                    plan.featured ? "border-[#D98E3B] bg-[#0a1827]" : "border-[#EAF2F5]/15"
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase text-[#EAF2F5]">
                      {plan.name}
                    </h3>
                    <span className="font-[family-name:var(--font-mono)] text-lg text-[#EAF2F5]">
                      {plan.price}
                    </span>
                  </div>
                  <p className="mt-2 font-[family-name:var(--font-body)] text-sm text-[#EAF2F5]/55">
                    {plan.note}
                  </p>
                  <ul className="mt-6 flex flex-col gap-2.5 font-[family-name:var(--font-body)] text-[14px] text-[#EAF2F5]/80">
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-2.5">
                        <span className="text-[#D98E3B]">+</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className={`mt-8 px-5 py-3 text-center font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.1em] transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      plan.featured
                        ? "bg-[#D98E3B] text-[#0c1f33] focus-visible:outline-[#D98E3B]"
                        : "border border-[#EAF2F5]/30 text-[#EAF2F5] focus-visible:outline-[#EAF2F5]/60"
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

      <footer className="relative z-10 border-t border-[#EAF2F5]/15 bg-[#0a1827]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.08em] text-[#EAF2F5]/45 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="text-[#EAF2F5]">Index</span>
            <span>Dwg. No. IDX—001</span>
            <span>Scale N.T.S.</span>
            <span>Rev. 2026.06</span>
          </div>
          <Link href="/" className="text-[#EAF2F5]/45 hover:text-[#6CC4D9]">
            View all five directions
          </Link>
        </div>
      </footer>
    </div>
  );
}
