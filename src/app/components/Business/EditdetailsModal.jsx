import React from "react";
import { FaTimes } from "react-icons/fa";

const EditdetailsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="p-5 bg-white shadow-lg rounded-md h-screen overflow-y-auto sidebar-scroll">
        <div className="flex justify-between items-center">
          <h2 className="text-[#232F30] text-[20px]  font-bold">
            Edit Info
          </h2>
          <button onClick={onClose}>
            <FaTimes className="text-gray-600" />
          </button>
        </div>
        <div>
          <div className="p-5">
            <form>
              <label
                htmlFor="name"
                className="text-[#78828A] text-[16px] font-[600] "
              >
                Business Name
              </label>

              <div>
                <input
                  id="name"
                  placeholder="Enter your name"
                  className="border p-2 rounded-lg w-full"
                />
              </div>

              <div className="flex gap-4 mt-5">
                <div className="flex-1">
                  <label
                    htmlFor="address"
                    className="text-[#78828A] text-[16px] font-[600] "
                  >
                    Business Address
                  </label>
                  <input
                    id="address"
                    placeholder="Enter your Address"
                    className="border p-2 rounded-lg w-full mt-2"
                  />
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="number"
                    className="text-[#78828A] text-[16px] font-[600] "
                  >
                    Business Number
                  </label>
                  <input
                    id="number"
                    placeholder="Enter your Number"
                    className="border p-2 rounded-lg w-full mt-2"
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-5">
                <div className="flex-1">
                  <label
                    htmlFor="address"
                    className="text-[#78828A] text-[16px] font-[600] "
                  >
                    Business Email
                  </label>
                  <input
                    id="Email"
                    placeholder="Enter your  Business Email"
                    className="border p-2 rounded-lg w-full mt-2"
                  />
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="number"
                    className="text-[#78828A] text-[16px] font-[600] "
                  >
                    Business Number
                  </label>
                  <input
                    id="Business Number"
                    placeholder="Enter your Business Number"
                    className="border p-2 rounded-lg w-full mt-2"
                  />
                </div>
              </div>
              <div className="flex-1">
                <label
                  htmlFor="address"
                  className="text-[#78828A] text-[16px] font-[600] "
                >
                  Business Website
                </label>
                <input
                  id="Website"
                  placeholder="Enter"
                  className="border p-2 rounded-lg w-full mt-2"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="description"
                  className="text-[#78828A] text-[16px] font-[600] "
                >
                  Business Goals
                </label>
                <textarea
                  id="description"
                  placeholder="Lorem Ipsum is simply dummy text of thedd printing and typesetting industry."
                  className="border p-2 rounded-lg w-full h-[100px]"
                />
              </div>

              <div>
                <h1 className="text-[#78828A] text-[16px] font-[600] ">
                  Owner Details
                </h1>
                <div className="flex gap-4 mt-5">
                  <div className="flex-1">
                    <label
                      htmlFor="address"
                      className="text-[#78828A] text-[16px] font-[600] "
                    >
                      Name
                    </label>
                    <input
                      id="Name"
                      placeholder="Enter your Name"
                      className="border p-2 rounded-lg w-full mt-2"
                    />
                  </div>

                  <div className="flex-1">
                    <label
                      htmlFor="number"
                      className="text-[#78828A] text-[16px] font-[600] "
                    >
                      Number
                    </label>
                    <input
                      id="Number"
                      placeholder="Enter your Number"
                      className="border p-2 rounded-lg w-full mt-2"
                    />
                  </div>
                </div>
                <div className="flex gap-4 mt-5">
                  <div className="flex-1">
                    <label
                      htmlFor="address"
                      className="text-[#78828A] text-[16px] font-[600] "
                    >
                      Email
                    </label>
                    <input
                      id="Email"
                      placeholder="Enter your  Email"
                      className="border p-2 rounded-lg w-full mt-2"
                    />
                  </div>

                  <div className="flex-1">
                    <label
                      htmlFor="number"
                      className="text-[#78828A] text-[16px] font-[600] "
                    >
                      Address
                    </label>
                    <input
                      id="Address"
                      placeholder="Enter your Address"
                      className="border p-2 rounded-lg w-full mt-2"
                    />
                  </div>
                </div>
                <div className="flex justify-start gap-2 mt-8">
                  <button
                    className="w-[150px] p-2 bg-[#e7e8ea] text-[#868E96] rounded-lg "
                    onClick={onClose}
                  >
                    cancel
                  </button>
                  <button className="w-[150px] p-2 bg-[#CD9403] text-white rounded-lg ">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditdetailsModal;
