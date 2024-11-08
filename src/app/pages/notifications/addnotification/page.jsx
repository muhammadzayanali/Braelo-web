"use client";
import BackButton from "@/app/components/BackButton";
import React, { useState } from "react";

const AddNewNotification = () => {
  const [messageData, setMessageData] = useState({
    type: "Notification",
    title: "",
    description: "",
  });

  const [messagePreview, setMessagePreview] = useState({
    message: "",
    placeholder:
      "Just dropping by to let you know that there are 5 days left until your plan expires, eh? Do not waste time, get the plan that best fits your pocket now!",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessageData({
      ...messageData,
      [name]: value,
    });

    if (name === "description") {
      setMessagePreview({
        ...messagePreview,
        message: value,
      });
    }
  };

  const resetForm = () => {
    setMessageData({
      type: "Notification",
      title: "",
      description: "",
    });

    setMessagePreview({
      message: "",
      placeholder:
        "Just dropping by to let you know that there are 5 days left until your plan expires, eh? Do not waste time, get the plan that best fits your pocket now!",
    });
  };

  const handlePublish = () => {
    console.log("Publishing Notification:", messageData);
    resetForm();
  };

  return (
    <div className="p-5">
      <div className="flex items-center gap-2 mb-4">
        <BackButton/>
        <h1 className="text-[#78828A] text-2xl font-medium">
          Create New Notification
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-5">
        <div className="col-span-1">
          <label className="block text-gray-500 mb-2">Message Title</label>
          <input
            placeholder="Tic Tac, Tic Tac! Your plan needs you!"
            className="w-full p-3 border border-gray-300 rounded-lg"
            name="title"
            value={messageData.title}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <label className="block text-gray-500 mt-4">Description</label>
          <textarea
            placeholder={messagePreview.placeholder}
            className="w-full h-40 p-3 border border-gray-300 rounded-lg"
            name="description"
            value={messageData.description}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 relative">
        <div className="mt-6">
          <label className="block text-gray-500 mb-2">Message Preview</label>
          <div className="p-4 border border-yellow-300 rounded-lg">
            <div className="flex items-center border-b border-gray-300 pb-2 mb-4">
              <p className="text-gray-500 font-bold">Notification</p>
            </div>
            <h3 className="font-bold">{messageData.title}</h3>
            <p className="text-gray-500">
              {messageData.description === ""
                ? messagePreview.placeholder
                : messagePreview.message}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-start gap-2 items-center">
        <button
          className="py-2 px-8 bg-gray-200 text-gray-700 border border-gray-300 rounded-lg"
          onClick={resetForm}
        >
          Cancel
        </button>
        <button
          className="py-2 px-8 bg-[#CD9403] text-white border border-gray-800 rounded-lg"
          type="button"
          onClick={handlePublish}
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default AddNewNotification;
