import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

type SideBarProps = {
  sideBar: boolean;
  handleSideBar: () => void;
  setSideBar: Dispatch<SetStateAction<boolean>>;
};

export default function SideBar({
  sideBar,
  handleSideBar,
  setSideBar,
}: SideBarProps) {
  return (
    <div
      className={
        sideBar
          ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
          : ""
      }
    >
      <div
        className={
          sideBar
            ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed right-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div>
          <div className="flex w-full items-center justify-between">
            <Image
              src="/assets/skills/aws.png"
              alt="/"
              width="50"
              height="50"
            />
            <div onClick={handleSideBar} className="p-3 cursor-pointer">
              <AiOutlineClose size={25} />
            </div>
          </div>
        </div>
        <div className="py-4 flex flex-col items-center">
          <ul className="uppercase">
            <Link
              href="#about"
              onClick={() => setSideBar(false)}
              className="text-center"
            >
              <li className="py-4 uppercase">About</li>
            </Link>
            <Link
              href="#skills"
              onClick={() => setSideBar(false)}
              className="text-center"
            >
              <li className="py-4 uppercase">Tech Skills</li>
            </Link>
            <Link
              href="#projects"
              onClick={() => setSideBar(false)}
              className="text-center"
            >
              <li className="py-4 uppercase">Projects</li>
            </Link>
            <Link
              href="#blog"
              onClick={() => setSideBar(false)}
              className="text-center"
            >
              <li className="py-4 uppercase">Blog</li>
            </Link>
            {/* <Link href="#skills">
                <li className="py-4 uppercase">Skills</li>
              </Link> */}
          </ul>

          <div className="flex items-center justify-center w-full sm:w-[80%]">
            <div className=" p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn size={30} />
            </div>
            <div className=" p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
