import React, { useState } from "react";
import Users from "../components/User/Users";
import AdminNavbar from "../components/User/AdminNavbar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Admin = () => {
  const isAuthAdmin = useSelector((state) => state.authReducer.isAuthAdmin);
  return (
    <div className="mt-[10%]">
      {isAuthAdmin ? (
        <div>
          <AdminNavbar />
          <Outlet />
        </div>
      ) : (
        <div className=" h-full flex justify-center items-center text-5xl bg-red-900 wrap flex-wrap p-10 text-yellow-100">
          You have no access to this page
        </div>
      )}
    </div>
  );
};

export default Admin;
