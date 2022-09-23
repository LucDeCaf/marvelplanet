import Image from "next/image";

interface Props {
  name: string;
  desc: string;
  src: string;
}

const Profile = ({ name, desc, src }: Props): JSX.Element => {
  return (
    <div className="border-black border-2 rounded-t-lg">
      <div className="w-full h-full">
        <Image
          src={src}
          alt={`Photo of ${name}`}
          layout="responsive"
          width={1}
          height={1}
          className="rounded-t-sm"
        />
      </div>
      <div className="p-5 space-y-1 font-karla">
        <h3 className="text-xl font-bold">{name}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Profile;
