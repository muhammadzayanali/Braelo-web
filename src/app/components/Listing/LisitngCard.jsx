import React from "react";
import Image from "next/image";

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
      <Image
        src={image} // Dynamic image source
        alt={title} // Alt text for the image
        width={400} // Set the width of the image
        height={300} // Set the height of the image
        className="w-full object-cover rounded" // Tailwind CSS classes for styling
      />
      {/* Overlay for Icons */}
      <div className="absolute top-8 right-5 flex space-x-2">
        {icons.map((icon, index) => (
          <Image
            key={index}
            src={icon}
            alt="icon"
            width={24}
            height={24}
            className="cursor-pointer"
            onClick={() => onIconClick(icon)} // Triggering the onIconClick function
          />
        ))}
      </div>

      {/* Text Section */}
      <div className="pt-2">
        <div className="flex justify-between">
          <h2 className="text-[16px] font-[500] text-[#78828A]">{title}</h2>
        </div>
        <div>{toggle}</div>
        <p className="text-[#78828A] text-[18px] font-[700] mt-2">{price}</p>
        <p className="text-[#78828A] text-[12px] font-[500] mt-2">
          {description}
        </p>
      </div>

      {/* Stats Section */}
      <div className="flex gap-2  mt-3">
        <div className="flex items-center w-[120px]">
          <Image src="/e1.png" alt="views" width={10} height={10} />
          <p className="text-[#9D9D9D] text-[12px] font-[300]">120 Views</p>
        </div>
        <div className="flex items-center w-[120px]">
          <Image src="/e2.png" alt="saves" width={10} height={10} />
          <p className="text-[#9D9D9D] text-[12px] font-[300]">100 Saves</p>
        </div>
        <div className="flex items-center w-[120px]">
          <Image src="/e3.png" alt="clicks" width={10} height={10} />
          <p className="text-[#9D9D9D] text-[12px] font-[300]">200 Clicks</p>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
