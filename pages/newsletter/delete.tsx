import LoadingPage from "components/LoadingPage";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useAuth } from "lib/AuthContext";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { FormEventHandler, useState } from "react";
import { db } from "utils/firebase";

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
  const [formData, setFormData] = useState<{
    selectedFormId: string;
  }>({
    selectedFormId: "",
  });
  const [alertData, setAlertData] = useState({
    variant: "loading",
    show: false,
    message: "Loading...",
  });
  // START AUTHORISATION CHECKS
  const { user, loading } = useAuth();
  const router = useRouter();

  if (!(user || loading)) {
    router.push("/");
    return <LoadingPage />;
  }

  if (loading) {
    return <LoadingPage />;
  }
  // END AUTHORISATION CHECKS

  function updateAlertData(values: {
    message?: string;
    variant?: string;
    show?: boolean;
  }) {
    setAlertData((prevData) => ({
      message: values.message ? values.message : prevData.message,
      variant: values.variant ? values.variant : prevData.variant,
      show: values.show ? values.show : prevData.show,
    }));
  }

  const newsletterOptionElements = newsletters.map((newsletter) => (
    <option value={newsletter.id}>
      {newsletter.id} - Term {newsletter.term}
    </option>
  ));

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      updateAlertData({
        show: true,
        message: "Fetching document reference...",
      });
      const newsletterDoc = doc(db, "newsletters", formData.selectedFormId);

      updateAlertData({ message: "Deleting document..." });
      await deleteDoc(newsletterDoc);

      updateAlertData({ message: "Done!", variant: "success" });
			
			router.push("/");
    } catch {
      updateAlertData({
        message: "Uh oh...",
        variant: "fail",
      });
    }
  };

  return (
    <main className="p-4 pt-2 h-full min-h-[34rem]">
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
        Delete a newsletter
      </h1>
      <hr className="mt-3 mb-8 border-2 border-black rounded-xl" />
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="w-full md:w-auto">
          <div>
            <label
              className="font-karla text-lg font-semibold"
              htmlFor="newsletter"
            >
              Select a Newsletter
            </label>
          </div>
          <select
            name="newsletter"
            id="newsletter"
            onChange={(e) =>
              setFormData(() => ({
                selectedFormId: e.target.value,
              }))
            }
            required
          >
            <option value="" disabled selected>
              -- Select an option --
            </option>
            {newsletterOptionElements}
          </select>
        </div>
        <button
          type="submit"
          className="font-bold text-white bg-red-600 hover:bg-red-500 active:bg-red-700 py-1 px-4 mt-4 rounded-md transition-colors"
        >
          Delete
        </button>
        <p className="text-center mb-48 font-semibold text-red-500">
          Warning! This action cannot be undone.
        </p>
      </form>
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
  const sortedNewsletters = newsletters.sort((a, b) => b.created - a.created);

  return {
    props: {
      newsletters: sortedNewsletters,
    },
    revalidate: 10,
  };
};

export default Page;
