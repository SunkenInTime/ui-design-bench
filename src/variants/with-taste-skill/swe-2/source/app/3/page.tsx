import type { Metadata } from "next";
import Link from "next/link";
import { Graph } from "./graph";
import { Reveal } from "../components/reveal";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";

export const metadata: Metadata = {
  title: "Commonplace - Constellation",
};

const bg = "#0a0e14";
const panel = "#0e1420";
const line = "#1e2736";
const ice = "#7cc4ff";
const text = "#e4e8f0";
const dim = "#8a93a5";

export default function ConstellationPage() {
  return (
    <div className="min-h-[100dvh]" style={{ background: bg, color: text }}>
      {/* Nav */}
      <header className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <span className="flex items-center gap-2.5 text-[15px] font-semibold tracking-[-0.01em]">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
            <circle cx="4" cy="9" r="2.2" fill={ice} />
            <circle cx="13" cy="4" r="1.6" fill="none" stroke={ice} />
            <circle cx="13" cy="14" r="1.6" fill="none" stroke={ice} />
            <path d="M6 8.2 11.5 4.6M6 9.8l5.5 3.6" stroke={ice} strokeWidth="0.9" opacity="0.6" />
          </svg>
          Commonplace
        </span>
        <nav className="hidden items-center gap-8 text-[13.5px] md:flex" style={{ color: dim }}>
          <Link href="#how" className="transition hover:text-[#e4e8f0]">
            How it links
          </Link>
          <Link href="#resurface" className="transition hover:text-[#e4e8f0]">
            Resurfacing
          </Link>
          <Link href="#start" className="transition hover:text-[#e4e8f0]">
            Start
          </Link>
        </nav>
        <Link
          href="#start"
          className="rounded-full px-4 py-2 text-[13px] font-semibold transition active:translate-y-[1px]"
          style={{ background: ice, color: "#0a1220" }}
        >
          Start your graph
        </Link>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 pt-16 pb-16 lg:grid-cols-[2fr_3fr] lg:items-center lg:pt-12">
          <div className="relative z-10">
            <h1 className="max-w-[14ch] text-[40px] leading-[1.05] font-semibold tracking-[-0.025em] md:text-[56px]">
              Notes that find each other.
            </h1>
            <p className="mt-6 max-w-[42ch] text-[15.5px] leading-7" style={{ color: dim }}>
              Write a note and forget it. Commonplace threads it into everything
              else you know, then brings it back.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                href="#start"
                className="rounded-full px-6 py-3 text-[14px] font-semibold transition active:translate-y-[1px]"
                style={{ background: ice, color: "#0a1220" }}
              >
                Start your graph
              </Link>
              <Link
                href="#how"
                className="inline-flex items-center gap-1.5 text-[14px] font-medium transition"
                style={{ color: ice }}
              >
                How it links
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
          <div
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border"
            style={{ borderColor: line, background: panel }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(124,196,255,0.07), transparent 70%)",
              }}
            />
            <Graph />
          </div>
        </div>
      </section>

      {/* Mechanisms: asymmetric grid */}
      <section id="how" className="border-t" style={{ borderColor: line }}>
        <div className="mx-auto max-w-[1200px] px-6 py-24">
          <Reveal>
            <h2 className="max-w-[20ch] text-[28px] leading-[1.15] font-semibold tracking-[-0.02em] md:text-[36px]">
              The graph is not the point. The return is.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
            <Reveal className="md:row-span-2">
              <div
                className="flex h-full flex-col justify-between rounded-2xl border p-8"
                style={{ borderColor: line, background: panel }}
              >
                <p className="font-mono text-[12px] tracking-[0.14em]" style={{ color: ice }}>
                  BACKLINKS
                </p>
                <div className="mt-16">
                  <h3 className="text-[22px] font-semibold tracking-[-0.01em]">
                    Every note knows what points at it
                  </h3>
                  <p className="mt-4 max-w-[46ch] text-[14.5px] leading-7" style={{ color: dim }}>
                    Mention another note and the link lands on both sides.
                    Reading one note becomes reading the neighborhood around it,
                    which is where the thinking actually lives.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div
                className="rounded-2xl border p-8"
                style={{ borderColor: line, background: panel }}
              >
                <p className="font-mono text-[12px] tracking-[0.14em]" style={{ color: ice }}>
                  RECALL
                </p>
                <h3 className="mt-6 text-[22px] font-semibold tracking-[-0.01em]">
                  Search by meaning
                </h3>
                <p className="mt-4 max-w-[52ch] text-[14.5px] leading-7" style={{ color: dim }}>
                  Type the idea as you remember it, not the words you used.
                  Half-formed is plenty.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div
                className="rounded-2xl border p-8"
                style={{ borderColor: line, background: panel }}
              >
                <p className="font-mono text-[12px] tracking-[0.14em]" style={{ color: ice }}>
                  RESURFACE
                </p>
                <h3 className="mt-6 text-[22px] font-semibold tracking-[-0.01em]">
                  Old notes come back on their own
                </h3>
                <p className="mt-4 max-w-[52ch] text-[14.5px] leading-7" style={{ color: dim }}>
                  While you write, related notes surface in the margin. Your
                  best thinking stops expiring.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Resurface: full-width statement */}
      <section id="resurface" className="border-t" style={{ borderColor: line, background: panel }}>
        <div className="mx-auto max-w-[1200px] px-6 py-28">
          <Reveal>
            <p className="mx-auto max-w-[760px] text-center text-[26px] leading-[1.35] font-medium tracking-[-0.01em] md:text-[32px]">
              A note written in 2019 should be able to walk into the room in
              2027 and introduce itself.{" "}
              <span style={{ color: ice }}>That is the job.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Quote */}
      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <Reveal>
          <figure className="grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr]">
            <figcaption className="text-[13.5px] leading-6" style={{ color: dim }}>
              <span className="block text-[14.5px] font-semibold" style={{ color: text }}>
                Ana Sofía Campos
              </span>
              Science writer, Mexico City
            </figcaption>
            <blockquote className="max-w-[56ch] text-[20px] leading-8 font-medium md:text-[24px]">
              &ldquo;I stopped doing the archaeology dig through my own notes.
              The connections were already there when I came back.&rdquo;
            </blockquote>
          </figure>
        </Reveal>
      </section>

      {/* CTA */}
      <section id="start" className="border-t" style={{ borderColor: line }}>
        <div className="mx-auto max-w-[1200px] px-6 py-28">
          <div
            className="relative overflow-hidden rounded-2xl border px-8 py-16 text-center md:py-20"
            style={{ borderColor: line, background: panel }}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 50% 110%, rgba(124,196,255,0.14), transparent 65%)",
              }}
            />
            <h2 className="relative text-[30px] font-semibold tracking-[-0.02em] md:text-[40px]">
              Give your thinking a memory.
            </h2>
            <p className="relative mx-auto mt-4 max-w-[46ch] text-[14.5px] leading-7" style={{ color: dim }}>
              Free for personal libraries. Your notes stay plain files, yours to
              keep.
            </p>
            <Link
              href="/3"
              className="relative mt-9 inline-block rounded-full px-8 py-3.5 text-[14px] font-semibold transition active:translate-y-[1px]"
              style={{ background: ice, color: "#0a1220" }}
            >
              Start your graph
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t" style={{ borderColor: line }}>
        <div
          className="mx-auto flex max-w-[1200px] flex-col gap-3 px-6 py-10 text-[12.5px] md:flex-row md:items-center md:justify-between"
          style={{ color: dim }}
        >
          <span style={{ color: text }}>Commonplace</span>
          <span>A second brain, drawn as a graph</span>
          <span>&copy; 2026</span>
        </div>
      </footer>
    </div>
  );
}
