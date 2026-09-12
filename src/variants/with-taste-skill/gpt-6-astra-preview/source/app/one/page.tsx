import type { Metadata } from "next";
import { Landing } from "../components/landing";

export const metadata: Metadata = { title: "Paper. A little space for a big mind" };
export default function Page() { return <Landing variant="one" />; }
