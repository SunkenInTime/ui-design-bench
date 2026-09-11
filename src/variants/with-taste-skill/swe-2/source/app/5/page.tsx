import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Outfit, Caveat } from "next/font/google";
import { ArrowRight } from "@phosphor-icons/react/ssr";

export const metadata: Metadata = {
  title: "Commonplace - Calm",
};

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600"] });
const hand = Caveat({ subsets: ["latin"], weight: ["500", "600"] });

const bg = "#f9faf8";
const ink = "#1f2921";
const sub = "#66736a";
const green = "#2c7a5b";
const tint = "#eef4f0";
const line = "#e3e8e3";

function NoteCard({
  title,
  children,
  className,
  delay = "0s",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  delay?: string;
}) {
  return (
    <div
      className={`calm-float rounded-2xl border bg-white p-5 shadow-[0_20px_45px_-24px_rgba(31,41,33,0.25)] ${className ?? ""}`}
      style={{ borderColor: line, animationDelay: delay }}
    >
      <p className={`${hand.className} text-[20px] leading-6`} style={{ color: ink }}>
        {title}
      </p>
      <div className="mt-2.5 text-[12.5px] leading-6" style={{ color: sub }}>
        {children}
      </div>
    </div>
  );
}

export default function CalmPage() {
  return (
    <div
      className={`${outfit.className} min-h-[100dvh]`}
      style={{ background: bg, color: ink }}
    >
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .calm-float { animation: calm-drift 7s ease-in-out infinite; }
          @keyframes calm-drift { 0%,100% { translate: 0 0 } 50% { translate: 0 -8px } }
        }
      `}</style>

      {/* Nav */}
      <header className="mx-auto max-w-[1200px] px-6 pt-5">
        <div
          className="flex h-14 items-center justify-between rounded-full border bg-white/80 px-5 shadow-[0_10px_30px_-18px_rgba(31,41,33,0.3)] backdrop-blur-md"
          style={{ borderColor: line }}
        >
          <span className="text-[15.5px] font-semibold tracking-[-0.01em]">
            commonplace
          </span>
          <nav className="hidden items-center gap-7 text-[13.5px] md:flex" style={{ color: sub }}>
            <Link href="#feels" className="transition hover:text-[#1f2921]">
              How it feels
            </Link>
            <Link href="#holds" className="transition hover:text-[#1f2921]">
              What it holds
            </Link>
          </nav>
          <Link
            href="#start"
            className="rounded-full px-4 py-2 text-[13px] font-semibold text-white transition active:scale-[0.98]"
            style={{ background: green }}
          >
            Start your commonplace
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 px-6 pt-16 pb-24 lg:grid-cols-2 lg:pt-20">
        <div>
          <h1 className="max-w-[15ch] text-[42px] leading-[1.06] font-semibold tracking-[-0.025em] md:text-[58px]">
            A softer place for your thinking
          </h1>
          <p className="mt-6 max-w-[44ch] text-[16px] leading-8" style={{ color: sub }}>
            Commonplace holds your notes, links them quietly, and brings them
            back when they can help.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              href="#start"
              className="rounded-full px-7 py-3.5 text-[14.5px] font-semibold text-white transition active:scale-[0.98]"
              style={{ background: green }}
            >
              Start your commonplace
            </Link>
            <Link
              href="#feels"
              className="inline-flex items-center gap-1.5 text-[14.5px] font-medium transition"
              style={{ color: green }}
            >
              See how it feels
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Collage */}
        <div className="relative mx-auto h-[420px] w-full max-w-[480px]">
          <NoteCard
            title="gift ideas for Marta"
            className="absolute top-0 left-0 w-[240px] -rotate-3"
            delay="0s"
          >
            ceramic bowl, the good one
            <br />
            <span style={{ color: green }}>linked to: things she admired</span>
          </NoteCard>
          <NoteCard
            title="thought on a walk"
            className="absolute top-16 right-0 w-[230px] rotate-2"
            delay="1.4s"
          >
            the essay is about patience, not gardens
          </NoteCard>
          <div
            className="calm-float absolute bottom-6 left-10 w-[220px] -rotate-2 overflow-hidden rounded-2xl border shadow-[0_20px_45px_-24px_rgba(31,41,33,0.25)]"
            style={{ borderColor: line, animationDelay: "2.6s" }}
          >
            <Image
              src="https://picsum.photos/seed/calm-windowsill/440/300"
              alt="A quiet windowsill with morning light"
              width={440}
              height={300}
              className="h-[150px] w-full object-cover"
            />
            <p className="bg-white px-5 py-3 text-[12px]" style={{ color: sub }}>
              saved from the walk, 7:40 am
            </p>
          </div>
          <NoteCard
            title="meeting notes"
            className="absolute right-6 bottom-0 w-[200px] rotate-1"
            delay="3.8s"
          >
            two paragraphs first, then decide
          </NoteCard>
        </div>
      </section>

      {/* Pill cloud */}
      <section id="holds" className="mx-auto max-w-[1200px] px-6 pb-24">
        <h2 className="text-center text-[26px] font-semibold tracking-[-0.02em] md:text-[32px]">
          Room for everything you think
        </h2>
        <div className="mx-auto mt-10 flex max-w-[720px] flex-wrap justify-center gap-2.5">
          {[
            "first drafts",
            "gift ideas",
            "grudges",
            "quotes to keep",
            "meeting notes",
            "3 a.m. ideas",
            "books to re-lend",
            "recipes, amended",
            "things Marta admired",
            "dreams",
            "essay seeds",
            "open questions",
          ].map((t) => (
            <span
              key={t}
              className="rounded-full border bg-white px-4 py-2 text-[13.5px] transition"
              style={{ borderColor: line, color: ink }}
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Features: asymmetric soft panels */}
      <section id="feels" className="border-t" style={{ borderColor: line, background: tint }}>
        <div className="mx-auto max-w-[1200px] px-6 py-24">
          <p className="text-[13px] font-semibold" style={{ color: green }}>
            why it feels different
          </p>
          <h2 className="mt-3 max-w-[22ch] text-[28px] leading-[1.15] font-semibold tracking-[-0.02em] md:text-[36px]">
            Nothing here asks you to organize
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-5">
            <div
              className="rounded-2xl border bg-white p-8 md:col-span-3"
              style={{ borderColor: line }}
            >
              <h3 className="text-[20px] font-semibold tracking-[-0.01em]">
                One inbox, no decisions
              </h3>
              <p className="mt-4 max-w-[52ch] text-[15px] leading-7" style={{ color: sub }}>
                Every note lands in the same gentle pile. There is no folder to
                choose, no structure to maintain, nothing to feel guilty about.
                The links do the filing later.
              </p>
            </div>
            <div
              className="rounded-2xl border p-8 md:col-span-2"
              style={{ borderColor: line, background: "#e4efe9" }}
            >
              <h3 className="text-[20px] font-semibold tracking-[-0.01em]">
                Notes come back softly
              </h3>
              <p className="mt-4 text-[15px] leading-7" style={{ color: "#43584b" }}>
                While you write, related notes wait at the edge of the page.
                No badges, no counts, no red dots.
              </p>
            </div>
            <div
              className="rounded-2xl border p-8 md:col-span-2"
              style={{ borderColor: line, background: "#e4efe9" }}
            >
              <h3 className="text-[20px] font-semibold tracking-[-0.01em]">
                Private by default
              </h3>
              <p className="mt-4 text-[15px] leading-7" style={{ color: "#43584b" }}>
                Plain files on your device. Sync is encrypted, export is a
                folder copy.
              </p>
            </div>
            <div
              className="rounded-2xl border bg-white p-8 md:col-span-3"
              style={{ borderColor: line }}
            >
              <h3 className="text-[20px] font-semibold tracking-[-0.01em]">
                Search that forgives
              </h3>
              <p className="mt-4 max-w-[52ch] text-[15px] leading-7" style={{ color: sub }}>
                Remember it wrong and still find it. &ldquo;That thing about
                patience and gardens&rdquo; is a complete search.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <blockquote className="mx-auto max-w-[620px] text-center">
          <p className="text-[22px] leading-[1.4] font-medium tracking-[-0.01em] md:text-[26px]">
            &ldquo;It is the first notes app that feels like a room I want to
            sit in.&rdquo;
          </p>
          <footer className="mt-6 text-[13.5px]" style={{ color: sub }}>
            Ruth Adler, book editor
          </footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section id="start" className="mx-auto max-w-[1200px] px-6 pb-24">
        <div
          className="rounded-3xl px-8 py-16 text-center md:py-20"
          style={{ background: green }}
        >
          <h2 className="text-[30px] font-semibold tracking-[-0.02em] text-white md:text-[40px]">
            Keep what you think
          </h2>
          <p className="mx-auto mt-4 max-w-[42ch] text-[15px] leading-7" style={{ color: "#cfe4d8" }}>
            Free for your first five hundred notes. Quietly priced after that.
          </p>
          <Link
            href="/with-taste-skill/swe-2/5"
            className="mt-9 inline-block rounded-full bg-white px-8 py-3.5 text-[14.5px] font-semibold transition active:scale-[0.98]"
            style={{ color: green }}
          >
            Start your commonplace
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t" style={{ borderColor: line }}>
        <div
          className="mx-auto flex max-w-[1200px] flex-col gap-3 px-6 py-10 text-[12.5px] md:flex-row md:items-center md:justify-between"
          style={{ color: sub }}
        >
          <span style={{ color: ink }}>commonplace</span>
          <span>A second brain, gently kept</span>
          <span>&copy; 2026</span>
        </div>
      </footer>
    </div>
  );
}
