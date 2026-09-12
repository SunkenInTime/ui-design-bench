import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Editorial",
  description:
    "Cortex iteration three: an editorial landing for a second-brain notes app.",
};

export default function ThreePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-[#f2f1ee] font-sans text-[#1a1a1a]">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 pt-7">
        <span className="text-sm font-medium tracking-tight">Cortex</span>
        <div className="flex items-center gap-6 text-sm text-[#5c5c5c]">
          <a href="#ideas" className="transition-colors hover:text-[#1a1a1a]">
            Ideas
          </a>
          <a href="#method" className="transition-colors hover:text-[#1a1a1a]">
            Method
          </a>
          <a
            href="#subscribe"
            className="text-[#1a1a1a] underline decoration-[#1d4ed8] decoration-2 underline-offset-4"
          >
            Get Cortex
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6">
        <section className="pb-16 pt-12 lg:pb-24 lg:pt-16">
          <div className="max-w-3xl">
            <h1 className="text-[clamp(2.75rem,8vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.03em]">
              A quieter place
              <span className="block text-[#1d4ed8]">for serious thought.</span>
            </h1>
            <p className="mt-8 max-w-[36ch] text-lg leading-relaxed text-[#4a4a4a]">
              Capture ideas the moment they arrive. Cortex links them so recall
              feels automatic.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#subscribe"
                className="rounded-none bg-[#1a1a1a] px-6 py-3 text-sm font-medium text-[#f2f1ee] transition-transform hover:-translate-y-px active:translate-y-0"
              >
                Get Cortex
              </a>
              <a
                href="#method"
                className="px-1 py-3 text-sm font-medium text-[#1a1a1a] underline decoration-[#1d4ed8] underline-offset-4"
              >
                Read the method
              </a>
            </div>
          </div>

          <figure className="mt-12 overflow-hidden rounded-none">
            <Image
              src="/variants/with-taste-skill/mimo-x-pro-preview/images/three-hero.png"
              alt="Fountain pen resting on cool grey notebook paper"
              width={1536}
              height={1024}
              priority
              className="aspect-[16/10] w-full object-cover"
            />
          </figure>
        </section>

        <section id="ideas" className="border-t border-[#d6d3ce] py-14 lg:py-20">
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="max-w-[14ch] text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Notes should compound, not pile up.
              </h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-[#3f3f3f]">
              <p>
                Most note apps are storage. Cortex is a working memory: it holds
                what you write, then re-surfaces the right fragment when a later
                idea needs it.
              </p>
              <p>
                The interface stays quiet so the library can get loud with
                connections. You write. The graph does the remembering.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            {[
              {
                title: "Capture without ceremony",
                body: "A global shortcut, a share target, or a plain file drop. The note exists before the system asks for structure.",
              },
              {
                title: "Links with judgment",
                body: "Cortex proposes neighbors from language and history. You decide which edges deserve to stay.",
              },
              {
                title: "Search that reads",
                body: "Ask a question. Receive the passages that answer it, plus the notes that argue with them.",
              },
              {
                title: "Yours on disk",
                body: "Local Markdown by default. Sync is a convenience, not the price of entry.",
              },
            ].map((item) => (
              <article key={item.title} className="border-t border-[#d6d3ce] pt-5">
                <h3 className="text-lg font-medium tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-[#555]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="method" className="border-t border-[#d6d3ce] py-14 lg:py-20">
          <blockquote className="mx-auto max-w-2xl text-center">
            <p className="text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
              “I stopped hunting for the note. The note started finding the
              problem I was already in.”
            </p>
            <footer className="mt-6 text-sm text-[#666]">
              Mira Ellison · research lead
            </footer>
          </blockquote>
        </section>

        <section
          id="subscribe"
          className="mb-20 border-t border-[#d6d3ce] py-14 lg:py-20"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="max-w-[16ch] text-3xl font-medium tracking-tight sm:text-4xl">
                Build a library you can think inside.
              </h2>
              <p className="mt-3 max-w-[40ch] text-sm leading-relaxed text-[#555]">
                Free for personal use. Export is ordinary Markdown. No dark
                patterns, no forced cloud.
              </p>
            </div>
            <a
              href="#subscribe"
              className="inline-flex w-fit rounded-none bg-[#1d4ed8] px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-px active:translate-y-0"
            >
              Download Cortex
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d6d3ce] py-6">
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-3 px-6 text-xs text-[#777]">
          <span>Cortex</span>
          <span>Design iteration 3 · Editorial</span>
        </div>
      </footer>

    </div>
  );
}
