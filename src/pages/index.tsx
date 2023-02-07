import Head from "next/head";
import About from "@/components/About";
import { useState } from "react";
import NavBar from "@/components/NavBar";

export default function Home() {
  const [visibleSection, setVisibleSection] = useState("");

  return (
    <>
      <Head>
        <title>Will Apolinário | Fullstack Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar
        visibleSection={visibleSection}
        setVisibleSection={setVisibleSection}
      />
      <About />
    </>
  );
}
