import {
  signInWithEmailAndPassword,
  User,
  UserCredential,
} from "firebase/auth";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../utils/firebase";

const login = async (email: string, password: string) => {
  try {
    const UserCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return UserCredentials;
  } catch (err: any) {
    return err.message;
  }
};
const logout = async () => {
  try {
    await auth.signOut();
    return true;
  } catch {
    return false;
  }
};

const AuthContext = createContext<{
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<UserCredential | string>;
  logout: () => Promise<boolean>;
}>({
  user: null,
  loading: true,
  login: login,
  logout: logout,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    return auth.onAuthStateChanged(async (user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
