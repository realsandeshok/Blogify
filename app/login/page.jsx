"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const { data, status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className="">LOADING.......</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="bg-[var(--softBg)] py-[150px] px-[200px] flex flex-col gap-10 rounded-lg md:py-[100px] md:px-[150px] sm:py-[50px] sm:px-[100px] ">
        <div
          className="p-3 rounded border-none text-white font-semibold cursor-pointer flex items-center justify-center bg-blue-400 sm:text-[12px] sm:font-medium"
          onClick={() => signIn("google")}
        >
          Sign In with Google
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
