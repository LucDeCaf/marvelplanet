import { NextPage } from "next";
import FinalCarousel from "../../components/FinalCarousel";
import BackButton from "../../components/BackButton";
import Title from "../../components/Title";

const Page: NextPage = () => {
  return (
    <main>
      <FinalCarousel data={["/pencil-circle.JPG"]} noText={true} />
      <BackButton>Back</BackButton>
      <Title>Our Values</Title>
      <picture>
        <img src="/waves/slate-200.svg" alt="" />
      </picture>
      <div className="bg-slate-200 m-0 pb-5 px-10">
        <div className="flex space-x-3 justify-start">
          <div>Test 1</div>
          <div>Test 2</div>
        </div>
        <div className="flex space-x-3 justify-end">
          <div>Test 1</div>
          <div>Test 2</div>
        </div>
        <div className="flex space-x-3 justify-start">
          <div>Test 1</div>
          <div>Test 2</div>
        </div>
      </div>
    </main>
  );
};

export default Page;
