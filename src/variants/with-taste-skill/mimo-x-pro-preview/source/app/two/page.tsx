import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Graph",
  description:
    "Cortex iteration two: a dark knowledge-graph landing for a second-brain notes app.",
};

const capabilities = [
  {
    title: "Live graph",
    body: "Every note is a node. Links light up when a new idea touches an old one.",
  },
  {
    title: "Context pull",
    body: "Open a topic and Cortex gathers the surrounding trail you wrote months ago.",
  },
  {
    title: "Semantic recall",
    body: "Query the way you think. Results rank by meaning, not keyword overlap.",
  },
  {
    title: "Private by default",
    body: "Encrypt at rest on device. Sync is optional, explicit, and revocable.",
  },
];

export default function TwoPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-zinc-950 text-zinc-100">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-medium tracking-tight">cortex</span>
        </div>
        <nav className="hidden items-center gap-8 font-mono text-xs text-zinc-400 sm:flex">
          <a href="#system" className="transition-colors hover:text-cyan-300">
            system
          </a>
          <a href="#protocol" className="transition-colors hover:text-cyan-300">
            protocol
          </a>
        </nav>
        <a
          href="#run"
          className="rounded-sm border border-cyan-400/40 bg-cyan-400/10 px-3 py-2 font-mono text-xs text-cyan-300 transition-colors hover:bg-cyan-400/20"
        >
          run cortex
        </a>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-6">
        <section className="relative grid items-center gap-10 overflow-hidden pb-16 pt-12 lg:grid-cols-[1fr_1.1fr] lg:pb-24 lg:pt-16">
          <div className="relative z-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-400">
              local graph engine
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              A second brain that
              <span className="block text-cyan-300">keeps the graph warm.</span>
            </h1>
            <p className="mt-5 max-w-[38ch] text-base leading-relaxed text-zinc-400">
              Capture ideas the moment they arrive. Cortex links them so recall
              feels automatic.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#run"
                className="rounded-sm bg-cyan-400 px-5 py-3 text-sm font-medium text-zinc-950 transition-transform hover:-translate-y-px active:translate-y-0"
              >
                Get Cortex
              </a>
              <a
                href="#system"
                className="rounded-sm border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-cyan-400/50 hover:text-cyan-200"
              >
                Inspect the model
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-sm border border-zinc-800 bg-zinc-900">
            <Image
              src="/variants/with-taste-skill/mimo-x-pro-preview/images/two-hero.png"
              alt="Glowing cyan knowledge graph of connected nodes"
              width={1536}
              height={1024}
              priority
              className="h-full w-full object-cover opacity-90"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
          </div>
        </section>

        <section id="system" className="border-t border-zinc-800 py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                The system is the product.
              </h2>
              <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-zinc-400">
                Notes are not files in a drawer. They are nodes in a living map
                that rewrites its own edges as your thinking changes.
              </p>
            </div>
            <ul className="grid gap-px overflow-hidden rounded-sm border border-zinc-800 bg-zinc-800 sm:grid-cols-2">
              {capabilities.map((item) => (
                <li key={item.title} className="bg-zinc-950 p-6">
                  <h3 className="text-base font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="protocol" className="border-t border-zinc-800 py-14 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Protocol
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Ingest",
                body: "Markdown, voice memos, and browser clips land in one inbox with stable IDs.",
              },
              {
                title: "Link",
                body: "Embeddings propose edges. You confirm, reject, or let the graph stay sparse.",
              },
              {
                title: "Traverse",
                body: "Walk from any note into neighbors, backlinks, and the original source trail.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-sm border border-zinc-800 bg-zinc-900/60 p-6"
              >
                <h3 className="font-mono text-sm text-cyan-300">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="run" className="mb-20 border-t border-zinc-800 py-14 lg:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="max-w-[18ch] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Boot a private graph on your machine.
              </h2>
              <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-zinc-400">
                Free for personal libraries. Local storage first. Export is a
                folder of plain Markdown.
              </p>
            </div>
            <a
              href="#run"
              className="inline-flex w-fit rounded-sm bg-cyan-400 px-5 py-3 text-sm font-medium text-zinc-950 transition-transform hover:-translate-y-px active:translate-y-0"
            >
              Download for desktop
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800 py-6">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 font-mono text-xs text-zinc-500">
          <span>cortex</span>
          <span>Design iteration 2 · Graph</span>
        </div>
      </footer>

    </div>
  );
}
