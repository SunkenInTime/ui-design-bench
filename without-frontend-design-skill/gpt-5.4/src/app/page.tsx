import Link from "next/link";
import { iterations } from "./iterations";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.22),_transparent_35%),linear-gradient(180deg,_#0f172a_0%,_#111827_40%,_#020617_100%)] px-6 py-12 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-sky-950/20 backdrop-blur sm:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-200">
            Design Iterations
          </p>
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                Five page concepts, each on its own route.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Browse distinct takes at <span className="font-semibold text-white">/one</span>,{" "}
                <span className="font-semibold text-white">/two</span>,{" "}
                <span className="font-semibold text-white">/three</span>,{" "}
                <span className="font-semibold text-white">/four</span>, and{" "}
                <span className="font-semibold text-white">/five</span>. Each page includes a compact
                switcher so you can jump between iterations quickly.
              </p>
            </div>
            <Link
              href="/one"
              className="inline-flex h-12 items-center justify-center rounded-full bg-sky-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              Open iteration one
            </Link>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {iterations.map((iteration) => (
            <Link
              key={iteration.slug}
              href={`/${iteration.slug}`}
              className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-sky-300/60 hover:bg-white/8"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-sky-200">
                {iteration.kicker}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white">
                {iteration.label}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {iteration.description}
              </p>
              <span className="mt-6 inline-flex text-sm font-medium text-sky-200 transition group-hover:text-white">
                View route
              </span>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
