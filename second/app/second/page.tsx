import Link from "next/link";

export default function Second() {
  return (
    <div>
      <h1>Second Zone</h1>
      <div>
        <a href="/">First</a>
      </div>
      <div>
        <Link href="/second/post">Second &gt; Post</Link>
      </div>
      <div>
        <a href="/third">Third</a>
      </div>
      <div>
        <a href="/fourth">Fourth</a>
      </div>
    </div>
  );
}
