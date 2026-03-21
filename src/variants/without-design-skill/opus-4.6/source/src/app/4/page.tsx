import DesignSwitcher from "@/variants/without-design-skill/opus-4.6/source/src/components/DesignSwitcher";

export default function DesignFour() {
  return (
    <div className="min-h-screen bg-[#f5f0ff] text-zinc-900">
      <DesignSwitcher />

      {/* Nav */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center bg-black text-xs font-black text-white">
            C
          </div>
          <span className="text-lg font-black uppercase tracking-widest">Cortex</span>
        </div>
        <div className="hidden items-center gap-8 text-xs font-bold uppercase tracking-wider text-zinc-400 md:flex">
          <a href="#" className="transition hover:text-black">System</a>
          <a href="#" className="transition hover:text-black">Modules</a>
          <a href="#" className="transition hover:text-black">Docs</a>
        </div>
        <div className="flex items-center gap-2">
          <button className="border-2 border-transparent px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-500 transition hover:text-black">
            Login
          </button>
          <button className="border-2 border-black bg-black px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white hover:text-black">
            Access
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="mb-6 inline-block border-2 border-indigo-500 px-3 py-1 text-xs font-bold uppercase tracking-widest text-indigo-600">
              v3.0 Released
            </div>
            <h1 className="text-5xl font-black leading-[1.05] tracking-tight md:text-8xl">
              THINK
              <br />
              <span className="text-indigo-600">BIGGER.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-500">
              Cortex is the modular second brain for ambitious minds. Structured,
              powerful, and unapologetically bold. Your knowledge system, engineered.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button className="h-14 border-2 border-black bg-black px-10 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-indigo-600 hover:border-indigo-600">
                Build your system
              </button>
              <button className="flex h-14 items-center justify-center gap-2 border-2 border-zinc-300 px-10 text-xs font-bold uppercase tracking-widest text-zinc-600 transition hover:border-black hover:text-black">
                Watch Demo
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              </button>
            </div>
          </div>
          {/* Geometric art */}
          <div className="flex items-center justify-center md:col-span-5">
            <div className="relative h-80 w-80">
              <div className="absolute inset-0 rotate-45 border-4 border-black" />
              <div className="absolute inset-8 rotate-12 border-4 border-indigo-500" />
              <div className="absolute inset-16 -rotate-12 bg-indigo-600" />
              <div className="absolute inset-20 rotate-45 bg-black" />
              <div className="absolute inset-24 bg-[#f5f0ff]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-black">&#x2731;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { value: "10X", label: "Faster recall" },
            { value: "∞", label: "Connections" },
            { value: "0", label: "Folders needed" },
            { value: "1", label: "Source of truth" },
          ].map((s, i) => (
            <div key={i} className="border-2 border-zinc-200 bg-white p-6 text-center transition hover:border-black">
              <div className="text-3xl font-black text-indigo-600 md:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs font-bold uppercase tracking-wider text-zinc-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16">
          <h2 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
            The System
          </h2>
          <div className="mt-2 h-1.5 w-24 bg-indigo-600" />
        </div>
        <div className="grid gap-0 border-2 border-black md:grid-cols-3">
          {[
            {
              num: "01",
              title: "Structured Notes",
              desc: "Templates, schemas, and types. Your notes aren't just text — they're typed data you can query and transform.",
            },
            {
              num: "02",
              title: "Graph Engine",
              desc: "Every note is a node with typed edges. Filter, traverse, and visualize your knowledge like a database.",
            },
            {
              num: "03",
              title: "Block Modules",
              desc: "Composable content blocks — tables, kanban, calendars, code. Build the views you need.",
            },
            {
              num: "04",
              title: "Command Bar",
              desc: "Keyboard-first navigation. Find anything, run any command, never leave the keyboard.",
            },
            {
              num: "05",
              title: "API Access",
              desc: "Full REST & GraphQL APIs. Your brain shouldn't be a walled garden — integrate everything.",
            },
            {
              num: "06",
              title: "Self-hosted",
              desc: "Own your data. Deploy on your own infrastructure with a single Docker command.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="group border-b-2 border-r-0 border-black bg-white p-8 transition-colors hover:bg-indigo-600 hover:text-white md:border-r-2 last:border-b-0 [&:nth-child(3n)]:border-r-0 [&:nth-last-child(-n+3)]:border-b-0"
            >
              <div className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-300 group-hover:text-indigo-200">
                {f.num}
              </div>
              <h3 className="mb-2 text-lg font-black">{f.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-500 group-hover:text-indigo-100">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="bg-black p-8 text-white md:p-16">
          <div className="grid items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-2">
              <div className="text-8xl font-black text-indigo-500">&ldquo;</div>
            </div>
            <div className="md:col-span-8">
              <p className="text-xl leading-relaxed md:text-2xl">
                Cortex is what Notion would be if it was designed by an engineer
                who actually uses their own product. Structured, fast, no fluff.
              </p>
              <div className="mt-6">
                <div className="text-sm font-bold uppercase tracking-wider">Jordan Lee</div>
                <div className="text-xs text-zinc-500">Staff Engineer, Stripe</div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="text-right text-8xl font-black text-indigo-500">&rdquo;</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="text-4xl font-black uppercase tracking-tight md:text-6xl">
          Stop collecting.
          <br />
          <span className="text-indigo-600">Start connecting.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-zinc-500">
          Your knowledge deserves a proper system. Build it with Cortex.
        </p>
        <button className="mt-8 h-14 border-2 border-black bg-black px-10 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-indigo-600 hover:border-indigo-600">
          Get started free
        </button>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl border-t-2 border-zinc-200 px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">&copy; 2026 Cortex Systems</span>
          <div className="flex gap-6 text-xs font-bold uppercase tracking-wider text-zinc-400">
            <a href="#" className="transition hover:text-black">Privacy</a>
            <a href="#" className="transition hover:text-black">Terms</a>
            <a href="#" className="transition hover:text-black">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

