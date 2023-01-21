import { collection, getDocs } from "firebase/firestore";
import { GetStaticProps } from "next";
import Link from "next/link";
import Title from "components/Title";
import { db } from "utils/firebase";
import { nanoid } from "nanoid";
import { useAuth } from "lib/AuthContext";
import LoadingPage from "components/LoadingPage";

interface PageProps {
  newsletters: {
    id: string;
    created: any;
    downloadUrl: any;
    term: any;
  }[];
}

const Heading = ({ children }: { children: string }) => {
  return <h1 className="mb-2 text-5xl leading-none font-itim">{children}</h1>;
};

const ListItem = ({ children, href }: { children: string; href: string }) => {
  return (
    <a
      className="text-2xl font-karla font-semibold hover:underline active:text-blue-900"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <li>{children}</li>
    </a>
  );
};

const Page = ({
  newsletters,
}: {
  newsletters: {
    id: string;
    created: any;
    downloadUrl: any;
    term: any;
  }[];
}) => {
  console.log(newsletters);
  const { user, loading } = useAuth();

  const ListElements = newsletters.map((newsletter) => (
    <ListItem
      key={nanoid()}
      href={newsletter.downloadUrl}
    >{`${newsletter.id} - Term ${newsletter.term}`}</ListItem>
  ));

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <main>
      <Title>Newsletter</Title>
      <div className="flex justify-center">
        <h2 className="w-[64rem] mt-2 text-gray-800 text-center text-3xl font-karla">
          Our newsletter is released once every term and shows off a few
          birthdays and achievements, as well as important days to look out for.
        </h2>
      </div>
      <picture>
        <img src="/waves/slate-200.svg" alt="" />
      </picture>
      <div className="bg-slate-200 p-4 px-12">
        <div>
          <Heading>Latest:</Heading>
          <ul className="list-inside list-roman">
            <ListItem
              href={newsletters[0].downloadUrl}
            >{`${newsletters[0].id} - Term ${newsletters[0].term}`}</ListItem>
          </ul>
          <hr className="border-2 border-black rounded-md my-3" />
          <Heading>Recent:</Heading>
          <ul className="list-inside list-roman">{ListElements}</ul>
        </div>
        {user && (
          <div className="mt-2">
            <hr className="border-black my-3 border-2 border-dashed rounded-md w-1/3" />
            <div>
              <label
                className="m-4 text-xl font-karla font-bold"
                htmlFor="test"
              >
                Upload an image:
              </label>
              <button
                className="bg-blue-600 text-white font-bold px-3 py-1 rounded-md hover:bg-blue-500 active:bg-blue-700 "
                id="test"
              >
                <Link href="/newsletter/upload">
                  <a>Upload</a>
                </Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const newslettersRef = collection(db, "newsletters");
  const newslettersDocs = await getDocs(newslettersRef);
  const newsletters = newslettersDocs.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      created: data.created,
      downloadUrl: data.downloadUrl,
      term: data.term,
    };
  });
  const sortedNewsletters = newsletters
    .sort((a, b) => b.created - a.created)
    .slice(0, 9);

  return {
    props: {
      newsletters: sortedNewsletters,
    },
    revalidate: 60,
  };
};

export default Page;
