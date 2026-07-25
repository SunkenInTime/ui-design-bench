import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/ssr";
import { iterations } from "@/variants/with-taste-skill/opus-5/source/src/lib/iterations";
import { product } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";

export const metadata = {
  title: "Five landing page directions",
};

/*
  Index of the work. This page is intentionally plain: it is a contact sheet, so
  any styling opinion here would compete with the five directions it links to.
*/
export default function Home() {
  return (
    <div
      data-theme="dark"
      className="min-h-[100dvh] bg-zinc-950 font-sans text-zinc-100"
    >
      <main className="mx-auto max-w-3xl px-6 pt-20 pb-40 md:pt-28">
        <p className="text-sm text-zinc-500">{product.name}</p>
        <h1 className="mt-3 text-3xl font-medium tracking-tight text-white md:text-4xl">
          Five landing page directions
        </h1>
        <p className="mt-4 max-w-[60ch] leading-relaxed text-zinc-400">
          One product, five art directions. Same facts, same feature set, same
          prices in each. What changes is the design language. Open any of them,
          or press its number from anywhere.
        </p>

        <ul className="mt-12 divide-y divide-white/10 border-t border-white/10">
          {iterations.map((iteration) => (
            <li key={iteration.slug}>
              <Link
                href={`/${iteration.slug}`}
                className="group flex items-baseline gap-5 py-6 transition-colors hover:bg-white/[0.03] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <span className="w-6 shrink-0 text-sm tabular-nums text-zinc-600">
                  {iteration.slug}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-lg font-medium text-white">
                      {iteration.name}
                    </span>
                    <span className="text-xs text-zinc-500">
                      {iteration.theme} theme
                    </span>
                    <span className="font-mono text-xs text-zinc-600">
                      {iteration.dials}
                    </span>
                  </span>
                  <span className="mt-1.5 block max-w-[52ch] text-sm leading-relaxed text-zinc-400">
                    {iteration.note}
                  </span>
                </span>
                <ArrowRightIcon
                  size={16}
                  className="mt-1 shrink-0 text-zinc-600 transition-transform group-hover:translate-x-0.5 group-hover:text-white"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-xs leading-relaxed text-zinc-600">
          Dials are variance / motion / density, the three settings the design
          brief was read against.
        </p>
      </main>
    </div>
  );
}
