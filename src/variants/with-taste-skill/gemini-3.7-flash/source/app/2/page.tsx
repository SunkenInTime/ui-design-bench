import { ArrowRight } from "@phosphor-icons/react/ssr";
import { KithMark } from "../../components/kith-mark";
import { MagneticButton } from "../../components/magnetic-button";
import { Photo } from "../../components/photo";
import { Reveal } from "../../components/reveal";
import { SiteNav } from "../../components/site-nav";
import { WaitlistForm } from "../../components/waitlist-form";

const cta = "Get Kith";

export default function Page() {
  return (
    <div id="top">
      <div className="grain-overlay" aria-hidden="true" />
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
        barClassName="glass-approx"
        linkClassName="text-sm text-[#3a414a] transition hover:text-[#1b1f24] dark:text-zinc-300 dark:hover:text-white"
        ctaClassName="inline-flex items-center rounded-full bg-[#3d6d99] px-4 py-2 text-sm font-medium whitespace-nowrap text-white transition hover:bg-[#345d82] active:scale-[0.98] dark:bg-[#7eafd4] dark:text-[#121416] dark:hover:bg-[#9bc2de]"
        iconClassName="text-[#1b1f24] dark:text-zinc-100"
        overlayClassName="glass-approx"
      />

      <section className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-[1400px] grid-cols-1 items-end gap-10 px-4 pt-10 pb-12 md:px-8 lg:grid-cols-12 lg:items-center lg:pt-14">
        <div className="lg:col-span-5 lg:pb-6">
          <h1 className="max-w-[16ch] text-4xl leading-[1.05] font-medium tracking-tight md:text-5xl lg:text-6xl">
            A quieter place for what you know.
          </h1>
          <p className="mt-5 max-w-[34ch] text-base leading-relaxed text-[#4b5560] dark:text-zinc-400">
            Capture a thought once. Kith keeps it connected and easy to reopen.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <MagneticButton
              href="#start"
              className="inline-flex items-center gap-2 rounded-full bg-[#3d6d99] px-6 py-3 text-sm font-medium whitespace-nowrap text-white hover:bg-[#345d82] dark:bg-[#7eafd4] dark:text-[#121416] dark:hover:bg-[#9bc2de]"
            >
              {cta}
              <ArrowRight size={16} weight="regular" />
            </MagneticButton>
            <a
              href="#method"
              className="inline-flex items-center rounded-full border border-[#c5ccd4] px-6 py-3 text-sm font-medium whitespace-nowrap text-[#2a3038] transition hover:bg-white/70 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              Method
            </a>
          </div>
        </div>
        <Photo
          src="/variants/with-taste-skill/gemini-3.7-flash/kith/kith-2-chrome.png"
          alt="Smoked glass desk with a silver notebook and a glass of water at dusk"
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="aspect-[16/10] w-full rounded-2xl lg:col-span-7 lg:aspect-[5/4]"
        />
      </section>

      <section className="px-0">
        <Photo
          src="/variants/with-taste-skill/gemini-3.7-flash/kith/kith-2-interior.png"
          alt="A cool grey apartment library with smoked glass and a chrome lamp"
          sizes="100vw"
          className="aspect-[16/7] w-full md:aspect-[21/8]"
        />
      </section>

      <section id="method" className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 lg:py-28">
        <Reveal>
          <h2 className="max-w-[14ch] text-3xl font-medium tracking-tight md:text-5xl">
            Four jobs.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-12">
          <Reveal className="rounded-2xl bg-white/70 p-8 md:col-span-7 dark:bg-zinc-900/80">
            <h3 className="text-2xl font-medium tracking-tight">Capture</h3>
            <p className="mt-3 max-w-[42ch] text-base leading-relaxed text-[#4b5560] dark:text-zinc-400">
              A fast inbox on every device. Paste, dictate, or clip. Filing
              waits until later.
            </p>
          </Reveal>
          <Photo
            src="/variants/with-taste-skill/gemini-3.7-flash/kith/kith-2-hands.png"
            alt="A hand writing with a chrome pen on cool grey paper"
            sizes="(max-width: 768px) 100vw, 40vw"
            className="aspect-[4/3] rounded-2xl md:col-span-5"
          />
          <Reveal
            delay={0.05}
            className="rounded-2xl bg-[#3d6d99] p-8 text-white md:col-span-4 dark:bg-[#7eafd4] dark:text-[#121416]"
          >
            <h3 className="text-2xl font-medium tracking-tight">Connect</h3>
            <p className="mt-3 max-w-[36ch] text-base leading-relaxed text-blue-50 dark:text-[#1b242c]">
              Links appear as you write. People, projects, and books gather
              themselves.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="rounded-2xl bg-white/70 p-8 md:col-span-8 dark:bg-zinc-900/80">
            <h3 className="text-2xl font-medium tracking-tight">Recall</h3>
            <p className="mt-3 max-w-[42ch] text-base leading-relaxed text-[#4b5560] dark:text-zinc-400">
              A short morning note. One older thought, chosen because it still
              applies.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl bg-white/70 p-8 md:col-span-12 dark:bg-zinc-900/80 lg:col-span-12">
            <h3 className="text-2xl font-medium tracking-tight">Keep</h3>
            <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-[#4b5560] dark:text-zinc-400">
              Local files you can open without Kith. Export is markdown, always.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 lg:py-28">
        <Reveal>
          <blockquote className="max-w-[28ch] text-2xl leading-snug font-medium tracking-tight md:text-4xl">
            “It feels like a desk, not a feed. I open it and I can think.”
          </blockquote>
          <p className="mt-6 text-sm text-[#4b5560] dark:text-zinc-400">
            Eli Voss, product designer at Havel
          </p>
        </Reveal>
      </section>

      <section
        id="privacy"
        className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-4 py-20 md:px-8 lg:grid-cols-12 lg:py-28"
      >
        <div className="lg:col-span-6">
          <Photo
            src="/variants/with-taste-skill/gemini-3.7-flash/kith/kith-2-device.png"
            alt="Closed silver laptop on smoked glass beside a small chrome dish"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="aspect-[4/3] rounded-2xl"
          />
        </div>
        <div id="start" className="flex flex-col justify-center lg:col-span-6">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            Private by default.
          </h2>
          <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-[#4b5560] dark:text-zinc-400">
            Notes live on your devices first. iCloud or a folder you choose.
            Nothing is used to train a model.
          </p>
          <div className="mt-8">
            <WaitlistForm id="start-form" variant="luxury" cta={cta} />
          </div>
        </div>
      </section>

      <footer className="border-t border-[#d4d9de] pb-28 dark:border-zinc-800">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <span className="flex items-center gap-2 text-sm font-medium">
            <KithMark className="h-4 w-4" />
            Kith
          </span>
          <div className="flex flex-wrap gap-6 text-sm text-[#4b5560] dark:text-zinc-400">
            <a href="#privacy" className="hover:text-[#1b1f24] dark:hover:text-white">
              Privacy
            </a>
            <a href="#start" className="hover:text-[#1b1f24] dark:hover:text-white">
              {cta}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
