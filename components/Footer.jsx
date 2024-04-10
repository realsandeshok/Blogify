import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex mt-[50px] py-5 px-0 justify-between text-[var(--softTextColor)] items-center md:flex-col md:gap-10">
      <div className="info flex-1 flex flex-col gap-3">
        <h1 className="logoText font-extrabold ">BLOGIFY</h1>
        <p className="desc font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
          expedita? Illo quibusdam reiciendis fuga, vitae omnis necessitatibus
          consequatur maxime ea?
        </p>
      </div>
      <div className="links flex-1 flex justify-end gap-20 lg:gap-10 md:w-full md:justify-between sm:text-[10px]">
        <div className="list flex flex-col gap-3 font-light ">
          <span className="listTitle font-extrabold">Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
        </div>
        <div className="list flex flex-col gap-3 font-light ">
          <span className="listTitle font-extrabold">Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Travel</Link>
          <Link href="/">Coding</Link>
        </div>
      </div>
    </div>
  );
}
