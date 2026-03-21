import Link from "next/link";
import { Cormorant_Garamond, Syne } from "next/font/google";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-brain-five-serif",
});

const sans = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-brain-five-sans",
});

export default function BrainFive() {
  return (
    <div
      className={`${serif.variable} ${sans.variable} min-h-screen bg-[#faf8f5] text-[#1c1b22]`}
    >
      <header className="mx-auto flex max-w-2xl items-center justify-between px-8 pt-16">
        <span className="font-[family-name:var(--font-brain-five-sans)] text-[10px] font-semibold uppercase tracking-[0.45em] text-[#6b6a75]">
          Mnemos
        </span>
        <nav className="flex gap-10 font-[family-name:var(--font-brain-five-sans)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6b6a75]">
          <a href="#" className="transition hover:text-[#1c1b22]">
            Ethos
          </a>
          <a href="#" className="transition hover:text-[#1c1b22]">
            Pricing
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-2xl px-8 pb-40 pt-24 text-center lg:pt-32">
        <div className="mx-auto mb-12 h-px w-16 bg-gradient-to-r from-transparent via-[#b8860b] to-transparent" />
        <p className="font-[family-name:var(--font-brain-five-sans)] text-[10px] font-semibold uppercase tracking-[0.5em] text-[#8b7355]">
          The quiet art of remembering
        </p>
        <h1 className="mt-8 font-[family-name:var(--font-brain-five-serif)] text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
          A second brain,
          <br />
          <span className="font-normal italic text-[#4a484f]">without the noise.</span>
        </h1>
        <p className="mx-auto mt-12 max-w-md font-[family-name:var(--font-brain-five-sans)] text-base font-normal leading-[1.85] text-[#5c5a64]">
          One surface for thought. No dashboards shouting for attention—only
          typography, space, and the thread between yesterday&apos;s note and
          tomorrow&apos;s idea.
        </p>

        <div className="mx-auto mt-20 max-w-sm border-t border-b border-[#1c1b22]/10 py-10">
          <ul className="space-y-6 text-left font-[family-name:var(--font-brain-five-sans)] text-sm text-[#5c5a64]">
            <li className="flex gap-4">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8860b]" />
              <span>Elegant linking and daily notes in a single canvas.</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8860b]" />
              <span>Encrypted sync. Your vault leaves only when you say so.</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8860b]" />
              <span>Print and PDF that respect how readers actually read.</span>
            </li>
          </ul>
        </div>

        <Link
          href="#"
          className="mt-16 inline-block border-b border-[#1c1b22] pb-1 font-[family-name:var(--font-brain-five-sans)] text-xs font-bold uppercase tracking-[0.35em] text-[#1c1b22] transition hover:border-[#b8860b] hover:text-[#b8860b]"
        >
          Request access
        </Link>
      </main>

      <footer className="mx-auto max-w-2xl px-8 pb-16 text-center font-[family-name:var(--font-brain-five-sans)] text-[10px] uppercase tracking-[0.35em] text-[#9a98a3]">
        Iteration V · Refined minimal · Luxury of focus
      </footer>
    </div>
  );
}

