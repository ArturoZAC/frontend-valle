import { useState } from "react";

interface User {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  const handleLogin = () => {};

  return <></>;
};
