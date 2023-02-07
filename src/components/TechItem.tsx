import Image from "next/image";

type TechItemProps = {
  src: string;
  alt: string;
};

export default function TechItem({ src, alt }: TechItemProps) {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="flex justify-center items-center">
        <div className="m-auto">
          <Image src={src} alt={alt} width="64" height="64" />
        </div>
      </div>
    </div>
  );
}
