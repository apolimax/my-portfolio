import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type NavBarProps = {
  visibleSection: string;
  setVisibleSection: Dispatch<SetStateAction<string>>;
};

export default function NavBar({
  visibleSection,
  setVisibleSection,
}: NavBarProps) {
  const [sideBar, setSideBar] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleNavBarShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleNavBarShadow);

    return () => {
      window.removeEventListener("scroll", handleNavBarShadow);
    };
  }, []);

  function handleSideBar() {
    setSideBar((nav) => !nav);
  }

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-16 shadow-xl z-[100] border-b-2 bg-slate-100"
          : "fixed w-full h-16 z-[100]"
      }
    >
      <div className="flex items-center w-full h-full px-2 2xl:px-16">
        {/* <Image src="" alt=""/> */}

        <ul className="hidden md:flex md:gap-8 mx-auto">
          <Link href="/" onClick={() => setVisibleSection("")}>
            <li
              className={
                visibleSection === ""
                  ? "border-b-2 text-lg pb-2 tracking-widest border-blue-700"
                  : "border-b-2 text-lg pb-2 tracking-widest border-slate-100"
              }
            >
              About
            </li>
          </Link>
          <Link href="#skills" onClick={() => setVisibleSection("#skills")}>
            <li
              className={
                visibleSection === "#skills"
                  ? "border-b-2 text-lg pb-2 tracking-widest border-blue-700"
                  : "border-b-2 text-lg pb-2 tracking-widest border-slate-100"
              }
            >
              Tech Skills
            </li>
          </Link>
          <Link href="#projects" onClick={() => setVisibleSection("#projects")}>
            <li
              className={
                visibleSection === "#projects"
                  ? "border-b-2 text-lg pb-2 tracking-widest border-blue-700"
                  : "border-b-2 text-lg pb-2 tracking-widest border-slate-100"
              }
            >
              Projects
            </li>
          </Link>
          <Link href="#blog" onClick={() => setVisibleSection("#blog")}>
            <li
              className={
                visibleSection === "#blog"
                  ? "border-b-2 text-lg pb-2 tracking-widest border-blue-700"
                  : "border-b-2 text-lg pb-2 tracking-widest border-slate-100"
              }
            >
              Blog
            </li>
          </Link>
        </ul>
        <div
          onClick={handleSideBar}
          className="md:hidden cursor-pointer ml-auto"
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>
    </div>
  );
}
