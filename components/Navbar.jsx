import React from "react";
import ThemeToggle from "./ThemeToggle";
import AuthLinks from "./AuthLinks";
import Link from "next/link";

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
      <div className="navigation flex gap-5 flex-1 text-[20px] justify-end items-center ">
        <AuthLinks />
        <Link className="sm:hidden" href="/about">
          About
        </Link>
        <Link className="sm:hidden" href="/contact">
          Contact
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
}
