import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import Image from "next/image";
import MenuItem from "../components/MenuItem";

const Navbar = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="sticky top-0 h-48 mb-2 text-black shadow-md z-50 grid">
      <div className="bg-slate-100 z-50 grid grid-cols-3 items-center py-3 px-6">
        <span className="relative w-32 h-32 justify-self-start">
          <Image
            src="/logo.webp"
            alt="Logo"
            layout="responsive"
            width={156}
            height={156}
          />
        </span>
        <div className="justify-self-center font-itim text-center tracking-tight">
          <h1 className="text-5xl lg:w-auto w-40 sm:block hidden">
            Marvel Planet
          </h1>
          <h2 className="lg:block hidden text-3xl">Tutor and Support Centre</h2>
        </div>
        {/* Menu Button */}
        <div className="justify-self-end">
          <span
            className="text-5xl cursor-pointer"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <HiMenu />
          </span>
        </div>
      </div>
      {/* Menu */}
      <div
        className={
          showMenu
            ? "z-40 absolute top-48 animate-navDropdown"
            : "z-40 absolute -top-48 animate-navDropup"
        }
      >
        <ul onClick={() => setShowMenu(false)}>
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="/contact">Contact</MenuItem>
          <MenuItem href="/about">About Us</MenuItem>
          <MenuItem href="/services">Services</MenuItem>
          <MenuItem href="/curriculum">Curriculum</MenuItem>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
