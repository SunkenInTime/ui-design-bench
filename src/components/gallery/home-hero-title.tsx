"use client";

import type { ComponentType, KeyboardEvent } from "react";
import { useRef, useState, useSyncExternalStore } from "react";
import { WeightWaveVariant } from "./hero/variant-weight-wave";
import { MagneticVariant } from "./hero/variant-magnetic";
import { InkBleedVariant } from "./hero/variant-ink-bleed";
import { PixelDustVariant } from "./hero/variant-pixel-dust";
import { HeatShimmerVariant } from "./hero/variant-heat-shimmer";
import type { HeroVariantId, HeroVariantProps } from "./hero/types";

const TEXT = "Which AI Made This?";
const LINES = ["Which AI", "Made This?"];

type Variant = {
  id: HeroVariantId;
  label: string;
  hint: string;
  Component: ComponentType<HeroVariantProps>;
};

const VARIANTS: readonly Variant[] = [
  {
    id: "wave",
    label: "Wave",
    hint: "Type weight breathes with your cursor",
    Component: WeightWaveVariant,
  },
  {
    id: "magnetic",
    label: "Magnetic",
    hint: "Letters drift away from your cursor",
    Component: MagneticVariant,
  },
  {
    id: "ink",
    label: "Ink",
    hint: "Wet-ink turbulence ripples across the type",
    Component: InkBleedVariant,
  },
  {
    id: "pixel",
    label: "Pixel",
    hint: "Glyphs disintegrate into a pixel field",
    Component: PixelDustVariant,
  },
  {
    id: "shimmer",
    label: "Shimmer",
    hint: "Heat haze radiates from your cursor (WebGL)",
    Component: HeatShimmerVariant,
  },
] as const;

const STORAGE_KEY = "home-hero-treatment";

function subscribeStorage(cb: () => void) {
  const handler = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) cb();
  };
  window.addEventListener("storage", handler);
  return () => window.removeEventListener("storage", handler);
}

function readStoredId(): HeroVariantId | null {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (v && VARIANTS.some((variant) => variant.id === v)) {
      return v as HeroVariantId;
    }
  } catch {
    // ignore
  }
  return null;
}

const SERVER_SNAPSHOT: HeroVariantId | null = null;

export function HomeHeroTitle() {
  const storedId = useSyncExternalStore(
    subscribeStorage,
    readStoredId,
    () => SERVER_SNAPSHOT,
  );
  const storedIndex = storedId
    ? VARIANTS.findIndex((v) => v.id === storedId)
    : -1;

  // Override of the stored value once the user clicks; falls back to stored.
  const [override, setOverride] = useState<number | null>(null);
  const activeIndex =
    override ?? (storedIndex >= 0 ? storedIndex : 0);
  const tabsRef = useRef<HTMLDivElement>(null);

  function commit(i: number) {
    const next = ((i % VARIANTS.length) + VARIANTS.length) % VARIANTS.length;
    setOverride(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, VARIANTS[next].id);
    } catch {
      // ignore
    }
  }

  function handleKey(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      commit(activeIndex + 1);
      requestAnimationFrame(() => {
        const next = tabsRef.current?.querySelectorAll<HTMLButtonElement>(
          "[role='tab']",
        )[(activeIndex + 1) % VARIANTS.length];
        next?.focus();
      });
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      commit(activeIndex - 1);
      requestAnimationFrame(() => {
        const next = tabsRef.current?.querySelectorAll<HTMLButtonElement>(
          "[role='tab']",
        )[
          (activeIndex - 1 + VARIANTS.length) % VARIANTS.length
        ];
        next?.focus();
      });
    } else if (e.key === "Home") {
      e.preventDefault();
      commit(0);
    } else if (e.key === "End") {
      e.preventDefault();
      commit(VARIANTS.length - 1);
    }
  }

  const Active = VARIANTS[activeIndex].Component;
  const activeId = VARIANTS[activeIndex].id;

  return (
    <div className="home-hero">
      <h1
        className="home-hero__title text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl"
        aria-label={TEXT}
        data-treatment={activeId}
      >
        <Active key={activeId} text={TEXT} lines={LINES} />
      </h1>
      <div
        ref={tabsRef}
        role="tablist"
        aria-label="Title treatment"
        className="home-hero__switcher"
        onKeyDown={handleKey}
      >
        {VARIANTS.map((v, i) => {
          const selected = i === activeIndex;
          return (
            <button
              key={v.id}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls="home-hero-title"
              tabIndex={selected ? 0 : -1}
              title={v.hint}
              className={`home-hero__chip${selected ? " home-hero__chip--active" : ""}`}
              onClick={() => commit(i)}
            >
              {v.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
