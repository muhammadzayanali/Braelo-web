import React from "react";
import Image from "next/image";
import { className} from "primereact/utils";

const ListingCard = ({
  image,
  icons,
  title,
  description,
  price,
  salary,
  toggle,
  onIconClick,
}) => {
  return (
    <div className="relative flex flex-col bg-white border border-gray-400 rounded-[24px] shadow-sm overflow-hidden p-3 w-[255px] min-h-[450px]">
      {/* Image Section with fixed height container */}
      <div className="relative h-72 w-full rounded-xl overflow-hidden">
        <img
          src={image}
          className="flex items-center justify-center"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/b6.png";
            
          }}
          alt="Card Image"
        />
      </div>

      {/* Overlay for Icons */}
      <div className="absolute top-8 right-5 flex space-x-2">
        {icons.map((icon, index) => (
          <Image
            key={index}
            src={icon}
            alt={`icon-${index}`}
            width={24}
            height={24}
            className="cursor-pointer p-1 rounded-full w-8"
            onClick={() => onIconClick(icon)}
          />
        ))}
      </div>

      {/* Text Section */}
      <div className="pt-2 flex-grow flex flex-col">
        <div className="flex justify-between items-center">
          <h2 className="text-[16px] font-[500] text-[#78828A] truncate">
            {title}
          </h2>
          {toggle && <div>{toggle}</div>}
        </div>

        {/* Conditionally render price or salary */}
        {price && (
          <p className="text-[#78828A] text-[18px] font-[700] mt-2">{price}</p>
        )}
        {salary && (
          <p className="text-[#78828A] text-[18px] font-[700] mt-2">
            {salary}/mo
          </p>
        )}

        <p className="text-[#78828A] text-[12px] font-[500] mt-2 line-clamp-3">
          {description}
        </p>

        {/* Stats Section at the bottom */}
        {/* <div className="flex gap-2 mt-auto pt-3">
          <div className="flex items-center">
            <Image src="/e1.png" alt="views" width={10} height={10} />
            <p className="text-[#9D9D9D] text-[12px] font-[300] ml-1">120 Views</p>
          </div>
          <div className="flex items-center">
            <Image src="/e2.png" alt="saves" width={12} height={10} />
            <p className="text-[#9D9D9D] text-[12px] font-[300] ml-1">100 Saves</p>
          </div>
          <div className="flex items-center">
            <Image src="/e3.png" alt="clicks" width={10} height={10} />
            <p className="text-[#9D9D9D] text-[12px] font-[300] ml-1">200 Clicks</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ListingCard;
