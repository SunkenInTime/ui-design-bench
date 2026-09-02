"use client";

import { useState } from "react";
import Link from "next/link";
import { Oswald, Inter, JetBrains_Mono } from "next/font/google";

const display = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "600"] });

type Layer = {
  id: string;
  era: string;
  depth: string;
  color: string;
  notes: { title: string; meta: string }[];
};

const LAYERS: Layer[] = [
  {
    id: "topsoil",
    era: "Topsoil · 2026",
    depth: "0–1 yr",
    color: "#D99A3D",
    notes: [
      { title: "Launch checklist for the zine", meta: "12 notes · edited yesterday" },
      { title: "Quotes worth stealing this week", meta: "8 notes · growing daily" },
    ],
  },
  {
    id: "sandstone",
    era: "Sandstone · 2024–25",
    depth: "1–3 yrs",
    color: "#B45A38",
    notes: [
      { title: "The community garden proposal", meta: "46 notes · shipped, funded" },
      { title: "Talk: thinking in public", meta: "23 notes · delivered twice" },
    ],
  },
  {
    id: "shale",
    era: "Shale · 2022–23",
    depth: "3–5 yrs",
    color: "#6E86A0",
    notes: [
      { title: "Reading notes: The Extended Mind", meta: "31 notes · cited 14× since" },
      { title: "Failed app ideas (keep digging)", meta: "19 notes · 2 revived later" },
    ],
  },
  {
    id: "bedrock",
    era: "Bedrock · 2020–21",
    depth: "5+ yrs",
    color: "#EDE4D3",
    notes: [
      { title: "Why I started writing daily", meta: "9 notes · the foundation of everything" },
      { title: "First principles: attention", meta: "17 notes · still load-bearing" },
    ],
  },
];

const CUT = [
  { t: "Sediment, not storage", d: "Notes settle into dated layers automatically. Nothing to file, nothing to lose — the record builds itself." },
  { t: "Core samples on demand", d: "Ask any question and Loam drills straight down, pulling the relevant stratum to the surface with citations." },
  { t: "Fossils become fuel", d: "Old fragments resurface when they rhyme with new work. Your past thinking keeps paying interest." },
];

