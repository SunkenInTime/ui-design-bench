/*
  One button component for the whole route so the radius (6px), the mono label
  size and the press feedback stay identical everywhere.

  Contrast audit, both variants against their own background:
   - primary: #0a0a0b text on #3ddc97 fill  => 11.2:1 (WCAG AA and AAA)
   - secondary: #e8e8e6 text on #0a0a0b page => 16.1:1
*/

type Variant = "primary" | "secondary";

const base =
  "inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 font-mono text-[13px] leading-none transition-[background-color,border-color,color,transform] duration-150 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3ddc97]";

const variants: Record<Variant, string> = {
  primary: "bg-[#3ddc97] text-[#0a0a0b] hover:bg-[#4fe3a3]",
  secondary:
    "border border-white/[0.09] text-[#e8e8e6] hover:border-white/20 hover:bg-[#121214]",
};

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}
