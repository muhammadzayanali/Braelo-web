"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import BackButton from "@/app/components/BackButton";

const AddCategory = () => {
  const formik = useFormik({
    initialValues: {
      categoryName: "",
      image: null,
    },
    validationSchema: Yup.object({
      categoryName: Yup.string().required("Category name is required"),
      image: Yup.mixed()
        .required("An image is required")
        .test("fileSize", "File too large", (value) => {
          return value && value.size <= 2000000; // Limit to 2MB
        })
        .test("fileType", "Unsupported File Format", (value) => {
          return (
            value &&
            ["image/jpeg", "image/png", "image/gif"].includes(value.type)
          );
        }),
    }),
    onSubmit: (values) => {
      console.log({
        categoryName: values.categoryName,
        image: values.image,
      });
      // Here you can also make your API call
    },
  });

  const handleImageChange = (e) => {
    const file = e.currentTarget.files[0];
    if (file) {
      formik.setFieldValue("image", file);
      formik.setFieldValue("imagePreview", URL.createObjectURL(file));
    }
  };

  const handleCancel = () => {
    formik.resetForm();
  };

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="p-6 bg-white border rounded shadow-md"
      >
        <div className="flex items-center gap-2">
          <BackButton />
          <h1 className="text-[#78828A] text-[24px] font-[500]">
0            Add Category
          </h1>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Category Name</label>
          <input
            type="text"
            id="categoryName"
            value={formik.values.categoryName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            className={`w-full border rounded p-2 ${
              formik.touched.categoryName && formik.errors.categoryName
                ? "border-red-500"
                : ""
            }`}
          />
          {formik.touched.categoryName && formik.errors.categoryName ? (
            <div className="text-red-600">{formik.errors.categoryName}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label className="block mb-1">Upload Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className={`w-full border rounded p-2 ${
              formik.touched.image && formik.errors.image
                ? "border-red-500"
                : ""
            }`}
            accept="image/*"
            name="image"
          />
          {formik.touched.image && formik.errors.image ? (
            <div className="text-red-600">{formik.errors.image}</div>
          ) : null}
          {formik.values.imagePreview && (
            <img
              src={formik.values.imagePreview}
              alt="Preview"
              className="mt-2 w-32 h-32 object-cover"
            />
          )}
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-[#CD9403] text-white px-6 py-2 rounded-lg"
          >
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
    </>
  );
};

export default AddCategory;
