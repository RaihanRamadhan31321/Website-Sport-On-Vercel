"use client";

import Button from "@/app/(Dashboard)/Components/ui/button-dashbord";
import CategoryTable from "@/app/(Dashboard)/Components/categories/category-table";
import CategoryModal from "@/app/(Dashboard)/Components/categories/category-modal";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";

const CategoryManagement = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl">Category Management</h1>
          <p className="opacity-50">Organize your products into categories.</p>
        </div>
        <Button className="rounded-lg" onClick={() => setIsOpen(true)}>
          <FiPlus size={24} />
          Add Category
        </Button>
      </div>
      <CategoryTable />
      <CategoryModal isOpen={isOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default CategoryManagement;