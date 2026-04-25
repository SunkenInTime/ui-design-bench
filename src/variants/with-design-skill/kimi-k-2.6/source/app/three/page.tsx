import { Syne, Spectral } from "next/font/google";
import Link from "next/link";

const display = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-display",
});

const body = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export default function Three() {
  return (
    <div
      className={`${display.variable} ${body.variable} relative min-h-screen overflow-hidden bg-neutral-50 text-neutral-950`}
    >
      {/* Grid pattern background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-16">
        <div className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-tight">
          The Redaction
        </div>
        <nav className="hidden gap-8 md:flex">
          {["Issues", "Archive", "Subscribe"].map((item) => (
            <a
              key={item}
              href="#"
              className="font-[family-name:var(--font-body)] text-sm text-neutral-500 underline decoration-transparent underline-offset-4 transition-colors hover:text-red-600 hover:decoration-red-600"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-[1400px] px-6 pb-32 md:px-16">
        {/* Asymmetric Hero */}
        <div className="relative mt-12 md:mt-24">
          {/* Massive headline - broken layout */}
          <div className="relative">
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(3rem,10vw,10rem)] font-extrabold uppercase leading-[0.85] tracking-tighter">
              <span className="block">Think</span>
              <span className="relative inline-block">
                <span className="relative z-10">Freely</span>
                {/* Redaction bar */}
                <span className="absolute left-0 top-1/2 z-0 h-[0.6em] w-full -translate-y-1/2 bg-red-600 transition-all duration-500 hover:w-0" />
              </span>
            </h1>

            {/* Floating meta box */}
            <div className="absolute right-0 top-0 hidden w-64 border border-neutral-200 bg-white p-6 shadow-sm md:block">
              <div className="font-[family-name:var(--font-body)] text-xs uppercase tracking-widest text-neutral-400">
                Vol. 01 — Note-Taking as Resistance
              </div>
              <div className="mt-4 h-px w-full bg-neutral-200" />
              <p className="mt-4 font-[family-name:var(--font-body)] text-sm leading-relaxed text-neutral-600">
                In an age of infinite content, the act of writing is an act of
                reclaiming your attention.
              </p>
            </div>
          </div>

          {/* Subhead offset */}
          <div className="mt-12 flex flex-col gap-8 md:ml-[20%] md:mt-20 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md font-[family-name:var(--font-body)] text-lg leading-8 text-neutral-600">
              Second Brain is not an app. It is a publishing house for your
              private thoughts — edited, redacted, and released on your own terms.
            </p>
            <Link
              href="#"
              className="inline-flex h-14 items-center bg-red-600 px-8 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-neutral-950"
            >
              Start Publishing
            </Link>
          </div>
        </div>

        {/* Feature section — editorial grid */}
        <div className="mt-32 grid gap-px bg-neutral-200 md:grid-cols-12">
          {/* Large feature */}
          <div className="relative col-span-12 bg-white p-10 md:col-span-7 md:p-16">
            <div className="font-[family-name:var(--font-body)] text-xs uppercase tracking-widest text-red-600">
              Cover Story
            </div>
            <h2 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-bold uppercase leading-[0.95] md:text-6xl">
              The Architecture
              <br />
              of <span className="italic normal-case">Private</span> Thought
            </h2>
            <p className="mt-8 max-w-md font-[family-name:var(--font-body)] text-base leading-7 text-neutral-500">
              Every note is a draft. Every draft is a decision. Our system
              treats your ideas with the editorial rigor they deserve —
              connecting, refining, and surfacing them exactly when needed.
            </p>
            <div className="mt-10 flex gap-4">
              <span className="inline-block h-2 w-2 bg-red-600" />
              <span className="font-[family-name:var(--font-body)] text-xs uppercase tracking-widest text-neutral-400">
                Read the full essay
              </span>
            </div>
          </div>

          {/* Side stack */}
          <div className="col-span-12 flex flex-col gap-px bg-neutral-200 md:col-span-5">
            {[
              { title: "No Algorithms. Only Association.", tag: "Opinion" },
              { title: "The Death of the Folder System", tag: "Analysis" },
              { title: "Why We Forget What We Read", tag: "Research" },
            ].map((item) => (
              <div
                key={item.title}
                className="group flex flex-1 flex-col justify-between bg-white p-8 transition-colors hover:bg-neutral-50 md:p-10"
              >
                <div className="font-[family-name:var(--font-body)] text-[10px] uppercase tracking-[0.2em] text-red-600">
                  {item.tag}
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold uppercase leading-tight group-hover:underline decoration-red-600 underline-offset-4">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Pull quote */}
        <div className="mt-32 border-y border-neutral-200 py-20 text-center">
          <blockquote className="mx-auto max-w-4xl font-[family-name:var(--font-display)] text-3xl font-bold uppercase leading-tight md:text-5xl">
            "Your notes are the{" "}
            <span className="relative inline-block">
              <span className="relative z-10">only</span>
              <span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-red-600/20" />
            </span>{" "}
            record of your mind at work."
          </blockquote>
          <div className="mt-8 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.3em] text-neutral-400">
            — Second Brain Editorial
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 flex flex-col items-center justify-between gap-10 border border-neutral-950 bg-neutral-950 p-12 text-white md:flex-row md:p-16">
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-5xl">
              Issue No. 001: You
            </h3>
            <p className="mt-4 max-w-md font-[family-name:var(--font-body)] text-neutral-400">
              Subscribe to your own thinking. The first issue is free and always
              will be.
            </p>
          </div>
          <Link
            href="#"
            className="inline-flex h-14 shrink-0 items-center bg-white px-10 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wide text-neutral-950 transition-colors hover:bg-red-600 hover:text-white"
          >
            Begin
          </Link>
        </div>
      </main>
    </div>
  );
}
