import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./components/Header";

export const ServicesPage = () => {
  const location = useLocation();
  let title = "";

  if (location.pathname.endsWith("/create")) {
    title = "Crear Servicio";
  } else {
    title = "Actualizar Servicio";
  }

  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-4">
        <Header title={title} />
        <div className="border border-[#5F973E]"></div>
      </div>

      <Outlet />
    </div>
  );
};
