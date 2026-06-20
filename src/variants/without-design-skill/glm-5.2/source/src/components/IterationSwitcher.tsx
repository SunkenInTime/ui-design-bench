import Link from "next/link";
import { useRouter } from "next/router";

type Iteration = {
  slug: string;
  name: string;
};

const ITERATIONS: Iteration[] = [
  { slug: "one", name: "Minimal" },
  { slug: "two", name: "Editorial" },
  { slug: "three", name: "Neon Dark" },
  { slug: "four", name: "Warm Organic" },
  { slug: "five", name: "Bento Grid" },
];

export default function IterationSwitcher() {
  const router = useRouter();
  const currentSlug = router.pathname.startsWith("/")
    ? router.pathname.slice(1)
    : router.pathname;
  const activeIndex = ITERATIONS.findIndex((i) => i.slug === currentSlug);
  const active = activeIndex >= 0 ? ITERATIONS[activeIndex] : null;

  const prevIndex =
    activeIndex > 0 ? activeIndex - 1 : ITERATIONS.length - 1;
  const nextIndex =
    activeIndex >= 0 && activeIndex < ITERATIONS.length - 1
      ? activeIndex + 1
      : 0;
  const prev = ITERATIONS[prevIndex];
  const next = ITERATIONS[nextIndex];

  return (
    <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 px-4">
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-zinc-900/85 p-1.5 text-white shadow-2xl shadow-black/30 backdrop-blur-md">
        <Link
          href={`/${prev.slug}`}
          className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-300 transition hover:bg-white/10 hover:text-white"
          aria-label={`Previous iteration: ${prev.name}`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </Link>

        <div className="flex items-center gap-1 px-1">
          {ITERATIONS.map((it, i) => {
            const isActive = i === activeIndex;
            return (
              <Link
                key={it.slug}
                href={`/${it.slug}`}
                aria-label={`Iteration ${i + 1}: ${it.name}`}
                aria-current={isActive ? "page" : undefined}
                className={`flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-white text-zinc-900"
                    : "text-zinc-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {i + 1}
              </Link>
            );
          })}
        </div>

        <Link
          href={`/${next.slug}`}
          className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-300 transition hover:bg-white/10 hover:text-white"
          aria-label={`Next iteration: ${next.name}`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>

      {active && (
        <p className="mt-1.5 text-center text-[11px] font-medium uppercase tracking-wider text-zinc-500">
          {`Iteration ${activeIndex + 1} of ${ITERATIONS.length} — ${active.name}`}
        </p>
      )}
    </div>
  );
}
