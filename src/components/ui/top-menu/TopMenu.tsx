'use client'

import { titleFont } from "@/config/fonts";
import { SearchIcon } from "@/icons";
import { CartIcon } from "@/icons/CartIcon";
import { useUIStore } from "@/store";
import Link from "next/link";

const TopMenu = () => {
  const isSideMenuOpen = useUIStore( state => state.isSideMenuOpen );
  const openSideMenu = useUIStore( state => state.openSideMenu );

  const handleMenuClick = () => {
    openSideMenu();
  }

  
  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/* Logo */}
      <div>
        <Link href={"/"}>
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>
          <span className={`${titleFont.className} antialiased font-bold`}>
            {" "}
            | Shop
          </span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={"/category/men"}
        >
          Hombres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={"/category/women"}
        >
          Mujeres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={"/category/kids"}
        >
          Niños
        </Link>
      </div>

      {/* Search Icons */}
      <div className="flex items-center">
        <Link href={"/search"} className="mx-2">
          <SearchIcon className="size-5" />
        </Link>
        <Link href={"/cart"} className="mx-2">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white ">
              3
            </span>
            <CartIcon className="size-5" />
          </div>
        </Link>
        <button 
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          onClick={()=> handleMenuClick()}
        >
          Menu
        </button>
      </div>

    </nav>
  );
};

export default TopMenu;
