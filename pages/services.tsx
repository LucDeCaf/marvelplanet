import type { NextPage } from "next";
import FinalCarousel from "../components/FinalCarousel";
import Card from "../components/Card";
import { BsFillCaretDownFill } from "react-icons/bs";
import { FaMoneyBillWave } from "react-icons/fa";

const Page: NextPage = () => {
  return (
    <main>
      <FinalCarousel data={["/children.JPG"]} />
      <h1 id="title" className="m-4 mb-0 text-center text-5xl font-itim">
        Services &amp; Fees
      </h1>
      <div className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center m-4">
        <Card
          color="yellow"
          symbol={<BsFillCaretDownFill />}
          title="Admin Support"
          url="#admin-title"
        />
        <Card
          color="blue"
          symbol={<BsFillCaretDownFill />}
          title="Onsite Learning"
          url="#onsite-title"
        />
        <Card
          color="green"
          symbol={<BsFillCaretDownFill />}
          title="Online Learning"
          url="#online-title"
        />
        <Card
          color="purple"
          symbol={<BsFillCaretDownFill />}
          title="Blended Learning"
          url="#blended-title"
        />
      </div>
      <picture id="admin-title">
        <img src="/waves/slate-200.svg" alt="" />
      </picture>
      <div className="p-4 bg-slate-200">
        <div>
          <h1 className="text-4xl font-bold" id="onsite-title">
            Admin Support Only
          </h1>
          <ul className="list-disc ml-6">
            <li>Scheduling of work to be completed</li>
            <li>Marking of work that has been submitted</li>
            <li>
              If required, capturing of marks onto curriculum provider site
            </li>
          </ul>
          <div className="flex items-center space-x-2 ml-1">
            <div className="text-green-700">
              <FaMoneyBillWave />
            </div>
            <span>Costs are dependant on services provided.</span>
          </div>
          <br />
        </div>
        <div>
          <h1 className="text-4xl font-bold" id="online-title">
            Onsite Learning Only
          </h1>
          <ul className="list-disc ml-6">
            <li>Scheduling of work to be completed</li>
            <li>Marking of work that has been submitted</li>
            <li>
              If required, capturing of marks onto curriculum provider site
            </li>
            <li>
              Scheduled on-site lessons (enquire about scheduled days &amp;
              times)
            </li>
          </ul>
          <div className="flex items-center space-x-2 ml-1">
            <div className="text-green-700">
              <FaMoneyBillWave />
            </div>
            <span>R1750.00/month</span>
          </div>
          <br />
        </div>
        <div>
          <h1 className="text-4xl font-bold" id="blended-title">
            Online Learning Only
          </h1>
          <ul className="list-disc ml-6">
            <li>Scheduling of work to be completed</li>
            <li>Marking of work that has been submitted</li>
            <li>
              If required, capturing of marks onto curriculum provider site
            </li>
            <li>
              Scheduled online lessons (enquire about scheduled days &amp;
              times)
            </li>
          </ul>
          <div className="flex items-center space-x-2 ml-1">
            <div className="text-green-700">
              <FaMoneyBillWave />
            </div>
            <span>R900.00/month</span>
          </div>
          <br />
        </div>
        <div>
          <h1 className="text-4xl font-bold">
            Blended Learning (Online &amp; Onsite)
          </h1>
          <ul className="list-disc ml-6">
            <li>Scheduling of work to be completed</li>
            <li>Marking of work that has been submitted</li>
            <li>
              If required, capturing of marks onto curriculum provider site
            </li>
            <li>
              Scheduled online &amp; on-site lessons (enquire about scheduled
              days &amp; times)
            </li>
          </ul>
          <div className="flex items-center space-x-2 ml-1">
            <div className="text-green-700">
              <FaMoneyBillWave />
            </div>
            <span>Costs are dependant on services provided.</span>
          </div>
          <br />
        </div>
      </div>
    </main>
  );
};

export default Page;
