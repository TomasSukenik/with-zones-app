import Link from "next/link";

export default function First() {
  return (
    <div>
      <h1>First Zone</h1>
      <div>
        <Link href="/about">First &gt; About</Link>
      </div>
      <div>
        <a href="/second">Second</a>
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
