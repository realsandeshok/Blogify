import React from "react";
import CardList from "@/components/CardList";
import Menu from "@/components/Menu";

export default function BlogPage() {
  return (
    <div className="">
      <div className="flex justify-center">
        <h1 className="title w-max font-bold border-b-4 border-red-600  py-1 px-3 ">
          Style Blogs
        </h1>
      </div>
      <div className="content flex gap-10">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
