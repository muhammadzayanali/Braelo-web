"use client";
import React, { useState } from "react";

const feedbackData = [
  {
    id: 1,
    name: "John Doe",
    reaction: "Hate", // Hate
    description: "The service was not what I expected. Would not recommend.",
    date: "2024-11-10",
  },
  {
    id: 2,
    name: "Jane Smith",
    reaction: "Dislike", // Dislike
    description: "The team was professional, but there were some issues. Mixed experience.",
    date: "2024-11-11",
  },
  {
    id: 3,
    name: "Michael Johnson",
    reaction: "Neutral", // Neutral
    description: "Good quality but a bit delayed in delivery. Overall satisfied.",
    date: "2024-11-09",
  },
  {
    id: 4,
    name: "Emily Davis",
    reaction: "Like", // Like
    description: "Excellent customer support! They helped me through every step.",
    date: "2024-11-08",
  },
  {
    id: 5,
    name: "William Brown",
    reaction: "Love", // Love
    description: "Amazing experience! Will definitely come back.",
    date: "2024-11-07",
  },
];

const FeedbackCard = () => {
  const [selectedReaction, setSelectedReaction] = useState(""); // State to store selected reaction filter

  // Filter feedback data based on selected reaction
  const filteredData = selectedReaction
    ? feedbackData.filter((feedback) => feedback.reaction === selectedReaction)
    : feedbackData;

  return (
    <div className="space-y-6 mt-6">
      {/* Filter Section */}
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-lg font-semibold text-gray-500">Feedbacks</h2>
        <div className="flex items-center space-x-4">
          <span className="text-lg font-medium text-gray-600">Filter by reaction:</span>
          <div className="flex items-center space-x-2">
            <button
              className="text-lg"
              onClick={() => setSelectedReaction("Hate")}
            >
              Hate
            </button>
            <button
              className="text-lg"
              onClick={() => setSelectedReaction("Dislike")}
            >
              Dislike
            </button>
            <button
              className="text-lg"
              onClick={() => setSelectedReaction("Neutral")}
            >
              Neutral
            </button>
            <button
              className="text-lg"
              onClick={() => setSelectedReaction("Like")}
            >
              Like
            </button>
            <button
              className="text-lg"
              onClick={() => setSelectedReaction("Love")}
            >
              Love
            </button>
            {/* Reset Filter Button */}
            <button
              className="text-lg text-blue-500"
              onClick={() => setSelectedReaction("")}
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Feedback Cards */}
      {filteredData.map(({ id, name, reaction, description, date }) => (
        <div key={id} className="flex items-start bg-white rounded-lg shadow-lg p-6 space-x-4">
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-500">{name}</h3>
              <span className="text-sm text-blue-500">{date}</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Reaction: {reaction}</p>
            <p className="text-gray-600 mt-2">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedbackCard;
