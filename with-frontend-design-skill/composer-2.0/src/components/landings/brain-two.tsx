import Link from "next/link";
import { IBM_Plex_Mono } from "next/font/google";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-brain-two-mono",
});

export default function BrainTwo() {
  return (
    <div
      className={`${mono.variable} min-h-screen bg-white font-[family-name:var(--font-brain-two-mono)] text-black`}
    >
      <div className="mx-auto max-w-5xl border-x-[3px] border-black min-h-screen flex flex-col">
        <header className="flex flex-col gap-4 border-b-[3px] border-black px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em]">
            SYS.MEMO // BUILD 0x7A
          </span>
          <div className="flex flex-wrap gap-4 text-[11px] font-semibold uppercase">
            <span className="border border-black px-3 py-1 bg-[#bfff00]">
              Second brain
            </span>
            <span className="border border-black px-3 py-1">Raw input</span>
            <span className="border border-black px-3 py-1">Structured out</span>
          </div>
        </header>

        <main className="flex flex-1 flex-col px-4 py-12 sm:px-8 lg:px-12">
          <div className="grid gap-2 text-[clamp(2.5rem,12vw,7rem)] font-bold leading-[0.85] tracking-tighter uppercase">
            <span>Second</span>
            <span className="bg-black pl-2 text-[#bfff00] sm:pl-4">Brain</span>
            <span className="text-[0.35em] font-semibold normal-case tracking-normal text-neutral-600">
              — externalized cognition, enforced.
            </span>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <ul className="space-y-0 border-t-[3px] border-black">
              {[
                "Write without ceremony",
                "Link without hierarchy",
                "Search without archaeology",
                "Sync without anxiety",
              ].map((item, i) => (
                <li
                  key={item}
                  className="flex items-stretch border-b-[3px] border-black"
                >
                  <span className="flex w-12 shrink-0 items-center justify-center border-r-[3px] border-black bg-neutral-100 text-xs font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex flex-1 items-center px-4 py-4 text-sm font-semibold uppercase tracking-wide">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col justify-between border-[3px] border-black bg-neutral-100 p-6">
              <p className="text-xs font-bold uppercase leading-relaxed text-neutral-600">
                <span className="block">{"// MANIFESTO"}</span>
                Your head is finite. Your notes are not. Treat every capture as
                infrastructure.
              </p>
              <Link
                href="#"
                className="mt-8 inline-flex w-full items-center justify-center border-[3px] border-black bg-black py-4 text-sm font-bold uppercase tracking-widest text-[#bfff00] transition hover:bg-[#bfff00] hover:text-black"
              >
                Allocate memory →
              </Link>
            </div>
          </div>
        </main>

        <footer className="border-t-[3px] border-black bg-black px-4 py-4 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-[#bfff00] sm:px-6">
          Iteration II · Brutalist stack · No decoration, only function
        </footer>
      </div>
    </div>
  );
}
