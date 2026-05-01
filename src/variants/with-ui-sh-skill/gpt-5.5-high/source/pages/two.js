import Head from "next/head";
import LandingPage from "../components/LandingPage";

export default function Two() {
  return (
    <>
      <Head>
        <title>Neural Night | Mnemo</title>
        <meta
          name="description"
          content="Neural Night landing page concept for Mnemo, a second-brain note-taking app."
        />
      </Head>
      <LandingPage iteration="two" />
    </>
  );
}
