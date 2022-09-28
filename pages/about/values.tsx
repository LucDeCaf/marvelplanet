import { NextPage } from "next";
import FinalCarousel from "../../components/FinalCarousel";
import BackButton from "../../components/BackButton";
import Title from "../../components/Title";
import { nanoid } from "nanoid";
import { BiStar } from "react-icons/bi";

const Page: NextPage = () => {
  return (
    <main>
      <FinalCarousel data={["/pencil-circle.JPG"]} noText={true} />
      <BackButton>Back</BackButton>
      <Title>Our Values</Title>
      <picture>
        <img src="/waves/slate-200.svg" alt="" />
      </picture>
      <div className="bg-slate-200 m-0 pb-5 pt-1 px-10">
        {[
          { label: "Positivity", icon: <BiStar /> },
          { label: "Resilience", icon: <BiStar /> },
          { label: "Support", icon: <BiStar /> },
        ].map(({ label, icon }: { label: string; icon: JSX.Element }) => (
          <div
            key={nanoid()}
            className="flex items-center space-x-2  my-2"
          >
            <span className="sm:text-7xl text-6xl text-yellow-600">{icon}</span>
            <span className="sm:text-6xl text-5xl font-itim font-semibold">{label}</span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
