import Image from "next/image";

export default function Featured() {
  return (
    <div className="mt-8 ">
      <h1 className="title text-8xl xl:text-[64px] lg:text-[58px] md:text-[46px] sm:text-[32]">
        <b>Sandesh Post</b> Happy Birthday
      </h1>
      <div className="post mt-14 flex items-center gap-12">
        <div className="image flex-1 h-[500px] relative lg:hidden">
          <Image src="/p1.jpeg" alt="" fill className="object-cover" />
        </div>
        <div className="text flex-1 flex flex-col gap-5">
          <h1 className="postTitle text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            dolor?
          </h1>
          <p className="postDescription text-2xl text-[var(--softTextColor)]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            officiis cumque reprehenderit. Ducimus sed eaque delectus
            blanditiis. Asperiores iusto adipisci, ut voluptatum totam
            accusantium perferendis voluptates facilis labore fugit saepe.
          </p>
          <button className="py-4 px-5 border-none rounded-md w-max bg-black text-white ">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
