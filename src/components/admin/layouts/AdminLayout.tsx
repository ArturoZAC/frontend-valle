import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import AuthContext from "../../../context/AuthProvider";

export const AdminLayout = () => {
  const { authStatus } = useContext(AuthContext);

  if (authStatus === "checking") {
    return (
      <div className="bg-black w-full h-screen flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-[rgba(0,255,0,0.1)] border-t-[#80B546] rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#5f973e] text-white p-4">
        <div className="text-xl font-bold mb-6">Admin Panel</div>
        <nav className="space-y-2">
          <Link
            to={"/admin/dashboard"}
            className="block py-2 px-4 hover:bg-gray-700 rounded"
          >
            Dashboard
          </Link>
          <Link
            to={"/admin/services"}
            className="block py-2 px-4 hover:bg-gray-700 rounded"
          >
            Services
          </Link>
        </nav>
      </div>

      <div className="flex-1 px-8 py-5 bg-[#131517] text-white">
        <Outlet />
      </div>
    </div>
  );
};
