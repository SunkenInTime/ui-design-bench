import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export default function DriftLanding() {
  return (
    <div
      className={`${outfit.variable} relative min-h-full overflow-hidden bg-[#0C0A1F] font-[family-name:var(--font-outfit)] text-white`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-[#7C3AED]/40 blur-[120px]" />
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-[#EC4899]/30 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-[#06B6D4]/25 blur-[90px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-32">
        <header className="flex items-center justify-between py-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#A78BFA] to-[#F472B6]" />
            <span className="text-lg font-semibold tracking-tight">Engram</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="hidden rounded-full px-4 py-2 text-sm text-white/70 transition hover:text-white sm:block"
            >
              Sign in
            </button>
            <button
              type="button"
              className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium backdrop-blur-md transition hover:bg-white/20"
            >
              Get started
            </button>
          </div>
        </header>

        <section className="flex flex-col items-center pt-16 text-center lg:pt-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]" />
            Now in open beta
          </div>
          <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            Float through your ideas with clarity
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/60">
            Engram is the calm layer between chaos and insight — a second brain that
            feels weightless, remembers everything, and never judges your 3am notes.
          </p>
          <form className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3.5 text-sm backdrop-blur-md placeholder:text-white/40 focus:border-white/30 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] px-8 py-3.5 text-sm font-semibold shadow-lg shadow-purple-500/25 transition hover:opacity-90"
            >
              Join waitlist
            </button>
          </form>
        </section>

        <section className="mt-20 grid gap-6 lg:grid-cols-3">
          <GlassCard className="lg:col-span-2 lg:row-span-2">
            <p className="text-sm text-white/50">Knowledge graph</p>
            <h3 className="mt-2 text-2xl font-semibold">See the shape of your thinking</h3>
            <div className="mt-8 flex h-48 items-center justify-center rounded-2xl bg-gradient-to-br from-white/5 to-white/0">
              <svg viewBox="0 0 200 120" className="h-full w-full max-w-sm opacity-80">
                {[
                  [100, 60, 40, 30],
                  [100, 60, 160, 35],
                  [100, 60, 50, 95],
                  [100, 60, 150, 90],
                  [40, 30, 50, 95],
                  [160, 35, 150, 90],
                ].map(([x1, y1, x2, y2], i) => (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                  />
                ))}
                {[
                  [100, 60, 14],
                  [40, 30, 8],
                  [160, 35, 8],
                  [50, 95, 6],
                  [150, 90, 6],
                ].map(([cx, cy, r], i) => (
                  <circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill={`url(#orb-${i})`}
                  />
                ))}
                <defs>
                  <radialGradient id="orb-0">
                    <stop stopColor="#A78BFA" />
                    <stop offset="1" stopColor="#7C3AED" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </GlassCard>
          <GlassCard>
            <span className="text-3xl">✦</span>
            <h3 className="mt-4 font-semibold">Instant capture</h3>
            <p className="mt-2 text-sm text-white/50">
              Global shortcut from any app. Thoughts saved before they evaporate.
            </p>
          </GlassCard>
          <GlassCard>
            <span className="text-3xl">◎</span>
            <h3 className="mt-4 font-semibold">Serendipity mode</h3>
            <p className="mt-2 text-sm text-white/50">
              Rediscover old notes that connect to what you&apos;re working on now.
            </p>
          </GlassCard>
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-12">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Ready to think in stereo?
              </h2>
              <p className="mt-2 text-white/50">
                One brain wasn&apos;t enough. Give your ideas a home that remembers.
              </p>
            </div>
            <button
              type="button"
              className="shrink-0 rounded-full bg-white px-8 py-3.5 font-semibold text-[#1E1B4B] transition hover:bg-white/90"
            >
              Start for free
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl ${className}`}
    >
      {children}
    </article>
  );
}
