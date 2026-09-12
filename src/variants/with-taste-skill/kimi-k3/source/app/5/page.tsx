import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Lightning,
  Link as LinkIcon,
  CalendarCheck,
  WifiSlash,
  LockKey,
  FileMd,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Marginalia - write it down, keep it forever",
  description:
    "Iteration 5: brutalist and loud. A second brain with no algorithm, no feed, and no lock-in. Just your notes, linked.",
};

const ink = "#111110";
const accent = "#ffd400";

const features = [
  {
    icon: Lightning,
    title: "Quick capture",
    body: "One hotkey, blank page, anywhere.",
    yellow: false,
  },
  {
    icon: LinkIcon,
    title: "Backlinks",
    body: "Notes point at each other. Both ways.",
    yellow: false,
  },
  {
    icon: CalendarCheck,
    title: "Daily review",
    body: "Five old notes, every morning.",
    yellow: true,
  },
  {
    icon: WifiSlash,
    title: "Offline first",
    body: "Airplane mode is the default mode.",
    yellow: false,
  },
  {
    icon: LockKey,
    title: "Encrypted sync",
    body: "Ciphertext only. We cannot read it.",
    yellow: false,
  },
  {
    icon: FileMd,
    title: "Markdown export",
    body: "Plain files. Leave whenever.",
    yellow: false,
  },
];

const principles = [
  {
    title: "Plain Markdown files",
    body: "One note, one file, readable in any editor on earth.",
  },
  {
    title: "Local first",
    body: "The app works fully offline. Sync is optional, not rent.",
  },
  {
    title: "No tracking",
    body: "No analytics on your writing. Crash reports only, opt-in.",
  },
  {
    title: "Export anytime",
    body: "Your whole archive, one click, zero hostage-taking.",
  },
  {
    title: "Yours forever",
    body: "If we shut down, your notes do not notice.",
  },
];

