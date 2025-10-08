import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout, logOut } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div className="flex items-center">
      <button className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Logout
      </button>
    </div>
  );
}

export default LogoutBtn;
