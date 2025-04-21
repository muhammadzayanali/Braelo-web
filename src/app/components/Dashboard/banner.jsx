import React from "react";
import Image from "next/image";

const Banner= () => {
  return (
    <div>
      <div className=" ">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 relative">
            <div className="w-full rounded-[22px] bg-[#EE9E03] flex items-center relative px-[10px] ">
              <div to="/edit" className="absolute top-4 right-4">
                <button
                  type="button"
                  className="bg-[#F5C12B] border-none rounded-[22px] w-full text-[#634802] flex items-center px-8 py-2"
                >
                  <img
                    className=""
                    src="/media-library-folder.1.svg"
                    alt="edit btn-logo"
                  />
                  <span className="mt-1 ml-2 font-semibold">Edit</span>
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center">
                <div className="flex flex-col items-start w-1/3 mt-5 ">
                  <p className="mb-2 text-white text-[25px] w-[300px]">
                    Advertise your company on Braelo!
                  </p>
                  <p className="text-white w-[150px]">
                    Check out our plans and boost your sales!
                  </p>
                </div>
                <div className="flex-1 flex justify-center mt-6 ">
                  <img
                    src="/image.svg"
                    alt="Promotional Image"
                    className="max-w-full max-h-[200px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
