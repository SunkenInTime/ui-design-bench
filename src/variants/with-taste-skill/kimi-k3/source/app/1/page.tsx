import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  PenNib,
  Link as LinkIcon,
  CalendarCheck,
  FileMd,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/variants/with-taste-skill/kimi-k3/source/components/Reveal";

export const metadata: Metadata = {
  title: "Marginalia - a commonplace book for your mind",
  description:
    "Iteration 1: editorial, calm, paper-like. Marginalia turns daily notes into a living archive that resurfaces ideas when they matter.",
};

const accent = "#2f5d43";

const features = [
  {
    icon: PenNib,
    title: "Capture without friction",
    body: "One keystroke opens a fresh page, online or off. Nothing stands between a thought and the page.",
  },
  {
    icon: LinkIcon,
    title: "Links that work both ways",
    body: "Reference any note from any other. Marginalia keeps the backlinks, so ideas find each other later.",
  },
  {
    icon: CalendarCheck,
    title: "Resurfacing, on a schedule",
    body: "A short daily review brings old notes back in rotation, spaced so you remember instead of reread.",
  },
  {
    icon: FileMd,
    title: "Plain files, owned forever",
    body: "Every note is a Markdown file in a folder you control. Export, sync, or leave whenever you like.",
  },
];

const reviewSteps = [
  {
    verb: "Write",
    body: "Jot the day’s fragments without organizing them. Order is a later problem.",
  },
  {
    verb: "Link",
    body: "Connect each fragment to one older note. Two sentences is enough.",
  },
  {
    verb: "Review",
    body: "Read the five notes Marginalia resurfaces each morning. Keep what still rings true.",
  },
];

