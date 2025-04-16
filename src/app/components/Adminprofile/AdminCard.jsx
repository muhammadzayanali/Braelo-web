"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { getData, postData, updateData } from "@/app/API/method";

const defaultUserData = {
  name: "",
  first_name: "",
  last_name: "",
  dob: "",
  gender: "",
  address: "",
  complement: "",
  country: "",
  state: "",
  city: "",
  zip_code: "",
  phoneNumber: "",
  email: "",
  bio: "",
  image: "/report.png",
};

const AdminCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(defaultUserData);
  const [previewImage, setPreviewImage] = useState(defaultUserData.image);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const response = await getData("/auth/user/profile");
        
        if (response) {
          const userData = {
            name: response?.data?.name || "",
            first_name: response?.data?.first_name || "",
            last_name: response?.data?.last_name || "",
            dob: response?.data?.dob || "",
            gender: response?.data?.gender || "",
            address:response?.data?.address || "",
            country: response?.data?.country || "",
            state: response?.data?.state || "",
            city: response?.data?.city || "",
            zip_code: response?.data?.zip_code || "",
            phoneNumber: response?.data?.phone_number || "",
            email: response?.data?.email || "",
            bio: response?.data?.bio || "",
            image: response?.data?.image || "/report.png",
          };
          setFormData(userData);
          setPreviewImage(userData.image);
        }
      } catch (err) {
        setError(err.message || "Failed to fetch user data");
        console.error("Error fetching user data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setError(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Prepare update payload
      const updatePayload = {
        ...formData,
        ...(password && { password }),
        ...(previewImage !== "/report.png" && { image: formData.image }),
      };

      // Use postData for creating or updateData for updating
      const response = await postData("/auth/update/profile", updatePayload);


      if (response) {
        // Update local state with the response
        const updatedData = {
          ...formData,
          name: response.name || formData.name,
          first_name: response.first_name || formData.first_name,
          last_name: response.last_name || formData.last_name,
          // Include all other fields similarly
          image: response.image || previewImage,
        };
        setFormData(updatedData);
        setPreviewImage(updatedData.image);
        closeModal();
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Failed to update profile");
      console.error("Error updating profile:", err);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#CD9403] mx-auto"></div>
          <p className="mt-4 text-[#78828A]">Loading profile data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg text-center">
          <h3 className="text-xl text-red-500 mb-4">Error Loading Profile</h3>
          <p className="text-[#78828A] mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-[#CD9403] text-white rounded-lg hover:bg-[#b78300] transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center min-h-screen py-12">
      <div className="border rounded-lg shadow-lg p-6 bg-white w-full max-w-2xl">
        <h2 className="text-xl text-[#78828A] font-semibold mb-6">
          Personal Information
        </h2>

        {/* Profile Header */}
        <div className="flex items-center mb-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
            <Image
              src={previewImage}
              alt="User Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h3 className="text-lg font-medium text-[#78828A]">
              {formData.name} {formData.last_name}
            </h3>
            <p className="text-[#78828A] text-sm">{formData.email}</p>
          </div>
        </div>

        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="text-[#78828A] font-medium">{formData.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">First Name</p>
            <p className="text-[#78828A] font-medium">{formData.first_name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Last Name</p>
            <p className="text-[#78828A] font-medium">{formData.last_name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Date of Birth</p>
            <p className="text-[#78828A] font-medium">{formData.dob || "Not provided"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Gender</p>
            <p className="text-[#78828A] font-medium">{formData.gender || "Not specified"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone Number</p>
            <p className="text-[#78828A] font-medium">{formData.phoneNumber || "Not provided"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email Address</p>
            <p className="text-[#78828A] font-medium">{formData.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Address</p>
            <p className="text-[#78828A] font-medium">{formData.address || "Not provided"}</p>
          </div>
          {/* <div>
            <p className="text-sm text-gray-500">Complement</p>
            <p className="text-[#78828A] font-medium">{formData.complement || "Not provided"}</p>
          </div> */}
          <div>
            <p className="text-sm text-gray-500">Country</p>
            <p className="text-[#78828A] font-medium">{formData.country || "Not provided"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">State</p>
            <p className="text-[#78828A] font-medium">{formData.state || "Not provided"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">City</p>
            <p className="text-[#78828A] font-medium">{formData.city || "Not provided"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Zip Code</p>
            <p className="text-[#78828A] font-medium">{formData.zip_code || "Not provided"}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm text-gray-500">Bio</p>
            <p className="text-[#78828A] font-medium">{formData.bio || "No bio provided"}</p>
          </div>
        </div>

        {/* Edit Button */}
        <button
          onClick={openModal}
          className="w-full py-2 text-white rounded-lg bg-[#CD9403] hover:bg-[#b78300] transition"
        >
          Edit Profile
        </button>

        {/* Edit Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={20} />
              </button>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#78828A] mb-6">
                  Edit Profile
                </h3>

                {error && (
                  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
                    <p>{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Profile Image Upload */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Profile Image
                      </label>
                      <div className="flex items-center">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                          <Image
                            src={previewImage}
                            alt="Profile Preview"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="block w-full text-sm text-gray-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-md file:border-0
                            file:text-sm file:font-semibold
                            file:bg-[#CD9403] file:text-white
                            hover:file:bg-[#b78300]"
                        />
                      </div>
                    </div>

                    {/* Name Fields */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-[#CD9403] focus:border-[#CD9403]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-[#CD9403] focus:border-[#CD9403]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-[#CD9403] focus:border-[#CD9403]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-[#CD9403] focus:border-[#CD9403]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Gender
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-[#CD9403] focus:border-[#CD9403]"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        {/* <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option> */}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-[#CD9403] focus:border-[#CD9403]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-[#CD9403] focus:border-[#CD9403]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password (leave blank to keep current)
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-[#CD9403] focus:border-[#CD9403]"
                      />
                    </div>

                    {/* Address Fields */}
                    <div className="md:col-span-2 border-t pt-4 mt-2">
                      <h4 className="text-lg font-medium text-gray-700 mb-2">Address Information</h4>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-[#CD9403] focus:border-[#CD9403]"
                      />
                    </div>
                    {/* <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Complement
                      </label>
                      <input
                        type="text"
                        name="complement"
                        value={formData.complement}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-[#CD9403] focus:border-[#CD9403]"
                      />
                    </div> */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-[#CD9403] focus:border-[#CD9403]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-[#CD9403] focus:border-[#CD9403]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-[#CD9403] focus:border-[#CD9403]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Zip Code
                      </label>
                      <input
                        type="text"
                        name="zip_code"
                        value={formData.zip_code}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-[#CD9403] focus:border-[#CD9403]"
                      />
                    </div>

                    {/* Bio */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bio
                      </label>
                      <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full p-2 border border-gray-300 rounded focus:ring-[#CD9403] focus:border-[#CD9403]"
                      />
                    </div>
                  </div>

                  {/* Form Actions */}
                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#CD9403] text-white rounded-lg hover:bg-[#b78300]"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCard;