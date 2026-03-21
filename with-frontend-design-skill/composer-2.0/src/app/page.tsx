import Link from "next/link";
import { Instrument_Serif, Figtree } from "next/font/google";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hub-display",
});

const ui = Figtree({
  subsets: ["latin"],
  variable: "--font-hub-ui",
});

const ITERATIONS = [
  { href: "/one", roman: "I", name: "Editorial warmth", tone: "Ink, copper, grain" },
  { href: "/two", roman: "II", name: "Brutalist stack", tone: "Borders, lime, mono" },
  { href: "/three", roman: "III", name: "Organic garden", tone: "Sage, soft shapes" },
  { href: "/four", roman: "IV", name: "Retro-future core", tone: "Neon grid, scanlines" },
  { href: "/five", roman: "V", name: "Refined minimal", tone: "Gold line, silence" },
] as const;

export default function Home() {
  return (
    <div
      className={`${display.variable} ${ui.variable} min-h-screen bg-[#0c0c0e] text-[#eceae4]`}
    >
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-40%,#2a1810,transparent)]" />

      <main className="relative mx-auto flex min-h-screen max-w-2xl flex-col px-8 pb-28 pt-20 sm:pt-28">
        <p className="font-[family-name:var(--font-hub-ui)] text-[11px] font-semibold uppercase tracking-[0.45em] text-[#a89880]">
          Second brain · landing lab
        </p>
        <h1
          className="mt-6 font-[family-name:var(--font-hub-display)] text-5xl leading-[1.05] sm:text-6xl"
          style={{ fontStyle: "italic" }}
        >
          Five ways to invite a mind in.
        </h1>
        <p className="mt-8 font-[family-name:var(--font-hub-ui)] text-base leading-relaxed text-[#b8b3a8]">
          Each route is a full landing concept for the same product—a note app
          as external memory. Use the floating control on any page to hop
          between iterations.
        </p>

        <ul className="mt-14 space-y-3">
          {ITERATIONS.map((it) => (
            <li key={it.href}>
              <Link
                href={it.href}
                className="group flex items-center justify-between gap-4 rounded-xl border border-[#2a2824] bg-[#141210]/80 px-5 py-4 transition hover:border-[#c45c26]/50 hover:bg-[#1a1814]"
              >
                <div>
                  <span className="font-[family-name:var(--font-hub-ui)] text-[10px] font-bold uppercase tracking-[0.25em] text-[#c45c26]">
                    Iteration {it.roman}
                  </span>
                  <p className="mt-1 font-[family-name:var(--font-hub-display)] text-xl text-[#eceae4]">
                    {it.name}
                  </p>
                  <p className="mt-0.5 font-[family-name:var(--font-hub-ui)] text-xs text-[#7a756c]">
                    {it.tone}
                  </p>
                </div>
                <span
                  className="shrink-0 font-[family-name:var(--font-hub-ui)] text-sm font-semibold text-[#c45c26] transition group-hover:translate-x-1"
                  aria-hidden
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-auto pt-16 font-[family-name:var(--font-hub-ui)] text-xs text-[#5c5850]">
          Start anywhere:{" "}
          <Link href="/one" className="text-[#a89880] underline-offset-4 hover:underline">
            /one
          </Link>
          {" · "}
          <Link href="/two" className="text-[#a89880] underline-offset-4 hover:underline">
            /two
          </Link>
          {" · "}
          <Link
            href="/three"
            className="text-[#a89880] underline-offset-4 hover:underline"
          >
            /three
          </Link>
          {" · "}
          <Link
            href="/four"
            className="text-[#a89880] underline-offset-4 hover:underline"
          >
            /four
          </Link>
          {" · "}
          <Link
            href="/five"
            className="text-[#a89880] underline-offset-4 hover:underline"
          >
            /five
          </Link>
        </p>
      </main>
    </div>
  );
}
