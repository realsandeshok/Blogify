import Image from "next/image";
import React from "react";

export default function themeToggle() {
  return (
    <div className="flex w-10 h-5 rounded-[40px] bg-black justify-between items-center relative">
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div className="circle rounded-[40px] bg-white w-[15px] h-[15px] absolute left-[1px] "></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
}
