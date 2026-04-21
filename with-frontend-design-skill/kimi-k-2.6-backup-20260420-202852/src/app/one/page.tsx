import { DM_Mono, Syne } from "next/font/google";
import Link from "next/link";

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const syne = Syne({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
});

export default function One() {
  return (
    <div
      className={`${dmMono.variable} ${syne.variable} min-h-screen bg-white text-black selection:bg-red-600 selection:text-white`}
      style={{ fontFamily: "var(--font-mono)" }}
    >
      <nav className="flex items-center justify-between border-b-4 border-black px-6 py-4">
        <div
          className="text-xl font-bold tracking-tighter"
          style={{ fontFamily: "var(--font-display)" }}
        >
          SECOND BRAIN
        </div>
        <div className="hidden gap-8 text-sm uppercase tracking-widest sm:flex">
          <Link
            href="#"
            className="underline-offset-4 decoration-4 hover:underline"
          >
            Product
          </Link>
          <Link
            href="#"
            className="underline-offset-4 decoration-4 hover:underline"
          >
            Manifesto
          </Link>
          <Link
            href="#"
            className="underline-offset-4 decoration-4 hover:underline"
          >
            Pricing
          </Link>
        </div>
        <button className="bg-black px-5 py-2 text-sm uppercase tracking-widest text-white transition-colors hover:bg-red-600">
          Enter
        </button>
      </nav>

      <header className="border-b-4 border-black px-6 py-20 sm:py-32">
        <h1
          className="max-w-5xl text-6xl font-bold leading-[0.9] tracking-tight sm:text-8xl lg:text-9xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          THINK.
          <br />
          <span className="text-red-600">WRITE.</span>
          <br />
          REMEMBER.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-600">
          A note-taking app that does not sugarcoat your thoughts. Raw, fast,
          and unapologetically yours. No clouds. No fluff. Just your second
          brain.
        </p>
        <div className="mt-10 flex gap-4">
          <button className="border-4 border-black bg-red-600 px-8 py-4 text-lg font-bold uppercase tracking-widest text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Start Thinking
          </button>
          <button className="border-4 border-black bg-white px-8 py-4 text-lg font-bold uppercase tracking-widest text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Read Manifesto
          </button>
        </div>
      </header>

      <section className="grid grid-cols-1 border-b-4 border-black sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "OFFLINE FIRST",
            desc: "Your thoughts belong to you. Not our servers.",
          },
          {
            title: "PLAIN TEXT",
            desc: "Markdown. Nothing else. No proprietary formats.",
          },
          {
            title: "BLAZING FAST",
            desc: "Instant search. Zero latency. No spinners.",
          },
          {
            title: "GRAPH VIEW",
            desc: "See connections between ideas. Not folders.",
          },
          {
            title: "OPEN SOURCE",
            desc: "Fork it. Break it. Make it yours.",
          },
          {
            title: "NO AI",
            desc: "Your thoughts are not training data.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className={`border-black p-8 transition-colors hover:bg-black hover:text-white ${
              i < 3 ? "border-b-4 sm:border-b-0" : ""
            } ${i % 3 !== 2 ? "lg:border-r-4" : ""} ${
              i % 2 !== 1 ? "sm:border-r-4 lg:border-r-4" : ""
            }`}
          >
            <h3
              className="mb-3 text-2xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {f.title}
            </h3>
            <p className="text-sm leading-relaxed opacity-80">{f.desc}</p>
          </div>
        ))}
      </section>

      <footer className="flex flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center">
        <span className="text-xs uppercase tracking-widest text-neutral-500">
          Second Brain 2026
        </span>
        <span className="text-xs uppercase tracking-widest text-neutral-500">
          Built for humans
        </span>
      </footer>
    </div>
  );
}
