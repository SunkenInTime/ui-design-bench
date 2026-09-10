import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Newsreader } from "next/font/google";
import { ArrowDownRight } from "@phosphor-icons/react/ssr";

export const metadata: Metadata = {
  title: "Commonplace - Archive",
};

const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const paper = "#f4f4f0";
const ink = "#1d1f22";
const sub = "#585b60";
const red = "#b3352b";
const rule = "#d9d9d1";

function IndexCard({
  no,
  title,
  body,
  refs,
  className,
}: {
  no: string;
  title: string;
  body: string;
  refs: string;
  className?: string;
}) {
  return (
    <article
      className={`bg-white shadow-[0_18px_40px_-18px_rgba(29,31,34,0.28)] ${className ?? ""}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(to bottom, transparent 0, transparent 27px, #e7e7de 27px, #e7e7de 28px)",
      }}
    >
      <header
        className="flex items-baseline justify-between border-b px-5 pt-4 pb-2 font-mono text-[11px] tracking-[0.14em] uppercase"
        style={{ borderColor: rule, color: sub }}
      >
        <span>Commonplace</span>
        <span>No. {no}</span>
      </header>
      <div className="px-5 pt-4 pb-5">
        <h3
          className={`${serif.className} text-xl leading-snug font-medium`}
          style={{ color: ink }}
        >
          {title}
        </h3>
        <p
          className="mt-3 text-[13.5px] leading-7"
          style={{ color: "#3d4045" }}
        >
          {body}
        </p>
        <p
          className="mt-4 font-mono text-[11.5px] tracking-[0.08em]"
          style={{ color: red }}
        >
          see also {refs}
        </p>
      </div>
    </article>
  );
}

export default function ArchivePage() {
  return (
    <div style={{ background: paper, color: ink }} className="min-h-[100dvh]">
      {/* Nav */}
      <header className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <span className={`${serif.className} text-[19px] font-medium`}>
          Commonplace
        </span>
        <nav className="hidden items-center gap-8 text-[13.5px] md:flex" style={{ color: sub }}>
          <Link href="#method" className="transition hover:text-[#1d1f22]">
            The method
          </Link>
          <Link href="#specimen" className="transition hover:text-[#1d1f22]">
            Specimen
          </Link>
          <Link href="#begin" className="transition hover:text-[#1d1f22]">
            Begin
          </Link>
        </nav>
        <Link
          href="#begin"
          className="border px-4 py-2 text-[13px] font-medium transition active:translate-y-[1px]"
          style={{ borderColor: ink, color: ink }}
        >
          Start your commonplace
        </Link>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 px-6 pt-24 pb-24 lg:grid-cols-[1.15fr_1fr] lg:pt-20">
        <div className="relative">
          <h1
            className={`${serif.className} max-w-[13ch] text-[44px] leading-[1.04] font-medium tracking-[-0.01em] md:text-[64px]`}
          >
            Every thought, findable again.
          </h1>
          <p className="mt-6 max-w-[46ch] text-[15.5px] leading-7" style={{ color: sub }}>
            Commonplace keeps your notes linked, indexed, and ready to resurface
            at the moment they matter.
          </p>
          <div className="mt-9 flex items-center gap-7">
            <Link
              href="#begin"
              className="px-6 py-3 text-[14px] font-medium text-white transition active:translate-y-[1px]"
              style={{ background: ink }}
            >
              Start your commonplace
            </Link>
            <Link
              href="#method"
              className="text-[14px] font-medium underline decoration-[#b3352b] underline-offset-4 transition hover:text-[#b3352b]"
            >
              Read the method
            </Link>
          </div>

          {/* Marginalia */}
          <p
            aria-hidden
            className={`${serif.className} absolute -right-2 top-2 hidden max-w-[150px] -rotate-2 text-[15px] italic xl:block`}
            style={{ color: red }}
          >
            findable, not just stored. that is the whole point
            <ArrowDownRight className="mt-1 ml-8" size={16} />
          </p>
        </div>

        <div className="relative flex items-start justify-center lg:justify-end">
          <IndexCard
            no="0417"
            title="On gardens and attention"
            body="Simone Weil called attention the rarest form of generosity. The garden agrees: what gets tended, grows. What gets noticed, returns."
            refs="0312, 0897"
            className="w-full max-w-[420px] -rotate-1"
          />
          <p
            aria-hidden
            className={`${serif.className} absolute -bottom-10 left-2 hidden max-w-[180px] rotate-1 text-[15px] italic lg:block`}
            style={{ color: red }}
          >
            a card from 2023, returned by the index the week the essay was due
          </p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="border-y" style={{ borderColor: rule, background: "#efefe9" }}>
        <div className="mx-auto max-w-[1200px] px-6 py-24">
          <h2
            className={`${serif.className} max-w-[20ch] text-[30px] leading-[1.15] font-medium md:text-[40px]`}
          >
            You do not have a memory problem. You have a retrieval problem.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-0">
            <p
              className="max-w-[52ch] text-[15px] leading-7 md:border-r md:pr-10"
              style={{ color: "#3d4045", borderColor: rule }}
            >
              Note apps treat forgetting as a filing error: pick the right
              folder and you will find it later. But you will not, because you
              will not remember which folder, which app, which year. The note
              was not lost. The path to it was never built.
            </p>
            <p
              className="max-w-[52ch] text-[15px] leading-7 md:pl-10"
              style={{ color: "#3d4045" }}
            >
              A commonplace book worked differently. Writers copied passages,
              added cross-references in the margin, and let the index grow
              wild. The book remembered for them. Commonplace is that book,
              kept for you.
            </p>
          </div>
        </div>
      </section>

      {/* Method: real sequence */}
      <section id="method" className="mx-auto max-w-[1200px] px-6 py-24">
        <h2
          className={`${serif.className} text-[30px] font-medium md:text-[40px]`}
        >
          How it keeps itself
        </h2>
        <ol className="mt-14">
          {[
            {
              n: "1",
              t: "Write",
              d: "One inbox, no filing decision. Drop the thought before it goes.",
            },
            {
              n: "2",
              t: "Cross-reference",
              d: "Link notes as you write, or let the index propose its own.",
            },
            {
              n: "3",
              t: "Resurface",
              d: "Old notes return in context, inside what you are writing now.",
            },
          ].map((step, i) => (
            <li
              key={step.n}
              className={`grid grid-cols-[64px_200px_1fr] items-baseline gap-4 py-7 md:grid-cols-[96px_260px_1fr] ${
                i < 2 ? "border-b" : ""
              }`}
              style={{ borderColor: rule }}
            >
              <span
                className={`${serif.className} text-[34px] italic md:text-[44px]`}
                style={{ color: red }}
              >
                {step.n}
              </span>
              <span className={`${serif.className} text-[22px] font-medium md:text-[26px]`}>
                {step.t}
              </span>
              <span className="text-[14.5px] leading-6" style={{ color: sub }}>
                {step.d}
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* Specimen */}
      <section
        id="specimen"
        className="border-t"
        style={{ borderColor: rule, background: "#efefe9" }}
      >
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 px-6 py-24 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p
              className="font-mono text-[11px] tracking-[0.2em] uppercase"
              style={{ color: red }}
            >
              A note, in the wild
            </p>
            <h2
              className={`${serif.className} mt-5 max-w-[16ch] text-[30px] leading-[1.15] font-medium md:text-[38px]`}
            >
              Notes that cite each other, like scholarship
            </h2>
            <p className="mt-6 max-w-[46ch] text-[15px] leading-7" style={{ color: sub }}>
              Every note can point at another, and every note knows what points
              back. The result reads less like a folder and more like a mind.
            </p>
            <figure className="mt-10">
              <Image
                src="https://picsum.photos/seed/commonplace-study/960/640?grayscale"
                alt="A writing desk with an open notebook and loose index cards"
                width={960}
                height={640}
                className="border object-cover"
                style={{ borderColor: rule }}
              />
              <figcaption
                className="mt-3 font-mono text-[11.5px] tracking-[0.06em]"
                style={{ color: sub }}
              >
                The index card: three hundred years old, still unbeaten.
              </figcaption>
            </figure>
          </div>
          <div className="relative flex flex-col items-center gap-6 lg:items-end">
            <IndexCard
              no="0897"
              title="Meetings that should have been memos"
              body="A meeting is a note that was never written. If it cannot survive as two paragraphs, it cannot survive an hour."
              refs="0417, 1102"
              className="w-full max-w-[440px] rotate-1"
            />
            <IndexCard
              no="1102"
              title="The two-paragraph rule"
              body="Before scheduling, write two paragraphs. Half of meetings dissolve. The other half get sharper."
              refs="0897"
              className="w-full max-w-[400px] -rotate-2 lg:-mt-2 lg:mr-16"
            />
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <blockquote className="mx-auto max-w-[680px] text-center">
          <p
            className={`${serif.className} text-[26px] leading-[1.3] font-medium md:text-[32px]`}
          >
            &ldquo;I stopped re-reading books and started re-reading
            myself.&rdquo;
          </p>
          <footer className="mt-6 text-[13px]" style={{ color: sub }}>
            <span style={{ color: ink }}>Mireille Fontaine</span>
            <span className="mx-2" style={{ color: rule }}>
              |
            </span>
            Historian, University of Lyon
          </footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section
        id="begin"
        className="border-t"
        style={{ borderColor: rule, background: "#efefe9" }}
      >
        <div className="mx-auto max-w-[1200px] px-6 py-28 text-center">
          <h2
            className={`${serif.className} text-[34px] font-medium md:text-[46px]`}
          >
            Begin your commonplace.
          </h2>
          <p className="mx-auto mt-5 max-w-[44ch] text-[15px] leading-7" style={{ color: sub }}>
            Free for the first five hundred notes. Plain files on your disk,
            readable by anything, forever.
          </p>
          <Link
            href="/1"
            className="mt-9 inline-block px-8 py-3.5 text-[14px] font-medium text-white transition active:translate-y-[1px]"
            style={{ background: ink }}
          >
            Start your commonplace
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t" style={{ borderColor: rule }}>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-6 py-10 text-[12.5px] md:flex-row md:items-center md:justify-between" style={{ color: sub }}>
          <span className={`${serif.className} text-[16px]`} style={{ color: ink }}>
            Commonplace
          </span>
          <span>Set in Newsreader and Geist. Written on paper first.</span>
          <span>&copy; 2026 Commonplace Society</span>
        </div>
      </footer>
    </div>
  );
}
