"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function AuthLinks() {
  const [open, setOpen] = useState(false);
  const { status } = useSession();
  return (
    <>
      {status === "authenticated" ? (
        <>
          <Link className="sm:hidden" href="/write">
            Write
          </Link>
          <span className="cursor-pointer sm:hidden" onClick={signOut}>
            Logout
          </span>
        </>
      ) : (
        <>
          <Link className="sm:hidden" href="/login">
            Login
          </Link>
        </>
      )}
      <div className="hidden sm:flex">
        <MenuIcon
          fontSize="large"
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      {open && (
        <div className="responsiveMenu absolute top-[100px] left-0 bg-[var(--bg)] h-[calc(100vh-100px)] w-full flex flex-col items-start justify-start gap-3 px-[40px]">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          {status === "authenticated" ? (
            <>
              <Link href="/write">Write</Link>
              <span className="cursor-pointer" onClick={signOut}>
                Logout
              </span>
            </>
          ) : (
            <>
              <Link href="/login">Login</Link>
            </>
          )}
        </div>
      )}
    </>
  );
}
