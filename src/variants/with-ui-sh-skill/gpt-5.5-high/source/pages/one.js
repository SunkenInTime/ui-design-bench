import Head from "next/head";
import LandingPage from "../components/LandingPage";

export default function One() {
  return (
    <>
      <Head>
        <title>Archive Garden | Mnemo</title>
        <meta
          name="description"
          content="Archive Garden landing page concept for Mnemo, a second-brain note-taking app."
        />
      </Head>
      <LandingPage iteration="one" />
    </>
  );
}
