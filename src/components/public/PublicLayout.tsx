import { Outlet } from "react-router-dom";
import { Footer } from "./estructura/Footer";
import Header from "./estructura/Header";
import { Toaster } from "sonner";

export const PublicLayout = (): JSX.Element => {
  return (
    <>
      <Header />

      <Toaster position="top-right" />
      <Outlet />
      <Footer />
    </>
  );
};
