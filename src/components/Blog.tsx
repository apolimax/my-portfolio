import { Posts } from "@/pages";
import Link from "next/link";
import BlogItem from "./BlogItem";

export default function Blog({ posts }: Posts) {
  return (
    <div id="blog" className="max-w-[1200px] mx-auto px-2 py-16 min-h-full">
      <h2 className="text-center tracking-widest text-blue-700 mb-8 font-poppins">
        Blog
      </h2>
      <h3 className="mb-8 text-gray-700">My latest blog posts</h3>
      <div className="flex flex-col gap-7">
        {posts.map((post) => <BlogItem key={post._id} {...post} />).slice(0, 3)}
      </div>
    </div>
  );
}
