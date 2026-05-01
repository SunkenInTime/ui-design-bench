import { VariantSwitcher } from "@/variants/with-ui-sh-skill/composer-2.0/source/components/variant-switcher";

export default function LandingVariantsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <VariantSwitcher />
    </>
  );
}
