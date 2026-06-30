import Link from "next/link";
import type { Metadata } from "next";
import { Fraunces, Courier_Prime, Source_Serif_4 } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-courier",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
});

export const metadata: Metadata = {
  title: "Index — The Slip-Box",
  description:
    "Index files every thought onto a cross-referenced card, like a Zettelkasten you can actually search.",
};

const DRAWERS = [
  {
    label: "Capture",
    copy: "Get a thought onto a card in under five seconds, from wherever you are.",
  },
  {
    label: "Connect",
    copy: "Add a SEE ALSO line and Index draws the connection both ways.",
  },
  {
    label: "Recall",
    copy: "Search by subject, by date, or by whatever you half-remember.",
  },
  {
    label: "Archive",
    copy: "Nothing expires. Old cards stay exactly where you filed them.",
  },
];

const PLANS = [
  {
    name: "Reader's Card",
    price: "Free",
    note: "For anyone starting their first catalog.",
    features: [
      "Unlimited cards",
      "Cross-references between cards",
      "Search by subject or date",
    ],
    cta: "Sign up free",
  },
  {
    name: "Researcher's Card",
    price: "$8/mo",
    note: "For people who live in their notes.",
    features: [
      "Everything in Reader's",
      "Full-text search across every drawer",
      "Card history, every revision kept",
      "Export the whole catalog, anytime",
    ],
    cta: "Start researching",
    featured: true,
  },
];

