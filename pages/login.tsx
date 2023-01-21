import { useAuth } from "lib/AuthContext";
import { useRouter } from "next/router";
import { FormEventHandler, useState } from "react";
import BackButton from "components/BackButton";
import LoadingPage from "components/LoadingPage";

const Page = () => {
  const { user, loading, login } = useAuth();
  const router = useRouter();

  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  if (user) {
    router.push("/");
    return <LoadingPage />;
  }

  if (loading) {
    return <LoadingPage />;
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const res = await login(formData.email, formData.password);

    if (typeof res === "string") {
      if (
        res === "Firebase: Error (auth/wrong-password)." ||
        res === "Firebase: Error (auth/user-not-found)."
      ) {
        setShowAlert(true);
        setFormData((prevData) => ({ ...prevData, password: "" }));
        return;
      }
    }
    console.log("Success?");
    router.push("/");
  };

  return (
    <main className="p-4 pt-2 h-full min-h-[30rem]">
      {showAlert && (
        <div className="flex flex-col justify-center bg-red-300 text-red-900 font-karla font-bold p-4 w-full my-2 rounded-md border-4 border-red-700">
          <h1 className="text-3xl">Uh oh!</h1>
          <p className="text-lg">
            Please confirm you are using the correct email and password provided
            to you.
          </p>
        </div>
      )}
      <BackButton>Back</BackButton>
      <h1 className="text-5xl text-center font-karla font-bold">Login</h1>
      <hr className="mt-3 mb-8 border-2 border-black rounded-xl" />
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="w-full md:w-auto">
          <div>
            <label className="font-karla text-lg font-semibold" htmlFor="email">
              Email
            </label>
          </div>
          <input
            className="w-full md:w-72 ring-2 rounded-md p-1"
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData((prevData) => ({
                ...prevData,
                email: e.target.value,
              }));
              setShowAlert(false);
            }}
            required
          />
        </div>
        <div className="mt-3 w-full md:w-auto">
          <div>
            <label
              className="font-karla text-lg font-semibold"
              htmlFor="password"
            >
              Password
            </label>
          </div>
          <input
            className="w-full md:w-72 ring-2 rounded-md p-1"
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) => {
              setFormData((prevData) => ({
                ...prevData,
                password: e.target.value,
              }));
              setShowAlert(false);
            }}
            required
          />
        </div>
        <button className="bg-slate-300 hover:bg-slate-200 active:bg-slate-400 py-1 px-4 mt-3 mb-48 rounded-md">
          Login
        </button>
      </form>
    </main>
  );
};

export default Page;
