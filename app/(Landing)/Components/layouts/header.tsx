"use client";

import Image from "next/image";
import Link from "next/link";
import CartPopup from "../ui/cart-popup";
import { useState } from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { useCartStore } from "@/app/hooks/use-cart-store";

const Header = () => {
  const {items} = useCartStore()

  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false)


  return (
    <header className="fixed w-full z-20 bg-white/65 backdrop-blur-[2px]">
      <div className="flex justify-between gap-10 container mx-auto py-7">
        <Link href="/">
          <Image
          src="/image/logo.svg"
          alt="Sporton Logo"
          width={127}
          height={30}
        />
        </Link>
        <nav className="flex gap-44">
          <Link href="#" className="relative after:content-[''] after:bg-primary after:rounded-full after:h-[3px] after:w-2/3 after:absolute after:top-7 after:right-2">Home</Link>
          <Link href="#">Category</Link>
          <Link href="#">Explore Products</Link>
        </nav>
        <div className="relative flex gap-10">
          <FiSearch size={24} />
          <button className="relative cursor-pointer" onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}
            >
          <FiShoppingBag size={24} />
          {items.length ?(
              <div className="bg-primary rounded-full w-3.5 h-3.5 absolute top-1 -right-1 text-[10px] text-white text-center">
              {items.length}
          </div>
          ): (
            <></>
          )}
        </button>
        {isCartPopupOpen && <CartPopup />}
      </div>
    </div>
    </header>
  );
};

export default Header;
