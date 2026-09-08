"use client";

import clsx from "clsx";
import { Search, X } from "lucide-react";
import { useEffect, useRef } from "react";

export function GallerySearch({
  query,
  onQueryChange,
  resultCount,
  totalCount,
}: {
  query: string;
  onQueryChange: (next: string) => void;
  resultCount: number;
  totalCount: number;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const active = query.trim().length > 0;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target?.isContentEditable) {
        return;
      }
      event.preventDefault();
      inputRef.current?.focus();
      inputRef.current?.select();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const clear = () => {
    onQueryChange("");
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <label
        className={clsx(
          "group/search relative flex h-10 w-full max-w-2xl items-center gap-2 rounded-lg border bg-[var(--gallery-surface)] pl-3 pr-2 shadow-[var(--gallery-shadow-sm)] transition-[border-color,box-shadow] duration-150",
          "focus-within:border-[var(--gallery-accent)] focus-within:shadow-[0_0_0_3px_color-mix(in_srgb,var(--gallery-accent)_16%,transparent)]",
          active
            ? "border-[var(--gallery-divider-strong)]"
            : "border-[var(--gallery-border)] hover:border-[var(--gallery-divider-strong)]",
        )}
      >
        <Search
          className="size-4 shrink-0 text-[var(--gallery-text-quaternary)] transition-colors group-focus-within/search:text-[var(--gallery-accent)]"
          strokeWidth={1.75}
          aria-hidden
        />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              if (active) {
                event.preventDefault();
                onQueryChange("");
              } else {
                inputRef.current?.blur();
              }
            }
          }}
          placeholder="Search models"
          aria-label="Search models"
          autoComplete="off"
          spellCheck={false}
          enterKeyHint="search"
          className="min-w-0 flex-1 bg-transparent text-sm text-[var(--gallery-text-primary)] outline-none placeholder:text-[var(--gallery-text-quaternary)] [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
        />
        {active ? (
          <button
            type="button"
            onClick={clear}
            aria-label="Clear search"
            className="inline-flex size-6 shrink-0 items-center justify-center rounded-md text-[var(--gallery-text-tertiary)] transition-colors hover:bg-[var(--gallery-hover-bg)] hover:text-[var(--gallery-text-primary)]"
          >
            <X className="size-3.5" strokeWidth={2} aria-hidden />
          </button>
        ) : (
          <kbd
            aria-hidden
            className="hidden h-5 min-w-5 shrink-0 items-center justify-center rounded border border-[var(--gallery-border)] bg-[var(--gallery-surface-subtle)] px-1 font-[inherit] text-[11px] font-medium text-[var(--gallery-text-quaternary)] transition-opacity group-focus-within/search:opacity-0 sm:inline-flex"
          >
            /
          </kbd>
        )}
      </label>
      <p
        role="status"
        aria-live="polite"
        className={clsx(
          "text-sm tabular-nums text-[var(--gallery-text-tertiary)] transition-opacity duration-150",
          active ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        {active
          ? resultCount === 0
            ? "No matches"
            : `${resultCount} of ${totalCount} generations`
          : " "}
      </p>
    </div>
  );
}
