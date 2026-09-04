import type { Metadata } from "next";
import { Landing } from "../components/landing";

export const metadata: Metadata = { title: "Horizon. A little more headspace" };
export default function Page() { return <Landing variant="five" />; }
