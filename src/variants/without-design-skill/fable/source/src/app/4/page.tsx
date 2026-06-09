import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cortex — Your second brain · Design 4",
};

const stickies = [
  {
    text: "call grandma — she mentioned that soup recipe",
    bg: "bg-[#fff3b0]",
    rotate: "-rotate-3",
  },
  {
    text: "idea: a garden journal that waters itself?",
    bg: "bg-[#ffd6e0]",
    rotate: "rotate-2",
  },
  {
    text: "book: ‘How to Take Smart Notes’ → ch. 3 again",
    bg: "bg-[#c1e7e3]",
    rotate: "-rotate-1",
  },
  {
    text: "the best ideas show up in the shower. capture them after.",
    bg: "bg-[#dcd6ff]",
    rotate: "rotate-3",
  },
];

const steps = [
  {
    emojiPath: (
      <path
        d="M12 5v14M5 12h14"
        strokeWidth="2.2"
        strokeLinecap="round"
        className="stroke-[#7c6cf0]"
      />
    ),
    bg: "bg-[#ece9ff]",
    title: "Jot it down",
    body: "One tap, one thought. Cortex keeps the page always within reach — phone, laptop, watch.",
  },
  {
    emojiPath: (
      <>
        <circle cx="7" cy="7" r="3" className="stroke-[#e2638c]" strokeWidth="2" />
        <circle cx="17" cy="15" r="3" className="stroke-[#e2638c]" strokeWidth="2" />
        <path
          d="M9.3 9L14.8 13"
          className="stroke-[#e2638c]"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
    bg: "bg-[#ffe4ec]",
    title: "Watch it connect",
    body: "Your notes hold hands behind the scenes. Related thoughts find each other, no tags required.",
  },
  {
    emojiPath: (
      <path
        d="M12 4l2.1 5.4L20 10l-4.4 3.9L17 20l-5-3.2L7 20l1.4-6.1L4 10l5.9-.6L12 4z"
        className="stroke-[#3aa99f]"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    ),
    bg: "bg-[#dcf2ef]",
    title: "Remember like magic",
    body: "Ask “what was that gift idea for June?” and it’s there — the note, the date, the context.",
  },
];

export default function DesignFour() {
  return (
    <div
      className="flex flex-1 flex-col overflow-hidden bg-[#fdfbf7] font-[family-name:var(--font-quicksand)] text-[#43395f] selection:bg-[#dcd6ff] [--font-quicksand:Arial,sans-serif]"
    >
      {/* Nav */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#7c6cf0] text-lg font-bold text-white shadow-[0_4px_0_#5f50c7]">
            ☁
          </span>
          <span className="text-xl font-bold">cortex</span>
        </div>
        <nav className="hidden items-center gap-7 text-[15px] font-semibold text-[#43395f]/60 sm:flex">
          <a href="#steps" className="transition-colors hover:text-[#43395f]">
            how it works
          </a>
          <a href="#love" className="transition-colors hover:text-[#43395f]">
            wall of love
          </a>
        </nav>
        <a
          href="#start"
          className="rounded-full bg-[#7c6cf0] px-5 py-2.5 text-[15px] font-bold text-white shadow-[0_4px_0_#5f50c7] transition-all hover:translate-y-[2px] hover:shadow-[0_2px_0_#5f50c7]"
        >
          try it free
        </a>
      </header>

      {/* Hero */}
      <section className="relative mx-auto w-full max-w-6xl px-6 pt-12 sm:pt-20">
        {/* floating blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-[#ffd6e0]/60 blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-32 h-64 w-64 rounded-full bg-[#c1e7e3]/60 blur-2xl"
        />
        <div className="relative flex flex-col items-center text-center">
          <span className="rounded-full bg-[#fff3b0] px-4 py-1.5 text-sm font-bold text-[#8a6d00]">
            your brain called. it wants backup.
          </span>
          <h1 className="mt-6 max-w-2xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
            Keep every little thought,{" "}
            <span className="text-[#7c6cf0]">forever</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg font-medium leading-8 text-[#43395f]/65">
            Cortex is a cozy second brain. Toss in notes, lists, and shower
            thoughts — it tidies up, links things together, and hands them back
            right when you need them.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#start"
              className="rounded-full bg-[#7c6cf0] px-8 py-4 text-lg font-bold text-white shadow-[0_5px_0_#5f50c7] transition-all hover:translate-y-[2px] hover:shadow-[0_3px_0_#5f50c7]"
            >
              start your brain →
            </a>
            <span className="text-sm font-semibold text-[#43395f]/50">
              free forever for casual thinkers
            </span>
          </div>
        </div>

        {/* Sticky notes */}
        <div className="relative mt-16 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {stickies.map((s) => (
            <div
              key={s.text}
              className={`${s.bg} ${s.rotate} relative rounded-sm p-5 pt-7 text-[15px] font-semibold leading-6 text-[#43395f]/80 shadow-[0_10px_24px_-10px_rgba(67,57,95,0.35)] transition-transform hover:rotate-0 hover:scale-105`}
            >
              <span
                aria-hidden
                className="absolute left-1/2 top-2 h-3 w-10 -translate-x-1/2 rounded-sm bg-white/60"
              />
              {s.text}
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section id="steps" className="mx-auto w-full max-w-6xl px-6 py-24">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          three tiny habits, one big memory
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className={`${s.bg} rounded-3xl p-7 transition-transform hover:-translate-y-1.5`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
                  {s.emojiPath}
                </svg>
              </div>
              <div className="mt-5 text-xs font-bold uppercase tracking-wider text-[#43395f]/40">
                step {i + 1}
              </div>
              <h3 className="mt-1 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-[15px] font-medium leading-7 text-[#43395f]/65">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Wall of love */}
      <section id="love" className="bg-[#ece9ff]/60 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="text-4xl">♡</div>
          <p className="mt-4 text-2xl font-bold leading-9 sm:text-3xl">
            “It feels less like an app and more like a very organized friend
            who never forgets anything I tell them.”
          </p>
          <p className="mt-4 text-sm font-bold text-[#43395f]/50">
            — Priya, kept 8,217 thoughts so far
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="mx-auto w-full max-w-6xl px-6 py-24 pb-32">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#7c6cf0] px-8 py-16 text-center text-white">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-14 -right-8 h-52 w-52 rounded-full bg-white/10"
          />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            your future self says thanks
          </h2>
          <p className="mx-auto mt-3 max-w-sm font-medium text-white/75">
            it takes 30 seconds to write your first note. it takes zero to
            never lose it.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-full bg-white px-9 py-4 text-lg font-bold text-[#7c6cf0] shadow-[0_5px_0_rgba(0,0,0,0.15)] transition-all hover:translate-y-[2px] hover:shadow-[0_3px_0_rgba(0,0,0,0.15)]"
          >
            plant your first thought
          </a>
        </div>
        <p className="mt-10 text-center text-xs font-semibold text-[#43395f]/40">
          made with care (and many sticky notes) · cortex 2026
        </p>
      </section>
    </div>
  );
}
