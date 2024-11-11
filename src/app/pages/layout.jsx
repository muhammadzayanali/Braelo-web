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
    <div className="fixed h-full overflow-y-auto">
      <Sidebar />
    </div>
  
    {/* Main Content */}
    <div className="w-[calc(100%-20%)] ml-[20%] xl:ml-[20%] 2xl:ml-[12%] h-full flex flex-col">
      <NavBar />
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  </div>
  </div>
  );
};

export default Layout;
