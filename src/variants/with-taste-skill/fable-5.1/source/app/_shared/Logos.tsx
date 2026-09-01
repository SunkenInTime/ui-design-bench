import {
  siDuolingo,
  siFigma,
  siFramer,
  siMozilla,
  siShopify,
  siSpotify,
  siTheguardian,
  siVercel,
  type SimpleIcon,
} from "simple-icons";

/** Real brand marks from the simple-icons package. Rendered in currentColor so they work in both themes. */
export const LOGOS: SimpleIcon[] = [
  siSpotify,
  siShopify,
  siMozilla,
  siFigma,
  siDuolingo,
  siTheguardian,
  siFramer,
  siVercel,
];

export function BrandLogo({
  icon,
  className = "h-6 w-auto",
}: {
  icon: SimpleIcon;
  className?: string;
}) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      aria-label={icon.title}
      className={className}
      fill="currentColor"
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}
