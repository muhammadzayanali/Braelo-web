// pages/listing/addlisting/page.jsx (Main Categories Page)
import React from "react";
import Link from "next/link";
import BackButton from "@/app/components/BackButton";

const categories = [
  { name: "Vehicles", slug: "Vehicles", endpoint: "vehicle" },
  { name: "Real Estate", slug: "realestate", endpoint: "realestate" },
  // { name: "Services", slug: "services", endpoint: "services" },
  { name: "Events", slug: "events", endpoint: "events" },
  { name: "Jobs", slug: "jobs", endpoint: "jobs" },
  { name: "Electronics", slug: "electronics", endpoint: "electronics" },
  { name: "Furniture", slug: "furniture", endpoint: "furniture" },
  { name: "Fashion", slug: "fashion", endpoint: "fashion" },
  { name: "Kids", slug: "kids", endpoint: "kids" },
  { name: "Sports & Hobby", slug: "sportsandhobby", endpoint: "sportshobby" },
];

const Categories = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <BackButton />
        <h1 className="text-[#78828A] text-[24px] font-[500]">
          All Categories
        </h1>
      </div>
      <div className="grid grid-cols-5 gap-5 mt-8">
        {categories.map((category) => (
          <Link 
            key={category.slug} 
            href={{
              pathname: `/pages/listing/addlisting/${category.slug}`,
              query: { endpoint: category.endpoint }
            }}
          >
            <div className="bg-[#ffcc35] px-6 py-4 hover:bg-gray-300 transition-all duration-300 rounded-md flex items-center">
              <span className="text-white hover:text-black flex items-center space-x-2 text-md">
                <span>{category.name}</span>
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
        ))}
      </div>
    </div>
  );
};

export default Categories;



// import React from "react";
// import Link from "next/link";
// import BackButton from "@/app/components/BackButton";

// const categories = [
//   { name: "Vehicle", slug: "vehicle" },
//   { name: "Real Estate", slug: "realestate" },
//   { name: "Services", slug: "services" },
//   { name: "Events", slug: "events" },
//   { name: "Jobs", slug: "jobs" },
//   { name: "Electronics", slug: "electronics" },
//   { name: "Furniture", slug: "furniture" },
//   { name: "Fashion", slug: "fashion" },
//   { name: "Kids", slug: "kids" },
//   { name: "Sports & Hobby", slug: "sportsandhobby" },
// ];

// const Categories = () => {
//   return (
//     <div>
//       <div className="flex items-center gap-2">
//         <BackButton />
//         <h1 className="text-[#78828A] text-[24px] font-[500]">
//           All Categories
//         </h1>
//       </div>
//       <div className="grid grid-cols-5 gap-5 mt-8">
//         {categories.map((category) => (
//           <Link key={category.slug} href={`/pages/listing/addlisting/${category.slug}`}>
//           <div
//               className="bg-[#ffcc35] px-6 py-4 hover:bg-gray-300 transition-all duration-300 rounded-md flex items-center"
//             >
//               <span className="text-white hover:text-black flex items-center space-x-2 text-md">
//                 <span>{category.name}</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={2}
//                   stroke="currentColor"
//                   className="w-5 h-5"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </span>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categories;
