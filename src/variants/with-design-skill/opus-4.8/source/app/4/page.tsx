import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--vd-display",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--vd-body",
});

const STAGES = [
  {
    glyph: "✦",
    stage: "Plant",
    title: "Drop a seed",
    body: "Jot the smallest spark — a word, a link, a half-formed idea. Verdant keeps it warm until it's ready to grow.",
  },
  {
    glyph: "❋",
    stage: "Tend",
    title: "Watch it branch",
    body: "Connect notes with gentle links. Related thoughts cluster on their own, forming little groves of meaning.",
  },
  {
    glyph: "✿",
    stage: "Harvest",
    title: "Gather the fruit",
    body: "When it's time to write, your garden hands you everything you've cultivated — ripe, organized, and recallable.",
  },
];

export default function VerdantPage() {
  return (
    <main
      className={`${display.variable} ${body.variable} relative min-h-screen overflow-hidden bg-[#f5f3e9] text-[#26352b] selection:bg-[#5b8c6e] selection:text-[#f5f3e9]`}
      style={{ fontFamily: "var(--vd-body), system-ui, sans-serif" }}
    >
      <style>{`
        @keyframes vd-float { 0%,100% { transform: translateY(0) rotate(var(--r,0deg)) } 50% { transform: translateY(-18px) rotate(var(--r,0deg)) } }
        @keyframes vd-drift { 0%,100% { transform: translate(0,0) scale(1) } 50% { transform: translate(20px,-24px) scale(1.06) } }
        @keyframes vd-sway { 0%,100% { transform: rotate(-3deg) } 50% { transform: rotate(3deg) } }
        .vd-float { animation: vd-float 7s ease-in-out infinite; }
        .vd-drift { animation: vd-drift 16s ease-in-out infinite; }
        .vd-sway  { animation: vd-sway 5s ease-in-out infinite; transform-origin: bottom center; }
        @media (prefers-reduced-motion: reduce) {
          .vd-float,.vd-drift,.vd-sway { animation: none; }
        }
      `}</style>

      {/* Organic gradient mesh */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 18% 12%, rgba(140,184,150,0.55), transparent 60%), radial-gradient(50% 45% at 88% 22%, rgba(226,196,140,0.5), transparent 60%), radial-gradient(55% 55% at 75% 95%, rgba(120,160,135,0.45), transparent 60%)",
        }}
      />
      {/* Floating blobs */}
      <div
        aria-hidden
        className="vd-drift pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full opacity-50 blur-2xl"
        style={{ background: "radial-gradient(circle,#9bc4a4,transparent 70%)" }}
      />
      <div
        aria-hidden
        className="vd-drift pointer-events-none absolute -right-20 bottom-24 h-80 w-80 rounded-full opacity-40 blur-2xl"
        style={{
          background: "radial-gradient(circle,#e3c98c,transparent 70%)",
          animationDelay: "-6s",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10">
        {/* Nav */}
        <header className="flex items-center justify-between py-7">
          <div className="flex items-center gap-2.5">
            <span className="vd-sway inline-block text-2xl">🌿</span>
            <span
              className="text-[19px] font-semibold tracking-tight"
              style={{ fontFamily: "var(--vd-display), sans-serif" }}
            >
              Verdant
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-[14px] text-[#3f5246] md:flex">
            <a className="transition-colors hover:text-[#5b8c6e]" href="#how">
              How it grows
            </a>
            <a className="transition-colors hover:text-[#5b8c6e]" href="#garden">
              Your garden
            </a>
            <a className="transition-colors hover:text-[#5b8c6e]" href="#plant">
              Pricing
            </a>
          </nav>
          <a
            href="#plant"
            className="rounded-full bg-[#26352b] px-5 py-2.5 text-[13px] font-medium text-[#f5f3e9] transition-transform hover:scale-[1.03]"
          >
            Start planting
          </a>
        </header>

        {/* Hero */}
        <section className="grid items-center gap-10 py-12 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-1.5 text-[12px] font-medium text-[#5b8c6e] ring-1 ring-[#5b8c6e]/20 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5b8c6e]" />
              A second brain that grows with you
            </p>
            <h1
              className="text-[clamp(2.8rem,7vw,5.6rem)] font-semibold leading-[0.98] tracking-[-0.03em]"
              style={{ fontFamily: "var(--vd-display), sans-serif" }}
            >
              Tend your
              <br />
              thoughts,
              <br />
              <span className="text-[#5b8c6e]">watch ideas grow.</span>
            </h1>
            <p className="mt-7 max-w-md text-[17px] leading-relaxed text-[#3f5246]">
              Verdant treats every note like a seed. Capture freely, link
              gently, and let your knowledge garden flourish — calm, organic,
              and entirely your own.
            </p>
            <div id="plant" className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-full bg-[#5b8c6e] px-7 py-3.5 text-[15px] font-medium text-[#f5f3e9] shadow-[0_12px_30px_-10px_rgba(91,140,110,0.7)] transition-transform hover:scale-[1.03]"
              >
                Grow your garden
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#how"
                className="text-[15px] font-medium text-[#3f5246] underline-offset-4 hover:text-[#5b8c6e] hover:underline"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* Floating note "leaves" */}
          <div className="relative h-[340px] sm:h-[420px]">
            <div
              className="vd-float absolute left-4 top-2 w-60 rounded-[26px] bg-white/85 p-5 shadow-[0_20px_50px_-20px_rgba(38,53,43,0.4)] ring-1 ring-[#26352b]/5 backdrop-blur"
              style={{ ["--r" as string]: "-5deg" }}
            >
              <p className="text-[11px] font-medium uppercase tracking-wide text-[#5b8c6e]">
                🌱 seedling
              </p>
              <p className="mt-2 text-[15px] leading-snug text-[#26352b]">
                idea: a note app shaped like a garden, not a filing cabinet
              </p>
            </div>
            <div
              className="vd-float absolute right-0 top-28 w-56 rounded-[26px] bg-[#26352b] p-5 text-[#f5f3e9] shadow-[0_24px_55px_-18px_rgba(38,53,43,0.6)]"
              style={{ ["--r" as string]: "6deg", animationDelay: "-2.5s" }}
            >
              <p className="text-[11px] font-medium uppercase tracking-wide text-[#9bc4a4]">
                ❋ linked × 7
              </p>
              <p className="mt-2 text-[15px] leading-snug">
                connects to: focus, attention, deep work, notes →
              </p>
            </div>
            <div
              className="vd-float absolute bottom-0 left-12 w-52 rounded-[26px] bg-[#e3c98c]/90 p-5 shadow-[0_20px_50px_-20px_rgba(120,90,40,0.5)]"
              style={{ ["--r" as string]: "-2deg", animationDelay: "-4.5s" }}
            >
              <p className="text-[11px] font-medium uppercase tracking-wide text-[#8a6d2f]">
                ✿ in bloom
              </p>
              <p className="mt-2 text-[15px] leading-snug text-[#4a3a18]">
                ready to harvest into an essay
              </p>
            </div>
          </div>
        </section>

        {/* Stages */}
        <section id="how" className="py-16">
          <div className="mb-12 text-center">
            <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-[#5b8c6e]">
              How it grows
            </p>
            <h2
              className="mt-3 text-[clamp(1.8rem,4.5vw,3.2rem)] font-semibold tracking-tight"
              style={{ fontFamily: "var(--vd-display), sans-serif" }}
            >
              From seed to harvest.
            </h2>
          </div>
          <div id="garden" className="grid gap-6 md:grid-cols-3">
            {STAGES.map((s) => (
              <article
                key={s.stage}
                className="group rounded-[28px] bg-white/70 p-8 ring-1 ring-[#26352b]/8 backdrop-blur transition-all hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_30px_60px_-30px_rgba(38,53,43,0.45)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef3e8] text-xl text-[#5b8c6e] transition-colors group-hover:bg-[#5b8c6e] group-hover:text-white">
                  {s.glyph}
                </span>
                <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#5b8c6e]">
                  {s.stage}
                </p>
                <h3
                  className="mt-1 text-2xl font-semibold tracking-tight"
                  style={{ fontFamily: "var(--vd-display), sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#3f5246]">
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section className="my-12 overflow-hidden rounded-[40px] bg-[#26352b] px-8 py-16 text-center text-[#f5f3e9]">
          <span className="vd-sway inline-block text-4xl">🌿</span>
          <h2
            className="mx-auto mt-5 max-w-2xl text-[clamp(1.8rem,5vw,3.4rem)] font-semibold leading-tight tracking-tight"
            style={{ fontFamily: "var(--vd-display), sans-serif" }}
          >
            Your mind deserves a place to grow.
          </h2>
          <a
            href="#"
            className="mt-8 inline-block rounded-full bg-[#9bc4a4] px-8 py-4 text-[15px] font-semibold text-[#1b261f] transition-transform hover:scale-[1.04]"
          >
            Plant your first note — free
          </a>
        </section>

        <footer className="flex flex-col items-center gap-2 py-8 text-center">
          <p
            className="text-2xl font-semibold tracking-tight"
            style={{ fontFamily: "var(--vd-display), sans-serif" }}
          >
            🌿 Verdant
          </p>
          <p className="text-[13px] text-[#3f5246]/70">
            © {new Date().getFullYear()} — Grown with care
          </p>
        </footer>
      </div>
    </main>
  );
}
