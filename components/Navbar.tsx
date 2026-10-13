import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-4 shadow-sm">
      <Link
        href="/"
        className="text-xl font-bold text-gray-900 transition-colors hover:text-indigo-600"
      >
        JobTracker
      </Link>

      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-600"
        >
          Home
        </Link>

        <Link
          href="/about"
          className="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-600"
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
