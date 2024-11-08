import React from "react";
import PrivacyContent from "@/app/components/Privacy/PrivacyContent";
import BackButton from "@/app/components/BackButton";

const PrivacyPolicy = () => {
  return (
<>
      <div className="flex items-center gap-2 p-5">
        <BackButton />
        <h1 className="text-[#78828A] text-[24px] font-[500]">
          Privacy Ploicy
        </h1>
        
      </div>
      <div className=" px-[76px] py-2 ">
        <PrivacyContent />
      </div>
      </>
  );
};

export default PrivacyPolicy;
