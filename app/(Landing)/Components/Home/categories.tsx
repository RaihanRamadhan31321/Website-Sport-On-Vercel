import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";


const categoryList = [
    {
        name: "Running",
        imgUrl: "Group-6.png",
    },
    {
        name: "Tennis",
        imgUrl: "Group-7.png",
    },
    {
        name: "BasketBall",
        imgUrl: "Group-8.png",
    },
    {
        name: "Football",
        imgUrl: "Group-9.png",
    },
    {
        name: "Badminton",
        imgUrl: "Group-10.png",
    },
    {
        name: "Swimming",
        imgUrl: "Group-11.png",
    },
]
const CategoriesSection = () => 
    {
        return <section id="category-section" className="container mx-auto">
            <div className="flex justify-between">
            <h2 className="font-bold text-2xl">Browse By Categories</h2>
            <Link href="#" className="flex gap-2 text-primary font-medium">
            <span className="self-center">See All Categories</span>
            <FiArrowRight className="self-center" /> 
        </Link>
    </div>
        <div className="grid grid-cols-6 gap-12 mt-8 pb-10">
        {categoryList.map((category, index) => (
            <div
            key={index}
            className="w-full aspect-square rounded-lg bg-gradient-to-r from-[#f1f1f1] to-[#f7f7f7] flex items-center justify-center"
        >
        <div className="self-center">
            <Image
        src={`/image/categories/${category.imgUrl}`}
        width={100}
        height={100}
        alt={category.name}
        className="mb-[10px]"
        />
            <div className="text-primary font-medium text-xl text-center">
            {category.name}
        </div>
    </div> 
</div>
))}
</div>

</section>;
};

export default CategoriesSection;