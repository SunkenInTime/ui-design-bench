import Head from "next/head";
import LandingPage from "../components/LandingPage";

export default function Three() {
  return (
    <>
      <Head>
        <title>Editorial Desk | Mnemo</title>
        <meta
          name="description"
          content="Editorial Desk landing page concept for Mnemo, a second-brain note-taking app."
        />
      </Head>
      <LandingPage iteration="three" />
    </>
  );
}
