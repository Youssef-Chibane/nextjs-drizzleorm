import { db } from "@/db";
import { posts } from "@/db/schema";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";

async function createPost(formData: FormData) {
  "use server";
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  await db.insert(posts).values({ title, content });
  revalidatePath("/");
  redirect("/");
}

export default function page() {
  return (
    <div>
      <Link href="/" className="text-blue-500 mb-4 inline-block">
        &larr; Go back
      </Link>
      <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
      <form action={createPost}>
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
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}
