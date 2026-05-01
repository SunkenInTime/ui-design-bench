import Head from "next/head";
import LandingPage from "../components/LandingPage";

export default function Five() {
  return (
    <>
      <Head>
        <title>Quiet Monastery | Mnemo</title>
        <meta
          name="description"
          content="Quiet Monastery landing page concept for Mnemo, a second-brain note-taking app."
        />
      </Head>
      <LandingPage iteration="five" />
    </>
  );
}
