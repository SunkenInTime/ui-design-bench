import type { Metadata } from "next";
import { Instrument_Serif, Space_Grotesk } from "next/font/google";
import { Sky } from "./Sky";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});
const grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Engram — 03 · Star atlas",
  description:
    "Every note you keep becomes a star. Engram draws the constellations.",
};

const CATALOG = [
  {
    id: "ε ENGRAM",
    name: "capture",
    spec: "a new star appears where you point — any fragment, in under a second, from anywhere",
  },
  {
    id: "ζ ENGRAM",
    name: "constellations",
    spec: "notes that cite each other draw their own lines; the shape was always there",
  },
  {
    id: "η ENGRAM",
    name: "proper motion",
    spec: "old notes drift back overhead while you write — dormancy is measured in days, not deaths",
  },
  {
    id: "θ ENGRAM",
    name: "the telescope",
    spec: "search that reads meaning, not just letters — 'that thing about focus' finds essay: attention",
  },
];

const TONIGHT = [
  {
    star: "thesis notes",
    note: "dormant 41 days — 3 new links formed near it this week",
    mag: "mag 4.5",
  },
  {
    star: "vendor emails",
    note: "rises again friday — contract renewal window opens",
    mag: "mag 3.0",
  },
  {
    star: "sourdough, finally",
    note: "an old link to mum's recipe brightened — same flour",
    mag: "mag 3.0",
  },
];

