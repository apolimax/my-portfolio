import { Posts } from "@/pages";
import Link from "next/link";

export default function Blog({ posts }: Posts) {
  return (
    <div id="blog" className="max-w-[1200px] mx-auto px-2 py-16 min-h-full">
      <h2 className="text-center tracking-widest text-blue-700 mb-8 font-poppins">
        Blog
      </h2>
      <h3 className="mb-8 text-gray-700">My latest blog posts</h3>
      <div className="flex flex-col gap-7">
        {posts
          .map((post) => (
            <div key={post._id} className="flex flex-col gap-1">
              <h4 className="text-gray-700">{post.title}</h4>
              <p className="text-gray-600">{post.brief}</p>
              <Link
                legacyBehavior
                href={`https://apolinariosdevblog.hashnode.dev/${post.slug}`}
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
          ))
          .slice(0, 3)}
      </div>
    </div>
  );
}
