"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Import the Navigation module
import "swiper/css";
import "swiper/css/navigation"; // Import the CSS for navigation
import Vehicles from "./Vehicles";
;

const AllListingTabbar = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  const buttonClasses = (index) =>
    `font-semibold transition ease-in-out duration-300 text-[13px] w-[100px] ${
      activeButton === index
        ? "border-b-2 border-[#cd9403] text-[#78828A] font-bold"
        : "text-[#ACB6BE]"
    }`;

  const buttons = [
    "Vehicles",
    "Real Estate",
    "Services",
    "Events",
    "Jobs",
    "Electronics",
    "Furniture",
    "Fashion",
    "Kids",
    "Sports & Hobby",
    "Outing",
    "Places",
    "Tours",
  ];

  return (
    <>
      <Swiper
        slidesPerView={7}
        navigation
        loop={false}
        modules={[Navigation]}
        className=""
      >
        {buttons.map((label, index) => (
          <SwiperSlide key={index}>
            <div className="px-10">
            <button
              className={buttonClasses(index + 1)}
              onClick={() => handleClick(index + 1)}
            >
              {label}
            </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-4">
        {activeButton === 1 && <Vehicles/>}
        {activeButton === 2 && ""}
        {activeButton === 3 && ""}
        {activeButton === 4 && ""}
        {activeButton === 5 && ""}
      </div>
    </>
  );
};

export default AllListingTabbar