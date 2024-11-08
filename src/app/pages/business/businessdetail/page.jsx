"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ListingTabbar from "@/app/components/Listing/ListingTabbar";
import ChatModal from "@/app/components/ChatModal";
import EditdetailsModal from "@/app/components/Business/EditdetailsModal";
import BackButton from "@/app/components/BackButton";

const BusinessDetails = () => {
  const router = useRouter();
  const [OpeModal, setOpenModal] = useState(false);
  const [EditModal, setEditModal] = useState(false);
  const handleopen = () => setOpenModal(true);
  const handleclose = () => setOpenModal(false);
  const handleEditOpen = () => setEditModal(true);
  const handleEditClose = () => setEditModal(false);

  return (
    <>
      <div className="border-b">
        <div className="p-5">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <BackButton />
              <h1 className="text-[#78828A] text-[24px] font-[500] flex items-center">
                User Business Details
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
                  Download Export
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 border-b">
        <div className="flex justify-between mt-5">
          <div className="flex gap-2 items-center ">
            <div className="bg-[#FFCC35] px-2 py-2 rounded-full">
              <img src="/c1.png" alt="braeloLogo" className="f" />
            </div>
            <h1 className="text-[#75818D] text-[18px] font-[700] font-plus ">
              Braelo
            </h1>
          </div>
          <div className="flex gap-2">
            <img
              src="/b2.png"
              alt="button1"
              className="cursor-pointer"
              onClick={handleopen}
            />
            <img
              src="/b1.png"
              alt="button2"
              className="cursor-pointer"
              onClick={handleEditOpen}
            />
            <img src="/b3.png" alt="button3" className="cursor-pointer" />
            <ChatModal isOpen={OpeModal} onClose={handleclose} />
            <EditdetailsModal isOpen={EditModal} onClose={handleEditClose} />
          </div>
        </div>
      </div>
      <div className="p-5 border-b">
        <div className="flex gap-3">
          <div className="border border-dashed border-[#CD940380] w-[154px] h-[134px] flex justify-center p-10 rounded-lg">
            <img src="/b6.png" alt="businessImage" />
          </div>
          <div className="border border-dashed border-[#CD940380] w-[154px] h-[134px] flex justify-center p-10 rounded-lg">
            <img src="/b6.png" alt="businessImage" />
          </div>

          <div className="border border-dashed border-[#CD940380] w-[154px] h-[134px] flex justify-center p-10 rounded-lg">
            <img src="/b6.png" alt="businessImage" />
          </div>
        </div>

        <div className="mt-5">
          <h1 className="text-[16px] font-[700] font-plus text-[#75818D]">
            Bio:
            <span className="font-[400] text-[#a0a8b1] ml-1 ">
              bsnmbfmsbdfbsdfg
            </span>
          </h1>
          <h1 className="text-[16px] font-[700] font-plus text-[#75818D]">
            Description:
            <span className="font-[400] text-[#a0a8b1] ml-1 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
              <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim <br /> veniam, quis nostrud :
            </span>
          </h1>
        </div>
        <div className="mt-3">
          <button
            className="w-[200px] h-[40px] bg-[#CD9403] text-white text-center rounded-lg font-plus text-[15px]"
            onClick={() => router.push("/BusinessStats")}
          >
            View Business Stats
          </button>
        </div>
      </div>

      <div className="flex gap-[100px] mt-5 border-b p-5 ">
        <div>
          <h1 className="text-[16px] font-[700] font-plus text-[#75818D]">
            Name:
            <span className="font-[400] text-[#a0a8b1] ml-1 ">Jane Doe</span>
          </h1>
          <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
            Email:
            <span className="font-[400] text-[#a0a8b1] ml-1 mt-3">
              braelo@gmail.com
            </span>
          </h1>
          <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
            Phone Number:
            <span className="font-[400] text-[#a0a8b1] ml-1 mt-3">
              {" "}
              +552163487922
            </span>
          </h1>
          <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
            Account Status:
            <span className="font-[400] bg-[#06B64C] px-5 py-2 text-white rounded-lg ml-1 mt-3">
              Active
            </span>
          </h1>
          <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
            Email Verified Status:
            <span className="font-[400] text-[#5D86C2] ml-1  mt-3">
              Verified
            </span>
          </h1>
          <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
            Phone Verified Status:{" "}
            <span className="font-[400] text-[#C7233F] ml-1 mt-3">
              Unverified:
            </span>
          </h1>
          <div className="flex gap-1">
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-4">
              Interests:
            </h1>
            <div className="flex gap-2 mt-3 items-center">
              <button className="text-[#CD9403] font-[700] text-[12px] border-2 border-[#CD9403]  px-3 py-1 rounded-lg">
                Mechanic
              </button>
              <button className="text-[#CD9403] font-[700] text-[12px] border-2 border-[#CD9403]  px-3 py-1 rounded-lg">
                Sales
              </button>
              <button className="text-[#CD9403] font-[700] text-[12px] border-2 border-[#CD9403]  px-3 py-1 rounded-lg">
                Designer
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[16px] font-[700] font-plus text-[#75818D]">
            OTP: <span className="font-[400] text-[#a0a8b1] ml-1 ">327277</span>
          </h1>
          <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
            OTP Created At:{" "}
            <span className="font-[400] text-[#a0a8b1] ml-1 mt-3 ">
              09/19/2024
            </span>
          </h1>
          <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
            Created At:
            <span className="font-[400] text-[#a0a8b1] ml-1 mt-3">
              09/19/2024
            </span>
          </h1>
          <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
            Last Update:
            <span className="font-[400] text-[#a0a8b1] ml-1 mt-3">
              09/19/2024
            </span>
          </h1>
          <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
            Business Address:
            <span className="font-[400] text-[#a0a8b1] ml-1 mt-3">
              202, Ogba, Lagos, Nigeria
            </span>
          </h1>
          <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
            Profile Completion:
            <span className="font-[400] text-[#CD9403] ml-1 mt-3">50%</span>
          </h1>
        </div>
      </div>
      <ListingTabbar />
    </>
  );
};

export default BusinessDetails;
