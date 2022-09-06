import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import Image from "next/image";

const Navbar = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="sticky top-0 h-auto mb-2 bg-slate-100 shadow-md z-50">
      <div className="grid grid-cols-3 items-center py-3 px-6">
        <span className="relative w-32 h-32 justify-self-start">
          <Image src="/logo.png" alt="Logo" layout="fill" width={432} height={387} />
        </span>
        <div className="justify-self-center font-itim text-center tracking-tight">
          <h1 className="text-5xl lg:w-auto w-40">Marvel Planet</h1>
          <h2 className="lg:block hidden text-3xl">Tutor and Support Centre</h2>
        </div>
        <div className="justify-self-end">
          <span
            className="text-5xl cursor-pointer"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <HiMenu />
          </span>
        </div>
      </div>
      {showMenu && (
        <div className="px-10 flex text-xl font-medium">
          <h1>Menu</h1>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
