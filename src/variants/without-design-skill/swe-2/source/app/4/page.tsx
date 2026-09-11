import type { Metadata } from "next";
import { Archivo, Bricolage_Grotesque } from "next/font/google";

const display = Bricolage_Grotesque({ subsets: ["latin"] });
const body = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Engram — 04 · Two minds",
  description:
    "Catch it raw. Keep it connected. The two jobs of a second brain, side by side.",
};

const RAW = [
  { kind: "voice memo", text: "voice memo · 0:42", meta: "walking to the train", tilt: "-rotate-2" },
  { kind: "text", text: "half a sentence about fonts", meta: "typed at a red light", tilt: "rotate-1" },
  { kind: "todo", text: "mum calls thursday", meta: "shouted at siri", tilt: "-rotate-1" },
  { kind: "photo", text: "IMG_2941 — the whiteboard", meta: "shot, never reread", tilt: "rotate-2" },
  { kind: "text", text: "idea: notes that argue back", meta: "2:14am, questionable", tilt: "-rotate-1" },
];

const CONNECTED = [
  {
    title: "Fonts that think",
    type: "note",
    links: ["essay: attention", "on forgetting"],
    detail: "the half-sentence, finished",
  },
  {
    title: "Call mum",
    type: "task · thu",
    links: ["family", "mum's recipe"],
    detail: "with the number and the reason attached",
  },
  {
    title: "Voice memo, transcribed",
    type: "note",
    links: ["notes that argue back", "thesis notes"],
    detail: "searchable, linked, still raw underneath",
  },
];

