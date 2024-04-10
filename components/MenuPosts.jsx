import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuPosts = ({ withImage }) => {
  return (
    <div className="items flex flex-col gap-9 mt-[35px] mb-[60px]">
      <Link href="/" className="item flex items-center gap-5">
        {withImage && (
          <div className="imageContainer flex-1 relative aspect-square">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="rounded-[50%] border-4 border-gray-200 object-cover"
            />
          </div>
        )}
        <div className="textContainer flex-[4] flex flex-col gap-1">
          <span
            className={`${"category py-[3px] px-[8px] rounded-xl text-[12px] text-white w-max"} ${"bg-orange-600"}`}
          >
            Travel
          </span>
          <h3 className="postTitle text-[13px] font-medium text-[var(--softTextColor)]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            odit ullam error laborum quam rerum eaque optio totam aliquid
            accusamus.
          </h3>
          <div className="details text-[12px] font-semibold">
            <span className="username ">Sandesh</span>
            <span className="date text-gray-500"> - 02-11-03</span>
          </div>
        </div>
      </Link>

      <Link href="/" className="item flex items-center gap-5">
        {withImage && (
          <div className="imageContainer flex-1 relative aspect-square">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="rounded-[50%] border-4 border-gray-200 object-cover"
            />
          </div>
        )}
        <div className="textContainer flex-[4] flex flex-col gap-1">
          <span
            className={`${"category py-[3px] px-[8px] rounded-xl text-[12px] text-white w-max"} ${"bg-orange-600"}`}
          >
            Travel
          </span>
          <h3 className="postTitle text-[13px] font-medium text-[var(--softTextColor)]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            odit ullam error laborum quam rerum eaque optio totam aliquid
            accusamus.
          </h3>
          <div className="details text-[12px] font-semibold">
            <span className="username ">Sandesh</span>
            <span className="date text-gray-500"> - 02-11-03</span>
          </div>
        </div>
      </Link>

      <Link href="/" className="item flex items-center gap-5">
        {withImage && (
          <div className="imageContainer flex-1 relative aspect-square">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="rounded-[50%] border-4 border-gray-200 object-cover"
            />
          </div>
        )}
        <div className="textContainer flex-[4] flex flex-col gap-1">
          <span
            className={`${"category py-[3px] px-[8px] rounded-xl text-[12px] text-white w-max"} ${"bg-orange-600"}`}
          >
            Travel
          </span>
          <h3 className="postTitle text-[13px] font-medium text-[var(--softTextColor)]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            odit ullam error laborum quam rerum eaque optio totam aliquid
            accusamus.
          </h3>
          <div className="details text-[12px] font-semibold">
            <span className="username ">Sandesh</span>
            <span className="date text-gray-500"> - 02-11-03</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
