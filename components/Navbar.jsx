import React from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AuthLinks from "./AuthLinks";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-[100px] ">
      {/* Social Trails */}
      {/* <div className="social flex gap-3 flex-1">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div> */}
      <div className="logo flex-1 font-bold text-[36px]">BLOGIFY</div>
      <div className="navigation flex gap-5 flex-1 text-[20px] justify-end">
        {/* <ThemeToggle /> */}
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <AuthLinks />
      </div>
    </div>
  );
}
