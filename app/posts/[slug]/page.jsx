import Menu from "@/components/Menu";
import Comments from "@/components/Comments";
import React from "react";
import Image from "next/image";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to Load");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);

  // const desc = { __html: data?.desc };

  return (
    <div className="">
      <div className="infoContainer flex items-center gap-10">
        <div className="textContainer flex-1">
          <h1 className="title text-3xl mb-12 font-semibold">{data?.title}</h1>
          <div className="user flex items-center gap-4">
            {data?.user?.image && (
              <div className="userImage w-[50px] h-[50px] relative">
                <Image
                  src={data.user.image}
                  alt=""
                  fill
                  className="avatar rounded-[50%] object-cover"
                />
              </div>
            )}
            <div className="userTextContainer flex flex-col gap-[5px] text-[var(--softTextColor)]">
              <span className="username font-semibold text-xl">
                {data?.user.name}
              </span>
              <span className="date">{data.createdAt.substring(0, 10)} </span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className="imageContainer flex-1 h-96 relative md:hidden">
            <Image src={data.img} alt="" fill className="object-cover" />
          </div>
        )}
      </div>
      <div className="content flex gap-10">
        <div className="post flex-[5] mt-14">
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />

          <div className="comment">
            <Comments postSlug={slug} />
          </div>
        </div>
        {/* <Menu /> */}
      </div>
    </div>
  );
};

export default SinglePage;
