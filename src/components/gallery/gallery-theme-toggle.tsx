"use client";

import clsx from "clsx";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import {
  applyGalleryTheme,
  getStoredGalleryTheme,
  getSystemGalleryTheme,
  setGalleryTheme,
  type GalleryTheme,
} from "@/lib/gallery-theme";

export function GalleryThemeToggle({ className }: { className?: string }) {
  const [theme, setThemeState] = useState<GalleryTheme>("light");
  const isDark = theme === "dark";

  useEffect(() => {
    const syncFromDocument = () => {
      setThemeState(document.documentElement.classList.contains("dark") ? "dark" : "light");
    };
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const syncWithSystem = () => {
      if (getStoredGalleryTheme()) return;
      const nextTheme = getSystemGalleryTheme();
      applyGalleryTheme(nextTheme);
      setThemeState(nextTheme);
    };

    syncFromDocument();
    media.addEventListener("change", syncWithSystem);
    return () => media.removeEventListener("change", syncWithSystem);
  }, []);

  const toggleTheme = () => {
    const nextTheme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    setGalleryTheme(nextTheme);
    setThemeState(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
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
