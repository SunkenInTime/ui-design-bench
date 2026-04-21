import { IterationSwitcher } from "@/components/iteration-switcher";

export default function FourPage() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <IterationSwitcher />

      {/* Nav */}
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8">
        <div className="text-2xl font-black tracking-tighter uppercase">Logos</div>
        <div className="hidden items-center gap-10 text-sm font-medium uppercase tracking-wide text-neutral-500 md:flex">
          <a href="#" className="hover:text-neutral-900">Journal</a>
          <a href="#" className="hover:text-neutral-900">Archive</a>
          <a href="#" className="hover:text-neutral-900">Essays</a>
          <a href="#" className="hover:text-neutral-900">About</a>
        </div>
        <a
          href="#"
          className="text-sm font-bold uppercase tracking-wide underline underline-offset-4 hover:text-neutral-600"
        >
          Subscribe
        </a>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-20">
        <div className="border-b-2 border-neutral-900 pb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">
            The thinking tool
          </p>
          <h1 className="mt-6 text-6xl font-black leading-[0.95] tracking-tight sm:text-8xl">
            WRITE
            <br />
            TO
            <br />
            THINK.
          </h1>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <p className="text-lg leading-relaxed text-neutral-600">
            Logos is a note-taking system designed for writers, researchers, and
            thinkers who believe that clarity emerges from the act of writing
            itself.
          </p>
          <div className="flex items-end justify-start lg:justify-end">
            <a
              href="#"
              className="inline-block border-2 border-neutral-900 px-8 py-4 text-sm font-bold uppercase tracking-wide hover:bg-neutral-900 hover:text-white transition-colors"
            >
              Start Writing
            </a>
          </div>
        </div>
      </section>

      {/* Editorial grid */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-px bg-neutral-300 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              tag: "Feature",
              title: "The Daily Page",
              desc: "A clean slate every morning. No templates, no friction. Just you and the cursor.",
            },
            {
              tag: "System",
              title: "Fleeting vs Permanent",
              desc: "Separate raw notes from polished ideas. Move between them with a single keystroke.",
            },
            {
              tag: "Philosophy",
              title: "Tools for Thought",
              desc: "We don't store notes. We build thinking environments that shape how ideas form.",
            },
            {
              tag: "Workflow",
              title: "Index Cards",
              desc: "Atomic notes on digital index cards. Rearrange, combine, and sequence your thinking.",
            },
            {
              tag: "Archive",
              title: "Living Bibliography",
              desc: "Every source, every quote, every reference — connected to the ideas they inspired.",
            },
            {
              tag: "Community",
              title: "Letters to Self",
              desc: "Write letters to your future self. Receive them when the time is right.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-neutral-50 p-8 hover:bg-neutral-100 transition-colors"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                {item.tag}
              </span>
              <h3 className="mt-4 text-xl font-bold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Big quote */}
      <section className="bg-neutral-900 px-6 py-32 text-neutral-50">
        <div className="mx-auto max-w-4xl">
          <blockquote className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            "I don't know what I think until I read what I write."
          </blockquote>
          <div className="mt-8 h-1 w-16 bg-neutral-50" />
          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-neutral-400">
            — Adapted from William Faulkner
          </p>
        </div>
      </section>
    </div>
  );
}