export default function IterationOne() {
  return (
    <main className="min-h-[100dvh]">
      {/* Nav */}
      <header className="border-b border-[#21211c]/15">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="#" className="f-ebg text-2xl italic tracking-tight">
            Marginalia
          </Link>
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#method" className="transition hover:text-[#2f5d43]">
              Method
            </a>
            <a href="#review" className="transition hover:text-[#2f5d43]">
              Daily review
            </a>
            <a href="#start" className="transition hover:text-[#2f5d43]">
              Sign in
            </a>
          </nav>
          <a
            href="#start"
            className="bg-[#2f5d43] px-4 py-2 text-sm font-medium text-[#f7f7f3] transition hover:bg-[#264a36] active:translate-y-px"
          >
            Start free
          </a>
        </div>
      </header>

      {/* Hero: asymmetric split, text left / portrait right */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-12 lg:py-0">
        <div className="lg:col-span-7">
          <Reveal>
            <h1 className="f-ebg max-w-[14ch] text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Think slower. <em>Remember</em> more.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-[#4a4a42] md:text-lg">
              Marginalia turns daily notes into a living archive that quietly
              resurfaces ideas when they matter.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#start"
                className="bg-[#2f5d43] px-6 py-3 text-sm font-medium text-[#f7f7f3] transition hover:bg-[#264a36] active:translate-y-px"
              >
                Start free
              </a>
              <a
                href="#method"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#21211c] underline decoration-[#21211c]/30 underline-offset-4 transition hover:decoration-[#2f5d43]"
              >
                Read the method
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-5">
          <Reveal delay={0.15}>
            <figure>
              <Image
                src="https://picsum.photos/id/24/1000/1250"
                alt="An open book resting on a wooden table"
                width={1000}
                height={1250}
                priority
                className="aspect-[4/5] w-full border border-[#21211c]/15 object-cover"
              />
              <figcaption className="mt-3 text-xs text-[#6b6b60]">
                Notes that stay readable years after you write them.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Stat strip */}
      <section className="border-y border-[#21211c]/15">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-3">
          {[
            ["2019", "founded as a research tool"],
            ["38k", "writers keep daily notes"],
            ["2.1M", "links between notes so far"],
          ].map(([figure, label]) => (
            <div key={label}>
              <p className="f-ebg text-4xl" style={{ color: accent }}>
                {figure}
              </p>
              <p className="mt-1 text-sm text-[#4a4a42]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The method: ruled feature rows */}
      <section id="method" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#2f5d43]">
            The method
          </p>
          <h2 className="f-ebg mt-4 max-w-[20ch] text-4xl leading-[1.1] tracking-tight md:text-5xl">
            Four habits, kept for you
          </h2>
        </Reveal>
        <div className="mt-14 border-t border-[#21211c]/15">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="grid grid-cols-1 items-start gap-4 border-b border-[#21211c]/15 py-8 md:grid-cols-12 md:items-center">
                <div className="flex items-center gap-4 md:col-span-5">
                  <f.icon size={22} weight="light" color={accent} />
                  <h3 className="f-ebg text-2xl tracking-tight">{f.title}</h3>
                </div>
                <p className="max-w-[52ch] text-sm leading-relaxed text-[#4a4a42] md:col-span-7">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Daily review: image + text split */}
      <section id="review" className="border-t border-[#21211c]/15 bg-[#f1f1ea]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <Reveal>
            <Image
              src="https://picsum.photos/id/175/1100/900"
              alt="A clock face in black and white"
              width={1100}
              height={900}
              className="aspect-[11/9] w-full border border-[#21211c]/15 object-cover"
            />
          </Reveal>
          <div>
            <Reveal>
              <h2 className="f-ebg max-w-[18ch] text-4xl leading-[1.1] tracking-tight md:text-5xl">
                The daily review takes ten minutes
              </h2>
            </Reveal>
            <div className="mt-10">
              {reviewSteps.map((s, i) => (
                <Reveal key={s.verb} delay={i * 0.06}>
                  <div
                    className={`grid grid-cols-[6rem_1fr] gap-4 py-5 ${
                      i > 0 ? "border-t border-[#21211c]/15" : ""
                    }`}
                  >
                    <p className="f-ebg text-xl italic" style={{ color: accent }}>
                      {s.verb}
                    </p>
                    <p className="max-w-[48ch] text-sm leading-relaxed text-[#4a4a42]">
                      {s.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="mx-auto max-w-4xl px-6 py-28 text-center">
        <Reveal>
          <blockquote className="f-ebg text-3xl leading-[1.25] tracking-tight md:text-4xl">
            “I stopped losing ideas. Marginalia hands them back at the exact
            moment they become useful.”
          </blockquote>
          <p className="mt-8 text-sm text-[#4a4a42]">
            Ingrid Sollie, research lead at Fieldnote Institute
          </p>
        </Reveal>
      </section>

      {/* Final CTA + footer */}
      <section id="start" className="border-t border-[#21211c]/15">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <Reveal>
            <h2 className="f-ebg mx-auto max-w-[18ch] text-4xl leading-[1.1] tracking-tight md:text-5xl">
              Keep a commonplace book
            </h2>
            <p className="mx-auto mt-5 max-w-[44ch] text-base leading-relaxed text-[#4a4a42]">
              Free for your first thousand notes. No card required, no lock-in
              ever.
            </p>
            <a
              href="#"
              className="mt-10 inline-block bg-[#2f5d43] px-8 py-3.5 text-sm font-medium text-[#f7f7f3] transition hover:bg-[#264a36] active:translate-y-px"
            >
              Start free
            </a>
          </Reveal>
        </div>
        <footer className="border-t border-[#21211c]/15">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="f-ebg text-xl italic">Marginalia</p>
              <p className="mt-2 max-w-[36ch] text-xs leading-relaxed text-[#6b6b60]">
                A second brain for people who reread their notes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-12 text-sm sm:grid-cols-3">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#6b6b60]">
                  Product
                </p>
                <a href="#method" className="transition hover:text-[#2f5d43]">Method</a>
                <a href="#review" className="transition hover:text-[#2f5d43]">Daily review</a>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#6b6b60]">
                  Company
                </p>
                <a href="#" className="transition hover:text-[#2f5d43]">About</a>
                <a href="#" className="transition hover:text-[#2f5d43]">Journal</a>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#6b6b60]">
                  Legal
                </p>
                <a href="#" className="transition hover:text-[#2f5d43]">Privacy</a>
                <a href="#" className="transition hover:text-[#2f5d43]">Terms</a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#21211c]/15">
            <p className="mx-auto max-w-6xl px-6 py-5 text-xs text-[#6b6b60]">
              © 2026 Marginalia
            </p>
          </div>
        </footer>
      </section>
    </main>
  );
}
