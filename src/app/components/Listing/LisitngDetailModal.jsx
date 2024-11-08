// Modal.js
import React from "react";

const LisitngDetailModal = ({ isOpen, closeModal, title, children }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 overflow-auto">
      <div className="bg-white rounded-lg p-5  shadow-lg relative mt-[200px] ">
        {/* Close Button */}
        <button
          className="absolute right-2 top-[100px] text-gray-500 hover:text-gray-700"
          onClick={closeModal}
        >
          &times; {/* Close icon */}
        </button>

        {/* Modal Title */}
        <div>
          <img src="/img1.png" alt="Lisitng-image" className="w-[100%] mt-20"></img>
          <div>
            <h1 className="text-[#101828] text-[30px] font-[600] w-56 ">
              Land Crouser Full option
            </h1>
            <p className="text-[#667085] text-[20px] font-[300] w-[300px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation ...
            </p>
            <div>
              <h1 className="text-[16px] font-[700]  text-[#75818D]">
                Owner Name:{" "}
                <span className="font-[400] text-[#a0a8b1] ml-1 ">327277</span>
              </h1>
              <h1 className="text-[16px] font-[700]  text-[#75818D] mt-3">
                Location:{" "}
                <span className="font-[400] text-[#a0a8b1] ml-1 mt-3 ">
                  09/19/2024
                </span>
              </h1>
              <h1 className="text-[16px] font-[700]  text-[#75818D] mt-3">
                Category:
                <span className="font-[400] text-[#a0a8b1] ml-1 mt-3">
                  09/19/2024
                </span>
              </h1>
              <h1 className="text-[16px] font-[700]  text-[#75818D] mt-3">
                Email
                <span className="font-[400] text-[#a0a8b1] ml-1 mt-3">
                  09/19/2024
                </span>
              </h1>
              <h1 className="text-[16px] font-[700]  text-[#75818D] mt-3">
                Phone Number
                <span className="font-[400] text-[#a0a8b1] ml-1 mt-3 ">
                  09/19/2024
                </span>
              </h1>
              <h1 className="text-[16px] font-[700]  text-[#75818D] mt-3">
                Email verified status
                <span className="font-[400] text-[#a0a8b1] ml-1 mt-3">
                  {" "}
                  User
                </span>
              </h1>
              <h1 className="text-[16px] font-[700]  text-[#75818D] mt-3">
                Phone verified status
                <span className="font-[400] text-[#a0a8b1] ml-1 mt-3">
                  {" "}
                  User
                </span>
              </h1>
              <h1 className="text-[16px] font-[700]  text-[#75818D] mt-3">
                Date Created
                <span className="font-[400] text-[#a0a8b1] ml-1 mt-3">
                  {" "}
                  User
                </span>
              </h1>
              <h1 className="text-[16px] font-[700]  text-[#75818D] mt-3">
                Last Updated
                <span className="font-[400] text-[#a0a8b1] ml-1 mt-3">
                  {" "}
                  User
                </span>
              </h1>
              <h1 className="text-[16px] font-[700]  text-[#75818D] mt-3">
                Lisitng status
                <span className="font-[400] text-[#a0a8b1] ml-1 mt-3">
                  {" "}
                  User
                </span>
              </h1>
            </div>
          </div>
        </div>
        {/* Modal Content (children) */}
        <div className="mb-4">{children}</div>
      </div>
    </div>
  );
};

export default LisitngDetailModal;
