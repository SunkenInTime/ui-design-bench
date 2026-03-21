import Link from "next/link";
import { Libre_Baskerville, DM_Sans } from "next/font/google";

const serif = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-brain-one-serif",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-brain-one-sans",
});

export default function BrainOne() {
  return (
    <div
      className={`${serif.variable} ${sans.variable} relative min-h-screen overflow-hidden bg-[#1a1510] text-[#f4e8d8]`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="pointer-events-none absolute -right-24 top-20 h-96 w-96 rounded-full bg-[#c45c26]/20 blur-[100px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#8b5a2b]/15 blur-[90px]" />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 pt-10 font-[family-name:var(--font-brain-one-sans)]">
        <span className="text-sm font-medium tracking-[0.35em] text-[#c45c26]">
          MINDPALAIS
        </span>
        <nav className="flex gap-8 text-xs uppercase tracking-widest text-[#f4e8d8]/70">
          <a href="#philosophy" className="transition hover:text-[#f4e8d8]">
            Philosophy
          </a>
          <a href="#signal" className="transition hover:text-[#f4e8d8]">
            Signal
          </a>
        </nav>
      </header>

      <main className="relative z-10 mx-auto grid max-w-6xl gap-16 px-6 pb-32 pt-16 lg:grid-cols-12 lg:pt-24">
        <div className="lg:col-span-7">
          <p className="font-[family-name:var(--font-brain-one-sans)] text-xs uppercase tracking-[0.4em] text-[#c45c26]">
            Second brain, first clarity
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-brain-one-serif)] text-5xl font-normal leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Your mind,
            <br />
            <span className="italic text-[#e8dcc8]">indexed.</span>
          </h1>
          <p className="mt-8 max-w-md font-[family-name:var(--font-brain-one-sans)] text-lg leading-relaxed text-[#d4c4b0]">
            Capture thought in motion. Link ideas across time. A notebook that
            behaves like memory—associative, searchable, unmistakably yours.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="#"
              className="inline-flex items-center justify-center border border-[#c45c26] bg-[#c45c26] px-8 py-3.5 font-[family-name:var(--font-brain-one-sans)] text-sm font-semibold tracking-wide text-[#1a1510] transition hover:bg-transparent hover:text-[#c45c26]"
            >
              Begin your archive
            </Link>
            <span className="font-[family-name:var(--font-brain-one-sans)] text-sm text-[#a89880]">
              No credit card · Local-first option
            </span>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="absolute -left-8 top-1/2 hidden h-px w-24 bg-gradient-to-r from-transparent to-[#c45c26]/50 lg:block" />
          <div
            id="signal"
            className="space-y-4 font-[family-name:var(--font-brain-one-sans)]"
          >
            {[
              {
                tag: "Connection",
                body: "Bi-directional links mirror how neurons fire—not folders, graphs.",
              },
              {
                tag: "Recall",
                body: "Full-text and semantic search across every stray sentence you saved.",
              },
              {
                tag: "Rhythm",
                body: "Daily notes and periodic review keep the living archive honest.",
              },
            ].map((card, i) => (
              <article
                key={card.tag}
                className="border-l-2 border-[#c45c26]/60 bg-[#231c16]/80 p-6 backdrop-blur-sm transition hover:border-[#c45c26]"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c45c26]">
                  {card.tag}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#e0d4c4]">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </main>

      <footer
        id="philosophy"
        className="relative z-10 border-t border-[#f4e8d8]/10 px-6 py-10"
      >
        <p className="mx-auto max-w-6xl text-center font-[family-name:var(--font-brain-one-sans)] text-xs tracking-widest text-[#8a7b6a]">
          Iteration I · Editorial warmth · Notes as lasting literature
        </p>
      </footer>
    </div>
  );
}

