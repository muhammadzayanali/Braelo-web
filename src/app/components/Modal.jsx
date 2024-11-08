import React from "react";
import Image from "next/image"; // Import Image outside of JSX

const Modal = ({ isOpen, closeModal, imageSrc, text, label1, label2 }) => {
  // If the modal is not open, return null to prevent rendering
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50 bg-opacity-20 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        {/* Close button section */}
        <div className="flex justify-end mb-4">
          {/* Add a close button if needed */}
        </div>

        {/* Image Section */}
        <div className="flex justify-center mb-4">
          <Image
            src={imageSrc} // Image source
            alt="Modal Image" // Alt text
            width={128} // Width of the image
            height={128} // Height of the image
            className="object-cover" // Tailwind class for styling
          />
        </div>

        {/* Text Section */}
        <div className="text-center mb-4">
          <p className="text-[#232F30] font-[700] text-[20px] w-[300px]">
            {text}
          </p>
        </div>

        {/* Button Section */}
        <div className="flex flex-col justify-center mt-5">
          <button className="bg-[#78828A] text-white px-4 py-3 rounded-lg text-[18px] font-[600]">
            {label1}
          </button>
          <button
            className="text-[#ACB6BE] text-[18px] font-[600]"
            onClick={closeModal} // Close modal on click
          >
            {label2}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
