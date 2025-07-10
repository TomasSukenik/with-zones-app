import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>Fourth Zone - About</h1>
      <div>
        <a href="/">First</a>
      </div>
      <div>
        <a href="/second">Second</a>
      </div>
      <div>
        <a href="/third">Third</a>
      </div>
      <div>
        <Link href="/fourth">Fourth &gt; Home</Link>
      </div>
    </div>
  );
}
