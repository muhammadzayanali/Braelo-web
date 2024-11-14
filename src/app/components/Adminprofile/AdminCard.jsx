"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";  // Import close icon from react-icons

const userData = {
  name: "Devid Jhon",
  phoneNumber: "+990 3343 7865",
  email: "devidjond45@gmail.com",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna.",
  image: "/report.png",
};

const AdminCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(userData);
  const [previewImage, setPreviewImage] = useState(userData.image);
  const [password, setPassword] = useState("");  // Add state for password

  // Function to handle opening the modal
  const openModal = () => setIsModalOpen(true);

  // Function to handle closing the modal
  const closeModal = () => setIsModalOpen(false);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result); // Set the image preview
        setFormData({ ...formData, image: reader.result }); // Set the image in form data
      };
      reader.readAsDataURL(file); // Read the image file
    }
  };

  // Function to handle password input change
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated user info:", formData);
    console.log("Updated password:", password); // Log password change
    closeModal();
  };

  const { name, phoneNumber, email, bio } = formData;

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="border rounded-lg shadow-lg p-6 bg-white max-w-lg fixed">
        <h2 className="text-xl text-[#78828A] font-semibold mb-4">
          Personal Information
        </h2>

        {/* Profile Image */}
        <div className="flex items-center mb-4">
          <Image
            src={previewImage}
            alt="User Profile"
            width={64}
            height={64}
            className="rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="text-lg font-medium text-[#78828A] ">{name}</h3>
            <p className="text-[#78828A] ">{email}</p>
          </div>
        </div>

        {/* Personal Information */}
        <p className="text-[#78828A]  font-[500]">
          <strong>Full Name:</strong> {name}
        </p>
        <p className="text-[#78828A]  font-[500] mt-3">
          <strong>Phone Number:</strong> {phoneNumber}
        </p>
        <p className="text-[#78828A]  font-[500] mt-3">
          <strong>Email Address:</strong> {email}
        </p>
        <p className="text-[#78828A]  font-[500] mt-3">
          <strong>Bio:</strong> {bio}
        </p>

        {/* Edit Button */}
        <button
          onClick={openModal}
          className="mt-4 px-10 py-2 text-white rounded-lg  bg-[#CD9403]"
        >
          Edit
        </button>

        {/* Modal for Editing */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center overflow-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[500px]">
              {/* Close Icon */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              >
                <FaTimes size={24} />
              </button>

              <h3 className="text-lg font-semibold mt-[150px]">
                Edit Personal Information
              </h3>

              {/* Edit Form */}
              <form onSubmit={handleSubmit}>
                {/* Full Name Input */}
                <div className="mb-4">
                  <label className="block mb-2 text-gray-600">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                {/* Phone Number Input */}
                <div className="mb-4">
                  <label className="block mb-2 text-gray-600">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                {/* Email Input */}
                <div className="mb-4">
                  <label className="block mb-2 text-gray-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                {/* Bio Input */}
                <div className="mb-4">
                  <label className="block mb-2 text-gray-600">BIO</label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    rows="3"
                  />
                </div>

                {/* Password Input */}
                <div className="mb-4">
                  <label className="block mb-2 text-gray-600">New Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                {/* Profile Image Input */}
                <div className="mb-4">
                  <label className="block mb-2 text-gray-600">Profile Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  {previewImage && (
                    <Image
                      src={previewImage}
                      alt="Profile Preview"
                      width={64}
                      height={64}
                      className="rounded-full object-cover mt-2"
                    />
                  )}
                </div>

                {/* Modal Action Buttons */}
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="bg-gray-300 text-black px-10 py-2 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-10 py-2 text-white rounded-lg bg-[#CD9403]"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCard;
