"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";
import { useEffect } from "react";

const galleryScrollKey = "composer-bench:gallery-scroll-y";

type GalleryScrollLinkProps = ComponentProps<typeof Link>;

export function GalleryScrollLink({
  onClick,
  ...props
}: GalleryScrollLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    sessionStorage.setItem(galleryScrollKey, String(window.scrollY));
  }

  return <Link {...props} onClick={handleClick} />;
}

export function RestoreGalleryScroll() {
  useEffect(() => {
    const savedScrollY = sessionStorage.getItem(galleryScrollKey);
    if (!savedScrollY) {
      return;
    }

    sessionStorage.removeItem(galleryScrollKey);
    const top = Number(savedScrollY);
    if (!Number.isFinite(top)) {
      return;
    }

    const restore = () => window.scrollTo({ top, behavior: "auto" });
    requestAnimationFrame(() => {
      restore();
      setTimeout(restore, 0);
    });
  }, []);

  return null;
}
