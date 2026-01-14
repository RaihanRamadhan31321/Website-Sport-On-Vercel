import HeroSection from "./Components/Home/hero";
import CategoriesSection from "./Components/Home/categories";
import ProductsSection from "./Components/Home/products";

export default function Home() {
  return (
    <main className="text-white">
      <h1>Website Sport</h1>
      <HeroSection />
      <CategoriesSection />
      <ProductsSection />
    </main>
  );
}
