import Carousel from "better-react-carousel";
import { nanoid } from "nanoid";

interface Props {
  data: string[];
}

const FinalCarousel = ({ data }: Props): JSX.Element => {
  const carouselElements = data.map((item) => (
    <Carousel.Item key={nanoid()}>
      <picture className="relative">
        <img
          src={item}
          alt={item}
          className="h-96 w-full object-cover"
        />
        <span className="absolute bottom-4 right-5 text-4xl font-itim text-center font-medium text-white">
          What&apos;s right for your child.
        </span>
      </picture>
    </Carousel.Item>
  ));

  return <Carousel loop>{carouselElements}</Carousel>;
};

export default FinalCarousel;
