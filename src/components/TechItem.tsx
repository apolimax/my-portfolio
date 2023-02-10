import Image from "next/image";
//import "@/styles/TechItem.module.css";

type TechItemProps = {
  src: string;
  alt: string;
  techName: string;
};

export default function TechItem({ src, alt, techName }: TechItemProps) {
  return (
    <div
      className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 tooltip"
      data-tooltip={techName}
    >
      <div className="flex justify-center items-center">
        <div className="m-auto">
          <Image src={src} alt={alt} width="64" height="64" />
        </div>
      </div>
    </div>
  );
}
