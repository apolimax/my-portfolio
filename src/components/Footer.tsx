import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="border-t-2 border-gray-300 h-20 bg-slate-300 flex justify-center">
      <div className="flex items-center gap-4">
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
  );
}
