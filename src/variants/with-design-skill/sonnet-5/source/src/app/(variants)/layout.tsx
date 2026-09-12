import VariantSwitcher from "../../components/VariantSwitcher";

export default function VariantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <VariantSwitcher />
    </>
  );
}
