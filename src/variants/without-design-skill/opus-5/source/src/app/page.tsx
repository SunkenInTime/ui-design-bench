import Link from "next/link";
import { designs } from "@/variants/without-design-skill/opus-5/source/src/lib/designs";

export default function Gallery() {
  return (
    <div className="min-h-screen flex-1 bg-neutral-950 px-6 pt-20 pb-32 font-sans text-white">
      <div className="mx-auto max-w-5xl">
        <header className="max-w-2xl">
          <p className="text-[11px] tracking-[0.2em] text-white/35 uppercase">
            Loam — second brain
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-balance sm:text-5xl">
            Five landing page directions.
          </h1>
          <p className="mt-5 leading-relaxed text-white/50">
            Same product, five different arguments for it. Use the pill at the
            bottom of the screen to jump between them, or press{" "}
            <Kbd>1</Kbd>–<Kbd>5</Kbd> anywhere. <Kbd>[</Kbd> and <Kbd>]</Kbd>{" "}
            step through in order.
          </p>
        </header>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {designs.map((design, i) => (
            <Link
              key={design.slug}
              href={design.slug}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 p-6 transition-all hover:-translate-y-0.5 hover:border-white/25 ${
                i === 0 ? "sm:col-span-2" : ""
              }`}
              style={{ background: design.swatch[0] }}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span
                    className="font-mono text-[11px] tracking-wider opacity-45"
                    style={{ color: design.swatch[1] }}
                  >
                    {design.n}
                  </span>
                  <h2
                    className="mt-2 text-2xl font-semibold tracking-tight"
                    style={{ color: design.swatch[1] }}
                  >
                    {design.name}
                  </h2>
                  <p
                    className="mt-1 text-sm opacity-55"
                    style={{ color: design.swatch[1] }}
                  >
                    {design.vibe}
                  </p>
                </div>

                <div className="flex shrink-0 gap-1.5">
                  {design.swatch.map((c) => (
                    <span
                      key={c}
                      className="size-5 rounded-full ring-1 ring-white/20"
                      style={{ background: c }}
                    />
                  ))}
                </div>
              </div>

              <span
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium opacity-60 transition-opacity group-hover:opacity-100"
                style={{ color: design.swatch[2] }}
              >
                View design
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-grid min-w-[1.4rem] place-items-center rounded border border-white/20 bg-white/10 px-1 py-0.5 font-mono text-[11px] text-white/80">
      {children}
    </kbd>
  );
}
