"use client";
import React, { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import BackButton from "@/app/components/BackButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { postBusiData } from "@/app/API/method";

// Categories and subcategories
const categories = [
  {
    value: "Vehicles",
    label: "Vehicles",
    subcategories: ["Cars", "Motorcycles", "Trucks"],
  },
  {
    value: "Restaurants",
    label: "Restaurants",
    subcategories: ["Fast Food", "Fine Dining", "Cafe"],
  },

];

const AddNewBusiness = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [logoPreview, setLogoPreview] = useState(null);
  const [bannerPreview, setBannerPreview] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const logoInputRef = useRef(null);
  const bannerInputRef = useRef(null);
  const imagesInputRef = useRef(null);

  // Load Google Maps API
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); // Redirect to login if no token
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDy-uoC7NTV52ghbZu7bDQT6M227FigwjI&libraries=places`;
    script.async = true;
    script.onload = () => setMapLoaded(true);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [router]);

  // Initialize autocomplete for address field
  useEffect(() => {
    if (!mapLoaded) return;

    const autocomplete = new window.google.maps.places.Autocomplete(
      document.getElementById("business_address"),
      { types: ["geocode"] }
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (!place.geometry) return;

      const { lat, lng } = place.geometry.location;
      setCoordinates({
        lat: lat(),
        lng: lng(),
      });

      formik.setFieldValue("business_address", place.formatted_address);
    });
  }, [mapLoaded]);

  const handleLogoClick = () => {
    logoInputRef.current.click();
  };

  const handleBannerClick = () => {
    bannerInputRef.current.click();
  };

  const handleImagesClick = () => {
    imagesInputRef.current.click();
  };

  const handleLogoSelected = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    setTimeout(() => {
      setLogoPreview(URL.createObjectURL(file));
      setLoading(false);
    }, 1000);
  };

  const handleBannerSelected = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    setTimeout(() => {
      setBannerPreview(URL.createObjectURL(file));
      setLoading(false);
    }, 1000);
  };

  const handleImagesSelected = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setLoading(true);
    setTimeout(() => {
      const previews = files.map((file) => URL.createObjectURL(file));
      setImagePreviews(previews);
      setLoading(false);
    }, 1000);
  };

  const fallbackCoordinates = {
    lat: coordinates.lat ?? 37.7749, // Default to San Francisco lat
    lng: coordinates.lng ?? -122.4194, // Default to San Francisco lng
  };

  // Formik setup
  const formik = useFormik({
    initialValues: {
      business_name: "",
      business_logo: null,
      business_address: "",
      business_number: "",
      business_email: "",
      business_website: "",
      business_goals: "",
      business_category: "",
      business_subcategory: "",
      business_banner: null,
      business_images: [],
    },
    validationSchema: Yup.object({
      business_name: Yup.string().required("Business Name is required"),
      business_address: Yup.string().required("Address is required"),
      business_number: Yup.string().required("Business Number is required"),
      business_email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      business_website: Yup.string().url("Invalid URL format"),
      business_goals: Yup.string(),
      business_category: Yup.string().required("Business Category is required"),
      business_subcategory: Yup.string().required(
        "Business Subcategory is required"
      ),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        setError(null);
        setSuccess(null);

        // Get token from localStorage
        const token = localStorage.getItem("token");
        if (!token) {
          router.push("/login");
          return;
        }

        // Prepare form data
        const formData = new FormData();
        formData.append("business_name", values.business_name);
        if (values.business_logo) {
          formData.append("business_logo", values.business_logo);
        }
        formData.append("business_address", values.business_address);
        formData.append("business_number", values.business_number);
        formData.append("business_email", values.business_email);
        formData.append("business_website", values.business_website);
        formData.append("business_goals", values.business_goals);
        formData.append("business_category", values.business_category);
        formData.append("business_subcategory", values.business_subcategory);
        if (values.business_banner) {
          formData.append("business_banner", values.business_banner);
        }
        // Append each image file
        values.business_images.forEach((file) => {
          formData.append("business_images", file);
        });
        formData.append(
          "business_coordinates",
          JSON.stringify({
            type: "Point",
            coordinates: [fallbackCoordinates.lng, fallbackCoordinates.lat],
          })
        );

        // Make API call using postData
        const response = await postBusiData("/auth/business", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.data) {
          setSuccess("Business created successfully!");
          console.log("Business created successfully:", response.data);
          // Optionally redirect or reset form
          // formik.resetForm();
          // router.push('/businesses');
        } else {
          if (response.status === 401) {
            setError("Session expired. Please login again.");
            localStorage.removeItem("token");
            router.push("/login");
          } else {
            setError(response.message || "Error creating business");
          }
          console.error("Error creating business:", response);
        }
      } catch (error) {
        setError("Network error. Please try again.");
        console.error("Network error:", error);
      } finally {
        setLoading(false);
      }
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
        {/* Success and error messages */}
        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            {success}
          </div>
        )}

        <form onSubmit={formik.handleSubmit}>
          <label
            htmlFor="business_name"
            className="text-[#78828A] text-[16px] font-[600]"
          >
            Business Name
          </label>
          <div>
            <input
              id="business_name"
              name="business_name"
              placeholder="Enter business name"
              className="border p-2 rounded-lg w-full"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.business_name}
            />
            {formik.touched.business_name && formik.errors.business_name ? (
              <div className="text-red-600">{formik.errors.business_name}</div>
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
                <div>Loading...</div>
              ) : (
                <>
                  {logoPreview ? (
                    <img
                      src={logoPreview}
                      alt="preview"
                      className="w-full h-72 object-cover rounded-lg"
                    />
                  ) : (
                    <div>
                      <Image
                        src="/b6.png"
                        alt="filesicon"
                        onClick={handleLogoClick}
                        width={50}
                        height={50}
                        className="cursor-pointer"
                      />
                      <input
                        type="file"
                        name="business_logo"
                        accept="image/*"
                        onChange={(e) => {
                          handleLogoSelected(e);
                          formik.setFieldValue(
                            "business_logo",
                            e.currentTarget.files[0]
                          );
                        }}
                        ref={logoInputRef}
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

          <div className="mt-4">
            <h6 className="text-[#78828A] text-[16px] font-[600]">
              Business Banner
            </h6>
            <div
              className="flex flex-col justify-center items-center border-2 border-dotted rounded-lg mt-4"
              style={{ minHeight: "200px" }}
            >
              {loading ? (
                <div>Loading...</div>
              ) : (
                <>
                  {bannerPreview ? (
                    <img
                      src={bannerPreview}
                      alt="preview"
                      className="w-full h-72 object-cover rounded-lg"
                    />
                  ) : (
                    <div>
                      <Image
                        src="/b6.png"
                        alt="filesicon"
                        onClick={handleBannerClick}
                        width={50}
                        height={50}
                        className="cursor-pointer"
                      />
                      <input
                        type="file"
                        name="business_banner"
                        accept="image/*"
                        onChange={(e) => {
                          handleBannerSelected(e);
                          formik.setFieldValue(
                            "business_banner",
                            e.currentTarget.files[0]
                          );
                        }}
                        ref={bannerInputRef}
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

          <div className="mt-4">
            <h6 className="text-[#78828A] text-[16px] font-[600]">
              Business Images
            </h6>
            <div
              className="flex flex-col justify-center items-center border-2 border-dotted rounded-lg mt-4"
              style={{ minHeight: "200px" }}
            >
              {loading ? (
                <div>Loading...</div>
              ) : (
                <>
                  {imagePreviews.length > 0 ? (
                    <div className="grid grid-cols-3 gap-4 w-full p-4">
                      {imagePreviews.map((preview, index) => (
                        <img
                          key={index}
                          src={preview}
                          alt={`preview-${index}`}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  ) : (
                    <div>
                      <Image
                        src="/b6.png"
                        alt="filesicon"
                        onClick={handleImagesClick}
                        width={50}
                        height={50}
                        className="cursor-pointer"
                      />
                      <input
                        type="file"
                        name="business_images"
                        accept="image/*"
                        onChange={(e) => {
                          handleImagesSelected(e);
                          formik.setFieldValue(
                            "business_images",
                            Array.from(e.currentTarget.files)
                          );
                        }}
                        ref={imagesInputRef}
                        className="hidden"
                        multiple
                      />
                    </div>
                  )}
                  <div className="flex flex-col justify-center mt-5">
                    <p className="text-[16px] text-[#AB9E7D]">
                      Upload multiple images
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="business_address"
              className="text-[#78828A] text-[16px] font-[600]"
            >
              Business Address (Start typing to search)
            </label>
            <input
              id="business_address"
              name="business_address"
              placeholder="Enter business address"
              className="border p-2 rounded-lg w-full mt-2"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.business_address}
            />
            {formik.touched.business_address &&
            formik.errors.business_address ? (
              <div className="text-red-600">
                {formik.errors.business_address}
              </div>
            ) : null}
            {coordinates.lat && coordinates.lng && (
              <div className="text-sm text-gray-500 mt-1">
                Coordinates: {coordinates.lat.toFixed(6)},{" "}
                {coordinates.lng.toFixed(6)}
              </div>
            )}
          </div>

          <div className="flex gap-4 mt-5">
            <div className="flex-1">
              <label
                htmlFor="business_number"
                className="text-[#78828A] text-[16px] font-[600]"
              >
                Business Number
              </label>
              <input
                id="business_number"
                name="business_number"
                placeholder="Enter business number"
                className="border p-2 rounded-lg w-full mt-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.business_number}
              />
              {formik.touched.business_number &&
              formik.errors.business_number ? (
                <div className="text-red-600">
                  {formik.errors.business_number}
                </div>
              ) : null}
            </div>

            <div className="flex-1">
              <label
                htmlFor="business_email"
                className="text-[#78828A] text-[16px] font-[600]"
              >
                Business Email
              </label>
              <input
                id="business_email"
                name="business_email"
                placeholder="Enter business email"
                className="border p-2 rounded-lg w-full mt-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.business_email}
              />
              {formik.touched.business_email &&
              formik.errors.business_email ? (
                <div className="text-red-600">
                  {formik.errors.business_email}
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex gap-4 mt-5">
            <div className="flex-1">
              <label
                htmlFor="business_website"
                className="text-[#78828A] text-[16px] font-[600]"
              >
                Business Website
              </label>
              <input
                id="business_website"
                name="business_website"
                placeholder="Enter website URL"
                className="border p-2 rounded-lg w-full mt-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.business_website}
              />
              {formik.touched.business_website &&
              formik.errors.business_website ? (
                <div className="text-red-600">
                  {formik.errors.business_website}
                </div>
              ) : null}
            </div>

            <div className="flex-1">
              <label
                htmlFor="business_category"
                className="text-[#78828A] text-[16px] font-[600]"
              >
                Business Category
              </label>
              <select
                id="business_category"
                name="business_category"
                className="border p-2 rounded-lg w-full mt-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.business_category}
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
              {formik.touched.business_category &&
              formik.errors.business_category ? (
                <div className="text-red-600">
                  {formik.errors.business_category}
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex gap-4 mt-5">
            <div className="flex-1">
              <label
                htmlFor="business_subcategory"
                className="text-[#78828A] text-[16px] font-[600]"
              >
                Business Subcategory
              </label>
              <select
                id="business_subcategory"
                name="business_subcategory"
                className="border p-2 rounded-lg w-full mt-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.business_subcategory}
                disabled={!formik.values.business_category}
              >
                <option value="">Select a subcategory</option>
                {formik.values.business_category &&
                  categories
                    .find((c) => c.value === formik.values.business_category)
                    ?.subcategories.map((sub) => (
                      <option key={sub} value={sub}>
                        {sub}
                      </option>
                    ))}
              </select>
              {formik.touched.business_subcategory &&
              formik.errors.business_subcategory ? (
                <div className="text-red-600">
                  {formik.errors.business_subcategory}
                </div>
              ) : null}
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="business_goals"
              className="text-[#78828A] text-[16px] font-[600]"
            >
              Business Goals
            </label>
            <textarea
              id="business_goals"
              name="business_goals"
              placeholder="Describe your business goals..."
              className="border p-2 rounded-lg w-full h-[100px]"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.business_goals}
            />
          </div>

          <button
            type="submit"
            className="mt-6 px-6 py-2 bg-[#CD9403] text-white rounded-lg disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewBusiness;