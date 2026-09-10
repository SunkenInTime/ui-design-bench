import Link from "next/link";

const VARIANTS = [
  {
    n: "1",
    name: "Slip-box",
    line: "Luhmann's Zettelkasten rebuilt — ruled cards, pencil red, and the card numbers that made seventy books possible.",
    palette: ["#F6F5F0", "#B5341F", "#20202B"],
  },
  {
    n: "2",
    name: "Plain text",
    line: "A man page for your mind — markdown files that outlive every app you'll ever install.",
    palette: ["#1A120C", "#E8A33D", "#EDE4D6"],
  },
  {
    n: "3",
    name: "Star atlas",
    line: "Your notes as a night sky. Hover a star and its neighbourhood lights up.",
    palette: ["#0F1430", "#D9A94E", "#F4F1E4"],
  },
  {
    n: "4",
    name: "Two minds",
    line: "The two jobs, side by side — catch it raw on the left, keep it connected on the right.",
    palette: ["#F5C244", "#5749D0", "#FBFBFD"],
  },
  {
    n: "5",
    name: "Poster",
    line: "A modernist manifesto in ultramarine and condensed type — forget nothing, on purpose.",
    palette: ["#F0EFEA", "#2438CC", "#101014"],
  },
];

export default function Home() {
  return (
    <main className="flex-1 bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 pt-20 pb-40">
        <p className="text-sm font-medium text-neutral-400">
          Engram — design directions
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          A second brain,
          <br />
          five ways in.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-500">
          One product, five arguments. Each direction below is a complete
          landing page for the same app — pick the one that survives contact
          with your eye.
        </p>

        <ul className="mt-14 divide-y divide-neutral-200 border-y border-neutral-200">
          {VARIANTS.map((v) => (
            <li key={v.n}>
              <Link
                href={`/${v.n}`}
                className="group flex items-baseline gap-6 py-6 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900 sm:gap-10"
              >
                <span className="w-10 shrink-0 text-3xl font-semibold tracking-tight text-neutral-300 transition-colors group-hover:text-neutral-900">
                  {v.n}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-3">
                    <span className="text-lg font-semibold tracking-tight">
                      {v.name}
                    </span>
                    <span className="flex gap-1" aria-hidden="true">
                      {v.palette.map((c) => (
                        <span
                          key={c}
                          className="h-3 w-3 rounded-full ring-1 ring-neutral-900/10"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </span>
                  </span>
                  <span className="mt-1 block max-w-lg text-[15px] leading-6 text-neutral-500">
                    {v.line}
                  </span>
                </span>
                <span className="hidden shrink-0 text-sm font-medium text-neutral-400 underline decoration-neutral-300 underline-offset-4 transition-colors group-hover:text-neutral-900 group-hover:decoration-neutral-900 sm:inline">
                  View
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm leading-6 text-neutral-400">
          The pill at the bottom of each page moves between directions.
        </p>
      </div>
    </main>
  );
}
