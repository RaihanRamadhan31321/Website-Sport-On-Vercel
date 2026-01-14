import Image from "next/image";
import Link from "next/link";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header>
        <div className="flex justify-between gap-10 container mx-auto py-7">
          <Image
          src="/image/logo.svg"
          alt="Sporton Logo"
          width={127}
          height={30}
      />
      <nav className="flex gap-44">
        <Link href="#" className="relative after:content-[''] after:bg-primary after:rounded-full after:h-[3px] after:w-2/3 after:absolute after:top-7 after:right-2">Home</Link>
        <Link href="#">Category</Link>
        <Link href="#">Explore Products</Link>
      </nav>
      <div className="flex gap-10">
        <MdOutlineShoppingBag size={24}/>
        <FaSearch size={24}/>
        <div className="bg-primary rounded-full w-3.5 h-3.5 absolute top-5.3 right-39 text-[10px] text-white text-center">
          3          
        </div>
      </div>
     </div>
    </header>
  );
};

export default Header;
