import { useContext } from "react";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import AuthContext from "../../../context/AuthProvider";
import logo from "../../../assets/images/logo/logo.png";
import { FaPowerOff } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { HiArchiveBox } from "react-icons/hi2";

export const AdminLayout = () => {
  const { authStatus, logout } = useContext(AuthContext);
  const location = useLocation();
  const isOnDashboard = location.pathname.split("/").includes("dashboard");
  const isOnProducts = location.pathname.split("/").includes("products");

  if (authStatus === "checking") {
    return (
      <div className="bg-black w-full h-screen flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-[rgba(0,255,0,0.1)] border-t-[#80B546] rounded-full animate-spin" />
      </div>
    );
  }

  if (authStatus === "unauthenticated") {
    return <Navigate to={"/auth/login"} />;
  }

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#5f973e] text-white p-4 lg-max:hidden flex flex-col justify-between max-lg:hidden">
        <div>
          <div className="flex justify-center mb-6">
            <img
              src={logo}
              alt="Admin Panel Logo"
              className="w-32 h-auto object-contain"
            />
          </div>
          <nav className="space-y-2">
            <Link
              to={"/admin/dashboard"}
              className={`py-2 px-4 hover:bg-gray-900 rounded transition-colors duration-300 flex gap-x-2 items-center ${
                isOnDashboard ? "bg-[#131517]" : ""
              }`}
            >
              <RxDashboard />
              Dashboard
            </Link>
            <Link
              to={"/admin/products"}
              className={`flex gap-x-2 items-center py-2 px-4 hover:bg-gray-900 rounded transition-colors duration-300 ${
                isOnProducts ? "bg-[#131517]" : ""
              }`}
            >
              <HiArchiveBox />
              Products
            </Link>
          </nav>
        </div>

        <button
          className="flex justify-center items-center gap-x-4 p-2 rounded bg-red-900"
          onClick={() => {
            logout();
          }}
        >
          <FaPowerOff />
          <p>Cerrar Sesion</p>
        </button>
      </div>

      <div className="flex-1 px-5  md:px-8 py-5 bg-[#131517] text-white lg-max:min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};
