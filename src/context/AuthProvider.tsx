import {
  useState,
  createContext,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";
import { type UserSchema } from "./UserSchema";

export interface AuthContextValue {
  auth: typeof UserSchema;
  setAuth: Dispatch<SetStateAction<typeof UserSchema>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  loadingComponents: boolean;
  setLoadingComponents: Dispatch<SetStateAction<boolean>>;
  topFixed: boolean;
  setTopFixed: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [auth, setAuth] = useState<typeof UserSchema>({
    id: "",
    name: "",
    email: "",
    idRol: null,
  });
  const [loading, setLoading] = useState(true);
  const [topFixed, setTopFixed] = useState(false);
  const [title, setTitle] = useState("");
  const [loadingComponents, setLoadingComponents] = useState(true);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        loading,
        setLoading,
        title,
        setTitle,
        loadingComponents,
        setLoadingComponents,
        setTopFixed,
        topFixed,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
