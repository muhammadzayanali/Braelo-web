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
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Dummy data for user statistics
const userData = [
  { month: "Jan", users: 50 },
  { month: "Feb", users: 100 },
  { month: "Mar", users: 200 },
  { month: "Apr", users: 180 },
  { month: "May", users: 220 },
  { month: "Jun", users: 200 },
];

// Format data for Chart.js
const data = {
  labels: userData.map((entry) => entry.month),
  datasets: [
    {
      label: "Users",
      data: userData.map((entry) => entry.users),
      backgroundColor: "#CD9403",
      borderColor: "#CD9403",
      borderWidth: 1,
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
      text: "User Statistics",
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
        text: "Users",
      },
      beginAtZero: true,
    },
  },
};

const UserStatistics = () => {
  return (
    <div className="w-full h-96">
     
      <Bar  data={data} options={options} />
    </div>
  );
};

export default UserStatistics;