export default function IterationFive() {
  return (
    <main className="min-h-[100dvh]">
      {/* Nav */}
      <header className="border-b-2" style={{ borderColor: ink }}>
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link
            href="#"
            className="px-2.5 py-1 text-sm font-black uppercase tracking-tight text-[#fefef9]"
            style={{ backgroundColor: ink }}
          >
            Marginalia
          </Link>
          <nav className="hidden items-center gap-7 font-mono text-xs uppercase tracking-[0.14em] md:flex">
            <a href="#tool" className="transition hover:underline">
              The tool
            </a>
            <a href="#principles" className="transition hover:underline">
              Principles
            </a>
            <a href="#start" className="transition hover:underline">
              Sign in
            </a>
          </nav>
          <a
            href="#start"
            className="border-2 px-4 py-2 text-xs font-black uppercase tracking-[0.08em] transition hover:-translate-y-0.5 active:translate-y-0"
            style={{
              backgroundColor: accent,
              borderColor: ink,
              boxShadow: `3px 3px 0 ${ink}`,
            }}
          >
            Start free
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 py-16 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-12 lg:py-0">
        <div className="lg:col-span-7">
          <h1 className="max-w-[16ch] text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-6xl">
            Write it down. Keep it forever.
          </h1>
          <p className="mt-8 max-w-[46ch] font-mono text-sm leading-relaxed text-[#3d3d38] md:text-base">
            A second brain with no algorithm, no feed, and no lock-in. Just
            your notes, linked.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#start"
              className="border-2 px-7 py-3.5 text-sm font-black uppercase tracking-[0.08em] transition hover:-translate-y-0.5 active:translate-y-0"
              style={{
                backgroundColor: accent,
                borderColor: ink,
                boxShadow: `4px 4px 0 ${ink}`,
              }}
            >
              Start free
            </a>
            <a
              href="#tool"
              className="border-2 px-7 py-3.5 text-sm font-black uppercase tracking-[0.08em] transition hover:-translate-y-0.5 active:translate-y-0"
              style={{
                backgroundColor: "#fefef9",
                borderColor: ink,
                boxShadow: `4px 4px 0 ${ink}`,
              }}
            >
              See how
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <figure>
            <Image
              src="https://picsum.photos/id/252/1000/1100"
              alt="A sheet of typographic proof marks in black and white"
              width={1000}
              height={1100}
              priority
              className="aspect-[10/11] w-full border-2 object-cover"
              style={{ borderColor: ink, boxShadow: `8px 8px 0 ${ink}` }}
            />
            <figcaption
              className="mt-4 inline-block px-2 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[#fefef9]"
              style={{ backgroundColor: ink }}
            >
              Built like a press, not a feed
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Stat band */}
      <section
        className="border-y-2"
        style={{ backgroundColor: accent, borderColor: ink }}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 px-6 py-8 md:grid-cols-4">
          {[
            ["38k", "daily writers"],
            ["2.1M", "links made"],
            ["0", "trackers"],
            ["100%", "yours"],
          ].map(([figure, label]) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-black tracking-tight md:text-4xl">
                {figure}
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature grid: raw bordered cells */}
      <section id="tool" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="max-w-[20ch] text-4xl font-black uppercase leading-[1] tracking-tight md:text-5xl">
          The tool, all six parts
        </h2>
        <div
          className="mt-12 grid grid-cols-1 gap-0.5 border-2 sm:grid-cols-2 lg:grid-cols-3"
          style={{
            borderColor: ink,
            backgroundColor: ink,
            boxShadow: `8px 8px 0 ${ink}`,
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              className="p-7"
              style={
                f.yellow
                  ? { backgroundColor: accent }
                  : { backgroundColor: "#fefef9" }
              }
            >
              <f.icon size={26} weight="bold" />
              <h3 className="mt-5 text-lg font-black uppercase tracking-tight">
                {f.title}
              </h3>
              <p className="mt-2 font-mono text-xs leading-relaxed text-[#3d3d38]">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Principles: stacked bordered rows */}
      <section id="principles" className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="max-w-[20ch] text-4xl font-black uppercase leading-[1] tracking-tight md:text-5xl">
          Five things we will not do
        </h2>
        <div className="mt-12 border-2" style={{ borderColor: ink }}>
          {principles.map((p, i) => (
            <div
              key={p.title}
              className={`grid grid-cols-1 gap-2 px-7 py-6 md:grid-cols-12 md:items-center ${
                i > 0 ? "border-t-2" : ""
              }`}
              style={{ borderColor: ink }}
            >
              <h3 className="text-xl font-black uppercase tracking-tight md:col-span-5">
                {p.title}
              </h3>
              <p className="font-mono text-xs leading-relaxed text-[#3d3d38] md:col-span-7">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="mx-auto max-w-6xl px-6 pb-24">
        <div
          className="border-2 px-8 py-16 text-center md:py-24"
          style={{
            borderColor: ink,
            backgroundColor: accent,
            boxShadow: `10px 10px 0 ${ink}`,
          }}
        >
          <h2 className="mx-auto max-w-[16ch] text-4xl font-black uppercase leading-[0.98] tracking-tight md:text-6xl">
            Start your archive
          </h2>
          <p className="mx-auto mt-6 max-w-[42ch] font-mono text-sm leading-relaxed">
            Free for a thousand notes. Two minutes to set up. Yours forever.
          </p>
          <a
            href="#"
            className="mt-10 inline-block border-2 px-8 py-3.5 text-sm font-black uppercase tracking-[0.08em] text-[#fefef9] transition hover:-translate-y-0.5 active:translate-y-0"
            style={{ backgroundColor: ink, borderColor: ink }}
          >
            Start free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2" style={{ borderColor: ink }}>
        <div className="mx-auto max-w-6xl px-6 pt-14">
          <p className="text-[13vw] font-black uppercase leading-[0.85] tracking-tight lg:text-[9rem]">
            Marginalia
          </p>
          <div className="flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between">
            <p className="max-w-[40ch] font-mono text-xs leading-relaxed text-[#3d3d38]">
              A second brain with no algorithm, no feed, and no lock-in.
            </p>
            <div className="flex gap-10 font-mono text-xs uppercase tracking-[0.14em]">
              <a href="#tool" className="transition hover:underline">The tool</a>
              <a href="#principles" className="transition hover:underline">Principles</a>
              <a href="#" className="transition hover:underline">Privacy</a>
            </div>
          </div>
        </div>
        <div className="border-t-2" style={{ borderColor: ink }}>
          <p className="mx-auto max-w-6xl px-6 py-5 font-mono text-[11px] uppercase tracking-[0.14em]">
            © 2026 Marginalia
          </p>
        </div>
      </footer>
    </main>
  );
}
