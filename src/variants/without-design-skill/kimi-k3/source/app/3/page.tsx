const notes = [
  {
    color: "bg-[#FFD02F]",
    rotate: "-rotate-2",
    title: "DUMP IT IN",
    body: "Shower thoughts, book quotes, 3am genius. Throw everything into the inbox. Sorting is a later-you problem.",
    tag: "CAPTURE",
  },
  {
    color: "bg-[#FF90E8]",
    rotate: "rotate-1",
    title: "LINK IT UP",
    body: "Draw lines between ideas like a conspiracy theorist with a corkboard — except the connections are real.",
    tag: "CONNECT",
  },
  {
    color: "bg-[#7BA7FF]",
    rotate: "-rotate-1",
    title: "GET REMINDED",
    body: "Cortex taps you on the shoulder exactly when an old note becomes useful again. Spooky. Useful.",
    tag: "RESURFACE",
  },
  {
    color: "bg-[#7FE3A0]",
    rotate: "rotate-2",
    title: "OWN IT ALL",
    body: "Plain Markdown files on your disk. If we disappear tomorrow, your brain stays exactly where you left it.",
    tag: "FOREVER",
  },
];

const steps = [
  {
    n: "1",
    title: "Install in 30 seconds",
    body: "One download, no account wall. The quick-capture hotkey works before you've even finished the tour.",
  },
  {
    n: "2",
    title: "Write like nobody's filing",
    body: "No folders, no tags unless you want them. Just write — [[brackets]] make the connections.",
  },
  {
    n: "3",
    title: "Watch it compound",
    body: "Week three is when it clicks: your notes start answering questions you haven't asked yet.",
  },
];

