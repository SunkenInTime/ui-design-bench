import Link from "next/link";

export const metadata = {
  title: "Memora v1 — Calm Minimal | Second Brain",
  description: "Version 1: a calm, minimal landing page for Memora, your second brain.",
};

const features = [
  {
    title: "Capture in seconds",
    body: "A global shortcut files any thought before it evaporates. No folders, no friction.",
  },
  {
    title: "Connected by default",
    body: "Every note links itself. Ideas resurface exactly when they're relevant.",
  },
  {
    title: "Recall on demand",
    body: "Ask in plain language. Memora answers from your own notes, with sources.",
  },
];

export default function V1() {
  return (
    <div className="min-h-screen bg-[#faf9f6] font-serif text-stone-900">
      <header className="mx-auto flex max-w-2xl items-center justify-between px-6 py-8">
        <span className="font-sans text-sm font-bold tracking-[0.2em] uppercase">
          Memora
        </span>
        <nav className="flex items-center gap-6 font-sans text-sm text-stone-500">
          <a href="#features" className="transition-colors hover:text-stone-900">
            Features
          </a>
          <a href="#quote" className="transition-colors hover:text-stone-900">
            Why it works
          </a>
          <Link
            href="/2"
            className="rounded-full bg-stone-900 px-4 py-2 font-medium text-white transition-colors hover:bg-stone-700"
          >
            Try v2 →
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-2xl px-6 pt-16 pb-24 text-center sm:pt-24">
        <p className="font-sans text-xs font-semibold tracking-[0.25em] text-emerald-800 uppercase">
          Version 01 — Minimal
        </p>
        <h1 className="mt-6 text-5xl leading-[1.05] font-medium tracking-tight text-balance sm:text-6xl">
          Your second brain, minus the noise.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
          Memora is a quiet home for everything you know. Capture fast, connect
          effortlessly, and remember what matters — without another dashboard
          to manage.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 font-sans sm:flex-row">
          <a
            href="#cta"
            className="w-full rounded-full bg-stone-900 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-stone-700 sm:w-auto"
          >
            Start writing free
          </a>
          <a
            href="#features"
            className="w-full rounded-full border border-stone-300 px-8 py-3.5 text-sm font-semibold text-stone-800 transition-colors hover:border-stone-500 sm:w-auto"
          >
            See how it feels
          </a>
        </div>
        <p className="mt-5 font-sans text-xs text-stone-400">
          Free for 30 days · No credit card · Your notes stay yours
        </p>

        <div className="mx-auto mt-16 max-w-lg rounded-2xl border border-stone-200 bg-white p-6 text-left shadow-sm">
          <p className="font-sans text-xs font-semibold tracking-widest text-stone-400 uppercase">
            Today in Memora
          </p>
          <p className="mt-3 text-xl leading-snug">
            “Coffee with Maya → she mentioned{" "}
            <span className="bg-emerald-100 px-1">spaced repetition</span> for
            the launch checklist…”
          </p>
          <p className="mt-3 font-sans text-sm text-stone-500">
            Linked to 3 notes · resurfaces Friday before your review
          </p>
        </div>

        <section id="features" className="mt-24 text-left">
          <h2 className="text-center text-3xl font-medium tracking-tight">
            Less organizing. More thinking.
          </h2>
          <div className="mt-10 space-y-0 divide-y divide-stone-200 border-y border-stone-200">
            {features.map((f, i) => (
              <div key={f.title} className="grid grid-cols-[3rem_1fr] gap-4 py-7">
                <span className="font-sans text-sm text-stone-400">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-sans text-lg font-semibold">{f.title}</h3>
                  <p className="mt-1 leading-relaxed text-stone-600">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <blockquote
          id="quote"
          className="mt-24 border-l-2 border-emerald-700 pl-6 text-left text-2xl leading-snug text-stone-800 italic"
        >
          “I stopped re-reading the same articles. Memora remembers, so I can
          think.”
          <footer className="mt-4 font-sans text-sm text-stone-500 not-italic">
            — Lena K., researcher
          </footer>
        </blockquote>

        <section id="cta" className="mt-24 rounded-3xl bg-stone-900 px-8 py-14 text-white">
          <h2 className="text-3xl font-medium tracking-tight">
            Give your brain some backup.
          </h2>
          <p className="mx-auto mt-3 max-w-md font-sans text-sm leading-relaxed text-stone-300">
            Join 40,000+ thinkers keeping a second brain in Memora.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-sans text-sm font-semibold text-stone-900 transition-colors hover:bg-emerald-100"
          >
            Compare all 5 designs
          </Link>
        </section>

        <footer className="mt-16 font-sans text-xs text-stone-400">
          Memora v1 · Minimal — also try{" "}
          <Link href="/2" className="underline hover:text-stone-700">v2</Link>
          {", "}
          <Link href="/3" className="underline hover:text-stone-700">v3</Link>
          {", "}
          <Link href="/4" className="underline hover:text-stone-700">v4</Link>
          {", "}
          <Link href="/5" className="underline hover:text-stone-700">v5</Link>
        </footer>
      </main>
    </div>
  );
}
