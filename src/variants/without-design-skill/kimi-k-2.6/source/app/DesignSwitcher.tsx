'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const designs = [
  { path: '/one', label: '1' },
  { path: '/two', label: '2' },
  { path: '/three', label: '3' },
  { path: '/four', label: '4' },
  { path: '/five', label: '5' },
];

export function DesignSwitcher() {
  const pathname = usePathname();

  // Only show on landing page iterations
  if (!designs.some((d) => d.path === pathname)) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 rounded-full bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-700 shadow-lg backdrop-blur-md px-2 py-2">
        <span className="hidden sm:inline text-xs font-medium text-zinc-500 dark:text-zinc-400 px-3">
          Design
        </span>
        {designs.map((design) => {
          const isActive = pathname === design.path;
          return (
            <Link
              key={design.path}
              href={design.path}
              className={
                'flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition ' +
                (isActive
                  ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950'
                  : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800')
              }
            >
              {design.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
