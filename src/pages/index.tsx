import Head from "next/head";
import About from "@/components/About";
import { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { getPosts } from "@/api/gql";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export type Post = {
  title: string;
  brief: string;
  slug: string;
  _id: string;
};

export type Posts = { posts: Post[] };

export default function Home({ posts }: Posts) {
  const [showGoTopButton, setShowGoTopButton] = useState(false);
  const [visibleSection, setVisibleSection] = useState("");

  useEffect(() => {
    const handleGoTopButton = () => {
      if (window.scrollY >= 400) {
        setShowGoTopButton(true);
      } else {
        setShowGoTopButton(false);
      }
    };

    window.addEventListener("scroll", handleGoTopButton);

    return () => {
      window.removeEventListener("scroll", handleGoTopButton);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setVisibleSection("");
  };

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
      <hr className="border-gray-300 rounded border-1 max-w-md mx-auto" />
      <Skills />
      <hr className="border-gray-300 rounded border-1 max-w-md mx-auto" />
      <Projects />
      <hr className="border-gray-300 rounded border-1 max-w-md mx-auto" />
      <Blog posts={posts} />
      <button
        id="to-top-button"
        onClick={goToTop}
        title="Go back to top"
        className={
          showGoTopButton
            ? "fixed z-90 bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-lg bg-blue-700 text-white text-3xl font-bold"
            : "hidden"
        }
      >
        &uarr;
      </button>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const { posts } = await getPosts();

  return {
    props: {
      posts,
    },
  };
}
