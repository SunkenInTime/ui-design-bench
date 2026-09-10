import type { Metadata } from "next";
import { Anton, Archivo } from "next/font/google";

const poster = Anton({ subsets: ["latin"], weight: "400" });
const grotesk = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Engram — 05 · Poster",
  description: "Forget nothing, on purpose. A modernist manifesto for Engram.",
};

const THESES = [
  {
    n: "I.",
    text: "Memory is for having ideas, not holding them. Anything you keep in your head, you lose in your head.",
  },
  {
    n: "II.",
    text: "A note you cannot find is a thought you did not have. Storage is not the problem — retrieval is.",
  },
  {
    n: "III.",
    text: "Choose the system that outlives the app. Plain files, real links, no permission required.",
  },
];

const SPECS = [
  ["CAPTURE", "under a second, from anywhere"],
  ["LINK", "notes cite each other, by hand or by habit"],
  ["RESURFACE", "old thoughts return while you write"],
  ["EXPORT", "everything, always, in markdown"],
];

export default function Poster() {
  return (
    <div
      className={`${grotesk.className} flex-1 bg-[#F0EFEA] text-[#101014] selection:bg-[#2438CC] selection:text-[#F0EFEA]`}
    >
      {/* ————— poster credits top ————— */}
      <header className="border-b-2 border-[#101014]">
        <div className="mx-auto flex max-w-6xl items-baseline justify-between gap-6 px-6 py-4 text-[12px] font-semibold tracking-[0.18em]">
          <span>ENGRAM&reg;</span>
          <span className="hidden sm:inline">A SYSTEM FOR THOUGHT</span>
          <span>EST. MMXXVI — EVERYWHERE</span>
        </div>
      </header>

      {/* ————— the poster ————— */}
      <section className="relative overflow-hidden border-b-2 border-[#101014]">
        {/* rotated edge label */}
        <p
          aria-hidden="true"
          className="absolute top-1/2 right-5 hidden origin-center -translate-y-1/2 rotate-90 text-[11px] font-semibold tracking-[0.3em] text-[#101014]/60 lg:block"
        >
          LANDING PAGE — DIRECTION Nº5 — SET IN ANTON
        </p>

        <div className="mx-auto max-w-6xl px-6 pt-14 pb-16 sm:pt-20 sm:pb-24">
          <div className="flex items-start justify-between gap-8">
            <h1
              className={`${poster.className} text-[21vw] leading-[0.86] tracking-[-0.01em] uppercase sm:text-[15vw] lg:text-[172px]`}
            >
              Forget
              <br />
              <span className="text-[#2438CC]">Nothing</span>
              <span className="text-[#2438CC]">.</span>
            </h1>
            {/* blue block — the one shape on the poster */}
            <div
              aria-hidden="true"
              className="mt-6 hidden h-28 w-28 shrink-0 bg-[#2438CC] sm:block lg:mt-14 lg:h-36 lg:w-36"
            />
          </div>

          <div className="mt-12 grid gap-10 border-t-2 border-[#101014] pt-8 sm:grid-cols-[1fr_auto]">
            <p className="max-w-[52ch] text-[17px] leading-8 font-medium">
              Engram is a second brain that treats every thought as worth
              keeping: caught in a second, linked to its neighbours, and brought
              back while you can still use it. Your first brain gets to do the
              thinking again.
            </p>
            <div className="flex items-end gap-4">
              <a
                href="#start"
                className="bg-[#101014] px-7 py-4 text-[14px] font-bold tracking-[0.12em] text-[#F0EFEA] uppercase transition-colors hover:bg-[#2438CC] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2438CC]"
              >
                Start remembering
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ————— theses ————— */}
      <section className="border-b-2 border-[#101014]">
        <div className="mx-auto grid max-w-6xl gap-px px-6 sm:px-0 lg:grid-cols-3 lg:gap-0">
          {THESES.map((t, i) => (
            <article
              key={t.n}
              className={`px-6 py-12 sm:px-10 ${
                i > 0 ? "border-t-2 lg:border-t-0 lg:border-l-2" : ""
              } border-[#101014]`}
            >
              <span className={`${poster.className} text-[44px] leading-none text-[#2438CC]`}>
                {t.n}
              </span>
              <p className="mt-6 max-w-[34ch] text-[17px] leading-8 font-medium">
                {t.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ————— spec strip ————— */}
      <section className="border-b-2 border-[#101014] bg-[#101014] text-[#F0EFEA]">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SPECS.map(([name, spec]) => (
              <div key={name}>
                <h3
                  className={`${poster.className} text-[20px] tracking-[0.04em] text-[#F0EFEA]`}
                >
                  {name}
                </h3>
                <p className="mt-2 text-[13.5px] leading-6 text-[#B9B7AD]">
                  {spec}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ————— cta block ————— */}
      <section id="start" className="bg-[#2438CC] text-[#F0EFEA]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <p className="text-[12px] font-semibold tracking-[0.3em]">
            ENGRAM — A SECOND BRAIN
          </p>
          <h2
            className={`${poster.className} mt-6 text-[16vw] leading-[0.9] uppercase sm:text-[11vw] lg:text-[120px]`}
          >
            Your mind,
            <br />
            made permanent.
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-6 border-t-2 border-[#F0EFEA]/30 pt-8">
            <a
              href="#start"
              className="bg-[#F0EFEA] px-8 py-4 text-[14px] font-bold tracking-[0.12em] text-[#101014] uppercase transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F0EFEA]"
            >
              Get Engram — free
            </a>
            <p className="text-[14px] font-medium text-[#F0EFEA]/80">
              Free for your first thousand notes. Then it starts paying you
              back.
            </p>
          </div>
        </div>
      </section>

      {/* ————— colophon ————— */}
      <footer className="border-t-2 border-[#101014]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-4 px-6 py-5 text-[11px] font-semibold tracking-[0.18em] text-[#101014]/70">
          <span>SET IN ANTON &amp; ARCHIVO</span>
          <span className="hidden sm:inline">PRINTED BY TURBOPACK</span>
          <span>&copy; MMXXVI ENGRAM</span>
        </div>
      </footer>
    </div>
  );
}
