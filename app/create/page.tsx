import Link from "next/link";

export default function page() {
  return (
    <div>
      <Link href="/" className="text-blue-500 mb-4 inline-block">
        &larr; Go back
      </Link>
      <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
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
