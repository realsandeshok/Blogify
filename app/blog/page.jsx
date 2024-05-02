import React from "react";
import CardList from "@/components/CardList";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className="">
      <div className="flex justify-center">
        <h1 className="title w-max font-bold border-b-4 border-red-600  py-1 px-3 capitalize">
          {cat} Blogs
        </h1>
      </div>
      <div className="content flex gap-10">
        <CardList page={page} cat={cat} />
        {/* <Menu /> */}
      </div>
    </div>
  );
};

export default BlogPage;
