import { useEffect, useState } from "react";
import { Menu, MenuButton, MenuDivider, MenuItem } from "@szhsin/react-menu";
import Swal from "sweetalert2";

import { getAllProductsAction } from "../../../actions/getAllProducts.action";
import { truncateDescription } from "../../../../../helper/truncateDescription";
import { ProductsResponse } from "../../../interfaces/product.response";
import { deleteProductAction } from "../../../actions/deleteProduct.action";
import { useNavigate } from "react-router-dom";

export const ContentList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<ProductsResponse[]>();

  useEffect(() => {
    getAllProductsAction().then((data) => {
      setProducts(data);
    });
  }, []);

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará el producto de forma permanente.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5F973E",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      background: "#1E1F25",
      color: "#fff",
    });

    if (result.isConfirmed) {
      await deleteProductAction(id);

      setProducts((prev) => prev?.filter((p) => p.id !== id));

      Swal.fire({
        title: "Eliminado",
        text: "El producto fue eliminado correctamente.",
        icon: "success",
        confirmButtonColor: "#5F973E",
        background: "#1E1F25",
        color: "#fff",
      });
    }
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex justify-end">
        <button
          className="px-4 py-2 bg-[#5F973E] rounded-lg"
          onClick={() => {
            navigate("/admin/products/create");
          }}
        >
          Crear
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl bg-[#1E1F25] p-4">
        {/* Encabezados */}
        <div className="md:grid grid-cols-5 gap-4 border-b border-gray-700 pb-3 hidden">
          {["ID", "Nombre", "Descripción", "Imagen", "Acciones"].map(
            (header, index) => (
              <div
                key={index}
                className="text-center font-medium text-gray-400 uppercase tracking-wider text-sm"
              >
                {header}
              </div>
            )
          )}
        </div>

        <div className="flex flex-col gap-3 mt-3">
          {/* Versión para pantallas grandes */}
          <div className="hidden md:flex flex-col gap-3">
            {products?.map((service) => (
              <div
                key={service.id}
                className="grid grid-cols-5 gap-4 items-center bg-[#131517] rounded-lg p-2"
              >
                <div className="text-center text-sm text-gray-300">
                  {service.id.split("-")[0]}
                </div>
                <div className="text-center text-sm text-gray-300">
                  {service.name}
                </div>
                <div className="text-center text-sm text-gray-400">
                  {truncateDescription(service.description, 100)}
                </div>
                <div className="flex justify-center">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-[64px] w-[64px] rounded-md object-contain"
                  />
                </div>
                <div className="text-center">
                  <Menu
                    menuButton={
                      <MenuButton
                        style={{
                          padding: "8px 16px",
                          backgroundColor: "#1E1F25",
                          color: "white",
                          borderRadius: "6px",
                        }}
                      >
                        Acciones ▾
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
                      <button onClick={() => handleDelete(service.id)}>
                        Eliminar
                      </button>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem className="bg-[#1E1F25] hover:bg-[#5F973E]">
                      <button
                        onClick={() =>
                          navigate(`/admin/products/update/${service.id}`)
                        }
                      >
                        Editar
                      </button>
                    </MenuItem>
                  </Menu>
                </div>
              </div>
            ))}
          </div>

          {/* Versión responsiva (menor a md) */}
          <div className="flex flex-col gap-4 md:hidden">
            {products?.map((service) => (
              <div
                key={service.id}
                className="bg-[#131517] rounded-lg p-4 flex flex-col gap-3"
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm font-semibold">
                    {service.name}
                  </span>
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
                      <button onClick={() => handleDelete(service.id)}>
                        Eliminar
                      </button>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem className="bg-[#1E1F25] hover:bg-[#5F973E]">
                      <button
                        onClick={() =>
                          navigate(`/admin/services/update/${service.id}`)
                        }
                      >
                        Editar
                      </button>
                    </MenuItem>
                  </Menu>
                </div>

                <img
                  src={service.image}
                  alt={service.name}
                  className="h-[100px] w-full object-contain rounded-md"
                />
                <p className="text-gray-400 text-sm">
                  {truncateDescription(service.description, 100)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
