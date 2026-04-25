import { Bodoni_Moda, Sora } from "next/font/google";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
});

const sora = Sora({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-body",
});

export default function Four() {
  return (
    <div
      className={`${bodoni.variable} ${sora.variable} min-h-screen bg-[#fafafa] text-[#1a1a1a]`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
        <div
          className="text-2xl tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Second Brain
        </div>
        <div className="hidden gap-12 text-xs font-medium uppercase tracking-[0.2em] md:flex">
          <a href="#" className="transition-colors hover:text-[#c9a227]">
            Features
          </a>
          <a href="#" className="transition-colors hover:text-[#c9a227]">
            Essays
          </a>
          <a href="#" className="transition-colors hover:text-[#c9a227]">
            Subscribe
          </a>
        </div>
      </nav>

      <header className="mx-auto max-w-7xl px-6 pb-20 pt-12">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-8 text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
              The Art of Thought
            </p>
            <h1
              className="text-6xl font-normal leading-[0.95] tracking-tight sm:text-8xl lg:text-9xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your ideas,
              <br />
              <span className="italic text-neutral-400">curated.</span>
            </h1>
          </div>
          <div className="pb-4 lg:col-span-5">
            <p className="mb-8 max-w-sm text-lg leading-relaxed text-neutral-600">
              In an age of noise, the most radical act is coherence. Second Brain
              is the journal for those who think in systems, not sentences.
            </p>
            <div className="flex items-center gap-6">
              <button className="bg-[#1a1a1a] px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition-colors duration-500 hover:bg-[#c9a227]">
                Begin reading
              </button>
              <a
                href="#"
                className="border-b border-[#1a1a1a] pb-1 text-xs uppercase tracking-[0.2em] transition-colors hover:border-[#c9a227] hover:text-[#c9a227]"
              >
                View features
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-1 bg-neutral-200 md:grid-cols-2">
          <div className="flex min-h-[400px] flex-col justify-between bg-[#fafafa] p-12 lg:p-16">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                01
              </span>
              <h3
                className="mt-4 text-3xl leading-tight lg:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                The networked notebook
              </h3>
            </div>
            <p className="mt-8 max-w-xs text-sm leading-relaxed text-neutral-500">
              Ideas do not live in isolation. They breathe through connection. Our
              bidirectional links mirror the way memory actually works.
            </p>
          </div>
          <div className="flex min-h-[400px] flex-col justify-between bg-[#1a1a1a] p-12 text-white lg:p-16">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                02
              </span>
              <h3
                className="mt-4 text-3xl leading-tight text-[#c9a227] lg:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Morning pages, reimagined
              </h3>
            </div>
            <p className="mt-8 max-w-xs text-sm leading-relaxed text-neutral-400">
              A daily practice of emptying the mind onto the page. Over time,
              patterns emerge. Clarity arrives.
            </p>
          </div>
          <div className="flex min-h-[400px] flex-col justify-between bg-[#c9a227] p-12 text-[#1a1a1a] lg:p-16">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#1a1a1a]/50">
                03
              </span>
              <h3
                className="mt-4 text-3xl italic leading-tight lg:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Privacy as luxury
              </h3>
            </div>
            <p className="mt-8 max-w-xs text-sm leading-relaxed text-[#1a1a1a]/70">
              Your thoughts are not a product. End-to-end encryption.
              Local-first. You own the keys.
            </p>
          </div>
          <div className="flex min-h-[400px] flex-col justify-between bg-[#f0f0f0] p-12 lg:p-16">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                04
              </span>
              <h3
                className="mt-4 text-3xl leading-tight lg:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Forever accessible
              </h3>
            </div>
            <p className="mt-8 max-w-xs text-sm leading-relaxed text-neutral-500">
              Plain text exports. Markdown native. No lock-in. Your second brain
              outlives any single app.
            </p>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl items-center justify-between border-t border-neutral-200 px-6 py-12 text-xs uppercase tracking-[0.2em] text-neutral-400">
        <span>Second Brain</span>
        <span>Est. 2026</span>
      </footer>
    </div>
  );
}
