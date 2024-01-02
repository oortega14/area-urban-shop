
'use client';

import { CloseIcon, LogOutIcon, PeopleIcon, SearchIcon, UserIcon } from "@/icons"
import { LogInIcon } from "@/icons/LogInIcon";
import { ShirtIcon } from "@/icons/ShirtIcon";
import { TicketIcon } from "@/icons/TicketIcon";
import { useUIStore } from "@/store";
import { clsx } from 'clsx';
import Link from "next/link";

export const Sidebar = () => {

  const isSideMenuOpen = useUIStore( state => state.isSideMenuOpen );
  const closeMenu = useUIStore( state => state.closeSideMenu );

  return (
    <div>
      {/* Background black */}
      {
        isSideMenuOpen && (
          <div
            className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
          />
        )

      }

      {/* Blur */}
      {
        isSideMenuOpen && (
          <div
            className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
            onClick={ closeMenu }
          />
        )

      }

      {/* SideMenu */}
      <nav 
      // TODO: Efecto slide
      className={
        clsx(
          "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen
          }
        ) 
      }>
        <CloseIcon
          className="size-5 absolute top-5 right-5 cursor-pointer"
          onClick={ () => closeMenu()}
        >

        </CloseIcon>

        {/* Input */}
        <div className="relative mt-14">
          <SearchIcon className="size-5 absolute top-2 left-2"/>
          <input 
            type="text" 
            placeholder="buscar"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Menu Options */}
        <Link
          href={'/'}
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <UserIcon className="size-6"/>
          <span className="ml-3 text-xl">Perfil</span>
        </Link>
        <Link
          href={'/'}
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <TicketIcon className="size-6"/>
          <span className="ml-3 text-xl">Ordenes</span>
        </Link>
        <Link
          href={'/'}
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <LogInIcon className="size-6"/>
          <span className="ml-3 text-xl">Ingresar</span>
        </Link>
        <Link
          href={'/'}
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <LogOutIcon className="size-6"/>
          <span className="ml-3 text-xl">Salir</span>
        </Link>
        {/* Line Separator */}
        <div className="w-full h-px bg-gray-200 my-10"/>
        <Link
          href={'/'}
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <ShirtIcon className="size-6"/>
          <span className="ml-3 text-xl">Productos</span>
        </Link>
        <Link
          href={'/'}
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <TicketIcon className="size-6"/>
          <span className="ml-3 text-xl">Ordenes</span>
        </Link>
        <Link
          href={'/'}
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <PeopleIcon className="size-6"/>
          <span className="ml-3 text-xl">Usuarios</span>
        </Link>
      </nav>
    </div>
  )
}
