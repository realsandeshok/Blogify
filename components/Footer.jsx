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

const Footer = async () => {
  const data = await getData();
  return (
    <div className="flex mt-[50px] py-5 px-0 justify-between text-[var(--softTextColor)] items-center md:flex-col md:gap-10 ">
      <div className="info flex-1 flex flex-col gap-5 md:w-[85%] md:flex md:justify-start">
        <h1 className="flex logoText font-extrabold text-xl items-start">
          BLOGIFY
        </h1>
        <p className="desc font-light ">
          © [2024] Blogify. All rights reserved.
        </p>
      </div>
      <div className="links flex-1 flex justify-end gap-20 lg:gap-10 md:w-[85%] md:justify-between sm:text-[10px]">
        <div className="list flex flex-col gap-3 font-light ">
          <span className="listTitle font-extrabold">Links</span>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
        <div className="list flex flex-col gap-3 font-light ">
          <span className="listTitle font-extrabold">Tags</span>
          {data?.slice(0, 2).map((item) => (
            <Link href={`/blog?cat=${item.slug}`} className="capitalize" key="">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
