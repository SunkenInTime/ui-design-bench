import Link from "next/link";
import { LandingVariant } from "./landing-data";

type LandingPageProps = {
  variant: LandingVariant;
};

export function LandingPage({ variant }: LandingPageProps) {
  return (
    <main className={`min-h-screen overflow-hidden ${variant.theme}`}>
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between gap-4">
          <Link href={`/${variant.slug}`} className="text-xl font-semibold">
            {variant.name}
          </Link>
        </header>

        <section className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[1.02fr_0.98fr] lg:py-12">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-current/15 bg-white/35 px-4 py-2 text-sm font-semibold">
              Second brain note-taking
            </p>
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
              {variant.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-current/72 sm:text-xl">
              {variant.subhead}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#preview"
                className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-base font-semibold shadow-sm ${variant.accent}`}
              >
                {variant.cta}
              </a>
              <a
                href="#system"
                className="inline-flex h-12 items-center justify-center rounded-full border border-current/20 bg-white/35 px-6 text-base font-semibold"
              >
                {variant.secondary}
              </a>
            </div>
          </div>

          <div id="preview" className="relative">
            <div className="absolute inset-6 rotate-3 rounded-[2rem] bg-current/10" />
            <div className="relative rounded-[2rem] border border-current/12 bg-white/70 p-4 shadow-2xl shadow-black/10 backdrop-blur">
              <div className="rounded-[1.5rem] bg-[#151515] p-4 text-white">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/55">Today</p>
                    <p className="text-xl font-semibold">Memory workspace</p>
                  </div>
                  <div className={`rounded-full px-3 py-2 text-sm ${variant.accent}`}>
                    Live
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {variant.notes.map((note) => (
                    <div key={note} className="rounded-2xl bg-white/10 p-4">
                      <div className="mb-5 h-2 w-10 rounded-full bg-white/35" />
                      <p className="text-sm leading-6 text-white/82">{note}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-2xl bg-white p-4 text-[#151515]">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="font-semibold">Connected thought</p>
                    <p className="text-sm text-black/45">12 links</p>
                  </div>
                  <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-sm">
                    <span className="rounded-full bg-[#e8f0ea] px-3 py-2">Capture</span>
                    <span className="text-black/35">to</span>
                    <span className="rounded-full bg-[#e9edf7] px-3 py-2">Insight</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="system"
          className="grid gap-4 border-t border-current/12 py-7 md:grid-cols-[0.8fr_1.2fr_1fr]"
        >
          <div>
            <p className="text-5xl font-semibold">{variant.metric}</p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-current/62">
              {variant.metricLabel}
            </p>
          </div>
          <p className="text-2xl font-medium leading-9">{variant.insight}</p>
          <div className="grid gap-2">
            {variant.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center justify-between rounded-2xl border border-current/12 bg-white/35 px-4 py-3"
              >
                <span className="font-medium">{feature}</span>
                <span aria-hidden="true">+</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
