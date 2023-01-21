import { useAuth } from "lib/AuthContext";
import { useRouter } from "next/router";

const Page = () => {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  if (!loading) {
    if (user) logout();
    router.push("/");
  }

  return <h1 className="h-screen text-center text-4xl">Logging out...</h1>;
};

export default Page;
