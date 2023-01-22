import LoadingPage from "components/LoadingPage";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useAuth } from "lib/AuthContext";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { FormEventHandler, useState } from "react";
import { db, storage } from "utils/firebase";

const Page = ({ nextNumber }: { nextNumber: number }) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [alertData, setAlertData] = useState({
    variant: "loading",
    show: false,
    message: "Loading...",
  });
  const [formData, setFormData] = useState<{
    file: File | null;
    term: string;
  }>({
    file: null,
    term: "",
  });

  if (!(user || loading)) {
    router.push("/");
    return <LoadingPage />;
  }

  if (loading) {
    return <LoadingPage />;
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      setAlertData((prevData) => ({
        ...prevData,
        show: true,
        message: "Initializing database...",
      }));
      const newslettersRef = collection(db, "newsletters");

      setAlertData((prevData) => ({
        ...prevData,
        message: "Creating reference document with ID...",
      }));
      const newNewsletter = doc(newslettersRef);

      setAlertData((prevData) => ({
        ...prevData,
        message: "Creating newsletter with ID...",
      }));
      const fileRef = ref(storage, `newsletters/${newNewsletter.id}`);

      setAlertData((prevData) => ({
        ...prevData,
        message: "Uploading newsletter...",
      }));
      await uploadBytes(fileRef, formData.file!);

      setAlertData((prevData) => ({
        ...prevData,
        message: "Fetching newsletter download url...",
      }));
      const downloadUrl = await getDownloadURL(fileRef);

      setAlertData((prevData) => ({
        ...prevData,
        message: "Uploading reference document...",
      }));
      await setDoc(newNewsletter, {
        downloadUrl: downloadUrl,
        created: nextNumber,
        term: parseInt(formData.term, 10),
      });

      setAlertData((prevData) => ({
        ...prevData,
        message: "Done!",
        variant: "success",
      }));

      router.push("/");
    } catch {
      setAlertData((prevData) => ({
        ...prevData,
        message: "Uh oh...",
        variant: "fail",
      }));
    }
  };

  return (
    <main className="p-4 pt-2 h-full min-h-[30rem]">
      {alertData.show && (
        <div
          className={
            "h-auto border-4 rounded-md font-karla flex flex-col justify-center p-4 mb-2" +
            (alertData.variant === "loading"
              ? " bg-yellow-300 border-yellow-500 text-yellow-900"
              : alertData.variant === "fail"
              ? " bg-red-400 border-red-600 text-red-900"
              : " bg-green-400 border-green-700 text-green-900")
          }
        >
          <h1 className="font-bold text-4xl">{alertData.message}</h1>
          {alertData.variant === "fail" && (
            <>
              <hr className="my-3 border-red-900 border rounded-md" />
              <p>
                Something went wrong. Please check if you are connected to the
                Internet and try again.
              </p>
            </>
          )}
        </div>
      )}
      <h1 className="text-5xl text-center font-karla font-bold">
        Upload a newsletter
      </h1>
      <hr className="mt-3 mb-8 border-2 border-black rounded-xl" />
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="w-full md:w-auto">
          <div>
            <label
              className="font-karla text-lg font-semibold"
              htmlFor="newsletter"
            >
              Newsletter
            </label>
          </div>
          <input
            className="w-full md:w-72 ring-2 ring-blue-300 rounded-md p-1"
            id="newsletter"
            type="file"
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                file: e.target.files![0],
              }))
            }
            required
          />
        </div>
        <div className="mt-3 w-full md:w-auto">
          <div>
            <label className="font-karla text-lg font-semibold" htmlFor="term">
              Term Number
            </label>
          </div>
          <input
            className="w-full md:w-72 ring-2 rounded-md p-1"
            id="term"
            type="number"
            value={formData.term}
            onChange={(e) =>
              setFormData((prevData) => ({ ...prevData, term: e.target.value }))
            }
            min={1}
            max={4}
            pattern="[1-4]"
            required
          />
        </div>
        <button className="bg-slate-300 hover:bg-slate-200 active:bg-slate-400 py-1 px-4 mt-3 mb-48 rounded-md">
          Upload
        </button>
      </form>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const newslettersRef = collection(db, "newsletters");
  const newslettersDocs = await getDocs(newslettersRef);
  const newsletterNumbers = newslettersDocs.docs.map(
    (newsletter) => newsletter.data().created
  );
  const highestNumber = Math.max.apply(Math, newsletterNumbers);
  const nextNumber = highestNumber + 1;

  return {
    props: {
      nextNumber: nextNumber,
    },
    revalidate: 10,
  };
};

export default Page;
