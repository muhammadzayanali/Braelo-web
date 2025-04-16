'use client'; // Use this directive at the top for Next.js client components

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import BackButton from "@/app/components/BackButton";
import { postData } from "@/app/API/method";

const AddUser = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      date: "",
      role: "user",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      phoneNumber: Yup.string()
        .required("Phone Number is required")
        .matches(/^[0-9]+$/, "Phone Number must be digits"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
      date: Yup.date().required("Date is required"),
      role: Yup.string().required("Role is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const apiUrl = "/admin-panel/signup";

      const userData = {
        email: values.email,
        password: values.password,
        name: values.fullName,
        role: values.role === "admin" ? "true" : "false",
      };

      try {
        const response = await postData(apiUrl, userData);
        console.log("User created successfully:", response);

        resetForm();
        alert("User created successfully!");
      } catch (error) {
        console.error("Error creating user:", error);
        alert("Failed to create user. Please try again.");
      }
    },
  });

  return (
    <>
      <div className="max-w-xl mx-auto mt-10 p-5 bg-white shadow-md rounded-md">
        <div className="flex items-center gap-2 mb-5">
          <BackButton />
          <h2 className="text-2xl font-semibold text-center">Add User</h2>
        </div>
        
        <form onSubmit={formik.handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full p-2 border rounded-md ${
                formik.touched.fullName && formik.errors.fullName
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              required
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <p className="text-red-500">{formik.errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full p-2 border rounded-md ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              required
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500">{formik.errors.email}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full p-2 border rounded-md ${
                formik.touched.phoneNumber && formik.errors.phoneNumber
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              required
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <p className="text-red-500">{formik.errors.phoneNumber}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full p-2 border rounded-md ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              required
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500">{formik.errors.password}</p>
            )}
          </div>

          {/* Date */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full p-2 border rounded-md ${
                formik.touched.date && formik.errors.date
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              required
            />
            {formik.touched.date && formik.errors.date && (
              <p className="text-red-500">{formik.errors.date}</p>
            )}
          </div>

          {/* Role */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="role">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formik.values.role}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="admin">Admin</option>
              <option value="subadmin">Subadmin</option>
              <option value="user">User</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#CD9403] text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddUser;