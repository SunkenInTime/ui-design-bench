import { redirect } from "next/navigation";

import { defaultIteration } from "@/variants/with-design-skill/gpt-5.4/source/src/lib/iterations";

export default function Home() {
  redirect(defaultIteration.href);
}

