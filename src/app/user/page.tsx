"use client";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function User() {
  const { user, error, isLoading } = useUser();

  if (user) {
    console.log(user);
    return (
      <div>
        <h2>Profile</h2>
        {user.name && <p>Name: {user.name}</p>}
        {user.nickname && <p>Nickname: {user.nickname}</p>}
      </div>
    );
  }
  return (
    <div>
      <h2>Profile</h2>
      <p>Loading...</p>
    </div>
  );
}
