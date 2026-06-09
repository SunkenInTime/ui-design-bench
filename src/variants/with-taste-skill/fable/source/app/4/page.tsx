import type { Metadata } from "next";
import Image from "next/image";
import {
  Lightning,
  ShareNetwork,
  MagnifyingGlass,
  LockKey,
  ArrowRight,
  DeviceMobile,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../components/reveal";

export const metadata: Metadata = {
  title: "Trove. Remember everything, beautifully.",
};

/*
  Iteration 4: "Glass"
  Dials: VARIANCE 7 / MOTION 6 / DENSITY 3
  Theme lock: light, cold-luxury silver. Accent lock: cobalt.
  Radius system: interactive elements are pills, surfaces are 24px
  (rounded-3xl). Glass panels use the .glass utility, which carries a
  reduced-transparency fallback.
*/

export default function GlassPage() {
  return (
    <div className="min-h-dvh bg-[#eef0f4] font-outfit text-slate-900 [background-image:radial-gradient(1200px_600px_at_80%_-10%,rgb(255_255_255/0.9),transparent),radial-gradient(900px_500px_at_0%_30%,rgb(37_99_235/0.06),transparent)]">
      {/* Nav: floating glass pill */}
      <header className="fixed inset-x-0 top-4 z-40 px-4">
        <div className="glass mx-auto flex h-14 max-w-4xl items-center justify-between rounded-full pl-6 pr-2">
          <a href="#" className="text-[15px] font-semibold tracking-tight">
            trove
          </a>
          <nav className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
            <a href="#features" className="transition-colors hover:text-slate-900">
              Features
            </a>
            <a href="#privacy" className="transition-colors hover:text-slate-900">
              Privacy
            </a>
            <a href="#voices" className="transition-colors hover:text-slate-900">
              Voices
            </a>
          </nav>
          <a
            href="#join"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 active:scale-[0.98]"
          >
            Start free
          </a>
        </div>
      </header>

      <main>
        {/* Hero: asymmetric split */}
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-20 pt-32 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <h1 className="text-5xl font-semibold leading-[1.06] tracking-tighter lg:text-6xl">
              Remember everything, beautifully.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-600">
              Trove captures notes from anywhere, links them automatically,
              and resurfaces the right idea exactly when you need it.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#join"
                className="rounded-full bg-blue-600 px-7 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700 active:scale-[0.98]"
              >
                Start free
              </a>
              <a
                href="#features"
                className="glass group flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-slate-700"
              >
                Explore features
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="relative aspect-[16/11] overflow-hidden rounded-3xl shadow-[0_24px_80px_rgb(37_99_235/0.12)]">
              <Image
                src="/variants/with-taste-skill/fable/gen/trove-glass.png"
                alt="Layered panes of frosted glass with one cobalt pane"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </section>

        {/* Bento: 5 items, 5 cells */}
        <section id="features" className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <h2 className="max-w-md text-3xl font-semibold tracking-tight lg:text-4xl">
              Everything a second brain should do
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-6">
            <Reveal className="md:col-span-4" delay={0.05}>
              <div className="glass flex h-full min-h-[260px] flex-col justify-between rounded-3xl p-8">
                <Lightning size={26} className="text-blue-600" />
                <div className="mt-12 max-w-md">
                  <h3 className="text-xl font-semibold">Instant capture</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">
                    One keystroke from any app, a share sheet on your phone,
                    a highlight in your browser. The thought lands in your
                    trove before you lose it.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal className="md:col-span-2" delay={0.1}>
              <div className="relative h-full min-h-[260px] overflow-hidden rounded-3xl">
                <Image
                  src="/variants/with-taste-skill/fable/gen/trove-glass-detail.png"
                  alt="Cobalt light refracting through frosted glass"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal className="md:col-span-2" delay={0.1}>
              <div className="flex h-full min-h-[220px] flex-col justify-between rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
                <DeviceMobile size={26} />
                <div className="mt-10">
                  <h3 className="text-xl font-semibold">Everywhere you are</h3>
                  <p className="mt-2 leading-relaxed text-blue-100">
                    Mac, iPhone, and the web, kept in sync with end-to-end
                    encryption.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal className="md:col-span-2" delay={0.15}>
              <div className="glass flex h-full min-h-[220px] flex-col justify-between rounded-3xl p-8">
                <ShareNetwork size={26} className="text-blue-600" />
                <div className="mt-10">
                  <h3 className="text-xl font-semibold">Automatic linking</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">
                    Notes connect to related notes on save. No folders, no
                    tags, no filing.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal className="md:col-span-2" delay={0.2}>
              <div className="glass flex h-full min-h-[220px] flex-col justify-between rounded-3xl p-8">
                <MagnifyingGlass size={26} className="text-blue-600" />
                <div className="mt-10">
                  <h3 className="text-xl font-semibold">Semantic recall</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">
                    Ask in your own words. Half-remembered ideas come back
                    whole.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Privacy: glass panel over cobalt field */}
        <section id="privacy" className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-blue-800 px-6 py-20 md:px-20">
              <div className="glass mx-auto max-w-2xl rounded-3xl p-10 text-center md:p-14">
                <LockKey size={30} className="mx-auto text-blue-700" />
                <h2 className="mt-6 text-3xl font-semibold tracking-tight">
                  Private by architecture
                </h2>
                <p className="mx-auto mt-4 max-w-md leading-relaxed text-slate-700">
                  Notes live on your device as plain Markdown. Sync is
                  end-to-end encrypted, and we could not read your second
                  brain if we wanted to.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Voices: asymmetric testimonial pair */}
        <section id="voices" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-4 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <figure className="glass flex h-full flex-col justify-between rounded-3xl p-10">
                <blockquote className="text-2xl font-medium leading-snug tracking-tight">
                  “Capture is so fast it feels like muttering to myself. The
                  difference is that Trove actually remembers.”
                </blockquote>
                <figcaption className="mt-8 text-sm text-slate-500">
                  June Okafor, Staff Engineer at Brightline
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="md:col-span-5 md:mt-12" delay={0.1}>
              <figure className="glass flex h-full flex-col justify-between rounded-3xl p-10">
                <blockquote className="text-xl font-medium leading-snug tracking-tight">
                  “My reading notes finally talk to each other. Old highlights
                  resurface right when a draft needs them.”
                </blockquote>
                <figcaption className="mt-8 text-sm text-slate-500">
                  Tomás Ferreira, doctoral researcher at TU Delft
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* CTA band */}
        <section id="join" className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <div className="flex flex-col items-center rounded-3xl bg-blue-600 px-6 py-20 text-center text-white">
              <h2 className="max-w-2xl text-4xl font-semibold tracking-tight lg:text-5xl">
                Your memory, with a search bar.
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-blue-100">
                Free on one device. Your notes stay yours, in plain Markdown.
              </p>
              <a
                href="#"
                className="mt-9 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-blue-700 transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                Start free
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 pb-24 pt-6 text-sm text-slate-500 md:flex-row">
          <span className="font-semibold text-slate-800">trove</span>
          <div className="flex gap-8">
            <a href="#features" className="transition-colors hover:text-slate-800">
              Features
            </a>
            <a href="#privacy" className="transition-colors hover:text-slate-800">
              Privacy
            </a>
          </div>
          <span>© 2026 Trove</span>
        </div>
      </footer>
    </div>
  );
}
