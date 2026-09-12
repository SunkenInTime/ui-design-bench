import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mneme — Index",
  description: "A local-first card index for your mind.",
};

const cards = [
  {
    id: "20240812a",
    title: "Attention residue",
    body: "Unfinished loops occupy working memory. Externalize them or they tax the next hour.",
    links: ["deep-work", "inbox"],
  },
  {
    id: "20240811c",
    title: "No folders",
    body: "Folders are a bet that you will remember the taxonomy. You will not. Links survive.",
    links: ["zettel", "graph"],
  },
  {
    id: "20240702b",
    title: "Walking notes",
    body: "The best sentences arrive off-desk. Capture in one tap; file later, if ever.",
    links: ["capture", "body"],
  },
  {
    id: "20240618a",
    title: "Evergreen",
    body: "Rewrite the same note until it is true. Dates are for the inbox, not the idea.",
    links: ["rewrite", "truth"],
  },
  {
    id: "20240509d",
    title: "Local-first",
    body: "A second brain that lives on someone else’s server is a rented memory.",
    links: ["privacy", "plain-text"],
  },
  {
    id: "20240401a",
    title: "Daily slip",
    body: "One card per day, even empty. Continuity is a feature. Streaks are not the point.",
    links: ["daily", "habit"],
  },
];

const ticker = [
  "ZETTELKASTEN",
  "BIDIRECTIONAL",
  "PLAIN TEXT",
  "OFFLINE",
  "NO FOLDERS",
  "LOCAL-FIRST",
  "BACKLINKS",
  "DAILY SLIP",
];

export default function IndexPage() {
  return (
    <div className="min-h-full bg-[#efece6] text-[#0a0a0a] selection:bg-[#d6ff3f] selection:text-black">
      <header className="flex items-center justify-between border-b border-black px-4 py-3 font-index text-[11px] tracking-wide uppercase sm:px-6">
        <Link
          href="/without-design-skill/gemini-3.7-flash/3"
          className="flex items-center gap-3"
        >
          <span className="bg-black px-2 py-1 text-[#d6ff3f]">MNEME</span>
          <span>v0.4 · private · local-first</span>
        </Link>
        <nav className="hidden gap-6 sm:flex">
          <a href="#cards">Cards</a>
          <a href="#spec">Spec</a>
          <a href="#start" className="bg-[#d6ff3f] px-3 py-1 text-black">
            New slip
          </a>
        </nav>
      </header>

      <section className="border-b border-black px-4 py-16 sm:px-8 sm:py-20">
        <p className="font-index text-xs tracking-[0.25em]">
          CARD CATALOG FOR A SINGLE MIND
        </p>
        <h1 className="mt-6 max-w-5xl font-index text-[clamp(2.1rem,7vw,5.6rem)] leading-[0.95] font-medium tracking-[-0.04em]">
          STOP LOSING
          <br />
          THOUGHTS
          <br />
          TO FOLDERS.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Mneme is a zettelkasten you can actually keep: one idea per card,
          links instead of hierarchies, files you own. A system, not a mood.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 font-index text-sm">
          <a
            id="start"
            href="#start"
            className="bg-black px-5 py-3 text-[#d6ff3f]"
          >
            INITIALIZE INDEX
          </a>
          <a href="#spec" className="border border-black px-5 py-3">
            READ THE SPEC
          </a>
        </div>
      </section>

      <div className="overflow-hidden border-b border-black bg-black text-[#d6ff3f]">
        <div className="flex w-max animate-marquee font-index text-sm tracking-[0.22em]">
          {[0, 1].map((copy) => (
            <p key={copy} className="flex shrink-0 gap-10 py-3 pr-10">
              {ticker.map((item) => (
                <span key={`${copy}-${item}`}>
                  {item} <span className="text-white/30">/</span>
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>

      <section id="cards" className="grid border-b border-black sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.id}
            className="border-black p-6 sm:border-r sm:odd:border-r lg:[&:nth-child(3n)]:border-r-0 sm:[&:nth-child(2n)]:max-lg:border-r-0 border-b last:border-b-0"
          >
            <p className="font-index text-[11px] text-black/45">{card.id}</p>
            <h2 className="mt-3 font-index text-lg">{card.title}</h2>
            <p className="mt-3 leading-6 text-black/75">{card.body}</p>
            <p className="mt-5 font-index text-[11px] tracking-wide text-black/50 uppercase">
              {card.links.map((link) => `[[${link}]]`).join("  ")}
            </p>
          </article>
        ))}
      </section>

      <section id="spec" className="px-4 py-16 sm:px-8">
        <h2 className="font-index text-sm tracking-[0.22em]">SPEC</h2>
        <div className="mt-8 overflow-hidden border border-black">
          {[
            ["Storage", "Plain text on disk. You can read it in fifty years."],
            ["Structure", "No folders. IDs, titles, and links. That is the whole model."],
            ["Search", "Full text plus graph neighborhood. Meaning, then keywords."],
            ["Sync", "Optional. Offline is the default, not a degraded mode."],
            ["Price", "Free for a private mind. Forever."],
          ].map(([k, v], i) => (
            <div
              key={k}
              className={`grid gap-2 px-4 py-4 sm:grid-cols-[160px_1fr] ${i === 0 ? "" : "border-t border-black"}`}
            >
              <p className="font-index text-sm">{k}</p>
              <p>{v}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
