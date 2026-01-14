import Image from "next/image";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import Button from "../ui/button";


const productList = [
    {
        name: "SportOn Product 1",
        categori: "Running",
        price: 450000,
        imgUrl: "product-1.png",
    },
    {
        name: "SportOn Product 2",
        categori: "Tennis",
        price: 350000,
        imgUrl: "product-2.png",
    },
    {
        name: "SportOn Product 3",
        categori: "Running",
        price: 250000,
        imgUrl: "product-3.png",
    },
    {
        name: "SportOn Product 4",
        categori: "Running",
        price: 150000,
        imgUrl: "product-4.png",
    },
    {
        name: "SportOn Product 5",
        categori: "Running",
        price: 650000,
        imgUrl: "product-5.png",
    },
    {
        name: "SportOn Product 6",
        categori: "BasketBall",
        price: 750000,
        imgUrl: "product-6.png",
    },
];

const ProductsSection = () => {
    return (
        <section id="products-section" className="container mx-auto mt-32">
        <h2 className="mb-11 text-center text-4xl font-bold italic">
            <span className="text-primary">OUR</span> PRODUCTS
        </h2>

        <div className="grid grid-cols-4 gap-5">
            {productList.map((product, index) => (
            <Link
                href="#"
                key={index}
                className="p-1.5 block bg-white hover:drop-shadow-xl"
            >
                <div className="flex aspect-square w-full items-center justify-center bg-primary-light relative">
                <Image
                    src={`/image/products/${product.imgUrl}`}
                    width={230}
                    height={230}
                    alt={product.name}
                    className="aspect-square"
                />
                <Button className="w-10 h-10 p-2! absolute right-3 top-3 ">
                    <FiPlus size={24}></FiPlus></Button>
                </div>
                <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
                <div className="flex justify-between mb-8">
                    <div className="text-gray-500">{product.categori}</div>
                    <div className="font-medium text-primary">
                    {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        maximumSignificantDigits: 3,
                    }).format(product.price)}
                    </div>
                </div>
            </Link>
            ))}
        </div>
        </section>
    );
};

export default ProductsSection;
