"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi"; // Import the left arrow icon

const BackButton = ({
  onBack,
  iconSize = 20,
  buttonStyle = "",
  iconStyle = "",
}) => {
  const router = useRouter();

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    } else {
      router.back(); // Use router.back() to navigate to the previous page
    }
  };

  return (
    <button
      className={`bg-[#d8b039] rounded-full p-2 flex items-center gap-2 ${buttonStyle}`}
      onClick={handleBackClick}
    >
      <FiArrowLeft className={`text-white ${iconStyle}`} size={iconSize} />
    </button>
  );
};

export default BackButton;
