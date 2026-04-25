import { IterationSwitcher } from "@/components/iteration-switcher";

export default function TwoPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <IterationSwitcher />

      {/* Nav */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-xl font-bold tracking-tight text-stone-900">Inkwell</div>
        <div className="flex items-center gap-8 text-sm font-medium text-stone-500">
          <a href="#" className="hover:text-stone-900">Philosophy</a>
          <a href="#" className="hover:text-stone-900">Stories</a>
          <a href="#" className="hover:text-stone-900">Community</a>
          <a
            href="#"
            className="rounded-full border border-stone-300 px-5 py-2 text-stone-900 hover:bg-stone-100"
          >
            Begin Writing
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber800">
              For curious minds
            </span>
            <h1 className="mt-6 text-5xl font-bold tracking-tight leading-[1.15] text-stone-900 sm:text-6xl">
              A garden for your thoughts.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Note-taking should feel like tending a garden — slow, intentional,
              and deeply rewarding. Cultivate ideas that compound over time.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <a
                href="#"
                className="rounded-full bg-stone-900 px-7 py-3 text-sm font-semibold text-stone-50 hover:bg-stone-800"
              >
                Plant your first seed
              </a>
              <a
                href="#"
                className="text-sm font-semibold text-stone-600 underline underline-offset-4 hover:text-stone-900"
              >
                Explore the garden
              </a>
            </div>
          </div>

          {/* Organic cards */}
          <div className="relative">
            <div className="absolute -top-8 -left-8 h-64 w-64 rounded-full bg-amber-100/60 blur-3xl" />
            <div className="absolute -bottom-8 -right-8 h-64 w-64 rounded-full bg-orange-100/60 blur-3xl" />
            <div className="relative space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-stone-100 rotate-[-1deg]">
                <div className="h-3 w-24 rounded bg-stone-200" />
                <div className="mt-3 h-3 w-full rounded bg-stone-100" />
                <div className="mt-2 h-3 w-5/6 rounded bg-stone-100" />
                <div className="mt-4 flex gap-2">
                  <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-700">#philosophy</span>
                  <span className="rounded-full bg-stone-100 px-2 py-0.5 text-[10px] font-medium text-stone-600">#morning-pages</span>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-stone-100 rotate-[1deg] ml-8">
                <div className="h-3 w-32 rounded bg-stone-200" />
                <div className="mt-3 h-3 w-full rounded bg-stone-100" />
                <div className="mt-2 h-3 w-4/5 rounded bg-stone-100" />
                <div className="mt-4 flex gap-2">
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">#ideas</span>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-stone-100 rotate-[-0.5deg]">
                <div className="h-3 w-20 rounded bg-stone-200" />
                <div className="mt-3 h-3 w-full rounded bg-stone-100" />
                <div className="mt-2 h-3 w-3/4 rounded bg-stone-100" />
                <div className="mt-4 flex gap-2">
                  <span className="rounded-full bg-sky-50 px-2 py-0.5 text-[10px] font-medium text-sky-700">#reading</span>
                  <span className="rounded-full bg-stone-100 px-2 py-0.5 text-[10px] font-medium text-stone-600">#zettelkasten</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-t border-stone-200 bg-stone-100/50 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <blockquote className="text-2xl font-medium italic leading-relaxed text-stone-700 sm:text-3xl">
            "The mind is not a vessel to be filled, but a fire to be kindled."
          </blockquote>
          <p className="mt-6 text-sm font-medium text-stone-500">
            — Plutarch
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-stone-900">
            Tools for deep thinking
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Morning Pages", desc: "Free-write every day. Clear the noise." },
              { title: "Zettelkasten", desc: "Atomic notes that link and grow." },
              { title: "Spaced Review", desc: "Resurface ideas when they matter." },
              { title: "Offline First", desc: "Your thoughts belong to you." },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-white p-6 shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-base font-bold text-stone-900">{f.title}</h3>
                <p className="mt-2 text-sm text-stone-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
