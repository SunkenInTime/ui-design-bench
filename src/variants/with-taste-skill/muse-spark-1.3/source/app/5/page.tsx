import Image from "next/image";
import Link from "next/link";

/* Study 5, Playground. Dials 9/8/3. Light theme locked.
   Shape rule: chunky 20px cards, pill buttons. Accent: electric blue, locked.
   Motion: CSS keyframes only, all gated behind prefers-reduced-motion. */

const TICKER = [
  "half finished poems",
  "recipes worth repeating",
  "arguments to win later",
  "dreams before coffee",
  "quotes from strangers",
  "plans for the cabin",
];

export default function StudyFive() {
  return (
    <div className="min-h-[100dvh] bg-[#fafafa] font-sans text-zinc-950 antialiased">
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes rise5 { from { opacity: 0; transform: translateY(26px); } to { opacity: 1; transform: none; } }
          @keyframes drift5 { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          @keyframes wiggle5 { 0%, 100% { transform: rotate(-2deg); } 50% { transform: rotate(2deg) translateY(-4px); } }
          .rise5 { animation: rise5 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
          .rise5-d1 { animation-delay: 0.08s; }
          .rise5-d2 { animation-delay: 0.16s; }
          .rise5-d3 { animation-delay: 0.24s; }
          .ticker5 { animation: drift5 28s linear infinite; }
          .wiggle5 { animation: wiggle5 5s ease-in-out infinite; }
        }
      `}</style>

      <header className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
        <Link href="/" className="rounded-full bg-zinc-950 px-4 py-1.5 text-[15px] font-bold tracking-tight text-white">
          Cairn
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-6">
          <a href="#tiles" className="hidden text-sm font-medium text-zinc-600 hover:text-zinc-950 sm:inline">
            Tiles
          </a>
          <a href="#habits" className="hidden text-sm font-medium text-zinc-600 hover:text-zinc-950 sm:inline">
            Habits
          </a>
          <a
            href="#start"
            className="rounded-full bg-[#2547ff] px-4 py-2 text-sm font-semibold whitespace-nowrap text-white transition-all hover:brightness-110 active:scale-[0.98]"
          >
            Start writing
          </a>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-14 pb-14 md:grid-cols-2 md:pt-20">
          <div className="rise5">
            <h1 className="text-5xl leading-[1.02] font-bold tracking-tighter md:text-7xl">
              Notes with{" "}
              <span className="rise5 rise5-d1 inline-block rounded-2xl bg-[#2547ff] px-3 leading-[1.1] text-white">
                elbows
              </span>{" "}
              out.
            </h1>
            <p className="rise5 rise5-d2 mt-5 max-w-[65ch] text-base leading-relaxed text-zinc-600">
              Cairn is the little notebook that links itself. Throw ideas
              in, watch them gang up.
            </p>
            <div className="rise5 rise5-d3 mt-8 flex flex-wrap gap-3">
              <a
                href="#start"
                className="rounded-full bg-[#2547ff] px-6 py-3 text-sm font-semibold whitespace-nowrap text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(37,71,255,0.35)] active:translate-y-0 active:scale-[0.98]"
              >
                Start writing
              </a>
              <a
                href="#tiles"
                className="rounded-full border-2 border-zinc-950 px-6 py-3 text-sm font-semibold whitespace-nowrap transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              >
                Take the tour
              </a>
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-4" aria-label="Sample notes">
            <div className="rise5 rise5-d1 wiggle5 rounded-[20px] border-2 border-zinc-950 bg-[#fff3d6] p-5 shadow-[4px_4px_0_#09090b]">
              <p className="text-xs font-bold tracking-wide uppercase">Idea</p>
              <p className="mt-1 text-[15px] leading-snug font-semibold">
                A restaurant that only serves soup
              </p>
            </div>
            <div className="rise5 rise5-d2 mt-8 rounded-[20px] border-2 border-zinc-950 bg-white p-5 shadow-[4px_4px_0_#09090b]">
              <p className="text-xs font-bold tracking-wide text-[#2547ff] uppercase">Link</p>
              <p className="mt-1 text-[15px] leading-snug font-semibold">
                Soup essay, winter draft, grandma
              </p>
            </div>
            <div className="rise5 rise5-d2 rounded-[20px] border-2 border-zinc-950 bg-[#2547ff] p-5 text-white shadow-[4px_4px_0_#09090b]">
              <p className="text-xs font-bold tracking-wide uppercase opacity-80">Found</p>
              <p className="mt-1 text-[15px] leading-snug font-semibold">
                3 old notes mention broth
              </p>
            </div>
            <div className="rise5 rise5-d3 mt-8 rounded-[20px] border-2 border-zinc-950 bg-[#d8fdd0] p-5 shadow-[4px_4px_0_#09090b]">
              <p className="text-xs font-bold tracking-wide uppercase">Kept</p>
              <p className="mt-1 text-[15px] leading-snug font-semibold">
                Send the menu to June
              </p>
            </div>
          </div>
        </section>

        <section aria-label="Things people keep" className="overflow-hidden border-y-2 border-zinc-950 bg-[#fff3d6] py-3">
          <div className="ticker5 flex w-max gap-8 pr-8">
            {[...TICKER, ...TICKER].map((t, i) => (
              <span key={i} className="text-sm font-bold whitespace-nowrap tracking-tight uppercase">
                {t} <span aria-hidden="true" className="ml-6 inline-block h-2 w-2 rounded-full bg-[#2547ff]" />
              </span>
            ))}
          </div>
        </section>

        <section id="tiles" className="mx-auto w-full max-w-7xl px-4 py-16 md:py-24">
          <h2 className="max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
            Four tiles, zero filing.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-[20px] border-2 border-zinc-950 bg-white p-6 md:col-span-2 md:row-span-1">
              <Image
                src="https://picsum.photos/seed/cairn-collage-wall/1200/600"
                alt="A wall of pinned photos, tickets and sketches"
                width={1200}
                height={600}
                loading="lazy"
                className="aspect-[2/1] w-full rounded-[14px] border border-zinc-200 object-cover"
              />
              <h3 className="mt-4 text-xl font-bold">Dump it on the wall</h3>
              <p className="mt-1 max-w-[60ch] text-[15px] leading-relaxed text-zinc-600">
                Photos, scraps, voice memos. Cairn pins everything where you
                can see it.
              </p>
            </div>
            <div className="rounded-[20px] border-2 border-zinc-950 bg-zinc-950 p-6 text-white">
              <p className="font-mono text-4xl font-bold text-[#8fa2ff]">2s</p>
              <h3 className="mt-2 text-xl font-bold">to capture</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-zinc-400">
                One keystroke from anywhere. Gone before the thought cools.
              </p>
            </div>
            <div className="rounded-[20px] border-2 border-zinc-950 bg-[#d8fdd0] p-6">
              <h3 className="text-xl font-bold">Links draw themselves</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-zinc-700">
                Mention soup twice and the two soups find each other.
              </p>
            </div>
            <div className="rounded-[20px] border-2 border-zinc-950 bg-[#2547ff] p-6 text-white md:col-span-2">
              <h3 className="text-xl font-bold">Recall on tap</h3>
              <p className="mt-1 max-w-[60ch] text-[15px] leading-relaxed text-white/85">
                Ask in plain words. Get the note, plus the three notes around
                it that matter more.
              </p>
            </div>
          </div>
        </section>

        <section id="habits" className="mx-auto w-full max-w-7xl px-4 pb-16 md:pb-24">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="text-3xl font-bold tracking-tight">Grown up habits.</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-zinc-600">
                Tap one open. Each habit takes a minute to learn.
              </p>
            </div>
            <div className="md:col-span-8">
              {[
                ["Capture", "Hit the key, say the thing, close the lid. Sorting happens later, without you."],
                ["Connect", "Wrap any two words in brackets. Watch the thread pull tight between them."],
                ["Recall", "Morning brings five old notes back. Most days one of them saves the day."],
              ].map(([h, b]) => (
                <details
                  key={h}
                  className="group rounded-[20px] border-2 border-zinc-950 bg-white px-6 py-4 not-last:mb-3 open:bg-[#fff3d6]"
                >
                  <summary className="cursor-pointer list-none text-lg font-bold marker:hidden [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between">
                      {h}
                      <span aria-hidden="true" className="text-[#2547ff] transition-transform group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-2 max-w-[60ch] text-[15px] leading-relaxed text-zinc-600">{b}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-16 md:pb-24">
          <figure className="rounded-[20px] border-2 border-zinc-950 bg-white p-8 shadow-[6px_6px_0_#09090b] md:p-12">
            <blockquote className="max-w-3xl text-2xl leading-snug font-bold tracking-tight">
              “My notes finally party together. I just bring snacks.”
            </blockquote>
            <figcaption className="mt-4 text-sm font-medium text-zinc-600">
              Ana Beltran - Podcaster, Austin
            </figcaption>
          </figure>
        </section>

        <section id="start" className="mx-auto w-full max-w-7xl px-4 pb-24 text-center md:pb-32">
          <h2 className="mx-auto max-w-xl text-4xl font-bold tracking-tight md:text-5xl">
            Come make a mess.
          </h2>
          <p className="mx-auto mt-4 max-w-[65ch] text-base leading-relaxed text-zinc-600">
            Free for a thousand notes. No card, no ceremony.
          </p>
          <a
            href="#start"
            className="mt-8 inline-block rounded-full bg-[#2547ff] px-8 py-3.5 text-sm font-semibold whitespace-nowrap text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(37,71,255,0.35)] active:translate-y-0 active:scale-[0.98]"
          >
            Start writing
          </a>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-7xl px-4 pb-28">
        <p className="border-t-2 border-zinc-950 pt-6 text-sm font-medium text-zinc-600">
          Cairn. Notes that remember each other.
        </p>
      </footer>
    </div>
  );
}
