"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const HalfPieChart = () => {
  const data = {
    labels: [
      "Business subscriptions",
      "Flat subscriptions",
      "Yellow subscriptions",
      "Canceled subscriptions",
      "Pending subscriptions",
    ],
    datasets: [
      {
        data: [30, 20, 15, 25, 10], // Replace with your actual data values
        backgroundColor: [
          "#049B1C", // Business subscriptions
          "#1659DB", // Flat subscriptions
          "#F2A40C", // Yellow subscriptions
          "#FF0000", // Canceled subscriptions
          "#B4BEC8", // Pending subscriptions
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    rotation: -90, // Start angle for the half-pie
    circumference: 180, // 180 degrees for a half circle
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div className="w-[100%] p-5 bg-[#F8F9FA] rounded-md">
      <h2 className="text-center mb-4 text-xl font-semibold">
        Subscription Status
      </h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default HalfPieChart;
