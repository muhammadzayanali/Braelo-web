"use client"; // This directive indicates that this component should be rendered on the client side

import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; // For validation
import BackButton from "@/app/components/BackButton";
import Image from "next/image";

const AddNewBusiness = () => {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileSelected = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    setTimeout(() => {
      setImagePreview(URL.createObjectURL(file));
      setLoading(false);
    }, 1000);
  };

  // Formik setup
  const formik = useFormik({
    initialValues: {
      businessName: "",
      businessLogo: "",
      address: "",
      businessNumber: "",
      email: "",
      website: "",
      goals: "",
      ownerName: "",
      ownerNumber: "",
      ownerEmail: "",
      ownerAddress: "",
    },
    validationSchema: Yup.object({
      businessName: Yup.string().required("Business Name is required"),
      address: Yup.string().required("Address is required"),
      businessNumber: Yup.string().required("Business Number is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      website: Yup.string().url("Invalid URL format"),
      goals: Yup.string(),
      ownerName: Yup.string().required("Owner Name is required"),
      ownerNumber: Yup.string().required("Owner Number is required"),
      ownerEmail: Yup.string()
        .email("Invalid email format")
        .required("Owner Email is required"),
      ownerAddress: Yup.string().required("Owner Address is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Data", values);
      // Here you can make your API call to save the business data
    },
  });

  return (
    <div className="p-5">
      <div className="flex items-center gap-2">
        <BackButton />

        <h1 className="text-[#78828A] text-[24px] font-[500]">
          Add New Business
        </h1>
      </div>
      <div className="p-5">
        <form onSubmit={formik.handleSubmit}>
          <label
            htmlFor="businessName"
            className="text-[#78828A] text-[16px] font-[600]"
          >
            Business Name
          </label>
          <div>
            <input
              id="businessName"
              name="businessName"
              placeholder="Enter your business name"
              className="border p-2 rounded-lg w-full"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.businessName}
            />
            {formik.touched.businessName && formik.errors.businessName ? (
              <div className="text-red-600">{formik.errors.businessName}</div>
            ) : null}
          </div>
          <div className="mt-4">
            <h6 className="text-[#78828A] text-[16px] font-[600]">
              Business Logo
            </h6>
            <div
              className="flex flex-col justify-center items-center border-2 border-dotted rounded-lg mt-4"
              style={{ minHeight: "200px" }}
            >
              {loading ? (
                <p>Loading...</p>
              ) : (
                <>
                  {imagePreview ? (
                    <Image
                      src={imagePreview}
                      alt="preview"
                      width={500}
                      height={288}
                      className="w-full h-72 object-cover rounded-lg"
                    />
                  ) : (
                    <div>
                      <Image
                        src="/b6.png"
                        alt="filesicon"
                        onClick={handleIconClick}
                        width={50}
                        height={50}
                        className="cursor-pointer"
                      />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelected}
                        ref={fileInputRef}
                        className="hidden"
                      />
                    </div>
                  )}
                  <div className="flex flex-col justify-center mt-5">
                    <p className="text-[16px] text-[#AB9E7D]">
                      Required dimensions
                    </p>
                    <p className="text-[16px] text-[#AB9E7D] text-center">
                      1080x1920 pixels
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <div className="flex-1">
              <label
                htmlFor="address"
                className="text-[#78828A] text-[16px] font-[600]"
              >
                Business Address
              </label>
              <input
                id="address"
                name="address"
                placeholder="Enter your Address"
                className="border p-2 rounded-lg w-full mt-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />
              {formik.touched.address && formik.errors.address ? (
                <div className="text-red-600">{formik.errors.address}</div>
              ) : null}
            </div>
            <div className="flex-1">
              <label
                htmlFor="businessNumber"
                className="text-[#78828A] text-[16px] font-[600]"
              >
                Business Number
              </label>
              <input
                id="businessNumber"
                name="businessNumber"
                placeholder="Enter your Number"
                className="border p-2 rounded-lg w-full mt-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.businessNumber}
              />
              {formik.touched.businessNumber && formik.errors.businessNumber ? (
                <div className="text-red-600">
                  {formik.errors.businessNumber}
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <div className="flex-1">
              <label
                htmlFor="email"
                className="text-[#78828A] text-[16px] font-[600]"
              >
                Business Email
              </label>
              <input
                id="email"
                name="email"
                placeholder="Enter your Business Email"
                className="border p-2 rounded-lg w-full mt-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-600">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="flex-1">
              <label
                htmlFor="website"
                className="text-[#78828A] text-[16px] font-[600]"
              >
                Business Website
              </label>
              <input
                id="website"
                name="website"
                placeholder="Enter your Website"
                className="border p-2 rounded-lg w-full mt-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.website}
              />
              {formik.touched.website && formik.errors.website ? (
                <div className="text-red-600">{formik.errors.website}</div>
              ) : null}
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="goals"
              className="text-[#78828A] text-[16px] font-[600]"
            >
              Business Goals
            </label>
            <textarea
              id="goals"
              name="goals"
              placeholder="Describe your business goals..."
              className="border p-2 rounded-lg w-full h-[100px]"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.goals}
            />
          </div>
          <div className="mt-5">
            <h1 className="text-[#78828A] text-[16px] font-[600]">
              Owner Details
            </h1>
            <div className="flex gap-4 mt-5">
              <div className="flex-1">
                <label
                  htmlFor="ownerName"
                  className="text-[#78828A] text-[16px] font-[600]"
                >
                  Name
                </label>
                <input
                  id="ownerName"
                  name="ownerName"
                  placeholder="Enter your Name"
                  className="border p-2 rounded-lg w-full mt-2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.ownerName}
                />
                {formik.touched.ownerName && formik.errors.ownerName ? (
                  <div className="text-red-600">{formik.errors.ownerName}</div>
                ) : null}
              </div>
              <div className="flex-1">
                <label
                  htmlFor="ownerNumber"
                  className="text-[#78828A] text-[16px] font-[600]"
                >
                  Number
                </label>
                <input
                  id="ownerNumber"
                  name="ownerNumber"
                  placeholder="Enter your Number"
                  className="border p-2 rounded-lg w-full mt-2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.ownerNumber}
                />
                {formik.touched.ownerNumber && formik.errors.ownerNumber ? (
                  <div className="text-red-600">
                    {formik.errors.ownerNumber}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex gap-4 mt-5">
              <div className="flex-1">
                <label
                  htmlFor="ownerEmail"
                  className="text-[#78828A] text-[16px] font-[600]"
                >
                  Email
                </label>
                <input
                  id="ownerEmail"
                  name="ownerEmail"
                  placeholder="Enter your Email"
                  className="border p-2 rounded-lg w-full mt-2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.ownerEmail}
                />
                {formik.touched.ownerEmail && formik.errors.ownerEmail ? (
                  <div className="text-red-600">{formik.errors.ownerEmail}</div>
                ) : null}
              </div>
              <div className="flex-1">
                <label
                  htmlFor="ownerAddress"
                  className="text-[#78828A] text-[16px] font-[600]"
                >
                  Address
                </label>
                <input
                  id="ownerAddress"
                  name="ownerAddress"
                  placeholder="Enter your Address"
                  className="border p-2 rounded-lg w-full mt-2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.ownerAddress}
                />
                {formik.touched.ownerAddress && formik.errors.ownerAddress ? (
                  <div className="text-red-600">
                    {formik.errors.ownerAddress}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#C40C34] text-white p-2 rounded-lg mt-5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewBusiness;
