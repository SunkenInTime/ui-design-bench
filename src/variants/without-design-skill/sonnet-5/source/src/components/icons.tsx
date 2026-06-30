import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

export function IconBrain(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9.5 3.5a3 3 0 0 0-3 3v.2A3.3 3.3 0 0 0 4.5 9.5a3.3 3.3 0 0 0-1 6.4 3.2 3.2 0 0 0 3 4.1c.4 0 .8-.07 1.2-.2A3 3 0 0 0 9.5 21V8a4.5 4.5 0 0 1 0-4.5Z" />
      <path d="M14.5 3.5a3 3 0 0 1 3 3v.2a3.3 3.3 0 0 1 2 2.8 3.3 3.3 0 0 1 1 6.4 3.2 3.2 0 0 1-3 4.1c-.4 0-.8-.07-1.2-.2A3 3 0 0 1 14.5 21V8a4.5 4.5 0 0 0 0-4.5Z" />
      <path d="M9.5 8h5M9 12.5h6M9.5 17h5" />
    </svg>
  );
}

export function IconLink(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M10 13.5a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1 1" />
      <path d="M14 10.5a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1" />
    </svg>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20l-4.3-4.3" />
    </svg>
  );
}

export function IconSparkles(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M11 3v3M11 17v3M3 11h3M17 11h3M5.6 5.6l2 2M14.4 14.4l2 2M16.4 5.6l-2 2M7.6 14.4l-2 2" />
      <path d="M11 8.5 12.4 11l2.6 1.4-2.6 1.4L11 16.5 9.6 13.8 7 12.4l2.6-1.4Z" />
    </svg>
  );
}

export function IconCloud(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 18a4 4 0 1 1 .7-7.94A5 5 0 0 1 17 11.5 3.5 3.5 0 0 1 16.5 18H7Z" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.5 5 6v5.5c0 4.2 3 7 7 9 4-2 7-4.8 7-9V6l-7-2.5Z" />
      <path d="m9.3 12 1.9 1.9L14.7 10" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 12h16" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function IconStar(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor" stroke="none">
      <path d="M12 2.8 14.6 8.6l6.3.6-4.8 4.2 1.5 6.2L12 16.6l-5.6 3 1.5-6.2-4.8-4.2 6.3-.6Z" />
    </svg>
  );
}

export function IconNetwork(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="18" cy="6" r="2.2" />
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="18" cy="18" r="2.2" />
      <circle cx="12" cy="12" r="2.2" />
      <path d="M7.8 7.2 10.3 10.5M16.2 7.2 13.7 10.5M7.8 16.8 10.3 13.5M16.2 16.8 13.7 13.5" />
    </svg>
  );
}

export function IconZap(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m12.5 3-7 11h5l-1 7 7-11h-5l1-7Z" />
    </svg>
  );
}

export function IconNotebook(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4.5" y="3.5" width="14" height="17" rx="1.8" />
      <path d="M8 3.5v17M4.5 8H8M4.5 12.5H8M4.5 17H8" />
    </svg>
  );
}

export function IconQuote(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor" stroke="none">
      <path d="M9.5 6.5c-3 1-5 3.6-5 6.8 0 2.4 1.6 4.2 3.8 4.2a3.3 3.3 0 0 0 3.4-3.4c0-1.7-1.2-3-2.8-3.2.3-1.6 1.6-2.8 3.1-3.4l-1.5-1Zm9 0c-3 1-5 3.6-5 6.8 0 2.4 1.6 4.2 3.8 4.2a3.3 3.3 0 0 0 3.4-3.4c0-1.7-1.2-3-2.8-3.2.3-1.6 1.6-2.8 3.1-3.4l-1.5-1Z" />
    </svg>
  );
}

export function IconChevronRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

export function IconPlus(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 6.5h16M4 12h16M4 17.5h16" />
    </svg>
  );
}

export function IconX(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconHome(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9.5h12V10" />
      <path d="M10 19.5V14h4v5.5" />
    </svg>
  );
}

export function IconLayers(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m12 3.5 8 4.3-8 4.3-8-4.3 8-4.3Z" />
      <path d="m4 12 8 4.3 8-4.3M4 15.7 12 20l8-4.3" />
    </svg>
  );
}

export function IconCalendar(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="5.5" width="16" height="14.5" rx="1.8" />
      <path d="M8 3.5v4M16 3.5v4M4 10h16" />
    </svg>
  );
}

export function IconCommand(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4.5" y="4.5" width="4.5" height="4.5" rx="2" />
      <rect x="15" y="4.5" width="4.5" height="4.5" rx="2" />
      <rect x="4.5" y="15" width="4.5" height="4.5" rx="2" />
      <rect x="15" y="15" width="4.5" height="4.5" rx="2" />
      <path d="M9 7h6M9 17h6M7 9v6M17 9v6" />
    </svg>
  );
}
