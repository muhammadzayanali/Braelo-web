import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Dummy data for business statistics
const businessData = [
  { month: "Jan", growth: 2400 },
  { month: "Feb", growth: 1398 },
  { month: "Mar", growth: 9800 },
  { month: "Apr", growth: 3908 },
  { month: "May", growth: 4800 },
  { month: "Jun", growth: 3490 },
];

// Format data for Chart.js
const data = {
  labels: businessData.map((entry) => entry.month),
  datasets: [
    {
      label: "Business Growth",
      data: businessData.map((entry) => entry.growth),
      borderColor: "#CD9403",
      backgroundColor: "rgba(205, 148, 3, 0.2)",
      fill: true, // Fills the area under the line
      tension: 0.4, // Smooth curves
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
    title: {
      display: true,
      text: "Business Growth Statistics",
      font: {
        size: 24,
      },
      color: "#78828A",
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Month",
      },
    },
    y: {
      title: {
        display: true,
        text: "Growth",
      },
      beginAtZero: true,
    },
  },
};

const BusinessStatistics = () => {
  return (
    <div className="w-full h-96">
      
      <Line data={data} options={options} />
    </div>
  );
};

export default BusinessStatistics;
