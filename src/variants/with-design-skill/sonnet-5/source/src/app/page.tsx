import Link from "next/link";
import { variants } from "../lib/variants";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0b0b0c] font-[family-name:var(--font-geist-sans)] text-[#e8e7e3]">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-20 sm:py-28">
        <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/40">
          Index · Design study
        </p>
        <h1 className="mt-5 max-w-xl text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl">
          One brief, five second brains.
        </h1>
        <p className="mt-5 max-w-md text-[15px] leading-7 text-white/55">
          Index is a note-taking app pitched as an external memory. Same
          brief, same goal — five unrelated visual languages for getting
          there. Pick a thread.
        </p>

        <ol className="mt-16 flex flex-col">
          {variants.map((v) => (
            <li
              key={v.id}
              className="group border-t border-white/10 first:border-t-0"
            >
              <Link
                href={`/${v.id}`}
                className="flex items-center gap-5 py-6 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 sm:gap-8"
              >
                <span className="font-[family-name:var(--font-geist-mono)] text-xs text-white/30">
                  {v.number}
                </span>
                <span
                  aria-hidden
                  className="h-9 w-9 shrink-0 rounded-full transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: v.accent }}
                />
                <span className="flex flex-1 flex-col">
                  <span className="text-lg font-medium text-white sm:text-xl">
                    {v.name}
                  </span>
                  <span className="text-sm text-white/45">{v.concept}</span>
                </span>
                <span className="hidden font-[family-name:var(--font-geist-mono)] text-xs text-white/30 transition-colors group-hover:text-white/70 sm:block">
                  /{v.id}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="shrink-0 -translate-x-1 text-white/30 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:text-white group-hover:opacity-100"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>
          ))}
        </ol>

        <p className="mt-20 text-xs text-white/30">
          Once inside a direction, use the switcher in the corner to jump
          between any of the five.
        </p>
      </main>
    </div>
  );
}
