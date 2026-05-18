import { Libre_Baskerville, Source_Serif_4 } from "next/font/google";

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-folio-display",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-folio-body",
});

const essays = [
  {
    tag: "Method",
    title: "The art of permanent note",
    excerpt:
      "A note is not a reminder. It is a letter to your future self — written with enough context to mean something years from now.",
  },
  {
    tag: "Practice",
    title: "Linking as conversation",
    excerpt:
      "When two ideas meet in your archive, they argue, agree, and synthesize. Your second brain becomes a symposium.",
  },
  {
    tag: "Philosophy",
    title: "Against the folder",
    excerpt:
      "Folders pretend the world is hierarchical. Minds know better — everything connects to everything, eventually.",
  },
];

export default function EditorialLanding() {
  return (
    <div
      className={`${baskerville.variable} ${sourceSerif.variable} min-h-screen`}
      style={{
        fontFamily: "var(--font-folio-body), serif",
        background: "#f4f0e8",
        color: "#1a1814",
      }}
    >
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      <header className="relative border-b border-[#1a1814]/10">
        <div className="mx-auto flex max-w-6xl items-end justify-between px-8 py-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#c45d3a]">
              Vol. I — Spring MMXXVI
            </p>
            <h1
              className="mt-1 text-4xl tracking-tight md:text-5xl"
              style={{ fontFamily: "var(--font-folio-display), serif" }}
            >
              Folio
            </h1>
          </div>
          <nav className="hidden gap-8 text-xs uppercase tracking-[0.2em] md:flex">
            <a href="#essays" className="transition hover:text-[#c45d3a]">
              Essays
            </a>
            <a href="#about" className="transition hover:text-[#c45d3a]">
              About
            </a>
            <a href="#subscribe" className="transition hover:text-[#c45d3a]">
              Subscribe
            </a>
          </nav>
        </div>
      </header>

      <main className="relative mx-auto max-w-6xl px-8 pb-24">
        <section className="grid gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:py-24">
          <div style={{ animation: "reveal-up 0.8s ease-out both" }}>
            <p className="mb-6 text-sm italic text-[#1a1814]/60">
              A journal for the mind, by the mind
            </p>
            <h2
              className="mb-8 text-5xl leading-[1.08] md:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-folio-display), serif" }}
            >
              Where thoughts
              <br />
              earn their{" "}
              <span className="underline decoration-[#c45d3a] decoration-2 underline-offset-8">
                permanence
              </span>
            </h2>
            <p className="max-w-lg text-lg leading-[1.8] text-[#1a1814]/75">
              Folio is note-taking for people who treat ideas seriously. Not
              fleeting captures — but considered entries in a personal canon
              that grows richer with every connection you make.
            </p>
          </div>

          <aside
            className="flex flex-col justify-end border-l border-[#1a1814]/10 pl-8 lg:pl-12"
            style={{ animation: "reveal-up 0.8s ease-out 0.15s both" }}
          >
            <blockquote
              className="text-2xl leading-snug italic"
              style={{ fontFamily: "var(--font-folio-display), serif" }}
            >
              &ldquo;I write to discover what I think.&rdquo;
            </blockquote>
            <cite className="mt-4 text-xs uppercase tracking-[0.2em] not-italic text-[#1a1814]/50">
              — Joan Didion
            </cite>
            <button
              type="button"
              className="mt-10 self-start bg-[#1a1814] px-8 py-3 text-xs uppercase tracking-[0.25em] text-[#f4f0e8] transition hover:bg-[#c45d3a]"
            >
              Open your folio
            </button>
          </aside>
        </section>

        <div className="my-4 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#1a1814]/15" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#1a1814]/40">
            Featured
          </span>
          <div className="h-px flex-1 bg-[#1a1814]/15" />
        </div>

        <section id="essays" className="grid gap-8 py-12 md:grid-cols-3">
          {essays.map((essay, i) => (
            <article
              key={essay.title}
              className="group"
              style={{
                animation: `reveal-up 0.7s ease-out ${0.2 + i * 0.1}s both`,
              }}
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c45d3a]">
                {essay.tag}
              </span>
              <h3
                className="mt-3 mb-4 text-xl leading-snug transition group-hover:text-[#c45d3a]"
                style={{ fontFamily: "var(--font-folio-display), serif" }}
              >
                {essay.title}
              </h3>
              <p className="text-sm leading-[1.75] text-[#1a1814]/65">
                {essay.excerpt}
              </p>
              <span className="mt-4 inline-block text-xs uppercase tracking-[0.15em] text-[#1a1814]/40 transition group-hover:text-[#c45d3a]">
                Read →
              </span>
            </article>
          ))}
        </section>

        <section
          id="about"
          className="my-16 grid gap-12 border-y border-[#1a1814]/10 py-16 lg:grid-cols-2"
        >
          <div>
            <h3
              className="mb-6 text-3xl"
              style={{ fontFamily: "var(--font-folio-display), serif" }}
            >
              A second brain for readers & writers
            </h3>
            <p className="leading-[1.85] text-[#1a1814]/70">
              Most note apps optimize for speed. Folio optimizes for depth. Every
              feature — bidirectional links, daily notes, spaced resurfacing —
              serves one goal: helping you build a body of work from the thoughts
              you&apos;d otherwise lose.
            </p>
          </div>
          <div className="columns-2 gap-8 text-sm leading-[1.85] text-[#1a1814]/65">
            <p className="mb-4">
              Capture in markdown. Link with intention. Let patterns emerge over
              months and years, not days.
            </p>
            <p>
              Your archive becomes a mirror — reflecting not just what you knew,
              but how your understanding evolved.
            </p>
          </div>
        </section>

        <section
          id="subscribe"
          className="flex flex-col items-center py-16 text-center"
          style={{ animation: "reveal-up 0.7s ease-out 0.3s both" }}
        >
          <p className="mb-2 text-[10px] uppercase tracking-[0.4em] text-[#c45d3a]">
            Join the canon
          </p>
          <h3
            className="mb-8 max-w-md text-3xl leading-snug"
            style={{ fontFamily: "var(--font-folio-display), serif" }}
          >
            Start writing the book only you can write
          </h3>
          <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 border border-[#1a1814]/20 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[#c45d3a]"
            />
            <button
              type="button"
              className="border border-[#1a1814] px-6 py-3 text-xs uppercase tracking-[0.2em] transition hover:bg-[#1a1814] hover:text-[#f4f0e8]"
            >
              Request invite
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1a1814]/10 py-8 text-center text-[10px] uppercase tracking-[0.3em] text-[#1a1814]/40">
        Folio — Notes for the considered mind
      </footer>
    </div>
  );
}
