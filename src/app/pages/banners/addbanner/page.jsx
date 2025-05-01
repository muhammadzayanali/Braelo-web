"use client";

import React, { useState } from "react";
import BackButton from "@/app/components/BackButton";
import { postBusiData } from "@/app/API/method";

const AddBanner = () => {
  const [formData, setFormData] = useState({
    business_banner: null,
    business_name: "",
    business_email: "",
    business_category: "",
    business_subcategory: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      // Prepare data for submission
      const submissionData = new FormData();
      submissionData.append("business_banner", formData.business_banner);
      submissionData.append("business_name", formData.business_name);
      submissionData.append("business_email", formData.business_email);
      submissionData.append("business_category", formData.business_category);
      submissionData.append("business_subcategory", formData.business_subcategory);

      // Make API call
      const response = await postBusiData("/admin-panel/banner", submissionData, {
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
      });

      if (response.success) {
        setSuccess(true);
        // Reset form after successful submission
        setFormData({
          business_banner: null,
          business_name: "",
          business_email: "",
          business_category: "",
          business_subcategory: "",
        });
      } else {
        setError(response.message || "Failed to add banner");
      }
    } catch (err) {
      setError(err.message || "An error occurred while adding the banner");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <BackButton />
      <div className="max-w-md mx-auto p-4 border rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Add Banner</h1>
        
        {success && (
          <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">
            Banner added successfully!
          </div>
        )}
        
        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Banner Image */}
          <div>
            <label htmlFor="business_banner" className="block font-medium mb-1">
              Banner Image
            </label>
            <input
              type="file"
              id="business_banner"
              name="business_banner"
              accept="image/*"
              onChange={handleChange}
              className="block w-full text-sm"
              required
            />
          </div>

          {/* Business Name */}
          <div>
            <label htmlFor="business_name" className="block font-medium mb-1">
              Business Name
            </label>
            <input
              type="text"
              id="business_name"
              name="business_name"
              value={formData.business_name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter business name"
              required
            />
          </div>

          {/* Business Email */}
          <div>
            <label htmlFor="business_email" className="block font-medium mb-1">
              Business Email
            </label>
            <input
              type="email"
              id="business_email"
              name="business_email"
              value={formData.business_email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter business email"
              required
            />
          </div>

          {/* Business Category */}
          <div>
            <label htmlFor="business_category" className="block font-medium mb-1">
              Business Category
            </label>
            <input
              type="text"
              id="business_category"
              name="business_category"
              value={formData.business_category}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter business category"
              required
            />
          </div>

          {/* Business Subcategory */}
          <div>
            <label htmlFor="business_subcategory" className="block font-medium mb-1">
              Business Subcategory
            </label>
            <input
              type="text"
              id="business_subcategory"
              name="business_subcategory"
              value={formData.business_subcategory}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter business subcategory"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#d8b039] text-white py-2 px-4 rounded disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Adding..." : "Add Banner"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBanner;