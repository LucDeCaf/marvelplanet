import { NextPage } from "next";
import FinalCarousel from "components/FinalCarousel";
import BackButton from "components/BackButton";
import Profile, { ProfileType } from "components/Profile";
import Title from "components/Title";
import { nanoid } from "nanoid";

const Page: NextPage = () => {
  const ProfileData: ProfileType[] = [
    {
      name: "This is a very cool profile.",
      desc: "This is a very simple little description, meant to test the waters a bit.",
      src: "/chalk.JPG",
    },
    {
      name: "This is a very cool profile.",
      desc: "This is a very simple little description, meant to test the waters a bit.",
      src: "/chalk.JPG",
    },
  ];
  const ProfileElements = ProfileData.map((profile) => (
    <div key={nanoid()}>
      <Profile name={profile.name} desc={profile.desc} src={profile.src} />
    </div>
  ));

  return (
    <main>
      <FinalCarousel data={["/pencil-circle.JPG"]} noText={true} />
      <BackButton>Back</BackButton>
      <Title>Our Staff</Title>
      <h2 className="mt-2 text-gray-800 text-center text-3xl font-karla">
        Come and meet the amazing people that make our centre what it is today.
      </h2>
      <picture>
        <img src="/waves/slate-200.svg" alt="" />
      </picture>
      <div className="bg-slate-200 m-0 pb-5 px-10">
        <div className="flex justify-center items-center w-full">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {ProfileElements}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
