import Link from "next/link";

const allPosts = [
  {
    id: 1,
    title: "Introduction to JavaScript",
    createdAt: "2025-05-01T10:00:00Z",
    content:
      "JavaScript is a versatile programming language used primarily for web development...",
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    createdAt: "2025-05-03T14:30:00Z",
    content:
      "React Hooks allow you to use state and lifecycle features in functional components...",
  },
  {
    id: 3,
    title: "Getting Started with Next.js",
    createdAt: "2025-05-04T09:15:00Z",
    content:
      "Next.js is a React framework that enables server-side rendering and static site generation...",
  },
];

export default function Home() {
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
