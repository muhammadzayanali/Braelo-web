"use client";

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const DataChart = () => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const getDataForYear = () => {
    switch (selectedYear) {
      case "2023":
        return [
          { name: "Jan", TotalListings: 40, Businesses: 24, Users: 120 },
          { name: "Feb", TotalListings: 30, Businesses: 18, Users: 110 },
          { name: "Mar", TotalListings: 50, Businesses: 40, Users: 200 },
          { name: "Apr", TotalListings: 35, Businesses: 22, Users: 150 },
          { name: "May", TotalListings: 28, Businesses: 25, Users: 100 },
          { name: "Jun", TotalListings: 45, Businesses: 32, Users: 130 },
          { name: "Jul", TotalListings: 50, Businesses: 40, Users: 160 },
        ];
      case "2021":
        return [
          { name: "Jan", TotalListings: 30, Businesses: 20, Users: 100 },
          { name: "Feb", TotalListings: 25, Businesses: 15, Users: 90 },
          { name: "Mar", TotalListings: 45, Businesses: 30, Users: 120 },
          { name: "Apr", TotalListings: 35, Businesses: 22, Users: 110 },
          { name: "May", TotalListings: 28, Businesses: 25, Users: 110 },
          { name: "Jun", TotalListings: 45, Businesses: 32, Users: 140 },
          { name: "Jul", TotalListings: 50, Businesses: 40, Users: 150 },
        ];
      case "2020":
        return [
          { name: "Jan", TotalListings: 35, Businesses: 22, Users: 130 },
          { name: "Feb", TotalListings: 40, Businesses: 18, Users: 170 },
          { name: "Mar", TotalListings: 30, Businesses: 15, Users: 140 },
          { name: "Apr", TotalListings: 25, Businesses: 20, Users: 120 },
          { name: "May", TotalListings: 28, Businesses: 25, Users: 120 },
          { name: "Jun", TotalListings: 45, Businesses: 32, Users: 160 },
          { name: "Jul", TotalListings: 50, Businesses: 40, Users: 190 },
        ];
      default:
        return [];
    }
  };

  const chartData = {
    labels: getDataForYear().map((data) => data.name),
    datasets: [
      {
        label: "Total Listings",
        data: getDataForYear().map((data) => data.TotalListings),
        borderColor: "#F3A000",
        backgroundColor: "rgba(243, 160, 0, 0.2)",
        borderWidth: 2,
      },
      {
        label: "Businesses",
        data: getDataForYear().map((data) => data.Businesses),
        borderColor: "#FFE8BA",
        backgroundColor: "rgba(255, 232, 186, 0.2)",
        borderWidth: 2,
      },
      {
        label: "Users",
        data: getDataForYear().map((data) => data.Users),
        borderColor: "#C98903",
        backgroundColor: "rgba(201, 137, 3, 0.2)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Count",
        },
      },
    },
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-xl font-semibold">Total Listings, Businesses & Users</h4>
        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="border p-2 rounded-lg"
        >
          <option value="2023">2023</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default DataChart;
