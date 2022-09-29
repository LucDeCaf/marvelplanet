import Image from "next/image";

export interface ProfileType {
  name: string;
  desc: string;
  src: string;
} 

const Profile = ({ name, desc, src }: ProfileType): JSX.Element => {
  return (
    <div className="border-black border-2 rounded-lg bg-white">
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
      <div className="p-5 space-y-1">
        <h3 className="text-xl font-itim">{name}</h3>
        <p className="font-karla">{desc}</p>
      </div>
    </div>
  );
};

export default Profile;
