"use client";
import Link from "next/link";
import NavbarRight from "./navbarRight";

import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();
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
              <div
                className={clsx(
                  "cursor-pointer hover:text-gray-100 transition",
                  { " text-blue-600": pathname === "/about" }
                )}
              >
                About
              </div>
            </Link>
            <Link href="/contact">
              <div
                className={clsx(
                  "cursor-pointer hover:text-gray-100 transition",
                  { " text-blue-600": pathname === "/contact" }
                )}
              >
                Contact
              </div>
            </Link>
          </div>
        </div>

        {/* Right Side: Buttons */}
        <NavbarRight />
      </div>
    </nav>
  );
}
