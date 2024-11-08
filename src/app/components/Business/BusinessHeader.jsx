"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "../BackButton";

const options = [
  { value: "option1", label: "CSV" },
  { value: "option2", label: "XLSX" },
  { value: "option3", label: "HTML" },
];

const BusinessHeader = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [verifystatus, setverifystatus] = useState("");
  const router = useRouter();

  const handleNewBusiness = () => {
    router.push("/pages/business/addbusiness");
  };

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleVerifyStatus = (event) => {
    setverifystatus(event.target.value);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between border-b p-5">
        <div className="flex items-center gap-2">
          <BackButton/>
          <h1 className="text-[#78828A] text-[24px] font-[500] flex items-center">
            Business Overview
          </h1>
        </div>
        <div className="flex justify-between py-4 items-center">
          <div className="flex gap-2">
            <img
              src="/b4.png"
              className="cursor-pointer"
              onClick={handleNewBusiness}
            />
            <div>
            </div>
            <div className="relative inline-block">
              {/* Select Dropdown */}
              <div className="relative">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center bg-white border border-gray-300 rounded-md shadow-sm pl-10 pr-2 py-2 cursor-pointer focus:outline-none"
                >
                  <img
                    src="/images/export.png"
                    alt="export icon"
                    className="absolute left-3 w-6 h-6"
                  />
                  <span className="text-[#75818D] text-[14px]  font-[400]">
                    Export
                  </span>{" "}
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
      </div>
      <div className="flex gap-2 p-5">
        <div className="">
          <select
            id="status"
            value={status}
            onChange={handleChange}
            className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50"
          >
            <option value="" disabled>
              Select Status
            </option>
            <option value="Activate">Activate</option>
            <option value="Deactivate">Deactivate</option>
            <option value="Delete">Delete</option>
          </select>
        </div>
        <div className="relative">
          {/* Input Field */}
          <input
            type="text"
            placeholder="Search By Name"
            className="block w-full pl-4 pr-10 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          />
          {/* Search Icon */}
          {/* <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <img src="Seacrh (1).png" alt="Search" />
          </div> */}
        </div>
        <div className="relative">
          {/* Date Input Field */}
          <input
            type="date"
            id="date"
            placeholder="Select date"
            className="block w-full pl-4 pr-10 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="">
          <select
            id="verification-status"
            value={verifystatus}
            onChange={handleVerifyStatus}
            className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50"
          >
            <option value="" disabled>
              Verification Status
            </option>
            <option value="Activate">Activate</option>
            <option value="Deactivate">Deactivate</option>
            <option value="Verify Email">Verify Email</option>
            <option value="Verify Phone Number">Verify Phone Number</option>
            <option value="Delete">Delete</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BusinessHeader;
