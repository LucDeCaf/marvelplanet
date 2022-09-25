export interface CardType {
  // Supported colours go here - can be edited fairly easily
  color: "green" | "orange" | "yellow" | "blue" | "pink" | "purple" | "red";
  title: string;
  content?: string;
  symbol?: JSX.Element;
  url?: string;
}

const Card = ({
  color,
  symbol,
  title,
  content,
  url,
}: CardType): JSX.Element => {
  let background: string;
  let border: string;

  // A switch is used because oherwise Tailwind/PostCSS doesn't pick up classes
  switch (color) {
    case "green":
      background = "bg-green-300 text-green-900";
      border = "border-green-400";
      break;

    case "pink":
      background = "bg-pink-300 border-pink-400 text-pink-900";
      border = "border-pink-400";
      break;

    case "blue":
      background = "bg-blue-300 border-blue-400 text-blue-900";
      border = "border-blue-400";
      break;

    case "orange":
      background = "bg-orange-300 border-orange-400 text-orange-900";
      border = "border-orange-400";
      break;

    case "purple":
      background = "bg-purple-300 border-purple-400 text-purple-900";
      border = "border-purple-400";
      break;

    case "yellow":
      background = "bg-yellow-300 border-yellow-400 text-yellow-900";
      border = "border-yellow-400";
      break;

    case "red":
      background = "bg-red-300 border-red-400 text-red-900";
      border = "border-red-400";
      break;

    default:
      background = "bg-white border-black";
      border = "border-white";
  }

  return (
    <a href={url}>
      <div
        className={
          "w-full h-full p-8 inline-block border-2 rounded-md font-poppins " +
          background +
          " " +
          border
        }
      >
        <span className="text-5xl">{symbol}</span>
        {content ? (
          <>
            <h1 className="text-2xl font-bold font-itim tracking-tighter mt-4">
              {title}
            </h1>
            <p className="text-xl font-karla">{content}</p>
          </>
        ) : (
          <h1 className="text-5xl font-bold font-itim tracking-tighter mt-4">
            {title}
          </h1>
        )}
      </div>
    </a>
  );
};

export default Card;
