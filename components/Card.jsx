import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Card({ key, item }) {
  return (
    <>
      <div className="my-[40px] flex items-center gap-12" key={key}>
        {item.img && (
          <div className="imageContainer flex-1 h-80 relative object-cover lg:hidden">
            <Image src={item.img} alt="" fill />
          </div>
        )}
        <div className="textContainer flex-1 flex flex-col gap-5">
          <div className="details">
            <span className="date text-gray-800">
              {item.createdAt.substring(0, 10)} -{" "}
            </span>
            <span className="category text-red-600 font-medium capitalize">
              {item.catSlug}
            </span>
          </div>
          <Link href={`/posts/${item.slug}`}>
            <h1 className="title font-semibold">{item.title}</h1>
          </Link>
          <div
            className="desc text-[18px] text-[var(--softTextColor)]"
            dangerouslySetInnerHTML={{ __html: item.desc.substring(0, 60) }}
          />

          <Link
            href={`/posts/${item.slug}`}
            className="border-b-2 border-gray-500 w-max"
          >
            Read More
          </Link>
        </div>
      </div>
    </>
  );
}
