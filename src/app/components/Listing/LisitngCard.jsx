import React from "react";

const ListingCard = ({
  image,
  icons,
  title,
  description,
  price,
  toggle,
  onIconClick,
}) => {
  return (
    <div className="relative bg-white border border-gray-400 rounded-[24px] shadow-sm overflow-hidden p-3">
      {/* Image Section */}
      <img src={image} alt={title} className="w-full  object-cover rounded" />

      {/* Overlay for Icons */}
      <div className="absolute top-8 right-5 flex space-x-2">
        {icons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt=""
            className="w-6 h-6 cursor-pointer"
            onClick={() => onIconClick(icon)} // Trigger the onIconClick with the icon path
          />
        ))}
      </div>

      {/* Text Section */}
      <div className="pt-2">
        <div className="flex justify-between">
          <h2 className="text-[16px] font-[500]  text-[#78828A]">
            {title}
          </h2>
        </div>
        <div>{toggle}</div>
        <p className="text-[#78828A] text-[18px]  font-[700] mt-2">
          {price}
        </p>
        <p className="text-[#78828A] text-[12px]  font-[500] mt-2">
          {description}
        </p>
      </div>
      <div className=" flex gap-4 mt-3">
        <div className="flex items-center">
          <img src="/e1.png" alt="views" />
          <p className="text-[#9D9D9D] text-[12px]  font-[300]">
            1200Views
          </p>
        </div>
        <div className="flex items-center">
          <img src="/e2.png" alt="saves" />
          <p className="text-[#9D9D9D] text-[12px]  font-[300]">
            1000Saves
          </p>
        </div>
        <div className="flex items-center">
          <img src="/e3.png" alt="clicks" />
          <p className="text-[#9D9D9D] text-[12px]  font-[300] ">
            2000Clicks
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
