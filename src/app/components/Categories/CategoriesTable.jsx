"use client";

import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Image } from "primereact/image";
import { useRouter } from "next/navigation";
import { CategoriesData } from "./CategoriesData";
import { getHeaderStyle } from "../Users/UserData";
import { getBodyStyle } from "../Users/UserData";
const CategoriesTable = () => {
  const [categories, setCategories] = useState(
    CategoriesData.map((category) => ({ ...category, isSelected: false }))
  );
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const router = useRouter();

  const deleteCategory = (categoryId) => {
    const updatedCategories = categories.filter((cat) => cat.id !== categoryId);
    setCategories(updatedCategories);
  };
  const viewSubcategories = (category) => {
    const subcategoriesData = {
      name: category.name,
      subcategories: JSON.stringify(category.subcategories),
    };
    const queryString = new URLSearchParams(subcategoriesData).toString();

    router.push(`/pages/categories/${category.id}/subcategories`);
  };

  const openEditModal = (category) => {
    setSelectedCategory(category);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setSelectedCategory(null);
  };

  const imageTemplate = (rowData) => {
    return <Image src={rowData.image} alt={rowData.name} width="100" />;
  };

  const toggleStatusTemplate = (rowData) => {
    const handleToggle = () => {
      const updatedCategories = categories.map((cat) =>
        cat.id === rowData.id
          ? { ...cat, status: cat.status === "Active" ? "Inactive" : "Active" }
          : cat
      );
      setCategories(updatedCategories);
    };

    return (
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={rowData.status === "Active"}
          onChange={handleToggle}
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:bg-[#CD9403]">
          <div
            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
              rowData.status === "Active" ? "translate-x-5" : ""
            }`}
          ></div>
        </div>
        <span className="ms-3 text-sm ">
          {rowData.status === "Active" ? "Active" : "Inactive"}
        </span>
      </label>
    );
  };

  const totalSubcategoriesTemplate = (rowData) => {
    return <span>{rowData.subcategories.length}</span>;
  };

  const actionTemplate = (rowData) => {
    return (
      <div className="flex gap-2">
        <button
          onClick={() => deleteCategory(rowData.id)}
          className="flex items-center  border border-black px-4 py-2 rounded-lg"
          title="Delete"
        >
          Delete
        </button>
        <button
          onClick={() => openEditModal(rowData)}
          className="flex items-center  border border-black px-4 py-2 rounded-lg"
          title="Edit"
        >
          Edit
        </button>
        <button
          onClick={() => viewSubcategories(rowData)}
          className="flex items-center  border border-black px-4 py-2 rounded-lg"
          title="View Subcategories"
        >
          View
        </button>
      </div>
    );
  };

  const selectCheckboxTemplate = (rowData) => {
    const handleRowSelect = () => {
      setCategories((prevCategories) =>
        prevCategories.map((cat) =>
          cat.id === rowData.id ? { ...cat, isSelected: !cat.isSelected } : cat
        )
      );
    };

    return (
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={rowData.isSelected}
          onChange={handleRowSelect}
          className="sr-only peer"
        />
        <div
          className={`w-5 h-5 flex items-center justify-center border-2 border-gray-300 rounded ${
            rowData.isSelected ? "bg-yellow-500" : "bg-white"
          }`}
        >
          {rowData.isSelected && (
            <span className="text-white text-xs font-bold">✔</span>
          )}
        </div>
      </label>
    );
  };

  const handleSelectAll = () => {
    setSelectAll((prev) => !prev);
    setCategories((prevCategories) =>
      prevCategories.map((cat) => ({ ...cat, isSelected: !selectAll }))
    );
  };

  return (
    <div className="p-4">
      {/* {isEditModalOpen && (
        <EditCategoryModal
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          subcategory={selectedCategory}
          onSubmit={(updatedCategory) => {
            setCategories((prevCategories) =>
              prevCategories.map((cat) =>
                cat.id === updatedCategory.id ? updatedCategory : cat
              )
            );
            closeEditModal();
          }}
        />
      )} */}

      <DataTable value={categories} paginator rows={10} className="p-datatable">
        <Column
          header={
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
                className="sr-only peer"
              />
              <div
                className={`w-5 h-5 border-2 border-gray-300 rounded ${
                  selectAll ? "bg-yellow-500" : "bg-white"
                }`}
              >
                {selectAll && <span className="text-white">✔</span>}
              </div>
            </label>
          }
          body={selectCheckboxTemplate}
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          field="id"
          header="ID"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          body={imageTemplate}
          header="Icon"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          field="name"
          header="Category Name"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          body={totalSubcategoriesTemplate}
          header="Total Subcategories"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          field="status"
          body={toggleStatusTemplate}
          header="Status"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          body={actionTemplate}
          header="Actions"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
      </DataTable>
    </div>
  );
};

export default CategoriesTable;
