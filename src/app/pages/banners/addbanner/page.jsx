"use client";

import React, { useState } from "react";
import BackButton from "@/app/components/BackButton";

const AddBanner = () => {
  const [formData, setFormData] = useState({
    image: null,
    title: "",
    description: "",
    url: "",
    createdDate: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare data for submission
    const submissionData = new FormData();
    submissionData.append("image", formData.image);
    submissionData.append("title", formData.title);
    submissionData.append("description", formData.description);
    submissionData.append("url", formData.url);
    submissionData.append("createdDate", formData.createdDate);

    // API call logic here
    console.log("Submitting form data:", submissionData);
  };

  return (
    <>
      <BackButton />
    <div className="max-w-md mx-auto p-4 border rounded shadow-lg">
    
      
      <h1 className="text-2xl font-bold mb-4">Add Banner</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Image Upload */}
        <div>
          <label htmlFor="image" className="block font-medium mb-1">
            Banner Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="block w-full text-sm"
            required
          />
        </div>

        {/* Title */}
        <div>
          <label htmlFor="title" className="block font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter banner title"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter banner description"
            rows="4"
            required
          ></textarea>
        </div>

        {/* URL */}
        <div>
          <label htmlFor="url" className="block font-medium mb-1">
            URL
          </label>
          <input
            type="url"
            id="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter banner link"
            required
          />
        </div>

        {/* Date */}
        <div>
          <label htmlFor="createdDate" className="block font-medium mb-1">
            Date Created
          </label>
          <input
            type="date"
            id="createdDate"
            name="createdDate"
            value={formData.createdDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#d8b039] text-white py-2 px-4 rounded"
        >
          Add Banner
        </button>
      </form>
    </div>
    </>
  );
};

export default AddBanner;
