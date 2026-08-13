import { ArrowRight, LockSimple } from "@phosphor-icons/react/ssr";
import { HorizontalPan } from "../../components/horizontal-pan";
import { KithMark } from "../../components/kith-mark";
import { Photo } from "../../components/photo";
import { Reveal } from "../../components/reveal";
import { SiteNav } from "../../components/site-nav";

const cta = "Open Kith";

const slides = [
  {
    src: "/variants/with-taste-skill/gemini-3.7-flash/kith/kith-4-lamp.png",
    alt: "A dark desk lit by a single cool architect lamp, laptop closed",
    title: "Inbox",
    body: "Everything lands in one stream. You sort later, or never.",
  },
  {
    src: "/variants/with-taste-skill/gemini-3.7-flash/kith/kith-4-network.png",
    alt: "A dark gallery with a hanging constellation of cool blue filaments",
    title: "Graph",
    body: "Every link is a path. Walk from a person to a project to a page.",
  },
  {
    src: "/variants/with-taste-skill/gemini-3.7-flash/kith/kith-4-nodes.png",
    alt: "Macro view of steel wire connecting wool pins on charcoal felt",
    title: "Daily",
    body: "A short list drawn from your graph, not from a streak calendar.",
  },
] as const;

export default function Page() {
  return (
    <div id="top">
      <SiteNav
        brand={
          <span className="flex items-center gap-2 font-kith-mono text-[13px] font-medium">
            <KithMark className="h-5 w-5" />
            KITH
          </span>
        }
        links={[
          { href: "#surfaces", label: "Surfaces" },
          { href: "#privacy", label: "Privacy" },
        ]}
        cta={{ href: "#start", label: cta }}
        barClassName="border-b border-zinc-300 bg-zinc-100/90 backdrop-blur-md dark:border-zinc-800 dark:bg-[#0e1116]/90"
        linkClassName="font-kith-mono text-[13px] text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
        ctaClassName="inline-flex items-center rounded-md bg-[#3f6f94] px-4 py-2 font-kith-mono text-[13px] font-medium whitespace-nowrap text-white transition hover:bg-[#355f7e] active:scale-[0.98] dark:bg-[#7eafd4] dark:text-[#0e1116] dark:hover:bg-[#9bc2de]"
        iconClassName="text-zinc-900 dark:text-zinc-100"
        overlayClassName="border-t border-zinc-300 bg-zinc-100 dark:border-zinc-800 dark:bg-[#0e1116]"
      />

      <section className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-[1400px] grid-cols-1 items-center gap-10 px-4 pt-10 pb-12 md:px-8 lg:grid-cols-12 lg:pt-14">
        <div className="lg:col-span-5">
          <h1 className="max-w-[16ch] text-4xl leading-[1.05] font-medium tracking-tight md:text-5xl lg:text-6xl">
            Your notes, as a graph you can walk.
          </h1>
          <p className="mt-5 max-w-[36ch] text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Write in plain text. Kith draws the links and keeps recall instant.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#start"
              className="inline-flex items-center gap-2 rounded-md bg-[#3f6f94] px-5 py-3 text-sm font-medium whitespace-nowrap text-white transition hover:bg-[#355f7e] active:scale-[0.98] dark:bg-[#7eafd4] dark:text-[#0e1116] dark:hover:bg-[#9bc2de]"
            >
              {cta}
              <ArrowRight size={16} weight="regular" />
            </a>
            <a
              href="#surfaces"
              className="inline-flex items-center rounded-md border border-zinc-400 px-5 py-3 text-sm font-medium whitespace-nowrap text-zinc-800 transition hover:bg-zinc-200 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-900"
            >
              Surfaces
            </a>
          </div>
        </div>
        <Photo
          src="/variants/with-taste-skill/gemini-3.7-flash/kith/kith-4-network.png"
          alt="A figure facing a hanging map of cool blue points of light"
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="aspect-[16/10] w-full rounded-md lg:col-span-7 lg:aspect-[5/4]"
        />
      </section>

      <section className="border-t border-zinc-300 dark:border-zinc-800">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-4 py-20 md:grid-cols-2 md:px-8 lg:py-28">
          <Reveal>
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
              On the page
            </h2>
            <ul className="mt-8 space-y-6">
              <li>
                <p className="font-kith-mono text-[12px] text-[#3f6f94] dark:text-[#7eafd4]">
                  Inbox
                </p>
                <p className="mt-1 max-w-[46ch] text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  A single stream for typed notes, shares, and clips. No folders
                  at the door.
                </p>
              </li>
              <li>
                <p className="font-kith-mono text-[12px] text-[#3f6f94] dark:text-[#7eafd4]">
                  Editor
                </p>
                <p className="mt-1 max-w-[46ch] text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Markdown with backlinks inline. The file on disk is the source
                  of truth.
                </p>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
              In the graph
            </h2>
            <ul className="mt-8 space-y-6">
              <li>
                <p className="font-kith-mono text-[12px] text-[#3f6f94] dark:text-[#7eafd4]">
                  Paths
                </p>
                <p className="mt-1 max-w-[46ch] text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Click a name, a book, or a project. Adjacent notes fan out
                  without a search.
                </p>
              </li>
              <li>
                <p className="font-kith-mono text-[12px] text-[#3f6f94] dark:text-[#7eafd4]">
                  Daily
                </p>
                <p className="mt-1 max-w-[46ch] text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Three notes chosen from your own links. Useful, not
                  motivational.
                </p>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <div id="surfaces">
        <HorizontalPan>
          {slides.map((slide) => (
            <article
              key={slide.title}
              className="flex w-full shrink-0 flex-col justify-center gap-8 px-4 py-16 md:h-full md:w-screen md:flex-row md:items-center md:gap-16 md:px-16"
            >
              <Photo
                src={slide.src}
                alt={slide.alt}
                sizes="(max-width: 768px) 100vw, 48vw"
                className="aspect-[4/3] w-full rounded-md md:max-w-xl"
              />
              <div className="max-w-md">
                <h2 className="text-4xl font-medium tracking-tight md:text-6xl">
                  {slide.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {slide.body}
                </p>
              </div>
            </article>
          ))}
        </HorizontalPan>
      </div>

      <section
        id="privacy"
        className="border-t border-zinc-300 dark:border-zinc-800"
      >
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-4 py-20 md:px-8 lg:py-28">
          <LockSimple
            size={22}
            weight="regular"
            className="text-[#3f6f94] dark:text-[#7eafd4]"
          />
          <h2 className="max-w-[16ch] text-3xl font-medium tracking-tight md:text-5xl">
            Local files. Optional sync. No training on your words.
          </h2>
          <div id="start">
            <a
              href="mailto:hello@kith.app"
              className="inline-flex items-center gap-2 rounded-md bg-[#3f6f94] px-5 py-3 text-sm font-medium whitespace-nowrap text-white transition hover:bg-[#355f7e] active:scale-[0.98] dark:bg-[#7eafd4] dark:text-[#0e1116] dark:hover:bg-[#9bc2de]"
            >
              {cta}
              <ArrowRight size={16} weight="regular" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-300 pb-28 dark:border-zinc-800">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <span className="flex items-center gap-2 font-kith-mono text-[13px]">
            <KithMark className="h-4 w-4" />
            KITH
          </span>
          <div className="flex flex-wrap gap-6 font-kith-mono text-[13px] text-zinc-600 dark:text-zinc-400">
            <a href="#privacy" className="hover:text-zinc-950 dark:hover:text-white">
              Privacy
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
