import { notFound } from "next/navigation";
import Iteration1 from "@/components/iterations/Iteration1";
import Iteration2 from "@/components/iterations/Iteration2";
import Iteration3 from "@/components/iterations/Iteration3";
import Iteration4 from "@/components/iterations/Iteration4";
import Iteration5 from "@/components/iterations/Iteration5";
import IterationNav from "@/components/IterationNav";

const iterations: Record<string, React.ComponentType> = {
  "1": Iteration1,
  "2": Iteration2,
  "3": Iteration3,
  "4": Iteration4,
  "5": Iteration5,
};

export function generateStaticParams() {
  return ["1", "2", "3", "4", "5"].map((id) => ({ iteration: id }));
}

export default async function IterationPage({
  params,
}: {
  params: Promise<{ iteration: string }>;
}) {
  const { iteration } = await params;
  const Component = iterations[iteration];

  if (!Component) {
    notFound();
  }

  return (
    <>
      <Component />
      <IterationNav />
    </>
  );
}
