"use client";

import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getData } from "@/app/API/method"; // Adjust this import based on your project structure

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const LISTINGS_COLOR = "#CD9403";
const SUBCATEGORIES_COLOR = "#FFCC35";

// Static mapping to readable category names and dummy subcategories
const categoryMap = {
  VehicleListing: { name: "Vehicles", subcategories: 10 },
  RealEstateListing: { name: "Real Estate", subcategories: 9 },
  EventsListing: { name: "Events", subcategories: 3 },
  JobsListing: { name: "Jobs", subcategories: 5 },
  ElectronicsListing: { name: "Electronics", subcategories: 5 },
  FurnitureListing: { name: "Furniture", subcategories: 5 },
  FashionListing: { name: "Fashion", subcategories: 4 },
  KidsListing: { name: "Kids", subcategories: 8 },
  SportsHobbyListing: { name: "Sports & Hobby", subcategories: 6 },
};

const ListingCategorystats = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await getData("/admin-panel/collections");
        const apiData = response?.data || {};

        const filteredEntries = Object.entries(categoryMap)
          .filter(([key]) => apiData[key] !== 0 && apiData[key] !== undefined)
          .map(([key, value]) => ({
            name: value.name,
            Listings: apiData[key],
            Subcategories: value.subcategories,
          }));

        const dynamicChartData = {
          labels: filteredEntries.map((entry) => entry.name),
          datasets: [
            {
              label: "Total Listings",
              data: filteredEntries.map((entry) => entry.Listings),
              backgroundColor: LISTINGS_COLOR,
            },
            {
              label: "Total Subcategories",
              data: filteredEntries.map((entry) => entry.Subcategories),
              backgroundColor: SUBCATEGORIES_COLOR,
            },
          ],
        };

        setChartData(dynamicChartData);
      } catch (error) {
        console.error("Failed to fetch listings:", error);
      }
    };

    fetchListings();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Listings and Categories Distribution",
        font: { size: 24 },
        color: "#78828A",
      },
    },
    scales: {
      x: { stacked: true },
      y: { stacked: true, beginAtZero: true },
    },
  };

  return (
    <div className="w-full h-96">
      {chartData ? <Bar data={chartData} options={options} /> : <p>Loading chart...</p>}
    </div>
  );
};

export default ListingCategorystats;
