// src/components/Layout.jsx
"use client";
import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/Navbar";

const Layout = ({ children }) => {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="admin-panel">
      <div className="flex h-screen z-10">
        <div className="">
          <Sidebar />
        </div>

        <div className="  w-[calc(100%-256px)] h-full flex flex-col border rounded-tl-[50px] bg-white z-50">
          <NavBar />
          <div className="p-5 overflow-y-auto border rounded-bl-[50px]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
