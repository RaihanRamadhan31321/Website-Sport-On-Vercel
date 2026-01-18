"use client";

import {
    FiArrowRight,
    FiChevronDown,
    FiChevronUp,
    FiShoppingBag,
} from "react-icons/fi";
import Button from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ProductActions = () => {
    const {push} =useRouter()
    const [qty, setqty] = useState(1)

    const checkout = () => {

    }

    return (
        <div className="flex gap-5 items-stretch">

            <div className="flex h-14 border border-gray-500">
                <div className="aspect-square text-xl font-medium border-r border-gray-500 flex items-center justify-center">
                    <span>{qty}</span>
                </div>

                <div className="flex flex-col">
                    <button className="border-b border-gray-500 cursor-pointer h-1/2 aspect-square flex items-center justify-center"
                        onClick={() => setqty(qty + 1)}
                    >
                        <FiChevronUp />
                    </button>
                    <button className="cursor-pointer h-1/2 aspect-square flex items-center justify-center"
                        onClick={() => setqty(qty > 1 ? qty - 1 : qty)}
                    >
                        <FiChevronDown />
                    </button>
                </div>
            </div>

            <Button className="px-15 w-full flex items-center gap-2">
                <FiShoppingBag size={24} />
                Add to Cart
            </Button>

            <Button variant="dark" className="px-12 w-full flex items-center gap-2" onClick={() => push("/checkout")}>
                Checkout Now
                <FiArrowRight size={24} />
            </Button>
        </div>
    );
};

export default ProductActions;
