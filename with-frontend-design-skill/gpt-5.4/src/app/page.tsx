import { redirect } from "next/navigation";

import { defaultIteration } from "@/lib/iterations";

export default function Home() {
  redirect(defaultIteration.href);
}
