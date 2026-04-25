import { getVariant } from "../landing-data";
import { LandingPage } from "../landing-page";

export default function Page() {
  return <LandingPage variant={getVariant("five")} />;
}