export default function IterationThree() {
  return (
    <main className="min-h-screen w-full bg-[#FFF9E6] pb-36 font-sans text-[#111111] selection:bg-[#FF90E8]">
      {/* Nav */}
      <header className="border-b-[3px] border-black bg-[#FFF9E6]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#"
            className="-rotate-2 border-[3px] border-black bg-[#FFD02F] px-4 py-1.5 text-xl font-black uppercase tracking-tight shadow-[4px_4px_0_#111]"
          >
            Cortex
          </a>
          <nav className="hidden items-center gap-7 text-sm font-bold uppercase tracking-wide md:flex">
            <a className="hover:underline hover:decoration-[3px] hover:underline-offset-4" href="#how">How it works</a>
            <a className="hover:underline hover:decoration-[3px] hover:underline-offset-4" href="#love">Love notes</a>
            <a className="hover:underline hover:decoration-[3px] hover:underline-offset-4" href="#get">Get it</a>
          </nav>
          <a
            href="#get"
            className="border-[3px] border-black bg-black px-5 py-2.5 text-sm font-black uppercase text-[#FFD02F] shadow-[4px_4px_0_#FF90E8] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#FF90E8]"
          >
            Download free
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pt-16 md:pt-24">
        <span className="absolute right-8 top-10 hidden rotate-6 border-[3px] border-black bg-[#7FE3A0] px-4 py-2 text-xs font-black uppercase tracking-widest shadow-[4px_4px_0_#111] md:block">
          100% your second brain
        </span>
        <p className="inline-block border-[3px] border-black bg-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest">
          * A note-taking app that actually remembers
        </p>
        <h1 className="mt-6 text-[13vw] font-black uppercase leading-[0.92] tracking-tight sm:text-7xl md:text-8xl">
          Stop
          <br />
          <span className="bg-[#FF90E8] px-2">forgetting</span>
          <br />
          everything.
        </h1>
        <p className="mt-8 max-w-xl border-l-[6px] border-black pl-5 text-lg font-medium leading-relaxed">
          Your brain is for having ideas, not holding them. Cortex is the
          external hard drive for your head — capture everything, connect it
          all, and never lose a thought again.
        </p>
        <div className="mt-10 flex flex-wrap gap-5">
          <a
            href="#get"
            className="border-[3px] border-black bg-[#FFD02F] px-8 py-4 text-base font-black uppercase shadow-[6px_6px_0_#111] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_#111]"
          >
            Brain me a note
          </a>
          <a
            href="#how"
            className="border-[3px] border-black bg-white px-8 py-4 text-base font-black uppercase shadow-[6px_6px_0_#111] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_#111]"
          >
            How it works ↓
          </a>
        </div>
      </section>

      {/* Marquee strip (static) */}
      <div className="mt-20 -rotate-1 border-y-[3px] border-black bg-black py-3">
        <p className="whitespace-nowrap text-center text-lg font-black uppercase tracking-[0.3em] text-[#FFD02F]">
          Capture ✳ Connect ✳ Remember ✳ Capture ✳ Connect ✳ Remember ✳ Capture ✳ Connect ✳ Remember
        </p>
      </div>

      {/* Sticky note features */}
      <section className="mx-auto max-w-6xl px-6 pt-24">
        <h2 className="text-4xl font-black uppercase tracking-tight md:text-6xl">
          Four sticky notes,
          <br />
          one <span className="bg-[#7BA7FF] px-2">big brain</span>
        </h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {notes.map((note) => (
            <article
              key={note.title}
              className={`relative ${note.color} ${note.rotate} border-[3px] border-black p-6 pt-10 shadow-[7px_7px_0_#111] transition-transform hover:rotate-0 hover:scale-[1.03]`}
            >
              <span className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-[-3deg] border border-black/20 bg-white/70" />
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em]">
                ● {note.tag}
              </p>
              <h3 className="mt-3 text-2xl font-black uppercase leading-none">
                {note.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed">
                {note.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* How it works — tickets */}
      <section id="how" className="mx-auto max-w-6xl px-6 pt-28">
        <div className="border-[3px] border-black bg-white shadow-[8px_8px_0_#111]">
          <div className="border-b-[3px] border-black bg-[#7BA7FF] px-6 py-4">
            <h2 className="text-2xl font-black uppercase tracking-tight md:text-4xl">
              How it works — admit one
            </h2>
          </div>
          <div className="grid md:grid-cols-3">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={`relative p-8 ${i < 2 ? "border-black max-md:border-b-[3px] md:border-r-[3px] md:[border-right-style:dashed]" : ""}`}
              >
                <span className="inline-block border-[3px] border-black bg-[#FFD02F] px-3 py-1 text-2xl font-black shadow-[3px_3px_0_#111]">
                  {s.n}
                </span>
                <h3 className="mt-5 text-xl font-black uppercase">{s.title}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section id="love" className="mx-auto max-w-4xl px-6 pt-28">
        <figure className="rotate-1 border-[3px] border-black bg-[#FF90E8] p-8 shadow-[8px_8px_0_#111] md:p-12">
          <div className="flex gap-1 text-2xl" aria-label="5 out of 5 stars">
            {"★★★★★".split("").map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>
          <blockquote className="mt-5 text-2xl font-black uppercase leading-tight md:text-3xl">
            &ldquo;I remembered a book quote from 2019 in the middle of a meeting.
            My boss thinks I&rsquo;m a genius. It was the app.&rdquo;
          </blockquote>
          <figcaption className="mt-6 font-mono text-xs font-bold uppercase tracking-widest">
            — Jess Okafor, chronicler of everything
          </figcaption>
        </figure>
      </section>

      {/* CTA */}
      <section id="get" className="mx-auto max-w-6xl px-6 pt-28">
        <div className="border-[3px] border-black bg-black px-8 py-14 text-center shadow-[10px_10px_0_#FF90E8] md:py-20">
          <h2 className="text-4xl font-black uppercase tracking-tight text-[#FFD02F] md:text-6xl">
            Ready to remember
            <br />
            everything?
          </h2>
          <p className="mx-auto mt-5 max-w-md font-mono text-sm text-white/70">
            Free forever for 1,000 notes. $6/mo for an infinite head. 30-day
            no-questions refunds.
          </p>
          <a
            href="#"
            className="mt-9 inline-block border-[3px] border-[#FFD02F] bg-[#FF90E8] px-10 py-4 text-base font-black uppercase text-black shadow-[6px_6px_0_#FFD02F] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_#FFD02F]"
          >
            Get Cortex free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto mt-24 flex max-w-6xl flex-col items-start justify-between gap-4 border-t-[3px] border-black px-6 pt-8 text-xs font-bold uppercase tracking-widest sm:flex-row sm:items-center">
        <span className="-rotate-2 border-[3px] border-black bg-[#FFD02F] px-3 py-1 text-sm font-black shadow-[3px_3px_0_#111]">
          Cortex
        </span>
        <span>No folders were harmed in the making of this app</span>
        <span>© 2026 Cortex Co.</span>
      </footer>
    </main>
  );
}
