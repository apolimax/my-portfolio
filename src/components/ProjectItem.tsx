import Image from "next/image";
import Link from "next/link";

function ProjectItem({
  imageSrc,
  alt,
  name,
  code,
  live,
  tech,
}: {
  imageSrc: string;
  alt: string;
  name: string;
  code: string;
  live: string;
  tech: string;
}) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-sky-300 to-sky-400">
      <Image
        className="rounded-xl group-hover:opacity-10 h-full object-cover"
        src={imageSrc}
        alt={alt}
        width={800}
        height={500}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {name}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <div className="flex gap-4">
          <Link href={code} legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <button className="w-20 text-center py-3 rounded-lg bg-white hover:bg-gray-700 hover:text-white ease-in duration-200 text-gray-700 font-bold text-lg cursor-pointer">
                Code
              </button>
            </a>
          </Link>
          <Link href={live} legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <button className="w-20 text-center py-3 rounded-lg bg-white hover:bg-gray-700 hover:text-white ease-in duration-200 text-gray-700 font-bold text-lg cursor-pointer">
                Live
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
