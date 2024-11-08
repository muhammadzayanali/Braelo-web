"use client";
import React from "react";
import { FaTimes } from "react-icons/fa";

const EditUserdetailModal = ({ isOpen, OpeModal, onClose }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    role: "",
    phoneNumber: "",
    emailStatus: "",
    phoneVerifiedStatus: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data:", formData);
    OpeModal(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="m-4 p-5 bg-white shadow-lg rounded-md w-1/2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[#232F30] text-[20px]  font-bold">
            Edit Info
          </h2>
          <button onClick={onClose}>
            <FaTimes className="text-gray-600" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Name and Email Row */}
          <div className="flex justify-between mb-4 gap-2">
            <div className="flex-1">
              <label className="block text-[#78828A] text-[16px] font-[600]  mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-[#78828A] text-[16px] font-[600]   mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
          </div>

          {/* Role and Phone Number Row */}
          <div className="flex justify-between mb-4 gap-2">
            <div className="flex-1">
              <label className="block text-[#78828A] text-[16px] font-[600]  mb-1">
                Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              >
                <option value="">Select role</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-[#78828A] text-[16px] font-[600]  mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
          </div>

          {/* Email Status and Phone Verified Status Row */}
          <div className="flex justify-between mb-4 gap-2">
            <div className="flex-1">
              <label className="block text-[#78828A] text-[16px] font-[600]  mb-1">
                Email Status
              </label>
              <select
                name="emailStatus"
                value={formData.emailStatus}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              >
                <option value="">Select status</option>
                <option value="Verified">Verified</option>
                <option value="Unverified">Unverified</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-[#78828A] text-[16px] font-[600]  mb-1">
                Phone Verified Status
              </label>
              <select
                name="phoneVerifiedStatus"
                value={formData.phoneVerifiedStatus}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              >
                <option value="">Select status</option>
                <option value="Verified">Verified</option>
                <option value="Unverified">Unverified</option>
              </select>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-[#CD9403] text-white p-2 rounded "
            >
              Save
            </button>
            <button
              type="submit"
              className="border border-[#CD9403] text-[#CD9403] p-2 rounded "
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserdetailModal;
