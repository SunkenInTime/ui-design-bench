import { IterationSwitcher } from "@/components/IterationSwitcher";

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
