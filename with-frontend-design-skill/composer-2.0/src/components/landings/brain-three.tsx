import Link from "next/link";
import { Fraunces, Karla } from "next/font/google";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-brain-three-display",
});

const body = Karla({
  subsets: ["latin"],
  variable: "--font-brain-three-body",
});

export default function BrainThree() {
  return (
    <div
      className={`${display.variable} ${body.variable} relative min-h-screen overflow-hidden bg-[#f2efe6] text-[#2d3a2d]`}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-[40%_60%_70%_30%] bg-[#87a878]/35 blur-2xl" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-64 w-64 rounded-[60%_40%_30%_70%] bg-[#c4d4b8]/50 blur-2xl" />

      <div className="absolute left-[8%] top-32 hidden h-40 w-40 rounded-full border-2 border-dashed border-[#87a878]/40 lg:block" />
      <div className="absolute right-[12%] top-[45%] hidden h-24 w-24 rotate-12 rounded-3xl bg-[#87a878]/20 lg:block" />

      <header className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-14 text-center">
        <span className="font-[family-name:var(--font-brain-three-body)] text-xs font-semibold uppercase tracking-[0.35em] text-[#5a6b5a]">
          Root &amp; recall
        </span>
        <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-brain-three-display)] text-5xl font-medium leading-tight sm:text-6xl">
          Grow a{" "}
          <span className="text-[#4a6b4a] underline decoration-[#87a878] decoration-wavy underline-offset-8">
            living
          </span>{" "}
          knowledge garden
        </h1>
        <p className="mt-8 max-w-xl font-[family-name:var(--font-brain-three-body)] text-lg leading-relaxed text-[#4d5c4d]">
          Notes that branch like roots. Ideas that resurface like seasons. A
          second brain that breathes with you—not a filing cabinet in disguise.
        </p>
      </header>

      <main className="relative z-10 mx-auto mt-16 max-w-5xl px-6 pb-32">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Seed",
              desc: "Capture in seconds. Voice, text, or clip—plant without perfection.",
              hue: "bg-[#e8efe0]",
            },
            {
              title: "Tend",
              desc: "Weekly review and gentle prompts keep undergrowth from choking signal.",
              hue: "bg-[#dde8d4]",
            },
            {
              title: "Harvest",
              desc: "Surface related thought when you need it—not when the algorithm does.",
              hue: "bg-[#d0dfc8]",
            },
          ].map((b) => (
            <div
              key={b.title}
              className={`rounded-[2rem] ${b.hue} p-8 shadow-[0_20px_50px_-20px_rgba(45,58,45,0.25)] transition duration-300 hover:-translate-y-1`}
            >
              <h2 className="font-[family-name:var(--font-brain-three-display)] text-2xl text-[#2d3a2d]">
                {b.title}
              </h2>
              <p className="mt-4 font-[family-name:var(--font-brain-three-body)] text-sm leading-relaxed text-[#4d5c4d]">
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-6">
          <Link
            href="#"
            className="rounded-full bg-[#2d3a2d] px-10 py-4 font-[family-name:var(--font-brain-three-body)] text-sm font-bold uppercase tracking-widest text-[#f2efe6] shadow-lg shadow-[#2d3a2d]/20 transition hover:bg-[#3d4f3d] hover:shadow-xl"
          >
            Enter the garden
          </Link>
          <p className="font-[family-name:var(--font-brain-three-body)] text-xs text-[#6b7d6b]">
            Peaceful by default · Export anytime
          </p>
        </div>
      </main>

      <footer className="relative z-10 border-t border-[#87a878]/30 bg-[#e8efe0]/60 px-6 py-8 text-center font-[family-name:var(--font-brain-three-body)] text-xs text-[#5a6b5a]">
        Iteration III · Organic calm · Mind as cultivated ground
      </footer>
    </div>
  );
}
