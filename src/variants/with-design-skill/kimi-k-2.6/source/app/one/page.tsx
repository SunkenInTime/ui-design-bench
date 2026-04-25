import { Cormorant_Garamond, Cutive_Mono } from "next/font/google";
import Link from "next/link";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
});

const mono = Cutive_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
});

export default function One() {
  return (
    <div
      className={`${display.variable} ${mono.variable} relative min-h-screen overflow-hidden bg-stone-950 text-stone-200`}
    >
      {/* Noise overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: "repeat", backgroundSize: "128px" }} />

      {/* Ambient light */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-amber-900/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-stone-800/20 blur-[100px]" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 md:px-16">
        <div className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-stone-500">
          Second Brain — v1.0
        </div>
        <nav className="hidden gap-8 md:flex">
          {["Method", "Archive", "Philosophy"].map((item) => (
            <a
              key={item}
              href="#"
              className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-stone-500 transition-colors hover:text-amber-600"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <main className="relative z-10 mx-auto max-w-7xl px-8 pb-32 pt-16 md:px-16">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Typography */}
          <div className="flex flex-col gap-10">
            <div className="inline-flex w-fit items-center gap-2 border border-stone-800 bg-stone-900/50 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-600 animate-pulse" />
              <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-stone-400">
                The Archivist Edition
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-6xl font-semibold leading-[0.95] tracking-tight text-stone-100 md:text-8xl">
              Every thought
              <br />
              <span className="italic text-amber-600">deserves</span>
              <br />
              a shelf.
            </h1>

            <p className="max-w-md font-[family-name:var(--font-mono)] text-sm leading-relaxed text-stone-500">
              A note-taking system built for permanence. No trends. No noise.
              Just your ideas, preserved with the gravity they deserve.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="#"
                className="group relative overflow-hidden border border-stone-700 bg-stone-100 px-8 py-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-stone-950 transition-all hover:border-amber-600 hover:bg-amber-600"
              >
                <span className="relative z-10">Begin Your Archive</span>
              </Link>
              <a
                href="#"
                className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-stone-500 underline decoration-stone-800 underline-offset-4 transition-colors hover:text-stone-300"
              >
                Read the Manifesto
              </a>
            </div>
          </div>

          {/* Right: Card Stack */}
          <div className="relative hidden h-[500px] lg:block">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 w-80 -translate-x-1/2 -translate-y-1/2 border border-stone-800 bg-stone-900/90 p-8 shadow-2xl transition-transform duration-700 ease-out hover:scale-[1.02]"
                style={{
                  transform: `translate(-50%, -50%) rotate(${-6 + i * 4}deg) translateX(${(i - 1.5) * 12}px)`,
                  zIndex: 4 - i,
                }}
              >
                <div className="mb-4 h-2 w-12 bg-amber-700/40" />
                <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-stone-600">
                  {["Idea", "Connection", "Reference", "Insight"][i]}
                </div>
                <div className="mt-3 h-1.5 w-full bg-stone-800" />
                <div className="mt-2 h-1.5 w-3/4 bg-stone-800" />
                <div className="mt-2 h-1.5 w-5/6 bg-stone-800" />
                <div className="mt-6 border-t border-stone-800 pt-4">
                  <div className="flex justify-between text-[10px] text-stone-600">
                    <span>{["03.14.2024", "04.02.2024", "05.19.2024", "06.08.2024"][i]}</span>
                    <span>#{1001 + i}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-32 grid gap-px bg-stone-900 md:grid-cols-3">
          {[
            {
              title: "Permanent Notes",
              body: "Write once. Reference forever. Your knowledge compounds instead of decaying.",
            },
            {
              title: "Organic Links",
              body: "Ideas connect naturally. No folders, no hierarchy — just pure association.",
            },
            {
              title: "Distilled Thinking",
              body: "Every note is an argument. Every argument is a building block for new thought.",
            },
          ].map((f) => (
            <div key={f.title} className="bg-stone-950 p-10 transition-colors hover:bg-stone-900">
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-100">
                {f.title}
              </h3>
              <p className="mt-4 font-[family-name:var(--font-mono)] text-xs leading-6 text-stone-500">
                {f.body}
              </p>
            </div>
          ))}
        </div>

        {/* Footer quote */}
        <div className="mt-32 border-t border-stone-900 pt-16 text-center">
          <blockquote className="font-[family-name:var(--font-display)] text-3xl italic text-stone-400 md:text-5xl">
            "The mind is a library without walls."
          </blockquote>
          <p className="mt-6 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-stone-600">
            Start building yours today.
          </p>
        </div>
      </main>
    </div>
  );
}
