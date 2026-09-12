import { KithMark } from "../../components/kith-mark";
import { Photo } from "../../components/photo";
import { Reveal } from "../../components/reveal";
import { SiteNav } from "../../components/site-nav";
import { WaitlistForm } from "../../components/waitlist-form";

const cta = "Request a seat";

export default function Page() {
  return (
    <div id="top">
      <SiteNav
        brand={
          <span className="flex items-center gap-2 font-kith-display text-[17px] font-medium">
            <KithMark className="h-4 w-4" />
            Kith
          </span>
        }
        links={[
          { href: "#features", label: "Notebook" },
          { href: "#archive", label: "Archive" },
        ]}
        cta={{ href: "#start", label: cta }}
        barClassName="border-b border-[#cfd6d3] bg-[#eef1f3]/95 dark:border-zinc-800 dark:bg-[#121614]/95"
        linkClassName="text-sm text-[#3d4a45] transition hover:text-[#1c2421] dark:text-zinc-400 dark:hover:text-white"
        ctaClassName="inline-flex items-center bg-[#2c5a4f] px-4 py-2 text-sm font-medium whitespace-nowrap text-[#f3f4f6] transition hover:bg-[#244c43] active:translate-y-[1px] dark:bg-[#8fbfb3] dark:text-[#121614] dark:hover:bg-[#a9d0c6]"
        iconClassName="text-[#1c2421] dark:text-zinc-100"
        overlayClassName="border-t border-[#cfd6d3] bg-[#eef1f3] dark:border-zinc-800 dark:bg-[#121614]"
      />

      <section className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-[900px] flex-col justify-center px-4 pt-12 pb-16 text-center md:px-8 lg:pt-16">
        <h1 className="font-kith-display text-4xl leading-[1.12] font-medium tracking-tight md:text-5xl lg:text-6xl">
          Everything you have read,{" "}
          <em className="font-kith-display pb-1 leading-[1.12] font-medium italic">
            kept
          </em>{" "}
          in reach.
        </h1>
        <p className="mx-auto mt-6 max-w-[42ch] text-base leading-relaxed text-[#4a5852] dark:text-zinc-400">
          A notebook that files itself, then reminds you when a thought returns.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#start"
            className="inline-flex items-center bg-[#2c5a4f] px-5 py-3 text-sm font-medium whitespace-nowrap text-[#f3f4f6] transition hover:bg-[#244c43] active:translate-y-[1px] dark:bg-[#8fbfb3] dark:text-[#121614] dark:hover:bg-[#a9d0c6]"
          >
            {cta}
          </a>
          <a
            href="#features"
            className="inline-flex items-center border border-[#9aa7a1] px-5 py-3 text-sm font-medium whitespace-nowrap text-[#1c2421] transition hover:bg-white/60 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            Notebook
          </a>
        </div>
      </section>

      <section className="px-4 md:px-8">
        <div className="mx-auto max-w-[1400px]">
          <Photo
            src="/variants/with-taste-skill/gemini-3.7-flash/kith/kith-3-portrait.png"
            alt="A woman in a forest-green sweater standing beside a tall stone bookshelf"
            priority
            sizes="(max-width: 1400px) 100vw, 1400px"
            className="mx-auto aspect-[4/5] max-w-xl md:aspect-[3/4]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[800px] px-4 py-20 md:px-8 lg:py-28">
        <blockquote className="font-kith-display text-3xl leading-snug md:text-4xl">
          “I treat it like a commonplace book that can answer me in the
          morning.”
        </blockquote>
        <p className="mt-6 text-sm text-[#4a5852] dark:text-zinc-400">
          Ada Ferrer, essayist
        </p>
      </section>

      <section
        id="features"
        className="border-y border-[#cfd6d3] dark:border-zinc-800"
      >
        <div className="mx-auto max-w-[800px] px-4 py-20 md:px-8 lg:py-28">
          <Reveal>
            <h2 className="font-kith-display text-3xl md:text-5xl">
              Write first. Structure later, if ever.
            </h2>
            <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-[#4a5852] dark:text-zinc-400">
              Most notebooks ask you to choose a folder before the thought is
              finished. Kith stores the line, then finds its neighbors.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="mt-16">
            <h2 className="font-kith-display text-3xl md:text-5xl">
              A morning page that is not a journal prompt.
            </h2>
            <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-[#4a5852] dark:text-zinc-400">
              Three notes from your own archive. No streak. No mood tracker. Just
              the pages that still have work to do.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="archive" className="mx-auto max-w-[1400px] px-4 py-20 md:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          <Photo
            src="/variants/with-taste-skill/gemini-3.7-flash/kith/kith-3-spread.png"
            alt="An open cloth notebook on a cool stone table with a spruce sprig"
            sizes="(max-width: 768px) 100vw, 58vw"
            className="aspect-[16/10] md:col-span-7"
          />
          <Photo
            src="/variants/with-taste-skill/gemini-3.7-flash/kith/kith-3-shelves.png"
            alt="Grey archival boxes on metal shelves in cool institutional light"
            sizes="(max-width: 768px) 100vw, 42vw"
            className="aspect-[4/5] md:col-span-5"
          />
          <Photo
            src="/variants/with-taste-skill/gemini-3.7-flash/kith/kith-3-room.png"
            alt="A long reading room with tall windows and forest-green chairs"
            sizes="100vw"
            className="aspect-[16/7] md:col-span-12"
          />
        </div>
      </section>

      <section
        id="start"
        className="mx-auto max-w-[640px] px-4 py-20 md:px-8 lg:py-28"
      >
        <h2 className="font-kith-display text-3xl md:text-4xl">
          Seats open in small groups.
        </h2>
        <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-[#4a5852] dark:text-zinc-400">
          Mac, iOS, and web. We write when it is your turn. No drip campaign.
        </p>
        <div className="mt-8">
          <WaitlistForm id="seat" variant="paper" cta={cta} />
        </div>
      </section>

      <footer className="border-t border-[#cfd6d3] pb-28 dark:border-zinc-800">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <span className="flex items-center gap-2 font-kith-display text-[17px] font-medium">
            <KithMark className="h-4 w-4" />
            Kith
          </span>
          <div className="flex flex-wrap gap-6 text-sm text-[#4a5852] dark:text-zinc-400">
            <a href="#archive" className="hover:text-[#1c2421] dark:hover:text-white">
              Archive
            </a>
            <a href="#start" className="hover:text-[#1c2421] dark:hover:text-white">
              {cta}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
