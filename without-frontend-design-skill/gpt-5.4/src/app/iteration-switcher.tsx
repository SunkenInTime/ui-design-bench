import Link from "next/link";
import { iterations } from "./iterations";

type IterationSwitcherProps = {
  currentSlug: string;
};

export function IterationSwitcher({ currentSlug }: IterationSwitcherProps) {
  return (
    <div className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4">
      <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white/85 p-2 shadow-lg shadow-black/10 backdrop-blur dark:border-white/10 dark:bg-zinc-900/85">
        <Link
          href="/"
          className="inline-flex h-9 items-center rounded-full border border-black/10 px-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600 transition hover:border-sky-400 hover:text-sky-600 dark:border-white/10 dark:text-zinc-300 dark:hover:text-sky-300"
        >
          Index
        </Link>
        <div className="h-5 w-px bg-black/10 dark:bg-white/10" />
        {iterations.map((iteration, index) => {
          const isActive = iteration.slug === currentSlug;

          return (
            <Link
              key={iteration.slug}
              href={`/${iteration.slug}`}
              aria-current={isActive ? "page" : undefined}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition ${
                isActive
                  ? "bg-sky-500 text-white shadow-sm"
                  : "border border-black/10 text-zinc-600 hover:border-sky-400 hover:text-sky-600 dark:border-white/10 dark:text-zinc-300 dark:hover:text-sky-300"
              }`}
            >
              {index + 1}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
