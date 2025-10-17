import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "../services/components/Header";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../../context/AuthProvider";
import { getAllProductsAction } from "../../actions/getAllProducts.action";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { HiArchiveBox } from "react-icons/hi2";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";

export const DashboardPage = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const isOnDashboard = location.pathname.split("/").includes("dashboard");

  const [totalProducts, setTotalProducts] = useState<number>(0);

  let title = `¡Buenos días!, ${user?.name}!`;

  useEffect(() => {
    // Cargar cantidad de productos
    getAllProductsAction().then((data) => {
      setTotalProducts(data.length);
    });
  }, []);

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-4">
        <Header title={title} isAdmin={isOnDashboard} />
        <div className="border border-[#5F973E]"></div>
      </div>

      {/* Card de resumen */}

      <div className="flex flex-col max-w-[300px] gap-y-5">
        <div className="bg-[#1E1F25] border-b border-gray-700 rounded-xl p-5 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Total de productos
            </h3>
            <p className="text-[#5F973E] text-4xl font-bold mt-1 flex gap-x-2">
              <HiArchiveBox />
              {totalProducts}
            </p>
          </div>

          <Menu
            menuButton={
              <MenuButton
                style={{
                  padding: "4px 8px",
                  backgroundColor: "#1E1F25",
                  color: "white",
                  borderRadius: "6px",
                  fontSize: "14px",
                }}
              >
                ⋮
              </MenuButton>
            }
            direction="bottom"
            align="end"
            position="anchor"
            viewScroll="auto"
            gap={12}
            menuStyle={{
              background: "#1E1F25",
              color: "#ffffff",
            }}
          >
            <MenuItem className="bg-[#1E1F25] hover:bg-[#5F973E]">
              <button
                onClick={() => {
                  navigate("/admin/products");
                }}
              >
                Productos
              </button>
            </MenuItem>
          </Menu>
        </div>

        {/* Botón de agregar producto */}
        <button
          onClick={() => navigate("/admin/products/create")}
          className="flex items-center justify-center gap-x-2 px-4 py-3 bg-[#5F973E] rounded-lg hover:bg-[#6fa84a] transition-all font-medium text-white"
        >
          <BsFillPlusCircleFill size={20} />
          Agregar producto
        </button>
      </div>
    </div>
  );
};
