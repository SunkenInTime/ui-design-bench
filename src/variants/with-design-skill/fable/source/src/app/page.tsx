import Link from "next/link";

const DIRECTIONS = [
  {
    n: 1,
    name: "Card Index",
    line: "Luhmann’s zettelkasten, played straight. Typed cards, stamped addresses, a box that thinks back.",
    swatches: ["#EFE7D3", "#221E16", "#28439C", "#A8352C"],
  },
  {
    n: 2,
    name: "Synapse",
    line: "The second brain taken literally. A night field of drifting thoughts, wired together as you watch.",
    swatches: ["#0B0E1C", "#8B7CFF", "#5FD4E6", "#FFB454"],
  },
  {
    n: 3,
    name: "Garden",
    line: "Notes as living things. A botanist’s herbarium where fragments grow from seedling to evergreen.",
    swatches: ["#EDF1E4", "#21402F", "#3F7D4E", "#C76B8E"],
  },
  {
    n: 4,
    name: "Blueprint",
    line: "You don’t buy a second brain — you build one. A cyanotype working drawing, sheet 1 of 1.",
    swatches: ["#1A3A7A", "#E8EEF7", "#F2C53D", "#FF6B5E"],
  },
  {
    n: 5,
    name: "Desk",
    line: "The mess you actually have, and one button that makes it make sense.",
    swatches: ["#EDEFF2", "#FFD84D", "#FFB3C7", "#9FD4FF"],
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-950 px-6 py-24 font-sans text-zinc-100">
      <main className="w-full max-w-2xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
          Tangent · design review
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          One second brain, five propositions.
        </h1>
        <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-400">
          Five landing page directions for the same brief. Open one, then use
          the pill below — or keys 1–5 — to flip between them.
        </p>

        <ul className="mt-10 flex flex-col gap-2">
          {DIRECTIONS.map((d) => (
            <li key={d.n}>
              <Link
                href={`/${d.n}`}
                className="group flex items-baseline gap-5 rounded-xl border border-zinc-800 bg-zinc-900/50 px-5 py-4 transition-colors hover:border-zinc-600 hover:bg-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span className="font-mono text-sm tabular-nums text-zinc-500 group-hover:text-zinc-300">
                  /{d.n}
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <span className="flex items-center gap-3">
                    <span className="text-base font-medium">{d.name}</span>
                    <span className="flex gap-1" aria-hidden="true">
                      {d.swatches.map((s) => (
                        <span
                          key={s}
                          className="h-2.5 w-2.5 rounded-full ring-1 ring-white/20"
                          style={{ backgroundColor: s }}
                        />
                      ))}
                    </span>
                  </span>
                  <span className="text-sm leading-5 text-zinc-400">
                    {d.line}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="self-center text-zinc-600 transition-transform group-hover:translate-x-0.5 group-hover:text-zinc-300"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
