import React from "react";
import ThemeToggle from "./ThemeToggle";
import AuthLinks from "./AuthLinks";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-[100px]">
      <div className="logo flex-1 font-bold text-[36px]">BLOGIFY</div>
      <div className="navigation flex gap-5 flex-1 text-[20px] justify-end items-center ">
        <Link className="sm:hidden" href="/">
          Home
        </Link>
        <Link className="sm:hidden" href="/about">
          About
        </Link>
        <AuthLinks />
        <ThemeToggle />
      </div>
    </div>
  );
}
