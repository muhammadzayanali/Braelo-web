// src/components/Layout.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/Navbar";
const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <div className="w-1/5 fixed h-full overflow-y-auto">
      <Sidebar />
    </div>
  
    {/* Main Content */}
    <div className="w-[calc(100%-20%)] ml-[20%] h-full flex flex-col">
      <NavBar />
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  </div>
  
  );
};

export default Layout;
