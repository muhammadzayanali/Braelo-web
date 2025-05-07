import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getData } from "@/app/API/method"; // Make sure this path is correct

const peopleData = [
  {
    id: 1,
    name: "John Doe",
    imageUrl: "/images/profile (1).png",
    location: "Florida",
    accountSet: "Account Set 2023",
  },
  {
    id: 2,
    name: "Jane Smith",
    imageUrl: "/images/profile (1).png",
    location: "California",
    accountSet: "Account Set 2023",
  },
  {
    id: 3,
    name: "Alice Johnson",
    imageUrl: "/images/profile (1).png",
    location: "New York",
    accountSet: "Account Set 2023",
  },
  {
    id: 4,
    name: "Alice Johnson",
    imageUrl: "/images/profile (1).png",
    location: "New York",
    accountSet: "Account Set 2023",
  },
];

const ActiveUsers = () => {
  const [totalActiveUsers, setTotalActiveUsers] = useState(0);
  const [newUsers, setNewUsers] = useState(30); // You can later fetch this too if needed

  useEffect(() => {
    const fetchActiveUsers = async () => {
      try {
        const response = await getData("/admin-panel/users/active");
        if (response?.data) {
          setTotalActiveUsers(response.data.online_users || 0);
          setNewUsers(response.data.new_users || 0);
        }
      } catch (error) {
        console.error("Error fetching active users:", error);
      }
    };
  
    fetchActiveUsers();
  }, []);
  

  return (
    <div className="p-4">
      {/* Main Card for User Statistics */}
      <div className="bg-white shadow-lg rounded-lg p-5 mb-8">
        <h4 className="text-xl font-bold text-gray-800">User Statistics</h4>
        <div className="mt-4 flex justify-between items-center">
          <div>
            <p className="text-gray-600 text-md">Total Active Users</p>
            <p className="text-2xl font-semibold text-green-500 text-center">
              {totalActiveUsers}
            </p>
          </div>
          <div>
            <p className="text-gray-600 text-md">New Users</p>
            <p className="text-2xl font-semibold text-blue-500 text-center">
              {newUsers}
            </p>
          </div>
        </div>
      </div>

      {/* Nested Card for List of New Users */}
      <div className="bg-white shadow-lg rounded-lg p-5 mb-8">
        <div className="flex items-center justify-between mb-5">
          <p className="text-[#495057] text-[16px] font-semibold">Users</p>
        </div>

        <div>
          {peopleData.map((person) => (
            <div
              className="flex items-center justify-between mt-2"
              key={person.id}
            >
              <div className="flex items-center">
                <Image
                  src={person.imageUrl}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                  alt={`Profile of ${person.name}`}
                />
                <div className="relative mx-3">
                  <div className="absolute -left-5 transform -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#06B64C]"></div>
                </div>
                <div>
                  <p className="mb-0 text-sm text-gray-800">{person.name}</p>
                </div>
              </div>
              <div>
                <p className="mb-0 text-sm text-gray-800">
                  {person.location}
                  <br />
                  <span className="text-xs text-gray-500">
                    {person.accountSet}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer for Total Users */}
      <div className="mt-10 flex items-center justify-between">
        <p className="text-[#495057] text-[14px] font-semibold">Total Today</p>
        <p className="text-[#495057] text-[14px] font-semibold">
          {totalActiveUsers} Users
        </p>
      </div>
    </div>
  );
};

export default ActiveUsers;
