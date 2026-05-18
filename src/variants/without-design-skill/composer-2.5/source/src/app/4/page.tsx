import { Space_Grotesk } from "next/font/google";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

export default function KernelLanding() {
  return (
    <div
      className={`${grotesk.variable} min-h-full bg-black font-[family-name:var(--font-grotesk)] text-white`}
    >
      <header className="border-b-4 border-white">
        <div className="mx-auto flex max-w-6xl items-stretch justify-between">
          <div className="flex items-center border-r-4 border-white px-6 py-4">
            <span className="text-2xl font-bold uppercase tracking-tighter">
              Engram
            </span>
          </div>
          <nav className="hidden items-stretch md:flex">
            {["Features", "Pricing", "Docs"].map((item) => (
              <a
                key={item}
                href="#"
                className="flex items-center border-r-4 border-white px-8 font-bold uppercase tracking-wide transition hover:bg-[#FFE500] hover:text-black"
              >
                {item}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="bg-[#FFE500] px-8 py-4 font-bold uppercase text-black transition hover:bg-white"
          >
            Start
          </button>
        </div>
      </header>

      <main>
        <section className="border-b-4 border-white">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:py-32">
            <p className="inline-block bg-[#FFE500] px-3 py-1 text-sm font-bold uppercase text-black">
              Second brain
            </p>
            <h1 className="mt-8 max-w-4xl text-6xl font-bold uppercase leading-[0.9] tracking-tighter sm:text-8xl lg:text-[7rem]">
              Notes
              <br />
              That
              <br />
              <span className="text-[#FFE500]">Work</span>
            </h1>
            <p className="mt-10 max-w-xl text-xl font-medium uppercase leading-snug text-zinc-400">
              No fluff. No folders-from-hell. Raw capture. Hard links. Total recall.
              Built for people who think in systems.
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                className="border-4 border-[#FFE500] bg-[#FFE500] px-10 py-5 text-lg font-bold uppercase text-black transition hover:bg-black hover:text-[#FFE500]"
              >
                Get Engram
              </button>
              <button
                type="button"
                className="border-4 border-white px-10 py-5 text-lg font-bold uppercase transition hover:bg-white hover:text-black"
              >
                Read manifesto
              </button>
            </div>
          </div>
        </section>

        <section className="grid border-b-4 border-white md:grid-cols-2">
          <div className="border-b-4 border-white p-12 md:border-b-0 md:border-r-4">
            <h2 className="text-4xl font-bold uppercase">Capture</h2>
            <p className="mt-4 text-lg text-zinc-400">
              Hotkey. Done. Markdown native. Zero loading screens.
            </p>
            <p className="mt-8 font-mono text-6xl font-bold text-[#FFE500]">0.3s</p>
            <p className="mt-2 text-sm uppercase text-zinc-500">avg. capture time</p>
          </div>
          <div className="p-12">
            <h2 className="text-4xl font-bold uppercase">Connect</h2>
            <p className="mt-4 text-lg text-zinc-400">
              [[Wiki links]] everywhere. Backlinks automatic. Graph optional.
            </p>
            <p className="mt-8 font-mono text-6xl font-bold text-[#FFE500]">∞</p>
            <p className="mt-2 text-sm uppercase text-zinc-500">bidirectional links</p>
          </div>
        </section>

        <section className="bg-[#FFE500] px-6 py-16 text-black">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold uppercase sm:text-5xl">
              Your brain. Externalized. Under your control.
            </h2>
            <p className="mt-4 max-w-2xl text-lg font-medium">
              Export everything. Own your data. No lock-in, no dark patterns, no
              &ldquo;AI summaries&rdquo; replacing your actual thinking.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
