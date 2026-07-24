import type { Metadata } from "next";
import { archivoBlack, spaceGrotesk } from "../fonts";

export const metadata: Metadata = {
  title: "Cortex",
  description:
    "Stop losing your best ideas. Recall is a loud, fast, unapologetic second brain.",
};

const tickerItems = [
  "1.4M links a day",
  "38ms search",
  "50k notes indexed",
  "zero folders",
  "plain markdown",
  "offline first",
];

const bigClaims = [
  {
    n: "01",
    head: "Capture",
    sub: "One key. Any app. No folder.",
    body: "Hit ⌘K anywhere in the OS and type. It lands in your vault, tagged and linked, before you've finished the thought.",
  },
  {
    n: "02",
    head: "Connect",
    sub: "It links what you forgot.",
    body: "Every save is read against your whole archive. Recall proposes the connections; you accept them with one tap.",
  },
  {
    n: "03",
    head: "Recall",
    sub: "Ask. Don't dig.",
    body: "Question ten years of notes in plain language. Answers arrive with the exact paragraph they came from, cited.",
  },
];

export default function CortexPage() {
  return (
    <div
      className={`${spaceGrotesk.className} relative flex flex-1 flex-col bg-neutral-950 text-neutral-50`}
    >
      <header className="relative z-10 flex items-center justify-between border-b-2 border-neutral-50 px-5 py-3.5 sm:px-8">
        <span
          className={`${archivoBlack.className} text-[19px] tracking-[-0.02em] uppercase`}
        >
          Recall
        </span>
        <nav className="hidden items-center gap-7 text-[12.5px] font-bold tracking-[0.1em] uppercase md:flex">
          <a className="hover:text-lime-300" href="#how">
            How
          </a>
          <a className="hover:text-lime-300" href="#proof">
            Proof
          </a>
          <a className="hover:text-lime-300" href="#price">
            Price
          </a>
        </nav>
        <a
          href="#price"
          className={`${archivoBlack.className} border-2 border-lime-300 bg-lime-300 px-4 py-1.5 text-[12.5px] tracking-[0.06em] text-neutral-950 uppercase transition-colors hover:bg-neutral-950 hover:text-lime-300`}
        >
          Get it
        </a>
      </header>

      <main className="relative">
        {/* Hero */}
        <section className="border-b-2 border-neutral-50 px-5 pt-12 pb-10 sm:px-8">
          <p className="mb-7 flex flex-wrap items-center gap-3 text-[12px] font-bold tracking-[0.16em] uppercase">
            <span className="border border-lime-300 px-2 py-0.5 text-lime-300">
              A second brain
            </span>
            <span className="text-neutral-500">
              for people with too many ideas
            </span>
          </p>

          <h1
            className={`${archivoBlack.className} animate-rise text-[clamp(3.2rem,13vw,10rem)] leading-[0.82] tracking-[-0.045em] uppercase`}
          >
            You already
            <br />
            had the
            <br />
            <span className="text-lime-300">idea.</span>
            <span className="ml-3 inline-block align-top text-[0.28em] leading-[1.2] tracking-normal text-neutral-400 normal-case">
              Twice,
              <br />
              probably.
            </span>
          </h1>

          <div className="mt-10 grid gap-8 border-t-2 border-neutral-800 pt-8 lg:grid-cols-[1fr_auto]">
            <p className="max-w-xl text-[17.5px] leading-relaxed text-neutral-300">
              Notes apps are where good thinking goes to die quietly in a
              folder. Recall is loud about it: everything you write gets linked
              to everything else, and it hands the right note back to you
              unprompted.
            </p>

            <div className="flex flex-wrap items-start gap-3">
              <a
                href="#price"
                className={`${archivoBlack.className} border-2 border-lime-300 bg-lime-300 px-7 py-4 text-[14px] tracking-[0.04em] text-neutral-950 uppercase shadow-[6px_6px_0_0_#fafafa] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_0_#fafafa]`}
              >
                Start free
              </a>
              <a
                href="#how"
                className={`${archivoBlack.className} border-2 border-neutral-50 px-7 py-4 text-[14px] tracking-[0.04em] uppercase transition-colors hover:bg-neutral-50 hover:text-neutral-950`}
              >
                See how
              </a>
            </div>
          </div>
        </section>

        {/* Ticker */}
        <section
          aria-hidden
          className="overflow-hidden border-b-2 border-neutral-50 bg-lime-300 py-2.5 text-neutral-950"
        >
          <div className="flex w-max animate-marquee">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0">
                {tickerItems.map((item) => (
                  <span
                    key={`${copy}-${item}`}
                    className={`${archivoBlack.className} flex items-center gap-6 px-6 text-[13.5px] tracking-[0.08em] uppercase`}
                  >
                    {item}
                    <span className="text-neutral-950/40">✱</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Big claims */}
        <section id="how" className="border-b-2 border-neutral-50">
          {bigClaims.map((claim, i) => (
            <article
              key={claim.n}
              className={`group grid gap-6 px-5 py-12 transition-colors sm:px-8 lg:grid-cols-[110px_1fr_1.1fr] lg:items-baseline lg:gap-10 hover:bg-lime-300 hover:text-neutral-950 ${
                i < bigClaims.length - 1 ? "border-b-2 border-neutral-800" : ""
              }`}
            >
              <span
                className={`${archivoBlack.className} text-[15px] tracking-[0.1em] text-neutral-500 group-hover:text-neutral-950/50`}
              >
                {claim.n}
              </span>

              <h2
                className={`${archivoBlack.className} text-[clamp(2.4rem,6vw,4.4rem)] leading-[0.86] tracking-[-0.04em] uppercase`}
              >
                {claim.head}
              </h2>

              <div>
                <p className="text-[19px] font-bold tracking-[-0.01em] text-lime-300 group-hover:text-neutral-950">
                  {claim.sub}
                </p>
                <p className="mt-3 max-w-lg text-[15.5px] leading-relaxed text-neutral-400 group-hover:text-neutral-800">
                  {claim.body}
                </p>
              </div>
            </article>
          ))}
        </section>

        {/* Proof / receipts */}
        <section
          id="proof"
          className="grid border-b-2 border-neutral-50 lg:grid-cols-3"
        >
          <div className="border-b-2 border-neutral-800 bg-neutral-50 px-6 py-10 text-neutral-950 lg:border-r-2 lg:border-b-0">
            <p
              className={`${archivoBlack.className} text-[clamp(3.4rem,7vw,5rem)] leading-[0.85] tracking-[-0.04em]`}
            >
              11,400
            </p>
            <p className="mt-3 text-[14px] font-bold tracking-[0.08em] uppercase">
              notes in Naomi’s vault
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">
              “Six months in, Recall knows more about my research than I do. I
              stopped organising and started writing.”
            </p>
            <p className="mt-4 text-[12px] font-bold tracking-[0.1em] text-neutral-500 uppercase">
              Dr. N. Ferrand · biologist
            </p>
          </div>

          <div className="border-b-2 border-neutral-800 px-6 py-10 lg:border-r-2 lg:border-b-0">
            <p
              className={`${archivoBlack.className} text-[clamp(3.4rem,7vw,5rem)] leading-[0.85] tracking-[-0.04em] text-lime-300`}
            >
              38ms
            </p>
            <p className="mt-3 text-[14px] font-bold tracking-[0.08em] uppercase">
              to search all of it
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-400">
              Local index, no round trip. Type a question, get a cited answer
              faster than a web app can show you a spinner.
            </p>
          </div>

          <div className="px-6 py-10">
            <p
              className={`${archivoBlack.className} text-[clamp(3.4rem,7vw,5rem)] leading-[0.85] tracking-[-0.04em]`}
            >
              .md
            </p>
            <p className="mt-3 text-[14px] font-bold tracking-[0.08em] uppercase">
              the only format we use
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-400">
              Plain files in a folder on your machine. No database, no lock-in,
              no migration project when you leave.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section id="price" className="px-5 py-16 text-center sm:px-8">
          <h2
            className={`${archivoBlack.className} mx-auto max-w-4xl text-[clamp(2.4rem,7.5vw,5.5rem)] leading-[0.86] tracking-[-0.045em] uppercase`}
          >
            Write it down.
            <br />
            <span className="text-lime-300">Find it later.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-md text-[16px] leading-relaxed text-neutral-400">
            Free forever for 500 notes. $8 a month for unlimited and encrypted
            sync. Leave whenever — the files were always yours.
          </p>

          <a
            href="#"
            className={`${archivoBlack.className} mt-10 inline-flex border-2 border-lime-300 bg-lime-300 px-9 py-5 text-[16px] tracking-[0.04em] text-neutral-950 uppercase shadow-[8px_8px_0_0_#fafafa] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_#fafafa]`}
          >
            Download Recall
          </a>
        </section>
      </main>

      <footer className="flex flex-wrap items-center justify-between gap-4 border-t-2 border-neutral-50 px-5 py-7 pb-24 text-[12px] font-bold tracking-[0.1em] uppercase sm:px-8">
        <p className="text-neutral-500">© 2026 Recall Labs</p>
        <div className="flex gap-6">
          <a className="hover:text-lime-300" href="#">
            Privacy
          </a>
          <a className="hover:text-lime-300" href="#">
            Docs
          </a>
          <a className="hover:text-lime-300" href="#">
            Changelog
          </a>
        </div>
      </footer>
    </div>
  );
}
