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
    `font-semibold transition ease-in-out duration-300 text-[14px]  ${
      activeButton === index
        ? "border-b-2 border-[#868E96] text-[#78828A] font-[600]"
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
        slidesPerView={10}
        spaceBetween={10}
        navigation
        loop={false}
        modules={[Navigation]}
        className="px-10"
      >
        {buttons.map((label, index) => (
          <SwiperSlide key={index}>
            <button
              className={buttonClasses(index + 1)}
              onClick={() => handleClick(index + 1)}
            >
              {label}
            </button>
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