import type { Metadata } from "next";
import Link from "next/link";
import { TerminalDemo } from "./terminal-demo";

export const metadata: Metadata = {
  title: "Commonplace - Terminal",
};

const bg = "#12100d";
const panel = "#191512";
const line = "#3a332a";
const amber = "#eda94e";
const text = "#d9d2c2";
const dim = "#8d8674";

const COMMANDS = [
  {
    sig: "capture <thought>",
    desc: "Append to today's inbox. No folder, no tag decision. It lands where everything lands.",
  },
  {
    sig: "link <a> <b>",
    desc: "Draw a line between two notes. Both sides remember it, always.",
  },
  {
    sig: 'recall "<phrase>"',
    desc: "Search by meaning, not filename. Half-remembered is enough.",
  },
  {
    sig: "resurface [--context <note>]",
    desc: "Bring back what past-you wrote, inside whatever you are writing now.",
  },
];

const QUERIES = [
  ['recall "books I keep re-lending"', "the list you made after lending Perec twice"],
  ['recall "argument for fewer meetings"', "0417, 0897, 1102. they agree with each other"],
  ["resurface --context essay", "three notes from 2024 you forgot you wrote"],
];

export default function TerminalPage() {
  return (
    <div
      className="min-h-[100dvh] font-mono"
      style={{ background: bg, color: text }}
    >
      {/* Nav */}
      <header className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <span className="text-[15px]" style={{ color: amber }}>
          <span style={{ color: dim }}>$ </span>commonplace
        </span>
        <nav className="hidden items-center gap-7 text-[13px] md:flex" style={{ color: dim }}>
          <Link href="#manual" className="transition hover:text-[#d9d2c2]">
            manual
          </Link>
          <Link href="#queries" className="transition hover:text-[#d9d2c2]">
            queries
          </Link>
          <Link href="#install" className="transition hover:text-[#d9d2c2]">
            install
          </Link>
        </nav>
        <Link
          href="#install"
          className="px-4 py-2 text-[13px] font-semibold transition active:translate-y-[1px]"
          style={{ background: amber, color: "#1a1509" }}
        >
          get the app
        </Link>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 pt-20 pb-24 lg:grid-cols-[5fr_7fr] lg:pt-16">
        <div>
          <h1 className="text-[34px] leading-[1.12] font-semibold tracking-[-0.02em] md:text-[46px]">
            Your memory,
            <br />
            addressable.
          </h1>
          <p className="mt-6 max-w-[42ch] text-[14px] leading-7" style={{ color: dim }}>
            A notes system you query like a database. Write once, link forever,
            recall anything.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              href="#install"
              className="px-6 py-3 text-[14px] font-semibold transition active:translate-y-[1px]"
              style={{ background: amber, color: "#1a1509" }}
            >
              get the app
            </Link>
            <Link
              href="#manual"
              className="text-[14px] transition"
              style={{ color: amber }}
            >
              read the manual
            </Link>
          </div>
        </div>
        <TerminalDemo />
      </section>

      {/* Manual */}
      <section id="manual" className="border-t" style={{ borderColor: line, background: panel }}>
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <h2 className="text-[24px] font-semibold md:text-[30px]">
            <span style={{ color: dim }}>man </span>commonplace
          </h2>
          <p className="mt-3 max-w-[52ch] text-[13.5px] leading-7" style={{ color: dim }}>
            Four verbs. That is the entire interface.
          </p>
          <div className="mt-12">
            {COMMANDS.map((c, i) => (
              <div
                key={c.sig}
                className={`grid grid-cols-1 gap-2 py-6 md:grid-cols-[340px_1fr] md:gap-10 ${
                  i < COMMANDS.length - 1 ? "border-b" : ""
                }`}
                style={{ borderColor: line }}
              >
                <code className="text-[14px]" style={{ color: amber }}>
                  {c.sig}
                </code>
                <p className="text-[13.5px] leading-7" style={{ color: text }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Queries */}
      <section id="queries" className="mx-auto max-w-[1200px] px-6 py-20">
        <h2 className="text-[24px] font-semibold md:text-[30px]">
          Ask badly. It still finds it.
        </h2>
        <p className="mt-3 max-w-[52ch] text-[13.5px] leading-7" style={{ color: dim }}>
          Recall works on what you meant, not what you typed. These are real
          queries from a real library.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-px md:grid-cols-3" style={{ background: line }}>
          {QUERIES.map(([q, a]) => (
            <div key={q} className="p-6" style={{ background: bg }}>
              <p className="text-[13px] leading-6" style={{ color: amber }}>
                <span style={{ color: dim }}>$ </span>
                {q}
              </p>
              <p className="mt-4 pl-4 text-[12.5px] leading-6" style={{ color: dim }}>
                {a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial as output */}
      <section className="border-t" style={{ borderColor: line, background: panel }}>
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <p className="text-[14px]" style={{ color: amber }}>
            <span style={{ color: dim }}>$ </span>cat testimonial.txt
          </p>
          <blockquote className="mt-6 max-w-[640px] pl-4 text-[15px] leading-8" style={{ color: text }}>
            &ldquo;I wrote a note in March and forgot it existed. It came back in
            October, inside the draft where it belonged.&rdquo;
          </blockquote>
          <p className="mt-5 pl-4 text-[12.5px]" style={{ color: dim }}>
            Jonas Reber, reliability engineer, writes everything in Commonplace
          </p>
        </div>
      </section>

      {/* Install */}
      <section id="install" className="mx-auto max-w-[1200px] px-6 py-24">
        <div
          className="border p-8 md:p-12"
          style={{ borderColor: line, background: panel }}
        >
          <h2 className="text-[24px] font-semibold md:text-[30px]">
            Local first. Sync optional.
          </h2>
          <p className="mt-3 max-w-[52ch] text-[13.5px] leading-7" style={{ color: dim }}>
            Your notes live in ~/notes as plain markdown. The app is the index,
            not the vault.
          </p>
          <div
            className="mt-8 flex flex-col gap-4 border p-5 sm:flex-row sm:items-center sm:justify-between"
            style={{ borderColor: line, background: "#0e0c09" }}
          >
            <code className="text-[13px]" style={{ color: text }}>
              <span style={{ color: dim }}>$ </span>curl -fsSL
              get.commonplace.sh | sh
            </code>
            <Link
              href="/2"
              className="px-5 py-2.5 text-center text-[13px] font-semibold whitespace-nowrap transition active:translate-y-[1px]"
              style={{ background: amber, color: "#1a1509" }}
            >
              get the app
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t" style={{ borderColor: line }}>
        <div
          className="mx-auto flex max-w-[1200px] flex-col gap-3 px-6 py-10 text-[12px] md:flex-row md:items-center md:justify-between"
          style={{ color: dim }}
        >
          <span style={{ color: amber }}>
            <span style={{ color: dim }}>$ </span>commonplace
          </span>
          <span>exit 0</span>
          <span>&copy; 2026</span>
        </div>
      </footer>
    </div>
  );
}
