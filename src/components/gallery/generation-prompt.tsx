"use client";

import clsx from "clsx";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function GenerationPrompt({ prompt }: { prompt: string }) {
  const [copied, setCopied] = useState(false);
  const [copyFlash, setCopyFlash] = useState(false);

  const copyPrompt = async () => {
    setCopyFlash(true);
    window.setTimeout(() => setCopyFlash(false), 180);

    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  const active = copyFlash || copied;

  return (
    <div className="group mt-8 flex items-end gap-3">
      <figure className="min-w-0 flex-1 border-l border-[var(--gallery-divider-strong)] pl-5">
        <blockquote className="text-[15px] leading-relaxed text-[var(--gallery-text-secondary)]">
          <span className="text-[var(--gallery-text-quaternary)]">Prompt · </span>
          {prompt}
        </blockquote>
      </figure>

      <div
        className={clsx(
          "relative shrink-0 transition-opacity duration-150",
          active
            ? "opacity-100"
            : "opacity-100 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-within:opacity-100",
        )}
      >
        {copied ? (
          <div
            role="status"
            aria-live="polite"
            className="gallery-toast-enter pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-[var(--gallery-border)] bg-[var(--gallery-tooltip-bg)] px-3 py-1.5 text-xs font-medium text-[var(--gallery-text-primary)] shadow-[var(--gallery-shadow-lg)] backdrop-blur-md"
          >
            Prompt copied
          </div>
        ) : null}

        <button
          type="button"
          onClick={copyPrompt}
          aria-label={copied ? "Copied prompt" : "Copy prompt"}
          title={copied ? "Copied" : "Copy prompt"}
          className={clsx(
            "inline-flex size-8 cursor-pointer items-center justify-center rounded-md border shadow-[var(--gallery-shadow-sm)] transition-[border-color,background-color,color,box-shadow,opacity,transform] duration-150 active:scale-90",
            !active &&
              "[@media(hover:hover)]:pointer-events-none [@media(hover:hover)]:group-hover:pointer-events-auto [@media(hover:hover)]:group-focus-within:pointer-events-auto",
            active
              ? "border-[var(--gallery-accent)] bg-[color-mix(in_srgb,var(--gallery-accent)_18%,var(--gallery-surface))] text-[var(--gallery-accent)] shadow-[0_0_0_3px_color-mix(in_srgb,var(--gallery-accent)_16%,transparent)]"
              : "border-[var(--gallery-border)] bg-[var(--gallery-surface)] text-[var(--gallery-text-tertiary)] hover:border-[var(--gallery-divider-strong)] hover:bg-[var(--gallery-surface-subtle)] hover:text-[var(--gallery-text-primary)]",
          )}
        >
          <span className="relative inline-flex size-3.5 items-center justify-center">
            <Copy
              aria-hidden="true"
              className={clsx(
                "absolute inset-0 size-3.5 transition-[opacity,transform] duration-150 ease-out",
                copied ? "scale-75 opacity-0" : "scale-100 opacity-80",
              )}
            />
            <Check
              aria-hidden="true"
              strokeWidth={2.25}
              className={clsx(
                "absolute inset-0 size-3.5 transition-[opacity,transform] duration-150 ease-out",
                copied ? "scale-100 opacity-100" : "scale-75 opacity-0",
              )}
            />
          </span>
        </button>
      </div>
    </div>
  );
}
