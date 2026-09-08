export const GALLERY_SWITCHER_SIDE_STORAGE_KEY = "gallery-switcher-side";

export type GallerySwitcherSide = "left" | "right";

export const DEFAULT_GALLERY_SWITCHER_SIDE: GallerySwitcherSide = "right";

const listeners = new Set<() => void>();

function notify() {
  for (const listener of listeners) listener();
}

export function getStoredGallerySwitcherSide(): GallerySwitcherSide {
  if (typeof window === "undefined") {
    return DEFAULT_GALLERY_SWITCHER_SIDE;
  }

  try {
    const stored = window.localStorage.getItem(GALLERY_SWITCHER_SIDE_STORAGE_KEY);
    if (stored === "left" || stored === "right") {
      return stored;
    }
  } catch {
    // Ignore storage errors and fall back to the default side.
  }

  return DEFAULT_GALLERY_SWITCHER_SIDE;
}

export function getServerGallerySwitcherSide(): GallerySwitcherSide {
  return DEFAULT_GALLERY_SWITCHER_SIDE;
}

export function setStoredGallerySwitcherSide(side: GallerySwitcherSide) {
  try {
    window.localStorage.setItem(GALLERY_SWITCHER_SIDE_STORAGE_KEY, side);
  } catch {
    // Ignore storage errors; subscribers still get the new side for this session.
  }

  notify();
}

export function subscribeGallerySwitcherSide(listener: () => void) {
  listeners.add(listener);

  function handleStorage(event: StorageEvent) {
    if (event.key === null || event.key === GALLERY_SWITCHER_SIDE_STORAGE_KEY) listener();
  }

  window.addEventListener("storage", handleStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
}
