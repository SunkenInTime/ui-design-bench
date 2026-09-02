"use client";

import { useState } from "react";
import Link from "next/link";
import { Cormorant_Garamond, Karla, IBM_Plex_Mono } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});
const body = Karla({ subsets: ["latin"], weight: ["400", "500", "700"] });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"] });

type Specimen = {
  id: string;
  x: number;
  y: number;
  title: string;
  latin: string;
  links: string[];
};

const SPECIMENS: Specimen[] = [
  { id: "sleep", x: 130, y: 120, title: "On sleep & memory", latin: "Somnus memoriae", links: ["garden", "essay"] },
  { id: "garden", x: 400, y: 70, title: "Garden metaphors", latin: "Hortus mentis", links: ["sleep", "essay", "roots"] },
  { id: "essay", x: 660, y: 130, title: "Draft: attention essay", latin: "Attentio fragilis", links: ["sleep", "garden"] },
  { id: "roots", x: 250, y: 330, title: "Root systems", latin: "Radices", links: ["garden", "compost"] },
  { id: "compost", x: 540, y: 350, title: "Compost: dead drafts", latin: "Hum us fertilis", links: ["roots", "essay"] },
];

const STAGES = [
  {
    name: "Sow",
    text: "Drop in anything — a sentence, a photo of a margin scribble, a 2 a.m. voice memo. Loam files it before you've finished typing.",
  },
  {
    name: "Tend",
    text: "Loam threads related notes together on its own. Accept a link with one tap, prune it with another. The garden learns your taste.",
  },
  {
    name: "Bloom",
    text: "Ask a question and Loam answers from your own notes, citing the exact specimen. Nothing in, nothing out — your thinking, flowering.",
  },
];

