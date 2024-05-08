"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const { data, status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center text-3xl text-bold h-full w-full">
        LOADING.......
      </div>
    );
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="bg-[var(--softBg)] py-[80px] px-[120px] flex flex-col gap-4 rounded-lg md:py-[100px] md:px-[120px] sm:py-[50px] sm:px-[70px] ">
        <div className="maintitle text-xl font-bold flex justify-center items-center text-center text-[var(--textColor)] mb-5 md:text-lg">
          Unlock a world of possibilities with Blogify !!
        </div>
        <div
          className="p-3 rounded border-none text-white font-semibold gap-3 cursor-pointer flex items-center justify-center bg-blue-500 sm:text-[12px] sm:font-medium"
          onClick={() => signIn("google")}
        >
          <img src="google.png" alt="" height={30} width={30} />
          Sign In with Google
        </div>
        <span className="text-sm flex justify-center items-center text-[var(--softTextColor)]">
          ——— OR ———
        </span>
        <div
          className="p-3 rounded border-none text-white font-semibold gap-3 cursor-pointer flex items-center justify-center bg-green-700 sm:text-[12px] sm:font-medium"
          onClick={() => signIn("github")}
        >
          <img src="github.png" alt="" height={30} width={30} />
          Sign In with GitHub
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
