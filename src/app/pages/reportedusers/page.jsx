"use client";

import ReportsTable from "@/app/components/ReportedUsers/ReportsTable";
import React from "react";
import BackButton from "@/app/components/BackButton";
import Image from "next/image";

const ReportedUser = () => {
  const options = [
    { value: "option1", label: "CSV" },
    { value: "option2", label: "XLSX" },
    { value: "option3", label: "HTML" },
  ];

  return (
    <>
      <div className="flex justify-between border-b py-4 p-5">
          <div className="flex items-center gap-2">
            <BackButton />
            <h1 className="text-[#78828A] text-[24px] font-[500]">
              Reported Users
            </h1>
          </div>
        <div className="flex gap-2 justify-end">
          <div className="relative inline-block">
            <div className="relative">
              <div className="flex items-center bg-white border border-gray-300 rounded-md shadow-sm pl-10 pr-2 py-2 cursor-pointer focus:outline-none">
                <Image
                  src="/images/export.png"
                  alt="export icon"
                  width={24} // Adjust width as needed
                  height={24} // Adjust height as needed
                  className="absolute left-3"
                />
                
                <span className="text-[#75818D] text-[14px]  font-[400]">
                  Export
                </span>
              </div>
            </div>
          </div>
          <form className="relative">
          <select
            id="underline_select"
            className="py-2 px-2 rounded-lg w-full text-sm text-gray-500 bg-transparent border border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200"
          >
            <option selected>Massive Action</option>
            <option value="US">Resolved</option>
            <option value="CA">Pending</option>
          </select>
        </form>
        <div className="relative">
          <input
            type="text"
            placeholder="Search By Name"
            className="block w-full pl-4 pr-10 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            {/* <img src="Seacrh (1).png" alt="Search" /> */}
          </div>
        </div>
        <div className="relative">
          <input
            type="date"
            id="date"
            placeholder="Select date"
            className="block w-full pl-4 pr-10 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        </div>
      </div>
      <ReportsTable />
    </>
  );
};

export default ReportedUser;
