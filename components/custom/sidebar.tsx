"use client";

import Image from "next/image";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const Sidebar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="bg-white w-24 h-full fixed top-0 left-0 flex justify-between flex-col items-center py-10">
      {/* Wrap profile image and link for sidebar */}

      {/* Profile image */}
      <div>
        <Image 
          src="/test.jpg"
          alt="Profile Image"
          width={50}
          height={50}
          className="rounded-full mb-10"
        />

        {/* Links */}
        <div className="flex flex-col justify-between items-center gap-7">
          <Link href="/" className="relative group">
            <Image 
              src="/sidebar/statistik.svg"
              alt="Statistik"
              width={30}
              height={30}
            />
            <div className={cn("sidebar-item w-[5px] h-0", pathname === "/" ? "h-[50px]" : "h-0")} />
          </Link>
          <Link href="/panduan" className="relative group">
            <Image 
              src="/sidebar/panduan.svg"
              alt="Panduan"
              width={30}
              height={30}
            />
            <div className={cn("sidebar-item w-[5px] h-0", pathname === "/panduan" ? "h-[50px]" : "h-0")} />
          </Link>
          <Link href="/kandidat" className="relative group">
            <Image 
              src="/sidebar/kandidat.svg"
              alt="Kandidat"
              width={30}
              height={30}
            />
            <div className={cn("sidebar-item w-[5px] h-0", pathname === "/kandidat" ? "h-[50px]" : "h-0")} />
          </Link>
          <Link href="/partai" className="relative group">
            <Image 
              src="/sidebar/partai.svg"
              alt="Partai"
              width={30}
              height={30}
            />
            <div className={cn("sidebar-item w-[5px] h-0", pathname === "/partai" ? "h-[50px]" : "h-0")} />
          </Link>
          <Link href="/voting" className="relative group">
            <Image 
              src="/sidebar/voting.svg"
              alt="Voting"
              width={30}
              height={30}
            />
            <div className={cn("sidebar-item w-[5px] h-0", pathname === "/voting" ? "h-[50px]" : "h-0")} />
          </Link>
        </div>
      </div>

      {/* Wrap logout button */}
      <div>
        <Button variant="destructive">
          <LogOut />
        </Button>
      </div>
    </div>
  )
}

export default Sidebar