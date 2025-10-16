import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { AuthProvider } from "../context/AuthProvider";

import { Home } from "../components/public/Home";
import { PublicLayout } from "../components/public/PublicLayout";
import { AuthLayout } from "../components/auth/layout/AuthLayout";
import { LoginPage } from "../components/auth/pages/LoginPage";

// import Cobertura from '../components/public/Cobertura'

export const Routing = (): JSX.Element => {
  return (
    <BrowserRouter basename="/landingpages/valleagricola">
      <AuthProvider>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />

            <Route index element={<Navigate to={"/auth/login"} />} />
          </Route>

          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
          </Route>

          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
