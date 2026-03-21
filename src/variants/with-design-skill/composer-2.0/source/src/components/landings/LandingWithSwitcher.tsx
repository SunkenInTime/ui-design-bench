import { IterationSwitcher } from "./IterationSwitcher";

export function LandingWithSwitcher({
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

