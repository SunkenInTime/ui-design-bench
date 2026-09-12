"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const variants = ["/1", "/2", "/3", "/4", "/5"] as const;

export function VariantSwitcher({ tone = "auto" }: { tone?: "light" | "dark" | "auto" }) {
  const pathname = usePathname();
  const active = variants.find((v) => pathname === v || pathname === `${v}/`) ?? variants[0];

  const isDark = tone === "dark";
  const isLight = tone === "light";

  return (
    <div
      className="fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6"
      style={{ colorScheme: isDark ? "dark" : "light" }}
    >
      <nav
        aria-label="Design variants"
        className="flex items-center gap-1 rounded-full border px-2 py-1.5 shadow-lg backdrop-blur-md"
        style={{
          background: isDark
            ? "rgba(17, 17, 17, 0.82)"
            : isLight
              ? "rgba(255, 255, 255, 0.86)"
              : "rgba(20, 20, 20, 0.78)",
          borderColor: isDark
            ? "rgba(255,255,255,0.14)"
            : isLight
              ? "rgba(0,0,0,0.1)"
              : "rgba(255,255,255,0.14)",
          color: isLight ? "#171717" : "#f5f5f5",
        }}
      >
        <span
          className="hidden pr-2 pl-2 font-medium tracking-tight sm:inline"
          style={{ fontSize: 12, opacity: 0.72 }}
        >
          Loci
        </span>
        {variants.map((href, i) => {
          const isActive = href === active;
          return (
            <Link
              key={href}
              href={href}
              aria-current={isActive ? "page" : undefined}
              aria-label={`Variant ${i + 1}`}
              className="inline-flex h-9 min-w-9 items-center justify-center rounded-full px-2.5 text-sm font-semibold tabular-nums transition-colors"
              style={{
                background: isActive
                  ? isLight
                    ? "#171717"
                    : "#f5f5f5"
                  : "transparent",
                color: isActive
                  ? isLight
                    ? "#fafafa"
                    : "#111111"
                  : isLight
                    ? "rgba(23,23,23,0.7)"
                    : "rgba(245,245,245,0.78)",
              }}
            >
              {i + 1}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
