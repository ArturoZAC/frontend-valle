import { Routes, Route, Navigate } from "react-router-dom";
import { AuthLayout } from "../components/auth/layout/AuthLayout";
import { LoginPage } from "../components/auth/pages/login/LoginPage";

export const AuthRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route index element={<Navigate to="/auth/login" />} />
      </Route>

      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
