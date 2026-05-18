import { DM_Sans, Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-mycelium-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-mycelium-body",
});

const features = [
  {
    title: "Bi-directional links",
    body: "Ideas find each other. Every note becomes a node in a living map of thought.",
  },
  {
    title: "Emergent structure",
    body: "No folders required. Patterns surface from how you actually think.",
  },
  {
    title: "Recall by context",
    body: "Surface the right memory at the right moment — not by search alone.",
  },
];

export default function MyceliumLanding() {
  return (
    <div
      className={`${fraunces.variable} ${dmSans.variable} relative min-h-screen overflow-hidden`}
      style={{
        fontFamily: "var(--font-mycelium-body), sans-serif",
        background: "#0a1410",
        color: "#e8e4d9",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(74, 124, 89, 0.35) 0%, transparent 45%),
            radial-gradient(circle at 80% 70%, rgba(180, 140, 60, 0.2) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(45, 80, 55, 0.15) 0%, transparent 60%)
          `,
        }}
      />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
        aria-hidden
      >
        <defs>
          <pattern
            id="mycelium-grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="40" cy="40" r="1.5" fill="#7cb87c" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mycelium-grid)" />
        <path
          d="M100,200 Q300,100 500,250 T900,180"
          fill="none"
          stroke="#5a9a6a"
          strokeWidth="0.5"
          opacity="0.6"
        />
        <path
          d="M50,400 Q250,350 450,420 T850,380"
          fill="none"
          stroke="#5a9a6a"
          strokeWidth="0.5"
          opacity="0.4"
        />
        <path
          d="M200,600 Q400,500 600,580 T1000,520"
          fill="none"
          stroke="#c4a35a"
          strokeWidth="0.5"
          opacity="0.3"
        />
      </svg>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #8ecf8e, #2d5a3d)",
              animation: "pulse-glow 3s ease-in-out infinite",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" fill="#0a1410" />
              <path
                d="M12 2v4M12 18v4M2 12h4M18 12h4"
                stroke="#0a1410"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span
            className="text-lg tracking-wide"
            style={{ fontFamily: "var(--font-mycelium-display), serif" }}
          >
            Mycelium
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-[#a8b8a0] md:flex">
          <a href="#features" className="transition hover:text-[#e8e4d9]">
            Features
          </a>
          <a href="#philosophy" className="transition hover:text-[#e8e4d9]">
            Philosophy
          </a>
          <button
            type="button"
            className="rounded-full border border-[#5a9a6a]/50 px-5 py-2 text-[#e8e4d9] transition hover:border-[#8ecf8e] hover:bg-[#5a9a6a]/10"
          >
            Start growing
          </button>
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <section className="grid items-center gap-16 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20">
          <div
            style={{
              animation: "reveal-up 0.8s ease-out both",
            }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#8ecf8e]">
              Second brain, naturally
            </p>
            <h1
              className="mb-6 text-5xl leading-[1.05] tracking-tight md:text-7xl"
              style={{ fontFamily: "var(--font-mycelium-display), serif" }}
            >
              Thoughts that{" "}
              <em className="not-italic text-[#c4a35a]">branch</em>, connect,
              and grow.
            </h1>
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-[#a8b8a0]">
              Mycelium is note-taking modeled on how minds actually work —
              networked, associative, alive. Capture once. Rediscover forever.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                className="rounded-full px-8 py-3.5 text-sm font-medium text-[#0a1410] transition hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, #8ecf8e, #5a9a6a)",
                }}
              >
                Plant your first note
              </button>
              <button
                type="button"
                className="rounded-full border border-[#5a9a6a]/30 px-8 py-3.5 text-sm text-[#c4d4bc] transition hover:border-[#8ecf8e]/50"
              >
                Watch the network form
              </button>
            </div>
          </div>

          <div
            className="relative aspect-square max-w-md justify-self-center lg:justify-self-end"
            style={{ animation: "reveal-up 0.8s ease-out 0.15s both" }}
          >
            <div className="absolute inset-0 rounded-full bg-[#5a9a6a]/10 blur-3xl" />
            <svg viewBox="0 0 400 400" className="relative h-full w-full">
              {[
                { cx: 200, cy: 200, r: 28, delay: 0 },
                { cx: 100, cy: 120, r: 14, delay: 0.3 },
                { cx: 300, cy: 100, r: 16, delay: 0.6 },
                { cx: 320, cy: 260, r: 12, delay: 0.9 },
                { cx: 80, cy: 280, r: 18, delay: 1.2 },
                { cx: 200, cy: 60, r: 10, delay: 1.5 },
                { cx: 160, cy: 340, r: 11, delay: 1.8 },
              ].map((node, i) => (
                <g key={i}>
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r}
                    fill="#8ecf8e"
                    opacity="0.85"
                    style={{
                      animation: `float-node 4s ease-in-out ${node.delay}s infinite`,
                    }}
                  />
                </g>
              ))}
              <g stroke="#5a9a6a" strokeWidth="1" opacity="0.5">
                <line x1="200" y1="200" x2="100" y2="120" />
                <line x1="200" y1="200" x2="300" y2="100" />
                <line x1="200" y1="200" x2="320" y2="260" />
                <line x1="200" y1="200" x2="80" y2="280" />
                <line x1="200" y1="200" x2="200" y2="60" />
                <line x1="100" y1="120" x2="200" y2="60" />
                <line x1="300" y1="100" x2="320" y2="260" />
                <line x1="80" y1="280" x2="160" y2="340" />
                <line x1="200" y1="200" x2="160" y2="340" />
              </g>
            </svg>
          </div>
        </section>

        <section id="features" className="mt-32 grid gap-6 md:grid-cols-3">
          {features.map((feature, i) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-[#5a9a6a]/20 bg-[#122018]/60 p-8 backdrop-blur-sm transition hover:border-[#8ecf8e]/30"
              style={{
                animation: `reveal-up 0.7s ease-out ${0.2 + i * 0.1}s both`,
              }}
            >
              <div className="mb-4 h-px w-12 bg-gradient-to-r from-[#8ecf8e] to-transparent" />
              <h2
                className="mb-3 text-xl"
                style={{ fontFamily: "var(--font-mycelium-display), serif" }}
              >
                {feature.title}
              </h2>
              <p className="text-sm leading-relaxed text-[#8a9a82]">
                {feature.body}
              </p>
            </article>
          ))}
        </section>

        <section
          id="philosophy"
          className="mt-32 rounded-3xl border border-[#5a9a6a]/15 p-12 text-center md:p-20"
          style={{
            background:
              "linear-gradient(180deg, rgba(45,90,61,0.15) 0%, transparent 100%)",
          }}
        >
          <blockquote
            className="mx-auto max-w-2xl text-2xl leading-relaxed md:text-3xl"
            style={{ fontFamily: "var(--font-mycelium-display), serif" }}
          >
            &ldquo;The best second brain doesn&apos;t organize your thoughts —
            it{" "}
            <span className="text-[#c4a35a]">remembers how they connect</span>
            .&rdquo;
          </blockquote>
          <p className="mt-6 text-sm uppercase tracking-[0.25em] text-[#6a8a6a]">
            — The Mycelium Manifesto
          </p>
        </section>
      </main>
    </div>
  );
}
