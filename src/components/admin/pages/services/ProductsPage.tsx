import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./components/Header";

export const ProductsPage = () => {
  const location = useLocation();
  let title = "Listado de Productos";

  if (location.pathname.endsWith("/create")) {
    title = "Crear Producto";
  } else if (location.pathname.split("/")[3] === "update") {
    title = "Actualizar Producto";
  }

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-4">
        <Header title={title} />
        <div className="border border-[#5F973E]"></div>
      </div>

      <Outlet />
    </div>
  );
};
