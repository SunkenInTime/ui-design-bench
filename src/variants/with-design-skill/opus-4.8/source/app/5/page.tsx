import { Syne, Sora } from "next/font/google";

const display = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--he-display",
});

const body = Sora({
  subsets: ["latin"],
  variable: "--he-body",
});

const MODULES = [
  {
    no: "01",
    title: "Total recall",
    body: "Every note, idea, and link held in a single luminous index. Summon any memory in milliseconds.",
  },
  {
    no: "02",
    title: "Self-organizing",
    body: "Helios reads the shape of your thinking and arranges it for you. No folders to maintain, ever.",
  },
  {
    no: "03",
    title: "Always on",
    body: "Your second brain syncs across every device and keeps running while you sleep, surfacing connections by morning.",
  },
];

export default function HeliosPage() {
  return (
    <main
      className={`${display.variable} ${body.variable} relative min-h-screen overflow-hidden bg-[#190f10] text-[#ffeede] selection:bg-[#ff7a3c] selection:text-[#190f10]`}
      style={{ fontFamily: "var(--he-body), system-ui, sans-serif" }}
    >
      <style>{`
        @keyframes he-spin { to { transform: rotate(360deg) } }
        @keyframes he-rise { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }
        .he-spin { animation: he-spin 60s linear infinite; }
        .he-spin-rev { animation: he-spin 90s linear infinite reverse; }
        .he-rise { animation: he-rise 6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .he-spin,.he-spin-rev,.he-rise { animation: none; }
        }
      `}</style>

      {/* Solar gradient sky */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 120%, #ff5e3a 0%, #ff8a3c 18%, #ffb347 32%, rgba(255,94,58,0.15) 55%, transparent 70%)",
        }}
      />
      {/* Concentric retro sun rings */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[58%] -z-0 h-[150vmin] w-[150vmin] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="he-spin absolute inset-0 rounded-full border border-[#ffd9a0]/15" />
        <div className="he-spin-rev absolute inset-[12%] rounded-full border border-[#ffb347]/15" />
        <div className="he-spin absolute inset-[26%] rounded-full border border-[#ff7a3c]/20" />
        <div className="he-spin-rev absolute inset-[40%] rounded-full border border-[#ff5e7a]/20" />
      </div>
      {/* Grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {/* Top fade for legibility */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-64"
        style={{
          background: "linear-gradient(#190f10, transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10">
        {/* Nav */}
        <header className="flex items-center justify-between py-7">
          <div className="flex items-center gap-2.5">
            <span
              className="he-rise inline-block h-6 w-6 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, #ffe7b0, #ff7a3c 60%, #ff3d6e)",
                boxShadow: "0 0 24px rgba(255,122,60,0.8)",
              }}
            />
            <span
              className="text-[18px] font-extrabold uppercase tracking-[0.22em]"
              style={{ fontFamily: "var(--he-display), sans-serif" }}
            >
              Helios
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-[13px] text-[#ffeede]/60 md:flex">
            <a className="transition-colors hover:text-[#ffb347]" href="#system">
              The system
            </a>
            <a className="transition-colors hover:text-[#ffb347]" href="#modules">
              Modules
            </a>
            <a className="transition-colors hover:text-[#ffb347]" href="#launch">
              Pricing
            </a>
          </nav>
          <a
            href="#launch"
            className="rounded-full border border-[#ffeede]/25 px-5 py-2 text-[13px] font-medium transition-colors hover:border-[#ffb347] hover:text-[#ffb347]"
          >
            Log in
          </a>
        </header>

        {/* Hero */}
        <section className="flex flex-col items-center py-20 text-center sm:py-28">
          <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#ffb347]/40 bg-[#ffb347]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ffc873]">
            ☀ the operating system for your mind
          </p>
          <h1
            className="max-w-5xl text-[clamp(3rem,11vw,9rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.03em]"
            style={{ fontFamily: "var(--he-display), sans-serif" }}
          >
            <span className="block">A brighter</span>
            <span
              className="block"
              style={{
                background:
                  "linear-gradient(180deg,#ffe7b0 0%,#ffb347 38%,#ff7a3c 70%,#ff3d6e 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              way to think
            </span>
          </h1>
          <p className="mt-9 max-w-xl text-[17px] leading-relaxed text-[#ffeede]/70">
            Helios is a second brain that runs like a star at the center of your
            ideas — capturing everything, organizing itself, and radiating the
            right thought at exactly the right moment.
          </p>
          <div
            id="launch"
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-[15px] font-bold uppercase tracking-[0.08em] text-[#190f10] transition-transform hover:scale-[1.04]"
              style={{
                background: "linear-gradient(100deg,#ffd07a,#ff7a3c 60%,#ff3d6e)",
                boxShadow: "0 14px 44px -10px rgba(255,122,60,0.8)",
              }}
            >
              Launch your brain
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#system"
              className="rounded-full border border-[#ffeede]/25 px-8 py-4 text-[15px] font-medium transition-colors hover:border-[#ffb347] hover:text-[#ffb347]"
            >
              Watch the demo
            </a>
          </div>
        </section>

        {/* Modules */}
        <section id="modules" className="py-12">
          <div id="system" className="mb-12 flex items-end justify-between gap-6">
            <h2
              className="max-w-md text-[clamp(1.8rem,5vw,3.4rem)] font-extrabold uppercase leading-[0.95] tracking-tight"
              style={{ fontFamily: "var(--he-display), sans-serif" }}
            >
              Built like a solar system.
            </h2>
            <span className="hidden text-[12px] uppercase tracking-[0.2em] text-[#ffeede]/40 md:block">
              core modules
            </span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {MODULES.map((m) => (
              <article
                key={m.no}
                className="group relative overflow-hidden rounded-3xl border border-[#ffeede]/12 bg-[#ffeede]/[0.03] p-8 backdrop-blur-sm transition-colors hover:border-[#ff7a3c]/50"
              >
                <span
                  className="text-[13px] font-bold tracking-[0.2em] text-[#ff7a3c]"
                  style={{ fontFamily: "var(--he-display), sans-serif" }}
                >
                  {m.no}
                </span>
                <h3
                  className="mt-4 text-2xl font-bold tracking-tight"
                  style={{ fontFamily: "var(--he-display), sans-serif" }}
                >
                  {m.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-[#ffeede]/65">
                  {m.body}
                </p>
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "rgba(255,122,60,0.5)" }}
                />
              </article>
            ))}
          </div>
        </section>

        {/* Big closing sun */}
        <section className="relative my-16 overflow-hidden rounded-[40px] border border-[#ffeede]/10 px-8 py-20 text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(80% 120% at 50% 130%, #ff7a3c, #ff3d6e 40%, transparent 70%)",
            }}
          />
          <div className="relative">
            <h2
              className="mx-auto max-w-3xl text-[clamp(2rem,6vw,4.5rem)] font-extrabold uppercase leading-[0.92] tracking-tight"
              style={{ fontFamily: "var(--he-display), sans-serif" }}
            >
              Let your mind rise.
            </h2>
            <a
              href="#"
              className="mt-9 inline-block rounded-full bg-[#190f10] px-9 py-4 text-[15px] font-bold uppercase tracking-[0.08em] text-[#ffeede] ring-1 ring-[#ffeede]/20 transition-transform hover:scale-[1.04]"
            >
              Start free — no card
            </a>
          </div>
        </section>

        <footer className="flex flex-col items-center gap-2 border-t border-[#ffeede]/10 py-10 text-center">
          <p
            className="text-2xl font-extrabold uppercase tracking-[0.18em]"
            style={{ fontFamily: "var(--he-display), sans-serif" }}
          >
            Helios
          </p>
          <p className="text-[12px] uppercase tracking-[0.2em] text-[#ffeede]/40">
            © {new Date().getFullYear()} — radiate what you know
          </p>
        </footer>
      </div>
    </main>
  );
}