export default function Strata() {
  const [active, setActive] = useState<Layer>(LAYERS[1]);

  return (
    <div className={`${body.className} min-h-full bg-[#23272E] text-[#EDE4D3]`}>
      <header className="border-b border-white/10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className={`${mono.className} text-sm font-semibold tracking-[0.3em] uppercase`}>
            ◧ Loam
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-8 text-xs font-semibold tracking-widest uppercase text-[#EDE4D3]/70 sm:flex">
            <a href="#core" className="hover:text-[#D99A3D]">Core sample</a>
            <a href="#cut" className="hover:text-[#D99A3D]">The cut</a>
            <a href="#claim" className="hover:text-[#D99A3D]">Stake a claim</a>
          </nav>
          <a
            href="#claim"
            className="bg-[#D99A3D] px-5 py-2.5 text-xs font-bold tracking-widest text-[#23272E] uppercase transition-colors hover:bg-[#EDE4D3]"
          >
            Start digging
          </a>
        </div>
      </header>

      <section className="mx-auto w-full max-w-6xl px-6 pt-16 sm:pt-24">
        <p className={`${mono.className} text-xs tracking-[0.3em] text-[#D99A3D] uppercase`}>
          Survey no. 5 · your thinking has geology
        </p>
        <h1 className={`${display.className} mt-6 max-w-4xl text-6xl leading-[0.95] font-semibold tracking-tight uppercase text-balance sm:text-8xl`}>
          Six years of notes. Zero feet of mud.
        </h1>
        <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-lg leading-relaxed text-[#EDE4D3]/70">
            Loam is the second brain for deep time. Every fragment you keep
            sediments into layers — and every layer stays drillable forever.
          </p>
          <dl className="flex gap-10">
            {[
              ["9.2M", "layers cut"],
              ["100%", "retrievable"],
              ["0", "lost fossils"],
            ].map(([n, l]) => (
              <div key={l}>
                <dd className={`${display.className} text-4xl font-semibold text-[#D99A3D]`}>{n}</dd>
                <dd className={`${mono.className} mt-1 text-[11px] tracking-widest uppercase opacity-60`}>{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* signature: core sample */}
      <section id="core" className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className={`${mono.className} text-xs tracking-[0.3em] text-[#D99A3D] uppercase`}>
              Live core · click a layer
            </p>
            <div className="mt-4 overflow-hidden rounded-lg border border-white/15" role="group" aria-label="Geological layers of your notes">
              {LAYERS.map((l) => {
                const on = active.id === l.id;
                return (
                  <button
                    key={l.id}
                    onClick={() => setActive(l)}
                    aria-pressed={on}
                    className="flex w-full items-center gap-4 px-5 py-6 text-left transition-all focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#D99A3D]"
                    style={{
                      backgroundColor: on ? l.color : "#2C313A",
                      color: on && l.id === "bedrock" ? "#23272E" : on ? "#23272E" : "#EDE4D3",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className="h-10 w-3 shrink-0 rounded-sm"
                      style={{ backgroundColor: on ? "#23272E" : l.color, opacity: on ? 0.85 : 1 }}
                    />
                    <span className="flex-1">
                      <span className={`${display.className} block text-xl font-semibold tracking-wide uppercase`}>
                        {l.era}
                      </span>
                      <span className={`${mono.className} mt-0.5 block text-[11px] tracking-widest uppercase opacity-70`}>
                        depth {l.depth} · {l.notes.length} veins
                      </span>
                    </span>
                    <span aria-hidden="true" className="text-xl">{on ? "◉" : "○"}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="rounded-lg bg-[#EDE4D3] p-7 text-[#23272E] sm:p-9" aria-live="polite">
            <p className={`${mono.className} text-[11px] tracking-[0.25em] uppercase opacity-60`}>
              Veins in {active.era}
            </p>
            <ul className="mt-4 space-y-4">
              {active.notes.map((n) => (
                <li key={n.title} className="border-l-4 pl-4" style={{ borderColor: active.color }}>
                  <p className={`${display.className} text-2xl font-medium tracking-tight`}>{n.title}</p>
                  <p className={`${mono.className} mt-1 text-xs tracking-wide uppercase opacity-60`}>{n.meta}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-[#23272E]/15 pt-4 text-sm leading-relaxed opacity-75">
              This is what Loam does with your archive: every question drills
              the right layer and brings up the vein — cited, dated, intact.
            </p>
          </div>
        </div>
      </section>

      <section id="cut" className="mx-auto w-full max-w-6xl px-6 py-14">
        <h2 className={`${display.className} max-w-2xl text-4xl font-semibold tracking-tight uppercase text-balance sm:text-5xl`}>
          Cut through years in seconds.
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-white/15 md:grid-cols-3">
          {CUT.map((c) => (
            <article key={c.t} className="bg-[#23272E] p-7">
              <h3 className={`${display.className} text-xl font-medium tracking-wide uppercase text-[#D99A3D]`}>{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#EDE4D3]/70">{c.d}</p>
            </article>
          ))}
        </div>
        <figure className="mt-10 rounded-lg bg-[#B45A38] p-8 text-[#EDE4D3] sm:p-12">
          <blockquote className={`${display.className} max-w-3xl text-2xl leading-snug font-medium tracking-tight text-balance sm:text-3xl`}>
            “I quoted a note from 2021 in a board meeting last week. Loam dug
            it up before I&apos;d finished the sentence.”
          </blockquote>
          <figcaption className={`${mono.className} mt-6 text-xs tracking-[0.25em] uppercase opacity-75`}>
            Marcus Webb · founder, Bedrock Analytics
          </figcaption>
        </figure>
      </section>

      <section id="claim" className="mx-auto w-full max-w-6xl px-6 pt-2 pb-24">
        <div className="rounded-lg border-2 border-[#D99A3D] p-10 text-center sm:p-14">
          <h2 className={`${display.className} text-4xl font-semibold tracking-tight uppercase text-balance sm:text-5xl`}>
            Stake your claim.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[#EDE4D3]/70">
            Free down to bedrock for your first 1,000 notes. The full rig —
            unlimited depth, shared digs — runs $10 a month.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#claim" className="bg-[#D99A3D] px-8 py-3.5 text-sm font-bold tracking-widest text-[#23272E] uppercase hover:bg-[#EDE4D3]">
              Start digging free
            </a>
            <a href="#core" className="border border-[#EDE4D3]/40 px-8 py-3.5 text-sm font-bold tracking-widest uppercase hover:border-[#D99A3D] hover:text-[#D99A3D]">
              Drill the demo again
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 pb-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className={`${mono.className} text-xs tracking-[0.3em] uppercase`}>◧ Loam · Strata № 5</p>
          <p className="text-sm text-[#EDE4D3]/60">Mind the depths. Free to start, export anytime.</p>
        </div>
      </footer>
    </div>
  );
}
