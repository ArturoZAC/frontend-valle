import { Routes, Route, Navigate } from "react-router-dom";
import { AdminLayout } from "../components/admin/layouts/AdminLayout";
import { DashboardPage } from "../components/admin/pages/dashboard/DashboardPage";
import { ProductsPage } from "../components/admin/pages/services/ProductsPage";
import { ContentList } from "../components/admin/pages/services/components/ContentList";
import { CreatePage } from "../components/admin/pages/services/pages/CreatePage";
import { UpdatePage } from "../components/admin/pages/services/pages/UpdatePage";

export const AdminRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="dashboard" element={<DashboardPage />} />

        <Route path="products" element={<ProductsPage />}>
          <Route index element={<ContentList />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="update/:id" element={<UpdatePage />} />
          <Route path="*" element={<Navigate to="/admin/products" />} />
        </Route>

        <Route index element={<Navigate to="/admin/dashboard" />} />
      </Route>

      <Route path="*" element={<Navigate to="/admin/dashboard" />} />
    </Routes>
  );
};
