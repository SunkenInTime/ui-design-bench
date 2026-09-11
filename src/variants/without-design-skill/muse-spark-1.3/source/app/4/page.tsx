import Link from "next/link";

export const metadata = {
  title: "Memora v4 — Playful Bento | Second Brain",
  description: "Version 4: a playful bento-grid landing page for Memora, your second brain.",
};

export default function V4() {
  return (
    <div className="min-h-screen bg-[#f6f3ff] font-sans text-[#231d33]">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="rounded-2xl bg-[#231d33] px-4 py-2 text-sm font-black tracking-wide text-white">
          ✳ memora
        </span>
        <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
          <a href="#bento" className="hover:text-violet-700">Features</a>
          <a href="#love" className="hover:text-violet-700">Wall of love</a>
          <a href="#cta" className="hover:text-violet-700">Pricing</a>
        </nav>
        <Link href="/5" className="rounded-full bg-violet-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-violet-600/25 hover:bg-violet-500">
          Try v5 →
        </Link>
      </header>

      <main className="mx-auto max-w-6xl px-6 pt-10 pb-24 sm:pt-16">
        <div className="text-center">
          <p className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-bold tracking-widest text-violet-700 uppercase shadow-sm">
            ✿ Version 04 — Playful
          </p>
          <h1 className="mx-auto mt-6 max-w-3xl text-5xl leading-[1.02] font-black tracking-tight text-balance sm:text-7xl">
            Notes that <span className="rounded-2xl bg-yellow-300 px-3 whitespace-nowrap">spark joy</span> and ideas
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-[#5b5370]">
            Doodle it, dictate it, dump it — Memora turns glorious mess into a
            second brain that practically high-fives you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#cta" className="w-full rounded-full bg-[#231d33] px-8 py-4 text-sm font-bold text-white hover:bg-violet-700 sm:w-auto">
              Start free — no card needed
            </a>
            <a href="#bento" className="w-full rounded-full bg-white px-8 py-4 text-sm font-bold shadow-sm hover:shadow sm:w-auto">
              Peek inside ↓
            </a>
          </div>
        </div>

        <section id="bento" className="mt-14 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl bg-violet-600 p-7 text-white md:col-span-2 md:row-span-2">
            <p className="text-xs font-bold tracking-widest uppercase opacity-70">Capture anything</p>
            <h2 className="mt-2 text-3xl font-black">Your brain dump, but cute.</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ["✎", "Quick note", "mint"],
                ["◉", "Voice memo", "peach"],
                ["▣", "Web clip", "lemon"],
              ].map(([icon, label]) => (
                <div key={label} className="rounded-2xl bg-white/15 p-4 backdrop-blur">
                  <p className="text-2xl">{icon}</p>
                  <p className="mt-2 text-sm font-bold">{label}</p>
                  <p className="text-xs opacity-70">saved just now ✓</p>
                </div>
              ))}
            </div>
            <p className="mt-6 inline-block rounded-full bg-black/25 px-4 py-2 text-xs font-bold">
              ⚡ 0.8s average capture time
            </p>
          </div>

          <div className="rounded-3xl bg-yellow-300 p-7">
            <p className="text-4xl font-black">2M+</p>
            <p className="mt-1 text-sm font-bold">notes connected every week — the graph is buzzing</p>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-sm">
            <p className="text-xs font-bold tracking-widest text-violet-600 uppercase">Daily surprise</p>
            <p className="mt-2 text-lg leading-snug font-bold">“Remember this? It pairs perfectly with today&apos;s meeting.”</p>
            <p className="mt-3 text-sm text-[#5b5370]">Serendipity engine · on</p>
          </div>

          <div className="rounded-3xl bg-mint-100 bg-emerald-100 p-7">
            <p className="text-xs font-bold tracking-widest text-emerald-700 uppercase">Streaks</p>
            <p className="mt-2 text-lg font-bold">12-day thinking streak — keep going!</p>
            <div className="mt-4 flex gap-1.5">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className={`h-6 w-full rounded-md ${i < 10 ? "bg-emerald-500" : "bg-emerald-500/25"}`} />
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-[#231d33] p-7 text-white">
            <p className="text-xs font-bold tracking-widest text-fuchsia-300 uppercase">Ask anything</p>
            <p className="mt-2 font-mono text-sm leading-relaxed text-fuchsia-100">
              &gt; summarize my book notes on focus…
              <br />
              <span className="text-white">→ 3 ideas + 1 action for Friday ✓</span>
            </p>
          </div>

          <div className="rounded-3xl bg-rose-200 p-7">
            <p className="text-xs font-bold tracking-widest text-rose-800 uppercase">Works everywhere</p>
            <p className="mt-2 text-lg font-bold">iOS · Android · Mac · Web · that old iPad</p>
          </div>
        </section>

        <section id="love" className="mt-14 grid gap-4 md:grid-cols-3">
          {[
            ["“My notes finally feel alive.”", "Priya · designer", "bg-white"],
            ["“Deleted 4 apps after week one.”", "Tom · founder", "bg-violet-100"],
            ["“It&apos;s Duolingo for my ideas.”", "Sam · student", "bg-white"],
          ].map(([quote, who, bg]) => (
            <figure key={who} className={`rounded-3xl ${bg} p-6 shadow-sm`}>
              <blockquote className="text-lg font-bold" dangerouslySetInnerHTML={{ __html: quote }} />
              <figcaption className="mt-2 text-sm text-[#5b5370]">{who}</figcaption>
            </figure>
          ))}
        </section>

        <section id="cta" className="mt-14 rounded-[2.5rem] bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-400 p-10 text-center text-white sm:p-16">
          <h2 className="mx-auto max-w-xl text-4xl font-black tracking-tight text-balance sm:text-5xl">
            Come for the colors, stay for the clarity.
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/" className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#231d33] hover:bg-yellow-200">
              Get Memora free
            </Link>
            <Link href="/3" className="rounded-full border-2 border-white/50 px-8 py-3.5 text-sm font-bold hover:border-white">
              ← Serious? See v3
            </Link>
          </div>
        </section>

        <footer className="mt-10 text-center text-xs text-[#5b5370]">
          Memora v4 · Playful Bento —{" "}
          <Link href="/1" className="underline">v1</Link>{" · "}
          <Link href="/2" className="underline">v2</Link>{" · "}
          <Link href="/5" className="underline">v5</Link>
        </footer>
      </main>
    </div>
  );
}
