"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });

type Card = {
  call: string;
  title: string;
  body: string;
  tags: string[];
};

const CARDS: Card[] = [
  { call: "LOA 101.4", title: "Why forgetting is a feature", body: "Notes you never revisit fade politely instead of piling up. Loam resurfaces only what earns it.", tags: ["memory", "design"] },
  { call: "LOA 204.9", title: "The two-minute capture rule", body: "If it takes longer than two minutes to file, you won't. Loam files in one keystroke.", tags: ["capture", "habit"] },
  { call: "LOA 317.2", title: "Links beat folders", body: "A note can live in one folder but hold a dozen threads. Ask for any of them, get it in milliseconds.", tags: ["links", "search"] },
  { call: "LOA 422.0", title: "Write with your past self", body: "Drafts arrive pre-loaded with everything you've ever thought on the topic, cited line by line.", tags: ["writing", "memory"] },
  { call: "LOA 530.6", title: "Shared stacks", body: "Lend a whole shelf to a collaborator. They return it with margin notes you'll actually read.", tags: ["teams", "sharing"] },
  { call: "LOA 611.3", title: "Export is a right", body: "Plain Markdown out, any time, no ransom. A library you can't leave isn't a library.", tags: ["trust", "design"] },
];

const RULES = [
  { t: "File anything in one keystroke", d: "Text, clipping, photo, voice. Loam stamps the call number; you never think about where it went." },
  { t: "Find everything in milliseconds", d: "Full-text plus meaning search across every card you've ever filed. Misspellings forgiven, half-memories welcome." },
  { t: "Check out answers, not just cards", d: "Ask a question and the desk clerk answers from your own collection, with the call numbers attached." },
];

