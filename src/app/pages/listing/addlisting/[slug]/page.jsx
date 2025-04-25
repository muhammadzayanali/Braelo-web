// pages/listing/addlisting/[slug]/page.jsx (Subcategories Page)
"use client";
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import BackButton from "@/app/components/BackButton";

const CATEGORIES = {
  vehicles: [
    { name: "Cars", endpoint: "vehicle" },
    { name: "Motorcycle", endpoint: "vehicle" },
    { name: "Truck", endpoint: "vehicle" },
    { name: "Bike", endpoint: "vehicle" },
    { name: "Boat", endpoint: "vehicle" },
    { name: "Van", endpoint: "vehicle" },
    { name: "Scooter", endpoint: "vehicle" },
    { name: "Parts and Accessories", endpoint: "vehicle" },
    { name: "Rentals", endpoint: "vehicle" },
  ],
  realestate: [
        {name:"House", endpoint: "realestate"},
        {name:"Apartment", endpoint: "realestate"},
        {name:"Land", endpoint: "realestate"},
        {name:"Mobile Home", endpoint: "realestate"},
        {name:"Commercial", endpoint: "realestate"},
        {name:"Bedroom", endpoint: "realestate"},
        {name:"Suite", endpoint: "realestate"},
        {name:"Studio", endpoint: "realestate"},
        {name:"Vacation Home", endpoint: "realestate"},
        {name:"Basement", endpoint: "realestate"},
      ],
      events: [
        {name:"Networking Events", endpoint: "events"},
        {name:"Concert", endpoint: "events"},
        {name:"Festival", endpoint: "events"},
         ],
      jobs: [
        {name:"Full Time", endpoint: "jobs"},
        {name:"Part Time", endpoint: "jobs"},
        {name:"Freelancer", endpoint: "jobs"},
        {name:"Helper", endpoint: "jobs"},
        {name: "Home Office", endpoint: "jobs"},
      ],
      electronics: [
        {name: "Smartphones", endpoint: "electronics"},
        {name: "Computers", endpoint: "electronics"},
        {name: "Appliances", endpoint: "electronics"},
        {name: "Games", endpoint: "electronics"},
        {name: "Services and Parts", endpoint: "electronics"}, 
      ],
      furniture: [
        {name: "Couch", endpoint: "furniture"},
        {name: "Tables", endpoint: "furniture"},
        {name: "Chairs", endpoint: "furniture"},
        {name: "Beds",  endpoint: "furniture"},
        {name: "Custom Furniture", endpoint: "furniture"},  
        ],
      fashion: [
        {name:"Clothes", endpoint: "fashion"},
        {name:"Shoes", endpoint: "fashion"},
        {name:"Accessories", endpoint: "fashion"},
        {name:"Beauty Products", endpoint: "fashion"},
        {name:"Jewelry" ,endpoint: "fashion"},    
        ],
      kids: [
        {name:"Health", endpoint: "kids"},
        {name:"Toys", endpoint: "kids"},
        {name:"Transport", endpoint: "kids"},
        {name:"Accessories", endpoint: "kids"},
        {name:"Classes", endpoint: "kids"},
        {name:"Babysitter", endpoint: "kids"},
        {name:"School Offices", endpoint: "kids"},
        {name:"Afterschool Program", endpoint: "kids"},
        {name:"Activities", endpoint: "kids"}, 
      ],
      sportsandhobby: [
        {name:"Sports Equipment",endpoint: "sportshobby"}, 
        {name:"Musical Instruments", endpoint: "sportshobby"}, 
        {name:"Collected Items", endpoint: "sportshobby"}, 
        {name:"Games", endpoint: "sportshobby"}, 
        {name:"Camping", endpoint: "sportshobby"}, 
        {name:"Outdoor Activities", endpoint: "sportshobby"}, 
      ],
};

const Subcategories = () => {
  const { slug } = useParams();
  const searchParams = useSearchParams();
  const parentEndpoint = searchParams.get('endpoint');
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
            const formattedName = subcategory.name.replace(/\s+/g, "");
            return (
              <Link
                key={formattedName}
                href={{
                  pathname: `/pages/listing/addlisting/${slug}/${formattedName}`,
                  query: { 
                    endpoint: subcategory.endpoint || parentEndpoint
                  }
                }}
              >
                <div className="bg-[#ffcc35] w-[100%] h-[50px] px-1 hover:bg-gray-300 transition-all duration-300 rounded-md flex items-center">
                  <span className="text-white hover:text-black flex items-center space-x-2 text-md">
                    <span>{subcategory.name}</span>
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
