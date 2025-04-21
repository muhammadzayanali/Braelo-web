"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getData } from "@/app/API/method";

const NotificationsList = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const data = await getData("/admin-panel/notificatons");
        console.log("API Response:", data);

        if (data?.data?.results) {
          const formattedNotifications = data.data.results.map((notif, index) => ({
            id: index + 1,
            title: notif.title || "No Title",
            message: notif.body || "No Message",
            dateReceived: notif.created_at || new Date().toISOString(),
            type: notif.type || "General Notification",
            status: notif.is_read ? "Read" : "Unread",
            image: "/b5.png",
            description: notif.body || "No Description",
          }));
          setNotifications(formattedNotifications);
        } else {
          throw new Error("Invalid notifications data structure");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Notifications</h2>
      
      {loading ? (
        <p className="text-gray-500">Loading notifications...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : notifications.length > 0 ? (
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="bg-white p-4 rounded-lg shadow-md flex justify-between items-start"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={notification.image}
                  alt="Notification"
                  className="rounded"
                  width={48}
                  height={48}
                />
                <div>
                  <h3 className="text-lg font-semibold">{notification.title}</h3>
                  <p className="text-sm text-gray-600">{notification.message}</p>
                  <p className="text-xs text-gray-500">{notification.description}</p>
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
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No notifications found.</p>
      )}
    </div>
  );
};

export default NotificationsList;