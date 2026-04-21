import { Bungee, Quicksand } from "next/font/google";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function Five() {
  return (
    <div
      className={`${bungee.variable} ${quicksand.variable} relative min-h-screen overflow-x-hidden bg-[#3a0ca3] text-white`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* Decorative shapes */}
      <div className="pointer-events-none fixed left-10 top-20 h-32 w-32 rounded-full bg-[#ff006e] opacity-40 blur-3xl" />
      <div className="pointer-events-none fixed bottom-20 right-10 h-48 w-48 rounded-full bg-[#00e5ff] opacity-30 blur-3xl" />
      <div className="pointer-events-none fixed left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffe600] opacity-20 blur-3xl" />

      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div
          className="text-2xl text-[#ffe600]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          SECOND BRAIN!
        </div>
        <div className="hidden gap-8 text-sm font-bold tracking-wide md:flex">
          <a href="#" className="transition-colors hover:text-[#00e5ff]">
            WOO!
          </a>
          <a href="#" className="transition-colors hover:text-[#ff006e]">
            YEAH!
          </a>
          <a href="#" className="transition-colors hover:text-[#ffe600]">
            COOL!
          </a>
        </div>
        <button className="rounded-full bg-[#ff006e] px-5 py-2 text-sm font-bold text-white shadow-lg shadow-[#ff006e]/40 transition-transform hover:rotate-3 hover:scale-110">
          GO!
        </button>
      </nav>

      <header className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-16 text-center">
        <div className="mb-8 inline-block rotate-[-2deg] rounded-full bg-[#ffe600] px-4 py-1 text-xs font-bold tracking-widest text-[#3a0ca3]">
          THE NOTE APP THAT SLAPS
        </div>
        <h1
          className="mb-8 text-6xl font-bold leading-[0.9] sm:text-8xl lg:text-9xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="inline-block rotate-[-3deg] text-[#ffe600]">
            CAPTURE
          </span>
          <br />
          <span className="inline-block rotate-[2deg] text-[#00e5ff]">
            EVERY
          </span>
          <br />
          <span className="inline-block rotate-[-1deg] text-[#ff006e]">
            THING!!
          </span>
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
          Dump your brain into colorful notes. Link wild ideas. Make a mess that
          actually makes sense. Your thoughts deserve a party.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-[#ffe600] px-8 py-4 text-lg font-bold text-[#3a0ca3] shadow-xl shadow-[#ffe600]/30 transition-transform hover:rotate-1 hover:scale-105">
            Start the party
          </button>
          <button className="rounded-full border-2 border-white bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#3a0ca3]">
            Watch it go
          </button>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              color: "#ff006e",
              title: "FAST",
              desc: "Zero lag. Zero chill. Pure speed.",
            },
            {
              color: "#00e5ff",
              title: "LINKED",
              desc: "Connect notes like a conspiracy board.",
            },
            {
              color: "#ffe600",
              title: "PRETTY",
              desc: "So nice you will actually use it.",
            },
            {
              color: "#ffffff",
              title: "YOURS",
              desc: "Your data stays on your device. Period.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-3xl p-8 text-[#3a0ca3] shadow-xl transition-transform duration-300 hover:scale-105"
              style={{
                backgroundColor: item.color,
                transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)`,
              }}
            >
              <h3
                className="mb-3 text-3xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm font-semibold leading-relaxed opacity-80">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 px-6 py-12 text-sm font-bold text-white/40 sm:flex-row">
        <span style={{ fontFamily: "var(--font-display)" }}>SECOND BRAIN</span>
        <span>Made with chaos and love</span>
      </footer>
    </div>
  );
}
