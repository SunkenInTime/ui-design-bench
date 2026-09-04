import type { Metadata } from "next";
import { Landing } from "../components/landing";

export const metadata: Metadata = { title: "Curious. For your many minds" };
export default function Page() { return <Landing variant="four" />; }
