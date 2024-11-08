"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FiSettings } from "react-icons/fi";

const NavBar = () => {
  const [settingsDropdownOpen, setSettingsDropdownOpen] = useState(false); // State for settings dropdown
  const settingsDropdownRef = useRef(null); // Ref for dropdown
  const router = useRouter();

  // Toggle dropdown function
  const toggleSettingsDropdown = () => {
    setSettingsDropdownOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        settingsDropdownRef.current &&
        !settingsDropdownRef.current.contains(event.target)
      ) {
        setSettingsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="border-b">
      <div className="grid grid-cols-12 gap-4 p-5">
        <div className="col-span-8">
          <div className="flex items-center border rounded-full p-2 mt-1 bg-[#F6F8FB]">
            <Image
              src="/images/Seacrh.png"
              alt="Search Icon"
              width={24}
              height={24}
              className="mr-2"
            />
            <input
              type="text"
              className="w-full bg-[#F6F8FB] border-none"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex justify-end gap-2 items-center">
            {/* Settings Icon with Dropdown */}
            <div className="relative" ref={settingsDropdownRef}>
              <div
                className="text-3xl cursor-pointer  rounded-full p-2"
                onClick={toggleSettingsDropdown}
              >
                <FiSettings />
              </div>
              {settingsDropdownOpen && (
                <div className="absolute top-full right-0 bg-gray-100 text-black rounded-lg shadow-lg z-20 w-40 mt-2">
                  {/* <div
                    className="px-4 py-2 cursor-pointer"
                    onClick={() => router.push("/FAQ")}
                  >
                    FAQ&rsquo;s
                  </div> */}
                  <div
                    className="px-4 py-2 cursor-pointertext-white hover: hover:"
                    onClick={() => router.push("/pages/adminprofile")}
                  >
                    Profile Setting
                  </div>
                  <div
                    className="px-4 py-2 cursor-pointer"
                    onClick={() => router.push("/")}
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>

            {/* Notification Icon */}
            <div className="rounded-full p-2 bg-red-100 w-12 h-12 flex items-center justify-center">
              <Image
                src="/images/notification.png"
                alt="Notification Icon"
                width={24}
                height={24}
              />
            </div>

            {/* Profile Info */}
            <div className="flex gap-5">
              <div>
                <Image
                  src="/images/profile (1).png"
                  width={50}
                  height={50}
                  alt="Profile Image"
                  className="object-cover"
                />
              </div>
              <div className="mt-2">
                <p className="text-custom-24.65 font-medium leading-6 tracking-custom-0.005 text-left text-[#78828A]">
                  Criss Germano
                </p>
                <p className="text-[11px] text-[#78828A]">Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
