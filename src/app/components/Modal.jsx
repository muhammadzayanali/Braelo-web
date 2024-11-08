import React from "react";
import Image from "next/image";

const Modal = ({ isOpen, closeModal, imageSrc, text, label1, label2 }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50 bg-opacity-20 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg ">
        {/* Close button */}
        <div className="flex justify-end mb-4"></div>

        {/* Image */}
        <div className="flex justify-center mb-4">
          import Image from 'next/image';
          <Image
            src={imageSrc}
            alt="Modal Image"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="text-center mb-4">
          <p className="text-[#232F30] font-[700] text-[20px]  w-[300px] ">
            {text}
          </p>
        </div>

        {/* Button */}
        <div className="flex flex-col justify-center mt-5">
          <button className="bg-[#78828A] text-white px-4 py-3 rounded-lg text-[18px] font-[600]  ">
            {label1}
          </button>
          <button
            className="text-[#ACB6BE] text-[18px] font-[600] "
            onClick={closeModal}
          >
            {label2}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
