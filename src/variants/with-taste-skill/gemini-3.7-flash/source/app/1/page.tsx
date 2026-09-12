import {
  ArrowRight,
  LockSimple,
  MagnifyingGlass,
  PencilSimple,
  Tray,
} from "@phosphor-icons/react/ssr";
import { KithMark } from "../../components/kith-mark";
import { LogoWall } from "../../components/logo-wall";
import { Photo } from "../../components/photo";
import { Reveal } from "../../components/reveal";
import { SiteNav } from "../../components/site-nav";

const cta = "Start writing";

export default function Page() {
  return (
    <div id="top">
      <SiteNav
        brand={
          <span className="flex items-center gap-2 text-[15px] font-medium tracking-tight">
            <KithMark className="h-5 w-5" />
            Kith
          </span>
        }
        links={[
          { href: "#method", label: "Method" },
          { href: "#privacy", label: "Privacy" },
        ]}
        cta={{ href: "#start", label: cta }}
        barClassName="border-b border-zinc-200/80 bg-zinc-50/90 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/90"
        linkClassName="text-sm text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
        ctaClassName="inline-flex items-center rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium whitespace-nowrap text-white transition hover:bg-emerald-800 active:scale-[0.98] dark:bg-emerald-400 dark:text-zinc-950 dark:hover:bg-emerald-300"
        iconClassName="text-zinc-900 dark:text-zinc-100"
        overlayClassName="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950"
      />

      <section className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-[1400px] grid-cols-1 items-center gap-10 px-4 pt-10 pb-12 md:px-8 lg:grid-cols-12 lg:gap-12 lg:pt-16">
        <div className="lg:col-span-5">
          <h1 className="max-w-[18ch] text-4xl leading-[1.05] font-semibold tracking-tight text-zinc-950 md:text-5xl lg:text-6xl dark:text-zinc-50">
            Find the note you forgot you wrote.
          </h1>
          <p className="mt-5 max-w-[36ch] text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Kith links your notes as you write, then hands the right one back.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#start"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 text-sm font-medium whitespace-nowrap text-white transition hover:bg-emerald-800 active:scale-[0.98] dark:bg-emerald-400 dark:text-zinc-950 dark:hover:bg-emerald-300"
            >
              {cta}
              <ArrowRight size={16} weight="regular" />
            </a>
            <a
              href="#method"
              className="inline-flex items-center rounded-lg border border-zinc-300 px-5 py-3 text-sm font-medium whitespace-nowrap text-zinc-800 transition hover:bg-zinc-100 active:scale-[0.98] dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
            >
              Method
            </a>
          </div>
        </div>
        <Photo
          src="/variants/with-taste-skill/gemini-3.7-flash/kith/kith-1-desk.png"
          alt="A quiet grey desk with a closed notebook and a pencil in overcast daylight"
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="aspect-[16/10] w-full rounded-lg lg:col-span-7 lg:aspect-[5/4]"
        />
      </section>

      <section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-[1400px] px-4 py-12 md:px-8">
          <p className="sr-only">Used by</p>
          <LogoWall className="text-zinc-400 dark:text-zinc-600" />
        </div>
      </section>

      <section
        id="method"
        className="border-t border-zinc-200 dark:border-zinc-800"
      >
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-4 py-20 md:px-8 lg:grid-cols-12 lg:py-28">
          <div className="flex flex-col gap-12 lg:col-span-5">
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Capture
              </h2>
              <p className="mt-3 max-w-[42ch] text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                Drop a thought from the keyboard, a share sheet, or a clipped
                page. It lands in one inbox.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Link
              </h2>
              <p className="mt-3 max-w-[42ch] text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                Related notes connect as you write. You do not maintain a filing
                system by hand.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Recall
              </h2>
              <p className="mt-3 max-w-[42ch] text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                Each morning, Kith brings back the note that matches what you
                are working on.
              </p>
            </Reveal>
          </div>
          <Photo
            src="/variants/with-taste-skill/gemini-3.7-flash/kith/kith-1-notes.png"
            alt="Index cards on a wall joined by pale string into a sparse network"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="aspect-[4/3] w-full rounded-lg lg:col-span-7 lg:aspect-auto lg:min-h-full"
          />
        </div>
      </section>

      <section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 lg:py-28">
          <Reveal>
            <h2 className="max-w-[16ch] text-3xl font-semibold tracking-tight md:text-4xl">
              Built for the pile you already have.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-12">
            <Photo
              src="/variants/with-taste-skill/gemini-3.7-flash/kith/kith-1-inbox.png"
              alt="A pale metal letter tray on a zinc desk beside a window"
              sizes="(max-width: 768px) 100vw, 58vw"
              className="aspect-[16/10] rounded-lg md:col-span-7"
            />
            <Reveal className="flex flex-col justify-end rounded-lg border border-zinc-200 bg-white p-6 md:col-span-5 dark:border-zinc-800 dark:bg-zinc-900">
              <PencilSimple
                size={22}
                weight="regular"
                className="text-emerald-700 dark:text-emerald-400"
              />
              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                Backlinks without the ritual
              </h3>
              <p className="mt-2 max-w-[40ch] text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                Mention a person, a project, or a book. Kith hangs the thread
                for you.
              </p>
            </Reveal>
            <Reveal
              delay={0.05}
              className="rounded-lg bg-emerald-700 p-6 text-white md:col-span-4 dark:bg-emerald-400 dark:text-zinc-950"
            >
              <Tray size={22} weight="regular" />
              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                A daily page
              </h3>
              <p className="mt-2 max-w-[36ch] text-base leading-relaxed text-emerald-50 dark:text-zinc-800">
                Yesterday, open loops, and one older note that still matters.
              </p>
            </Reveal>
            <Reveal
              delay={0.08}
              className="flex flex-col justify-end rounded-lg border border-zinc-200 bg-white p-6 md:col-span-4 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <MagnifyingGlass
                size={22}
                weight="regular"
                className="text-emerald-700 dark:text-emerald-400"
              />
              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                Search that reads
              </h3>
              <p className="mt-2 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                Ask in plain language. Results come from your notes, not the
                open web.
              </p>
            </Reveal>
            <Photo
              src="/variants/with-taste-skill/gemini-3.7-flash/kith/kith-1-window.png"
              alt="Hands opening a slim grey notebook on a stone windowsill"
              sizes="(max-width: 768px) 100vw, 33vw"
              className="aspect-[4/3] rounded-lg md:col-span-4"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 dark:border-zinc-800">
        <Reveal className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 lg:py-28">
          <blockquote className="max-w-[32ch] text-2xl leading-snug font-medium tracking-tight md:text-3xl">
            “I stopped losing quotes across six docs. Kith keeps the thread.”
          </blockquote>
          <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
            Mira Solano, research editor at Northwind
          </p>
        </Reveal>
      </section>

      <section
        id="privacy"
        className="border-t border-zinc-200 dark:border-zinc-800"
      >
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-4 py-20 md:px-8 lg:grid-cols-2 lg:py-24">
          <div>
            <LockSimple
              size={22}
              weight="regular"
              className="text-emerald-700 dark:text-emerald-400"
            />
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Notes stay on your machines.
            </h2>
            <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Local-first on Mac and iOS. Sync is optional and encrypted. Kith
              does not train models on what you write.
            </p>
          </div>
          <div id="start" className="lg:pt-8">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Personal is free. Pro is $8 a month for shared notebooks.
            </p>
            <a
              href="mailto:hello@kith.app"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-800 active:scale-[0.98] dark:bg-emerald-400 dark:text-zinc-950 dark:hover:bg-emerald-300"
            >
              {cta}
              <ArrowRight size={16} weight="regular" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 pb-28 dark:border-zinc-800">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <span className="flex items-center gap-2 text-sm font-medium">
            <KithMark className="h-4 w-4" />
            Kith
          </span>
          <div className="flex flex-wrap gap-6 text-sm text-zinc-600 dark:text-zinc-400">
            <a href="#privacy" className="hover:text-zinc-950 dark:hover:text-white">
              Privacy
            </a>
            <a href="mailto:hello@kith.app" className="hover:text-zinc-950 dark:hover:text-white">
              {cta}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