export default function TwoMinds() {
  return (
    <div
      className={`${body.className} flex-1 bg-[#FBFBFD] text-[#14141F] selection:bg-[#5749D0] selection:text-white`}
    >
      {/* ————— nav ————— */}
      <header className="border-b border-[#E7E7EF]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span
            className={`${display.className} text-[20px] font-bold tracking-tight`}
          >
            engram<span className="text-[#5749D0]">.</span>
          </span>
          <nav className="flex items-center gap-7 text-[14.5px]">
            <a
              href="#journey"
              className="hidden text-[#5E5E72] transition-colors hover:text-[#14141F] sm:inline"
            >
              How it works
            </a>
            <a
              href="#principles"
              className="hidden text-[#5E5E72] transition-colors hover:text-[#14141F] sm:inline"
            >
              Principles
            </a>
            <a
              href="#start"
              className="rounded-full bg-[#14141F] px-4 py-2 font-medium text-white transition-colors hover:bg-[#5749D0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5749D0]"
            >
              Start catching
            </a>
          </nav>
        </div>
      </header>

      {/* ————— hero ————— */}
      <section className="mx-auto max-w-6xl px-6 pt-16 sm:pt-24">
        <h1
          className={`${display.className} max-w-4xl text-[44px] leading-[1.02] font-bold tracking-[-0.02em] sm:text-[68px]`}
        >
          Catch it raw.
          <br />
          <span className="text-[#5749D0]">Keep it connected.</span>
        </h1>
        <p className="mt-6 max-w-[56ch] text-[17.5px] leading-8 text-[#5E5E72]">
          A second brain has two jobs, and most apps are good at neither. Engram
          does both: capture at the speed of thought, connect at the pace of
          understanding.
        </p>
      </section>

      {/* ————— the split ————— */}
      <section className="mx-auto max-w-6xl px-6 pt-14 pb-20">
        <div className="relative grid overflow-hidden rounded-2xl border border-[#E7E7EF] shadow-[0_30px_80px_-50px_rgba(20,20,31,0.35)] lg:grid-cols-2">
          {/* left — raw */}
          <div className="bg-[#FFF6DC] p-6 sm:p-10">
            <div className="flex items-baseline justify-between">
              <h2 className={`${display.className} text-[15px] font-bold tracking-tight text-[#8A6410]`}>
                THE INBOX — caught, unsorted
              </h2>
              <span className="text-[12px] font-medium text-[#B08A2E]">
                47 waiting
              </span>
            </div>
            <div className="mt-8 space-y-4">
              {RAW.map((r) => (
                <div
                  key={r.text}
                  className={`w-fit max-w-full rounded-md border border-[#E8D48A] bg-[#FFEFA8] px-4 py-3 shadow-[0_2px_0_#E8D48A] ${r.tilt}`}
                >
                  <p className="text-[15px] font-medium text-[#4A3A08]">
                    {r.text}
                  </p>
                  <p className="mt-0.5 text-[12px] text-[#8A6410]">{r.meta}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[13px] leading-6 text-[#8A6410]">
              Nothing here is organised. That is the point — capture should cost
              less than remembering.
            </p>
          </div>

          {/* seam */}
          <div
            aria-hidden="true"
            className="relative z-10 flex items-center justify-center border-y border-[#E7E7EF] bg-[#FBFBFD] py-3 lg:absolute lg:inset-y-0 lg:left-1/2 lg:w-px lg:-translate-x-1/2 lg:border-y-0 lg:border-l lg:py-0"
          >
            <span className="rounded-full border border-[#E7E7EF] bg-[#FBFBFD] px-4 py-1.5 text-[12px] font-semibold tracking-wide text-[#5749D0] shadow-sm lg:px-3">
              while you sleep
            </span>
          </div>

          {/* right — connected */}
          <div className="bg-[#F0EEFB] p-6 sm:p-10">
            <div className="flex items-baseline justify-between">
              <h2 className={`${display.className} text-[15px] font-bold tracking-tight text-[#5749D0]`}>
                THE GRAPH — connected, findable
              </h2>
              <span className="text-[12px] font-medium text-[#7C74DB]">
                312 linked
              </span>
            </div>
            <div className="mt-8 space-y-4">
              {CONNECTED.map((c) => (
                <div
                  key={c.title}
                  className="rounded-lg border border-[#DCD7F5] bg-white px-4 py-4 shadow-[0_2px_0_#DCD7F5]"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-[15.5px] font-semibold text-[#14141F]">
                      {c.title}
                    </p>
                    <span className="shrink-0 text-[11.5px] font-medium text-[#7C74DB]">
                      {c.type}
                    </span>
                  </div>
                  <p className="mt-1 text-[12.5px] text-[#5E5E72]">{c.detail}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {c.links.map((l) => (
                      <span
                        key={l}
                        className="rounded-full bg-[#F0EEFB] px-2.5 py-1 text-[11.5px] font-medium text-[#5749D0]"
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[13px] leading-6 text-[#5E5E72]">
              Same fragments, one night later — transcribed, linked to their
              neighbours, waiting where you work.
            </p>
          </div>
        </div>
      </section>

      {/* ————— the journey ————— */}
      <section id="journey" className="border-t border-[#E7E7EF]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2
            className={`${display.className} text-[34px] font-bold tracking-[-0.02em] sm:text-[42px]`}
          >
            A thought&rsquo;s journey
          </h2>
          <div className="mt-12 divide-y divide-[#E7E7EF] border-y border-[#E7E7EF]">
            {[
              {
                step: "1",
                name: "Caught",
                time: "in under a second",
                text: "A line, a link, a voice memo, a photo. If it takes longer than having the thought, the tool failed — Engram doesn't.",
              },
              {
                step: "2",
                name: "Connected",
                time: "overnight",
                text: "While you're away, fragments get transcribed, linked to their neighbours, and filed where they belong. You wake to order, not chores.",
              },
              {
                step: "3",
                name: "Kept alive",
                time: "every time you write",
                text: "Old notes resurface inside whatever you're drafting. The second brain pays interest — the first one just forgets.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="grid gap-3 py-8 sm:grid-cols-[72px_220px_1fr] sm:gap-8"
              >
                <span
                  className={`${display.className} text-[30px] font-bold text-[#5749D0]`}
                >
                  {s.step}
                </span>
                <div>
                  <h3 className="text-[17px] font-semibold">{s.name}</h3>
                  <p className="mt-1 text-[13px] font-medium text-[#7C74DB]">
                    {s.time}
                  </p>
                </div>
                <p className="max-w-[56ch] text-[15.5px] leading-7 text-[#5E5E72]">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ————— principles ————— */}
      <section id="principles" className="border-t border-[#E7E7EF] bg-[#F4F4F9]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-3">
          {[
            {
              name: "Local files",
              text: "Your notes are markdown on your disk. The folder is the truth; the app is a lens.",
            },
            {
              name: "End-to-end sync",
              text: "Devices stay in step. Servers store ciphertext they cannot read.",
            },
            {
              name: "No lock-in",
              text: "Leave whenever you like and take everything — that's what makes people stay.",
            },
          ].map((p) => (
            <div key={p.name}>
              <h3 className={`${display.className} text-[19px] font-bold tracking-tight`}>
                {p.name}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-7 text-[#5E5E72]">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ————— cta ————— */}
      <section id="start" className="bg-[#5749D0]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <h2
            className={`${display.className} max-w-3xl text-[40px] leading-[1.05] font-bold tracking-[-0.02em] text-white sm:text-[56px]`}
          >
            Your brain dumps.
            <br />
            Engram sorts.
          </h2>
          <p className="mt-6 max-w-[48ch] text-[16.5px] leading-8 text-[#C9C4F2]">
            Free for the first thousand notes. Be messier — we&rsquo;ll be
            tidier.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#start"
              className="rounded-full bg-white px-7 py-3.5 text-[15.5px] font-semibold text-[#14141F] transition-colors hover:bg-[#F0EEFB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Start catching — free
            </a>
            <a
              href="#journey"
              className="rounded-full border border-white/40 px-7 py-3.5 text-[15.5px] font-medium text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              See the journey
            </a>
          </div>
        </div>
      </section>

      {/* ————— footer ————— */}
      <footer className="border-t border-[#E7E7EF]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-4 px-6 py-6 text-[12.5px] text-[#8B8B9C]">
          <span className={`${display.className} font-bold text-[#14141F]`}>
            engram<span className="text-[#5749D0]">.</span>
          </span>
          <span>catch it raw · keep it connected</span>
          <span>direction 04</span>
        </div>
      </footer>
    </div>
  );
}
