import React from "react";
import Image from "next/image";

const DashboardCards = () => {
  const cardData = [
    {
      id: 1,
      title: "Total Listing",
      img: "/r1.png",
      to: "/Listing",
    },
    { id: 2, title: "Total Users", img: "/ads.svg", to: "/User" },
    {
      id: 3,
      title: "Total Tickets",
      img: "/Loading, Plus, Circle, Add.svg",
      to: "/Support",
    },
    {
      id: 4,
      title: "Total Businesses",
      img: "/postimg.svg",
      to: "/Business",
    },
  ];

  return (
    <div className="mt-5">
      <h1 className="text-[#78828A] text-[24px] font-[500] flex items-center">
        Dashboard
      </h1>
      <div className="grid  xl:grid-cols-4 gap-5 mt-5">
        {cardData.map((card) => (
          <div
            key={card.id}
            className=" p-6 bg-[#feefcb] border border-gray-100 rounded-lg shadow"
          >
            <div className="flex gap-5">
              <Image
                src={card.img} 
                alt="image"
                width={64} 
                height={64} 
                className="bg-[#EE9E03] p-2 rounded-full flex items-center"
              />
              <h5 className="text-center text-[16px]  font-semibold tracking-tight text-[#495057] flex items-center">
                {card.title}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCards;
