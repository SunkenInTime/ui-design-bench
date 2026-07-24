import Link from "next/link";
import { designs } from "@/variants/without-design-skill/opus-5/source/src/lib/designs";
import { inter } from "./fonts";

export default function Home() {
  return (
    <div
      className={`${inter.className} flex flex-1 flex-col bg-neutral-950 text-white`}
    >
      <main className="mx-auto w-full max-w-5xl px-6 py-20">
        <p className="font-mono text-[11.5px] tracking-[0.18em] text-white/40 uppercase">
          Recall · landing page explorations
        </p>
        <h1 className="mt-5 max-w-2xl text-[clamp(2.2rem,4.6vw,3.4rem)] leading-[1.05] font-semibold tracking-[-0.035em]">
          Five directions for the same second brain.
        </h1>
        <p className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-white/55">
          Same product, same claims, five different arguments about who it’s
          for. Open any of them, then use the switcher at the bottom of the
          screen — or press{" "}
          <kbd className="rounded border border-white/15 bg-white/8 px-1.5 py-0.5 font-mono text-[12px]">
            1
          </kbd>
          –
          <kbd className="rounded border border-white/15 bg-white/8 px-1.5 py-0.5 font-mono text-[12px]">
            5
          </kbd>{" "}
          anywhere.
        </p>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2">
          {designs.map((design) => (
            <li key={design.id}>
              <Link
                href={design.href}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/3 p-6 transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/6"
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="size-2.5 rounded-full ring-4 ring-white/6"
                    style={{ background: design.accent }}
                  />
                  <h2 className="text-[17px] font-semibold tracking-tight">
                    {design.name}
                  </h2>
                  <span className="ml-auto font-mono text-[11.5px] text-white/30">
                    /{design.id}
                  </span>
                </div>

                <p className="mt-3 text-[12.5px] tracking-wide text-white/45 uppercase">
                  {design.direction}
                </p>
                <p className="mt-2 text-[14.5px] leading-relaxed text-white/60">
                  {design.note}
                </p>

                <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-white/70 transition-colors group-hover:text-white">
                  Open
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
