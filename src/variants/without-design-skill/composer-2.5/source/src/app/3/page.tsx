import { Playfair_Display, Lora, Caveat } from "next/font/google";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Lora({
  subsets: ["latin"],
  variable: "--font-body",
});

const hand = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
});

export default function FolioLanding() {
  return (
    <div
      className={`${display.variable} ${body.variable} ${hand.variable} min-h-full bg-[#F3EBD9] font-[family-name:var(--font-body)] text-[#3D2E1F]`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(transparent, transparent 27px, #E8DFC8 28px)",
      }}
    >
      <header className="mx-auto flex max-w-3xl items-center justify-between px-6 py-10">
        <span className="font-[family-name:var(--font-display)] text-2xl italic text-[#5C4033]">
          Engram
        </span>
        <span className="font-[family-name:var(--font-hand)] text-xl text-[#8B6914]">
          est. your mind
        </span>
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-32">
        <article className="rounded-sm border border-[#D4C4A8] bg-[#FDF8EE]/90 p-10 shadow-[4px_4px_0_#C4B59A]">
          <p className="font-[family-name:var(--font-hand)] text-2xl text-[#8B6914]">
            Dear thinker,
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl leading-tight text-[#3D2E1F] sm:text-5xl">
            A notebook that grows with your thoughts
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#5C4A3A]">
            Not another app that buries your ideas in folders. Engram is a quiet
            desk companion — part journal, part index, part memory. Write like you
            think: loosely, deeply, and always connected.
          </p>

          <div className="my-10 border-t border-dashed border-[#C4B59A]" />

          <div className="space-y-6">
            <JournalEntry
              date="Monday, May 18"
              text="Finished reading about Zettelkasten. The magic isn't the method — it's the trust that future-you will find today's fragments."
            />
            <JournalEntry
              date="Last week"
              text="Linked my book highlights to project notes. Suddenly the essay wrote itself from connections I'd already made."
              linked
            />
          </div>

          <button
            type="button"
            className="mt-10 w-full border-2 border-[#5C4033] bg-[#5C4033] py-4 font-[family-name:var(--font-display)] text-lg text-[#FDF8EE] transition hover:bg-[#3D2E1F]"
          >
            Open a fresh page
          </button>
        </article>

        <section className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            { n: "01", t: "Daily pages", d: "Morning pages, evening reflections — dated entries that stack into a life archive." },
            { n: "02", t: "Margin links", d: "Underline a phrase, link to another note. Footnotes for your own thinking." },
            { n: "03", t: "Gentle recall", d: "Weekly digests surface what you wrote when the seasons change." },
          ].map((item) => (
            <div key={item.n} className="border-l-2 border-[#8B6914] pl-4">
              <span className="font-[family-name:var(--font-hand)] text-lg text-[#8B6914]">
                {item.n}
              </span>
              <h3 className="mt-1 font-[family-name:var(--font-display)] text-lg">
                {item.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6B5344]">{item.d}</p>
            </div>
          ))}
        </section>

        <blockquote className="mt-20 text-center">
          <p className="font-[family-name:var(--font-display)] text-2xl italic leading-relaxed text-[#5C4033]">
            &ldquo;The faintest ink is more powerful than the strongest memory.&rdquo;
          </p>
          <footer className="mt-4 font-[family-name:var(--font-hand)] text-xl text-[#8B6914]">
            — and Engram keeps the ink alive
          </footer>
        </blockquote>
      </main>
    </div>
  );
}

function JournalEntry({
  date,
  text,
  linked,
}: {
  date: string;
  text: string;
  linked?: boolean;
}) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-0 top-1 h-full w-px bg-[#C4B59A]" />
      <time className="text-xs uppercase tracking-wider text-[#8B7355]">{date}</time>
      <p className="mt-2 text-[#3D2E1F] leading-relaxed">{text}</p>
      {linked && (
        <p className="mt-2 font-[family-name:var(--font-hand)] text-lg text-[#8B6914]">
          → see: Zettelkasten method, Essay draft #2
        </p>
      )}
    </div>
  );
}
