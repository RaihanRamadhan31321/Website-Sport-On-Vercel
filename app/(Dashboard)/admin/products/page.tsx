"use client"; 

import Button from "../../Components/ui/button-dashbord";
import { FiPlus } from "react-icons/fi";
import ProductTable from "../../Components/products/product-table";
import ProductModal from "../../Components/products/product-modal";
import { useState } from "react";

const ProductManagement = () => {
    const [isOpen, setIsOpen] = useState(false) 
    
    const handleCloseModal = () => {
    setIsOpen(false);
    };

    return (
        <div>
            <div className="flex justify-between item-center mb-10">
                <div>
                    <h1 className="font-bold text-2xl">Product Management</h1>
                    <p className="opacity-50">Manage your inventory, prices and stock</p>
                </div>
                <Button className="rounded-lg text-center" onClick={() => setIsOpen(true)}>
                <FiPlus size={24} /> Add Product
                </Button>
            </div>
            <ProductTable />
            <ProductModal isOpen={isOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default ProductManagement;