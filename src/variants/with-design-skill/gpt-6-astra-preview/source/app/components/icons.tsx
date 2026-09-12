import type { CSSProperties } from "react";

export type IconName = "arrow" | "arrow-up" | "arrow-down" | "chevron" | "close" | "menu" | "plus" | "search" | "note" | "link" | "spark" | "check" | "folder" | "leaf" | "sun" | "mic" | "play" | "lock" | "grid" | "globe" | "download" | "trash" | "book" | "heart" | "layers" | "compass";

export function Icon({ name, size = 20, className = "", style }: { name: IconName; size?: number; className?: string; style?: CSSProperties }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M4 12h15M13 5l7 7-7 7" /></>,
    "arrow-up": <><path d="M6 18 18 6M6 6h12v12" /></>,
    "arrow-down": <><path d="M12 4v16m-7-7 7 7 7-7" /></>,
    chevron: <path d="m9 5 7 7-7 7" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    plus: <path d="M12 5v14M5 12h14" />,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4 4" /></>,
    note: <><path d="M14 3H5v18h14V8Z" /><path d="M14 3v5h5M8 12h8M8 16h6" /></>,
    link: <><path d="m9 15 6-6M8 16l-1 1a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0m2 10a4 4 0 0 0 6 0l4-4a4 4 0 0 0-6-6l-1 1" transform="translate(0 -1) scale(.96)" /></>,
    spark: <><path d="m12 2 2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6Z" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    folder: <path d="M3 6h7l2 3h9v11H3Zm0 3V4h7l2 2h7v3" />,
    leaf: <><path d="M20 3C9 2 3 7 5 14s12 7 15-11ZM5 20l10-11" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 1v3m0 16v3M1 12h3m16 0h3M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2" /></>,
    mic: <><rect x="9" y="3" width="6" height="12" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v4m-4 0h8" /></>,
    play: <path d="m9 5 11 7-11 7Z" />,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V6a4 4 0 0 1 8 0v4M12 14v3" /></>,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></>,
    download: <><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" /></>,
    trash: <><path d="M3 6h18M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7m4-7v7" /></>,
    book: <><path d="M12 5v16M12 5C8 2 4 3 2 4v15c3-1 7-1 10 2 3-3 7-3 10-2V4c-2-1-6-2-10 1Z" /></>,
    heart: <path d="M20 5a5 5 0 0 0-8 1 5 5 0 0 0-8-1c-4 4 1 10 8 15 7-5 12-11 8-15Z" />,
    layers: <><path d="m12 3 10 5-10 5L2 8Zm-9 9 9 5 9-5M3 16l9 5 9-5" /></>,
    compass: <><circle cx="12" cy="12" r="9" /><path d="m16 8-3 5-5 3 3-5Z" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">{paths[name]}</svg>;
}

export function MorrowMark({ className = "", size = 34 }: { className?: string; size?: number }) {
  return <svg className={className} width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M7 29V15c0-7 12-7 12 0v14M21 29V15c0-7 12-7 12 0v14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" /><path d="M7 22c0-8 12-8 12 0m2 0c0-8 12-8 12 0" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" /></svg>;
}

export function Sprout({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 100 120" fill="none" className={className} aria-hidden="true"><path d="M51 107c-2-32 2-54 8-75M52 75C23 76 13 60 15 41c26-4 40 11 37 34ZM56 57C83 57 93 41 85 20 62 21 53 35 56 57Z" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /><path d="M20 46 48 70m12-19 19-24M33 108h34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>;
}
