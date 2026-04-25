import { IterationSwitcher } from "@/components/iteration-switcher";

export default function OnePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <IterationSwitcher />

      {/* Nav */}
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <div className="text-lg font-bold tracking-tight">Cortex</div>
        <div className="flex items-center gap-8 text-sm font-medium text-zinc-500">
          <a href="#" className="hover:text-zinc-900">Product</a>
          <a href="#" className="hover:text-zinc-900">Pricing</a>
          <a href="#" className="hover:text-zinc-900">Templates</a>
          <a
            href="#"
            className="rounded-lg bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-semibold tracking-tight leading-[1.1] sm:text-6xl">
            Your second brain,{" "}
            <span className="text-zinc-400">finally organized.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-500">
            Capture ideas, connect thoughts, and build a personal knowledge base
            that grows with you. No friction, no clutter.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <a
              href="#"
              className="rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              Start for free
            </a>
            <a
              href="#"
              className="rounded-lg border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Mock UI */}
        <div className="mt-20 rounded-2xl border border-zinc-200 bg-zinc-50 p-2 shadow-sm">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-zinc-100 pb-4">
              <div className="h-3 w-3 rounded-full bg-zinc-200" />
              <div className="h-3 w-3 rounded-full bg-zinc-200" />
              <div className="h-3 w-3 rounded-full bg-zinc-200" />
              <div className="ml-4 h-6 flex-1 rounded-md bg-zinc-100" />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="col-span-2 space-y-3">
                <div className="h-4 w-3/4 rounded bg-zinc-100" />
                <div className="h-4 w-full rounded bg-zinc-100" />
                <div className="h-4 w-5/6 rounded bg-zinc-100" />
                <div className="h-4 w-full rounded bg-zinc-100" />
              </div>
              <div className="space-y-3">
                <div className="h-20 rounded-lg bg-zinc-50" />
                <div className="h-20 rounded-lg bg-zinc-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-zinc-100 bg-zinc-50/50 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 sm:grid-cols-3">
            {[
              {
                title: "Instant Capture",
                desc: "Jot down ideas the moment they strike. Voice, text, or image — we handle the rest.",
              },
              {
                title: "Bi-Directional Links",
                desc: "Connect notes naturally. See relationships unfold as your knowledge graph grows.",
              },
              {
                title: "Daily Review",
                desc: "Resurface forgotten insights at the right time. Your past self helps your future self.",
              },
            ].map((f) => (
              <div key={f.title}>
                <h3 className="text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
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
