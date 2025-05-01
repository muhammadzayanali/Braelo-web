"use client";
import React, { useState, useEffect } from "react";
import { getData } from "@/app/API/method";

const FeedbackCard = () => {
  const [selectedReaction, setSelectedReaction] = useState("");
  const [feedbackData, setFeedbackData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch feedback data based on selected reaction
  useEffect(() => {
    const fetchFeedback = async () => {
      setLoading(true);
      try {
        let url = "/report/feedback";
        if (selectedReaction) {
          url += `?feedback=${selectedReaction}`;
        }
        
        const response = await getData(url);
        const data = response.data.results.map((item) => ({
          ...item,
          // Map API fields to your existing structure
          name: item.user_name,
          reaction: item.feedback,
          date: new Date(item.created_at).toISOString().split('T')[0],
          // Add a placeholder description since API doesn't provide one
          description: `User ${item.user_name} marked this as ${item.feedback}`
        }));
        
        setFeedbackData(data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, [selectedReaction]);

  // Filter feedback data based on selected reaction
  const filteredData = selectedReaction
    ? feedbackData.filter((feedback) => feedback.feedback === selectedReaction)
    : feedbackData;

  return (
    <div className="space-y-6 mt-6">
      {/* Filter Section */}
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-lg font-semibold text-gray-500">Feedbacks</h2>
        <div className="flex items-center space-x-4">
          <span className="text-lg font-medium text-gray-600">Filter by reaction:</span>
          <div className="flex items-center space-x-2 gap-7">
            <button
              className="text-lg bg-red-600 text-white rounded px-4 py-2"
              onClick={() => setSelectedReaction("Hate")}
            >
              Hate
            </button>
            <button
              className="text-lg bg-red-700 text-white rounded px-4 py-2"
              onClick={() => setSelectedReaction("Dislike")}
            >
              Dislike
            </button>
            <button
              className="text-lg bg-white rounded px-4 py-2"
              onClick={() => setSelectedReaction("Neutral")}
            >
              Neutral
            </button>
            <button
              className="text-lg bg-green-600 text-white rounded px-4 py-2"
              onClick={() => setSelectedReaction("Like")}
            >
              Like
            </button>
            <button
              className="text-lg bg-blue-500 text-white rounded px-4 py-2"
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

      {/* Loading State */}
      {loading && <div className="text-center py-4">Loading feedback...</div>}

      {/* Feedback Cards */}
      {!loading && filteredData.length === 0 && (
        <div className="text-center py-4">No feedback found</div>
      )}

      {!loading && filteredData.map(({ id, name, reaction, description, date }) => (
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