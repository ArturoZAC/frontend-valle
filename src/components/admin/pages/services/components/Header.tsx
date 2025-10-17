import { useContext } from "react";
import { Menu, MenuButton, MenuDivider, MenuItem } from "@szhsin/react-menu";

import AuthContext from "../../../../../context/AuthProvider";
import ico from "../../../../../assets/images/logo/ico.png";

import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";
import { FaPowerOff } from "react-icons/fa6";

export const Header = ({
  title,
  isAdmin,
}: {
  title: string;
  isAdmin?: boolean;
}) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center">
      <h2 className={`${isAdmin ? "text-3xl" : "text-2xl"}`}>{title}</h2>

      <Menu
        menuButton={
          <MenuButton
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              backgroundColor: "#1E1F25",
              color: "white",
              borderRadius: "6px",
            }}
          >
            <img
              src={ico}
              alt="User icon"
              className="w-6 h-6 rounded-full object-contain"
            />
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
        <MenuItem
          className={"bg-[#1E1F25] hover:bg-[#5F973E] flex items-center gap-2"}
        >
          <img
            src={ico}
            alt="User icon"
            className="w-6 h-6 rounded-full object-contain"
          />
          <div className="flex flex-col">
            <p>{user?.email}</p>
            <p className="text-xs text-gray-600">{user?.name}</p>
          </div>
        </MenuItem>

        <MenuDivider />

        <MenuItem
          className={
            "bg-[#1E1F25] hover:bg-[#5F973E] text-[#B71C1C]  flex items-center gap-2 ml-1"
          }
        >
          <FaPowerOff />
          <p>Cerrar Sesion</p>
        </MenuItem>
      </Menu>
    </div>
  );
};
