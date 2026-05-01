import Head from "next/head";
import LandingPage from "../components/LandingPage";

export default function Four() {
  return (
    <>
      <Head>
        <title>Spatial Canvas | Mnemo</title>
        <meta
          name="description"
          content="Spatial Canvas landing page concept for Mnemo, a second-brain note-taking app."
        />
      </Head>
      <LandingPage iteration="four" />
    </>
  );
}
