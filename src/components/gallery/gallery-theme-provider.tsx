"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {
  applyGalleryTheme,
  getStoredGalleryTheme,
  getSystemGalleryTheme,
  resolveGalleryTheme,
  setGalleryTheme,
  type GalleryTheme,
} from "@/lib/gallery-theme";

type GalleryThemeContextValue = {
  theme: GalleryTheme;
  setTheme: (theme: GalleryTheme) => void;
  toggleTheme: () => void;
};

const GalleryThemeContext = createContext<GalleryThemeContextValue | null>(null);

export function GalleryThemeProvider({ children }: { children: ReactNode }) {
  // Keep SSR and the first client render in sync; resolve stored/system theme after mount.
  const [theme, setThemeState] = useState<GalleryTheme>("light");
  const [hasResolvedTheme, setHasResolvedTheme] = useState(false);

  useEffect(() => {
    setThemeState(resolveGalleryTheme());
    setHasResolvedTheme(true);
  }, []);

  useEffect(() => {
    if (!hasResolvedTheme) return;
    applyGalleryTheme(theme);
  }, [hasResolvedTheme, theme]);

  useEffect(() => {
    const stored = getStoredGalleryTheme();
    if (stored) {
      return;
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const syncWithSystem = () => {
      setThemeState(getSystemGalleryTheme());
    };

    media.addEventListener("change", syncWithSystem);
    return () => media.removeEventListener("change", syncWithSystem);
  }, []);

  const setTheme = (nextTheme: GalleryTheme) => {
    setGalleryTheme(nextTheme);
    setThemeState(nextTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <GalleryThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </GalleryThemeContext.Provider>
  );
}

export function useGalleryTheme() {
  const context = useContext(GalleryThemeContext);
  if (!context) {
    throw new Error("useGalleryTheme must be used within GalleryThemeProvider");
  }

  return context;
}
