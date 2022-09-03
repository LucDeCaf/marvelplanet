import type { NextPage } from "next";
import { BiBookBookmark } from "react-icons/bi";
import Card, { CardType } from "../components/Card";
import { nanoid } from "nanoid";
import Carousel from "better-react-carousel";
import Image from "next/image";

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
    <div className="grid grid-cols-4 p-3 justify-items-center gap-y-4">
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
      <Carousel loop height={"200px"}>
        {["/chalk.JPG", "book-stack.JPG", "children.JPG", "letters.JPG"].map((item: string) => (
          <Carousel.Item key={nanoid()}>
            <picture>
              <source srcSet={item} />
              <img src={item} alt={item} />
            </picture>
          </Carousel.Item>
        ))}
      </Carousel>
      <h1 className="m-4 text-center text-5xl font-itim">
        Prepare for your future!
      </h1>
      {cardElements}
    </main>
  );
};

export default Home;
