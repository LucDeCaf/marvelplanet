import { NextPage } from "next";
import Card from "../../components/Card";
import FinalCarousel from "../../components/FinalCarousel";
import { FiBook } from "react-icons/fi";
import { BsFillPersonFill, BsFillStarFill } from "react-icons/bs";

const Page: NextPage = () => {
  return (
    <main>
      <FinalCarousel data={["/pencil-circle.JPG"]} noText={true} />
      <h1 className="m-4 mb-2 text-center text-5xl font-itim">
        About our family
      </h1>
      <h4 className="text-3xl text-center font-karla">
        Learn about the wonderful work-force behind our tutor centre here at
        Marvel Planet.
      </h4>
      <picture>
        <img src="/waves/slate-200.svg" alt="" />
      </picture>
      <div className="bg-slate-200 m-0">
        <div className="mb-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center p-3 justify-items-stretch gap-4">
          <Card
            title="History"
            symbol={<FiBook />}
            color="blue"
            url="/about/history"
          />
          <Card
            title="Staff"
            symbol={<BsFillPersonFill />}
            color="blue"
            url="/about/staff"
          />
          <Card
            title="Values"
            symbol={<BsFillStarFill />}
            color="blue"
            url="/about/values"
          />
        </div>
      </div>
    </main>
  );
};

export default Page;
