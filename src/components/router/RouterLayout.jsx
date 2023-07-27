import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RouterLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    
    </div>
  );
};

export default RouterLayout;
