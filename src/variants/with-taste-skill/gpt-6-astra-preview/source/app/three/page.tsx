import type { Metadata } from "next";
import { Landing } from "../components/landing";

export const metadata: Metadata = { title: "Garden. Let your thinking grow" };
export default function Page() { return <Landing variant="three" />; }
