/**
 * Tessera's mark: four tiles with the fourth still landing. Deliberately a
 * single geometric figure, not an illustration, so each iteration can restyle
 * it with colour and size alone.
 */
export function TesseraMark({
  size = 18,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={className}
    >
      <rect width="6.6" height="6.6" x="0" y="0" fill="currentColor" />
      <rect width="6.6" height="6.6" x="9.4" y="0" fill="currentColor" />
      <rect width="6.6" height="6.6" x="0" y="9.4" fill="currentColor" />
      <rect
        width="6.6"
        height="6.6"
        x="9.4"
        y="9.4"
        fill="currentColor"
        opacity="0.35"
      />
    </svg>
  );
}
