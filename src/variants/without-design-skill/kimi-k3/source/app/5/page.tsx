const glass =
  "rounded-2xl border border-white/15 bg-white/[0.07] backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.55)]";

const features = [
  {
    title: "Whisper-quiet capture",
    body: "A translucent panel slides over whatever you're doing. Type, hit enter, gone — the thought is safe and you're still in flow.",
    metric: "0.4s",
    metricLabel: "open to saved",
  },
  {
    title: "A mind that mirrors yours",
    body: "Semantic links form as you write. Cortex suggests the three notes your past self would want beside this one.",
    metric: "3×",
    metricLabel: "more notes rediscovered",
  },
  {
    title: "Private by design",
    body: "On-device intelligence, end-to-end encrypted sync. Your inner life stays exactly that — inner.",
    metric: "0",
    metricLabel: "bytes of data sold",
  },
];

const stats = [
  ["41K+", "second brains grown"],
  ["4.9", "average rating"],
  ["190ms", "median search"],
  ["100%", "Markdown, always"],
];

export default function IterationFive() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#0A0A1A] pb-36 font-sans text-white selection:bg-fuchsia-400/40">
      {/* Aurora background */}
      <div className="pointer-events-none fixed inset-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at 15% 0%, rgba(124,58,237,0.35), transparent 65%), radial-gradient(ellipse 55% 40% at 85% 10%, rgba(37,99,235,0.32), transparent 65%), radial-gradient(ellipse 50% 45% at 70% 85%, rgba(219,39,119,0.22), transparent 65%), radial-gradient(ellipse 45% 40% at 10% 90%, rgba(13,148,136,0.20), transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 70% 55% at 50% 20%, black, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 55% at 50% 20%, black, transparent 80%)",
          }}
        />
      </div>

      {/* Self-contained float animation */}
      <style>{`
        @keyframes aurora-drift-a { 0%,100% { transform: rotate(-6deg) translateY(0); } 50% { transform: rotate(-6deg) translateY(-12px); } }
        @keyframes aurora-drift-b { 0%,100% { transform: rotate(3deg) translateY(0); } 50% { transform: rotate(3deg) translateY(-16px); } }
        @keyframes aurora-drift-c { 0%,100% { transform: rotate(-1deg) translateY(0); } 50% { transform: rotate(-1deg) translateY(-9px); } }
      `}</style>

      {/* Floating nav */}
      <header className="relative z-10 mx-auto max-w-5xl px-6 pt-6">
        <div className={`${glass} flex items-center justify-between rounded-full px-6 py-3`}>
          <a href="#" className="flex items-center gap-2.5">
            <span className="h-3 w-3 rounded-full bg-gradient-to-br from-violet-300 via-fuchsia-300 to-sky-300 shadow-[0_0_14px_rgba(217,70,239,0.8)]" />
            <span className="text-[15px] font-semibold tracking-tight">Cortex</span>
          </a>
          <nav className="hidden items-center gap-7 text-[13px] text-white/60 md:flex">
            <a className="transition-colors hover:text-white" href="#features">Features</a>
            <a className="transition-colors hover:text-white" href="#numbers">Numbers</a>
            <a className="transition-colors hover:text-white" href="#voices">Voices</a>
          </nav>
          <a
            href="#access"
            className="rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-[#0A0A1A] transition-colors hover:bg-white/85"
          >
            Get access
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pt-24 text-center md:pt-32">
        <span className={`${glass} inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs text-white/70`}>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.9)]" />
          Introducing Cortex Sync — every device, one mind
        </span>

        <h1 className="mx-auto mt-9 max-w-3xl text-6xl font-semibold leading-[1.02] tracking-tight md:text-8xl">
          Clarity,
          <br />
          <span className="bg-gradient-to-r from-violet-300 via-fuchsia-200 to-sky-300 bg-clip-text font-serif italic text-transparent">
            captured.
          </span>
        </h1>
        <p className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-white/55">
          Cortex is the note-taking app that becomes your second brain. Every
          thought, softly held. Every connection, quietly made. Nothing you
          write is ever lost again.
        </p>

        {/* Email capture */}
        <form
          id="access"
          className={`${glass} mx-auto mt-11 flex max-w-md items-center gap-2 rounded-full p-2`}
        >
          <input
            type="email"
            required
            placeholder="you@futureself.com"
            className="w-full bg-transparent px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/35"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 px-6 py-2.5 text-sm font-semibold text-[#0A0A1A] transition-transform hover:scale-[1.04]"
          >
            Begin
          </button>
        </form>
        <p className="mt-4 text-xs text-white/35">
          Free for 1,000 notes · No credit card · Export anytime
        </p>

        {/* Floating glass notes */}
        <div className="relative mx-auto mt-20 h-[380px] max-w-3xl sm:h-[340px]">
          <div
            className={`${glass} absolute left-0 top-8 w-64 p-5 text-left`}
            style={{ animation: "aurora-drift-a 7s ease-in-out infinite" }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-fuchsia-200/70">
              Idea · 2:47 AM
            </p>
            <p className="mt-2.5 text-sm leading-relaxed text-white/85">
              What if the essay opens with the lighthouse keeper&rsquo;s log
              instead of the storm?
            </p>
            <div className="mt-4 flex gap-2">
              <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] text-white/60">writing</span>
              <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] text-white/60">novel</span>
            </div>
          </div>

          <div
            className={`${glass} absolute right-0 top-0 w-64 p-5 text-left`}
            style={{ animation: "aurora-drift-b 9s ease-in-out infinite" }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-200/70">
              Resurfaced · from Mar 2024
            </p>
            <p className="mt-2.5 text-sm leading-relaxed text-white/85">
              &ldquo;Attention is the rarest and purest form of
              generosity.&rdquo; — S. Weil. Links to 6 notes on focus.
            </p>
          </div>

          <div
            className={`${glass} absolute bottom-0 left-1/2 w-72 -translate-x-1/2 p-5 text-left`}
            style={{ animation: "aurora-drift-c 8s ease-in-out infinite" }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-200/70">
              Suggested connections
            </p>
            <ul className="mt-2.5 space-y-2 text-sm text-white/85">
              {["Deep work rituals", "The lighthouse draft", "Notes on noticing"].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-300 to-fuchsia-300" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="numbers" className="relative z-10 mx-auto max-w-5xl px-6 pt-16">
        <div className={`${glass} grid grid-cols-2 gap-y-10 px-8 py-10 md:grid-cols-4`}>
          {stats.map(([value, label]) => (
            <div key={label} className="text-center">
              <p className="bg-gradient-to-r from-violet-200 to-sky-200 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-5xl">
                {value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/40">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 mx-auto max-w-5xl px-6 pt-28">
        <h2 className="text-center text-3xl font-semibold tracking-tight md:text-5xl">
          Designed to disappear
        </h2>
        <p className="mx-auto mt-4 max-w-md text-center text-white/50">
          The best second brain is the one you forget you&rsquo;re using.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((f) => (
            <article key={f.title} className={`${glass} p-7 transition-colors hover:bg-white/[0.1]`}>
              <p className="bg-gradient-to-r from-violet-200 to-fuchsia-200 bg-clip-text text-4xl font-semibold text-transparent">
                {f.metric}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/40">
                {f.metricLabel}
              </p>
              <h3 className="mt-6 text-lg font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/50">{f.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section id="voices" className="relative z-10 mx-auto max-w-3xl px-6 pt-28">
        <figure className={`${glass} p-10 text-center md:p-14`}>
          <blockquote className="font-serif text-2xl italic leading-snug text-white/85 md:text-3xl">
            &ldquo;Using Cortex feels like thinking in low gravity. The notes
            are just… there, floating exactly where I need them.&rdquo;
          </blockquote>
          <figcaption className="mt-8 text-xs uppercase tracking-[0.22em] text-white/40">
            Ines Duarte — Architect & essayist
          </figcaption>
        </figure>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pt-28">
        <div className={`${glass} relative overflow-hidden px-8 py-16 text-center md:py-20`}>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 60% at 50% 120%, rgba(217,70,239,0.25), transparent 70%)",
            }}
          />
          <h2 className="relative text-4xl font-semibold tracking-tight md:text-6xl">
            Meet your mind,
            <br />
            <span className="bg-gradient-to-r from-violet-300 to-sky-300 bg-clip-text font-serif italic text-transparent">
              five years from now.
            </span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-md text-white/55">
            Every note you keep today becomes a gift to the person you&rsquo;ll
            be. Start the collection.
          </p>
          <a
            href="#"
            className="relative mt-9 inline-block rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 px-9 py-4 text-sm font-semibold text-[#0A0A1A] transition-transform hover:scale-[1.05]"
          >
            Begin your second brain
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mx-auto mt-24 flex max-w-5xl flex-col items-start justify-between gap-4 border-t border-white/10 px-6 pt-8 text-xs text-white/35 sm:flex-row sm:items-center">
        <span className="flex items-center gap-2 text-white/70">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet-300 to-sky-300" />
          Cortex
        </span>
        <span>Softly held, forever yours</span>
        <span>© 2026 Cortex Labs</span>
      </footer>
    </main>
  );
}
