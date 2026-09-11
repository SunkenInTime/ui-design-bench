import Image from "next/image";
import Link from "next/link";

/* Study 4, Orchard. Dials 7/5/3. Dark forest theme locked throughout.
   Shape rule: all soft, 18px cards, pill buttons. Accent: amber, locked. */

const RITUALS = [
  ["Morning pages", "Three pages before the day starts talking."],
  ["Evening press", "Fold the day flat. Keep two lines."],
  ["Sunday walk", "One long note from one long walk."],
  ["Seasonal bind", "Four times a year, gather the best."],
  ["Letters out", "Send one idea to someone who needs it."],
];

export default function StudyFour() {
  return (
    <div
      className="min-h-[100dvh] font-sans antialiased"
      style={{ backgroundColor: "#101d15", color: "#eceee7" }}
    >
      <header className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-[15px] font-bold tracking-tight" style={{ color: "#eceee7" }}>
          Cairn
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-6">
          <a href="#rituals" className="hidden text-sm hover:opacity-100 sm:inline" style={{ color: "#a8b3a4" }}>
            Rituals
          </a>
          <a href="#craft" className="hidden text-sm sm:inline" style={{ color: "#a8b3a4" }}>
            Craft
          </a>
          <a
            href="#start"
            className="rounded-full px-4 py-2 text-sm font-semibold transition-transform hover:brightness-110 active:scale-[0.98]"
            style={{ backgroundColor: "#d9a441", color: "#101d15" }}
          >
            Start writing
          </a>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-16 pb-16 md:grid-cols-2 md:pt-24">
          <div>
            <h1
              className="text-4xl font-semibold tracking-tighter md:text-6xl"
              style={{ color: "#f2f4ee" }}
            >
              Thinking takes seasons.
            </h1>
            <p className="mt-5 max-w-[65ch] text-base leading-relaxed" style={{ color: "#a8b3a4" }}>
              Cairn keeps your notes the way soil keeps seed. Patiently, until
              they are ready to come up.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#start"
                className="rounded-full px-6 py-3 text-sm font-semibold whitespace-nowrap transition-all hover:brightness-110 active:scale-[0.98]"
                style={{ backgroundColor: "#d9a441", color: "#101d15" }}
              >
                Start writing
              </a>
              <a
                href="#rituals"
                className="rounded-full border px-6 py-3 text-sm font-semibold whitespace-nowrap transition-colors"
                style={{ borderColor: "#3a4f40", color: "#eceee7" }}
              >
                Take the tour
              </a>
            </div>
          </div>
          <div>
            <Image
              src="https://picsum.photos/seed/cairn-moss-path/1200/900"
              alt="A moss covered path through tall trees"
              width={1200}
              height={900}
              className="aspect-[4/3] w-full rounded-[18px] object-cover"
              style={{ border: "1px solid #2a3d31" }}
            />
            <p className="mt-2 text-sm" style={{ color: "#7d8a7d" }}>
              The archive, unbothered, doing its slow work.
            </p>
          </div>
        </section>

        <section id="rituals" className="mx-auto w-full max-w-7xl px-4 pb-20">
          <h2 className="text-3xl font-semibold tracking-tight" style={{ color: "#f2f4ee" }}>
            Small rituals, kept daily.
          </h2>
          <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
            {RITUALS.map(([h, b]) => (
              <article
                key={h}
                className="w-64 shrink-0 snap-start rounded-[18px] p-6"
                style={{ backgroundColor: "#16281d", border: "1px solid #2a3d31" }}
              >
                <h3 className="text-lg font-semibold" style={{ color: "#d9a441" }}>{h}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "#a8b3a4" }}>{b}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="craft" className="mx-auto w-full max-w-7xl px-4 pb-20">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div
              className="rounded-[18px] p-8 md:col-span-2"
              style={{ backgroundColor: "#16281d", border: "1px solid #2a3d31" }}
            >
              <h2 className="text-2xl font-semibold tracking-tight" style={{ color: "#f2f4ee" }}>
                Built to outlast trends.
              </h2>
              <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed" style={{ color: "#a8b3a4" }}>
                Plain text files, readable in fifty years. Sync that sips
                battery. Type that stays legible in low cabin light.
              </p>
              <Image
                src="https://picsum.photos/seed/cairn-cabin-desk/1200/600"
                alt="A wooden desk beside a window with notebooks"
                width={1200}
                height={600}
                loading="lazy"
                className="mt-6 aspect-[2/1] w-full rounded-[18px] object-cover"
              />
            </div>
            <div
              className="flex flex-col justify-between rounded-[18px] p-8"
              style={{ backgroundColor: "#d9a441", color: "#101d15" }}
            >
              <p className="text-5xl font-semibold tracking-tighter">10</p>
              <div>
                <h3 className="text-lg font-bold">years of notes, searchable instantly</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-80">
                  One member archive, a decade deep, still opens in a breath.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-20">
          <blockquote
            className="mx-auto max-w-3xl rounded-[18px] p-10 text-center"
            style={{ backgroundColor: "#16281d", border: "1px solid #2a3d31" }}
          >
            <p className="text-2xl leading-snug font-medium tracking-tight" style={{ color: "#f2f4ee" }}>
              “It feels less like software and more like a well kept shed.”
            </p>
            <footer className="mt-4 text-sm" style={{ color: "#7d8a7d" }}>
              Theo Marchetti - Carpenter, Turin
            </footer>
          </blockquote>
        </section>

        <section id="start" className="mx-auto w-full max-w-7xl px-4 pb-24 text-center md:pb-32">
          <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight md:text-4xl" style={{ color: "#f2f4ee" }}>
            Plant the first note.
          </h2>
          <p className="mx-auto mt-4 max-w-[65ch] text-base leading-relaxed" style={{ color: "#a8b3a4" }}>
            Free until your archive passes a thousand notes. Most gardens take
            a year to get there.
          </p>
          <a
            href="#start"
            className="mt-8 inline-block rounded-full px-8 py-3.5 text-sm font-semibold whitespace-nowrap transition-all hover:brightness-110 active:scale-[0.98]"
            style={{ backgroundColor: "#d9a441", color: "#101d15" }}
          >
            Start writing
          </a>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-7xl px-4 pb-28">
        <p className="border-t pt-6 text-sm" style={{ borderColor: "#2a3d31", color: "#7d8a7d" }}>
          Cairn. Notes that remember each other.
        </p>
      </footer>
    </div>
  );
}
