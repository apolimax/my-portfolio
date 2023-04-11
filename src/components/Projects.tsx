import ProjectItem from "./ProjectItem";

const PROJECTS = [
  {
    id: "1",
    imageSrc: "/assets/tmdb.png",
    alt: "TMDB Movies",
    name: "TMDB Movies",
    code: "https://github.com/apolimax/TheMovieBitNext",
    live: "https://themoviebitbywill.vercel.app/",
    tech: "Next.js, Typescript",
  },
  {
    id: "2",
    imageSrc: "/assets/todomvc.png",
    alt: "Todo MVC App",
    name: "Todo List",
    code: "https://github.com/apolimax/todomvc",
    live: "https://todomvcbywill.netlify.app/",
    tech: "React.js",
  },
  {
    id: "3",
    imageSrc: "/assets/splitter.png",
    alt: "Splitter App",
    name: "Splitter",
    code: "https://github.com/apolimax/tip-calculator",
    live: "https://tipwill-calculator.netlify.app/",
    tech: "React.js",
  },
];

export default function Projects() {
  return (
    <div
      id="projects"
      className="max-w-[1200px] mx-auto px-2 py-16 min-h-screen"
    >
      <h2 className="text-center tracking-widest text-blue-700 mb-8 font-poppins">
        Projects
      </h2>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h4 className="py-4 text-gray-700">Some projects I've been building</h4>
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
