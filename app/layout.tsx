import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import "./globals.css";
import Sidebar from "@/components/custom/sidebar";
import { cn } from "@/lib/utils";

const font = Manrope({ 
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Website pemilu",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Sidebar />
      <body className={cn("pr-12 pl-36 py-20", font.className)}>
        {children}
      </body>
    </html>
  );
}
