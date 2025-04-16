"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { getData } from "@/app/API/method";
import ChatModal from "@/app/components/ChatModal";
import EditUserdetailModal from "@/app/components/Users/EditUserdetailModal";
import ListingTabbar from "@/app/components/Listing/ListingTabbar";
import BackButton from "@/app/components/BackButton";
import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Userdetail = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const userId = searchParams.get('id');
  
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [OpenEditModal, setEditModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

 useEffect(() => {
     // Retrieve the business data from sessionStorage
     const storedData = sessionStorage.getItem('currentUserData');
     if (storedData) {
      setUserData(JSON.parse(storedData));
     }
   }, []);

  const OpeModal = () => {
    setEditModalOpen(!isModalOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleActionSelect = (action) => {
    console.log("Selected Action:", action);
    setIsDropdownOpen(false);
  };

  // if (loading) {
  //   return (
  //     <div className="p-5">
  //       <div className="flex justify-between">
  //         <BackButton buttonStyle="bg-gray-300" iconStyle="text-gray-700" />
  //         <div className="animate-pulse">Loading user data...</div>
  //       </div>
  //     </div>
  //   );
  // }

  if (error) {
    return (
      <div className="p-5">
        <div className="flex justify-between">
          <BackButton buttonStyle="bg-gray-300" iconStyle="text-gray-700" />
          <div className="text-red-500">
            Error: {error.message}
            <button 
              onClick={() => router.back()}
              className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="p-5">
        <div className="flex justify-between">
          <BackButton buttonStyle="bg-gray-300" iconStyle="text-gray-700" />
          <div>No user data available</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="border-b">
        <div className="p-5">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <BackButton buttonStyle="bg-gray-300" iconStyle="text-gray-700" />
              <h1 className="text-[#78828A] text-[24px] font-[500]">
                User Details
              </h1>
            </div>
            <div className="relative">
              <div
                onClick={toggleDropdown}
                className="flex items-center bg-white border border-gray-300 rounded-md shadow-sm pl-10 pr-2 py-2 cursor-pointer focus:outline-none"
              >
                <Image
                  src="/images/export.png"
                  alt="export icon"
                  width={24}
                  height={24}
                  className="absolute left-3"
                />
                <span className="text-[#75818D] text-[14px] font-plus font-[400]">
                  Download
                </span>
              </div>
              {isDropdownOpen && (
                <UserDropdown onActionSelect={handleActionSelect} />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between mt-5 border-b py-2 ">
          <div>
            <h1 className="text-[18px] font-[700] text-[#75818D]">
              {userData.username || "User Name"}
            </h1>
          </div>
          <div className="flex gap-2">
            <Image
              src="/b2.png"
              alt="button1"
              className="cursor-pointer"
              onClick={() => setModalOpen(true)}
              width={50}
              height={25}
            />
            <Image
              src="/b1.png"
              alt="button2"
              className="cursor-pointer"
              onClick={OpeModal}
              width={50}
              height={25}
            />
            <Image
              src="/b3.png"
              alt="button3"
              className="cursor-pointer"
              onClick={toggleDropdown}
              width={25}
              height={25}
            />
          </div>
          <ChatModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
          <EditUserdetailModal
            isOpen={OpenEditModal}
            OpeModal={OpeModal}
            onClose={() => setEditModalOpen(false)}
            userData={userData}
          />
        </div>

        <div className="flex gap-[100px] mt-5 border-b py-5">
          <div>
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D]">
              Name:
              <span className="font-[400] text-[#a0a8b1] ml-1 ">
                {userData.name || "N/A"}
              </span>
            </h1>
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
              Email:
              <span className="font-[400] text-[#a0a8b1] ml-1 mt-3">
                {userData.email || "N/A"}
              </span>
            </h1>
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
              Phone Number:
              <span className="font-[400] text-[#a0a8b1] ml-1 mt-3">
                {userData.phone_number || "N/A"}
              </span>
            </h1>
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
              Account Status:
              <span
                className={`font-[400] px-5 py-2 text-white rounded-lg ml-1 mt-3 ${
                  userData.is_active ? "bg-[#06B64C]" : "bg-[#C7233F]"
                }`}
              >
                {userData.is_active ? "Active" : "Inactive"}
              </span>
            </h1>
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
              Email Verified Status:
              <span
                className={`font-[400] ml-1 mt-3 ${
                  userData.is_email_verified
                    ? "text-[#5D86C2]"
                    : "text-[#C7233F]"
                }`}
              >
                {userData.is_email_verified ? "Verified" : "Unverified"}
              </span>
            </h1>
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
              Phone Verified Status:{" "}
              <span
                className={`font-[400] ml-1 mt-3 ${
                  userData.is_phone_verified
                    ? "text-[#5D86C2]"
                    : "text-[#C7233F]"
                }`}
              >
                {userData.is_phone_verified ? "Verified" : "Unverified"}
              </span>
            </h1>
          </div>
          <div>
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D]">
              OTP:{" "}
              <span className="font-[400] text-[#a0a8b1] ml-1 ">
                {userData.otp || "N/A"}
              </span>
            </h1>
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
              OTP Created At:{" "}
              <span className="font-[400] text-[#a0a8b1] ml-1 mt-3 ">
                {userData.otp_created_at || "N/A"}
              </span>
            </h1>
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
              Created At:
              <span className="font-[400] text-[#a0a8b1] ml-1 mt-3">
                {new Date(userData.created_at).toLocaleString() || "N/A"}
              </span>
            </h1>
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
              Last Update:
              <span className="font-[400] text-[#a0a8b1] ml-1 mt-3">
                {new Date(userData.updated_at).toLocaleString() || "N/A"}
              </span>
            </h1>
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
              Deleted At:
              <span className="font-[400] text-[#a0a8b1] ml-1 mt-3 ">
                {userData.deleted_at ? new Date(userData.deleted_at).toLocaleString() : "N/A"}
              </span>
            </h1>
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
              Device Token:{" "}
              <span className="font-[400] text-[#a0a8b1] ml-1 mt-3">
                {userData.device_token || "N/A"}
              </span>
            </h1>
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
              Role:
              <span className="font-[400] text-[#a0a8b1] ml-1">
                {userData.role === "admin" ? "Admin" : "User"}
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div>
        <ListingTabbar userId={userData.id} />
      </div>
    </div>
  );
};

export default Userdetail;