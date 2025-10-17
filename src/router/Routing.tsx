import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { AuthProvider } from "../context/AuthProvider";
import { AuthRoutes } from "./AuthRoutes";
import { AdminRoutes } from "./AdminRoutes";
import { PublicRoutes } from "./PublicRoutes";

// import Cobertura from '../components/public/Cobertura'

export const Routing = (): JSX.Element => {
  return (
    <BrowserRouter basename="/landingpages/valleagricola">
      <AuthProvider>
        <Routes>
          {/* Auth */}
          <Route path="/auth/*" element={<AuthRoutes />} />

          {/* Admin */}
          <Route path="/admin/*" element={<AdminRoutes />} />

          {/* Público */}
          <Route path="/*" element={<PublicRoutes />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
