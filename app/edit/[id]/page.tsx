import { db } from "@/db";
import { posts } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

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

  async function updatePost(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    await db
      .update(posts)
      .set({ title, content, updatedAt: new Date().toISOString() })
      .where(eq(posts.id, post.id));
    revalidatePath("/");
    redirect("/");
  }

  return (
    <div>
      <Link
        href={`/post/${params.id}`}
        className="text-blue-500 mb-4 inline-block"
      >
        &larr; Go back
      </Link>
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
      <form action={updatePost}>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2">
            Title
          </label>
          <input
            type="text"
            required
            name="title"
            id="title"
            className="w-full p-2 border rounded"
            defaultValue={post.title}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block mb-2">
            Content
          </label>
          <textarea
            name="content"
            id="content"
            className="w-full p-2 border rounded"
            required
            rows={5}
            defaultValue={post.content}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Post
        </button>
      </form>
    </div>
  );
}
