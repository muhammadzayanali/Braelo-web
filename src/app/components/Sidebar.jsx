"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  { to: "/pages/dashboard", icon: "/a1.png", label: "Dashboard" },
  { to: "/pages/users", icon: "/a2.png", label: "Users" },
  { to: "/pages/business", icon: "/a3.png", label: "Business" },
  { to: "/pages/listing", icon: "/a4.png", label: "Listing" },
  { to: "/pages/categories", icon: "/a5.png", label: "Categories" },
  { to: "/pages/support", icon: "/a7.png", label: "Support" },
  { to: "/pages/notifications", icon: "/a8.png", label: "Notifications" },
  { to: "/pages/statistics", icon: "/a9.png", label: "Statistics" },
  { to: "/pages/reportedusers", icon: "/a11.png", label: "Reported Users" },
  { to: "/pages/privacypolicy", icon: "/a12.png", label: "Privacy Policy" },
];

const Sidebar = () => {
  const pathname = usePathname(); // Get current path

  // Function to dynamically set the active class based on the path
  const getTabClass = (path) => {
    const isActive = pathname.startsWith(path); // Check if pathname starts with the item path
    return `flex items-center mt-3 justify-start px-6 py-2 cursor-pointer hover:bg-gray-600 ${
      isActive ? "bg-[#D8B039] rounded-lg" : ""
    }`;
  };

  return (
    <div className="flex flex-col w-64 bg-[#3a4248] h-screen scroll">
      <div className="bg-[#3a4248]">
        <div className="w-full">
          {/* Logo Section */}
          <div className="bg-[#FFCC35] flex justify-center p-8">
            <img src="/black logo.png" className="hidden md:block" alt="Logo" />
            <img
              src="/faveicon.svg"
              className="block md:hidden"
              width="24px"
              alt="Favicon"
            />
          </div>

          <div className="p-5">
            <h1 className="text-white text-lg font-bold">Platform</h1>
            {sidebarItems.map((item) => (
              <Link key={item.label} href={item.to} passHref>
                <div className={getTabClass(item.to)}>
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-6 h-6 mr-2"
                  />
                  <span className="text-white">{item.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
