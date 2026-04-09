import { notFound, redirect } from "next/navigation";
import { ComparePage } from "@/components/compare/compare-page";
import { buildCompareHref, DEFAULT_COMPARE_STATE, parseCompareSearchParams } from "@/lib/compare";

export default async function CompareRoutePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const resolvedSearchParams = await searchParams;
  const compareState = parseCompareSearchParams(resolvedSearchParams);

  if (compareState === "default") {
    redirect(buildCompareHref(DEFAULT_COMPARE_STATE));
  }

  if (compareState === "invalid") {
    notFound();
  }

  return <ComparePage initialState={compareState} />;
}
