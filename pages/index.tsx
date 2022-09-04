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
    {
      symbol: <BiBookBookmark />,
      color: "yellow",
      title: "Services",
      content:
        "We offer 4 unique subjects for you and your child to choose from.",
    },
    {
      symbol: <BiBookBookmark />,
      color: "yellow",
      title: "Services",
      content:
        "We offer 4 unique subjects for you and your child to choose from.",
    },
    {
      symbol: <BiBookBookmark />,
      color: "yellow",
      title: "Services",
      content:
        "We offer 4 unique subjects for you and your child to choose from.",
    },
    {
      symbol: <BiBookBookmark />,
      color: "yellow",
      title: "Services",
      content:
        "We offer 4 unique subjects for you and your child to choose from.",
    },
  ];

  // ELEMENTS: Elements are generated from data here: vvv
  const cardElements = (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center p-3 justify-items-center gap-4">
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

  // CONTENT: Actually visible JSX goes here: vvv
  return (
    <main className="flex flex-col justify-center">
      <div className="">
        <Carousel loop height={"150px"}>
          {[
            "/chalk.JPG",
            "book-stack.JPG",
            "children.JPG",
            "pencil-circle.JPG",
          ].map((item: string) => (
            <Carousel.Item key={nanoid()}>
              <picture className="relative">
                <source srcSet={item} />
                <img
                  src={item}
                  alt={item}
                  className="h-96 w-full object-cover"
                />
                <h1 className="absolute bottom-4 right-5 text-4xl font-itim font-medium text-white">
                  What&apos;s right for your child.
                </h1>
              </picture>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <h1 className="m-4 text-center text-5xl font-itim">
        Prepare for your future!
      </h1>
      {cardElements}
    </main>
  );
};

export default Home;