export default function CardCatalog() {
  const [q, setQ] = useState("");
  const [stamped, setStamped] = useState(false);
  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return CARDS;
    return CARDS.filter((c) =>
      [c.title, c.body, c.call, ...c.tags].join(" ").toLowerCase().includes(needle),
    );
  }, [q]);

  return (
    <div className={`${display.className} min-h-full bg-[#2E2118] text-[#F3EAD8]`}>
      <div className="h-1.5 bg-[#B98A2F]" aria-hidden="true" />
      <header className="border-b border-[#F3EAD8]/15">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className={`${mono.className} text-sm font-bold tracking-[0.3em] uppercase`}>
            ▤ Loam
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-8 text-sm font-semibold sm:flex">
            <a href="#stacks" className="hover:text-[#B98A2F]">Stacks</a>
            <a href="#rules" className="hover:text-[#B98A2F]">House rules</a>
            <a href="#card" className="hover:text-[#B98A2F]">Get a card</a>
          </nav>
          <a
            href="#card"
            className="rounded-sm bg-[#B98A2F] px-5 py-2.5 text-sm font-bold text-[#2E2118] transition-colors hover:bg-[#F3EAD8]"
          >
            Get a library card
          </a>
        </div>
      </header>

      <section className="mx-auto w-full max-w-6xl px-6 pt-16 sm:pt-24">
        <p className={`${mono.className} text-xs tracking-[0.3em] text-[#B98A2F] uppercase`}>
          The Loam public library · open late
        </p>
        <h1 className="mt-6 max-w-4xl text-5xl leading-[1.0] font-extrabold tracking-tight text-balance sm:text-7xl">
          Every note you&apos;ve ever taken, one drawer away.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#F3EAD8]/75">
          Loam is a second brain run like the world&apos;s best library. You
          drop thoughts at the returns slot; trained clerks (software, polite)
          file, cross-reference, and fetch them back on demand.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#stacks" className="rounded-sm bg-[#F3EAD8] px-7 py-3.5 font-bold text-[#2E2118] hover:bg-[#B98A2F]">
            Browse the stacks
          </a>
          <a href="#card" className="rounded-sm border border-[#F3EAD8]/40 px-7 py-3.5 font-bold hover:border-[#B98A2F] hover:text-[#B98A2F]">
            See membership
          </a>
        </div>
      </section>

      {/* signature: working catalog */}
      <section id="stacks" className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="rounded-md border border-[#B98A2F]/40 bg-[#241811] p-6 sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className={`${mono.className} text-xs tracking-[0.3em] text-[#B98A2F] uppercase`}>
                Try the catalog · live demo
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Ask for anything.
              </h2>
            </div>
            <label className="block w-full sm:max-w-sm">
              <span className={`${mono.className} mb-2 block text-[11px] tracking-widest uppercase opacity-60`}>
                Search the stacks
              </span>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Try “memory”, “teams”, “LOA 317”…"
                className="w-full rounded-sm border border-[#F3EAD8]/25 bg-[#2E2118] px-4 py-3 text-[#F3EAD8] placeholder:text-[#F3EAD8]/40 focus:border-[#B98A2F] focus:outline-none"
              />
            </label>
          </div>
          <p className={`${mono.className} mt-4 text-xs tracking-widest uppercase opacity-60`} role="status">
            {results.length} of {CARDS.length} cards on the table
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {results.map((c) => (
              <article
                key={c.call}
                className="rounded-[3px] bg-[#F3EAD8] p-5 text-[#201812] shadow-[4px_4px_0_rgba(185,138,47,0.45)]"
              >
                <div className="flex items-center justify-between">
                  <p className={`${mono.className} text-[11px] font-bold tracking-widest text-[#B3402E]`}>{c.call}</p>
                  <div className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-[#B3402E]/70" />
                    <span className="h-2 w-2 rounded-full bg-[#B98A2F]/70" />
                  </div>
                </div>
                <h3 className="mt-2 text-lg leading-snug font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#201812]/75">{c.body}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {c.tags.map((t) => (
                    <span key={t} className={`${mono.className} rounded-sm border border-[#201812]/25 px-2 py-0.5 text-[11px]`}>
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
            {results.length === 0 && (
              <p className="rounded-[3px] border border-dashed border-[#F3EAD8]/30 p-8 text-[#F3EAD8]/70 md:col-span-2 lg:col-span-3">
                No cards under that heading — the clerks suggest a shorter word, or file it as a new thought.
              </p>
            )}
          </div>
          <div className="mt-8 flex flex-col items-start gap-4 rounded-[3px] bg-[#F3EAD8] p-5 text-[#201812] sm:flex-row sm:items-center">
            <div className="flex-1">
              <p className={`${mono.className} text-[11px] font-bold tracking-widest uppercase`}>Due-date slip</p>
              <p className="mt-1 text-sm">Stamp the slip to check out Loam free for 30 days. No fines, ever.</p>
            </div>
            <button
              onClick={() => setStamped(true)}
              disabled={stamped}
              className={`${mono.className} rounded-[3px] border-[3px] px-6 py-2 text-sm font-bold tracking-widest uppercase transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B3402E] ${
                stamped
                  ? "rotate-[-4deg] border-[#B3402E] text-[#B3402E]"
                  : "border-[#201812] hover:rotate-[-4deg] hover:border-[#B3402E] hover:text-[#B3402E]"
              }`}
            >
              {stamped ? "✓ Checked out" : "Stamp it"}
            </button>
          </div>
        </div>
      </section>

      <section id="rules" className="mx-auto w-full max-w-6xl px-6 py-14">
        <p className={`${mono.className} text-xs tracking-[0.3em] text-[#B98A2F] uppercase`}>House rules</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
          Quiet, well-lit, and ruthlessly organized.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {RULES.map((r, i) => (
            <article key={r.t} className="border-t-2 border-[#B98A2F] pt-6">
              <p className={`${mono.className} text-xs tracking-widest text-[#B98A2F]`}>RULE {i + 1}</p>
              <h3 className="mt-2 text-xl font-bold">{r.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#F3EAD8]/70">{r.d}</p>
            </article>
          ))}
        </div>
        <figure className="mt-12 rounded-md border border-[#B98A2F]/40 bg-[#F3EAD8] p-8 text-[#201812] sm:p-12">
          <blockquote className="max-w-3xl text-2xl leading-snug font-bold text-balance sm:text-3xl">
            “I&apos;ve tried every notes app. Loam is the first one that finds
            things the way my memory does — sideways.”
          </blockquote>
          <figcaption className={`${mono.className} mt-6 text-xs tracking-[0.25em] uppercase opacity-60`}>
            Priya Raman · research lead, Field Notes Weekly
          </figcaption>
        </figure>
      </section>

      <section id="card" className="mx-auto w-full max-w-6xl px-6 pt-4 pb-24">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-md border border-[#F3EAD8]/25 p-8">
            <p className={`${mono.className} text-xs tracking-[0.25em] uppercase opacity-60`}>Reader · free</p>
            <p className="mt-3 text-5xl font-extrabold">$0</p>
            <ul className="mt-6 space-y-3 text-sm text-[#F3EAD8]/80">
              {["1,000 cards", "One-click filing", "Meaning search"].map((f) => (
                <li key={f} className="flex gap-3"><span aria-hidden="true" className="text-[#B98A2F]">▤</span>{f}</li>
              ))}
            </ul>
            <a href="#card" className="mt-8 block rounded-sm border-2 border-[#F3EAD8] py-3 text-center font-bold hover:bg-[#F3EAD8] hover:text-[#2E2118]">
              Apply for a card
            </a>
          </article>
          <article className="rounded-md bg-[#B98A2F] p-8 text-[#2E2118]">
            <p className={`${mono.className} text-xs tracking-[0.25em] uppercase opacity-70`}>Fellow · $10/mo</p>
            <p className="mt-3 text-5xl font-extrabold">$10</p>
            <ul className="mt-6 space-y-3 text-sm font-semibold">
              {["Unlimited cards", "Ask-the-desk answers", "Shared stacks", "Reading-room support"].map((f) => (
                <li key={f} className="flex gap-3"><span aria-hidden="true">▤</span>{f}</li>
              ))}
            </ul>
            <a href="#card" className="mt-8 block rounded-sm bg-[#2E2118] py-3 text-center font-bold text-[#F3EAD8] hover:bg-[#201812]">
              Become a fellow
            </a>
          </article>
        </div>
      </section>

      <footer className="border-t border-[#F3EAD8]/15 pb-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className={`${mono.className} text-xs tracking-[0.3em] uppercase`}>▤ Loam · Card catalog № 3</p>
          <p className="text-sm text-[#F3EAD8]/60">Please reshelve your ideas. Free to start, export anytime.</p>
        </div>
      </footer>
    </div>
  );
}
