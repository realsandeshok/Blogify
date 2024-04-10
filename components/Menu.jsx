import MenuPosts from "./MenuPosts";

export default function Menu() {
  return (
    <div className=" flex-[2] mt-[60px] lg:hidden">
      <h2 className="subtitle text-gray-500 font-normal text-[13px]">
        What's New ?
      </h2>
      <h1 className="title font-bold text-[28px] text-gray-800">Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className="subtitle text-gray-500 font-normal text-[13px]">
        Chosen By Editor
      </h2>
      <h1 className="title font-bold text-[28px] text-gray-800">
        Editor's Choice
      </h1>
      <MenuPosts withImage={true} />
    </div>
  );
}
