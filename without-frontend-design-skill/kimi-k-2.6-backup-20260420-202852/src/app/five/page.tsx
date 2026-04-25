import { IterationSwitcher } from "@/components/iteration-switcher";

export default function FivePage() {
  return (
    <div className="min-h-screen bg-violet-50 text-violet-950">
      <IterationSwitcher />

      {/* Nav */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-white font-bold text-sm">
            S
          </div>
          <span className="text-lg font-bold tracking-tight">Sparkbox</span>
        </div>
        <div className="flex items-center gap-6 text-sm font-semibold text-violet-700">
          <a href="#" className="hover:text-violet-900">Explore</a>
          <a href="#" className="hover:text-violet-900">Pricing</a>
          <a
            href="#"
            className="rounded-full bg-violet-600 px-5 py-2.5 text-white hover:bg-violet-700"
          >
            Get Sparkbox
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight leading-[1.1] sm:text-7xl">
            Ideas belong
            <br />
            <span className="text-violet-500">in color.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-violet-700">
            Sparkbox is the playful note-taking app that makes organizing your
            thoughts feel like arranging stickers in a scrapbook.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#"
              className="rounded-full bg-violet-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-600/25 hover:bg-violet-700"
            >
              Start collecting
            </a>
            <a
              href="#"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-violet-700 shadow-sm ring-1 ring-violet-200 hover:ring-violet-300"
            >
              Watch video
            </a>
          </div>
        </div>
      </section>

      {/* Bento grid */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Large feature */}
          <div className="col-span-1 sm:col-span-2 row-span-2 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-violet-100">
            <div className="flex h-full flex-col justify-between">
              <div>
                <span className="inline-block rounded-full bg-pink-100 px-3 py-1 text-xs font-bold text-pink-600">
                  Popular
                </span>
                <h3 className="mt-4 text-2xl font-bold">Infinite Canvas</h3>
                <p className="mt-2 text-sm leading-relaxed text-violet-700">
                  Drop notes anywhere. Zoom in for detail, zoom out for the big
                  picture. Your thoughts have space to breathe.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="aspect-square rounded-2xl bg-pink-50" />
                <div className="aspect-square rounded-2xl bg-violet-50" />
                <div className="aspect-square rounded-2xl bg-amber-50" />
                <div className="aspect-square rounded-2xl bg-emerald-50" />
                <div className="aspect-square rounded-2xl bg-sky-50" />
                <div className="aspect-square rounded-2xl bg-rose-50" />
              </div>
            </div>
          </div>

          {/* Tall card */}
          <div className="col-span-1 row-span-2 rounded-3xl bg-violet-600 p-6 text-white shadow-lg shadow-violet-600/20">
            <div className="flex h-full flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold">Quick Capture</h3>
                <p className="mt-2 text-sm leading-relaxed text-violet-100">
                  Voice memos, photos, links — captured in two taps.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                <div className="rounded-xl bg-white/10 p-3">
                  <div className="h-2 w-16 rounded bg-white/40" />
                  <div className="mt-2 h-2 w-full rounded bg-white/20" />
                </div>
                <div className="rounded-xl bg-white/10 p-3">
                  <div className="h-2 w-12 rounded bg-white/40" />
                  <div className="mt-2 h-2 w-3/4 rounded bg-white/20" />
                </div>
              </div>
            </div>
          </div>

          {/* Small cards */}
          <div className="rounded-3xl bg-amber-100 p-6">
            <h3 className="text-lg font-bold text-amber-900">Remix</h3>
            <p className="mt-2 text-sm text-amber-800">
              Combine notes into new compositions effortlessly.
            </p>
          </div>

          <div className="rounded-3xl bg-emerald-100 p-6">
            <h3 className="text-lg font-bold text-emerald-900">Tags</h3>
            <p className="mt-2 text-sm text-emerald-800">
              Color-coded, emoji-powered, totally you.
            </p>
          </div>

          <div className="col-span-1 sm:col-span-2 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-violet-100">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-2xl">
                🔗
              </div>
              <div>
                <h3 className="text-lg font-bold">Magic Links</h3>
                <p className="text-sm text-violet-700">
                  Paste a link and we auto-summarize, tag, and file it.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-rose-100 p-6">
            <h3 className="text-lg font-bold text-rose-900">Mood</h3>
            <p className="mt-2 text-sm text-rose-800">
              Notes tinted by how you felt writing them.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-violet-100">
            <h3 className="text-lg font-bold">Share</h3>
            <p className="mt-2 text-sm text-violet-700">
              Collaborative spaces for group projects.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-[2rem] bg-violet-600 px-8 py-16 text-center text-white shadow-xl shadow-violet-600/20">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready to spark something?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-violet-100">
            Join 40,000+ thinkers who turned their notes into their favorite
            creative tool.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-bold text-violet-600 shadow-lg hover:bg-violet-50"
          >
            Get started free
          </a>
        </div>
      </section>
    </div>
  );
}
