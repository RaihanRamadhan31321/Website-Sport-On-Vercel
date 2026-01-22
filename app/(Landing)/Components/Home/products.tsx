"use client";

import Image from "next/image";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import Button from "../ui/button";
import priceFormatter from "@/app/utils/price-formatter";
import { Product } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";
import { useCartStore } from "@/app/hooks/use-cart-store";


type TProductsProps = {
    products: Product[]
}

const ProductsSection = ({products}: TProductsProps) => {
    const {addItem} = useCartStore();

    const handleAddtoCart = (e: React.MouseEvent, product: Product) => {
        e.stopPropagation();
        e.preventDefault();
        addItem(product);
    }


    return (
        <section id="products-section" className="container mx-auto mt-32 mb-52">
        <h2 className="mb-11 text-center text-4xl font-bold italic">
            <span className="text-primary">OUR</span> PRODUCTS
        </h2>

        <div className="grid grid-cols-4 gap-5">
            {products.map((product) => (
            <Link
                href={`/product/${product._id}`}
                key={product._id}
                className="p-1.5 block bg-white hover:drop-shadow-xl"
            >
                <div className="flex aspect-square w-full items-center justify-center bg-primary-light relative">
                <Image
                    src={getImageUrl(product.imageUrl)}
                    width={220}
                    height={200}
                    alt={product.name}
                    className="aspect-square"
                />
                <Button className="w-10 h-10 p-2! absolute right-3 top-3 " onClick={(e) =>handleAddtoCart(e, product)}>
                    <FiPlus size={24}></FiPlus></Button>
                </div>
                <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
                <div className="flex justify-between mb-8">
                    <div className="text-gray-500">{product.category.name}</div>
                    <div className="font-medium text-primary">
                    {priceFormatter(product.price)}
                    </div>
                </div>
            </Link>
            ))}
        </div>
        </section>
    );
};

export default ProductsSection;
