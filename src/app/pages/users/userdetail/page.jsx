"use client";
import React, { useState } from "react";
import ChatModal from "@/app/components/ChatModal";
import EditUserdetailModal from "@/app/components/Users/EditUserdetailModal";
import ListingTabbar from "@/app/components/Listing/ListingTabbar";
import BackButton from "@/app/components/BackButton";

const Userdetail = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [OpenEditModal, setEditModalOpen] = useState(false);
  const OpeModal = () => {
    setEditModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className="border-b">
        <div className="p-5">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <BackButton />
              <h1 className="text-[#78828A] text-[24px] font-[500]">
                User Details
              </h1>
            </div>
            <div className="relative">
              <div className="flex items-center bg-white border border-gray-300 rounded-md shadow-sm pl-10 pr-2 py-2 cursor-pointer focus:outline-none">
                <img
                  src="/images/export.png"
                  alt="export icon"
                  className="absolute left-3 w-6 h-6"
                />
                <span className="text-[#75818D] text-[14px] font-plus font-[400]">
                  Download
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between mt-5 border-b py-2 ">
          <div>
            <h1 className="text-[18px] font-[700] text-[#75818D]">Jane Deo</h1>
          </div>

          <div className="flex gap-2">
            <img
              src="/b2.png"
              alt="button1"
              className="cursor-pointer"
              onClick={() => setModalOpen(true)}
            />
            <img
              src="/b1.png"
              alt="button2"
              className="cursor-pointer"
              onClick={OpeModal}
            />
            <img src="/b3.png" alt="button3" className="cursor-pointer" />
          </div>
          <ChatModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
          <EditUserdetailModal
            isOpen={OpenEditModal}
            OpeModal={OpeModal}
            onClose={() => setEditModalOpen(false)}
          />
        </div>

        <div className="flex gap-[100px] mt-5 border-b py-5">
          <div>
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D]">
              Name:
              <span className="font-[400] text-[#a0a8b1] ml-1">Jane Doe</span>
            </h1>
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
              Email:
              <span className="font-[400] text-[#a0a8b1] ml-1">
                braelo@gmail.com
              </span>
            </h1>
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
              Phone Number:
              <span className="font-[400] text-[#a0a8b1] ml-1">
                +552163487922
              </span>
            </h1>
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
              Account Status:
              <span className="font-[400] bg-[#C7233F] px-5 py-2 text-white rounded-lg ml-1">
                Deleted
              </span>
            </h1>
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
              Email Verified Status:
              <span className="font-[400] text-[#5D86C2] ml-1">Verified</span>
            </h1>
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
              Phone Verified Status:
              <span className="font-[400] text-[#C7233F] ml-1">Unverified</span>
            </h1>
            <div className="flex gap-1">
              <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-4">
                Interests:
              </h1>
              <div className="flex gap-2 mt-3 items-center">
                <button className="text-[#CD9403] font-[700] text-[12px] border-2 border-[#CD9403] px-3 py-1 rounded-lg">
                  Mechanic
                </button>
                <button className="text-[#CD9403] font-[700] text-[12px] border-2 border-[#CD9403] px-3 py-1 rounded-lg">
                  Sales
                </button>
                <button className="text-[#CD9403] font-[700] text-[12px] border-2 border-[#CD9403] px-3 py-1 rounded-lg">
                  Designer
                </button>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D]">
              OTP:
              <span className="font-[400] text-[#a0a8b1] ml-1">327277</span>
            </h1>
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
              OTP Created At:
              <span className="font-[400] text-[#a0a8b1] ml-1">09/19/2024</span>
            </h1>
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
              Created At:
              <span className="font-[400] text-[#a0a8b1] ml-1">09/19/2024</span>
            </h1>
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
              Last Update:
              <span className="font-[400] text-[#a0a8b1] ml-1">09/19/2024</span>
            </h1>
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
              Deleted At:
              <span className="font-[400] text-[#a0a8b1] ml-1">09/19/2024</span>
            </h1>
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
              Device Token:
              <span className="font-[400] text-[#a0a8b1] ml-1">
                03df25c845d460bcdad780
              </span>
            </h1>
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
              Role:
              <span className="font-[400] text-[#a0a8b1] ml-1">User</span>
            </h1>
          </div>
        </div>
      </div>

      <div></div>
      <ListingTabbar />
    </div>
  );
};

export default Userdetail;
