import HeroSection from "./Components/Home/hero";
import CategoriesSection from "./Components/Home/categories";
import ProductsSection from "./Components/Home/products";
import { getAllCategories } from "../services/category.sevices";
import { getAllProducts } from "../services/product.service";


export default async function Home() {
  const [categories, products] = await Promise.all([
      getAllCategories(),
      getAllProducts(),
  ])


  return (
    <main>
      <HeroSection />
      <CategoriesSection categories={categories}/>
      <ProductsSection products={products}/>
    </main>
  );
}
