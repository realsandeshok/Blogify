import Menu from "@/components/Menu";
import Comments from "@/components/Comments";
import React from "react";
import Image from "next/image";

const SinglePage = () => {
  return (
    <div className="">
      <div className="infoContainer flex items-center gap-10">
        <div className="textContainer flex-1">
          <h1 className="title text-3xl mb-12 font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            neque voluptas velit repellat veniam animi doloremque minima
            voluptate iste ipsa!
          </h1>
          <div className="user flex items-center gap-4">
            <div className="userImage w-[50px] h-[50px] relative">
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className="avatar rounded-[50%] object-cover"
              />
            </div>
            <div className="userTextContainer flex flex-col gap-[5px] text-[var(--softTextColor)]">
              <span className="username font-semibold text-xl">Sandesh M</span>
              <span className="date">02-11-03</span>
            </div>
          </div>
        </div>
        <div className="imageContainer flex-1 h-96 relative md:hidden">
          <Image src="/p1.jpeg" alt="" fill className="object-cover" />
        </div>
      </div>
      <div className="content flex gap-10">
        <div className="post flex-[5] mt-14">
          <div className="description">
            <p className="mb-3 font-light text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              consequatur consequuntur asperiores recusandae sunt corporis
              repudiandae officia cum maiores eligendi!
            </p>
            <p className="mb-3 font-light text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore, eos.
            </p>
          </div>
          <div className="comment">
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
