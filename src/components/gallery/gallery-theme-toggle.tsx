"use client";

import clsx from "clsx";
import { Moon, Sun } from "lucide-react";
import posthog from "posthog-js";
import { useGalleryTheme } from "@/components/gallery/gallery-theme-provider";

export function GalleryThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useGalleryTheme();
  const isDark = theme === "dark";

  const handleToggle = () => {
    posthog.capture("theme_toggled", {
      new_theme: isDark ? "light" : "dark",
    });
    toggleTheme();
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={clsx(
        "relative inline-flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-md text-[var(--gallery-text-secondary)] transition-colors duration-150 hover:bg-[var(--gallery-hover-bg)] hover:text-[var(--gallery-text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_srgb,var(--gallery-accent)_45%,transparent)]",
        className,
      )}
    >
      <Sun
        className={clsx(
          "absolute size-4 shrink-0 transition-all duration-300",
          isDark ? "scale-75 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-90",
        )}
        aria-hidden="true"
      />
      <Moon
        className={clsx(
          "absolute size-4 shrink-0 transition-all duration-300",
          isDark ? "scale-100 rotate-0 opacity-90" : "-rotate-90 scale-75 opacity-0",
        )}
        aria-hidden="true"
      />
    </button>
  );
}
