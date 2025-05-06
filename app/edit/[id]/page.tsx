import Link from "next/link";

export default function page() {
  return (
    <div>
      <Link href="/" className="text-blue-500 mb-4 inline-block">
        &larr; Go back
      </Link>
      <h1>Edit Page</h1>
    </div>
  );
}
