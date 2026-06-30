import Link from "next/link";
import type { Metadata } from "next";
import { Cormorant_Garamond, Caveat, Karla } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-tag",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Index — Digital Garden",
  description:
    "Index lets notes mature over time, from a rough seedling to a connected, evergreen thought.",
};

type Stage = "seedling" | "budding" | "evergreen";

const STAGE_META: Record<Stage, { color: string; label: string }> = {
  seedling: { color: "#9cb86f", label: "seedling" },
  budding: { color: "#6f9c4d", label: "budding" },
  evergreen: { color: "#2f4a3c", label: "evergreen" },
};

function PlantIcon({ stage }: { stage: Stage }) {
  const color = STAGE_META[stage].color;
  if (stage === "seedling") {
    return (
      <svg viewBox="0 0 60 100" className="h-16 w-10">
        <path d="M30 100 L30 72" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M30 78 C 20 76, 16 68, 18 60 C 27 64, 30 70, 30 78" fill={color} />
        <path d="M30 74 C 40 71, 44 63, 42 56 C 33 60, 30 67, 30 74" fill={color} />
      </svg>
    );
  }
  if (stage === "budding") {
    return (
      <svg viewBox="0 0 60 100" className="h-16 w-10">
        <path d="M30 100 Q 25 70 30 42" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M30 80 C 18 78, 12 68, 15 58 C 26 62, 30 70, 30 80" fill={color} />
        <path d="M30 70 C 42 67, 47 57, 44 48 C 33 52, 29 61, 30 70" fill={color} />
        <ellipse cx="30" cy="38" rx="7" ry="10" fill={color} />
        <ellipse cx="30" cy="36" rx="4" ry="6" fill="#eef1e6" opacity="0.35" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 60 100" className="h-16 w-10">
      <path d="M30 100 L30 46" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="30" cy="34" r="17" fill={color} />
      <circle cx="17" cy="42" r="11" fill={color} />
      <circle cx="43" cy="42" r="11" fill={color} />
      <circle cx="30" cy="20" r="11" fill={color} />
    </svg>
  );
}

function PlantTag({
  stage,
  title,
  meta,
}: {
  stage: Stage;
  title: string;
  meta: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <PlantIcon stage={stage} />
      <div className="mt-1 w-28 rounded-sm border border-[#4a3826]/25 bg-[#fbf9f1] px-2 py-1.5 shadow-sm">
        <p className="font-[family-name:var(--font-tag)] text-[15px] leading-none text-[#3f5536]">
          {title}
        </p>
        <p className="mt-0.5 font-[family-name:var(--font-body)] text-[9px] uppercase tracking-[0.1em] text-[#4a3826]/55">
          {meta}
        </p>
      </div>
    </div>
  );
}

const STAGES = [
  {
    stage: "seedling" as Stage,
    title: "A raw thought, just captured.",
    desc: "Rough, unfinished, maybe wrong. Most notes start here and that's fine — nothing needs to be sorted on arrival.",
  },
  {
    stage: "budding" as Stage,
    title: "Revisited and connected.",
    desc: "You come back to it, link it to something else, soften the rough edges. It starts taking shape on its own.",
  },
  {
    stage: "evergreen" as Stage,
    title: "Matured through repeat visits.",
    desc: "Proven worth keeping. An evergreen note has earned its place — it's the one you reach for without thinking.",
  },
];

const BED = [
  { stage: "seedling" as Stage, title: "Talk outline", meta: "watered today" },
  { stage: "budding" as Stage, title: "On rereading", meta: "watered 2d ago" },
  { stage: "evergreen" as Stage, title: "Writing rules", meta: "watered 1mo ago" },
  { stage: "budding" as Stage, title: "Sourdough log", meta: "watered 4d ago" },
  { stage: "seedling" as Stage, title: "Trip ideas", meta: "watered today" },
];

const HERO_PLANTS = [
  { stage: "seedling" as Stage, title: "New idea", meta: "just sown" },
  { stage: "budding" as Stage, title: "Taking shape", meta: "linked twice" },
  { stage: "evergreen" as Stage, title: "Worth keeping", meta: "revisited often" },
];

const PLANS = [
  {
    name: "Window Box",
    price: "Free",
    note: "A small bed, enough to start cultivating.",
    features: ["Up to 50 notes", "All three growth stages", "Manual watering (search)"],
    cta: "Start a window box",
  },
  {
    name: "Greenhouse",
    price: "$8/mo",
    note: "Room to grow, with everything that helps.",
    features: [
      "Unlimited notes and beds",
      "Automatic connections between related notes",
      "Full almanac — search every season",
      "Export your whole garden, anytime",
    ],
    cta: "Build a greenhouse",
    featured: true,
  },
];

export default function DigitalGardenLanding() {
  return (
    <div
      className={`min-h-screen bg-[#eef1e6] text-[#33402c] ${cormorant.variable} ${caveat.variable} ${karla.variable}`}
    >
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7 sm:px-10">
        <span className="font-[family-name:var(--font-display)] text-2xl italic text-[#33402c]">
          Index
        </span>
        <nav className="hidden items-center gap-8 font-[family-name:var(--font-body)] text-[13px] font-medium text-[#33402c]/60 sm:flex">
          <a className="transition-colors hover:text-[#3f5536]" href="#grow">How notes grow</a>
          <a className="transition-colors hover:text-[#3f5536]" href="#bed">Today&rsquo;s bed</a>
          <a className="transition-colors hover:text-[#3f5536]" href="#plant">Get planting</a>
        </nav>
        <a
          href="#plant"
          className="rounded-full border border-[#3f5536]/30 px-4 py-2 font-[family-name:var(--font-body)] text-[13px] font-medium text-[#33402c] transition-colors hover:bg-[#3f5536]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f5536]"
        >
          Sign in
        </a>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 pb-8 pt-10 sm:px-10">
          <div className="max-w-xl">
            <p className="font-[family-name:var(--font-tag)] text-xl text-[#6f9c4d]">
              a place to grow your thinking
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl italic leading-[1.05] text-[#2f4a3c] sm:text-6xl">
              Plant a thought. Let it grow into something worth finding.
            </h1>
            <p className="mt-6 max-w-md font-[family-name:var(--font-body)] text-[16px] leading-7 text-[#33402c]/70">
              Notes in Index aren&rsquo;t filed and forgotten — they mature.
              A rough idea starts as a seedling, gets revisited until it
              buds, and becomes evergreen once it&rsquo;s proven worth
              keeping.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="#plant"
                className="rounded-full bg-[#3f5536] px-6 py-3 font-[family-name:var(--font-body)] text-[14px] font-medium text-[#eef1e6] transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f5536]"
              >
                Plant your first note
              </a>
              <a
                href="#bed"
                className="font-[family-name:var(--font-body)] text-[14px] font-medium text-[#33402c]/65 underline decoration-[#9cb86f] decoration-2 underline-offset-4 transition-colors hover:text-[#33402c]"
              >
                Walk through the garden
              </a>
            </div>
          </div>
        </section>

        {/* Garden bed hero visual */}
        <section className="relative mt-6 overflow-hidden">
          <div className="relative flex items-end justify-center gap-10 px-6 pb-8 pt-16 sm:gap-16 sm:px-10">
            {HERO_PLANTS.map((p, i) => (
              <PlantTag key={i} stage={p.stage} title={p.title} meta={p.meta} />
            ))}
          </div>
          <div
            className="h-12 w-full"
            style={{
              background: "linear-gradient(to bottom, #5b4632, #4a3826)",
            }}
          />
        </section>

        {/* How notes grow */}
        <section id="grow" className="border-t border-[#33402c]/10 bg-[#4a3826]">
          <div className="mx-auto max-w-6xl px-6 py-24 text-[#f2efe3] sm:px-10">
            <p className="font-[family-name:var(--font-tag)] text-xl text-[#9cb86f]">
              the almanac
            </p>
            <h2 className="mt-2 max-w-lg font-[family-name:var(--font-display)] text-4xl italic leading-tight text-[#f2efe3]">
              How a note grows.
            </h2>

            <div className="mt-12 grid gap-10 sm:grid-cols-3">
              {STAGES.map((s) => (
                <div key={s.stage} className="flex flex-col">
                  <PlantIcon stage={s.stage} />
                  <p className="mt-3 font-[family-name:var(--font-tag)] text-2xl text-[#9cb86f]">
                    {STAGE_META[s.stage].label}
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-body)] text-[15px] font-medium text-[#f2efe3]">
                    {s.title}
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-body)] text-[14px] leading-6 text-[#f2efe3]/65">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Today's bed */}
        <section id="bed" className="border-t border-[#33402c]/10">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
            <p className="font-[family-name:var(--font-tag)] text-xl text-[#6f9c4d]">
              today&rsquo;s bed
            </p>
            <h2 className="mt-2 max-w-lg font-[family-name:var(--font-display)] text-4xl italic leading-tight text-[#2f4a3c]">
              Five notes, tended this week.
            </h2>

            <div className="mt-12 flex flex-wrap items-end justify-center gap-x-8 gap-y-10 rounded-2xl bg-[#e3e8d6] px-6 py-10 sm:justify-between">
              {BED.map((p, i) => (
                <PlantTag key={i} stage={p.stage} title={p.title} meta={p.meta} />
              ))}
            </div>
          </div>
        </section>

        {/* Seed packet / pricing */}
        <section id="plant" className="border-t border-[#33402c]/10 bg-[#e3e8d6]">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
            <p className="font-[family-name:var(--font-tag)] text-xl text-[#6f9c4d]">
              planting season
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl italic leading-tight text-[#2f4a3c]">
              Pick a bed size.
            </h2>

            <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              {/* seed packet instructions */}
              <div className="rounded-lg border-2 border-dashed border-[#3f5536]/30 bg-[#fbf9f1] p-7">
                <p className="font-[family-name:var(--font-tag)] text-2xl text-[#3f5536]">
                  Index — care card
                </p>
                <dl className="mt-5 flex flex-col gap-4 font-[family-name:var(--font-body)] text-[13px] text-[#33402c]/75">
                  <div className="flex justify-between gap-4 border-b border-[#33402c]/10 pb-3">
                    <dt className="font-medium text-[#33402c]">Sow</dt>
                    <dd className="text-right">Capture your first thought, however rough.</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-[#33402c]/10 pb-3">
                    <dt className="font-medium text-[#33402c]">Thin to</dt>
                    <dd className="text-right">One idea per note — it grows better alone.</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="font-medium text-[#33402c]">Harvest in</dt>
                    <dd className="text-right">As long as it takes. Some notes evergreen in a week.</dd>
                  </div>
                </dl>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {PLANS.map((plan) => (
                  <div
                    key={plan.name}
                    className={`flex flex-col rounded-lg border p-7 ${
                      plan.featured
                        ? "border-[#3f5536] bg-[#3f5536] text-[#eef1e6]"
                        : "border-[#33402c]/15 bg-[#fbf9f1] text-[#33402c]"
                    }`}
                  >
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-[family-name:var(--font-display)] text-2xl italic">
                        {plan.name}
                      </h3>
                      <span className="font-[family-name:var(--font-body)] text-lg font-semibold">
                        {plan.price}
                      </span>
                    </div>
                    <p
                      className={`mt-2 font-[family-name:var(--font-body)] text-sm ${
                        plan.featured ? "text-[#eef1e6]/75" : "text-[#33402c]/60"
                      }`}
                    >
                      {plan.note}
                    </p>
                    <ul className="mt-6 flex flex-col gap-2.5 font-[family-name:var(--font-body)] text-[14px]">
                      {plan.features.map((f) => (
                        <li key={f} className="flex gap-2.5">
                          <span className={plan.featured ? "text-[#9cb86f]" : "text-[#6f9c4d]"}>
                            ✦
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#"
                      className={`mt-8 rounded-full px-5 py-3 text-center font-[family-name:var(--font-body)] text-[14px] font-medium transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                        plan.featured
                          ? "bg-[#eef1e6] text-[#3f5536] focus-visible:outline-[#eef1e6]"
                          : "border border-[#3f5536]/30 text-[#33402c] focus-visible:outline-[#3f5536]/60"
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#33402c]/10 bg-[#fbf9f1]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p className="font-[family-name:var(--font-tag)] text-xl text-[#3f5536]">
            Index — sow now, even if you don&rsquo;t know what it&rsquo;ll become.
          </p>
          <Link
            href="/"
            className="font-[family-name:var(--font-body)] text-[13px] text-[#33402c]/55 underline-offset-4 hover:text-[#3f5536] hover:underline"
          >
            View all five directions
          </Link>
        </div>
      </footer>
    </div>
  );
}
