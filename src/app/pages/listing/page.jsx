"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AllListingTabbar from "@/app/components/Listing/AllListingTabbar";
import BackButton from "@/app/components/BackButton";

const Listing = () => {
  const [status, setStatus] = useState("");
  const router = useRouter();

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSelectCategory = (event) => {
    setStatus(event.target.value);
  };

  const handleNewListing = () => {
    router.push("/pages/listing/addlisting");
  };

  return (
    <div>
      <div className="flex justify-between p-5 border-b ">
        <div className="flex items-center gap-2">
          <BackButton />
          <h1 className="text-[#78828A] text-[24px] font-[500]">Listing</h1>
        </div>
        <div className="flex gap-2">
          <div className="max-w-sm">
            <select
              id="Massive Actions"
              value={status}
              onChange={handleChange}
              className="block px-3 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50"
            >
              <option value="Activate">Massive Actions</option>
              <option value="Enable">Enable</option>
              <option value="Disabled">Disabled</option>
            </select>
          </div>

          <div className="max-w-sm">
            <select
              id="Subcategory"
              value={status}
              onChange={handleSelectCategory}
              className="block px-3 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50"
            >
              <option>Subcategory</option>
              <option value="Cars">Cars</option>
              <option value="Trucks">Trucks</option>
              <option value="Bikes">Bikes</option>
              <option value="Jobs">Jobs</option>
            </select>
          </div>

          <button
            onClick={handleNewListing}
            className="px-4 py-1 bg-[#CD9403] text-white rounded-lg font-plus"
          >
            Add New Listing
          </button>
        </div>
      </div>

      <div className="p-5">
        <AllListingTabbar />
      </div>
    </div>
  );
};

export default Listing;
