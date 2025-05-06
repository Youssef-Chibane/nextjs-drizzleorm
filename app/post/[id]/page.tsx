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
