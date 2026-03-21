import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-8 dark:bg-zinc-950">
      <main className="flex max-w-2xl flex-col items-center text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Second Brain
        </h1>
        <p className="mb-12 text-lg text-zinc-600 dark:text-zinc-400">
          Five landing page design iterations. Pick one to explore.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {["one", "two", "three", "four", "five"].map((num) => (
            <Link
              key={num}
              href={`/${num}`}
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Design {num}
            </Link>
          ))}
        </div>
        <p className="mt-12 text-sm text-zinc-500">
          Use the floating button in the bottom-right to switch between designs.
        </p>
      </main>
    </div>
  );
}

