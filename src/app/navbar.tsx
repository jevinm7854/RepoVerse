import Link from "next/link";

export default async function Navbar() {
  return (
    <nav className="bg-[#0C0C0C] text-gray-400 shadow-md">
      <div className="container px-4 py-3 flex justify-between items-center">
        {/* Left Side: Logo and Links */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            {/* Logo */}
            <div className="bg-gray-800 rounded-full p-2">
              <span className="text-lg font-bold text-white">🏅</span>
            </div>
            {/* Company Name */}
            <Link href="/">
              <span className="text-xl font-bold text-white">RepoVerse</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/about">
              <div className="cursor-pointer hover:text-gray-100 transition">
                About
              </div>
            </Link>
            <Link href="/contact">
              <div className="cursor-pointer hover:text-gray-100 transition">
                Contact
              </div>
            </Link>
          </div>
        </div>

        {/* Right Side: Try for Free Button */}
        <div>
          <a href="/api/auth/login">
            <div className="bg-gray-200 text-black px-4 py-2 rounded-md cursor-pointer transition hover:bg-gray-400">
              Try for Free
            </div>
          </a>
        </div>
        <div>
          <a href="/api/auth/logout">
            <div className="bg-gray-200 text-black px-4 py-2 rounded-md cursor-pointer transition hover:bg-gray-400">
              Logout
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}
