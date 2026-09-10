import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Archivo } from "next/font/google";

export const metadata: Metadata = {
  title: "Commonplace - Poster",
};

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
});

const paper = "#f2f1ec";
const ink = "#16150f";
const orange = "#f04a00";
const sub = "#5f5d55";
const rule = "#16150f";

export default function PosterPage() {
  return (
    <div
      className={`${archivo.className} min-h-[100dvh]`}
      style={{ background: paper, color: ink }}
    >
      {/* Nav */}
      <header
        className="border-b-2"
        style={{ borderColor: rule }}
      >
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
          <span className="text-[16px] font-black tracking-[-0.02em] uppercase">
            Commonplace
          </span>
          <nav className="hidden items-center gap-8 text-[13px] font-bold uppercase md:flex">
            <Link href="#method" className="transition hover:text-[#f04a00]">
              Method
            </Link>
            <Link href="#terms" className="transition hover:text-[#f04a00]">
              Terms
            </Link>
          </nav>
          <Link
            href="#start"
            className="px-4 py-2 text-[13px] font-bold uppercase text-white transition active:translate-y-[1px]"
            style={{ background: ink }}
          >
            Get the app
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-[1200px] px-6 pt-14 pb-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="text-[56px] leading-[0.95] font-black tracking-[-0.03em] uppercase md:text-[96px] lg:text-[104px]">
              Forgetting
              <br />
              is optional
            </h1>
            <p className="mt-8 max-w-[40ch] text-[15px] leading-7 font-medium" style={{ color: sub }}>
              Commonplace is a second brain for people who think in writing.
              Write it once. It stays found.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="#start"
                className="px-7 py-3.5 text-[14px] font-bold uppercase text-white transition active:translate-y-[1px]"
                style={{ background: orange }}
              >
                Get the app
              </Link>
              <Link
                href="#method"
                className="text-[14px] font-bold uppercase underline decoration-2 underline-offset-4 transition hover:text-[#f04a00]"
              >
                The method
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div
              className="flex aspect-square flex-col justify-between p-6"
              style={{ background: orange }}
            >
              <span className="text-[13px] font-bold uppercase" style={{ color: paper }}>
                A second
              </span>
              <span
                className="text-[120px] leading-none font-black tracking-[-0.04em]"
                style={{ color: ink }}
              >
                2nd
              </span>
              <span className="text-[13px] font-bold uppercase" style={{ color: paper }}>
                brain, kept
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Method: numbered sequence, thick rules */}
      <section id="method" className="border-t-2" style={{ borderColor: rule }}>
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <h2 className="text-[30px] font-black tracking-[-0.02em] uppercase md:text-[40px]">
            Three verbs. No folders.
          </h2>
          <div className="mt-12 border-t-2" style={{ borderColor: rule }}>
            {[
              {
                n: "1",
                t: "Capture",
                d: "Write it the moment it occurs. One inbox, zero filing decisions.",
              },
              {
                n: "2",
                t: "Connect",
                d: "Link notes by hand, or let the system propose the obvious ones.",
              },
              {
                n: "3",
                t: "Resurface",
                d: "Old notes return inside new work, the week they become useful.",
              },
            ].map((s, i) => (
              <div
                key={s.n}
                className={`grid grid-cols-[72px_1fr] items-baseline gap-6 py-8 md:grid-cols-[120px_320px_1fr] ${
                  i < 2 ? "border-b" : ""
                }`}
                style={{ borderColor: rule }}
              >
                <span
                  className="text-[56px] leading-none font-black tracking-[-0.03em] md:text-[72px]"
                  style={{ color: orange }}
                >
                  {s.n}
                </span>
                <span className="text-[24px] font-black tracking-[-0.02em] uppercase md:text-[30px]">
                  {s.t}
                </span>
                <span
                  className="col-span-2 text-[14.5px] leading-7 font-medium md:col-span-1"
                  style={{ color: sub }}
                >
                  {s.d}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo band */}
      <section className="border-y-2" style={{ borderColor: rule }}>
        <div className="relative h-[340px] w-full overflow-hidden md:h-[420px]">
          <Image
            src="https://picsum.photos/seed/commonplace-bench/1600/700?grayscale"
            alt="A worktable covered in handwritten notes and index cards"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{ background: "rgba(240,74,0,0.18)" }}
          />
        </div>
      </section>

      {/* Terms: is / isn't */}
      <section id="terms" className="mx-auto max-w-[1200px] px-6 py-20">
        <h2 className="text-[30px] font-black tracking-[-0.02em] uppercase md:text-[40px]">
          Plain terms
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-px md:grid-cols-2" style={{ background: rule }}>
          <div style={{ background: paper }} className="p-8">
            <h3
              className="border-b-2 pb-4 text-[14px] font-black tracking-[0.02em] uppercase"
              style={{ borderColor: rule }}
            >
              It is
            </h3>
            <ul className="mt-6 space-y-4 text-[15px] leading-7 font-medium">
              <li>Plain markdown files on your disk</li>
              <li>Bidirectional links between notes</li>
              <li>Search that reads meaning, not keywords</li>
              <li>Yours if we disappear tomorrow</li>
            </ul>
          </div>
          <div style={{ background: ink }} className="p-8">
            <h3
              className="border-b-2 pb-4 text-[14px] font-black tracking-[0.02em] uppercase"
              style={{ borderColor: "#f2f1ec", color: orange }}
            >
              It is not
            </h3>
            <ul className="mt-6 space-y-4 text-[15px] leading-7 font-medium" style={{ color: paper }}>
              <li>A folder hierarchy you must maintain</li>
              <li>A database you design before writing</li>
              <li>A feed. Nothing scrolls unless you do</li>
              <li>Locked in. Export is a copy command</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-t-2" style={{ borderColor: rule }}>
        <div className="mx-auto max-w-[1200px] px-6 py-24">
          <blockquote className="max-w-[900px] text-[28px] leading-[1.15] font-black tracking-[-0.02em] uppercase md:text-[44px]">
            &ldquo;My notes stopped being a landfill and started being a
            filing system that files itself.&rdquo;
          </blockquote>
          <p className="mt-8 text-[13px] font-bold uppercase" style={{ color: sub }}>
            Thea Lindqvist, architect, Copenhagen
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="border-t-2" style={{ borderColor: rule, background: ink }}>
        <div className="mx-auto max-w-[1200px] px-6 py-24">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <h2
              className="max-w-[14ch] text-[40px] leading-[0.95] font-black tracking-[-0.03em] uppercase md:text-[72px]"
              style={{ color: paper }}
            >
              Start keeping
            </h2>
            <div className="flex flex-col items-start gap-4">
              <Link
                href="/with-taste-skill/swe-2/4"
                className="px-8 py-4 text-[15px] font-bold uppercase transition active:translate-y-[1px]"
                style={{ background: orange, color: "#16150f" }}
              >
                Get the app
              </Link>
              <span className="text-[12px] font-bold uppercase" style={{ color: "#8b8878" }}>
                Free under 500 notes
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: ink }}>
        <div
          className="mx-auto flex max-w-[1200px] flex-col gap-3 border-t px-6 py-8 text-[12px] font-bold uppercase md:flex-row md:items-center md:justify-between"
          style={{ borderColor: "#3a382e", color: "#8b8878" }}
        >
          <span style={{ color: paper }}>Commonplace</span>
          <span>Set in Archivo</span>
          <span>&copy; 2026</span>
        </div>
      </footer>
    </div>
  );
}
