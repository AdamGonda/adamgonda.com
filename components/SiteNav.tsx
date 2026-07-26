import Link from "next/link";

export function SiteNav() {
  return (
    <nav className="flex flex-row items-center justify-between bg-black px-s py-ss font-sans max-xs:px-xxs">
      <Link
        href="/"
        className="p-xs text-l font-bold text-white"
      >
        <p>[adam gonda]</p>
      </Link>
    </nav>
  );
}
