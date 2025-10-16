import { Outlet } from "react-router-dom";
import { Footer } from "./estructura/Footer";
import Header from "./estructura/Header";

export const PublicLayout = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
