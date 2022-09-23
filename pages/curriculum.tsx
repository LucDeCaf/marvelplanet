import { NextPage } from "next";
import BackButton from "../components/BackButton";

const Page: NextPage = () => {
  return (
    <main>
      <div className="fixed">
        <BackButton href="/">Back</BackButton>
      </div>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-center font-itim text-6xl mb-4">Sorry!</h1>
        <h2 className="text-center font-karla text-4xl">
          This page is still under construction. Check back in a few days!
        </h2>
      </div>
    </main>
  );
};

export default Page;
