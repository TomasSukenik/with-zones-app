import Link from "next/link";

export default function About() {
  return (
    <div>
      <p>This is the about page.</p>
      <div>
        <Link href="/third">Go Back</Link>
      </div>
    </div>
  );
}
