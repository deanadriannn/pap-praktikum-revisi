"use client";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

const SignoutButton = () => {
    return (
        <>
        <div>
        <Button onClick= {() => signOut({
            redirect: true,
            callbackUrl: "/sign-in",
        })} variant="destructive">
          <LogOut />
        </Button>
        </div>
        </>
    )

}

export default SignoutButton