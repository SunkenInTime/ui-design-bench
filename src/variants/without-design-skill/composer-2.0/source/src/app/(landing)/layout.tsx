import { IterationSwitcher } from "@/variants/without-design-skill/composer-2.0/source/src/components/IterationSwitcher";

export default function LandingIterationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <IterationSwitcher />
    </>
  );
}

