import { db } from "@/db";
import { posts } from "@/db/schema";
import Link from "next/link";
import { eq } from "drizzle-orm";
import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

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

  const deletePost = async () => {
    "use server";
    await db.delete(posts).where(eq(posts.id, post.id));
    revalidatePath("/");
    redirect("/");
  };

  return (
    <div>
      <Link
        href={`/post/${params.id}`}
        className="text-blue-500 mb-4 inline-block"
      >
        &larr; Go back
      </Link>
      <p>Are you sure you want to delete this post ?</p>
      <form action={deletePost}>
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded mt-4 cursor-pointer"
        >
          Delete
        </button>
      </form>
    </div>
  );
}
