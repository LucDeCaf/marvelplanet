import Link from "next/link";

interface MenuItemProps {
  children: JSX.Element | string;
  href: string;
}

const MenuItem = ({ children, href }: MenuItemProps): JSX.Element => {
  return (
    <Link href={href}>
      <a>
        <li className="px-10 py-2 bg-slate-200 hover:bg-slate-300 active:bg-slate-400 active:text-white text-xl font-medium select-none w-screen transition-colors">
          {children}
        </li>
      </a>
    </Link>
  );
};

export default MenuItem;
