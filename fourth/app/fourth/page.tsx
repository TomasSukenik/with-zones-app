import Link from "next/link";

export default function Fourth() {
  return (
    <div>
      <h1>Fourth Zone</h1>
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
        <Link href="/fourth/about">Fourth &gt; About</Link>
      </div>
    </div>
  );
}
