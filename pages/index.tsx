import type { NextPage } from "next";
import { BiBookBookmark } from "react-icons/bi";
import Card, { CardType } from "../components/Card";
import { nanoid } from "nanoid";
import Carousel from "better-react-carousel";

const Home: NextPage = () => {
  // DATA: Define elements here: vvv
  const cardData: CardType[] = [
    {
      symbol: <BiBookBookmark />,
      color: "yellow",
      title: "Services",
      content:
        "We offer 4 unique subjects for you and your child to choose from.",
    },
  ];
  const carouselData = [
    "/chalk.JPG",
    "book-stack.JPG",
    "children.JPG",
    "pencil-circle.JPG",
  ];

  // ELEMENTS: Elements are generated from data here: vvv
  const cardElements = (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center p-3 justify-items-center gap-4">
      {cardData.map((item: CardType) => (
        <Card
          key={nanoid()}
          symbol={item.symbol}
          color={item.color}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
  const carouselElements = carouselData.map((item: string) => (
    <Carousel.Item key={nanoid()}>
      <picture className="relative">
        <source srcSet={item} />
        <img
          src={item}
          alt={item}
          className="h-96 w-full object-cover"
          loading="lazy"
        />
        <h1 className="absolute bottom-4 right-5 text-4xl font-itim font-medium text-white">
          What&apos;s right for your child.
        </h1>
      </picture>
    </Carousel.Item>
  ));

  // CONTENT: Actually visible JSX goes here: vvv
  return (
    <main className="flex flex-col justify-center">
      <div className="">
        <Carousel loop>{carouselElements}</Carousel>
      </div>
      <h1 className="m-4 mb-2 text-center text-5xl font-itim">
        Prepare for your future!
      </h1>
      <p className="text-gray-800 text-center">
        Out of a love for child development and a desperate need for an
        alternative learning space,
        <br />
        Roxanne Edson established Marvel Planet Tutor Center in 2017.
      </p>
      <picture>
        <img src="/waves/slate-100.svg" alt="" />
      </picture>
      <div className="pb-10 justify-between justify-items-center text-center font-itim font-light mt-0 bg-slate-100 px-10 text-neutral-800">
        <p className="text-4xl text-ellipsis h-50">
          Marvel Planet accommodates children with developmental delays,
          children who have experienced trauma (such as bullying), learners with
          mood or behavioural challenges as well as those who simply don&apos;t
          fit into mainstream schooling - perhaps because they get bored easily
          or are advanced in one particular subject but need more time in
          another.
        </p>
        {cardElements}
      </div>
    </main>
  );
};

export default Home;
