export function KithMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <rect x="8" y="2.5" width="8" height="5" rx="1.2" />
      <rect x="5" y="9.5" width="14" height="5" rx="1.2" />
      <rect x="2" y="16.5" width="20" height="5" rx="1.2" />
    </svg>
  );
}
