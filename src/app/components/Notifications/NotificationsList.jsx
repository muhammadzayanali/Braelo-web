import React, { useState } from "react";

// Sample Notification Data with Image and Description
const initialNotifications = [
  {
    id: 1,
    title: "New User Registration",
    message: "John Doe registered",
    dateReceived: "2024-10-14T10:00:00Z",
    type: "Category Notification",
    status: "Unread",
    image: "/b5.png", // Example image URL
    description: "User registration successful.",
  },
  {
    id: 2,
    title: "Listing Approval",
    message: "XYZ Corp approval pending",
    dateReceived: "2024-10-14T10:05:00Z",
    type: "Listing Notification",
    status: "Read",
    image: "/b5.png", // Example image URL
    description: "Approval required for listing.",
  },
  {
    id: 3,
    title: "System Warning",
    message: "User reported an issue",
    dateReceived: "2024-10-14T10:10:00Z",
    type: "System Notification",
    status: "Unread",
    image: "/b5.png", // Example image URL
    description: "An issue has been reported by a user.",
  },
  {
    id: 4,
    title: "New Listing Added",
    message: "Amazing Apartment listed",
    dateReceived: "2024-10-14T10:15:00Z",
    type: "Listing Notification",
    status: "Archived",
    image: "/b5.png", // Example image URL
    description: "A new apartment listing is available.",
  },
];

const NotificationsList = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  // Handler to delete a notification
  const deleteNotification = (id) => {
    setNotifications((notifications) =>
      notifications.filter((notification) => notification.id !== id)
    );
  };

  // Formatting date to be more readable
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="p-4">
      {/* Notification List */}
      <div className="space-y-4">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className="bg-white p-4 rounded-lg shadow-md flex justify-between items-start"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={notification.image}
                  alt="Notification"
                  className="w-12 h-12 rounded"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    {notification.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500">
                    {notification.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-xs text-gray-500">
                  {formatDate(notification.dateReceived)}
                </p>
                <button
                  onClick={() => deleteNotification(notification.id)}
                  className="bg-[#CD9403] text-white px-3 py-1 rounded-lg transition mt-2"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No notifications found.</p>
        )}
      </div>
    </div>
  );
};

export default NotificationsList;
