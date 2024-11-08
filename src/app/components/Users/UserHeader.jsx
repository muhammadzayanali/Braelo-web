"use client";
import React, { useState } from "react";
import Image from "next/image";
import BackButton from "../BackButton";
import { useRouter } from "next/navigation";

const UserHeader = () => {

  const options = [
    { value: "csv", label: "CSV" },
    { value: "xlsx", label: "XLSX" },
    { value: "html", label: "HTML" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [status, setStatus] = useState("");
  const router = useRouter();

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between border-b py-4 px-5">
        <div className="flex items-center gap-2">
          <BackButton/>
          <h1 className="text-[#78828A] text-[24px] font-[500]">
            User Overview
          </h1>
        </div>
        <div className="flex gap-2">
          {/* <Image src="/images/select.png" alt="select" width={100}  /> */}
          <div>
            <button onClick={()=>router.push("/pages/users/adduser")} className=" px-6 py-2 bg-[#CD9403] text-center text-[13px] text-white text-semibold  rounded-lg">
              Add user
            </button>
          </div>
          <div className="relative inline-block">

            {/* Export Dropdown */}
            <div className="relative">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center bg-white border border-gray-300 rounded-md shadow-sm pl-10 pr-2 py-2 cursor-pointer focus:outline-none"
              >
                <Image
                  src="/images/export.png"
                  alt="export icon"
                  width={24}
                  height={24}
                  className="absolute left-3"
                />
                <span className="text-[#75818D] text-[14px]  font-[400]">
                  Export
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 ml-2 transition-transform duration-200 ${
                    isOpen ? "transform rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 10l5 5 5-5"
                  />
                </svg>
              </div>
              
              {isOpen && (
                <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  {options.map((option, index) => (
                    <div
                      key={index}
                      onClick={() => handleOptionClick(option)}
                      className="py-2 px-4 hover:bg-gray-100 cursor-pointer font-[500] text-[12px] text-[#75818D] "
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex gap-2 p-5">
          <form className="relative">
            <select
              id="underline_select"
              className="py-2 px-2 rounded-lg w-full text-sm text-gray-500 bg-transparent border border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected>Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="deleted">Deleted</option>
            </select>
          </form>

          <div className="relative">
            <input
              type="text"
              placeholder="Search By Name"
              className="block w-full pl-4 pr-10 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            />
            {/* <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Image
                src="/images/search.png"
                alt="Search"
                width={16}
                height={16}
              />
            </div> */}
          </div>

          <div className="relative">
            <input
              type="date"
              id="date"
              className="block w-full pl-4 pr-10 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="max-w-sm">
            <select
              id="verification-status"
              value={status}
              onChange={handleChange}
              className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50"
            >
              <option value="" selected>
                Verification Status
              </option>
              <option value="activate">Activate</option>
              <option value="deactivate">Deactivate</option>
              <option value="verify-email">Verify Email</option>
              <option value="verify-phone">Verify Phone Number</option>
              <option value="delete">Delete</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
