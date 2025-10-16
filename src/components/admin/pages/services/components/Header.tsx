import { Menu, MenuButton, MenuDivider, MenuItem } from "@szhsin/react-menu";
import { useContext } from "react";
import AuthContext from "../../../../../context/AuthProvider";

import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";

export const Header = ({
  title = "Listado de Servicios",
}: {
  title?: string;
}) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl">{title}</h2>

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
            {user?.name} ▾
          </MenuButton>
        }
        direction={"bottom"}
        align={"end"}
        position={"anchor"}
        viewScroll={"auto"}
        gap={12}
        menuStyle={{
          background: "#1E1F25",
          color: "#ffffff",
        }}
      >
        <MenuItem className={"bg-[#1E1F25] hover:bg-[#5F973E]"}>
          {user?.email}
        </MenuItem>

        <MenuDivider />

        <MenuItem className={"bg-[#1E1F25] hover:bg-[#5F973E]"}>
          Cerrar Sesion
        </MenuItem>
      </Menu>
    </div>
  );
};
