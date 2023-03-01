import Link from "next/link";
import { useEffect } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { annotate, annotationGroup } from "rough-notation";

export default function About() {
  useEffect(() => {
    const jobTitle = document.querySelector("#job-title");
    const dream = document.querySelector("#dream");
    const react = document.querySelector("#react");
    const node = document.querySelector("#node");
    const brazil = document.querySelector("#brazil");
    const hire = document.querySelector("#hire");

    const a1 = annotate(jobTitle as HTMLElement, {
      type: "highlight",
      color: "#f9d44f",
    });
    const a2 = annotate(dream as HTMLElement, {
      type: "highlight",
      color: "#f9d44f",
      multiline: true,
    });
    const a3 = annotate(react as HTMLElement, {
      type: "underline",
      color: "#1e47a2",
    });
    const a4 = annotate(node as HTMLElement, {
      type: "underline",
      color: "#8aa589",
    });
    const a5 = annotate(brazil as HTMLElement, {
      type: "highlight",
      color: "#f9d44f",
    });
    const a6 = annotate(hire as HTMLElement, {
      type: "circle",
      color: "#f0524c",
      padding: 8,
      multiline: true,
    });

    const ag = annotationGroup([a1, a2, a3, a4, a5, a6]);
    ag.show();
  }, []);

  return (
    <div id="about" className="w-full h-screen text-center">
      <div className="max-w-[1200px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="flex flex-col items-center">
          <h1 className="py-4 text-gray-700">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Hi, I'm <span className="text-blue-700">Will Apolinário</span>
          </h1>
          <h2 id="job-title" className="py-2 text-gray-700">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Full Stack JS/TS developer
          </h2>
          <p className="py-8 px-2 text-gray-600 md:max-w-[60%] text-justify text-xl tracking-widest md:leading-8">
            Former mechanical engineer, I switched careers in order to follow a{" "}
            <span id="dream">dream of building digital products</span> and
            touching thousands of people worldwide with my craft. I started as a{" "}
            <span id="react">React developer</span> but worked my way to learn
            backend development with <span id="node">Node.js</span> and its
            frameworks. Here I will share some of my side projects and my
            writings. I am based in <span id="brazil">Brazil</span> and{" "}
            <span id="">looking for a remote developer job</span>. Will you{" "}
            <span id="hire">hire me ?</span>
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              legacyBehavior
              href="https://www.linkedin.com/in/will-apolinario/"
              className="cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <a
                className="cursor-pointer hover:scale-110 ease-in duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={30} />
              </a>
            </Link>
            <Link legacyBehavior href="https://github.com/apolimax">
              <a
                className="cursor-pointer hover:scale-110 ease-in duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
