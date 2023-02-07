import { Post } from "@/pages";
import Link from "next/link";

export default function BlogItem({ title, brief, slug }: Post) {
  return (
    <div className="flex flex-col gap-1">
      <h4 className="text-gray-700">{title}</h4>
      <p className="text-gray-600">{brief}</p>
      <Link
        legacyBehavior
        href={`https://apolinariosdevblog.hashnode.dev/${slug}`}
      >
        <a
          className="text-blue-800 underline decoration-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Continue reading
        </a>
      </Link>
    </div>
  );
}
