import React from "react";
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

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Updated data with categories, subcategories, and total listings
const data = [
  { name: "Vehicles", Listings: 100, Subcategories: 10 },
  { name: "Real Estate", Listings: 200, Subcategories: 9 },
  { name: "Services", Listings: 200, Subcategories: 15 },
  { name: "Events", Listings: 100, Subcategories: 3 },
  { name: "Jobs", Listings: 250, Subcategories: 5 },
  { name: "Electronics", Listings: 300, Subcategories: 5 },
  { name: "Furniture", Listings: 700, Subcategories: 5 },
  { name: "Fashion", Listings: 1000, Subcategories: 4 },
  { name: "Kids", Listings: 400, Subcategories: 8 },
  { name: "Sports & Hobby", Listings: 350, Subcategories: 6 },
];

// Colors for "Listings" and "Subcategories"
const LISTINGS_COLOR = "#CD9403"; // Gold for Listings
const SUBCATEGORIES_COLOR = "#FFCC35"; // Orange for Subcategories

// Calculate total categories
const totalCategories = data.length; // Number of categories

// Prepare data for Chart.js
const chartData = {
  labels: data.map((entry) => entry.name), // Category names
  datasets: [
    {
      label: "Total Listings",
      data: data.map((entry) => entry.Listings),
      backgroundColor: LISTINGS_COLOR,
    },
    {
      label: "Total Subcategories",
      data: data.map((entry) => entry.Subcategories),
      backgroundColor: SUBCATEGORIES_COLOR,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Listings and Categories Distribution",
      font: {
        size: 24,
      },
      color: "#78828A",
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      beginAtZero: true,
    },
  },
};

const ListingCategorystats = () => {
  return (
    <div className="w-full h-96">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ListingCategorystats;
