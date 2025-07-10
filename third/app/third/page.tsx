import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Third Zone</h1>
      <div>
        <a href="/">First</a>
      </div>
      <div>
        <a href="/second">Second</a>
      </div>
      <div>
        <Link href="/third/about">Third &gt; About</Link>
      </div>
      <div>
        <a href="/fourth">Fourth</a>
      </div>
    </div>
  );
}
