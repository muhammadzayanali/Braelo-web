import React from "react";
import Image from "next/image";

const feedbackData = [
    {
      id: 1,
      name: "John Doe",
      image: "/report.png",
      description:
        "Great service! I had an excellent experience and will definitely return.",
      date: "2024-11-10",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "/report.png",
      description:
        "The team was professional and exceeded my expectations. Highly recommend!",
      date: "2024-11-11",
      rating: 4.0,
    },
    {
      id: 3,
      name: "Michael Johnson",
      image: "/report.png",
      description:
        "Good quality but a bit delayed in delivery. Overall satisfied.",
      date: "2024-11-09",
      rating: 3.8,
    },
    {
      id: 4,
      name: "Emily Davis",
      image: "/report.png",
      description:
        "Excellent customer support! They helped me through every step.",
      date: "2024-11-08",
      rating: 4.7,
    },
    {
      id: 5,
      name: "William Brown",
      image: "/report.png",
      description:
        "Not quite what I expected, but the service was still decent.",
      date: "2024-11-07",
      rating: 3.2,
    },
    {
      id: 6,
      name: "Linda Wilson",
      image: "/report.png",
      description:
        "Amazing experience from start to finish! Will definitely use again.",
      date: "2024-11-06",
      rating: 4.9,
    },
    {
      id: 7,
      name: "James Taylor",
      image: "/report.png",
      description:
        "Service was okay, but I had higher expectations. Room for improvement.",
      date: "2024-11-05",
      rating: 3.5,
    },
    {
      id: 8,
      name: "Patricia Anderson",
      image: "/report.png",
      description:
        "Highly efficient and reliable. I got exactly what I needed.",
      date: "2024-11-04",
      rating: 4.3,
    },
  ];
  

// Calculate average rating
const calculateAverageRating = () => {
  const total = feedbackData.reduce((sum, feedback) => sum + feedback.rating, 0);
  return (total / feedbackData.length).toFixed(1);
};

const FeedbackCard = () => {
  const totalFeedbacks = feedbackData.length;
  const averageRating = calculateAverageRating();

  return (
    <div className="space-y-6 mt-6">
      {/* Header Section with Total Feedbacks and Average Rating */}
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-lg font-semibold text-gray-500">Total Feedbacks: {totalFeedbacks}</h2>
        <div className="flex items-center space-x-4">
          <span className="text-lg font-medium text-gray-600">Average:</span>
          <div className="flex items-center space-x-2">
            <progress
              className="w-32 h-4 rounded-full"
              value={averageRating}
              max="5"
            ></progress>
            <span className="text-lg font-semibold text-gray-500">{averageRating}/5</span>
          </div>
        </div>
      </div>

      {/* Feedback Cards */}
      {feedbackData.map(({ id, name, image, description, date }) => (
        <div
          key={id}
          className="flex items-start bg-white rounded-lg shadow-lg p-6 space-x-4"
        >
          <Image
            src={image}
            alt={name}
            className="rounded-full object-cover"
            width={60}
            height={60}
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-500">{name}</h3>
              <span className="text-sm text-blue-500">{date}</span>
            </div>
            <p className="text-gray-600 mt-2">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedbackCard;
