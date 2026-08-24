"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

export function GalleryIterationViewTracker({
  group,
  model,
  iteration,
}: {
  group: string;
  model: string;
  iteration: string;
}) {
  useEffect(() => {
    posthog.capture("iteration_viewed", {
      group,
      model,
      iteration,
    });
  }, [group, model, iteration]);

  return null;
}
