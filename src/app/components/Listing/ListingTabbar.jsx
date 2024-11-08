"use client";
import React, { useState } from "react";
import TotalListing from "./TotalListing";
import ActiveListing from "./ActiveLsiting";
import InactiveListing from "./InactiveListing";
import DeletedListing from "./DeletedLsiting";
import SaveListing from "./SaveLsiting";

const ListingTabbar = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  const buttonClasses = (index) =>
    `px-[10px] py-2 mx-2 font-semibold  transition ease-in-out duration-300 ${
      activeButton === index
        ? "border-b-2 border-[#EE9E03] text-[#78828A]  font-[600]"
        : "text-[#ACB6BE] text-[16px] font-[500] "
    }`;

  return (
    <>
      <div className="flex justify-between p-5">
        <button className={buttonClasses(1)} onClick={() => handleClick(1)}>
          Total Listings
        </button>
        <button className={buttonClasses(2)} onClick={() => handleClick(2)}>
          Active Listings
        </button>
        <button className={buttonClasses(3)} onClick={() => handleClick(3)}>
          Inactive Listings
        </button>
        <button className={buttonClasses(4)} onClick={() => handleClick(4)}>
          Deleted Listings
        </button>
        <button className={buttonClasses(5)} onClick={() => handleClick(5)}>
          Saved Listings
        </button>
      </div>
      <div className="mt-4">
        {activeButton === 1 && <TotalListing />}
        {activeButton === 2 && <ActiveListing />}
        {activeButton === 3 && <InactiveListing />}
        {activeButton === 4 && <DeletedListing />}
        {activeButton === 5 && <SaveListing />}
      </div>
    </>
  );
};

export default ListingTabbar;
