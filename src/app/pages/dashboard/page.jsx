// src/app/dashboard/page.jsx
"use client";
import React from "react";
import DashboardCards from "@/app/components/Dashboard/DashboardCards";
import DataChart from "@/app/components/Dashboard/DataChart";
import HalfPieChart from "@/app/components/Dashboard/HalfPieChart";
import ActiveUsers from "@/app/components/Dashboard/ActiveUsers";
const Dashboard = () => {
  return (
    <>
    <div>
      <DashboardCards />
    </div>
    <div className="grid grid-cols-12 gap-5 mt-10">
   <div className="col-span-8">
    <DataChart />
   </div>
   <div className="col-span-4">
    <HalfPieChart/>
   </div>
   <div className="col-span-7">
    <ActiveUsers/>
   </div>
   
    </div>
    </>
  );
};

export default Dashboard;
