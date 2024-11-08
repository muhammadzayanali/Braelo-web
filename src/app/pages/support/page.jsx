import AllTickets from "@/app/components/Support/AllTickets";
import React from "react";
import BackButton from "@/app/components/BackButton";

const Support = () => {
  return (
    <>
      <div className="p-6">
        <div className="flex items-center gap-2">
          <BackButton />
          <h1 className="text-[#78828A] text-[24px] font-[500]">
            Support Management
          </h1>
        </div>
        <AllTickets />
      </div>
    </>
  );
};

export default Support;
