import Head from "next/head";
import LandingPage from "../components/LandingPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mnemo | Second brain landing page concepts</title>
        <meta
          name="description"
          content="Five landing page design iterations for Mnemo, a second-brain note-taking application."
        />
      </Head>
      <LandingPage iteration="one" />
    </>
  );
}
