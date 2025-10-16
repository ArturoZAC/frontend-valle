import {
  useState,
  createContext,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
  useEffect,
} from "react";
import { loginAction } from "../components/auth/actions/login.action";
import { generateTokenAction } from "../components/auth/actions/generateToken.action";
// import { type UserSchema } from "./UserSchema";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

export type AuthStatus = "checking" | "authenticated" | "unauthenticated";

export interface AuthContextValue {
  // auth: typeof UserSchema;
  // setAuth: Dispatch<SetStateAction<typeof UserSchema>>;
  user: User | null;
  authStatus: AuthStatus;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  loadingComponents: boolean;
  setLoadingComponents: Dispatch<SetStateAction<boolean>>;
  topFixed: boolean;
  setTopFixed: Dispatch<SetStateAction<boolean>>;

  //methods
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext({} as AuthContextValue);

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  // const [auth, setAuth] = useState<typeof UserSchema>({
  //   id: "",
  //   name: "",
  //   email: "",
  //   idRol: null,
  // });
  const [authStatus, setAuthStatus] = useState<AuthStatus>("checking");
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);
  const [topFixed, setTopFixed] = useState(false);
  const [title, setTitle] = useState("");
  const [loadingComponents, setLoadingComponents] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      generateTokenAction().then((data) => {
        setUser(data.user);
        localStorage.setItem("token", data.token);
        setAuthStatus("authenticated");
      });
    } else {
      setAuthStatus("unauthenticated");
      localStorage.removeItem("token");
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setAuthStatus("checking");

    try {
      const data = await loginAction(email, password);
      console.log({ data });
      localStorage.setItem("token", data.token);
      setUser(data.user);
      setAuthStatus("authenticated");
      return true;
    } catch (error) {
      setUser(null);
      setAuthStatus("unauthenticated");
      return false;
    }
  };

  const logout = async () => {
    localStorage.removeItem("token");
    setUser(null);
    setAuthStatus("unauthenticated");
  };

  return (
    <AuthContext.Provider
      value={{
        // auth,
        // setAuth,
        user,
        authStatus,
        loading,
        setLoading,
        title,
        setTitle,
        loadingComponents,
        setLoadingComponents,
        setTopFixed,
        topFixed,

        //methods:
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
