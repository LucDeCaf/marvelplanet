import type { NextPage } from "next";
import FinalCarousel from "../components/FinalCarousel";
import { BsWhatsapp, BsTelephone } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import Title from "../components/Title";

const Page: NextPage = () => {
  return (
    <main>
      <FinalCarousel data={["/chalk.JPG"]} />
      <Title>Contact Us</Title>
      <picture>
        <img src="/waves/slate-200.svg" alt="" />
        <div className="w-screen m-0 p-4 bg-slate-200">
          <ul className="text-3xl mb-2 ml-4 space-y-3">
            <li className="flex items-center">
              <BsWhatsapp className="mr-3" />
              <a
                href="https://wa.me/+27662134916"
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 hover:underline"
              >
                +27 66 213 4916
              </a>
            </li>
            <li className="flex items-center">
              <BsTelephone className="mr-3" />
              <a
                href="tel:+27662134916"
                className="text-blue-700 hover:underline"
              >
                +27 66 213 4916
              </a>
            </li>
            <li className="flex items-center">
              <HiMail className="mr-3" />
              <a
                href="mailto:info@marvelplanet.co.za"
                className="text-blue-700 hover:underline"
              >
                info
                <wbr />
                @
                <wbr />
                marvel
                <wbr />
                planet
                <wbr />
                .co
                <wbr />
                .za
              </a>
            </li>
          </ul>
          <br />
          <div className="flex space-x-10">
            <div>
              <h1 className="text-2xl">Find us at:</h1>
              <h2 className="text-2xl ml-2 text-neutral-700">
                15 Milnerton Drive
                <br />
                Milnerton Ridge
                <br />
                Cape Town
                <br />
                7441
                <br />
                South Africa
              </h2>
            </div>
            <div>
              <h1 className="text-2xl">Or:</h1>
              <h2 className="text-2xl ml-2 text-neutral-700">
                Platinum Junction, Unit A5
                <br />
                School Street
                <br />
                Phoenix
                <br />
                Cape Town
                <br />
                7441
                <br />
                South Africa
              </h2>
            </div>
          </div>
        </div>
      </picture>
    </main>
  );
};

export default Page;
