"use client";
import links from "../data/links";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center gap-4 bg-[#3c8bdb] text-lg px-5 py-3">
      {links.map((item, id) => (
        <div key={id} className="text-white font-bold cursor-pointer">
          <a href={item.path} className="text-white font-bold cursor-pointer">
            <i>{item.name}</i>
          </a>
        </div>
      ))}
      <div
        className="relative w-6 h-6 cursor-pointer"
        onClick={() => router.push("/cart")}
      >
        <Image
          src="/assets/shopping-cart.svg"
          alt="Cart"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Navbar;