function IndexCard({
  accession,
  subject,
  body,
  seeAlso,
  rotate = "0deg",
  className = "",
}: {
  accession: string;
  subject: string;
  body: string;
  seeAlso?: string[];
  rotate?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex h-56 w-72 shrink-0 flex-col bg-[#f5efe0] p-5 text-[#1d2b3a] shadow-[0_18px_30px_-12px_rgba(0,0,0,0.45)] ${sourceSerif.variable} ${courierPrime.variable} ${className}`}
      style={{
        transform: `rotate(${rotate})`,
        backgroundImage:
          "repeating-linear-gradient(to bottom, transparent, transparent 27px, rgba(29,43,58,0.1) 28px)",
      }}
    >
      <div className="flex items-baseline justify-between border-b border-[#1d2b3a]/25 pb-1.5 font-[family-name:var(--font-courier)] text-[10px] tracking-wide text-[#1d2b3a]/60">
        <span>ACC. NO. {accession}</span>
        <span>INDEX</span>
      </div>
      <p className="mt-3 font-[family-name:var(--font-courier)] text-[11px] font-bold uppercase tracking-[0.08em]">
        {subject}
      </p>
      <p className="mt-2 flex-1 font-[family-name:var(--font-source-serif)] text-[13px] italic leading-snug text-[#1d2b3a]/85">
        {body}
      </p>
      {seeAlso && (
        <p className="border-t border-[#1d2b3a]/20 pt-1.5 font-[family-name:var(--font-courier)] text-[10px] text-[#1d2b3a]/60">
          SEE ALSO&nbsp;
          {seeAlso.join(", ")}
        </p>
      )}
    </div>
  );
}

export default function SlipBoxLanding() {
  return (
    <div
      className={`min-h-screen bg-[#16241c] text-[#eee7d3] ${fraunces.variable} ${courierPrime.variable} ${sourceSerif.variable}`}
    >
      {/* faint linen texture */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='6'%3E%3Crect width='6' height='6' fill='none'/%3E%3Cpath d='M0 0L6 6M6 0L0 6' stroke='%23ffffff' stroke-width='0.4'/%3E%3C/svg%3E\")",
        }}
      />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-7 sm:px-10">
        <span className="font-[family-name:var(--font-fraunces)] text-xl italic tracking-tight text-[#f5efe0]">
          Index
        </span>
        <nav className="hidden items-center gap-8 font-[family-name:var(--font-courier)] text-[11px] uppercase tracking-[0.14em] text-[#eee7d3]/65 sm:flex">
          <a className="border-t border-transparent pt-1 transition-colors hover:border-[#b08d57] hover:text-[#f5efe0]" href="#method">
            Method
          </a>
          <a className="border-t border-transparent pt-1 transition-colors hover:border-[#b08d57] hover:text-[#f5efe0]" href="#drawers">
            Drawers
          </a>
          <a className="border-t border-transparent pt-1 transition-colors hover:border-[#b08d57] hover:text-[#f5efe0]" href="#card">
            Get a card
          </a>
        </nav>
        <a
          href="#card"
          className="rounded-sm border border-[#b08d57]/60 px-4 py-2 font-[family-name:var(--font-courier)] text-[11px] uppercase tracking-[0.1em] text-[#f5efe0] transition-colors hover:bg-[#b08d57]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b08d57]"
        >
          Sign in
        </a>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl gap-16 px-6 pb-28 pt-10 sm:px-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-10">
          <div>
            <p className="font-[family-name:var(--font-courier)] text-[11px] uppercase tracking-[0.22em] text-[#b08d57]">
              A slip-box for everything you think
            </p>
            <h1 className="mt-5 font-[family-name:var(--font-fraunces)] text-[2.75rem] leading-[1.05] tracking-tight text-[#f5efe0] sm:text-[3.4rem]">
              File every thought before it slips your mind.
            </h1>
            <p className="mt-6 max-w-md font-[family-name:var(--font-source-serif)] text-[17px] leading-7 text-[#eee7d3]/75">
              Index turns scattered notes into a catalog you can actually
              search — cross-referenced, dated, and never lost in a folder
              you forgot existed.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#card"
                className="rounded-sm bg-[#f5efe0] px-6 py-3 font-[family-name:var(--font-courier)] text-[12px] uppercase tracking-[0.1em] text-[#16241c] transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5efe0]"
              >
                Start your card
              </a>
              <a
                href="#method"
                className="font-[family-name:var(--font-courier)] text-[12px] uppercase tracking-[0.1em] text-[#eee7d3]/70 underline decoration-[#b08d57]/50 decoration-1 underline-offset-4 transition-colors hover:text-[#f5efe0] hover:decoration-[#b08d57]"
              >
                Browse a sample drawer
              </a>
            </div>
          </div>

          <div className="relative flex h-72 items-center justify-center [perspective:1200px] sm:h-80">
            <IndexCard
              accession="0203"
              subject="Reading list — Q3"
              body="Borges, “The Library of Babel.” Re-read for the catalog metaphor — note the hexagonal galleries."
              seeAlso={["0042"]}
              rotate="-9deg"
              className="absolute left-1/2 top-1/2 -translate-x-[68%] -translate-y-[42%]"
            />
            <IndexCard
              accession="0117"
              subject="Spaced repetition"
              body="Review at 1 day, 3 days, 7 days, 21 days. The gap is the point — recall should feel a little effortful."
              seeAlso={["0042"]}
              rotate="6deg"
              className="absolute left-1/2 top-1/2 -translate-x-[28%] -translate-y-[58%]"
            />
            <IndexCard
              accession="0042"
              subject="Why we forget"
              body="The forgetting curve drops fastest in the first 24 hours — unless the thought gets filed somewhere it can resurface."
              seeAlso={["0117", "0203"]}
              rotate="-2deg"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </section>

        {/* Method / cross-references */}
        <section id="method" className="border-t border-[#eee7d3]/10">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="font-[family-name:var(--font-courier)] text-[11px] uppercase tracking-[0.22em] text-[#b08d57]">
                The method
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-fraunces)] text-3xl italic leading-tight text-[#f5efe0] sm:text-4xl">
                Cross-references, not folders.
              </h2>
              <p className="mt-5 max-w-md font-[family-name:var(--font-source-serif)] text-[16px] leading-7 text-[#eee7d3]/75">
                Folders force a single home for every thought. A card
                catalog doesn&rsquo;t — the same idea gets filed once and
                referenced everywhere it&rsquo;s relevant. Type{" "}
                <span className="text-[#f5efe0]">SEE ALSO</span> and a
                card number, and Index links the two cards in both
                directions, permanently.
              </p>
              <p className="mt-5 max-w-md font-[family-name:var(--font-source-serif)] text-[16px] leading-7 text-[#eee7d3]/75">
                A note filed in 2019 still surfaces in 2026, the moment
                something you&rsquo;re writing now points back to it.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-sm border border-[#eee7d3]/15 bg-[#1d2f24] p-6 font-[family-name:var(--font-courier)] text-[13px] text-[#eee7d3]/80">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#eee7d3]/40">
                On card 0042 — “Why we forget”
              </p>
              <div className="rounded-sm bg-[#16241c] px-4 py-3 leading-6">
                <span className="text-[#b08d57]">SEE ALSO</span> 0117 —
                spaced repetition
                <br />
                <span className="text-[#b08d57]">SEE ALSO</span> 0203 —
                reading list, Q3
              </div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#eee7d3]/40">
                Index quietly adds the reverse reference
              </p>
              <div className="rounded-sm bg-[#16241c] px-4 py-3 leading-6">
                <span className="text-[#b08d57]">SEE ALSO</span> 0042 —
                why we forget
              </div>
            </div>
          </div>
        </section>

        {/* Drawers */}
        <section id="drawers" className="border-t border-[#eee7d3]/10 bg-[#13201a]">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
            <p className="font-[family-name:var(--font-courier)] text-[11px] uppercase tracking-[0.22em] text-[#b08d57]">
              The cabinet
            </p>
            <h2 className="mt-4 max-w-lg font-[family-name:var(--font-fraunces)] text-3xl italic leading-tight text-[#f5efe0] sm:text-4xl">
              Four drawers, one cabinet.
            </h2>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {DRAWERS.map((d, i) => (
                <div key={d.label} className="group relative">
                  <div className="flex h-36 flex-col justify-between rounded-sm border border-[#eee7d3]/15 bg-gradient-to-b from-[#23382c] to-[#1c2e24] p-4 transition-transform duration-300 group-hover:-translate-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-[family-name:var(--font-courier)] text-[10px] text-[#eee7d3]/40">
                        DRAWER {i + 1}
                      </span>
                      <span className="h-2 w-6 rounded-full bg-[#b08d57]/70" />
                    </div>
                    <span className="rounded-sm bg-[#f5efe0] px-2.5 py-1 self-start font-[family-name:var(--font-courier)] text-[11px] font-bold uppercase tracking-[0.06em] text-[#1d2b3a]">
                      {d.label}
                    </span>
                  </div>
                  <p className="mt-3 font-[family-name:var(--font-source-serif)] text-[13px] leading-6 text-[#eee7d3]/65">
                    {d.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Circulation desk / pricing */}
        <section id="card" className="border-t border-[#eee7d3]/10">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
            <p className="font-[family-name:var(--font-courier)] text-[11px] uppercase tracking-[0.22em] text-[#b08d57]">
              Circulation desk
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-fraunces)] text-3xl italic leading-tight text-[#f5efe0] sm:text-4xl">
              Get your card.
            </h2>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex flex-col rounded-sm border p-7 ${
                    plan.featured
                      ? "border-[#b08d57] bg-[#1d2f24]"
                      : "border-[#eee7d3]/15 bg-[#16241c]"
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-[family-name:var(--font-fraunces)] text-xl italic text-[#f5efe0]">
                      {plan.name}
                    </h3>
                    <span className="font-[family-name:var(--font-courier)] text-lg text-[#eee7d3]">
                      {plan.price}
                    </span>
                  </div>
                  <p className="mt-2 font-[family-name:var(--font-source-serif)] text-sm text-[#eee7d3]/60">
                    {plan.note}
                  </p>
                  <ul className="mt-6 flex flex-col gap-2.5 font-[family-name:var(--font-source-serif)] text-[14px] text-[#eee7d3]/80">
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-2.5">
                        <span className="text-[#b08d57]">—</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className={`mt-8 rounded-sm px-5 py-3 text-center font-[family-name:var(--font-courier)] text-[12px] uppercase tracking-[0.1em] transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      plan.featured
                        ? "bg-[#b08d57] text-[#16241c] focus-visible:outline-[#b08d57]"
                        : "border border-[#eee7d3]/30 text-[#f5efe0] focus-visible:outline-[#eee7d3]/60"
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

      <footer className="relative z-10 border-t border-[#eee7d3]/10 bg-[#13201a]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div className="flex items-center gap-4">
            <span className="font-[family-name:var(--font-fraunces)] text-lg italic text-[#f5efe0]">
              Index
            </span>
            <span className="rounded-sm border border-[#a23b2e]/50 px-2 py-0.5 font-[family-name:var(--font-courier)] text-[10px] uppercase tracking-[0.1em] text-[#a23b2e]">
              Filed, not forgotten
            </span>
          </div>
          <p className="font-[family-name:var(--font-courier)] text-[11px] text-[#eee7d3]/40">
            © Index, est. 2026 — Acc. No. 0001
          </p>
          <Link
            href="/"
            className="font-[family-name:var(--font-courier)] text-[11px] uppercase tracking-[0.1em] text-[#eee7d3]/50 underline-offset-4 hover:text-[#f5efe0] hover:underline"
          >
            View all five directions
          </Link>
        </div>
      </footer>
    </div>
  );
}
