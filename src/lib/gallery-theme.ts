export const GALLERY_THEME_STORAGE_KEY = "gallery-color-scheme";

export type GalleryTheme = "light" | "dark";

export function getStoredGalleryTheme(): GalleryTheme | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const stored = window.localStorage.getItem(GALLERY_THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      return stored;
    }
  } catch {
    // Ignore storage errors and fall back to system preference.
  }

  return null;
}

export function getSystemGalleryTheme(): GalleryTheme {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function resolveGalleryTheme(stored: GalleryTheme | null = getStoredGalleryTheme()): GalleryTheme {
  return stored ?? getSystemGalleryTheme();
}

export function applyGalleryTheme(theme: GalleryTheme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export function setGalleryTheme(theme: GalleryTheme) {
  try {
    window.localStorage.setItem(GALLERY_THEME_STORAGE_KEY, theme);
  } catch {
    // Ignore storage errors; still apply the theme for this session.
  }

  applyGalleryTheme(theme);
}

export const galleryThemeInitScript = `(function(){try{var k=${JSON.stringify(GALLERY_THEME_STORAGE_KEY)};var s=localStorage.getItem(k);var d=s==="dark"||(s!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);document.documentElement.style.colorScheme=d?"dark":"light";}catch(e){}})();`;
