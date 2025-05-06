import Link from "next/link";

const post = {
  id: 1,
  title: "Introduction to JavaScript",
  createdAt: "2025-05-01T10:00:00Z",
  content:
    "JavaScript is a versatile programming language used primarily for web development.",
};

export default function page() {
  return (
    <div>
      <Link href="/" className="text-blue-500 mb-4 inline-block">
        &larr; Go back
      </Link>
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
      <form>
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