export default function StarAtlas() {
  return (
    <div
      className={`${grotesk.className} flex-1 bg-[#0F1430] text-[#C9CEEF] selection:bg-[#D9A94E] selection:text-[#0F1430]`}
    >
      {/* ————— nav ————— */}
      <header className="border-b border-[#252E5C]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-baseline gap-3">
            <span className="text-[17px] font-semibold text-[#F4F1E4]">
              Engram
            </span>
            <span className="text-[#D9A94E]" aria-hidden="true">
              ✳
            </span>
          </div>
          <nav className="flex items-center gap-7 text-[14px]">
            <a
              href="#catalog"
              className="hidden text-[#8A93C9] transition-colors hover:text-[#F4F1E4] sm:inline"
            >
              The catalog
            </a>
            <a
              href="#tonight"
              className="hidden text-[#8A93C9] transition-colors hover:text-[#F4F1E4] sm:inline"
            >
              Tonight&rsquo;s sky
            </a>
            <a
              href="#chart"
              className="rounded-full border border-[#D9A94E]/70 px-4 py-1.5 text-[#D9A94E] transition-colors hover:bg-[#D9A94E] hover:text-[#0F1430] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9A94E]"
            >
              Chart your sky
            </a>
          </nav>
        </div>
      </header>

      {/* ————— hero ————— */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-8 sm:pt-28">
        <p className="text-[13px] tracking-[0.3em] text-[#5A6599]">
          AN ATLAS OF THOUGHT
        </p>
        <h1
          className={`${display.className} mt-6 max-w-3xl text-[52px] leading-[1.02] text-[#F4F1E4] sm:text-[76px]`}
        >
          Know what
          <br />
          you know.
        </h1>
        <p className="mt-7 max-w-[54ch] text-[17px] leading-8 text-[#8A93C9]">
          Every note you keep becomes a star. Notes that cite each other draw
          their own lines, and after a few months you stop searching — you
          navigate.{" "}
          <em className={`${display.className} text-[#F4F1E4]`}>
            Engram draws the constellations.
          </em>
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-5">
          <a
            href="#chart"
            className="rounded-full bg-[#D9A94E] px-6 py-3 text-[15px] font-semibold text-[#0F1430] transition-colors hover:bg-[#E8BD6B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9A94E]"
          >
            Start your atlas
          </a>
          <a
            href="#catalog"
            className="text-[15px] text-[#8A93C9] underline decoration-[#3A4470] underline-offset-[5px] transition-colors hover:text-[#F4F1E4] hover:decoration-[#F4F1E4]"
          >
            Read the catalog
          </a>
        </div>

        <div className="mt-16 rounded-lg border border-[#252E5C] bg-[#0B0F26]/60 px-4 pt-6 pb-4 sm:px-8">
          <Sky />
        </div>
      </section>

      {/* ————— catalog ————— */}
      <section id="catalog" className="border-t border-[#252E5C]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <h2
                className={`${display.className} text-[38px] leading-tight text-[#F4F1E4] sm:text-[46px]`}
              >
                The catalog is written by your habits.
              </h2>
              <p className="mt-5 max-w-[50ch] text-[16px] leading-8 text-[#8A93C9]">
                In a star catalog, magnitude is brightness. In yours, it is
                how often a thought comes back overhead. Engram keeps the
                ledger — you just keep thinking.
              </p>
              <div className="mt-10 space-y-5 border-l border-[#252E5C] pl-6 text-[13.5px] leading-7 text-[#8A93C9]">
                <p>
                  <span className="text-[#F4F1E4]">magnitude</span> — how often
                  a note resurfaces while you work
                </p>
                <p>
                  <span className="text-[#F4F1E4]">links</span> — notes that
                  cite it, or that it cites
                </p>
                <p>
                  <span className="text-[#F4F1E4]">rises</span> — when Engram
                  expects it overhead again
                </p>
              </div>
            </div>
            <div className="divide-y divide-[#252E5C] border-y border-[#252E5C]">
              {CATALOG.map((e) => (
                <div key={e.id} className="grid gap-2 py-6 sm:grid-cols-[110px_1fr] sm:gap-6">
                  <div className="text-[12.5px] leading-6 text-[#5A6599]">
                    {e.id}
                  </div>
                  <div>
                    <div className="text-[16px] font-semibold text-[#F4F1E4]">
                      {e.name}
                    </div>
                    <p className="mt-1 max-w-[44ch] text-[14px] leading-7 text-[#8A93C9]">
                      {e.spec}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ————— tonight's sky ————— */}
      <section id="tonight" className="border-t border-[#252E5C] bg-[#0B0F26]/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2
              className={`${display.className} text-[38px] text-[#F4F1E4] sm:text-[46px]`}
            >
              Tonight&rsquo;s sky
            </h2>
            <p className="text-[13px] tracking-[0.25em] text-[#5A6599]">
              OBSERVING LOG — THURSDAY
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {TONIGHT.map((t) => (
              <article
                key={t.star}
                className="rounded-lg border border-[#252E5C] bg-[#0F1430] p-6"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className={`${display.className} text-[22px] text-[#F4F1E4]`}>
                    {t.star}
                  </h3>
                  <span className="shrink-0 text-[12px] text-[#D9A94E]">
                    {t.mag}
                  </span>
                </div>
                <p className="mt-3 text-[14px] leading-7 text-[#8A93C9]">
                  {t.note}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-[58ch] text-[14px] leading-7 text-[#5A6599]">
            Resurfacing is the whole trick: a thought you met three months ago
            is worth more than a thought you filed and never saw again.
          </p>
        </div>
      </section>

      {/* ————— cta ————— */}
      <section id="chart" className="border-t border-[#252E5C]">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2
            className={`${display.className} mx-auto max-w-2xl text-[42px] leading-[1.05] text-[#F4F1E4] sm:text-[58px]`}
          >
            The sky fills in faster than you think.
          </h2>
          <p className="mx-auto mt-6 max-w-[46ch] text-[16px] leading-8 text-[#8A93C9]">
            Most people see their first constellation inside a week. Import
            anything — Engram does the charting.
          </p>
          <a
            href="#chart"
            className="mt-10 inline-block rounded-full bg-[#D9A94E] px-8 py-4 text-[16px] font-semibold text-[#0F1430] transition-colors hover:bg-[#E8BD6B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9A94E]"
          >
            Chart your sky — free
          </a>
        </div>
      </section>

      {/* ————— footer ————— */}
      <footer className="border-t border-[#252E5C]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-4 px-6 py-6 text-[12.5px] text-[#5A6599]">
          <span>ENGRAM — an atlas of thought</span>
          <span>set in Instrument Serif &amp; Space Grotesk</span>
          <span>direction 03</span>
        </div>
      </footer>
    </div>
  );
}
