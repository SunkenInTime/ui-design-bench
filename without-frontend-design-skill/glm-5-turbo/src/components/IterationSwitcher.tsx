"use client";

import { usePathname, useRouter } from "next/navigation";

const iterations = [
  { id: 1, name: "Whitespace" },
  { id: 2, name: "Neural" },
  { id: 3, name: "Library" },
  { id: 4, name: "Constellation" },
  { id: 5, name: "Swiss" },
];

export default function IterationSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentId = parseInt(pathname.slice(1)) || 1;
  const current =
    iterations.find((i) => i.id === currentId) || iterations[0];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 rounded-full px-2.5 py-2 shadow-lg backdrop-blur-xl border bg-white/70 border-zinc-200/80 dark:bg-zinc-900/70 dark:border-zinc-700/80">
      {iterations.map((iter) => (
        <button
          key={iter.id}
          onClick={() => router.push(`/${iter.id}`)}
          className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 ${
            currentId === iter.id
              ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-sm"
              : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          }`}
          title={iter.name}
        >
          {iter.id}
        </button>
      ))}
      <div className="ml-2 pl-2 border-l border-zinc-200 dark:border-zinc-700">
        <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
          {current.name}
        </span>
      </div>
    </div>
  );
}
