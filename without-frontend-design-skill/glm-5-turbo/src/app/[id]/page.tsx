import { notFound } from "next/navigation";
import Design1 from "@/components/designs/Design1";
import Design2 from "@/components/designs/Design2";
import Design3 from "@/components/designs/Design3";
import Design4 from "@/components/designs/Design4";
import Design5 from "@/components/designs/Design5";

const designs: Record<string, React.ComponentType> = {
  "1": Design1,
  "2": Design2,
  "3": Design3,
  "4": Design4,
  "5": Design5,
};

export default async function IterationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const Design = designs[id];

  if (!Design) {
    notFound();
  }

  return <Design />;
}
