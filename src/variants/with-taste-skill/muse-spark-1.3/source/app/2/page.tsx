import Image from "next/image";
import Link from "next/link";

/* Study 2, Graph. Dials 7/6/5. Dark theme locked. Shape rule: sharp 8px everywhere. Accent: emerald-400, locked. */

const NODES = [
  { x: "12%", y: "18%", label: "soil", big: false },
  { x: "38%", y: "8%", label: "recipes", big: true },
  { x: "66%", y: "20%", label: "trips", big: false },
  { x: "84%", y: "44%", label: "drafts", big: true },
  { x: "60%", y: "58%", label: "quotes", big: false },
  { x: "30%", y: "66%", label: "garden", big: true },
  { x: "10%", y: "52%", label: "maps", big: false },
  { x: "78%", y: "80%", label: "letters", big: false },
];

export default function StudyTwo() {
  return (
    <div className="min-h-[100dvh] bg-zinc-950 font-sans text-zinc-100 antialiased">
      <header className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-[15px] font-bold tracking-tight text-white">
          Cairn
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-6">
          <a href="#map" className="hidden font-mono text-[13px] text-zinc-400 hover:text-white sm:inline">
            map
          </a>
          <a href="#stats" className="hidden font-mono text-[13px] text-zinc-400 hover:text-white sm:inline">
            stats
          </a>
          <a
            href="#start"
            className="rounded-md bg-emerald-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-300 active:scale-[0.98]"
          >
            Start writing
          </a>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-16 pb-16 md:grid-cols-2 md:pt-24">
          <div>
            <h1 className="text-4xl font-semibold tracking-tighter text-white md:text-6xl">
              See what you know.
            </h1>
            <p className="mt-5 max-w-[65ch] font-mono text-sm leading-relaxed text-zinc-400">
              Every note becomes a point. Every link becomes a path. Walk your
              own map.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#start"
                className="rounded-md bg-emerald-400 px-6 py-3 text-sm font-semibold whitespace-nowrap text-zinc-950 transition-colors hover:bg-emerald-300 active:scale-[0.98]"
              >
                Start writing
              </a>
              <a
                href="#map"
                className="rounded-md border border-zinc-700 px-6 py-3 text-sm font-semibold whitespace-nowrap text-zinc-100 transition-colors hover:border-zinc-400 active:scale-[0.98]"
              >
                Take the tour
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-zinc-800 pt-6">
              {[
                ["12k", "notes kept"],
                ["38k", "links drawn"],
                ["31ms", "median search"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="order-2 mt-1 font-mono text-xs text-zinc-500">{l}</dt>
                  <dd className="font-mono text-2xl font-semibold text-white">{n}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            id="map"
            className="relative h-[380px] overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 md:h-[440px]"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 20%, rgba(52,211,153,0.18), transparent 45%), radial-gradient(circle at 75% 70%, rgba(52,211,153,0.12), transparent 40%)",
              }}
            />
            <div aria-hidden="true" className="absolute inset-0">
              <div className="absolute top-[30%] left-[10%] h-px w-[30%] rotate-[-12deg] bg-emerald-400/30" />
              <div className="absolute top-[24%] left-[36%] h-px w-[32%] rotate-[14deg] bg-emerald-400/30" />
              <div className="absolute top-[52%] left-[58%] h-px w-[28%] rotate-[38deg] bg-emerald-400/30" />
              <div className="absolute top-[62%] left-[28%] h-px w-[34%] rotate-[-8deg] bg-emerald-400/30" />
              <div className="absolute top-[46%] left-[12%] h-px w-[22%] rotate-[24deg] bg-emerald-400/20" />
            </div>
            {NODES.map((n) => (
              <div
                key={n.label}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: n.x, top: n.y }}
              >
                <span
                  className={`block rounded-full border ${
                    n.big
                      ? "border-emerald-400/70 bg-emerald-400/15 px-3.5 py-1.5 font-mono text-xs text-emerald-200"
                      : "border-zinc-700 bg-zinc-950/90 px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                  }`}
                >
                  {n.label}
                </span>
              </div>
            ))}
            <p className="absolute bottom-3 left-4 font-mono text-[11px] text-zinc-500">
              live view of a real garden, 214 nodes
            </p>
          </div>
        </section>

        <section id="stats" className="border-y border-zinc-800 bg-zinc-900/50">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-px px-4 py-14 md:grid-cols-12">
            <div className="md:col-span-7">
              <Image
                src="https://picsum.photos/seed/cairn-nightdesk/1200/700?grayscale"
                alt="Notebook pages photographed in low lamplight"
                width={1200}
                height={700}
                loading="lazy"
                className="aspect-[12/7] w-full rounded-lg border border-zinc-800 object-cover"
              />
            </div>
            <div className="flex flex-col justify-center md:col-span-5 md:pl-10">
              <h2 className="text-3xl font-semibold tracking-tight text-white">
                Links form while you type.
              </h2>
              <p className="mt-4 max-w-[65ch] font-mono text-sm leading-relaxed text-zinc-400">
                Mention an old idea and Cairn draws the line for you. Clusters
                grow around the topics you return to most.
              </p>
              <ul className="mt-6 space-y-3 font-mono text-[13px]">
                {[
                  ["backlinks", "every note lists who points at it"],
                  ["orphans", "finds notes nothing links to yet"],
                  ["trails", "retrace how an idea evolved"],
                ].map(([k, v]) => (
                  <li key={k} className="flex gap-3 border-b border-zinc-800 pb-3">
                    <span className="shrink-0 text-emerald-400">{k}</span>
                    <span className="text-zinc-400">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-20 md:py-28">
          <blockquote className="max-w-3xl border-l-2 border-emerald-400 pl-6">
            <p className="text-2xl leading-snug font-medium tracking-tight text-white">
              “My dissertation lived in the map. I could see the argument form.”
            </p>
            <footer className="mt-4 font-mono text-[13px] text-zinc-500">
              Jonas Reber - Researcher, Bern
            </footer>
          </blockquote>
        </section>

        <section id="start" className="mx-auto w-full max-w-7xl px-4 pb-24 text-center md:pb-32">
          <div className="rounded-lg border border-zinc-800 bg-zinc-900 px-6 py-16">
            <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Plot your first hundred notes.
            </h2>
            <p className="mx-auto mt-4 max-w-[65ch] font-mono text-sm leading-relaxed text-zinc-400">
              Import from files or start empty. The map draws itself.
            </p>
            <a
              href="#start"
              className="mt-8 inline-block rounded-md bg-emerald-400 px-8 py-3.5 text-sm font-semibold whitespace-nowrap text-zinc-950 transition-colors hover:bg-emerald-300 active:scale-[0.98]"
            >
              Start writing
            </a>
          </div>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-7xl px-4 pb-28">
        <p className="border-t border-zinc-800 pt-6 font-mono text-[13px] text-zinc-500">
          Cairn. Notes that remember each other.
        </p>
      </footer>
    </div>
  );
}
