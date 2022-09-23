import type { NextPage } from "next";
import { BiBookBookmark } from "react-icons/bi";
import Card from "../components/Card";
import FinalCarousel from "../components/FinalCarousel";

const Home: NextPage = () => {
  const carouselData = [
    "/chalk.JPG",
    "/children.JPG",
    "/pencil-circle.JPG",
  ];
  
  return (
    <main className="flex flex-col justify-center">
      <div className="">
        <FinalCarousel data={carouselData} />
      </div>
      <h1 className="m-4 mb-2 text-center text-5xl font-itim">
        Prepare for your future!
      </h1>
      <p className="text-gray-800 text-center text-3xl font-karla">
        Out of a love for child development and a desperate need for an
        alternative learning space,
        <br />
        Roxanne Edson established Marvel Planet Tutor Center in 2017.
      </p>
      <picture>
        <img src="/waves/slate-200.svg" alt="" />
      </picture>
      <div className="pb-10 justify-between justify-items-center text-center font-itim font-light mt-0 bg-slate-200 px-10 text-neutral-800">
        <p className="text-4xl text-ellipsis h-50">
          Marvel Planet accommodates children with developmental delays,
          children who have experienced trauma (such as bullying), learners with
          mood or behavioural challenges as well as those who simply don&apos;t
          fit into mainstream schooling - perhaps because they get bored easily
          or are advanced in one particular subject but need more time in
          another.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center p-3 justify-items-stretch gap-4">
          <Card
            symbol={<BiBookBookmark />}
            color="yellow"
            title="Our Services"
            content="We offer 4 different options for you"
            url="/services"
          />
          <Card
            symbol={<BiBookBookmark />}
            color="pink"
            title="Curriculum"
            content="We offer different curriculums"
            url="/curriculum"
          />
          <Card
            symbol={<BiBookBookmark />}
            color="blue"
            title="Newsletter"
            content="Read our quarterly newsletter"
            url="/newsletter"
          />
          <Card
            symbol={<BiBookBookmark />}
            color="purple"
            title="Contact Us"
            content="Find out where our campuses are situated"
            url="/contact"
          />
          <Card
            symbol={<BiBookBookmark />}
            color="green"
            title="About Us"
            content="Our staff, our history and our values"
            url="/about"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
