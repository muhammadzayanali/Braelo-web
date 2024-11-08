"use client";

import React from "react";
import { useRouter } from "next/navigation";
import CategoriesTable from "@/app/components/Categories/CategoriesTable";
import BackButton from "@/app/components/BackButton";

const Categories = () => {
  const router = useRouter();

  const handleAddCategory = () => {
    router.push("/pages/categories/addcategory");
  };

  return (
    <div>
      <div className="flex justify-between p-5 border-b">
      <div className="flex items-center gap-2">
          <BackButton />
          <h1 className="text-[#78828A] text-[24px] font-[500]">Categories</h1>
        </div>
        <button
          className="px-4 py-2 bg-[#CD9403] text-white rounded-lg font-plus"
          onClick={handleAddCategory}
        >
          Add New Category
        </button>
      </div>
      <div>
        <CategoriesTable />
      </div>
    </div>
  );
};

export default Categories;
