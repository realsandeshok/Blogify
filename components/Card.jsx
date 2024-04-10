import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Card({ key, item }) {
  return (
    <div className="my-[40px] flex items-center gap-12" key={key}>
      <div className="imageContainer flex-1 h-80 relative object-cover lg:hidden">
        <Image src="/p1.jpeg" alt="" fill />
      </div>
      <div className="textContainer flex-1 flex flex-col gap-5">
        <div className="details">
          <span className="date text-gray-800">11.11.11 - </span>
          <span className="category text-red-600 font-medium">Style</span>
        </div>
        <Link href="/">
          <h1 className="title font-semibold">{item.title}</h1>
        </Link>
        <p className="desc text-[18px] text-[var(--softTextColor)]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat nam
          unde enim a rem quia ad perferendis consequuntur omnis mollitia.
        </p>
        <Link href="/" className="border-b-2 border-gray-500 w-max">
          Read More
        </Link>
      </div>
    </div>
  );
}
