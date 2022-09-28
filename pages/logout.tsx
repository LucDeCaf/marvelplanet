import { useAuth } from "lib/AuthContext";
import { NextPage } from "next";
import { useRouter } from "next/router";

const LogoutText = () => <h1 className="h-screen text-center text-4xl">Logging out...</h1>;

const Page: NextPage = () => {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  if (!loading) {
    if (user) logout();
    router.push("/");
  }

  return <LogoutText />;
};

export default Page;
