"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };

  return (
    <div className="mt-12">
      <h1 className="title mb-7 font-bold text-[30px]">Comments</h1>
      {status === "authenticated" ? (
        <div className="write flex items-center justify-between gap-6">
          <textarea
            placeholder="write a comment"
            className="comment w-full p-2 bg-slate-300 rounded-sm"
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            className="button p-2 bg-black text-white font-bold border-none rounded-md cursor-pointer"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      ) : (
        <Link href="/">Log in to write a comment</Link>
      )}
      <div className="comments mt-8">
        {isLoading
          ? "Loading"
          : data?.map((item) => (
              <div className="comment mb-8" key={item._id}>
                <div className="user flex items-center gap-4 mb-4">
                  {item?.user?.image && (
                    <Image
                      src={item.user.image}
                      alt=""
                      width={50}
                      height={50}
                      className="rounded-[50%] object-cover"
                    />
                  )}
                  <div className="userInfo flex flex-col gap-1 text-[var(--softTextCOlor)]">
                    <span className="username font-medium">
                      {item.user.name}
                    </span>
                    <span className="date text-[10px]">{item.createdAt}</span>
                  </div>
                </div>
                <p className="desc text-[15px] font-normal">{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
