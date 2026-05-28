import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cortex — A quiet place to think",
};

const serif = { fontFamily: "var(--font-fraunces), Georgia, serif" };

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className={`flex h-8 w-8 items-center justify-center rounded-full border ${dark ? "border-stone-200 text-stone-200" : "border-stone-800 text-stone-800"}`}>
        <span style={serif} className="text-lg italic">C</span>
      </div>
      <span style={serif} className={`text-xl ${dark ? "text-stone-100" : "text-stone-900"}`}>Cortex</span>
    </div>
  );
}

const principles = [
  {
    no: "I.",
    title: "Write first, organize never",
    body: "Folders are a tax on thought. Cortex lets you write freely; structure emerges later, on its own, through the links you make.",
  },
  {
    no: "II.",
    title: "Nothing is ever lost",
    body: "Every note is indexed the instant you type it. Ask a question in plain words and your past self answers, citing the page.",
  },
  {
    no: "III.",
    title: "Ideas compound",
    body: "A note you wrote two years ago resurfaces beside today’s thought. Over time, your second brain grows wiser than the first.",
  },
];

export default function Page() {
  return (
    <div className="flex flex-1 flex-col bg-[#f6f2ea] font-sans text-stone-800">
      {/* Nav */}
      <header className="border-b border-stone-300/60">
        <div className="mx-auto flex h-20 w-full max-w-5xl items-center justify-between px-6">
          <Logo />
          <nav className="hidden items-center gap-10 text-sm text-stone-600 md:flex">
            <a href="#manifesto" className="transition hover:text-stone-900">Manifesto</a>
            <a href="#features" className="transition hover:text-stone-900">The craft</a>
            <a href="#" className="transition hover:text-stone-900">Journal</a>
          </nav>
          <a href="#" style={serif} className="border-b-2 border-stone-800 pb-0.5 text-base italic text-stone-900 transition hover:text-stone-600">
            Begin writing
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto w-full max-w-4xl px-6 pt-24 pb-20 text-center sm:pt-32">
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.3em] text-stone-500">Est. for the thoughtful — a second brain</p>
        <h1 style={serif} className="text-balance text-5xl leading-[1.06] text-stone-900 sm:text-7xl">
          A quiet place <br />
          to <span className="italic text-amber-800">think</span>, to keep, <br /> to remember.
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-balance text-lg leading-relaxed text-stone-600">
          Cortex is a note-taking app for people who take their ideas seriously.
          Capture them like ink on paper — and let them grow into a library of your own mind.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#" className="rounded-full bg-stone-900 px-8 py-3.5 text-sm font-medium text-stone-50 transition hover:bg-stone-700">
            Start your notebook
          </a>
          <a href="#manifesto" style={serif} className="text-base italic text-stone-700 underline decoration-stone-400 underline-offset-4 transition hover:text-stone-900">
            Read the manifesto
          </a>
        </div>
      </section>

      {/* Pull quote / manifesto */}
      <section id="manifesto" className="border-y border-stone-300/60 bg-[#efe9dd]">
        <div className="mx-auto w-full max-w-3xl px-6 py-20 text-center">
          <span style={serif} className="text-6xl leading-none text-amber-800">“</span>
          <p style={serif} className="mt-2 text-balance text-2xl leading-relaxed text-stone-800 sm:text-3xl">
            We don’t remember our lives. We remember the notes we kept about them.
            Cortex makes sure those notes are still there — and still talking to each other — decades from now.
          </p>
          <p className="mt-8 text-sm uppercase tracking-[0.2em] text-stone-500">— The Cortex manifesto</p>
        </div>
      </section>

      {/* Principles */}
      <section id="features" className="mx-auto w-full max-w-4xl px-6 py-24">
        <h2 style={serif} className="mb-14 text-center text-4xl text-stone-900">Three principles</h2>
        <div className="divide-y divide-stone-300/70">
          {principles.map((p) => (
            <div key={p.no} className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-[80px_1fr]">
              <div style={serif} className="text-3xl italic text-amber-800">{p.no}</div>
              <div>
                <h3 style={serif} className="text-2xl text-stone-900">{p.title}</h3>
                <p className="mt-3 max-w-xl leading-relaxed text-stone-600">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-5xl px-6 pb-28">
        <div className="rounded-2xl border border-stone-800 bg-stone-900 px-8 py-16 text-center">
          <h2 style={serif} className="text-balance text-3xl text-stone-50 sm:text-4xl">
            Your mind deserves a better home.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-stone-400">Free to begin. Yours to keep, forever.</p>
          <a href="#" className="mt-8 inline-block rounded-full bg-[#f6f2ea] px-8 py-3.5 text-sm font-medium text-stone-900 transition hover:bg-white">
            Open a blank page
          </a>
        </div>
      </section>

      <footer className="border-t border-stone-300/60">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-stone-500 sm:flex-row">
          <Logo />
          <p style={serif} className="italic">Bound by hand, © {new Date().getFullYear()} Cortex Labs.</p>
        </div>
      </footer>
    </div>
  );
}
