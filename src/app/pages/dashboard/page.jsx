// src/app/dashboard/page.jsx
"use client";
import React from "react";
import DashboardCards from "@/app/components/Dashboard/DashboardCards";
import DataChart from "@/app/components/Dashboard/DataChart";
import HalfPieChart from "@/app/components/Dashboard/HalfPieChart";
import ActiveUsers from "@/app/components/Dashboard/ActiveUsers";
import Banner from "@/app/components/Dashboard/banner";
const Dashboard = () => {
  return (
    <div className="flex">
      <div className="grid grid-cols-12 gap-5 w-full">
        <div className="col-span-7 mt-8  ml-8 ">
          <Banner />
          <DashboardCards />
          <DataChart />
        </div>
        <div className="col-span-5 pr-10">
          <HalfPieChart />
          <ActiveUsers />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
