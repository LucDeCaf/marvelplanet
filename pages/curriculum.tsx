import { NextPage } from "next";
import FinalCarousel from "components/FinalCarousel";
import Card from "components/Card";
import { BiBookBookmark } from "react-icons/bi";
import Title from "components/Title";

const Page: NextPage = () => {
  return (
    <main>
      <FinalCarousel data={["/pencils-left.JPG"]} noText={true} />
      <Title>Curriculums</Title>
      <p className="mt-2 text-gray-800 text-center text-3xl font-karla">
        We offer two different curriculums for you to choose from.
      </p>
      <picture>
        <img src="/waves/slate-200.svg" alt="" />
      </picture>
      <div className="p-4 bg-slate-200 grid gap-4 grid-cols-1 md:grid-cols-2">
        <div>
          <Card
            symbol={<BiBookBookmark />}
            color="yellow"
            title="CAPS"
            content="South Africa's standard education system"
            url="https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements(CAPS).aspx"
          />
        </div>
        <div>
          <Card
            symbol={<BiBookBookmark />}
            color="yellow"
            title="Cambridge"
            content="A reputable international education system"
            url="https://www.cambridgeinternational.org/why-choose-us/benefits-of-a-cambridge-education/"
          />
        </div>
      </div>
    </main>
  );
};

export default Page;
