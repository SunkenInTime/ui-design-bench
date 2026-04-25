import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 text-white">
      <h1 className="mb-2 text-sm uppercase tracking-[0.3em] text-neutral-500">Second Brain</h1>
      <p className="mb-10 text-xs text-neutral-600">Select an iteration</p>
      <div className="flex gap-4">
        {["one", "two", "three", "four", "five"].map((n) => (
          <Link
            key={n}
            href={`/${n}`}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-800 text-sm text-neutral-400 transition-colors hover:border-white hover:text-white"
          >
            {n}
          </Link>
        ))}
      </div>
    </div>
  );
}
