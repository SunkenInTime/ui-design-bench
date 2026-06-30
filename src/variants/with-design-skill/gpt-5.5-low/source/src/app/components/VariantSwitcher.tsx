import Link from "next/link";

const variants = [
  { href: "/one", label: "01" },
  { href: "/two", label: "02" },
  { href: "/three", label: "03" },
  { href: "/four", label: "04" },
  { href: "/five", label: "05" },
];

export function VariantSwitcher({ current }: { current: string }) {
  return (
    <nav className="variant-switcher" aria-label="Landing page variants">
      {variants.map((variant) => (
        <Link
          key={variant.href}
          href={variant.href}
          aria-current={current === variant.href ? "page" : undefined}
        >
          {variant.label}
        </Link>
      ))}
    </nav>
  );
}
