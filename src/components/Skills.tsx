import TechItem from "./TechItem";

const TECH_ITEMS_EXPERIENCED = [
  {
    id: "1",
    src: "/assets/skills/javascript.png",
    alt: "Javascript logo",
    techName: "Javascript",
  },
  {
    id: "2",
    src: "/assets/skills/typescript.png",
    alt: "Typescript logo",
    techName: "Typescript",
  },
  {
    id: "3",
    src: "/assets/skills/react.png",
    alt: "React.js logo",
    techName: "React.js",
  },
  {
    id: "4",
    src: "/assets/skills/node.png",
    alt: "Node.js logo",
    techName: "Node.js",
  },
  {
    id: "5",
    src: "/assets/skills/nextjs.png",
    alt: "Next.js logo",
    techName: "Next.js",
  },
  {
    id: "6",
    src: "/assets/skills/docker.png",
    alt: "Docker logo",
    techName: "Docker",
  },
];

const TECH_ITEMS_FAMILIAR = [
  {
    id: "1",
    src: "/assets/skills/angular.png",
    alt: "Angular logo",
    techName: "Angular",
  },
  {
    id: "2",
    src: "/assets/skills/vuejs.png",
    alt: "Vuejs logo",
    techName: "Vuejs",
  },
  {
    id: "3",
    src: "/assets/skills/aws.png",
    alt: "AWS logo",
    techName: "AWS",
  },
  {
    id: "4",
    src: "/assets/skills/java.png",
    alt: "Java logo",
    techName: "Java",
  },
  {
    id: "5",
    src: "/assets/skills/spring.png",
    alt: "Spring logo",
    techName: "Spring",
  },
];

export default function Skills() {
  return (
    <div
      id="skills"
      className="max-w-[1240px] mx-auto flex flex-col justify-center px-2 py-16 min-h-screen"
    >
      <h2 className="text-center tracking-widest text-blue-700 mb-8 font-poppins">
        Tech Skills
      </h2>

      <div className="py-4">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h4 className="py-4 text-gray-700">I'm experienced with:</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {TECH_ITEMS_EXPERIENCED.map((tech) => (
            <TechItem
              key={tech.id}
              src={tech.src}
              alt={tech.alt}
              techName={tech.techName}
            />
          ))}
        </div>
      </div>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h4 className="py-4 text-gray-700">I'm learning:</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {TECH_ITEMS_FAMILIAR.map((tech) => (
          <TechItem
            key={tech.id}
            src={tech.src}
            alt={tech.alt}
            techName={tech.techName}
          />
        ))}
      </div>
    </div>
  );
}
