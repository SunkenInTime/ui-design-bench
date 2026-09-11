"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Quicksand, Inter } from "next/font/google";

const display = Quicksand({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

type Drop = { id: number; text: string; tags: string[] };

const SEED: Drop[] = [
  { id: 1, text: "Morning pages work better after a walk", tags: ["writing", "walking"] },
  { id: 2, text: "Walking meetings beat sitting ones", tags: ["walking", "work"] },
  { id: 3, text: "Chapter two needs the lighthouse scene", tags: ["writing"] },
];

const tagOf = (text: string) =>
  Array.from(text.toLowerCase().matchAll(/#(\w+)/g)).map((m) => m[1]);

const CALM = [
  { t: "No folders to feed", d: "There is nothing to organize and nothing to fall behind on. Drops settle where they belong by themselves." },
  { t: "Links form quietly", d: "When two notes share a thought, Loam ties a thread between them. You'll notice next time you visit — never as a notification." },
  { t: "Answers without noise", d: "Ask in plain words. One calm answer from your own notes, with the tide-line showing exactly where it came from." },
];

export default function Tidepool() {
  const [drops, setDrops] = useState<Drop[]>(SEED);
  const [draft, setDraft] = useState("");
  const [nextId, setNextId] = useState(4);

  const threads = useMemo(() => {
    let n = 0;
    for (let i = 0; i < drops.length; i++)
      for (let j = i + 1; j < drops.length; j++)
        if (drops[i].tags.some((t) => drops[j].tags.includes(t))) n++;
    return n;
  }, [drops]);

  const linkedTo = (d: Drop) =>
    drops.filter((o) => o.id !== d.id && o.tags.some((t) => d.tags.includes(t))).length;

  const release = () => {
    const text = draft.trim();
    if (!text) return;
    const tags = tagOf(text);
    setDrops((ds) => [{ id: nextId, text: text.replace(/#\w+/g, "").trim() || text, tags }, ...ds]);
    setNextId((n) => n + 1);
    setDraft("");
  };

  return (
    <div className={`${body.className} min-h-full bg-[#EDF2F0] text-[#10201B]`}>
      <header>
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className={`${display.className} text-xl font-bold`}>
            ≈ loam
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-8 text-sm font-medium text-[#5B6B66] sm:flex">
            <a href="#pool" className="hover:text-[#10201B]">The pool</a>
            <a href="#calm" className="hover:text-[#10201B]">Why calm</a>
            <a href="#join" className="hover:text-[#10201B]">Join</a>
          </nav>
          <a
            href="#join"
            className="rounded-full bg-[#10201B] px-5 py-2.5 text-sm font-semibold text-[#EDF2F0] transition-colors hover:bg-[#2F5D50]"
          >
            Wade in free
          </a>
        </div>
      </header>

      <section className="mx-auto w-full max-w-5xl px-6 pt-14 text-center sm:pt-24">
        <div aria-hidden="true" className="mx-auto flex h-24 w-24 items-center justify-center">
          <span className="absolute h-20 w-20 animate-ping rounded-full bg-[#2F5D50]/15 motion-reduce:animate-none" />
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2F5D50] text-2xl text-[#EDF2F0]">
            ≈
          </span>
        </div>
        <h1 className={`${display.className} mx-auto mt-8 max-w-3xl text-5xl leading-[1.05] font-semibold text-balance sm:text-7xl`}>
          A second brain with no homework.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#5B6B66]">
          Loam is the note-taking pool for tired minds. Drop thoughts in like
          pebbles. The ripples — links, answers, ideas — spread on their own.
        </p>
      </section>

      {/* signature: the pool */}
      <section id="pool" className="mx-auto w-full max-w-5xl px-6 py-12">
        <div className="rounded-[2rem] bg-white p-6 shadow-[0_24px_60px_-30px_rgba(16,32,27,0.25)] sm:p-10">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold tracking-[0.25em] text-[#5B6B66] uppercase">
              Try it · drop a thought
            </p>
            <p className="text-xs font-semibold tracking-[0.25em] text-[#2F5D50] uppercase" role="status">
              {drops.length} drops · {threads} threads
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <label htmlFor="drop" className="sr-only">Drop a thought into the pool</label>
            <input
              id="drop"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && release()}
              placeholder="e.g. neuronal pruning is just #sleep doing the dishes"
              className="flex-1 rounded-full border border-[#10201B]/15 bg-[#EDF2F0] px-6 py-4 text-[#10201B] placeholder:text-[#5B6B66]/60 focus:border-[#2F5D50] focus:outline-none"
            />
            <button
              onClick={release}
              className="rounded-full bg-[#2F5D50] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#10201B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F5D50]"
            >
              Release
            </button>
          </div>
          <p className="mt-3 text-sm text-[#5B6B66]">
            Tip: add a <code className="rounded bg-[#EDF2F0] px-1.5 py-0.5">#word</code> to tie your drop to others. Shared words become threads.
          </p>
          <ul className="mt-6 space-y-3">
            {drops.map((d) => (
              <li
                key={d.id}
                className="flex flex-col gap-2 rounded-2xl bg-[#EDF2F0] px-5 py-4 sm:flex-row sm:items-center"
              >
                <p className="flex-1 leading-relaxed">{d.text}</p>
                <div className="flex items-center gap-2">
                  {d.tags.map((t) => (
                    <span key={t} className="rounded-full bg-[#2F5D50]/10 px-3 py-1 text-xs font-semibold text-[#2F5D50]">
                      #{t}
                    </span>
                  ))}
                  <span className="rounded-full bg-[#E8B4A0]/40 px-3 py-1 text-xs font-semibold text-[#10201B]">
                    {linkedTo(d)} {linkedTo(d) === 1 ? "thread" : "threads"}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="calm" className="mx-auto w-full max-w-5xl px-6 py-14">
        <h2 className={`${display.className} max-w-2xl text-4xl font-semibold text-balance sm:text-5xl`}>
          Calm is a feature, not a theme.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {CALM.map((c) => (
            <article key={c.t} className="rounded-[1.5rem] bg-white p-7">
              <h3 className={`${display.className} text-xl font-bold`}>{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5B6B66]">{c.d}</p>
            </article>
          ))}
        </div>
        <figure className="mt-10 rounded-[1.5rem] bg-[#10201B] p-8 text-[#EDF2F0] sm:p-12">
          <blockquote className={`${display.className} max-w-3xl text-2xl leading-snug font-medium text-balance sm:text-3xl`}>
            “Every other app made my notes feel like inbox. Loam makes them
            feel like tidepools — I visit because I want to.”
          </blockquote>
          <figcaption className="mt-6 text-xs font-semibold tracking-[0.25em] text-[#E8B4A0] uppercase">
            Theo Lindqvist · novelist
          </figcaption>
        </figure>
      </section>

      <section id="join" className="mx-auto w-full max-w-5xl px-6 pt-2 pb-24 text-center">
        <div className="rounded-[2rem] bg-[#E8B4A0]/30 p-10 sm:p-14">
          <h2 className={`${display.className} text-4xl font-semibold text-balance sm:text-5xl`}>
            Come float a while.
          </h2>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-[#10201B]/75">
            Free for your first 1,000 drops. Deep water — unlimited everything
            plus shared pools — is $10 a month.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#join" className="rounded-full bg-[#10201B] px-8 py-3.5 font-semibold text-[#EDF2F0] hover:bg-[#2F5D50]">
              Start floating free
            </a>
            <a href="#pool" className="rounded-full border border-[#10201B]/25 px-8 py-3.5 font-semibold hover:border-[#10201B]">
              Revisit the pool
            </a>
          </div>
        </div>
      </section>

      <footer className="pb-24">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className={`${display.className} font-bold`}>≈ loam · tidepool № 4</p>
          <p className="text-sm text-[#5B6B66]">Breathe out. Free to start, export anytime.</p>
        </div>
      </footer>
    </div>
  );
}
