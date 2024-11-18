"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import BackButton from "@/app/components/BackButton";

// Example form data with shared fields
const formData = {
  vehicles: {
    commonFields: [
      { label: "Choose Image", type: "file", name: "image" },
      { label: "Ad Title", type: "text", name: "title" },
      { label: "Location", type: "text", name: "location" },
      { label: "Make*", type: "text", name: "make" },
      { label: "Price", type: "number", name: "price" },
      { label: "Model", type: "text", name: "model" },
      { label: "Year", type: "number", name: "year" },
      { label: "Color", type: "text", name: "color" },
      { label: "Fuel Type", type: "text", name: "fuelType" },
      { label: "Description", type: "textarea", name: "description" },
    ],
    cars: {
      chips: [
        { label: "Transmission", options: ["Manual", "Automatic"] },
        { label: "Condition", options: ["New", "Used"] },
        { label: "Number of Doors", options: ["1/3", "4", "3"] },
        { label: "Purpose", options: ["Sale", "Rental"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    motorcycle: {
      chips: [
        { label: "Transmission", options: ["Manual", "Automatic"] },
        { label: "Condition", options: ["New", "Used"] },
        { label: "Purpose", options: ["Sale", "Rental"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
  },
  realestate: {
    commonFields: [
      { label: "Choose Image", type: "file", name: "image" },
      { label: "Ad Title", type: "text", name: "title" },
      { label: "Location", type: "text", name: "location" },
      { label: "Property Type*", type: "text", name: "propertytype" },
      { label: "No of Bedrooms", type: "number", name: "noofbedrooms" },
      { label: "Year Built", type: "number", name: "yearbuilt" },
      { label: "Size", type: "text", name: "size" },
      { label: "Fuel Type", type: "text", name: "fuelType" },
      { label: "Description", type: "textarea", name: "description" },
    ],
    apartment: {
      chips: [
        { label: "Transmission", options: ["Manual", "Automatic"] },
        { label: "Condition", options: ["New", "Used"] },
        { label: "Number of Doors", options: ["1/3", "4", "3"] },
        { label: "Purpose", options: ["Sale", "Rental"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
  },
};

const Form = () => {
  const { slug, name } = useParams();
  const [commonFields, setCommonFields] = useState([]);
  const [specificFields, setSpecificFields] = useState([]);
  const [chips, setChips] = useState([]);
  const [selectedChips, setSelectedChips] = useState({});
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (slug && name) {
      const category = formData[slug];
      if (category) {
        setCommonFields(category.commonFields || []);
        const subCategoryData = category[name] || {};
        setSpecificFields(subCategoryData.fields || []);
        setChips(subCategoryData.chips || []);
      }
    }
  }, [slug, name]);

  const handleChipSelection = (group, option) => {
    setSelectedChips((prevSelected) => ({
      ...prevSelected,
      [group]: prevSelected[group] === option ? null : option,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gather the form data
    const formDataObj = {
      commonFields: commonFields.reduce((acc, field) => {
        acc[field.name] = document.getElementById(field.name)?.value || "";
        return acc;
      }, {}),

      specificFields: specificFields.reduce((acc, field) => {
        acc[field.name] = document.getElementById(field.name)?.value || "";
        return acc;
      }, {}),

      chips: selectedChips,

      image: imagePreview ? imagePreview : null,
    };

    console.log("Form Submitted with data:", formDataObj);
  };

  const renderFields = (fields) =>
    fields.map((field, index) => (
      <div key={index} className="mb-4">
        <label
          htmlFor={field.name}
          className="text-sm font-semibold text-gray-700 sm:col-span-2"
        >
          {field.label}
        </label>
        {field.type === "textarea" ? (
          <textarea
            name={field.name}
            id={field.name}
            className="w-full p-2 border-2 border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        ) : field.type === "file" ? (
          <input
            type="file"
            name={field.name}
            id={field.name}
            className="w-full p-2 border-2 border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            onChange={handleImageChange}
          />
        ) : (
          <input
            type={field.type}
            name={field.name}
            id={field.name}
            className="w-full p-2 border-2 border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        )}
      </div>
    ));

  const renderChips = () =>
    chips.map((chipGroup, index) => (
      <div key={index} className="mb-4">
        <h3 className="mb-2 text-sm font-semibold text-gray-700">
          {chipGroup.label}
        </h3>
        <div className="flex flex-wrap gap-2">
          {chipGroup.options.map((option, idx) => (
            <div
              key={idx}
              onClick={() => handleChipSelection(chipGroup.label, option)}
              className={`px-4 py-2 text-sm rounded-full cursor-pointer border ${
                selectedChips[chipGroup.label] === option
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-200 text-gray-700 border-gray-300"
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    ));

  const a = name;
  const categoryName = a.charAt(0).toUpperCase() + a.slice(1);

  return (
    <>
      <div>
        <BackButton />
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-full mx-auto p-6 bg-white shadow-lg rounded-lg"
      >
        <h1 className="text-xl font-bold text-center mb-6">
          Category: {slug} - Subcategory: {categoryName}
        </h1>

        {imagePreview && (
          <div className="mb-6 flex justify-center">
            <img
              src={imagePreview}
              alt="Preview"
              className="max-h-48 rounded-md border-2 border-gray-300"
            />
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          {/* Render Common Fields */}
          {renderFields(commonFields)}

          {/* Render Specific Fields if available */}
          {renderFields(specificFields)}
        </div>

        {/* Chips Section */}
        <div className="my-6">{renderChips()}</div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
