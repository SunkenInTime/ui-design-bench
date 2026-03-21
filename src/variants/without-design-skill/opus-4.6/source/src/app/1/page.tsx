import DesignSwitcher from "@/variants/without-design-skill/opus-4.6/source/src/components/DesignSwitcher";

export default function DesignOne() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900">
      <DesignSwitcher />

      {/* Nav */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white text-xs font-bold">
            S
          </div>
          <span className="text-lg font-semibold tracking-tight">Synapse</span>
        </div>
        <div className="hidden items-center gap-8 text-sm text-zinc-500 md:flex">
          <a href="#" className="transition hover:text-zinc-900">Features</a>
          <a href="#" className="transition hover:text-zinc-900">Pricing</a>
          <a href="#" className="transition hover:text-zinc-900">About</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-600 transition hover:text-zinc-900">
            Log in
          </button>
          <button className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-20 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-xs font-medium text-zinc-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Now in public beta
          </div>
          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-zinc-900 md:text-7xl">
            Your thoughts,
            <br />
            <span className="text-zinc-400">beautifully connected.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-500">
            Synapse is the note-taking app that thinks the way you do.
            Capture ideas, link knowledge, and let your second brain surface
            what matters most.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="h-12 rounded-xl bg-zinc-900 px-8 text-sm font-medium text-white transition hover:bg-zinc-800">
              Start for free
            </button>
            <button className="flex h-12 items-center gap-2 rounded-xl border border-zinc-200 bg-white px-8 text-sm font-medium text-zinc-600 transition hover:border-zinc-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              Watch demo
            </button>
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-200/50">
          <div className="flex items-center gap-2 border-b border-zinc-100 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-zinc-200" />
            <div className="h-3 w-3 rounded-full bg-zinc-200" />
            <div className="h-3 w-3 rounded-full bg-zinc-200" />
            <div className="ml-4 h-6 flex-1 rounded-md bg-zinc-50" />
          </div>
          <div className="flex min-h-[400px]">
            {/* Sidebar */}
            <div className="hidden w-56 border-r border-zinc-100 p-4 md:block">
              <div className="mb-4 h-5 w-24 rounded bg-zinc-100" />
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`mb-2 flex items-center gap-2 rounded-lg px-3 py-2 ${i === 1 ? "bg-zinc-100" : ""}`}>
                  <div className="h-4 w-4 rounded bg-zinc-200" />
                  <div className={`h-3 rounded bg-zinc-${i === 1 ? "300" : "100"}`} style={{ width: `${60 + Math.random() * 40}%` }} />
                </div>
              ))}
            </div>
            {/* Content */}
            <div className="flex-1 p-8">
              <div className="mb-6 h-8 w-64 rounded-lg bg-zinc-100" />
              <div className="space-y-3">
                <div className="h-4 w-full rounded bg-zinc-50" />
                <div className="h-4 w-5/6 rounded bg-zinc-50" />
                <div className="h-4 w-4/6 rounded bg-zinc-50" />
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="h-24 rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50" />
                <div className="h-24 rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Everything your brain needs
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-500">
            Capture, connect, and recall your ideas with tools built for the way you actually think.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
              ),
              title: "Bi-directional Links",
              desc: "Every note is a node. Connect ideas organically and discover unexpected relationships between your thoughts.",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              ),
              title: "Instant Recall",
              desc: "Full-text search that feels like thought retrieval. Find any idea in milliseconds, no matter how deep it's buried.",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
              ),
              title: "Knowledge Graph",
              desc: "Visualize your thinking in a stunning 3D graph. See patterns emerge that your linear mind would miss.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-100"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 transition group-hover:bg-zinc-900 group-hover:text-white">
                {f.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl bg-zinc-900 px-8 py-16 text-center text-white md:px-16">
          <p className="mx-auto max-w-2xl text-2xl font-medium leading-relaxed md:text-3xl">
            &ldquo;Synapse changed how I think. My notes aren&apos;t
            just stored &mdash; they&apos;re alive, connected, and always
            resurfacing when I need them.&rdquo;
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-10 w-10 rounded-full bg-zinc-700" />
            <div className="text-left">
              <div className="text-sm font-medium">Alex Rivera</div>
              <div className="text-xs text-zinc-400">Researcher &amp; Writer</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Ready to think better?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-zinc-500">
          Join thousands of thinkers who use Synapse as their second brain. Free to start, powerful to grow.
        </p>
        <button className="mt-8 h-12 rounded-xl bg-zinc-900 px-8 text-sm font-medium text-white transition hover:bg-zinc-800">
          Get started &mdash; it&apos;s free
        </button>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl border-t border-zinc-200 px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-sm text-zinc-400">&copy; 2026 Synapse. All rights reserved.</span>
          <div className="flex gap-6 text-sm text-zinc-400">
            <a href="#" className="transition hover:text-zinc-600">Privacy</a>
            <a href="#" className="transition hover:text-zinc-600">Terms</a>
            <a href="#" className="transition hover:text-zinc-600">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

