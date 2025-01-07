import React from "react";
import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

function NavbarRight() {
  const {user, isLoading}= useUser() // Awaiting the session properly
  

  return (
    <div className="flex space-x-4">
      {user && (
        <>
          <Link href="/user">
            <div className="bg-gray-200 text-black px-4 py-2 rounded-md cursor-pointer transition hover:bg-gray-400">
              Dashboard
            </div>
          </Link>
          <Link href="/api/auth/logout">
            <div className="bg-gray-200 text-black px-4 py-2 rounded-md cursor-pointer transition hover:bg-gray-400">
              Logout
            </div>
          </Link>
        </>
      )}

      {!user && (
        <Link href="/api/auth/login">
          <div className="bg-gray-200 text-black px-4 py-2 rounded-md cursor-pointer transition hover:bg-gray-400">
            Try for Free
          </div>
        </Link>
      )}
    </div>
  );
}

export default NavbarRight;
