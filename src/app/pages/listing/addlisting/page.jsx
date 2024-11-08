"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddNewListing = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      listingName: "",
      phoneNumber: "",
      email: "",
      category: "",
      subcategory: "",
      price: "",
      description: "",
      image: null,
    },
    validationSchema: Yup.object({
      listingName: Yup.string().required("Listing name is required"),
      phoneNumber: Yup.string().required("Phone number is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      category: Yup.string().required("Category is required"),
      subcategory: Yup.string().required("Subcategory is required"),
      price: Yup.number().required("Price is required").positive("Price must be positive"),
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission logic here
    },
  });

  const categories = [
    { value: "", label: "Select a category" },
    { value: "real-estate", label: "Real Estate" },
    { value: "electronics", label: "Electronics" },
  ];

  const subcategories = {
    "real-estate": [
      { value: "apartment", label: "Apartment" },
      { value: "house", label: "House" },
    ],
    electronics: [
      { value: "mobile", label: "Mobile Phone" },
      { value: "laptop", label: "Laptop" },
    ],
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      formik.setFieldValue("image", file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleCancel = () => {
    formik.resetForm();
    setImagePreview(null);
  };

  return (
    <form onSubmit={formik.handleSubmit} className="p-6 bg-white border rounded shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <button onClick={() => router.back()} className="bg-gray-300 p-2 rounded-lg text-gray-700">
          ← Back
        </button>
        <h1 className="text-[#78828A] text-[24px] font-[500]">Create New Listing</h1>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Listing Name</label>
        <input
          type="text"
          name="listingName"
          value={formik.values.listingName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full border rounded p-2"
        />
        {formik.touched.listingName && formik.errors.listingName && (
          <div className="text-red-500">{formik.errors.listingName}</div>
        )}
      </div>

      {/* Repeat for other input fields */}

      <div className="mb-4">
        <label className="block mb-1">Upload Image</label>
        <input
          type="file"
          onChange={handleImageChange}
          className="w-full border rounded p-2"
          accept="image/*"
        />
        {imagePreview && (
          <img src={imagePreview} alt="Preview" className="mt-2 w-32 h-32 object-cover" />
        )}
      </div>

      <div className="flex gap-3">
        <button type="submit" className="bg-[#CD9403] text-white px-6 py-2 rounded-lg">
          Save
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="bg-gray-300 text-black px-4 py-2 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddNewListing;
