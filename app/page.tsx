import { db } from "@/db";
import { posts } from "@/db/schema";
import { desc } from "drizzle-orm";
import Link from "next/link";

export default async function Home() {
  const allPosts = await db.select().from(posts).orderBy(desc(posts.createdAt));

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">My Blog</h1>
      <Link
        href="/create"
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        Create New Post
      </Link>
      <div className="space-y-4">
        {allPosts.map((post) => (
          <div className="border p-4" key={post.id}>
            <Link href={`/post/${post.id}`}>
              <h2 className="text-xl font-semibold hover:text-blue-500">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
            <p className="mt-2">{post.content.substring(0, 150)}...</p>

            <div className="mt-4 space-x-2">
              <Link href={`/post/${post.id}`} className="text-blue-500">
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
