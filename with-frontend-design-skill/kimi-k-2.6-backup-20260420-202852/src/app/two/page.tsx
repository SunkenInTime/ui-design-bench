import { Cormorant_Garamond, Josefin_Sans } from "next/font/google";

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function Two() {
  return (
    <div
      className={`${cormorant.variable} ${josefin.variable} min-h-screen bg-[#f5f0e8] text-[#2d4a3e]`}
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-full scale-x-150 rounded-b-[50%] bg-[#e8e0d4] opacity-60" />

      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <div
          className="text-2xl font-semibold tracking-wide"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Second Brain
        </div>
        <div className="hidden gap-10 text-sm font-medium tracking-wide md:flex">
          <a href="#" className="transition-colors hover:text-[#c67b5c]">
            Journal
          </a>
          <a href="#" className="transition-colors hover:text-[#c67b5c]">
            Garden
          </a>
          <a href="#" className="transition-colors hover:text-[#c67b5c]">
            Pricing
          </a>
        </div>
        <button className="rounded-full bg-[#2d4a3e] px-6 py-2.5 text-sm tracking-wide text-[#f5f0e8] transition-colors duration-500 hover:bg-[#c67b5c]">
          Begin
        </button>
      </nav>

      <main className="relative mx-auto max-w-6xl px-6 pb-24 pt-16">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-[#c67b5c]">
            A space for slow thinking
          </p>
          <h1
            className="mb-8 text-5xl font-semibold leading-[1.05] sm:text-7xl lg:text-8xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Cultivate your
            <br />
            <span className="italic text-[#c67b5c]">inner garden</span>
          </h1>
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-[#2d4a3e]/80">
            Like tending to a garden, great ideas need patience, connection, and
            care. Second Brain is your digital soil where thoughts grow into
            insights.
          </p>
          <div className="flex gap-4">
            <button className="rounded-full bg-[#c67b5c] px-8 py-3.5 text-sm tracking-wide text-white transition-colors duration-500 hover:bg-[#2d4a3e]">
              Plant a seed
            </button>
            <button className="rounded-full border border-[#2d4a3e]/30 px-8 py-3.5 text-sm tracking-wide text-[#2d4a3e] transition-colors hover:border-[#2d4a3e]">
              Explore the garden
            </button>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: "Bi-directional links",
              desc: "Ideas connect naturally, like roots beneath the soil.",
            },
            {
              title: "Daily notes",
              desc: "A quiet ritual to capture what matters each morning.",
            },
            {
              title: "Emergent structure",
              desc: "Organization grows from use, not rigid folders.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-3xl border border-[#2d4a3e]/5 bg-white/60 p-8 backdrop-blur-sm transition-all duration-700 hover:shadow-xl hover:shadow-[#2d4a3e]/5"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#2d4a3e]/10 text-[#2d4a3e]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3
                className="mb-3 text-xl font-semibold"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-70">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="relative mx-auto flex max-w-6xl items-center justify-between border-t border-[#2d4a3e]/10 px-6 py-12 text-xs tracking-wide text-[#2d4a3e]/50">
        <span>Second Brain</span>
        <span>Grow slowly, think deeply</span>
      </footer>
    </div>
  );
}