export default function Herbarium() {
  const [active, setActive] = useState<string | null>(null);
  const activeLinks = new Set(
    SPECIMENS.find((s) => s.id === active)?.links ?? [],
  );

  return (
    <div className={`${body.className} min-h-full bg-[#E7EAD9] text-[#1E2B23]`}>
      {/* top bar */}
      <header className="border-b border-[#1E2B23]/15">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className={`${mono.className} text-sm tracking-widest uppercase`}>
            ❧ Loam
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-8 text-sm font-bold sm:flex">
            <a href="#board" className="hover:text-[#5A7247]">Specimens</a>
            <a href="#method" className="hover:text-[#5A7247]">Method</a>
            <a href="#plot" className="hover:text-[#5A7247]">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#plot" className="hidden text-sm font-bold sm:block">Sign in</a>
            <a
              href="#plot"
              className="rounded-full bg-[#1E2B23] px-5 py-2.5 text-sm font-bold text-[#E7EAD9] transition-colors hover:bg-[#5A7247]"
            >
              Start planting
            </a>
          </div>
        </div>
      </header>

      {/* hero */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-16 pb-10 sm:pt-24">
        <p className={`${mono.className} text-xs tracking-[0.3em] text-[#5A7247] uppercase`}>
          Field notes, kept alive · Est. 2026
        </p>
        <h1
          className={`${display.className} mt-6 max-w-4xl text-5xl leading-[1.02] font-medium text-balance sm:text-7xl`}
        >
          Your mind, pressed like flowers — <em className="font-semibold">still alive.</em>
        </h1>
        <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-lg leading-relaxed text-[#1E2B23]/80">
            Loam is a second brain for people who think in fragments. Every
            note you keep puts down roots, finds its neighbours, and grows
            into something you can harvest.
          </p>
          <dl className="flex gap-10">
            {[
              ["38k", "gardeners"],
              ["4.1M", "notes rooted"],
              ["12×", "faster recall"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className={`${display.className} text-4xl font-semibold`}>{n}</dd>
                <dd className={`${mono.className} mt-1 text-[11px] tracking-widest uppercase opacity-70`}>{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* signature: specimen board */}
      <section id="board" className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="overflow-hidden rounded-3xl border border-[#1E2B23]/20 bg-[#DFE3CF] shadow-[inset_0_0_80px_rgba(30,43,35,0.08)]">
          <div className="flex items-center justify-between border-b border-[#1E2B23]/15 px-6 py-3">
            <p className={`${mono.className} text-[11px] tracking-[0.25em] uppercase opacity-70`}>
              Cabinet III · thread map · hover a specimen
            </p>
            <p className={`${mono.className} hidden text-[11px] tracking-[0.25em] uppercase opacity-70 sm:block`}>
              {SPECIMENS.length} specimens · {SPECIMENS.reduce((a, s) => a + s.links.length, 0) / 2 | 0} threads
            </p>
          </div>
          <svg
            viewBox="0 0 800 440"
            role="img"
            aria-label="A map of linked notes. Hover a card to trace its threads."
            className="block h-auto w-full"
            onMouseLeave={() => setActive(null)}
          >
            {(() => {
              const seen = new Set<string>();
              const edges: [Specimen, Specimen][] = [];
              for (const s of SPECIMENS)
                for (const t of s.links) {
                  const o = SPECIMENS.find((p) => p.id === t)!;
                  const k = [s.id, t].sort().join("~");
                  if (!seen.has(k)) {
                    seen.add(k);
                    edges.push([s, o]);
                  }
                }
              return edges.map(([a, b]) => {
                const lit = active === a.id || active === b.id;
                return (
                  <line
                    key={`${a.id}-${b.id}`}
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    stroke="#6B4F35"
                    strokeWidth={lit ? 2.5 : 1.25}
                    strokeDasharray={lit ? "none" : "5 5"}
                    opacity={active === null || lit ? 0.85 : 0.18}
                    style={{ transition: "opacity 0.25s, stroke-width 0.25s" }}
                  />
                );
              });
            })()}
            {SPECIMENS.map((s) => {
              const lit = active === null || active === s.id || activeLinks.has(s.id);
              return (
                <g
                  key={s.id}
                  opacity={lit ? 1 : 0.35}
                  style={{ transition: "opacity 0.25s", cursor: "pointer" }}
                  onMouseEnter={() => setActive(s.id)}
                  onFocus={() => setActive(s.id)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${s.title}. Linked to ${s.links.length} notes.`}
                  onKeyDown={(e) => e.key === "Enter" && setActive(s.id)}
                >
                  <circle cx={s.x} cy={s.y} r={lit && active === s.id ? 9 : 6} fill="#6B4F35" />
                  <circle cx={s.x} cy={s.y} r={3} fill="#E7EAD9" />
                  <rect
                    x={s.x - 92}
                    y={s.y + 16}
                    width={184}
                    height={64}
                    rx={6}
                    fill="#F4F2E4"
                    stroke="#1E2B23"
                    strokeOpacity={0.35}
                  />
                  <text x={s.x} y={s.y + 40} textAnchor="middle" fontSize={14} fontWeight={700} fill="#1E2B23">
                    {s.title}
                  </text>
                  <text x={s.x} y={s.y + 60} textAnchor="middle" fontSize={11} fontStyle="italic" fill="#5A7247">
                    {s.latin}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </section>

      {/* method */}
      <section id="method" className="mx-auto w-full max-w-6xl px-6 py-14">
        <p className={`${mono.className} text-xs tracking-[0.3em] text-[#5A7247] uppercase`}>
          The method
        </p>
        <h2 className={`${display.className} mt-4 max-w-2xl text-4xl font-medium text-balance sm:text-5xl`}>
          Three seasons. No weeding required.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {STAGES.map((s) => (
            <article
              key={s.name}
              className="rounded-2xl border border-[#1E2B23]/20 bg-[#F4F2E4] p-7 transition-transform duration-300 hover:-translate-y-1"
            >
              <p className={`${display.className} text-3xl font-semibold italic`}>{s.name}</p>
              <p className="mt-3 leading-relaxed text-[#1E2B23]/80">{s.text}</p>
            </article>
          ))}
        </div>
        <figure className="mt-12 rounded-2xl bg-[#1E2B23] p-8 text-[#E7EAD9] sm:p-12">
          <blockquote className={`${display.className} max-w-3xl text-2xl leading-snug font-medium text-balance sm:text-3xl`}>
            “I stopped organizing my notes and started gardening them. My book
            outline practically assembled itself from three years of fragments.”
          </blockquote>
          <figcaption className={`${mono.className} mt-6 text-xs tracking-[0.25em] uppercase opacity-70`}>
            June Okafor · author, “A Field Guide to Attention”
          </figcaption>
        </figure>
      </section>

      {/* pricing */}
      <section id="plot" className="mx-auto w-full max-w-6xl px-6 pt-6 pb-24">
        <h2 className={`${display.className} text-4xl font-medium sm:text-5xl`}>Choose your plot.</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-[#1E2B23]/20 p-8">
            <p className={`${mono.className} text-xs tracking-[0.25em] uppercase opacity-70`}>Seedling · free</p>
            <p className={`${display.className} mt-3 text-5xl font-semibold`}>$0</p>
            <ul className="mt-6 space-y-3 text-[#1E2B23]/85">
              {["1,000 notes", "Automatic linking", "2 devices"].map((f) => (
                <li key={f} className="flex gap-3"><span aria-hidden="true">❧</span>{f}</li>
              ))}
            </ul>
            <a href="#plot" className="mt-8 block rounded-full border-2 border-[#1E2B23] py-3 text-center font-bold hover:bg-[#1E2B23] hover:text-[#E7EAD9]">
              Plant for free
            </a>
          </article>
          <article className="rounded-2xl bg-[#1E2B23] p-8 text-[#E7EAD9]">
            <p className={`${mono.className} text-xs tracking-[0.25em] text-[#A8B594] uppercase`}>Grove · $10/mo</p>
            <p className={`${display.className} mt-3 text-5xl font-semibold`}>$10</p>
            <ul className="mt-6 space-y-3 text-[#E7EAD9]/85">
              {["Unlimited notes", "Ask-your-garden answers", "Publish a public plot", "Priority harvest (support)"].map((f) => (
                <li key={f} className="flex gap-3"><span aria-hidden="true" className="text-[#A8B594]">❧</span>{f}</li>
              ))}
            </ul>
            <a href="#plot" className="mt-8 block rounded-full bg-[#E7EAD9] py-3 text-center font-bold text-[#1E2B23] hover:bg-[#A8B594]">
              Grow with Grove
            </a>
          </article>
        </div>
      </section>

      <footer className="border-t border-[#1E2B23]/15 pb-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className={`${mono.className} text-xs tracking-widest uppercase`}>❧ Loam · Herbarium № 1</p>
          <p className="text-sm text-[#1E2B23]/70">Tend your thinking. Free to start, yours forever — export anytime.</p>
        </div>
      </footer>
    </div>
  );
}
