import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cortex — Your second brain · Design 3",
};

const marqueeWords = [
  "CAPTURE",
  "CONNECT",
  "RECALL",
  "REPEAT",
  "NO FOLDERS",
  "NO FILING",
  "NO FORGETTING",
];

const cards = [
  {
    title: "DUMP IT",
    body: "Hotkey. Type. Done. Zero ceremony between your brain and the page.",
    bg: "bg-[#ffd23f]",
    rotate: "-rotate-2",
  },
  {
    title: "LINK IT",
    body: "Cortex wires your notes together automatically. Like a brain. That’s the point.",
    bg: "bg-[#ff6b35]",
    rotate: "rotate-1",
  },
  {
    title: "FIND IT",
    body: "Ask in plain words. Get the exact note back, even from 3 years ago.",
    bg: "bg-[#3f88ff]",
    rotate: "-rotate-1",
  },
];

const receipts = [
  ["Notes captured", "12,409,551"],
  ["Ideas resurfaced", "1,882,074"],
  ["Folders created", "0"],
];

export default function DesignThree() {
  return (
    <div
      className="flex flex-1 flex-col bg-[#f3efe6] text-black selection:bg-[#ffd23f] [--font-archivo-black:Impact,Arial_Black,sans-serif]"
    >
      {/* Nav */}
      <header className="border-b-2 border-black">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-[family-name:var(--font-archivo-black)] text-xl tracking-tight">
            CORTEX<span className="text-[#ff6b35]">*</span>
          </span>
          <nav className="hidden items-center gap-6 text-sm font-bold uppercase sm:flex">
            <a href="#how" className="underline-offset-4 hover:underline">
              How
            </a>
            <a href="#receipts" className="underline-offset-4 hover:underline">
              Receipts
            </a>
            <a href="#go" className="underline-offset-4 hover:underline">
              Price
            </a>
          </nav>
          <a
            href="#go"
            className="border-2 border-black bg-[#ffd23f] px-4 py-2 text-sm font-bold uppercase shadow-[3px_3px_0_#000] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_#000]"
          >
            Get it
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <h1 className="font-[family-name:var(--font-archivo-black)] text-[13vw] leading-[0.92] tracking-tight sm:text-8xl">
            YOUR BRAIN
            <br />
            <span className="text-[#ff6b35]">LEAKS.</span> WE
            <br />
            CATCH IT.
          </h1>
          <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
            <p className="max-w-md text-lg font-medium leading-7">
              Cortex is a second brain for people who refuse to organize
              anything. Write it down once. It’s yours forever. It comes back
              when you need it.
            </p>
            <a
              href="#go"
              className="border-2 border-black bg-black px-8 py-4 font-[family-name:var(--font-archivo-black)] text-lg uppercase text-[#f3efe6] shadow-[5px_5px_0_#ff6b35] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_#ff6b35]"
            >
              Start dumping →
            </a>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-b-2 border-black bg-black py-3">
        <div className="flex w-max animate-[marquee_22s_linear_infinite]">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-8 pr-8" aria-hidden={copy === 1}>
              {marqueeWords.map((w) => (
                <span
                  key={w}
                  className="whitespace-nowrap font-[family-name:var(--font-archivo-black)] text-lg uppercase text-[#f3efe6]"
                >
                  {w} <span className="text-[#ffd23f]">✺</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Cards */}
      <section id="how" className="border-b-2 border-black">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 sm:grid-cols-3">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className={`border-2 border-black ${c.bg} ${c.rotate} p-7 shadow-[6px_6px_0_#000] transition-transform hover:rotate-0`}
            >
              <span className="inline-block border-2 border-black bg-[#f3efe6] px-2 py-0.5 font-[family-name:var(--font-archivo-black)] text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-5 font-[family-name:var(--font-archivo-black)] text-3xl">
                {c.title}
              </h2>
              <p className="mt-3 font-medium leading-6">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Receipts */}
      <section id="receipts" className="border-b-2 border-black bg-[#ffd23f]">
        <div className="mx-auto grid max-w-6xl divide-y-2 divide-black border-x-2 border-black sm:grid-cols-3 sm:divide-x-2 sm:divide-y-0">
          {receipts.map(([label, value]) => (
            <div key={label} className="px-8 py-12 text-center">
              <div className="font-[family-name:var(--font-archivo-black)] text-4xl tabular-nums sm:text-5xl">
                {value}
              </div>
              <div className="mt-2 text-sm font-bold uppercase tracking-wide">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="font-[family-name:var(--font-archivo-black)] text-3xl leading-snug sm:text-4xl">
            “I HAVE THE MEMORY OF A GOLDFISH AND THE OUTPUT OF A RESEARCH LAB.”
          </p>
          <p className="mt-6 inline-block -rotate-1 border-2 border-black bg-[#3f88ff] px-4 py-1.5 text-sm font-bold uppercase text-white shadow-[3px_3px_0_#000]">
            Theo — shipped 4 products this year
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="go" className="bg-black pb-28 text-[#f3efe6]">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center">
          <h2 className="font-[family-name:var(--font-archivo-black)] text-5xl uppercase sm:text-7xl">
            $8/MO.
            <br />
            <span className="text-[#ffd23f]">THAT’S IT.</span>
          </h2>
          <p className="mt-5 max-w-sm font-medium text-[#f3efe6]/70">
            First 1,000 notes free. No tiers, no seats, no “contact sales”.
          </p>
          <a
            href="#"
            className="mt-9 border-2 border-[#f3efe6] bg-[#ff6b35] px-10 py-5 font-[family-name:var(--font-archivo-black)] text-xl uppercase text-black shadow-[6px_6px_0_#f3efe6] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_#f3efe6]"
          >
            Take my money
          </a>
          <p className="mt-12 text-xs font-bold uppercase tracking-widest text-[#f3efe6]/40">
            Cortex* — *not a medical device
          </p>
        </div>
      </section>
    </div>
  );
}
