import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import Searchbar from "./searchbar";

export default async function User() {
  const session = await getSession(); // Awaiting the session properly
  const user = session?.user;

  if (!user) {
    redirect("/");
  }

  return (
    <>
      <Searchbar />
    </>
  );
}
