import Link from "next/link";

export const metadata = {
  title: "BRAINROT!! — Dump every thought. Find every thought.",
};

export default function IterationThree() {
  return (
    <div className="min-h-screen w-full bg-[#fde047] text-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between border-b-4 border-black px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md border-4 border-black bg-[#ff6b6b] text-lg font-black">
            B!
          </div>
          <span className="text-xl font-black uppercase tracking-tight">
            Brainrot
          </span>
        </div>
        <div className="hidden items-center gap-1 md:flex">
          {["Features", "Gallery", "Nerds", "$4/mo"].map((t) => (
            <a
              key={t}
              href="#"
              className="rounded-lg border-2 border-transparent px-3 py-1.5 text-sm font-bold uppercase tracking-wide hover:border-black hover:bg-white"
            >
              {t}
            </a>
          ))}
        </div>
        <Link
          href="#"
          className="group relative border-4 border-black bg-black px-5 py-2.5 text-sm font-black uppercase text-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-transform hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[0_0_0_0_rgba(0,0,0,1)]"
        >
          Dump a brain →
        </Link>
      </nav>

      <section className="relative mx-auto max-w-7xl px-6 pt-16 pb-12">
        <div className="absolute right-6 top-8 hidden rotate-12 border-4 border-black bg-[#ff6b6b] px-3 py-1 text-xs font-black uppercase shadow-[6px_6px_0_0_rgba(0,0,0,1)] md:block">
          No AI slop inside
        </div>

        <div className="mb-6 inline-block -rotate-2 border-4 border-black bg-white px-3 py-1 text-xs font-black uppercase shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
          ★ ★ ★ ★ ★ &nbsp;1,284 nerds trust us
        </div>

        <h1 className="mb-8 text-[104px] font-black leading-[0.88] tracking-[-0.04em]">
          DUMP EVERY
          <br />
          THOUGHT.{" "}
          <span className="relative inline-block">
            <span className="relative z-10 rotate-[-2deg] bg-[#60a5fa] px-2">
              FIND
            </span>
          </span>{" "}
          <span className="underline decoration-[8px] underline-offset-[14px]">
            EVERY
          </span>
          <br />
          <span className="text-[#ff6b6b] [text-shadow:6px_6px_0_#000]">
            THOUGHT.
          </span>
        </h1>

        <div className="flex flex-col items-start gap-8 md:flex-row md:items-end">
          <p className="max-w-md text-xl font-bold leading-tight">
            Brainrot is the note app for people who think in all directions
            at once. No categories. No folders. Just a fat search bar and a
            brain full of goo.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#"
              className="border-4 border-black bg-black px-6 py-4 text-base font-black uppercase text-white shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)]"
            >
              Get it free →
            </Link>
            <Link
              href="#"
              className="border-4 border-black bg-white px-6 py-4 text-base font-black uppercase shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)]"
            >
              ▶ See it
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative grid gap-5 md:grid-cols-12">
          <div className="rotate-[-1deg] border-4 border-black bg-white p-5 shadow-[8px_8px_0_0_rgba(0,0,0,1)] md:col-span-5 md:row-span-2">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex gap-1">
                <span className="h-3 w-3 border-2 border-black bg-[#ff6b6b]" />
                <span className="h-3 w-3 border-2 border-black bg-[#fde047]" />
                <span className="h-3 w-3 border-2 border-black bg-[#60a5fa]" />
              </div>
              <span className="font-mono text-[11px] font-bold uppercase">
                note #4718
              </span>
            </div>
            <div className="border-b-2 border-black pb-2 text-xs font-black uppercase">
              2026-04-16 · 11:47am
            </div>
            <div className="mt-4 space-y-3 font-mono text-sm leading-relaxed">
              <p>
                what if the brain isnt a library but a compost heap. rotting,
                fermenting, fruiting unexpectedly
              </p>
              <p className="border-l-4 border-[#ff6b6b] bg-[#ff6b6b]/10 px-3 py-2 font-bold">
                → see: &quot;compost vs archive&quot; · &quot;permaculture for ideas&quot;
              </p>
              <p>mushroom notes. spore notes. mycelial notes.</p>
              <p className="text-zinc-500">
                #half-baked #biology #maybe-a-zine
              </p>
            </div>
          </div>

          <div className="rotate-[1.5deg] border-4 border-black bg-[#ff6b6b] p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] md:col-span-4">
            <div className="mb-2 font-mono text-[10px] font-black uppercase">
              feature 01
            </div>
            <div className="text-3xl font-black leading-tight">
              zero folders.
            </div>
            <div className="text-3xl font-black leading-tight">
              zero hierarchy.
            </div>
            <div className="mt-3 text-sm font-bold">
              Your brain doesn&apos;t have folders. Why should your notes?
            </div>
          </div>

          <div className="rotate-[-2deg] border-4 border-black bg-[#60a5fa] p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] md:col-span-3">
            <div className="mb-2 font-mono text-[10px] font-black uppercase">
              feature 02
            </div>
            <div className="text-3xl font-black leading-tight">
              search by
              <br />
              <span className="bg-black px-1 text-[#fde047]">vibe</span>
            </div>
            <div className="mt-3 text-sm font-bold">
              Type how you remember. Mis-spell. Fragment. We find it.
            </div>
          </div>

          <div className="rotate-[1deg] border-4 border-black bg-white p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] md:col-span-3">
            <div className="mb-2 font-mono text-[10px] font-black uppercase">
              feature 03
            </div>
            <div className="text-3xl font-black leading-tight">
              one
              <br />
              hotkey
            </div>
            <div className="mt-3 font-mono text-xs font-bold">
              <kbd className="border-2 border-black bg-[#fde047] px-1.5 py-0.5">⌘</kbd>{" "}
              +{" "}
              <kbd className="border-2 border-black bg-[#fde047] px-1.5 py-0.5">⇧</kbd>{" "}
              +{" "}
              <kbd className="border-2 border-black bg-[#fde047] px-1.5 py-0.5">N</kbd>
            </div>
            <div className="mt-2 text-sm font-bold">
              Anywhere on your computer. Insta-note.
            </div>
          </div>

          <div className="rotate-[-1deg] border-4 border-black bg-black p-6 text-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] md:col-span-4">
            <div className="mb-2 font-mono text-[10px] font-black uppercase text-[#fde047]">
              feature 04
            </div>
            <div className="text-3xl font-black leading-tight">
              export
              <br />
              everything,
              <br />
              <span className="text-[#ff6b6b]">always.</span>
            </div>
            <div className="mt-3 text-sm font-bold">
              Markdown. JSON. PDF. Cassette tape (kidding). Your brain is
              yours.
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-4 border-black bg-black py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-baseline justify-between border-b-4 border-white pb-6">
            <div className="text-5xl font-black uppercase tracking-tight">
              The Method
              <span className="text-[#fde047]">™</span>
            </div>
            <div className="font-mono text-xs uppercase text-white/60">
              / patented (sort of)
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Vomit",
                d: "Get it out of your head. Don't organize. Don't edit. The cost of a thought is 1 keystroke.",
                c: "#ff6b6b",
              },
              {
                n: "02",
                t: "Ferment",
                d: "Leave it. Come back. Notice what's still interesting. The junk composts. The gold crystallizes.",
                c: "#60a5fa",
              },
              {
                n: "03",
                t: "Harvest",
                d: "Search by feeling, fragment, or month. Pull up a thread. Pull up a year. Pull up a life.",
                c: "#fde047",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="border-4 border-white bg-black p-6"
                style={{ boxShadow: `8px 8px 0 0 ${s.c}` }}
              >
                <div
                  className="mb-4 inline-block border-4 border-white px-3 py-1 text-xl font-black"
                  style={{ background: s.c, color: "#000" }}
                >
                  {s.n}
                </div>
                <div className="mb-2 text-4xl font-black uppercase">
                  {s.t}
                </div>
                <p className="text-sm font-bold leading-relaxed text-white/80">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <div className="mb-6 inline-block rotate-[-1deg] border-4 border-black bg-[#60a5fa] px-4 py-1.5 text-sm font-black uppercase shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
          What people are saying
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              q: "Feels like someone finally built Notes for the damaged.",
              a: "@goblinmode",
            },
            {
              q: "I have 12,000 notes. I can find any of them in 2 seconds.",
              a: "— a phd i know",
            },
            {
              q: "It's so ugly I love it. That's a compliment.",
              a: "@type_setter",
            },
          ].map((t, i) => (
            <div
              key={i}
              className={`border-4 border-black bg-white p-5 text-left shadow-[6px_6px_0_0_rgba(0,0,0,1)] ${
                i === 1 ? "rotate-[1deg]" : i === 0 ? "rotate-[-1deg]" : ""
              }`}
            >
              <p className="text-lg font-bold leading-snug">&ldquo;{t.q}&rdquo;</p>
              <p className="mt-3 font-mono text-xs">{t.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="border-4 border-black bg-[#ff6b6b] p-10 text-center shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
          <div className="mx-auto mb-4 inline-block border-4 border-black bg-white px-3 py-1 text-xs font-black uppercase">
            Pricing
          </div>
          <h3 className="text-6xl font-black leading-[0.9] tracking-tight md:text-8xl">
            $4/MO.
            <br />
            THAT&apos;S IT.
          </h3>
          <p className="mx-auto mt-6 max-w-lg text-base font-bold">
            Unlimited notes. Unlimited devices. Unlimited years.
            <br />
            No teams tier. No &quot;enterprise.&quot; No bullsh!t.
          </p>
          <Link
            href="#"
            className="mt-8 inline-block border-4 border-black bg-black px-8 py-4 text-lg font-black uppercase text-white shadow-[6px_6px_0_0_rgba(255,255,255,1)] hover:-translate-x-[2px] hover:-translate-y-[2px]"
          >
            Start rotting →
          </Link>
          <div className="mt-4 font-mono text-xs font-bold">
            14-day trial · no card · no email required
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-black bg-black py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 font-mono text-xs font-bold uppercase">
          <div>© 2026 Brainrot Industries · Made by 3 idiots</div>
          <div className="flex gap-4">
            <a href="#">github</a>
            <a href="#">twitter</a>
            <a href="#">privacy</a>
            <a href="#">rss</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
