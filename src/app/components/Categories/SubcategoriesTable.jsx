"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { CategoriesData } from "./CategoriesData";
import BackButton from "../BackButton";

const SubcategoriesTable = () => {
  const { id } = useParams(); // Get category ID from URL
  const router = useRouter();

  const category = CategoriesData.find((cat) => cat.id === parseInt(id));
  const [subcategories, setSubcategories] = useState(
    category?.subcategories || []
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [loading, setLoading] = useState({});
  const [activeStates, setActiveStates] = useState(
    subcategories.reduce(
      (acc, curr) => ({ ...acc, [curr.id]: curr.status === "Active" }),
      {}
    )
  );
  const [selectedRows, setSelectedRows] = useState({});

  useEffect(() => {
    // Prevent body scroll when component is mounted
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const handleAddSubcategory = () => {
    router.push("/pages/categories/addsubcategory"); // Navigate to add subcategory form
  };

  const handleEditClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (subcategoryId) => {
    if (confirm("Are you sure you want to delete this subcategory?")) {
      setSubcategories((prev) =>
        prev.filter((subcategory) => subcategory.id !== subcategoryId)
      );
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedSubcategory(null);
  };

  const handleFormSubmit = (updatedSubcategory) => {
    setSubcategories((prev) =>
      prev.map((subcategory) =>
        subcategory.id === updatedSubcategory.id
          ? updatedSubcategory
          : subcategory
      )
    );
    handleModalClose();
  };

  const handleToggleChange = (id) => {
    setLoading((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setLoading((prev) => ({ ...prev, [id]: false }));
      setActiveStates((prev) => ({ ...prev, [id]: !prev[id] }));
    }, 2000);
  };

  const handleSelectAll = () => {
    const allSelected =
      Object.keys(selectedRows).length === subcategories.length;
    const newSelectedRows = allSelected
      ? {}
      : Object.fromEntries(
          subcategories.map((subcategory) => [subcategory.id, true])
        );
    setSelectedRows(newSelectedRows);
  };

  const handleRowSelect = (id) => {
    setSelectedRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
         <BackButton />
        <h1 className="text-[#78828A] text-[24px] font-[500]">
          {category?.name || "Subcategories"}
        </h1>
        </div>
        <button
          className="px-4 py-2 bg-[#CD9403] text-white rounded-lg"
          onClick={handleAddSubcategory}
        >
          Add Subcategory
        </button>
      </div>

      <div className="mt-8">
        {subcategories.length > 0 ? (
          <table className="min-w-full bg-white border rounded-lg shadow">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">
                  <input
                    type="checkbox"
                    checked={
                      Object.keys(selectedRows).length === subcategories.length
                    }
                    onChange={handleSelectAll}
                    className="w-5 h-5 cursor-pointer"
                  />
                </th>
                <th className="p-3 text-left font-semibold text-gray-600">
                  ID
                </th>
                <th className="p-3 text-left font-semibold text-gray-600">
                  Icon
                </th>
                <th className="p-3 text-left font-semibold text-gray-600">
                  Title
                </th>
                <th className="p-3 text-left font-semibold text-gray-600">
                  Date Created
                </th>
                <th className="p-3 text-left font-semibold text-gray-600">
                  Status
                </th>
                <th className="p-3 text-left font-semibold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {subcategories.map((subcategory) => (
                <tr key={subcategory.id} className="border-t">
                  <td className="p-3">
                    <input
                      type="checkbox"
                      checked={!!selectedRows[subcategory.id]}
                      onChange={() => handleRowSelect(subcategory.id)}
                      className="w-5 h-5 cursor-pointer"
                    />
                  </td>
                  <td className="p-3">{subcategory.id}</td>
                  <td className="p-3">
                    <img
                      src={subcategory.image}
                      alt={subcategory.name}
                      className="w-16 h-16 object-cover rounded border p-2"
                    />
                  </td>
                  <td className="p-3 font-medium">{subcategory.name}</td>
                  <td className="p-3">{subcategory.Datecreated}</td>
                  <td className="p-3">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={activeStates[subcategory.id]}
                        onChange={() => handleToggleChange(subcategory.id)}
                      />
                      <div className="relative w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-[#CD9403]">
                        {loading[subcategory.id] && (
                          <div className="absolute inset-0 flex justify-center items-center">
                            <div className="h-4 w-4 border-2 border-[#CD9403] rounded-full animate-spin"></div>
                          </div>
                        )}
                        <div className="absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-full" />
                      </div>
                      <span className="ml-3 text-sm font-light">
                        {activeStates[subcategory.id] ? "Active" : "Inactive"}
                      </span>
                    </label>
                  </td>
                  <td className="p-3">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditClick(subcategory)}
                        className="border border-black px-4 py-2 rounded-lg"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteClick(subcategory.id)}
                        className="border border-black px-4 py-2 rounded-lg"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No subcategories available.</p>
        )}
      </div>
    </div>
  );
};

export default SubcategoriesTable;
