import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to Load");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();

  return (
    <div className="">
      <h1 className="mt-12 mb-6 mx-0 font-bold 2xl:text-[54px] xl:text-[38px] lg:text-[24px] md:text-[20px] sm:text-[20px]">
        Popular Categories
      </h1>
      <div className="categories flex flex-wrap justify-between gap-5">
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${"flex items-center gap-3 w-[12%] h-16 justify-center rounded-xl xl:w-[20%] lg:w-[25%] md:w-[45%] sm:w-[100%] capitalize"} ${"bg-[#1f394731]"}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={22}
                height={22}
                className="rounded-[45%]"
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
