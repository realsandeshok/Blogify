import React from "react";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";

  return (
    <div className="mt-12">
      <h1 className="title mb-7 font-bold text-[30px]">Comments</h1>
      {status === "authenticated" ? (
        <div className="write flex items-center justify-between gap-6">
          <textarea
            placeholder="write a comment"
            className="comment w-full p-2 bg-slate-300 rounded-sm"
          />
          <button className="button p-2 bg-black text-white font-bold border-none rounded-md cursor-pointer">
            Send
          </button>
        </div>
      ) : (
        <Link href="/">Log in to write a comment</Link>
      )}
      <div className="comments mt-8">
        <div className="comment mb-8">
          <div className="user flex items-center gap-4 mb-4">
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className="rounded-[50%] object-cover"
            />
            <div className="userInfo flex flex-col gap-1 text-[var(--softTextCOlor)]">
              <span className="username font-medium">Sandesh</span>
              <span className="date text-[10px]">02-11-03</span>
            </div>
          </div>
          <p className="desc text-[15px] font-normal">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            eius in sapiente distinctio quasi suscipit beatae reprehenderit
            architecto delectus sunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
