import Link from "next/link";

export default function Post() {
  return (
    <div>
      <h3>Post #1</h3>
      <p>Lorem ipsum</p>
      <Link href="/second">Back to blog</Link>
    </div>
  );
}
