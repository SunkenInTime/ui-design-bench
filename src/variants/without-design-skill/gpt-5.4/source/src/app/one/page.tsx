import Link from "next/link";
import { IterationSwitcher } from "../iteration-switcher";

export default function IterationOnePage() {
  return (
    <main className="min-h-screen bg-[#f7f1e8] px-6 py-10 text-[#1f2937]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-[2rem] border border-black/10 bg-white/80 p-8 shadow-xl shadow-stone-400/20 backdrop-blur sm:p-12">
        <header className="flex flex-col gap-6 border-b border-black/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.45em] text-amber-700">
              Iteration One / Editorial
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#111827] sm:text-6xl">
              A refined landing page with quieter luxury.
            </h1>
          </div>
          <p className="max-w-md text-base leading-7 text-stone-600">
            This direction leans into typography, whitespace, and warm neutrals for a premium first
            impression.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-[1.75rem] bg-[#1f2937] p-8 text-white sm:p-10">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-200">Featured Story</p>
            <h2 className="mt-8 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
              Build a brand presence that feels intentional from the first scroll.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">
              Long-form structure, measured pacing, and a small set of high-signal proof points create a
              calm but confident narrative.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/two"
                className="inline-flex h-11 items-center rounded-full bg-amber-200 px-5 text-sm font-semibold text-slate-900 transition hover:bg-amber-100"
              >
                Compare next variation
              </Link>
              <Link
                href="/"
                className="inline-flex h-11 items-center rounded-full border border-white/20 px-5 text-sm font-semibold text-white transition hover:border-white/40"
              >
                Back to overview
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              ["01", "Clear visual hierarchy"],
              ["02", "Calm, premium tone"],
              ["03", "Strong editorial spacing"],
            ].map(([number, label]) => (
              <div key={number} className="rounded-[1.5rem] border border-black/10 bg-stone-50 p-6">
                <p className="text-sm font-medium text-amber-700">{number}</p>
                <p className="mt-8 text-2xl font-semibold tracking-tight text-slate-900">{label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <IterationSwitcher currentSlug="one" />
    </main>
  );
}

