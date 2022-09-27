import { NextPage } from "next";
import FinalCarousel from "../../components/FinalCarousel";
import BackButton from "../../components/BackButton";
import Profile from "../../components/Profile";
import Title from "../../components/Title";

const Page: NextPage = () => {
  return (
    <main>
      <FinalCarousel data={["/pencil-circle.JPG"]} noText={true} />
      <BackButton>Back</BackButton>
      <Title>Our Staff</Title>
      <picture>
        <img src="/waves/slate-200.svg" alt="" />
      </picture>
      <div className="bg-slate-200 m-0 pb-5 px-10">
        <p className="mb-4 text-3xl text-center font-karla">
          Come and meet our amazing team.
        </p>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <Profile
              name="Such a cool title here."
              desc="This is a very simple little description, meant to test the waters a bit. nnnevermind."
              src="/chalk.JPG"
            />
          </div>
          <div>
            <Profile
              name="Such a cool title here."
              desc="This is a very simple little description, meant to test the waters a bit. nnnevermind."
              src="/chalk.JPG"
            />
          </div>
          <div>
            <Profile
              name="Such a cool title here."
              desc="This is a very simple little description, meant to test the waters a bit. nnnevermind."
              src="/chalk.JPG"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
