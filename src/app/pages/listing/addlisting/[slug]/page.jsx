"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import React from "react";
import BackButton from "@/app/components/BackButton";

const CATEGORIES = {
  vehicles: [
    "Cars",
    "Motorcycle",
    "Truck",
    "Bike",
    "Boat",
    "Van",
    "Scooter",
    "Parts and Accessories",
    "Rentals",
  ],
  realestate: [
    "House",
    "Apartment",
    "Land",
    "Mobile Home",
    "Commercial",
    "Bedroom",
    "Suite",
    "Studio",
    "Vacation Home",
    "Basement",
  ],
  services: [
    "Cleaning",
    "Handyman",
    "Drivers",
    "Landscaping",
    "Consultancy",
    "Home Automation",
    "Classes & Courses",
    "Personal Training",
    "Construction",
    "Technology",
    "Immigration and Visa",
    "Event Services",
    "Movers & Packers",
    "Farm & Fresh Food",
    "Video & Photography",
    "Interior Design",
    "Homemade Food",
    "Insurance Services",
    "Home Care (Health)",
    "Catering",
    "Chef",
    "Influencer",
    "AC Services",
    "Personal Trainer",
    "Cake",
    "Finger Food",
    "Buffet",
    "Transport Services",
  ],
  events: ["Networking Events", "Concert", "Festival"],
  jobs: ["Full Time", "Part Time", "Freelancer", "Helper", "Home Office"],
  electronics: [
    "Smartphones",
    "Computers",
    "Appliances",
    "Games",
    "Services & Parts",
  ],
  furniture: ["Couch", "Tables", "Chairs", "Beds", "Custom Furniture"],
  fashion: ["Clothes", "Shoes", "Accessories", "Beauty Products", "Jewelry"],
  kids: [
    "Health",
    "Toys",
    "Transport",
    "Accessories",
    "Classes",
    "Babysitter",
    "Daycare",
    "School Offices",
    "Afterschool Program",
    "Activities",
  ],
  "sports & hobby": [
    "Sports Equipment",
    "Musical Instruments",
    "Collected Items",
    "Games",
    "Camping",
    "Outdoor Activities",
  ],
};

const Subcategories = () => {
  const { slug } = useParams();
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    if (slug) {
      const filteredSubcategories = CATEGORIES[slug.toLowerCase()] || [];
      setSubcategories(filteredSubcategories);
    }
  }, [slug]);

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex items-center gap-2 mb-6">
        <BackButton />
        <h1 className="text-[#78828A] text-[24px] font-[500] capitalize">
          Subcategories for {slug}
        </h1>
      </div>

      {/* Subcategories Grid */}
      <div className="grid grid-cols-5 gap-5">
        {subcategories.length > 0 ? (
          subcategories.map((subcategory, index) => {
            const formattedSubcategory = subcategory.replace(/\s+/g, ""); // Remove spaces only in the URL part
            return (
              <Link
                key={formattedSubcategory} // Use formatted subcategory for the key
                href={`/pages/listing/addlisting/${slug}/${formattedSubcategory.toLowerCase()}`}
              >
                <div className="bg-[#ffcc35] w-[100%] h-[50px] px-1 hover:bg-gray-300 transition-all duration-300 rounded-md flex items-center">
                  <span className="text-white hover:text-black flex items-center space-x-2 text-md">
                    <span>{subcategory}</span> {/* Display with spaces */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })
        ) : (
          <div className="col-span-5 text-gray-500">
            No subcategories found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Subcategories;
