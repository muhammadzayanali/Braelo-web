// pages/listing/addlisting/[slug]/page.jsx (Subcategories Page)
"use client";
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import BackButton from "@/app/components/BackButton";

const CATEGORIES = {
  vehicles: [
    {
      name: "Cars",
      subcategory: "Cars",
      endpoint: "vehicle",
      category: "Vehicles",
    },
    {
      name: "Motorcycle",
      subcategory: "Motorcycle",
      endpoint: "vehicle",
      category: "Vehicles",
    },
    {
      name: "Truck",
      subcategory: "Truck",
      endpoint: "vehicle",
      category: "Vehicles",
    },
    {
      name: "Bike",
      subcategory: "Bike",
      endpoint: "vehicle",
      category: "Vehicles",
    },
    {
      name: "Boat",
      subcategory: "Boat",
      endpoint: "vehicle",
      category: "Vehicles",
    },
    { name: "Van", subcategory: "Van", endpoint: "vehicle", category: "Vehicles" },
    {
      name: "Scooter",
      subcategory: "Scooter",
      endpoint: "vehicle",
      category: "Vehicles",
    },
    {
      name: "partsandaccessories",
      subcategory: "Parts and Accessories",
      endpoint: "vehicle",
      category: "Vehicles",
    },
    {
      name: "rentals",
      subcategory: "Rentals",
      endpoint: "vehicle",
      category: "Vehicles",
    },
  ],
  realestate: [
    {
      name: "House",
      subcategory: "House",
      endpoint: "realestate",
      category: "Real Estate",
    },
    {
      name: "Apartment",
      subcategory: "Apartment",
      endpoint: "realestate",
      category: "Real Estate",
    },
    {
      name: "Land",
      subcategory: "Land",
      endpoint: "realestate",
      category: "Real Estate",
    },
    {
      name: "mobilehome",
      subcategory: "Mobile Home",
      endpoint: "realestate",
      category: "Real Estate",
    },
    {
      name: "commercial",
      subcategory: "Commercial",
      endpoint: "realestate",
      category: "Real Estate",
    },
    {
      name: "bedroom",
      subcategory: "Bedroom",
      endpoint: "realestate",
      category: "Real Estate",
    },
    {
      name: "suite",
      subcategory: "Suite",
      endpoint: "realestate",
      category: "Real Estate",
    },
    {
      name: "studio",
      subcategory: "Studio",
      endpoint: "realestate",
      category: "Real Estate",
    },
    {
      name: "vacationhome",
      subcategory: "Vacation Home",
      endpoint: "realestate",
      category: "Real Estate",
    },
    {
      name: "basement",
      subcategory: "Basement",
      endpoint: "realestate",
      category: "Real Estate",
    },
  ],
  events: [
    {
      name: "networkingevents",
      subcategory: "Networking Events",
      endpoint: "events",
      category: "Events",
    },
    {
      name: "concert",
      subcategory: "Concert",
      endpoint: "events",
      category: "Events",
    },
    {
      name: "festival",
      subcategory: "Festival",
      endpoint: "events",
      category: "Events",
    },
  ],
  jobs: [
    { name: "fulltime", subcategory: "Full Time", endpoint: "jobs", category: "Jobs" },
    { name: "parttime", subcategory: "Part Time", endpoint: "jobs", category: "Jobs" },
    { name: "freelancer", subcategory: "Freelancer", endpoint: "jobs", category: "Jobs" },
    { name: "helper", subcategory: "Helper", endpoint: "jobs", category: "Jobs" },
    {
      name: "homeoffice",
      subcategory: "Home Office",
      endpoint: "jobs",
      category: "Jobs",
    },
  ],
  electronics: [
    {
      name: "smartphones",
      subcategory: "Smartphones",
      endpoint: "electronics",
      category: "Electronics",
    },
    {
      name: "computers",
      subcategory: "Computers",
      endpoint: "electronics",
      category: "Electronics",
    },
    {
      name: "appliances",
      subcategory: "Appliances",
      endpoint: "electronics",
      category: "Electronics",
    },
    {
      name: "games",
      subcategory: "Games",
      endpoint: "electronics",
      category: "Electronics",
    },
    {
      name: "servicesandparts",
      subcategory: "Services and Parts",
      endpoint: "electronics",
      category: "Electronics",
    },
  ],
  furniture: [
    {
      name: "couch",
      subcategory: "Couch",
      endpoint: "furniture",
      category: "Furniture",
    },
    {
      name: "tables",
      subcategory: "Tables",
      endpoint: "furniture",
      category: "Furniture",
    },
    {
      name: "chairs",
      subcategory: "Chairs",
      endpoint: "furniture",
      category: "Furniture",
    },
    {
      name: "beds",
      subcategory: "Beds",
      endpoint: "furniture",
      category: "Furniture",
    },
    {
      name: "customfurniture",
      subcategory: "Custom Furniture",
      endpoint: "furniture",
      category: "Furniture",
    },
  ],
  fashion: [
    {
      name: "clothes",
      subcategory: "Clothes",
      endpoint: "fashion",
      category: "Fashion",
    },
    {
      name: "shoes",
      subcategory: "Shoes",
      endpoint: "fashion",
      category: "Fashion",
    },
    {
      name: "accessories",
      subcategory: "Accessories",
      endpoint: "fashion",
      category: "Fashion",
    },
    {
      name: "beautyproducts",
      subcategory: "Beauty Products",
      endpoint: "fashion",
      category: "Fashion",
    },
    {
      name: "jewelry",
      subcategory: "Jewelry",
      endpoint: "fashion",
      category: "Fashion",
    },
  ],
  kids: [
    { name: "health", subcategory: "Health", endpoint: "kids", category: "Kids" },
    { name: "toys", subcategory: "Toys", endpoint: "kids", category: "Kids" },
    { name: "transport", subcategory: "Transport", endpoint: "kids", category: "Kids" },
    {
      name: "accessories",
      subcategory: "Accessories",
      endpoint: "kids",
      category: "Kids",
    },
    { name: "classes", subcategory: "Classes", endpoint: "kids", category: "Kids" },
    { name: "babysitter", subcategory: "Babysitter", endpoint: "kids", category: "Kids" },
    {
      name: "schooloffices",
      subcategory: "School Offices",
      endpoint: "kids",
      category: "Kids",
    },
    {
      name: "afterschoolprogram",
      subcategory: "Afterschool Program",
      endpoint: "kids",
      category: "Kids",
    },
    { name: "activities", subcategory: "Activities", endpoint: "kids", category: "Kids" },
  ],
  sportsandhobby: [
    {
      name: "sportsequipment",
      subcategory: "Sports Equipment",
      endpoint: "sportshobby",
      category: "Sports & Hobby",
    },
    {
      name: "musicalinstruments",
      subcategory: "Musical Instruments",
      endpoint: "sportshobby",
      category: "Sports & Hobby",
    },
    {
      name: "collecteditems",
      subcategory: "Collected Items",
      endpoint: "sportshobby",
      category: "Sports & Hobby",
    },
    {
      name: "games",
      subcategory: "Games",
      endpoint: "sportshobby",
      category: "Sports & Hobby",
    },
    {
      name: "camping",
      subcategory: "Camping",
      endpoint: "sportshobby",
      category: "Sports & Hobby",
    },
    {
      name: "outdooractivities",
      subcategory: "Outdoor Activities",
      endpoint: "sportshobby",
      category: "Sports & Hobby",
    },
  ],
};

