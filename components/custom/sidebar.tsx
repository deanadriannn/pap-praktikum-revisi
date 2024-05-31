"use server";
import SignoutButton from "./signoutButton";
import Links from "./links";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";


const Sidebar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="bg-white w-24 h-full fixed top-0 left-0 flex justify-between flex-col items-center py-10">
      {/* Wrap profile image and link for sidebar */}
      <Links />

      {/* Wrap logout button */}
      <SignoutButton />
      
    </div>
  )
}

export default Sidebar