import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const MenuItem = ({
  children,
  href,
}: {
  children: JSX.Element | string;
  href: string;
}): JSX.Element => {
  return (
    <Link href={href}>
      <a>
        <li className="px-10 py-2 hover:bg-slate-300 active:bg-slate-400 w-screen">
          <li>{children}</li>
        </li>
      </a>
    </Link>
  );
};

const Navbar = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="sticky top-0 h-auto mb-2 bg-slate-100 text-black shadow-md z-50">
      <div className="grid grid-cols-3 items-center py-3 px-6">
        <span className="relative w-32 h-32 justify-self-start">
          <Image
            src="/logo.webp"
            alt="Logo"
            layout="fill"
          />
        </span>
        <div className="justify-self-center font-itim text-center tracking-tight">
          <h1 className="text-5xl lg:w-auto w-40 sm:block hidden">Marvel Planet</h1>
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
      {showMenu && (
        <>
          <div className="flex bg-slate-200 text-xl font-medium">
            <ul onClick={() => setShowMenu(false)}>
              <MenuItem href="/">Home</MenuItem>
              <MenuItem href="/contact">Contact</MenuItem>
              <MenuItem href="/about">About Us</MenuItem>
              <MenuItem href="/services">Services</MenuItem>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
