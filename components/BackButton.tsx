import { useRouter } from "next/router";
import { IoCaretBack } from "react-icons/io5";

interface BackButtonProps {
  children: string;
}

const BackButton = ({ children }: BackButtonProps): JSX.Element => {
  const router = useRouter();

  return (
    <div
      className="flex items-center w-fit cursor-pointer"
      onClick={() => router.back()}
    >
      <span className="text-5xl m-4 mr-0">
        <IoCaretBack />
      </span>
      <span className="text-3xl font-karla font-bold">{children}</span>
    </div>
  );
};

export default BackButton;