const Subcategories = () => {
  const { slug } = useParams();
  const searchParams = useSearchParams();
  const parentEndpoint = searchParams.get("endpoint");
  const category = useState(searchParams.get("category"));
  const subcate = searchParams.get("subcategory");
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    if (slug) {
      const filteredSubcategories = CATEGORIES[slug.toLowerCase()] || [];
      setSubcategories(filteredSubcategories);
    }
  }, [slug]);

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <BackButton />
        <h1 className="text-[#78828A] text-[24px] font-[500] capitalize">
          Subcategories for {slug}
        </h1>
      </div>

      <div className="grid grid-cols-5 gap-5">
        {subcategories.length > 0 ? (
          subcategories.map((subcategory) => {
            const formattedName = subcategory.subcategory.replace(/\s+/g, "");
            const variables = subcategory.name.replace(/\s+/g, "");
            return (
              <Link
                key={formattedName}
                href={{
                  pathname: `/pages/listing/addlisting/${slug}/${variables}`,
                  query: {
                    endpoint: subcategory.endpoint || parentEndpoint,
                    category: subcategory.category || category,
                    subcategory: subcategory.subcategory || subcate,
                  },
                }}
              >
                <div className="bg-[#ffcc35] w-[100%] h-[50px] px-1 hover:bg-gray-300 transition-all duration-300 rounded-md flex items-center">
                  <span className="text-white hover:text-black flex items-center space-x-2 text-md">
                    <span>{subcategory.subcategory}</span>
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

// "use client";
// import { useState, useEffect } from "react";
// import { useParams } from "next/navigation";
// import Link from "next/link";
// import React from "react";
// import BackButton from "@/app/components/BackButton";

// const CATEGORIES = {
//   vehicle: [
//     "Cars",
//     "Motorcycle",
//     "Truck",
//     "Bike",
//     "Boat",
//     "Van",
//     "Scooter",
//     "Parts and Accessories",
//     "Rentals",
//   ],
//   realestate: [
//     "House",
//     "Apartment",
//     "Land",
//     "Mobile Home",
//     "Commercial",
//     "Bedroom",
//     "Suite",
//     "Studio",
//     "Vacation Home",
//     "Basement",
//   ],
//   services: [
//     "Cleaning",
//     "Handyman",
//     "Drivers",
//     "Landscaping",
//     "Consultancy",
//     "Home Automation",
//     "Classes and Courses",
//     "Personal Training",
//     "Construction",
//     "Technology",
//     "Immigration and Visa",
//     "Event Services",
//     "Movers and Packers",
//     "Farm and Fresh Food",
//     "Video and Photography",
//     "Interior Design",
//     "Homemade Food",
//     "Insurance Services",
//     "Home Care Health",
//     "Catering",
//     "Chef",
//     "Influencer",
//     "AC Services",
//     "Personal Trainer",
//     "Cake",
//     "Finger Food",
//     "Buffet",
//     "Transport Services",
//   ],
//   events: ["Networking Events", "Concert", "Festival"],
//   jobs: ["Full Time", "Part Time", "Freelancer", "Helper", "Home Office"],
//   electronics: [
//     "Smartphones",
//     "Computers",
//     "Appliances",
//     "Games",
//     "Services and Parts",
//   ],
//   furniture: ["Couch", "Tables", "Chairs", "Beds", "Custom Furniture"],
//   fashion: ["Clothes", "Shoes", "Accessories", "Beauty Products", "Jewelry"],
//   kids: [
//     "Health",
//     "Toys",
//     "Transport",
//     "Accessories",
//     "Classes",
//     "Babysitter",
//     "Daycare",
//     "School Offices",
//     "Afterschool Program",
//     "Activities",
//   ],
//   sportsandhobby: [
//     "Sports Equipment",
//     "Musical Instruments",
//     "Collected Items",
//     "Games",
//     "Camping",
//     "Outdoor Activities",
//   ],
// };

// const Subcategories = () => {
//   const { slug } = useParams();
//   const [subcategories, setSubcategories] = useState([]);

//   useEffect(() => {
//     if (slug) {
//       const filteredSubcategories = CATEGORIES[slug.toLowerCase()] || [];
//       setSubcategories(filteredSubcategories);
//     }
//   }, [slug]);

//   return (
//     <div className="p-6">
//       {/* Header Section */}
//       <div className="flex items-center gap-2 mb-6">
//         <BackButton />
//         <h1 className="text-[#78828A] text-[24px] font-[500] capitalize">
//           Subcategories for {slug}
//         </h1>
//       </div>

//       {/* Subcategories Grid */}
//       <div className="grid grid-cols-5 gap-5">
//         {subcategories.length > 0 ? (
//           subcategories.map((subcategory, index) => {
//             const formattedSubcategory = subcategory.replace(/\s+/g, ""); // Remove spaces only in the URL part
//             return (
//               <Link
//                 key={formattedSubcategory} // Use formatted subcategory for the key
//                 href={`/pages/listing/addlisting/${slug}/${formattedSubcategory.toLowerCase()}`}
//               >
//                 <div className="bg-[#ffcc35] w-[100%] h-[50px] px-1 hover:bg-gray-300 transition-all duration-300 rounded-md flex items-center">
//                   <span className="text-white hover:text-black flex items-center space-x-2 text-md">
//                     <span>{subcategory}</span> {/* Display with spaces */}
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={2}
//                       stroke="currentColor"
//                       className="w-5 h-5"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </span>
//                 </div>
//               </Link>
//             );
//           })
//         ) : (
//           <div className="col-span-5 text-gray-500">
//             No subcategories found.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Subcategories;
