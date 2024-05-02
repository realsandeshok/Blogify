import Image from "next/image";

export default function Featured() {
  return (
    <div className="mt-8 ">
      <h1 className="title text-7xl xl:text-[64px] lg:text-[58px] md:text-[46px] sm:text-[32]">
        <b>The Boundless Benefits of Blogging !</b>
      </h1>
      <div className="post mt-14 flex items-center gap-12">
        <div className="image flex-1 h-[500px] relative lg:hidden">
          <Image src="/p1.jpeg" alt="" fill className="object-cover" />
        </div>
        <div className="text flex-1 flex flex-col gap-5">
          <h1 className="postTitle text-4xl font-semibold">
            Why It's a Game-Changer for Personal and Professional Growth
          </h1>
          <p className="postDescription text-2xl text-[var(--softTextColor)]">
            In an era dominated by digital communication, blogging stands as a
            powerful tool for personal and professional growth. Discover how
            embracing this platform can enhance your writing skills, expand your
            network, boost your visibility, and even generate income. Explore
            the myriad benefits awaiting those who dare to share their thoughts
            online. From honing your expertise to building a community, blogging
            offers a dynamic outlet for creativity and connection. Whether
            you're a seasoned writer or just starting out, the advantages of
            maintaining a blog are plentiful and transformative.
          </p>
          {/* <button className="py-4 px-5 border-none rounded-md w-max bg-black text-white ">
            Read More
          </button> */}
        </div>
      </div>
    </div>
  );
}
