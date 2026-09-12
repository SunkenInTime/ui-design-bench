/* eslint-disable @next/next/no-html-link-for-pages -- Preserve generated native navigation with gallery-scoped URLs. */
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Quiet workspace",
  description:
    "Cortex iteration one: a calm Linear-style landing for a second-brain notes app.",
};

const features = [
  {
    title: "Instant capture",
    body: "Dump a thought without leaving the task you are already in.",
  },
  {
    title: "Bidirectional links",
    body: "Related notes surface as you write, so connections form on their own.",
  },
  {
    title: "Search that understands",
    body: "Ask a question in plain language. Get the notes that actually answer it.",
  },
  {
    title: "Local-first",
    body: "Your library lives on your machine first, then syncs when you want it to.",
  },
];

export default function OnePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-zinc-50 text-zinc-950">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-6">
        <a href="/with-taste-skill/mimo-x-pro-preview/1" className="text-sm font-semibold tracking-tight">
          Cortex
        </a>
        <nav className="hidden items-center gap-8 text-sm text-zinc-600 sm:flex">
          <a href="#product" className="transition-colors hover:text-zinc-950">
            Product
          </a>
          <a href="#how" className="transition-colors hover:text-zinc-950">
            How it works
          </a>
        </nav>
        <a
          href="#get"
          className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-50 transition-transform hover:-translate-y-px active:translate-y-0"
        >
          Get Cortex
        </a>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6">
        <section className="grid items-center gap-10 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24 lg:pt-20">
          <div className="max-w-xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-700">
              Notes for people who think in systems
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              Your second
              <span className="text-emerald-700"> brain.</span>
            </h1>
            <p className="mt-5 max-w-[42ch] text-base leading-relaxed text-zinc-600 sm:text-lg">
              Capture ideas the moment they arrive. Cortex links them so recall
              feels automatic.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#get"
                className="rounded-full bg-emerald-700 px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-px active:translate-y-0"
              >
                Get Cortex
              </a>
              <a
                href="#how"
                className="rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-400"
              >
                See how it works
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_24px_80px_-40px_rgba(24,24,27,0.35)]">
            <Image
              src="/variants/with-taste-skill/mimo-x-pro-preview/images/one-hero.png"
              alt="Translucent linked nodes representing connected notes"
              width={1536}
              height={1024}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section id="product" className="border-t border-zinc-200 py-14 lg:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Built for long-term thinking, not inbox zero.
            </h2>
            <p className="mt-3 max-w-[55ch] text-base leading-relaxed text-zinc-600">
              Cortex keeps capture friction near zero, then quietly builds the
              graph you will need weeks later.
            </p>
          </div>
          <ul className="mt-10 grid gap-0 sm:grid-cols-2">
            {features.map((feature, index) => (
              <li
                key={feature.title}
                className={[
                  "border-t border-zinc-200 py-6",
                  index % 2 === 0 ? "sm:pr-8" : "sm:pl-8",
                  index < 2 ? "sm:border-t" : "sm:border-t",
                ].join(" ")}
              >
                <h3 className="text-base font-medium text-zinc-950">
                  {feature.title}
                </h3>
                <p className="mt-2 max-w-[40ch] text-sm leading-relaxed text-zinc-600">
                  {feature.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="how" className="border-t border-zinc-200 py-14 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Three steps. No ceremony.
          </h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "Capture",
                text: "Hotkey, mobile share sheet, or a plain text inbox. Whatever is fastest in the moment.",
              },
              {
                step: "Connect",
                text: "Link a note once. Cortex proposes the rest from shared language and nearby ideas.",
              },
              {
                step: "Recall",
                text: "Search by meaning, not exact wording. The right page opens with its neighbors in view.",
              },
            ].map((item) => (
              <li key={item.step} className="border-l-2 border-emerald-700 pl-5">
                <h3 className="text-base font-medium">{item.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section
          id="get"
          className="mb-20 rounded-3xl bg-zinc-950 px-8 py-12 text-zinc-50 sm:px-12 sm:py-14"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="max-w-[16ch] text-3xl font-semibold tracking-tight sm:text-4xl">
                Start the brain you will still use in five years.
              </h2>
              <p className="mt-3 max-w-[40ch] text-sm leading-relaxed text-zinc-400">
                Free for personal libraries. Export anytime. No account required
                to try the desktop app.
              </p>
            </div>
            <a
              href="#get"
              className="inline-flex w-fit rounded-full bg-emerald-500 px-5 py-3 text-sm font-medium text-zinc-950 transition-transform hover:-translate-y-px active:translate-y-0"
            >
              Download for desktop
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-6">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 text-xs text-zinc-500">
          <span>Cortex</span>
          <span>Design iteration 1 · Quiet workspace</span>
        </div>
      </footer>

    </div>
  );
}
