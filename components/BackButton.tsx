import Link from "next/link";
import { IoCaretBack } from "react-icons/io5";

interface BackButtonProps {
  children: string;
  href: string;
}

const BackButton = ({ children, href }: BackButtonProps): JSX.Element => {
  return (
    <Link href={href}>
      <a className="flex items-center w-fit">
        <span className="text-5xl m-4 mr-0">
          <IoCaretBack />
        </span>
        <span className="text-3xl font-karla font-bold">{children}</span>
      </a>
    </Link>
  );
};

export default BackButton;
