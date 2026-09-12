import { ArrowRight } from "@phosphor-icons/react/ssr";
import { KithMark } from "../../components/kith-mark";
import { MagneticButton } from "../../components/magnetic-button";
import { Marquee } from "../../components/marquee";
import { Photo } from "../../components/photo";
import { Reveal } from "../../components/reveal";
import { SiteNav } from "../../components/site-nav";
import { StickyStack } from "../../components/sticky-stack";
import { WaitlistForm } from "../../components/waitlist-form";

const cta = "Start a notebook";

export default function Page() {
  return (
    <div id="top">
      <div className="grain-overlay" aria-hidden="true" />
      <SiteNav
        brand={
          <span className="flex items-center gap-2 text-sm font-medium">
            <KithMark className="h-5 w-5 text-[#c45c3e] dark:text-[#e08b72]" />
            Kith
          </span>
        }
        links={[
          { href: "#practice", label: "Practice" },
          { href: "#notes", label: "Notes" },
        ]}
        cta={{ href: "#start", label: cta }}
        barClassName="border-b border-zinc-400/70 bg-[#e4e6ea]/90 backdrop-blur-md dark:border-zinc-700 dark:bg-[#1a1c20]/90"
        linkClassName="text-sm text-zinc-700 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
        ctaClassName="inline-flex items-center bg-[#c45c3e] px-4 py-2 text-sm font-medium whitespace-nowrap text-white transition hover:bg-[#a84d34] active:scale-[0.98] dark:bg-[#e08b72] dark:text-[#1a1c20] dark:hover:bg-[#ebaa98]"
        iconClassName="text-zinc-900 dark:text-zinc-100"
        overlayClassName="border-t border-zinc-400 bg-[#e4e6ea] dark:border-zinc-700 dark:bg-[#1a1c20]"
      />

      <section className="relative mx-auto min-h-[calc(100dvh-4rem)] max-w-[1400px] px-4 pt-10 pb-16 md:px-8 lg:pt-14">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className="font-[family-name:var(--font-kith-display)] max-w-[8ch] text-5xl leading-[1.02] font-semibold tracking-tight md:text-7xl lg:text-8xl">
              Stack a thought.
            </h1>
            <p className="mt-6 max-w-[34ch] text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              A second brain from short notes, automatic links, and daily recall.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <MagneticButton
                href="#start"
                className="inline-flex items-center gap-2 bg-[#c45c3e] px-5 py-3 text-sm font-medium whitespace-nowrap text-white hover:bg-[#a84d34] dark:bg-[#e08b72] dark:text-[#1a1c20] dark:hover:bg-[#ebaa98]"
              >
                {cta}
                <ArrowRight size={16} weight="regular" />
              </MagneticButton>
              <a
                href="#practice"
                className="inline-flex items-center border border-zinc-500 px-5 py-3 text-sm font-medium whitespace-nowrap text-zinc-800 transition hover:bg-white/50 dark:border-zinc-500 dark:text-zinc-200 dark:hover:bg-zinc-800"
              >
                Practice
              </a>
            </div>
          </div>
          <Photo
            src="/variants/with-taste-skill/gemini-3.7-flash/kith/kith-5-figure.png"
            alt="A man sitting on a slate stoop holding a rust cloth notebook"
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="aspect-[3/4] w-full max-w-md lg:col-span-5 lg:mt-12 lg:max-w-none"
          />
        </div>
      </section>

      <div id="practice">
        <StickyStack>
          <article className="relative w-full min-h-[100dvh] overflow-hidden bg-[#c45c3e] text-white">
            <div className="absolute inset-0 opacity-50">
              <Photo
                src="/variants/with-taste-skill/gemini-3.7-flash/kith/kith-5-studio.png"
                alt="A terracotta studio with paper stacks and a figure in motion"
                sizes="100vw"
                className="h-full min-h-[100dvh] w-full"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#c45c3e] via-[#c45c3e]/55 to-[#c45c3e]/10" />
            <div className="relative z-[1] mx-auto flex min-h-[100dvh] max-w-[1400px] flex-col justify-end px-4 py-20 md:px-8">
              <h2 className="font-[family-name:var(--font-kith-display)] text-5xl font-semibold tracking-tight md:text-7xl">
                Capture
              </h2>
              <p className="mt-4 max-w-[40ch] text-lg text-white">
                Get the line out of your head. Filing is optional.
              </p>
            </div>
          </article>
          <article className="flex min-h-[100dvh] w-full items-end bg-[#4b5563] text-white">
            <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-end gap-8 px-4 py-20 md:grid-cols-2 md:px-8">
              <div>
                <h2 className="font-[family-name:var(--font-kith-display)] text-5xl font-semibold tracking-tight md:text-7xl">
                  Connect
                </h2>
                <p className="mt-4 max-w-[40ch] text-lg">
                  Names, books, and projects gather as you type. No graph
                  homework.
                </p>
              </div>
              <Photo
                src="/variants/with-taste-skill/gemini-3.7-flash/kith/kith-5-papers.png"
                alt="Torn grey paper, terracotta envelopes, and slate clips on concrete"
                sizes="(max-width: 768px) 100vw, 45vw"
                className="aspect-[4/3] w-full"
              />
            </div>
          </article>
          <article className="flex min-h-[100dvh] w-full items-center bg-[#e4e6ea] text-[#1f2328] dark:bg-[#1a1c20] dark:text-[#ececec]">
            <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8">
              <h2 className="font-[family-name:var(--font-kith-display)] max-w-[12ch] text-5xl font-semibold tracking-tight md:text-7xl">
                Recall
              </h2>
              <p className="mt-4 max-w-[42ch] text-lg text-zinc-600 dark:text-zinc-400">
                Tomorrow, Kith puts one old note back on the table. That is
                the whole trick.
              </p>
            </div>
          </article>
        </StickyStack>
      </div>

      <section id="notes" className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 lg:py-28">
        <Reveal>
          <h2 className="font-[family-name:var(--font-kith-display)] max-w-[16ch] text-3xl font-semibold tracking-tight md:text-5xl">
            A notebook that stays small.
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-12">
          <Photo
            src="/variants/with-taste-skill/gemini-3.7-flash/kith/kith-5-studio.png"
            alt="Terracotta plaster walls and a slate floor in a working studio"
            sizes="(max-width: 768px) 100vw, 58vw"
            className="aspect-[16/10] md:col-span-7"
          />
          <Reveal className="flex flex-col justify-between bg-[#c45c3e] p-6 text-white md:col-span-5">
            <p className="font-[family-name:var(--font-kith-display)] text-3xl leading-tight font-semibold">
              No folders until you want them.
            </p>
            <p className="mt-6 max-w-[36ch] text-base text-white">
              Most notes never need a home. Links are enough.
            </p>
          </Reveal>
          <Reveal
            delay={0.05}
            className="bg-white p-6 dark:bg-zinc-900 md:col-span-5"
          >
            <h3 className="text-2xl font-semibold tracking-tight">Search</h3>
            <p className="mt-3 max-w-[40ch] text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Ask for the meeting, the recipe, or the quote. Answers come from
              your pages.
            </p>
          </Reveal>
          <Photo
            src="/variants/with-taste-skill/gemini-3.7-flash/kith/kith-5-papers.png"
            alt="Overhead still of mixed paper, clips, and a rust pencil"
            sizes="(max-width: 768px) 100vw, 58vw"
            className="aspect-[16/10] md:col-span-7"
          />
        </div>
      </section>

      <section className="border-y border-zinc-400/80 py-12 dark:border-zinc-700">
        <Marquee
          items={[
            "Research",
            "Recipes",
            "People",
            "Projects",
            "Quotes",
            "Walks",
            "Lectures",
            "Drafts",
          ]}
        />
      </section>

      <section id="start" className="mx-auto max-w-[640px] px-4 py-20 md:px-8 lg:py-28">
        <h2 className="font-[family-name:var(--font-kith-display)] text-3xl font-semibold tracking-tight md:text-4xl">
          Mac, iOS, and web.
        </h2>
        <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Personal is free. Shared notebooks are extra when you need them.
        </p>
        <div className="mt-8">
          <WaitlistForm id="studio-waitlist" variant="studio" cta={cta} />
        </div>
      </section>

      <footer className="border-t border-zinc-400/80 pb-28 dark:border-zinc-700">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <span className="flex items-center gap-2 text-sm font-medium">
            <KithMark className="h-4 w-4 text-[#c45c3e] dark:text-[#e08b72]" />
            Kith
          </span>
          <div className="flex flex-wrap gap-6 text-sm text-zinc-600 dark:text-zinc-400">
            <a href="#practice" className="hover:text-zinc-950 dark:hover:text-white">
              Practice
            </a>
            <a href="#start" className="hover:text-zinc-950 dark:hover:text-white">
              {cta}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
