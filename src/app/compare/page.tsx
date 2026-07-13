import { notFound, redirect } from "next/navigation";
import { ComparePage } from "@/components/compare/compare-page";
import { GalleryRankingsNav } from "@/components/gallery/gallery-rankings-nav";
import { buildCompareHref, DEFAULT_COMPARE_STATE } from "@/lib/compare";
import { parseCompareSearchParams } from "@/lib/compare-server";
import { galleryCatalog } from "@/lib/gallery-catalog";

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

  return (
    <>
      <GalleryRankingsNav current="compare" />
      <ComparePage initialState={compareState} catalog={galleryCatalog} />
    </>
  );
}
