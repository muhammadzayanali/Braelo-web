// src/components/Layout.jsx
"use client"
import React,{useEffect} from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/Navbar";

const Layout = ({ children }) => {
  useEffect(() => {
    document.documentElement.classList.remove('dark'); 
  }, []);

  return (
    <div className="admin-panel">
  {/* Admin panel content here */}

    <div className="flex h-screen">
    {/* Sidebar */}
    <div className="">
      <Sidebar />
    </div>
  
    {/* Main Content */}
    <div className="w-[calc(100%-256px)]  h-full flex flex-col">
      <NavBar />
      <div className="p-5 overflow-y-auto">
        {children}
      </div>
    </div>
  </div>
  </div>
  );
};

export default Layout;
