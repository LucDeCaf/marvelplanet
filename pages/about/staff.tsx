import { NextPage } from "next";
import FinalCarousel from "../../components/FinalCarousel";
import BackButton from "../../components/BackButton";

const Page: NextPage = () => {
  return (
    <main>
      <FinalCarousel data={["/pencil-circle.JPG"]} noText={true} />
      <BackButton href="/about">Back</BackButton>
      <h1 className="m-4 mb-0 text-center text-5xl font-itim">Our Staff</h1>
      <picture>
        <img src="/waves/slate-200.svg" alt="" />
      </picture>
      <div className="bg-slate-200 m-0 pb-5 px-10">
        <p className="text-3xl text-center font-karla">
          staff_content_here
        </p>
      </div>
    </main>
  );
};

export default Page;
