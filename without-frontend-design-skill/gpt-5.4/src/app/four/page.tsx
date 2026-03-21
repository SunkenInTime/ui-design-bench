import { IterationSwitcher } from "../iteration-switcher";

const modules = [
  { title: "Signal", copy: "Direct value communication with tighter information grouping." },
  { title: "Structure", copy: "Bento-like blocks make scanning and comparing sections easier." },
  { title: "System", copy: "The layout feels product-ready even before deeper interaction design." },
  { title: "Pacing", copy: "Short sections create a more efficient reading flow." },
];

export default function IterationFourPage() {
  return (
    <main className="min-h-screen bg-[#0b1020] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <section className="rounded-[2rem] border border-cyan-400/20 bg-[#11192d] p-8 shadow-2xl shadow-cyan-950/30 sm:p-12">
          <p className="text-xs uppercase tracking-[0.45em] text-cyan-300">
            Iteration Four / System
          </p>
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
              A modular direction that feels closer to a product system.
            </h1>
            <p className="max-w-md text-base leading-7 text-slate-300">
              This concept trades expressive storytelling for organized blocks, stronger scanability, and
              clearer section boundaries.
            </p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {modules.map((module, index) => (
            <article
              key={module.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Module 0{index + 1}</p>
              <h2 className="mt-6 text-3xl font-semibold">{module.title}</h2>
              <p className="mt-4 max-w-md text-base leading-7 text-slate-300">{module.copy}</p>
            </article>
          ))}
        </section>
      </div>
      <IterationSwitcher currentSlug="four" />
    </main>
  );
}
