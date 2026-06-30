export function LoamMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M11.6 20.2 20.3 11.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M12 22.4h7.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="9" cy="22" r="3.4" fill="currentColor" />
      <circle cx="23" cy="9" r="3.4" fill="currentColor" />
      <circle cx="21.5" cy="22.5" r="2.2" fill="currentColor" opacity="0.5" />
    </svg>
  );
}
