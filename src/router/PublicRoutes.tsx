import { Routes, Route, Navigate } from "react-router-dom";
import { PublicLayout } from "../components/public/PublicLayout";
import { Home } from "../components/public/Home";

export const PublicRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
