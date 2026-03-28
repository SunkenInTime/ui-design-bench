import Image from "next/image";
import Link from "next/link";
import { Home, Palette } from "lucide-react";
import type { GalleryEntry, IterationId } from "@/lib/gallery-types";
import { buildVariantHref } from "@/lib/gallery-paths";
import { getModelBrandLogoPath } from "@/lib/model-brand-logo";

export function VariantSwitcher({
  entry,
  iteration,
}: {
  entry: GalleryEntry;
  iteration: IterationId;
}) {
  const logoSrc = getModelBrandLogoPath(entry.model);

  return (
    <nav
      aria-label={`${entry.modelLabel} gallery navigation`}
      className="fixed top-5 right-5 z-[100] flex w-auto flex-col items-center gap-1 rounded-lg border border-[var(--gallery-border)] bg-white/85 px-1 py-1 text-neutral-500 shadow-[0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-[12px] sm:top-6 sm:right-6"
    >
      <Link
        href="/"
        aria-label="Back to Composer Bench Gallery"
        className="inline-flex size-7 items-center justify-center rounded-md text-neutral-600 transition-colors hover:bg-black/[0.04] hover:text-neutral-900"
      >
        <Home className="size-4 shrink-0 opacity-80" aria-hidden="true" />
      </Link>
      <div
        className="h-px w-full shrink-0 bg-[var(--gallery-border)]"
        aria-hidden="true"
      />
      <span className="inline-flex flex-col items-center gap-0.5 py-0.5">
        <span
          className="group/logo relative inline-flex h-7 cursor-default items-center justify-center"
          aria-label={entry.modelLabel}
        >
          <Image
            src={logoSrc}
            alt=""
            width={22}
            height={22}
            className="max-h-[1.375rem] w-auto object-contain opacity-90 transition-opacity duration-200 group-hover/logo:opacity-100"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute inset-y-0 right-full z-[110] mr-2 flex items-center"
            aria-hidden
          >
            <span
              role="tooltip"
              className="max-w-[min(16rem,calc(100vw-4rem))] truncate rounded-md border border-[var(--gallery-border)] bg-white/95 px-2.5 py-1.5 text-left text-xs font-medium tracking-tight text-neutral-800 shadow-[0_4px_20px_rgba(0,0,0,0.1)] backdrop-blur-[12px] opacity-0 transition-opacity duration-200 ease-out group-hover/logo:opacity-100"
            >
              {entry.modelLabel}
            </span>
          </span>
        </span>
        <span
          className="group/skill relative inline-flex size-4 shrink-0 cursor-default items-center justify-center"
          aria-label={
            entry.group === "with-design-skill" ? "With skill" : "Without skill"
          }
        >
          <Palette
            className={`size-3.5 shrink-0 ${
              entry.group === "with-design-skill"
                ? "text-[var(--gallery-accent)]"
                : "text-neutral-400 opacity-55"
            }`}
            strokeWidth={2}
            aria-hidden
          />
          {entry.group === "without-design-skill" ? (
            <span
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
              aria-hidden
            >
              <span className="h-px w-[130%] max-w-[1.125rem] rotate-[-38deg] rounded-full bg-neutral-400/85" />
            </span>
          ) : null}
          <span
            className="pointer-events-none absolute inset-y-0 right-full z-[110] mr-2 flex items-center"
            aria-hidden
          >
            <span
              role="tooltip"
              className="whitespace-nowrap rounded-md border border-[var(--gallery-border)] bg-white/95 px-2.5 py-1.5 text-left text-xs font-medium tracking-tight text-neutral-800 shadow-[0_4px_20px_rgba(0,0,0,0.1)] backdrop-blur-[12px] opacity-0 transition-opacity duration-200 ease-out group-hover/skill:opacity-100"
            >
              {entry.group === "with-design-skill"
                ? "With skill"
                : "Without skill"}
            </span>
          </span>
        </span>
      </span>
      <div
        className="h-px w-full shrink-0 bg-[var(--gallery-border)]"
        aria-hidden="true"
      />
      <div
        className="flex flex-col items-center gap-1"
        role="group"
        aria-label="Iterations"
      >
        {entry.iterations.map((item) => {
          const active = item.id === iteration;
          return (
            <Link
              key={item.id}
              href={buildVariantHref(entry.group, entry.model, item.id)}
              aria-current={active ? "page" : undefined}
              aria-label={`Open iteration ${item.id}`}
              className={`inline-flex size-7 shrink-0 items-center justify-center rounded-md text-[11px] font-medium tabular-nums leading-none transition-colors ${
                active
                  ? "bg-[var(--gallery-accent)] text-[var(--gallery-accent-foreground)]"
                  : "text-neutral-600 hover:bg-black/[0.04] hover:text-neutral-900"
              }`}
            >
              {item.id}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
