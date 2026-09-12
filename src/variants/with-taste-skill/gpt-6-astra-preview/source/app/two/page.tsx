import type { Metadata } from "next";
import { Landing } from "../components/landing";

export const metadata: Metadata = { title: "Connected. Think outside the folder" };
export default function Page() { return <Landing variant="two" />; }
