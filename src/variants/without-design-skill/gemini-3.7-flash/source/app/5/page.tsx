import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mneme — Library",
  description: "A private library of everything you have ever thought.",
};

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden>
      <span className="h-px w-16 bg-[#c4a574]/60" />
      <span className="h-1.5 w-1.5 rotate-45 border border-[#c4a574]" />
      <span className="h-px w-16 bg-[#c4a574]/60" />
    </div>
  );
}

export default function LibraryPage() {
  return (
    <div className="min-h-full bg-[#14110e] text-[#ede6d9] selection:bg-[#c4a574] selection:text-[#14110e]">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(1200px 500px at 50% -10%, rgba(196,165,116,0.16), transparent 55%)",
        }}
      />

      <header className="relative mx-auto flex max-w-4xl items-center justify-between px-6 py-8 sm:px-10">
        <Link
          href="/without-design-skill/gemini-3.7-flash/5"
          className="font-library text-sm tracking-[0.42em] text-[#c4a574] uppercase"
        >
          Mneme
        </Link>
        <nav className="hidden gap-8 font-library text-sm tracking-wide text-[#ede6d9]/55 sm:flex">
          <a href="#volumes" className="hover:text-[#ede6d9]">
            Volumes
          </a>
          <a href="#reading-room" className="hover:text-[#ede6d9]">
            The room
          </a>
        </nav>
      </header>

      <main className="relative">
        <section className="mx-auto max-w-3xl px-6 pb-20 pt-10 text-center sm:px-10 sm:pt-16">
          <p className="font-library text-xs tracking-[0.38em] text-[#c4a574] uppercase">
            Collected works of you
          </p>
          <h1 className="mt-8 font-library text-[clamp(2.6rem,8vw,5.4rem)] leading-[1.05] tracking-[-0.03em]">
            A private library
            <br />
            <span className="italic text-[#c4a574]">of the mind.</span>
          </h1>
          <div className="mt-10">
            <Ornament />
          </div>
          <p className="mx-auto mt-10 max-w-lg font-library text-lg leading-8 text-[#ede6d9]/70">
            Every note a volume. Every link a corridor. Mneme keeps a quiet
            reading room for the thoughts you intend to live with — not a feed,
            not a dump, a library with a lock.
          </p>
          <a
            id="start"
            href="#start"
            className="mt-12 inline-block border border-[#c4a574] px-8 py-3 font-library text-sm tracking-[0.22em] text-[#c4a574] uppercase hover:bg-[#c4a574] hover:text-[#14110e]"
          >
            Request a key
          </a>
        </section>

        <section
          id="volumes"
          className="mx-auto grid max-w-5xl gap-px border-y border-[#c4a574]/20 bg-[#c4a574]/20 px-0 md:grid-cols-3"
        >
          {[
            {
              vol: "Volume I",
              title: "The inbox",
              body: "Fleeting slips, dated and unjudged. Tomorrow’s self will know where to shelve them.",
            },
            {
              vol: "Volume II",
              title: "The stacks",
              body: "Evergreen notes, rewritten until they are true. Linked, not boxed. A mind you can browse.",
            },
            {
              vol: "Volume III",
              title: "The index",
              body: "Search that behaves like a librarian: it knows the essay even when you recall only the feeling.",
            },
          ].map((item) => (
            <article key={item.vol} className="bg-[#14110e] px-8 py-14 text-center">
              <p className="font-library text-xs tracking-[0.3em] text-[#c4a574] uppercase">
                {item.vol}
              </p>
              <h2 className="mt-4 font-library text-3xl italic">{item.title}</h2>
              <p className="mx-auto mt-5 max-w-xs leading-7 text-[#ede6d9]/60">
                {item.body}
              </p>
            </article>
          ))}
        </section>

        <section
          id="reading-room"
          className="mx-auto max-w-3xl px-6 py-24 text-center sm:px-10"
        >
          <Ornament />
          <blockquote className="mt-12 font-library text-2xl leading-10 italic sm:text-3xl">
            “Your notes never leave the room. A second brain should not have a
            landlord.”
          </blockquote>
          <p className="mt-8 text-xs tracking-[0.28em] text-[#c4a574] uppercase">
            On privacy, as a courtesy of architecture
          </p>
          <div className="mx-auto mt-16 max-w-md font-library text-sm leading-7 text-[#ede6d9]/50">
            Local by default. Encrypted if you sync. No one reads over your
            shoulder — not a model, not a market, not a feed.
          </div>
        </section>
      </main>

      <footer className="relative mx-auto max-w-4xl border-t border-[#c4a574]/20 px-6 py-8 text-center font-library text-xs tracking-[0.28em] text-[#ede6d9]/35 uppercase sm:px-10">
        Mneme Library · Members’ edition · Est. for the long memory
      </footer>
    </div>
  );
}
