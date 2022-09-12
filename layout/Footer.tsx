import { BsWhatsapp, BsTelephone } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const Footer = (): JSX.Element => {
  return (
    <footer className="flex justify-between items-center bg-neutral-900 h-16 text-neutral-600 text-md p-4">
      <div>
        <p>
          &#169; 2020 Marvel Planet Tutor Centre. All rights reserved. Site by:
          LDC Studios
        </p>
      </div>
      <div className="flex space-x-3">
        <p className="text-xl">Contact Us:</p>
        <div className="flex text-2xl space-x-3">
          <a
            className="hover:text-white transition"
            href="https://wa.me/+27660843239"
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp />
          </a>
          <a className="hover:text-white transition" href="tel:+27660843239">
            <BsTelephone />
          </a>
          <a
            className="hover:text-white transition"
            href="mailto:ldecafmeyer@gmail.com"
          >
            <HiMail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
