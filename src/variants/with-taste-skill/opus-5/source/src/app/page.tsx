import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { TesseraMark } from "@/variants/with-taste-skill/opus-5/source/src/components/tessera-mark";
import { iterations } from "@/variants/with-taste-skill/opus-5/source/src/lib/iterations";
import iter1 from "@/variants/with-taste-skill/opus-5/source/src/assets/img/iter1-hero.png";
import iter2 from "@/variants/with-taste-skill/opus-5/source/src/assets/img/iter2-hero.png";
import iter3 from "@/variants/with-taste-skill/opus-5/source/src/assets/img/iter3-hero.png";
import iter4 from "@/variants/with-taste-skill/opus-5/source/src/assets/img/iter4-hero.png";
import iter5 from "@/variants/with-taste-skill/opus-5/source/src/assets/img/iter5-hero.png";

/*
  Index of the five directions. This is the only dual-mode surface in the project:
  each iteration locks a single theme because the theme is part of its art
  direction, but the index belongs to whoever is reviewing them.
*/

const plates: Record<string, StaticImageData> = {
  "1": iter1,
  "2": iter2,
  "3": iter3,
  "4": iter4,
  "5": iter5,
};

const typefaces: Record<string, string> = {
  "1": "Geist",
  "2": "EB Garamond with Inter Tight",
  "3": "Archivo with JetBrains Mono",
  "4": "Outfit with Manrope",
  "5": "Syne with Space Grotesk",
};

export default function IndexPage() {
  return (
    <main className="min-h-[100dvh] bg-white pb-28 font-sans text-zinc-900 dark:bg-[#0a0a0b] dark:text-zinc-100">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
        <header className="flex items-center gap-2.5 py-8">
          <TesseraMark size={15} className="text-zinc-400 dark:text-zinc-500" />
          <span className="text-[14px] font-medium tracking-tight">Tessera</span>
        </header>

        <div className="border-t border-zinc-200 pt-16 pb-14 dark:border-white/10">
          <h1 className="max-w-[24ch] text-[2.25rem] leading-[1.08] font-medium tracking-[-0.035em] sm:text-[3rem]">
            Five directions for the same product
          </h1>
          <p className="mt-6 max-w-[62ch] text-[16.5px] leading-relaxed text-zinc-600 dark:text-zinc-400">
            One note-taking app, read five different ways. Each page locks its own
            palette, type and theme, so the differences are directional rather
            than decorative. Use the switcher at the bottom of any page to move
            between them.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {iterations.map((iteration, index) => (
            <Link
              key={iteration.slug}
              href={`/${iteration.slug}`}
              className={`group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 transition-colors hover:border-zinc-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:border-white/10 dark:bg-[#101012] dark:hover:border-white/30 dark:focus-visible:outline-white ${
                index === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <div
                className={`relative w-full overflow-hidden ${
                  index === 0 ? "aspect-[16/6]" : "aspect-[16/9]"
                }`}
              >
                <Image
                  src={plates[iteration.slug]}
                  alt={`Opening plate from the ${iteration.name} direction`}
                  placeholder="blur"
                  fill
                  priority={index === 0}
                  sizes={index === 0 ? "(min-width: 640px) 90vw, 100vw" : "(min-width: 640px) 45vw, 100vw"}
                  className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[12px] tabular-nums text-zinc-400 dark:text-zinc-500">
                    {iteration.label}
                  </span>
                  <h2 className="text-[19px] font-medium tracking-tight">
                    {iteration.name}
                  </h2>
                </div>
                <p className="mt-2.5 max-w-[46ch] text-[14.5px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {iteration.direction}
                </p>
                <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-[12.5px]">
                  <div>
                    <dt className="text-zinc-500 dark:text-zinc-500">Type</dt>
                    <dd className="mt-1 text-zinc-800 dark:text-zinc-200">
                      {typefaces[iteration.slug]}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-zinc-500 dark:text-zinc-500">Theme</dt>
                    <dd className="mt-1 text-zinc-800 capitalize dark:text-zinc-200">
                      {iteration.theme}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-zinc-500 dark:text-zinc-500">
                      Variance, motion, density
                    </dt>
                    <dd className="mt-1 font-mono tabular-nums text-zinc-800 dark:text-zinc-200">
                      {iteration.dials.join(" / ")}
                    </dd>
                  </div>
                </dl>
                <span className="mt-7 inline-flex items-center gap-2 text-[14px] font-medium text-zinc-900 dark:text-zinc-100">
                  Open {iteration.name}
                  <ArrowRightIcon
                    size={14}
                    weight="bold"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
