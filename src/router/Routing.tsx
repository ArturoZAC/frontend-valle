import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { AuthProvider } from "../context/AuthProvider";

import { Home } from "../components/public/Home";
import { PublicLayout } from "../components/public/PublicLayout";

import { AuthLayout } from "../components/auth/layout/AuthLayout";
import { LoginPage } from "../components/auth/pages/login/LoginPage";

import { AdminLayout } from "../components/admin/layouts/AdminLayout";
import { DashboardPage } from "../components/admin/pages/dashboard/DashboardPage";
import { ServicesPage } from "../components/admin/pages/services/ServicesPage";
import { ContentList } from "../components/admin/pages/services/components/ContentList";
import { CreatePage } from "../components/admin/pages/services/pages/CreatePage";
import { UpdatePage } from "../components/admin/pages/services/pages/UpdatePage";

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

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="services" element={<ServicesPage />}>
              <Route index element={<ContentList />} />
              <Route path="create" element={<CreatePage />} />
              <Route path="update/:id" element={<UpdatePage />} />

              <Route path="*" element={<Navigate to={"/admin/services"} />} />
            </Route>

            <Route index element={<Navigate to={"/admin/dashboard"} />} />
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
