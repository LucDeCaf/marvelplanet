import { NextPage } from "next";
import FinalCarousel from "../../components/FinalCarousel";
import BackButton from "../../components/BackButton";

const Page: NextPage = () => {
  return (
    <main>
      <FinalCarousel data={["/pencil-circle.JPG"]} noText={true} />
      <BackButton>Back</BackButton>
      <h1 className="m-4 mb-0 text-center text-5xl font-itim">Our History</h1>
      <picture>
        <img src="/waves/slate-200.svg" alt="" />
      </picture>
      <div className="bg-slate-200 m-0 pb-5 px-10">
        <h2 className="text-4xl text-center font-itim mb-2">Where we began</h2>
        <p className="text-3xl text-center font-karla">
          Out of a love for child development and a desperate need for an
          alternative learning space, Roxanne Edson established Marvel Planet
          Tutor Center in 2017.
          <br />
          <br />
          After fostering two children with Foetal Alchohol Spectrum Disorder,
          Roxanne quickly realised that there are very few learning spaces where
          children with similar challenges can be accepted and encourgaed.
          Completing her BA in Pscyhology &amp; Criminology in 2011, Roxanne
          developed her passion further, by investing time and dedication into
          learning about different developmental and behavioural challenges and
          methods of addressing these challenges within the educational space.
          She also fully understood the pressures felt by parents who had
          children who were unique and required specific support - after all,
          she was one of those parents!
          <br />
          <br />
          In 2017, Roxanne established Marvel Planet to create a space of
          positive learning for all children &ndash; those with emotional and
          behavioural challenges where the nature of their cognitive,
          behavioural and emotional needs are not able to be accommodated within
          the &lsquo;mainstream&rsquo; educational setting. It was also
          established to create a space of education that focuses on the child
          as the individual &ndash; At Marvel Planet, we believe that children
          who are understood and provided an enabling environment will succeed.
        </p>
      </div>
    </main>
  );
};

export default Page;
