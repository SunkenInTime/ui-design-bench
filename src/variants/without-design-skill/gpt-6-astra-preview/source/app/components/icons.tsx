import type { CSSProperties } from "react";

export type IconName = "arrow" | "arrow-up" | "play" | "plus" | "search" | "note" | "link" | "spark" | "grid" | "check" | "close" | "menu" | "chevron" | "book" | "globe" | "leaf" | "lock" | "sun" | "headphones" | "image" | "download" | "clock" | "folder";

export function Icon({ name, size = 20, className = "", style }: { name: IconName; size?: number; className?: string; style?: CSSProperties }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M4 12h15M13 5l7 7-7 7" /></>,
    "arrow-up": <><path d="M5 19 19 5M5 5h14v14" /></>,
    play: <path d="m9 5 11 7-11 7V5Z" />,
    plus: <path d="M12 5v14M5 12h14" />,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4.5 4.5" /></>,
    note: <><path d="M14 3H5v18h14V8l-5-5Z" /><path d="M14 3v6h5M8 13h8M8 17h5" /></>,
    link: <><path d="m10 14 4-4M8 16l-1 1a4.2 4.2 0 0 1-6-6l5-5a4.2 4.2 0 0 1 6 0M16 8l1-1a4.2 4.2 0 0 1 6 6l-5 5a4.2 4.2 0 0 1-6 0" transform="translate(1 0) scale(.92 1)" /></>,
    spark: <><path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z" /></>,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    chevron: <path d="m6 9 6 6 6-6" />,
    book: <><path d="M12 5v16M12 6S8 2 2 4v15c6-2 10 2 10 2s4-4 10-2V4c-6-2-10 2-10 2Z" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></>,
    leaf: <><path d="M20 3C5 1 1 13 7 18s16 0 13-15ZM5 21 16 8" /></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V6a4 4 0 0 1 8 0v4M12 14v3" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 1v3M12 20v3M1 12h3M20 12h3M4 4l2 2M18 18l2 2M4 20l2-2M18 6l2-2" /></>,
    headphones: <><path d="M4 16V11a8 8 0 0 1 16 0v5" /><rect x="3" y="12" width="5" height="8" rx="2" /><rect x="16" y="12" width="5" height="8" rx="2" /></>,
    image: <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8" cy="8" r="1.5" /><path d="m3 17 6-6 5 5 3-3 4 4" /></>,
    download: <><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    folder: <path d="M3 6h7l2 3h9v11H3V6Z" />,
  };
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>{paths[name]}</svg>;
}

export function Flower({ className = "", size = 36, outline = false }: { className?: string; size?: number; outline?: boolean }) {
  return <svg className={`flower ${className}`} width={size} height={size} viewBox="0 0 64 64" aria-hidden="true"><g fill={outline ? "none" : "currentColor"} stroke={outline ? "currentColor" : "none"} strokeWidth="1.3">{Array.from({ length: 8 }, (_, i) => <ellipse key={i} cx="32" cy="18" rx="7" ry="15" transform={`rotate(${i * 45} 32 32)`} />)}</g><circle cx="32" cy="32" r="4.5" className="flower-center" /></svg>;
}

export function Brand({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return <span className={`brand ${light ? "brand-light" : ""}`}><Flower size={compact ? 27 : 36} /><span>mote<span className="brand-period">.</span></span></span>;
}
