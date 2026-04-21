"use client";

import { Fraunces, Quattrocento_Sans } from "next/font/google";
import Link from "next/link";

const display = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-display",
});

const body = Quattrocento_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
});

export default function Two() {
  return (
    <div
      className={`${display.variable} ${body.variable} relative min-h-screen overflow-hidden bg-emerald-950 text-amber-50`}
    >
      {/* Organic blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-32 top-0 h-[700px] w-[700px] rounded-full bg-emerald-800/30 blur-[100px]"
          style={{ animation: "float 12s ease-in-out infinite" }}
        />
        <div
          className="absolute -right-32 bottom-0 h-[600px] w-[600px] rounded-full bg-teal-800/20 blur-[120px]"
          style={{ animation: "float 14s ease-in-out infinite reverse" }}
        />
        <div
          className="absolute left-1/3 top-1/3 h-[400px] w-[400px] rounded-full bg-rose-400/10 blur-[90px]"
          style={{ animation: "float 10s ease-in-out infinite 2s" }}
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -40px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-8 md:px-16">
        <div className="font-[family-name:var(--font-body)] text-sm font-bold tracking-[0.15em] uppercase text-emerald-200/70">
          Synapse
        </div>
        <nav className="hidden gap-10 md:flex">
          {["Grow", "Connect", "Flourish"].map((item) => (
            <a
              key={item}
              href="#"
              className="font-[family-name:var(--font-body)] text-sm text-emerald-100/60 transition-colors hover:text-rose-300"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <main className="relative z-10 mx-auto max-w-7xl px-8 pb-32 pt-12 md:px-16">
        {/* Central Neural Visual */}
        <div className="relative mx-auto mb-20 flex h-64 w-64 items-center justify-center md:h-80 md:w-80">
          {/* Orbiting nodes */}
          {[0, 1, 2, 3, 4].map((i) => {
            const angle = (i * 72 * Math.PI) / 180;
            const radius = 120;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <div
                key={i}
                className="absolute h-3 w-3 rounded-full bg-rose-300 shadow-[0_0_20px_rgba(253,164,175,0.5)]"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  animation: `pulse-glow ${3 + i * 0.5}s ease-in-out infinite`,
                }}
              />
            );
          })}
          {/* Center node */}
          <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 shadow-[0_0_60px_rgba(52,211,153,0.4)]">
            <div className="absolute inset-0 rounded-full bg-emerald-400/30 animate-ping" />
          </div>
          {/* Connecting rings */}
          <div className="absolute inset-0 rounded-full border border-emerald-400/10" />
          <div className="absolute inset-4 rounded-full border border-emerald-400/10" />
          <div className="absolute inset-8 rounded-full border border-emerald-400/10" />
        </div>

        <div className="text-center">
          <h1 className="font-[family-name:var(--font-display)] text-5xl font-medium leading-[1.1] tracking-tight text-amber-50 md:text-8xl">
            Your mind
            <br />
            is a <span className="text-rose-300">living garden</span>.
          </h1>
          <p className="mx-auto mt-8 max-w-xl font-[family-name:var(--font-body)] text-lg leading-relaxed text-emerald-200/60">
            Notes are not files. They are seeds. Synapse helps you plant ideas,
            watch them branch, and discover connections you never knew existed.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="#"
              className="rounded-full bg-rose-300 px-8 py-4 font-[family-name:var(--font-body)] text-sm font-bold text-emerald-950 shadow-lg shadow-rose-300/20 transition-transform hover:scale-105"
            >
              Start Growing
            </Link>
            <a
              href="#"
              className="rounded-full border border-emerald-700/50 px-8 py-4 font-[family-name:var(--font-body)] text-sm text-emerald-100/70 transition-colors hover:border-emerald-500 hover:text-emerald-100"
            >
              Explore the Roots
            </a>
          </div>
        </div>

        {/* Feature cards - organic shapes */}
        <div className="mt-32 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Biological Links",
              body: "Ideas form synaptic connections. Related thoughts pulse together, strengthening over time.",
              color: "from-emerald-800/40 to-teal-800/40",
            },
            {
              title: "Seasonal Review",
              body: "Watch your knowledge garden change through seasons. Harvest insights when they ripen.",
              color: "from-teal-800/40 to-cyan-800/40",
            },
            {
              title: "Neural Map",
              body: "Navigate your thoughts as a landscape. Zoom from forest to leaf in a single gesture.",
              color: "from-cyan-800/40 to-emerald-800/40",
            },
          ].map((f, i) => (
            <div
              key={f.title}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${f.color} p-10 backdrop-blur-sm border border-white/5 transition-transform duration-500 hover:-translate-y-2`}
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/5 blur-2xl transition-all group-hover:scale-150" />
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                  {["🌿", "🍂", "🕸️"][i]}
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-medium text-amber-50">
                  {f.title}
                </h3>
                <p className="mt-4 font-[family-name:var(--font-body)] text-sm leading-7 text-emerald-100/50">
                  {f.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 rounded-[3rem] bg-emerald-900/40 p-16 text-center backdrop-blur-md border border-emerald-800/30">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-medium text-amber-50 md:text-6xl">
            Cultivate clarity.
          </h2>
          <p className="mx-auto mt-6 max-w-lg font-[family-name:var(--font-body)] text-emerald-200/50">
            The best ideas do not arrive in isolation. They emerge from rich soil,
            cross-pollinated by everything you have ever thought.
          </p>
          <Link
            href="#"
            className="mt-10 inline-block rounded-full bg-amber-50 px-10 py-5 font-[family-name:var(--font-body)] text-sm font-bold text-emerald-950 transition-transform hover:scale-105"
          >
            Enter the Garden
          </Link>
        </div>
      </main>
    </div>
  );
}
