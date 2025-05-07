import { db } from "@/db";
import { posts } from "@/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const post = await db
    .select()
    .from(posts)
    .where(eq(posts.id, Number.parseInt(params.id)))
    .then((res) => res[0]);

  if (!post) {
    return notFound();
  }
  return (
    <div>
      <Link href="/" className="text-blue-500 mb-4 inline-block">
        &larr; Go back
      </Link>
      <article className="space-y-4">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <p className="text-gray-600">
          Published on {new Date(post.createdAt).toLocaleDateString()}
        </p>
        <p>{post.content}</p>
      </article>
      <div className="mt-4 space-x-2">
        <Link href={`/edit/${post.id}`} className="text-blue-500">
          Edit
        </Link>
        <Link href={`/delete/${post.id}`} className="text-red-500">
          Delete
        </Link>
      </div>
    </div>
  );
}
