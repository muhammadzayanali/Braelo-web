// pages/listing/addlisting/[slug]/[name]/page.jsx (Form Page)
"use client";
import { useParams, useSearchParams } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import BackButton from "@/app/components/BackButton";
import { FormData as FormStructure } from "@/app/components/Listing/FormData";
import { postBusiData } from "@/app/API/method";

const Form = () => {
  const { slug, name } = useParams();
  const searchParams = useSearchParams();
  const endpoint = searchParams.get("endpoint");
  const category = searchParams.get("category");
  const subcategory = searchParams.get("subcategory");

  const [commonFields, setCommonFields] = useState([]);
  const [specificFields, setSpecificFields] = useState([]);
  const [chips, setChips] = useState([]);
  const [selectedChips, setSelectedChips] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const autocompleteRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load form structure
  useEffect(() => {
    if (slug && name && FormStructure[slug] && FormStructure[slug][name]) {
      const category = FormStructure[slug];
      setCommonFields(category.commonFields || []);
      const subCategoryData = category[name] || {};
      setSpecificFields(subCategoryData.fields || []);

      const processedChips = (subCategoryData.chips || []).map((chipGroup) => ({
        ...chipGroup,
        required: chipGroup.label === "Condition",
      }));
      setChips(processedChips);
    }
  }, [slug, name]);

  // Initialize Google Maps autocomplete
  useEffect(() => {
    const locationField = document.getElementById("location");
    if (locationField && !autocompleteRef.current) {
      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDy-uoC7NTV52ghbZu7bDQT6M227FigwjI&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = initializeAutocomplete;
        document.head.appendChild(script);
      } else {
        initializeAutocomplete();
      }
    }

    function initializeAutocomplete() {
      autocompleteRef.current = new window.google.maps.places.Autocomplete(
        document.getElementById("location"),
        { types: ["geocode"], fields: ["formatted_address", "geometry"] }
      );

      autocompleteRef.current.addListener("place_changed", () => {
        const place = autocompleteRef.current.getPlace();
        if (place.geometry) {
          setCoordinates({
            type: "Point",
            coordinates: [
              place.geometry.location.lng(),
              place.geometry.location.lat(),
            ],
          });
          setFormErrors((prev) => ({ ...prev, location: "" }));
        }
      });
    }
  }, [commonFields]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    const errors = {};
    if (!document.getElementById("location")?.value)
      errors.location = "Location is required";
    if (!imageFile) errors.images = "Image is required";

    chips.forEach((chipGroup) => {
      if (chipGroup.required && !selectedChips[chipGroup.label]) {
        errors[chipGroup.label] = `${chipGroup.label} is required`;
      }
    });

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      setIsSubmitting(false);
      return;
    }

    try {
      const formPayload = new FormData();
      formPayload.append("category", category);
      formPayload.append("subcategory", subcategory);

      if (coordinates) {
        formPayload.append("listing_coordinates", JSON.stringify(coordinates));
      }

      if (imageFile) {
        formPayload.append("pictures", imageFile);
      }

      [...commonFields, ...specificFields].forEach((field) => {
        const value = document.getElementById(field.name)?.value || "";
        formPayload.append(field.name, value);
      });

      chips.forEach((chipGroup) => {
        formPayload.append(
          chipGroup.label,
          selectedChips[chipGroup.label] || ""
        );
      });

      // Use the endpoint from URL params with base URL
      const response = await postBusiData(
        `/listing/${endpoint}`,
        formPayload
      );

      if (response.success) {
        alert("Listing submitted successfully!");
      } else {
        throw new Error(response.message || "Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChipSelection = (group, option) => {
    setSelectedChips((prev) => ({ ...prev, [group]: option }));
    if (formErrors[group]) {
      setFormErrors((prev) => ({ ...prev, [group]: "" }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      setFormErrors((prev) => ({ ...prev, images: "" }));
    }
  };
  const renderField = (field) => (
    <div key={field.name} className="mb-4">
      <label htmlFor={field.name} className="block font-medium mb-1">
        {field.label}
        {(field.name === "location" || field.name === "image") && (
          <span className="text-red-500">*</span>
        )}
      </label>
      {field.type === "textarea" ? (
        <textarea id={field.name} className="w-full p-2 border rounded" />
      ) : field.type === "file" ? (
        <>
          <input
            type="file"
            id={field.name}
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
            accept="image/*"
          />
          {formErrors.images && (
            <p className="text-red-500 text-sm mt-1">{formErrors.images}</p>
          )}
        </>
      ) : (
        <input
          type={field.type || "text"}
          id={field.name}
          className="w-full p-2 border rounded"
        />
      )}
      {field.name === "location" && formErrors.location && (
        <p className="text-red-500 text-sm mt-1">{formErrors.location}</p>
      )}
    </div>
  );

  const renderChipGroup = (chipGroup) => (
    <div key={chipGroup.label} className="mb-4">
      <h3 className="font-medium mb-2">
        {chipGroup.label}
        {chipGroup.required && <span className="text-red-500">*</span>}
      </h3>
      <div className="flex flex-wrap gap-2">
        {chipGroup.options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => handleChipSelection(chipGroup.label, option)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedChips[chipGroup.label] === option
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      {formErrors[chipGroup.label] && (
        <p className="text-red-500 text-sm mt-1">
          {formErrors[chipGroup.label]}
        </p>
      )}
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto p-4">
      <BackButton />

      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="space-y-4"
      >
        <h1 className="text-2xl font-bold mb-6">
          {slug && slug.charAt(0).toUpperCase() + slug.slice(1)} -
          {subcategory && subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
        </h1>

        {imagePreview && (
          <div className="mb-4 flex justify-center">
            <img
              src={imagePreview}
              alt="Preview"
              className="max-h-60 rounded-md object-contain border"
            />
          </div>
        )}

        {commonFields.map(renderField)}
        {specificFields.map(renderField)}
        {chips.map(renderChipGroup)}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 text-white font-medium rounded transition-colors ${
            isSubmitting ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit Listing"}
        </button>
      </form>
    </div>
  );
};

export default Form;

// "use client";
// import { useParams } from "next/navigation";
// import React, { useState, useEffect, useRef } from "react";
// import BackButton from "@/app/components/BackButton";
// import { FormData as FormStructure } from "@/app/components/Listing/FormData";
// import { postBusiData } from "@/app/API/method";

// const Form = () => {
//   const { slug, name } = useParams();
//   const [commonFields, setCommonFields] = useState([]);
//   const [specificFields, setSpecificFields] = useState([]);
//   const [chips, setChips] = useState([]);
//   const [selectedChips, setSelectedChips] = useState({});
//   const [imageFile, setImageFile] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [coordinates, setCoordinates] = useState(null);
//   const [formErrors, setFormErrors] = useState({});
//   const autocompleteRef = useRef(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Load form structure
//   useEffect(() => {
//     if (slug && name && FormStructure[slug] && FormStructure[slug][name]) {
//       const category = FormStructure[slug];
//       setCommonFields(category.commonFields || []);
//       const subCategoryData = category[name] || {};
//       setSpecificFields(subCategoryData.fields || []);

//       // Mark required chips (like Condition)
//       const processedChips = (subCategoryData.chips || []).map(chipGroup => ({
//         ...chipGroup,
//         required: chipGroup.label === "Condition" // Mark Condition as required
//       }));
//       setChips(processedChips);
//     }
//   }, [slug, name]);

//   // Initialize Google Maps autocomplete
//   useEffect(() => {
//     const locationField = document.getElementById('location');
//     if (locationField && !autocompleteRef.current) {
//       if (!window.google) {
//         const script = document.createElement('script');
//         script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDy-uoC7NTV52ghbZu7bDQT6M227FigwjI&libraries=places`;
//         script.async = true;
//         script.defer = true;
//         script.onload = initializeAutocomplete;
//         document.head.appendChild(script);
//       } else {
//         initializeAutocomplete();
//       }
//     }

//     function initializeAutocomplete() {
//       autocompleteRef.current = new window.google.maps.places.Autocomplete(
//         document.getElementById('location'),
//         { types: ['geocode'], fields: ['formatted_address', 'geometry'] }
//       );

//       autocompleteRef.current.addListener('place_changed', () => {
//         const place = autocompleteRef.current.getPlace();
//         if (place.geometry) {
//           setCoordinates({
//             type: "Point",
//             coordinates: [place.geometry.location.lng(), place.geometry.location.lat()]
//           });
//           setFormErrors(prev => ({ ...prev, location: '' }));
//         }
//       });
//     }
//   }, [commonFields]);

//   const handleChipSelection = (group, option) => {
//     setSelectedChips(prev => ({ ...prev, [group]: option }));
//     if (formErrors[group]) {
//       setFormErrors(prev => ({ ...prev, [group]: '' }));
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFile(file);
//       setImagePreview(URL.createObjectURL(file));
//       setFormErrors(prev => ({ ...prev, images: '' }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Validate required fields
//     const errors = {};
//     if (!document.getElementById('location')?.value) errors.location = "Location is required";
//     if (!imageFile) errors.images = "Image is required";

//     // Validate required chips
//     chips.forEach(chipGroup => {
//       if (chipGroup.required && !selectedChips[chipGroup.label]) {
//         errors[chipGroup.label] = `${chipGroup.label} is required`;
//       }
//     });

//     setFormErrors(errors);
//     if (Object.keys(errors).length > 0) {
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       const formPayload = new FormData();
//       formPayload.append('category', slug);
//       formPayload.append('subcategory', name);

//       if (coordinates) {
//         formPayload.append('listing_coordinates', JSON.stringify(coordinates));
//       }

//       if (imageFile) {
//         formPayload.append('pictures', imageFile);
//       }

//       // Add all form fields
//       [...commonFields, ...specificFields].forEach(field => {
//         const value = document.getElementById(field.name)?.value || '';
//         formPayload.append(field.name, value);
//       });

//       // Add all chip selections
//       chips.forEach(chipGroup => {
//         formPayload.append(chipGroup.label, selectedChips[chipGroup.label] || '');
//       });

//       const response = await postBusiData(`/listing/${slug}`, formPayload);

//       if (response.success) {
//         alert('Listing submitted successfully!');
//         // Reset form if needed
//       } else {
//         throw new Error(response.message || 'Submission failed');
//       }
//     } catch (error) {
//       console.error('Submission error:', error);
//       alert(`Error: ${error.message}`);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const renderField = (field) => (
//     <div key={field.name} className="mb-4">
//       <label htmlFor={field.name} className="block font-medium mb-1">
//         {field.label}
//         {(field.name === 'location' || field.name === 'image') && (
//           <span className="text-red-500">*</span>
//         )}
//       </label>
//       {field.type === 'textarea' ? (
//         <textarea
//           id={field.name}
//           className="w-full p-2 border rounded"
//         />
//       ) : field.type === 'file' ? (
//         <>
//           <input
//             type="file"
//             id={field.name}
//             onChange={handleImageChange}
//             className="w-full p-2 border rounded"
//             accept="image/*"
//           />
//           {formErrors.images && (
//             <p className="text-red-500 text-sm mt-1">{formErrors.images}</p>
//           )}
//         </>
//       ) : (
//         <input
//           type={field.type || 'text'}
//           id={field.name}
//           className="w-full p-2 border rounded"
//         />
//       )}
//       {field.name === 'location' && formErrors.location && (
//         <p className="text-red-500 text-sm mt-1">{formErrors.location}</p>
//       )}
//     </div>
//   );

//   const renderChipGroup = (chipGroup) => (
//     <div key={chipGroup.label} className="mb-4">
//       <h3 className="font-medium mb-2">
//         {chipGroup.label}
//         {chipGroup.required && <span className="text-red-500">*</span>}
//       </h3>
//       <div className="flex flex-wrap gap-2">
//         {chipGroup.options.map(option => (
//           <button
//             key={option}
//             type="button"
//             onClick={() => handleChipSelection(chipGroup.label, option)}
//             className={`px-3 py-1 rounded-full text-sm ${
//               selectedChips[chipGroup.label] === option
//                 ? 'bg-blue-600 text-white'
//                 : 'bg-gray-200 hover:bg-gray-300'
//             }`}
//           >
//             {option}
//           </button>
//         ))}
//       </div>
//       {formErrors[chipGroup.label] && (
//         <p className="text-red-500 text-sm mt-1">{formErrors[chipGroup.label]}</p>
//       )}
//     </div>
//   );

//   return (
//     <div className="max-w-3xl mx-auto p-4">
//       <BackButton />

//       <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
//         <h1 className="text-2xl font-bold mb-6">
//           {slug && slug.charAt(0).toUpperCase() + slug.slice(1)} -
//           {name && name.charAt(0).toUpperCase() + name.slice(1)}
//         </h1>

//         {imagePreview && (
//           <div className="mb-4 flex justify-center">
//             <img
//               src={imagePreview}
//               alt="Preview"
//               className="max-h-60 rounded-md object-contain border"
//             />
//           </div>
//         )}

//         {commonFields.map(renderField)}
//         {specificFields.map(renderField)}
//         {chips.map(renderChipGroup)}

//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className={`w-full py-2 px-4 text-white font-medium rounded transition-colors ${
//             isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
//           }`}
//         >
//           {isSubmitting ? 'Submitting...' : 'Submit Listing'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;
