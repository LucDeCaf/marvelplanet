import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import Image from "next/image";
import MenuItem from "../components/MenuItem";
import Link from "next/link";
import { useAuth } from "lib/AuthContext";

const Navbar = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState<boolean | null>(null);
  const { user, loading } = useAuth();

  return (
    <nav className="sticky top-0 h-48 mb-2 text-black shadow-md z-50 grid">
      <div className="bg-slate-100 z-50 grid grid-cols-3 items-center py-3 px-6">
        <span className="relative w-32 h-32 justify-self-start">
          <Link href="/">
            <a>
              <Image
                src="/logo.webp"
                alt="Logo"
                layout="responsive"
                width={156}
                height={156}
              />
            </a>
          </Link>
        </span>
        <div className="justify-self-center font-itim text-center tracking-tight">
          <h1 className="text-5xl lg:w-auto w-40 sm:block hidden">
            Marvel Planet
          </h1>
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
      <div
        className={
          showMenu === null
            ? "z-40 absolute -top-48"
            : showMenu
            ? "z-40 absolute top-48 animate-navDropdown"
            : "z-40 absolute -top-48 animate-navDropup"
        }
      >
        <ul onClick={() => setShowMenu(false)}>
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="/contact">Contact</MenuItem>
          <MenuItem href="/about">About Us</MenuItem>
          <MenuItem href="/newsletter">Newsletter</MenuItem>
          <MenuItem href="/services">Services</MenuItem>
          <MenuItem href="/curriculum">Curriculum</MenuItem>
          {loading ? (
            <MenuItem href="/">Loading...</MenuItem>
          ) : user ? (
            <MenuItem href="/logout">Logout (Admin)</MenuItem>
          ) : (
            <MenuItem href="/login">Login (Admin)</MenuItem>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
