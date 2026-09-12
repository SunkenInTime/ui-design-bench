import Link from "next/link";
import { ArrowUpRight } from "../components/icons";
import { ITERATIONS } from "../components/iterations";
import { Logo } from "../components/logo";

const ACCENT_DOT: Record<string, string> = {
  emerald: "bg-emerald-500",
  lime: "bg-lime-400",
  cobalt: "bg-blue-600",
  rose: "bg-rose-500",
  blue: "bg-[#1f47ff]",
};

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-[#f6f6f4] text-zinc-900 antialiased">
      <main className="mx-auto flex min-h-[100dvh] max-w-3xl flex-col px-5 py-20">
        <Link href="/one" aria-label="Marginalia home">
          <Logo className="text-zinc-900" />
        </Link>

        <div className="mt-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400">
            A design study
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-5xl">
            Five directions for a second brain.
          </h1>
          <p className="mt-5 max-w-[55ch] text-lg leading-relaxed text-zinc-600">
            Marginalia is a note-taking app that thinks like you do. Below are
            five distinct design directions for its landing page, each at its
            own URL.
          </p>
        </div>

        <ul className="mt-14 border-t border-zinc-200">
          {ITERATIONS.map((it) => (
            <li key={it.slug} className="border-b border-zinc-200">
              <Link
                href={it.href}
                className="group flex items-center justify-between gap-6 py-6 transition-colors hover:bg-white/60"
              >
                <div className="flex items-center gap-5">
                  <span
                    className={`size-2.5 shrink-0 rounded-full ${ACCENT_DOT[it.accent]}`}
                    aria-hidden="true"
                  />
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-sm tabular-nums text-zinc-400">
                      0{it.index}
                    </span>
                    <span>
                      <span className="text-lg font-medium text-zinc-900 transition-colors group-hover:text-black sm:text-xl">
                        {it.name}
                      </span>
                      <span className="block text-sm text-zinc-500">
                        {it.blurb}
                      </span>
                    </span>
                  </span>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <span className="hidden font-mono text-sm text-zinc-400 sm:inline">
                    /{it.slug}
                  </span>
                  <ArrowUpRight
                    size={20}
                    weight="regular"
                    className="text-zinc-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-900"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-sm text-zinc-500">
          Use the numbered switcher floating at the bottom of any page to move
          between iterations.
        </p>

        <div className="mt-auto pt-16">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-400">
            Marginalia · a design concept
          </p>
        </div>
      </main>
    </div>
  );
}
