import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signal",
  description: "Lumen as a brutalist poster — stop forgetting, start linking.",
};

const ticker = [
  "ON ATTENTION",
  "SLEEP STUDY",
  "LETTER NEVER SENT",
  "Q3 GARDEN",
  "ADA",
  "BACKLINK",
  "DAILY NOTE",
  "SECOND BRAIN",
];

export default function SignalLanding() {
  return (
    <div className="min-h-full bg-[#111111] font-display text-[#f4f1ea]">
      <div className="flex min-h-full flex-col pb-28">
        <header className="flex items-center justify-between border-b border-white/15 px-5 py-4 sm:px-8">
          <p className="text-xl font-bold tracking-tight">LUMEN</p>
          <p className="text-[11px] font-semibold tracking-[0.32em]">
            VER. 04 / SIGNAL
          </p>
        </header>

        <section className="relative overflow-hidden px-5 pt-8 sm:px-8 sm:pt-10">
          <p className="absolute right-5 top-8 hidden rotate-12 bg-[#e8ff3d] px-3 py-1 text-xs font-bold tracking-[0.2em] text-black sm:block">
            PRIVATE
          </p>
          <h1 className="max-w-[11ch] text-[clamp(3.4rem,12vw,9.5rem)] font-extrabold leading-[0.78] tracking-[-0.06em]">
            YOUR BRAIN
            <span className="block">IS FULL.</span>
            <span className="block text-[#e8ff3d]">OURS ISN’T.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-7 text-white/70 sm:text-xl">
            Lumen is a second brain with no manners and no filing cabinet.
            Dump the spark. Link the wreckage. Find it when the original mind
            has moved on.
          </p>
        </section>

        <div className="mt-10 overflow-hidden border-y border-[#e8ff3d] bg-[#e8ff3d] py-3 text-black">
          <div className="marquee-track flex gap-10 whitespace-nowrap text-sm font-bold tracking-[0.28em]">
            {[...ticker, ...ticker].map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center gap-10">
                {item}
                <span aria-hidden="true">■</span>
              </span>
            ))}
          </div>
        </div>

        <section className="grid border-b border-white/15 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "CAPTURE UGLY",
              d: "Half sentences. Stolen quotes. Voice notes that should never be a document. If it happened in your head, it belongs here.",
            },
            {
              n: "02",
              t: "LINK HARD",
              d: "No folders pretending to be thought. Bidirectional links, daily pages, a graph that looks like a crime board on purpose.",
            },
            {
              n: "03",
              t: "STAY CLOSED",
              d: "This is not a social network for your inner life. Local-first. Searchable. Yours. The internet does not get a copy.",
            },
          ].map((item, index) => (
            <article
              key={item.n}
              className={`border-white/15 p-7 ${index < 2 ? "md:border-r" : ""}`}
            >
              <p className="text-sm font-bold tracking-[0.3em] text-[#e8ff3d]">
                {item.n}
              </p>
              <h2 className="mt-6 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
                {item.t}
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">
                {item.d}
              </p>
            </article>
          ))}
        </section>

        <section className="flex flex-1 flex-col justify-end px-5 py-12 sm:px-8">
          <p className="text-sm font-bold tracking-[0.3em] text-[#e8ff3d]">
            STOP FORGETTING
          </p>
          <div className="mt-4 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-[12ch] text-[clamp(2.4rem,8vw,6rem)] font-extrabold leading-[0.82] tracking-[-0.05em]">
              GET LUMEN
              <span className="block">BEFORE THE</span>
              <span className="block">THOUGHT LEAVES.</span>
            </h2>
            <button
              type="button"
              className="bg-[#e8ff3d] px-8 py-5 text-lg font-extrabold tracking-[0.12em] text-black"
            >
              START NOW →
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
