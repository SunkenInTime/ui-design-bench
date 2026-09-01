import { IterationSwitcher } from "../components/iteration-switcher";

export default function IterationsLayout({
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
