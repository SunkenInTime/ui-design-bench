import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bento",
  description:
    "Cortex iteration four: a premium dark bento landing for a second-brain notes app.",
};

export default function FourPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-[#0b0b0d] text-[#f4f4f5]">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-6">
        <span className="text-sm font-semibold tracking-tight">Cortex</span>
        <nav className="hidden items-center gap-7 text-sm text-zinc-400 sm:flex">
          <a href="#features" className="transition-colors hover:text-white">
            Features
          </a>
          <a href="#craft" className="transition-colors hover:text-white">
            Craft
          </a>
        </nav>
        <a
          href="#cta"
          className="rounded-full bg-[#3b82f6] px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-px active:translate-y-0"
        >
          Get Cortex
        </a>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-6">
        <section className="grid items-end gap-10 pb-14 pt-12 lg:grid-cols-[0.95fr_1.05fr] lg:pb-20 lg:pt-16">
          <div>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Your second
              <span className="text-[#93c5fd]"> brain,</span>
              finally in focus.
            </h1>
            <p className="mt-5 max-w-[38ch] text-base leading-relaxed text-zinc-400 sm:text-lg">
              Capture ideas the moment they arrive. Cortex links them so recall
              feels automatic.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#cta"
                className="rounded-full bg-white px-5 py-3 text-sm font-medium text-[#0b0b0d] transition-transform hover:-translate-y-px active:translate-y-0"
              >
                Get Cortex
              </a>
              <a
                href="#features"
                className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500"
              >
                Explore features
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
            <Image
              src="/variants/with-taste-skill/mimo-x-pro-preview/images/four-hero.png"
              alt="Layered glass cards floating in soft charcoal light"
              width={1536}
              height={1024}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section id="features" className="pb-16 lg:pb-24">
          <div className="grid gap-4 md:grid-cols-6">
            <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#1d4ed8]/30 via-zinc-900 to-zinc-950 p-7 md:col-span-3">
              <h2 className="text-2xl font-semibold tracking-tight">
                Capture at the speed of thought
              </h2>
              <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-zinc-300">
                Global hotkey, mobile share, or quick-add window. The note is
                saved before you finish the sentence.
              </p>
            </article>

            <article className="overflow-hidden rounded-3xl border border-white/10 md:col-span-3 md:min-h-[220px]">
              <Image
                src="/variants/with-taste-skill/mimo-x-pro-preview/images/one-hero.png"
                alt="Soft linked glass nodes on a light surface"
                width={1536}
                height={1024}
                className="h-full w-full object-cover"
              />
            </article>

            <article className="rounded-3xl border border-white/10 bg-zinc-900/80 p-7 md:col-span-2">
              <h3 className="text-lg font-medium tracking-tight">
                Bidirectional links
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Every connection is visible from both ends. Old notes wake up
                when new ones touch them.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-zinc-900/80 p-7 md:col-span-2">
              <h3 className="text-lg font-medium tracking-tight">
                Meaningful search
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Ask naturally. Cortex ranks passages by intent, not by exact
                keyword matches.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-zinc-900/80 p-7 md:col-span-2">
              <h3 className="text-lg font-medium tracking-tight">
                Local-first vault
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Encrypted on device. Cloud sync is optional and can be turned
                off without losing history.
              </p>
            </article>
          </div>
        </section>

        <section
          id="craft"
          className="mb-20 grid gap-8 rounded-3xl border border-white/10 bg-zinc-950/80 p-8 sm:p-10 md:grid-cols-3"
        >
          {[
            {
              title: "One inbox",
              body: "All capture paths land in a single stream you can sort later.",
            },
            {
              title: "Graph you can trust",
              body: "Suggested links stay suggestions until you accept them.",
            },
            {
              title: "Export without friction",
              body: "Plain folders, open formats, no proprietary lock-in.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="text-base font-medium text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {item.body}
              </p>
            </div>
          ))}
        </section>

        <section id="cta" className="mb-20 pb-4">
          <div className="flex flex-col gap-6 rounded-3xl bg-[#3b82f6] p-8 sm:p-10 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="max-w-[16ch] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Give your ideas somewhere to live.
              </h2>
              <p className="mt-3 max-w-[38ch] text-sm leading-relaxed text-blue-100">
                Free for personal libraries. Works offline. Export whenever you
                want.
              </p>
            </div>
            <a
              href="#cta"
              className="inline-flex w-fit rounded-full bg-[#0b0b0d] px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-px active:translate-y-0"
            >
              Download for desktop
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-6">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 text-xs text-zinc-500">
          <span>Cortex</span>
          <span>Design iteration 4 · Bento</span>
        </div>
      </footer>

    </div>
  );
}
