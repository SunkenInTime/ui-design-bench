"use client";

import { Outfit, Quattrocento_Sans } from "next/font/google";
import Link from "next/link";

const display = Outfit({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-display",
});

const body = Quattrocento_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
});

export default function Five() {
  return (
    <div
      className={`${display.variable} ${body.variable} relative min-h-screen overflow-hidden bg-gradient-to-br from-violet-50 via-rose-50 to-amber-50 text-slate-700`}
    >
      {/* Floating bubbles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => {
          const size = 60 + Math.random() * 140;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const duration = 8 + Math.random() * 12;
          const delay = Math.random() * 5;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-white/40 blur-xl"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                top: `${top}%`,
                animation: `float ${duration}s ease-in-out ${delay}s infinite`,
              }}
            />
          );
        })}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
      `}</style>

      {/* Glass nav */}
      <header className="relative z-10 mx-6 mt-6 rounded-full border border-white/40 bg-white/30 px-8 py-4 shadow-lg shadow-violet-900/5 backdrop-blur-xl md:mx-16">
        <div className="flex items-center justify-between">
          <div className="font-[family-name:var(--font-display)] text-lg font-medium text-slate-800">
            Liminal
          </div>
          <nav className="hidden gap-8 md:flex">
            {["Drift", "Collect", "Dream"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-[family-name:var(--font-body)] text-sm text-slate-500 transition-colors hover:text-violet-500"
              >
                {item}
              </a>
            ))}
          </nav>
          <Link
            href="#"
            className="rounded-full bg-violet-400 px-6 py-2 font-[family-name:var(--font-display)] text-sm font-medium text-white shadow-md shadow-violet-400/20 transition-transform hover:scale-105"
          >
            Begin
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-8 pb-32 pt-20 md:px-16">
        {/* Soft hero */}
        <div className="text-center">
          <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/50 px-5 py-2 shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="font-[family-name:var(--font-body)] text-xs text-slate-500">
              A space for soft thoughts
            </span>
          </div>

          <h1 className="mx-auto max-w-4xl font-[family-name:var(--font-display)] text-5xl font-light leading-[1.1] text-slate-800 md:text-8xl">
            Capture ideas
            <br />
            <span className="font-medium text-violet-400">before they fade</span>
          </h1>

          <p className="mx-auto mt-8 max-w-lg font-[family-name:var(--font-body)] text-lg leading-8 text-slate-500">
            Not everything needs structure. Some thoughts just need a soft place
            to land. Liminal is your gentle second brain.
          </p>
        </div>

        {/* Glass feature cards */}
        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Weightless Capture",
              body: "No friction. No forms. Just open and write. Your thoughts flow as freely as breath.",
              accent: "from-violet-200/40 to-fuchsia-200/40",
              icon: "✦",
            },
            {
              title: "Gentle Links",
              body: "Connections form naturally, like dew on spider silk. No force. Just resonance.",
              accent: "from-rose-200/40 to-orange-200/40",
              icon: "◈",
            },
            {
              title: "Dream Recall",
              body: "Surface forgotten ideas at the perfect moment. Like remembering a dream at noon.",
              accent: "from-amber-200/40 to-yellow-200/40",
              icon: "◉",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/40 p-10 shadow-xl shadow-slate-900/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/60"
            >
              <div
                className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${f.accent} blur-2xl transition-transform group-hover:scale-150`}
              />
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/60 text-2xl shadow-sm">
                  {f.icon}
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-slate-800">
                  {f.title}
                </h3>
                <p className="mt-3 font-[family-name:var(--font-body)] text-sm leading-7 text-slate-500">
                  {f.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Large ethereal CTA section */}
        <div className="relative mt-24 overflow-hidden rounded-[3rem] bg-white/30 p-16 text-center shadow-2xl shadow-violet-900/5 backdrop-blur-xl border border-white/50 md:p-24">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-200/30 blur-[100px]" />
          <div className="relative z-10">
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-light text-slate-800 md:text-6xl">
              Enter the <span className="font-medium">in-between</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-lg font-[family-name:var(--font-body)] text-slate-500">
              The best ideas visit in the liminal moments — between waking and
              sleep, between focus and drift. We built a home for them.
            </p>
            <Link
              href="#"
              className="mt-10 inline-block rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 px-12 py-5 font-[family-name:var(--font-display)] text-lg font-medium text-white shadow-xl shadow-violet-400/25 transition-transform hover:scale-105"
            >
              Drift In
            </Link>
          </div>
        </div>

        {/* Soft footer */}
        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-white/40 pt-12 md:flex-row">
          <div className="font-[family-name:var(--font-display)] text-sm text-slate-400">
            Liminal Notes
          </div>
          <div className="flex gap-8">
            {["Privacy", "Terms", "Support"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-[family-name:var(--font-body)] text-sm text-slate-400 transition-colors hover:text-violet-400"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
