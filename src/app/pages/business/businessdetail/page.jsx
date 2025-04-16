"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ListingTabbar from "@/app/components/Listing/ListingTabbar";
import ChatModal from "@/app/components/ChatModal";
import EditdetailsModal from "@/app/components/Business/EditdetailsModal";
import BackButton from "@/app/components/BackButton";
import Image from "next/image";

const BusinessDetails = () => {
  const router = useRouter();
  const [OpeModal, setOpenModal] = useState(false);
  const [EditModal, setEditModal] = useState(false);
  const [businessData, setBusinessData] = useState(null);

  useEffect(() => {
    // Retrieve the business data from sessionStorage
    const storedData = sessionStorage.getItem('currentBusinessData');
    if (storedData) {
      setBusinessData(JSON.parse(storedData));
    }
  }, []);

  const handleopen = () => setOpenModal(true);
  const handleclose = () => setOpenModal(false);
  const handleEditOpen = () => setEditModal(true);
  const handleEditClose = () => setEditModal(false);

  if (!businessData) {
    return <div className="p-5">Loading business details...</div>;
  }

  return (
    <>
      <div className="border-b">
        <div className="p-5">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <BackButton />
              <h1 className="text-[#78828A] text-[24px] font-[500] flex items-center">
                {businessData.BusinessName} Details
              </h1>
            </div>
            <div className="relative">
              <div className="flex items-center bg-white border border-gray-300 rounded-md shadow-sm pl-10 pr-2 py-2 cursor-pointer focus:outline-none">
                <Image
                  src="/images/export.png"
                  alt="export icon"
                  width={24}
                  height={24}
                  className="absolute left-3"
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
              {businessData.business_logo ? (
                <img 
                  src={businessData.business_logo} 
                  alt="business logo"
                  width={20}
                  height={20}
                  className="rounded-full"
                  onError={(e) => {
                    e.target.src = '/c1.png';
                  }}
                />
              ) : (
                <Image
                  src="/c1.png"
                  alt="braeloLogo"
                  width={20}
                  height={20}
                />
              )}
            </div>
            <h1 className="text-[#75818D] text-[18px] font-[700] font-plus ">
              {businessData.BusinessName}
            </h1>
          </div>
          <div className="flex gap-2">
            <Image
              src="/b2.png"
              alt="button1"
              className="cursor-pointer"
              onClick={handleopen}
              width={50}
              height={25}
            />
            <Image
              src="/b1.png"
              alt="button2"
              className="cursor-pointer"
              onClick={handleEditOpen}
              width={50}
              height={25}
            />
            <Image
              src="/b3.png"
              alt="button3"
              className="cursor-pointer"
              width={25}
              height={25}
            />
            <ChatModal isOpen={OpeModal} onClose={handleclose} />
            <EditdetailsModal isOpen={EditModal} onClose={handleEditClose} />
          </div>
        </div>
      </div>
      <div className="p-5 border-b">
        <div className="flex gap-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border border-dashed border-[#CD940380] w-[154px] h-[134px] flex justify-center p-10 rounded-lg">
              {businessData.business_logo ? (
                <img 
                  src={businessData.business_logo} 
                  alt="business image"
                  width={50}
                  height={50}
                  onError={(e) => {
                    e.target.src = '/b6.png';
                  }}
                />
              ) : (
                <Image
                  src="/b6.png"
                  alt="businessImage"
                  width={50}
                  height={50}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-5">
          <h1 className="text-[16px] font-[700] font-plus text-[#75818D]">
            Bio:
            <span className="font-[400] text-[#a0a8b1] ml-1 ">
              {businessData.Bio || 'No bio available'}
            </span>
          </h1>
          <h1 className="text-[16px] font-[700] font-plus text-[#75818D]">
            Description:
            <span className="font-[400] text-[#a0a8b1] ml-1 ">
              {businessData.Description || 'No description available'}
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
            <span className="font-[400] text-[#a0a8b1] ml-1 ">{businessData.BusinessName}</span>
          </h1>
          <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
            Email:
            <span className="font-[400] text-[#a0a8b1] ml-1 mt-3">
              {businessData.Email}
            </span>
          </h1>
          <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
            Phone Number:
            <span className="font-[400] text-[#a0a8b1] ml-1 mt-3">
              {businessData["Phone Number"]}
            </span>
          </h1>
          <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
            Account Status:
            <span className={`font-[400] px-5 py-2 text-white rounded-lg ml-1 mt-3 ${
              businessData.Status === "Active" ? "bg-[#06B64C]" : "bg-[#C7233F]"
            }`}>
              {businessData.Status}
            </span>
          </h1>
          <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
            Email Verified Status:
            <span className="font-[400] text-[#5D86C2] ml-1 mt-3">
              Verified
            </span>
          </h1>
          <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
            Phone Verified Status:{" "}
            <span className="font-[400] text-[#C7233F] ml-1 mt-3">
              Unverified
            </span>
          </h1>
          <div className="flex gap-1">
            <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-4">
              Interests:
            </h1>
            <div className="flex gap-2 mt-3 items-center">
              {businessData.BusinessType && (
                <button className="text-[#CD9403] font-[700] text-[12px] border-2 border-[#CD9403] px-3 py-1 rounded-lg">
                  {businessData.BusinessType}
                </button>
              )}
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[16px] font-[700] font-plus text-[#75818D]">
            Created At:
            <span className="font-[400] text-[#a0a8b1] ml-1">
              {businessData["Date Created"]}
            </span>
          </h1>
          <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
            Last Update:
            <span className="font-[400] text-[#a0a8b1] ml-1 mt-3">
              {businessData["Last Update"]}
            </span>
          </h1>
          <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
            Business Address:
            <span className="font-[400] text-[#a0a8b1] ml-1 mt-3">
              {businessData.Coordinates || 'Address not available'}
            </span>
          </h1>
          <h1 className="text-[16px] font-[700] font-plus text-[#75818D] mt-3">
            Website:
            <span className="font-[400] text-[#a0a8b1] ml-1 mt-3">
              {businessData.website || 'No website'}
            </span>
          </h1>
        </div>
      </div>
      <ListingTabbar />
    </>
  );
};

export default BusinessDetails;